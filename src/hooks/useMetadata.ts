import { useEffect } from 'react';

import { profileLinks } from '../content/links';
import type { SeoContent } from '../content/types';
import type { Locale } from '../lib/locale';

const routeByLocale: Record<Locale, string> = {
  'pt-BR': 'pt',
  'en-US': 'en',
  'es-LATAM': 'es',
};

const openGraphLocale: Record<Locale, string> = {
  'pt-BR': 'pt_BR',
  'en-US': 'en_US',
  'es-LATAM': 'es_419',
};

function upsertMeta(selector: string, attributes: Record<string, string>): HTMLMetaElement {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  const element = existing ?? document.createElement('meta');
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  element.dataset.portfolioMeta = 'true';
  if (!existing) document.head.append(element);
  return element;
}

function upsertLink(selector: string, attributes: Record<string, string>): HTMLLinkElement {
  const existing = document.head.querySelector<HTMLLinkElement>(selector);
  const element = existing ?? document.createElement('link');
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  element.dataset.portfolioMeta = 'true';
  if (!existing) document.head.append(element);
  return element;
}

function configuredOrigin(): string | null {
  const candidate = import.meta.env.VITE_SITE_URL?.trim();
  if (!candidate) return null;
  try {
    const url = new URL(candidate);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
    return url.origin;
  } catch {
    return null;
  }
}

export function useMetadata(locale: Locale, seo: SeoContent): void {
  useEffect(() => {
    document.title = seo.title;
    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.ogTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.ogDescription });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: openGraphLocale[locale] });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.ogTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.ogDescription });

    const origin = configuredOrigin();
    if (!origin) return;
    const canonical = `${origin}/${routeByLocale[locale]}`;
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: `${origin}/og/portfolio-og.png` });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: `${origin}/og/portfolio-og.png` });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });

    document.head.querySelectorAll('link[rel="alternate"][data-portfolio-meta]').forEach((node) => node.remove());
    const alternatives = [
      ['pt-BR', 'pt'],
      ['en-US', 'en'],
      ['es-419', 'es'],
      ['x-default', 'pt'],
    ] as const;
    alternatives.forEach(([hreflang, route]) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = `${origin}/${route}`;
      link.dataset.portfolioMeta = 'true';
      document.head.append(link);
    });

    const selector = 'script[type="application/ld+json"][data-portfolio-meta]';
    const existingSchema = document.head.querySelector<HTMLScriptElement>(selector);
    const schema = existingSchema ?? document.createElement('script');
    schema.type = 'application/ld+json';
    schema.dataset.portfolioMeta = 'true';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Guilherme Ramires',
      url: canonical,
      image: `${origin}/images/guilherme.png`,
      jobTitle: 'Python Software Engineer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Florianópolis',
        addressRegion: 'SC',
        addressCountry: 'BR',
      },
      sameAs: [profileLinks.linkedin, profileLinks.github],
    });
    if (!existingSchema) document.head.append(schema);
  }, [locale, seo]);
}
