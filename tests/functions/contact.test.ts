import { describe, expect, it, vi } from 'vitest';

import { handleContactRequest } from '../../functions/api/contact';

const validPayload = {
  name: 'Ana Souza',
  email: 'ana@empresa.com',
  company: 'Empresa',
  subject: 'Oportunidade profissional',
  message: 'Quero conversar sobre uma oportunidade remota para backend Python.',
  website: '',
  startedAt: Date.now() - 3000,
};

function makeRequest(payload: unknown = validPayload, init: RequestInit = {}): Request {
  return new Request('https://portfolio.example/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...init.headers },
    body: JSON.stringify(payload),
    ...init,
  });
}

const configuredEnv = {
  RESEND_API_KEY: 'test-api-key',
  CONTACT_TO_EMAIL: 'guilhermejramires@gmail.com',
  CONTACT_FROM_EMAIL: 'Portfolio <portfolio@example.com>',
};

describe('contact Pages Function', () => {
  it('accepts only POST requests with JSON content', async () => {
    const getResponse = await handleContactRequest(
      new Request('https://portfolio.example/api/contact'),
      configuredEnv,
      vi.fn(),
    );
    expect(getResponse.status).toBe(405);
    expect(getResponse.headers.get('Allow')).toBe('POST');

    const textResponse = await handleContactRequest(
      makeRequest(validPayload, { headers: { 'Content-Type': 'text/plain' } }),
      configuredEnv,
      vi.fn(),
    );
    expect(textResponse.status).toBe(415);

    const oversizedResponse = await handleContactRequest(
      makeRequest({ ...validPayload, ignored: 'x'.repeat(17_000) }),
      configuredEnv,
      vi.fn(),
    );
    expect(oversizedResponse.status).toBe(413);
  });

  it('rejects malformed fields and silently rejects the honeypot', async () => {
    const invalidResponse = await handleContactRequest(
      makeRequest({ ...validPayload, email: 'invalid', message: 'short' }),
      configuredEnv,
      vi.fn(),
    );
    expect(invalidResponse.status).toBe(422);
    await expect(invalidResponse.json()).resolves.toMatchObject({
      ok: false,
      code: 'VALIDATION_ERROR',
    });

    const honeypotResponse = await handleContactRequest(
      makeRequest({ ...validPayload, website: 'https://spam.example' }),
      configuredEnv,
      vi.fn(),
    );
    expect(honeypotResponse.status).toBe(200);
    await expect(honeypotResponse.json()).resolves.toEqual({ ok: true });
  });

  it('returns a real configuration error without calling the provider', async () => {
    const providerFetch = vi.fn();
    const response = await handleContactRequest(makeRequest(), {}, providerFetch);

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toMatchObject({
      ok: false,
      code: 'SERVICE_NOT_CONFIGURED',
    });
    expect(providerFetch).not.toHaveBeenCalled();
  });

  it('sends bounded plain text through Resend and returns stable JSON', async () => {
    const providerFetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: 'email-id' }), { status: 200 }),
    );
    const response = await handleContactRequest(
      makeRequest(),
      configuredEnv,
      providerFetch,
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
    expect(providerFetch).toHaveBeenCalledWith(
      'https://api.resend.com/emails',
      expect.objectContaining({ method: 'POST' }),
    );
    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff');

    const requestInit = providerFetch.mock.calls[0]?.[1] as RequestInit;
    expect(typeof requestInit.body).toBe('string');
    const providerBody = JSON.parse(typeof requestInit.body === 'string' ? requestInit.body : '') as Record<string, unknown>;
    expect(providerBody).toMatchObject({
      from: configuredEnv.CONTACT_FROM_EMAIL,
      to: [configuredEnv.CONTACT_TO_EMAIL],
      reply_to: validPayload.email,
    });
    expect(providerBody).toHaveProperty('text');
    expect(providerBody).not.toHaveProperty('html');
  });

  it('preserves UTF-8 contact data in the Resend request', async () => {
    const unicodePayload = {
      ...validPayload,
      name: 'José da Conceição',
      subject: 'Configuração do portfólio',
      message: 'Olá! Esta mensagem contém acentuação, cedilha e informação útil.',
    };
    const providerFetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: 'email-id' }), { status: 200 }),
    );

    const response = await handleContactRequest(
      makeRequest(unicodePayload),
      configuredEnv,
      providerFetch,
    );

    expect(response.status).toBe(200);
    const requestInit = providerFetch.mock.calls[0]?.[1] as RequestInit;
    expect(new Headers(requestInit.headers).get('Content-Type')).toBe(
      'application/json; charset=utf-8',
    );
    expect(typeof requestInit.body).toBe('string');
    const providerBody = JSON.parse(
      typeof requestInit.body === 'string' ? requestInit.body : '',
    ) as { text: string };
    expect(providerBody.text).toContain('Nome: José da Conceição');
    expect(providerBody.text).toContain('Assunto: Configuração do portfólio');
    expect(providerBody.text).toContain(
      'Olá! Esta mensagem contém acentuação, cedilha e informação útil.',
    );
  });
});
