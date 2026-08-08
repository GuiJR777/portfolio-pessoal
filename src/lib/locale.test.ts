import { describe, expect, it } from 'vitest';

import {
  localePath,
  resolveInitialLocale,
  toLocale,
  type Locale,
} from './locale';

describe('locale resolution', () => {
  it('uses a supported locale from the URL before saved and browser preferences', () => {
    expect(
      resolveInitialLocale({
        pathname: '/en',
        savedLocale: 'es-LATAM',
        browserLanguages: ['pt-BR'],
      }),
    ).toBe('en-US');
  });

  it('uses a saved locale and then the browser language', () => {
    expect(
      resolveInitialLocale({
        pathname: '/',
        savedLocale: 'es-LATAM',
        browserLanguages: ['en-US'],
      }),
    ).toBe('es-LATAM');

    expect(
      resolveInitialLocale({
        pathname: '/',
        savedLocale: null,
        browserLanguages: ['es-MX', 'en-US'],
      }),
    ).toBe('es-LATAM');
  });

  it('falls back to Portuguese for unsupported preferences', () => {
    expect(
      resolveInitialLocale({
        pathname: '/unknown',
        savedLocale: 'de-DE',
        browserLanguages: ['de-DE'],
      }),
    ).toBe('pt-BR');
  });

  it.each<[string, Locale | null]>([
    ['pt', 'pt-BR'],
    ['pt-BR', 'pt-BR'],
    ['en-GB', 'en-US'],
    ['es-MX', 'es-LATAM'],
    ['fr-FR', null],
  ])('maps %s to the supported locale %s', (value, expected) => {
    expect(toLocale(value)).toBe(expected);
  });
});

describe('localized URLs', () => {
  it('changes only the language segment and preserves the current hash', () => {
    expect(localePath('en-US', '#cases')).toBe('/en#cases');
    expect(localePath('es-LATAM', '#projects')).toBe('/es#projects');
    expect(localePath('pt-BR', '')).toBe('/pt');
  });
});
