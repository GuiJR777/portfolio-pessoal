export const locales = ['pt-BR', 'en-US', 'es-LATAM'] as const;

export type Locale = (typeof locales)[number];

export const localeStorageKey = 'portfolio.locale';

const routeByLocale: Record<Locale, string> = {
  'pt-BR': 'pt',
  'en-US': 'en',
  'es-LATAM': 'es',
};

export function toLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const normalized = value.toLowerCase();
  if (normalized === 'pt' || normalized.startsWith('pt-')) return 'pt-BR';
  if (normalized === 'en' || normalized.startsWith('en-')) return 'en-US';
  if (normalized === 'es' || normalized.startsWith('es-')) return 'es-LATAM';
  return null;
}

export interface LocaleResolutionInput {
  pathname: string;
  savedLocale: string | null;
  browserLanguages: readonly string[];
}

export function resolveInitialLocale({
  pathname,
  savedLocale,
  browserLanguages,
}: LocaleResolutionInput): Locale {
  const routeSegment = pathname.split('/').filter(Boolean)[0];
  const fromRoute = toLocale(routeSegment);
  if (fromRoute) return fromRoute;

  const fromStorage = toLocale(savedLocale);
  if (fromStorage) return fromStorage;

  for (const language of browserLanguages) {
    const fromBrowser = toLocale(language);
    if (fromBrowser) return fromBrowser;
  }

  return 'pt-BR';
}

export function localePath(locale: Locale, hash: string): string {
  const normalizedHash = hash && !hash.startsWith('#') ? `#${hash}` : hash;
  return `/${routeByLocale[locale]}${normalizedHash}`;
}

export function getBrowserLocale(): Locale {
  return resolveInitialLocale({
    pathname: window.location.pathname,
    savedLocale: window.localStorage.getItem(localeStorageKey),
    browserLanguages: navigator.languages,
  });
}

export function setBrowserLocale(locale: Locale): void {
  window.localStorage.setItem(localeStorageKey, locale);
  const nextUrl = localePath(locale, window.location.hash);
  window.history.replaceState(window.history.state, '', nextUrl);
  document.documentElement.lang = locale;
}
