import { describe, expect, it } from 'vitest';

import { contentByLocale } from './index';

const bannedPublicStrings = [
  'do not publish',
  'não publicar',
  'no publicar',
  'poc_genai_frontend',
  'Project-UATU',
  'Litorei',
];

const countWords = (value: unknown): number => {
  if (typeof value === 'string') {
    return value.trim().split(/\s+/).filter(Boolean).length;
  }
  if (Array.isArray(value)) {
    return (value as unknown[]).reduce<number>(
      (total, item) => total + countWords(item),
      0,
    );
  }
  if (value && typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).reduce<number>(
      (total, item) => total + countWords(item),
      0,
    );
  }
  return 0;
};

describe('public portfolio content', () => {
  it('keeps the recruiter-first evidence hierarchy concise in every locale', () => {
    for (const content of Object.values(contentByLocale)) {
      expect(content.header.nav.map(({ id }) => id)).toEqual([
        'home',
        'impact',
        'projects',
        'experience',
        'about',
        'contact',
      ]);
      expect(content.metrics.items).toHaveLength(4);
      expect(content.capabilities.items).toHaveLength(3);
      expect(content.cases.items).toHaveLength(3);
      expect(content.projects.live.items).toHaveLength(4);
      expect(content.experience.items).toHaveLength(5);
      expect(content.metrics.items.map(({ value }) => value)).toEqual(
        expect.arrayContaining([
          expect.stringMatching(/^5\+/),
          '+40%',
          '35% → 71%',
          expect.stringMatching(/^4/),
        ]),
      );

      const mainCopy = [
        content.hero,
        content.metrics,
        content.capabilities,
        content.cases,
        content.projects,
        content.experience,
        content.about,
        content.contact,
      ];
      expect(countWords(mainCopy)).toBeLessThanOrEqual(1350);
    }
  });

  it('never exposes internal curation or placeholder copy', () => {
    const publicContent = JSON.stringify(contentByLocale);
    expect(publicContent).not.toMatch(/\b(?:INTERNAL\s+)?TODO(?:\s+INTERNO)?\b/i);
    for (const banned of bannedPublicStrings) {
      expect(publicContent.toLowerCase()).not.toContain(banned.toLowerCase());
    }
  });

  it('contains only the four approved live products in the expected order', () => {
    for (const content of Object.values(contentByLocale)) {
      expect(content.projects.live.items.map(({ slug }) => slug)).toEqual([
        'donateka',
        'ramirestech',
        'fjm-clean',
        'mercadinho-delivery',
      ]);
    }
  });
});
