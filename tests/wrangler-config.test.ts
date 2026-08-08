import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

const readConfig = (): Record<string, unknown> =>
  JSON.parse(
    readFileSync(resolve(process.cwd(), 'wrangler.jsonc'), 'utf8'),
  ) as Record<string, unknown>;

describe('Cloudflare Pages Wrangler configuration', () => {
  it('does not include Worker-only observability settings', () => {
    const config = readConfig();

    expect(config).not.toHaveProperty('observability');
  });

  it('declares only the non-secret contact runtime variables', () => {
    const config = readConfig();

    expect(config.vars).toEqual({
      CONTACT_TO_EMAIL: 'guilhermejramires@gmail.com',
      CONTACT_FROM_EMAIL: 'Portfolio <onboarding@resend.dev>',
    });
  });
});
