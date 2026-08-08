# Guilherme Ramires — portfolio

Trilingual one-page portfolio built with React, Vite, strict TypeScript, custom CSS and Motion. The site follows a continuous `boot → build → ship → connect` narrative, uses the supplied portrait and project captures, and exposes a Cloudflare Pages Function for the contact form.

## Local development

Requirements: Node.js 22+ and npm.

```bash
npm install
npm run dev
```

The default development command starts Vite with hot reload and a local
Cloudflare Pages Functions runtime. Requests to `/api/*` are proxied to the
Functions runtime, so the contact form works with the values in `.dev.vars`.
Use `npm run dev:frontend` only when a frontend-only server is intentional.

Production preview, including generated responsive images and SEO files:

```bash
npm run build
npm run preview
```

To preview the Pages Function locally, copy `.dev.vars.example` to `.dev.vars`, fill its values, then run:

```bash
npm run build
npm run pages:dev
```

## Configuration

Public build variable:

- `VITE_SITE_URL`: final site origin, for example `https://your-domain.example`. When omitted, canonical URL, `og:url`, and `sitemap.xml` are deliberately not generated.

Cloudflare runtime variables/secrets:

- `RESEND_API_KEY`: Resend API key; configure it as a secret.
- `CONTACT_TO_EMAIL`: destination mailbox.
- `CONTACT_FROM_EMAIL`: sender on a domain verified in Resend, such as `Portfolio <contact@your-domain.example>`.

The browser never receives those runtime values. The Function validates and bounds JSON input, rejects unsupported methods/media types, uses a honeypot plus elapsed-time gate, sends plain text through Resend, and returns stable error codes without logging personal form data.

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run pages:check
npm run build
```

## Cloudflare Pages

Use these project settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22+
- Root directory: repository root

Set `VITE_SITE_URL` as a build variable and the three contact values above as runtime variables/secrets. The files under `functions/` are discovered automatically by Pages. No deploy command is executed by this repository setup.

If the Pages project already exists and you intentionally prefer a direct CLI deployment, the explicit command is:

```bash
npx wrangler pages deploy dist --project-name guilherme-ramires-portfolio
```

Run it only after `npm run build`; it is documented here but was not run during implementation.

The static headers and Function route allowlist live in `public/_headers` and `public/_routes.json`. `public/_redirects` records that localized routes use Pages' native SPA fallback; explicit `/index.html` rewrites are avoided because Pages' pretty-URL canonicalization treats them as loops. The Pages Function adds its own response headers because static `_headers` rules do not cover Function responses.

## Structure

- `src/content/`: typed PT-BR, EN-US, and ES-LATAM content dictionaries.
- `src/components/`: layout, sections, motion primitives, and accessible controls.
- `functions/api/contact.ts`: Cloudflare Pages contact endpoint.
- `scripts/`: deterministic image/OG optimization and conditional sitemap generation.
- `public/`: generated media plus Cloudflare static configuration.
- `docs/superpowers/`: implementation specification and plan.
