import { describe, expect, it } from 'vitest';

import globalStyles from './global.css?raw';
import sectionStyles from './sections.css?raw';

describe('editorial layout contract', () => {
  it('uses an 80vw desktop shell with safe mobile gutters', () => {
    expect(globalStyles).toMatch(/--container-width:\s*80vw/);
    expect(globalStyles).toMatch(
      /\.container\s*\{[^}]*width:\s*min\(var\(--container-width\),\s*var\(--container-max\)\)/s,
    );
    expect(globalStyles).toMatch(
      /@media \(max-width: 767px\)[\s\S]*\.container,\s*\.site-header__inner\s*\{[^}]*width:\s*min\(calc\(100% - 2\.5rem\)/s,
    );
  });

  it('caps the hero and section typography at the restrained editorial scale', () => {
    expect(globalStyles).toMatch(
      /\.hero h1\s*\{[^}]*clamp\(3rem,\s*4\.8vw,\s*4\.75rem\)/s,
    );
    expect(sectionStyles).toMatch(
      /\.section-heading h2\s*\{[^}]*clamp\(2\.25rem,\s*3\.5vw,\s*3\.5rem\)/s,
    );
    expect(sectionStyles).toMatch(
      /\.project-group-heading h3\s*\{[^}]*clamp\(1\.6rem,\s*2\.3vw,\s*2\.35rem\)/s,
    );
  });

  it('defines a centered dominant project and a two-zone case layout', () => {
    expect(sectionStyles).toMatch(/\.carousel\s*\{[^}]*width:\s*100%/s);
    expect(sectionStyles).toMatch(
      /\.live-project\s*\{[^}]*flex:\s*0 0 64%[^}]*scroll-snap-align:\s*center/s,
    );
    expect(sectionStyles).toMatch(
      /\.carousel__track::before,\s*\.carousel__track::after\s*\{[^}]*flex:\s*0 0 18%/s,
    );
    expect(sectionStyles).toMatch(
      /\.live-project\[data-active="true"\]\s*\{[^}]*opacity:\s*1[^}]*transform:\s*scale\(1\)/s,
    );
    expect(sectionStyles).toMatch(
      /\.case\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*0\.9fr\)\s*minmax\(0,\s*1\.5fr\)/s,
    );
  });

  it('keeps the featured project card and its navigation within one viewport', () => {
    expect(sectionStyles).toMatch(
      /\.live-project\s*\{[^}]*display:\s*grid[^}]*grid-template-columns:[^}]*height:\s*min\(34rem,\s*calc\(100svh - 9\.5rem\)\)/s,
    );
    expect(sectionStyles).toMatch(
      /\.live-project__image\s*\{[^}]*height:\s*100%[^}]*aspect-ratio:\s*auto/s,
    );
    expect(sectionStyles).toMatch(
      /@media \(max-width: 767px\)[\s\S]*\.live-project\s*\{[^}]*display:\s*block[^}]*height:\s*auto/s,
    );
  });

  it('uses compact responsive conversion bands instead of new full sections', () => {
    expect(sectionStyles).toMatch(
      /\.conversion-cta\s*\{[^}]*display:\s*grid[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s*auto[^}]*padding:\s*1\.25rem 0/s,
    );
    expect(sectionStyles).toMatch(
      /@media \(max-width: 640px\)[\s\S]*\.conversion-cta\s*\{[^}]*grid-template-columns:\s*1fr/s,
    );
  });
});
