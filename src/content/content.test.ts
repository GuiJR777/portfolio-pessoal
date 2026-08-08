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

describe('public portfolio content', () => {
  it('contains all six approved, contextual metrics in every locale', () => {
    for (const content of Object.values(contentByLocale)) {
      expect(content.metrics.items).toHaveLength(6);
      expect(content.metrics.items.map(({ value }) => value)).toEqual(
        expect.arrayContaining([
          expect.stringMatching(/^5\+/),
          '+40%',
          '98%',
          '35% → 71%',
          expect.stringMatching(/^4/),
          expect.stringMatching(/^2 (horas|hours)/),
        ]),
      );
      for (const metric of content.metrics.items) {
        expect(metric.company.length).toBeGreaterThan(0);
        expect(metric.context.length).toBeGreaterThan(18);
      }
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
