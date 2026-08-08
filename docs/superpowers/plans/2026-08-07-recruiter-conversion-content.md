# Recruiter-first Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce reading load and turn the portfolio into a focused path toward job interviews and startup conversations.

**Architecture:** Keep localized content in the existing typed dictionaries, remove two redundant page modules, and add one reusable conversion band driven by localized content. Protect the new editorial shape with content-count, word-budget, rendering, link, and analytics tests.

**Tech Stack:** React 19, TypeScript, Vitest, Testing Library, CSS, Motion, Cloudflare Pages.

## Global Constraints

- Preserve every factual metric, employment date, company, project URL, and contact behavior that remains visible.
- Keep four live projects and five experience entries in every locale.
- Keep Portuguese, English, and Spanish structurally equivalent.
- Keep Portuguese main-section content at or below 1,350 words.
- All new conversion actions point to `#contact` and are keyboard-accessible.
- Do not deploy or push.

---

### Task 1: Lock the recruiter-first editorial contract

**Files:**
- Modify: `src/content/content.test.ts`
- Modify: `src/components/sections/Sections.test.tsx`
- Modify: `src/app/App.test.tsx`

**Interfaces:**
- Consumes: `contentByLocale`, `App`.
- Produces: regression expectations for section counts, navigation, word budget, and CTA targets.

- [ ] **Step 1: Write failing content-shape tests**

Add assertions equivalent to:

```ts
expect(content.metrics.items).toHaveLength(4);
expect(content.capabilities.items).toHaveLength(3);
expect(content.cases.items).toHaveLength(3);
expect(content.header.nav.map(({ id }) => id)).toEqual([
  'home', 'impact', 'projects', 'experience', 'about', 'contact',
]);
expect(countWords(mainSections)).toBeLessThanOrEqual(1350);
```

Update the rendered-section contract to exclude Technologies and Process and expect three conversion links in the main content plus the hero contact link.

- [ ] **Step 2: Run tests to verify RED**

Run: `npm test -- --run src/content/content.test.ts src/components/sections/Sections.test.tsx src/app/App.test.tsx`

Expected: failures for six metrics, four capabilities, five cases, old navigation, missing conversion actions, and excess word count.

### Task 2: Implement the conversion component and analytics contract

**Files:**
- Create: `src/components/ui/ConversionCta.tsx`
- Modify: `src/content/types.ts`
- Modify: `src/lib/analytics.ts`
- Modify: `src/components/sections/MetricsSection.tsx`
- Modify: `src/components/sections/ProjectsSection.tsx`
- Modify: `src/components/sections/ExperienceSection.tsx`
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/app/App.tsx`
- Modify: `src/components/sections/Sections.test.tsx`

**Interfaces:**
- Consumes: `ConversionCtaContent`, `Locale`, `trackEvent`.
- Produces: `ConversionCta({ content, locale, source })` and analytics event `contact_cta_clicked` with `cta_source`.

- [ ] **Step 1: Add the failing CTA analytics test**

```ts
await user.click(screen.getByRole('link', { name: ptBR.conversionCtas.impact.label }));
expect(analytics).toHaveBeenCalledWith('contact_cta_clicked', {
  locale: 'pt-BR',
  cta_source: 'impact',
});
```

- [ ] **Step 2: Run the focused test to verify RED**

Run: `npm test -- --run src/components/sections/Sections.test.tsx`

Expected: no localized conversion link exists.

- [ ] **Step 3: Add the minimal reusable implementation**

```tsx
export function ConversionCta({ content, locale, source }: Props) {
  return (
    <aside className="conversion-cta">
      <p>{content.text}</p>
      <a href="#contact" onClick={() => trackEvent('contact_cta_clicked', {
        locale,
        cta_source: source,
      })}>{content.label}<ArrowDownRight aria-hidden="true" /></a>
    </aside>
  );
}
```

Render it after Impact, Projects, and Experience. Change the hero primary target from `#projects` to `#contact` and emit source `hero`.

- [ ] **Step 4: Run the focused tests to verify GREEN**

Run: `npm test -- --run src/components/sections/Sections.test.tsx src/app/App.test.tsx`

