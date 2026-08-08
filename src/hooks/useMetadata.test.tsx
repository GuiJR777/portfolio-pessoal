import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useMetadata } from './useMetadata';
import { contentByLocale } from '../content';

function MetadataProbe({ locale }: { locale: 'pt-BR' | 'en-US' | 'es-LATAM' }) {
  useMetadata(locale, contentByLocale[locale].seo);
  return null;
}

afterEach(() => {
  vi.unstubAllEnvs();
  document.head.querySelectorAll('[data-portfolio-meta]').forEach((node) => node.remove());
});

describe('localized metadata', () => {
  it('updates description, social tags and language alternatives from a configured origin', () => {
    vi.stubEnv('VITE_SITE_URL', 'https://portfolio.example');
    render(<MetadataProbe locale="en-US" />);

    expect(document.title).toBe(contentByLocale['en-US'].seo.title);
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      contentByLocale['en-US'].seo.description,
    );
    expect(document.querySelector('meta[property="og:locale"]')).toHaveAttribute('content', 'en_US');
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://portfolio.example/en',
    );
    expect(document.querySelectorAll('link[rel="alternate"]')).toHaveLength(4);
    expect(document.querySelector('script[type="application/ld+json"]')?.textContent).toContain(
      'Guilherme Ramires',
    );
  });

  it('does not invent a canonical origin when deployment URL is absent', () => {
    vi.stubEnv('VITE_SITE_URL', '');
    render(<MetadataProbe locale="pt-BR" />);

    expect(document.querySelector('link[rel="canonical"]')).not.toBeInTheDocument();
    expect(document.querySelector('meta[property="og:url"]')).not.toBeInTheDocument();
  });
});
