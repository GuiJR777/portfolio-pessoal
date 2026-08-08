type ProviderFetch = (
  input: RequestInfo | URL,
  init?: RequestInit,
) => Promise<Response>;

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  website: string;
  locale: string;
  startedAt: number;
}

const responseHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
} as const;

function jsonResponse(body: Record<string, unknown>, status: number, extraHeaders?: HeadersInit): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...responseHeaders, ...extraHeaders },
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function boundedString(
  value: unknown,
  minimum: number,
  maximum: number,
): value is string {
  return typeof value === 'string' && value.trim().length >= minimum && value.length <= maximum;
}

function hasControlCharacters(value: string): boolean {
  return Array.from(value).some((character) => character.charCodeAt(0) < 32);
}

function parseContactPayload(value: unknown): ContactPayload | null {
  if (!isRecord(value)) return null;
  const { name, email, company, subject, message, website, locale, startedAt } = value;
  if (!boundedString(name, 2, 100) || hasControlCharacters(name)) return null;
  if (!boundedString(email, 5, 254) || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return null;
  if (typeof company !== 'string' || company.length > 120) return null;
  if (!boundedString(subject, 2, 100) || /[\r\n]/.test(subject)) return null;
  if (!boundedString(message, 20, 4000)) return null;
  if (typeof website !== 'string' || website.length > 200) return null;
  if (locale !== undefined && (typeof locale !== 'string' || locale.length > 16)) return null;
  if (typeof startedAt !== 'number' || !Number.isFinite(startedAt)) return null;
  return {
    name: name.trim(),
    email: email.trim(),
    company: company.trim(),
    subject: subject.trim(),
    message: message.trim(),
    website,
    locale: typeof locale === 'string' && locale ? locale : 'unknown',
    startedAt,
  };
}

function createEmailText(payload: ContactPayload): string {
  return [
    'Nova mensagem enviada pelo portfólio.',
    '',
    `Nome: ${payload.name}`,
    `E-mail: ${payload.email}`,
    `Empresa: ${payload.company || 'Não informada'}`,
    `Assunto: ${payload.subject}`,
    `Idioma: ${payload.locale}`,
    '',
    'Mensagem:',
    payload.message,
  ].join('\n');
}

export async function handleContactRequest(
  request: Request,
  env: Partial<Cloudflare.Env>,
  providerFetch: ProviderFetch = fetch,
): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, code: 'METHOD_NOT_ALLOWED' }, 405, { Allow: 'POST' });
  }
  const contentType = request.headers.get('Content-Type') ?? '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return jsonResponse({ ok: false, code: 'UNSUPPORTED_MEDIA_TYPE' }, 415);
  }
  const declaredSize = Number(request.headers.get('Content-Length') ?? '0');
  if (Number.isFinite(declaredSize) && declaredSize > 16_384) {
    return jsonResponse({ ok: false, code: 'PAYLOAD_TOO_LARGE' }, 413);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({ ok: false, code: 'INVALID_JSON' }, 400);
  }
  if (new TextEncoder().encode(rawBody).byteLength > 16_384) {
    return jsonResponse({ ok: false, code: 'PAYLOAD_TOO_LARGE' }, 413);
  }
  let rawPayload: unknown;
  try {
    rawPayload = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, code: 'INVALID_JSON' }, 400);
  }
  const payload = parseContactPayload(rawPayload);
  if (!payload) return jsonResponse({ ok: false, code: 'VALIDATION_ERROR' }, 422);

  const elapsed = Date.now() - payload.startedAt;
  if (payload.website.trim() || elapsed < 1_500 || elapsed > 86_400_000) {
    return jsonResponse({ ok: true }, 200);
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return jsonResponse({ ok: false, code: 'SERVICE_NOT_CONFIGURED' }, 503);
  }

  try {
    const providerResponse = await providerFetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'guilherme-ramires-portfolio/1.0',
        'Idempotency-Key': crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: payload.email,
        subject: `Portfolio: ${payload.subject}`,
        text: createEmailText(payload),
      }),
    });
    if (!providerResponse.ok) {
      return jsonResponse({ ok: false, code: 'PROVIDER_ERROR' }, 502);
    }
    return jsonResponse({ ok: true }, 200);
  } catch {
    return jsonResponse({ ok: false, code: 'PROVIDER_ERROR' }, 502);
  }
}

export const onRequest: PagesFunction<Cloudflare.Env> = async ({ request, env }) =>
  handleContactRequest(request, env);