Expected: all focused tests pass.

### Task 3: Remove redundant modules and simplify page flow

**Files:**
- Delete: `src/components/sections/TechnologiesSection.tsx`
- Delete: `src/components/sections/ProcessSection.tsx`
- Modify: `src/app/App.tsx`
- Modify: `src/components/layout/BuildRail.tsx`
- Modify: `src/content/types.ts`
- Modify: `src/styles/sections.css`
- Modify: `src/components/sections/Sections.test.tsx`

**Interfaces:**
- Consumes: the final section order in `App`.
- Produces: seven content sections after the hero and an eight-step build rail.

- [ ] **Step 1: Update the rendering test to reject standalone Stack and Process headings**

```ts
expect(screen.queryByRole('heading', { name: previousTechnologyTitle })).not.toBeInTheDocument();
expect(screen.queryByRole('heading', { name: previousProcessTitle })).not.toBeInTheDocument();
```

- [ ] **Step 2: Run the test to verify RED**

Run: `npm test -- --run src/components/sections/Sections.test.tsx`

Expected: both headings are still present.

- [ ] **Step 3: Remove renderers, types, rail entries, and orphan CSS**

Keep the final order: Impact, Capabilities, Cases, Projects, Experience, About, Contact.

- [ ] **Step 4: Run the focused test to verify GREEN**

Run: `npm test -- --run src/components/sections/Sections.test.tsx`

Expected: the final flow renders and removed headings are absent.

### Task 4: Rewrite all localized copy to the agreed budget

**Files:**
- Modify: `src/content/pt-BR.ts`
- Modify: `src/content/en-US.ts`
- Modify: `src/content/es-LATAM.ts`
- Modify: `src/content/content.test.ts`

**Interfaces:**
- Consumes: the existing `SiteContent` type and approved factual source material.
- Produces: structurally equivalent PT, EN, and ES dictionaries.

- [ ] **Step 1: Reduce the evidence sets**

Keep four metrics (`5+`, `+40%`, `35% → 71%`, and weekly time saved), three capabilities, and Spinver/Softplan/DOJO cases. Preserve all live projects and experience entries.

- [ ] **Step 2: Rewrite the copy**

Use one-sentence intros, one- or two-sentence card descriptions, two About paragraphs, shorter project proof, interview-focused contact copy, and localized conversion actions.

- [ ] **Step 3: Run content tests to verify counts and budget**

Run: `npm test -- --run src/content/content.test.ts`

Expected: all locale structure, word-budget, approved-project, and banned-string checks pass.

### Task 5: Style and verify the compact conversion bands

**Files:**
- Modify: `src/styles/sections.css`
- Modify: `src/styles/editorial.test.ts`

**Interfaces:**
- Consumes: `.conversion-cta` markup.
- Produces: compact horizontal desktop and stacked mobile presentation.

- [ ] **Step 1: Add a failing CSS contract test**

Assert `.conversion-cta` is a grid/flex row with constrained padding and that the mobile breakpoint switches to one column.

- [ ] **Step 2: Run the test to verify RED**

Run: `npm test -- --run src/styles/editorial.test.ts`

Expected: conversion-band selectors are missing.

- [ ] **Step 3: Add minimal responsive styles**

Use the existing editorial tokens, a top border, compact spacing, and the standard primary button. Do not introduce a full-height section.

- [ ] **Step 4: Run focused tests to verify GREEN**

Run: `npm test -- --run src/styles/editorial.test.ts src/components/sections/Sections.test.tsx`

Expected: focused tests pass.

### Task 6: Complete verification

**Files:**
- Verify all modified files.

**Interfaces:**
- Consumes: complete recruiter-first page.
- Produces: evidence that the branch is ready for review.

- [ ] **Step 1: Run all automated checks**

```bash
npm test
npm run lint
npm run typecheck
npm run pages:check
npm run build
```

- [ ] **Step 2: Inspect desktop and mobile page flow**

Verify CTA links, section rhythm, header navigation, project carousel, and contact-form arrival at 1440×900 and 390×844.

- [ ] **Step 3: Review the diff and commit intentional files**

Commit message: `feat: focus portfolio content on hiring conversion`
