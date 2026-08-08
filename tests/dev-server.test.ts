import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import viteConfig from '../vite.config';

interface DevProcessSpec {
  name: string;
  args: string[];
}

interface DevModule {
  CONTACT_FUNCTIONS_PORT: number;
  createDevProcessSpecs: (viteArguments?: string[]) => DevProcessSpec[];
}

describe('local development server', () => {
  it('starts Pages Functions and proxies API requests from Vite', async () => {
    expect(viteConfig.server?.proxy).toMatchObject({
      '/api': { target: 'http://127.0.0.1:8788' },
    });

    const moduleUrl = pathToFileURL(resolve('scripts/dev.mjs')).href;
    const devModule = await import(/* @vite-ignore */ moduleUrl).catch(() => null) as DevModule | null;

    expect(devModule).not.toBeNull();
    const processSpecs = devModule?.createDevProcessSpecs(['--host', '127.0.0.1']) ?? [];
    expect(processSpecs.map((spec) => spec.name)).toEqual(['functions', 'frontend']);
    expect(processSpecs[0]?.args).toEqual(
      expect.arrayContaining(['pages', 'dev', 'public', '--port', '8788']),
    );
    expect(processSpecs[1]?.args).toEqual(
      expect.arrayContaining(['--host', '127.0.0.1']),
    );
  });
});
