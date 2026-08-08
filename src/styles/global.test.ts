import { describe, expect, it } from 'vitest';

import stylesheet from './global.css?raw';

describe('responsive portrait frame', () => {
  it('constrains the absolute picture to a square instead of its intrinsic image height', () => {
    expect(stylesheet).toMatch(
      /\.hero__portrait\s*\{[^}]*display:\s*block;[^}]*aspect-ratio:\s*1;/s,
    );
    expect(stylesheet).toMatch(
      /\.hero__portrait img\s*\{[^}]*display:\s*block;[^}]*height:\s*100%;/s,
    );
  });
});
