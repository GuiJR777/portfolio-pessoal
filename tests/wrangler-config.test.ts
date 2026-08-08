import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

describe('Cloudflare Pages Wrangler configuration', () => {
  it('does not include Worker-only observability settings', () => {
    const config = JSON.parse(
      readFileSync(resolve(process.cwd(), 'wrangler.jsonc'), 'utf8'),
    ) as Record<string, unknown>;

    expect(config).not.toHaveProperty('observability');
  });
});
