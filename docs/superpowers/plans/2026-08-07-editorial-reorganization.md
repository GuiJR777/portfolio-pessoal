# Portfolio Editorial Reorganization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganize the complete portfolio into a restrained editorial layout with a real typed preloader and a centered featured-card carousel, without removing or hiding content.

**Architecture:** Keep the existing React section tree and typed locale dictionaries. Add one isolated typewriter hook, expose carousel active state through the existing link component, and make the broad information-architecture change through shared global and section CSS so all locales receive the same hierarchy.

**Tech Stack:** React 19, strict TypeScript, Motion 13, custom CSS, Vitest, Testing Library, Vite.

## Global Constraints

- Keep every approved item visible in the normal page flow; do not add tabs, accordions, or disclosure controls.
- Constrain desktop and tablet content to `min(80vw, 1280px)`.
- Below 768px, use 20px side gutters rather than 80vw.
- Keep the existing section order, three locales, copy, links, analytics contracts, accessibility behavior, and dark-to-light narrative sequence.
- Add no typing dependency and no carousel autoplay.
- Hero text caps at 76px, section text at 56px, group text at approximately 38px, and card text at approximately 28px.
- Every behavior change begins with a focused failing test.

---

### Task 1: Deterministic typewriter and preloader integration

**Files:**
- Create: `src/hooks/useTypewriter.ts`
- Create: `src/hooks/useTypewriter.test.tsx`
- Modify: `src/components/motion/IntroOverlay.tsx`
- Modify: `src/app/App.test.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: `useTypewriter(text: string, options?: { enabled?: boolean; intervalMs?: number }): { visibleText: string; complete: boolean }`.
- Consumes: the existing session key, reduced-motion preference, overlay skip actions, and Motion presence transition.

- [ ] **Step 1: Write the failing hook test**

```tsx
vi.useFakeTimers();
const { result } = renderHook(() => useTypewriter('abc', { intervalMs: 30 }));
expect(result.current.visibleText).toBe('');
act(() => vi.advanceTimersByTime(30));
expect(result.current.visibleText).toBe('a');
act(() => vi.advanceTimersByTime(60));
expect(result.current).toEqual({ visibleText: 'abc', complete: true });
```

- [ ] **Step 2: Run the focused hook test and verify RED**

Run: `npm.cmd test -- src/hooks/useTypewriter.test.tsx`
Expected: FAIL because `useTypewriter` does not exist.

- [ ] **Step 3: Implement the minimal hook**

```ts
export function useTypewriter(text: string, options: TypewriterOptions = {}) {
  const { enabled = true, intervalMs = 24 } = options;
  const [visibleCharacters, setVisibleCharacters] = useState(enabled ? 0 : text.length);
  useEffect(() => {
    if (!enabled || visibleCharacters >= text.length) return;
    const timer = window.setTimeout(
      () => setVisibleCharacters((count) => Math.min(count + 1, text.length)),
      intervalMs,
    );
    return () => window.clearTimeout(timer);
  }, [enabled, intervalMs, text.length, visibleCharacters]);
  return { visibleText: text.slice(0, visibleCharacters), complete: visibleCharacters >= text.length };
}
```

- [ ] **Step 4: Verify GREEN, then add the failing overlay typing assertion**

Assert that the first-visit overlay does not initially contain the complete Python source, advances after fake timers, exposes a cursor while typing, and still disappears on skip.

- [ ] **Step 5: Render typed tokens and cursor in `IntroOverlay`**

Use one full source string, derive each line from `visibleText`, preserve syntax spans, set a 24ms interval, and close after `max(2100, source.length * 24 + 300)` milliseconds. Keep the animated code `aria-hidden`, overlay label, session behavior, pointer/Escape skip, and reduced-motion bypass.

- [ ] **Step 6: Run the hook and App tests**

Run: `npm.cmd test -- src/hooks/useTypewriter.test.tsx src/app/App.test.tsx`
Expected: PASS with no timer or React warnings.

---

### Task 2: Center-stage project carousel

**Files:**
- Modify: `src/components/ui/ExternalLink.tsx`
- Modify: `src/components/sections/ProjectsSection.tsx`
- Modify: `src/components/sections/Sections.test.tsx`
- Modify: `src/styles/sections.css`

**Interfaces:**
- `ExternalLink` gains optional `ariaCurrent?: React.AriaAttributes['aria-current']` and `dataActive?: boolean` props.
- `getCenteredScrollLeft(track: HTMLElement, card: HTMLElement): number` returns the current scroll position plus the distance between card center and track center.
- `LiveProjectCard` passes `ariaCurrent={active ? 'true' : undefined}` and `dataActive={active}`.

- [ ] **Step 1: Write failing active-state and centering tests**

```tsx
expect(screen.getByRole('link', { name: /Acessar Donateka/ })).toHaveAttribute('aria-current', 'true');
await user.click(screen.getByRole('button', { name: 'Próximo projeto' }));
expect(screen.getByRole('link', { name: /Acessar Ramires Tech/ })).toHaveAttribute('data-active', 'true');
expect(scrollTo).toHaveBeenCalledWith({ left: 240, behavior: 'smooth' });
```

Set deterministic `getBoundingClientRect()` values so the expected left offset proves center-to-center calculation rather than left-edge alignment.

- [ ] **Step 2: Run the carousel test and verify RED**

Run: `npm.cmd test -- src/components/sections/Sections.test.tsx`
Expected: FAIL because cards expose no active semantics and navigation uses left edges.

- [ ] **Step 3: Implement centered navigation and active semantics**

Calculate:

```ts
track.scrollLeft
  + cardRect.left + cardRect.width / 2
  - (trackRect.left + trackRect.width / 2)
```

Use the same center distance in the scroll synchronization reducer. Preserve arrow keys, disabled arrow boundaries, pagination, swipe scrolling, reduced-motion behavior, secure links, and analytics.

- [ ] **Step 4: Implement the editorial carousel CSS**

Use a contained `width: 100%`, symmetric inline track padding, a 64% desktop card basis, centered snap alignment, active scale 1/opacity 1, inactive scale approximately 0.88/opacity approximately 0.58, and transform origin at center. At 640px and below, use a near-full-width basis and remove scale reduction.

- [ ] **Step 5: Run the focused carousel tests**

Run: `npm.cmd test -- src/components/sections/Sections.test.tsx`
Expected: PASS and no secure-link regression.

---

### Task 3: Shared editorial shell and complete section reorganization

**Files:**
- Create: `src/styles/editorial.test.ts`
- Modify: `src/styles/global.css`
- Modify: `src/styles/sections.css`

**Interfaces:**
- The existing `.container` remains the shared shell used by Header, Hero, sections, footer, and company strip.
- The existing `.section-heading`, `.project-group-heading`, and section-specific class names remain the styling hooks; no content or locale APIs change.

- [ ] **Step 1: Add failing CSS contract tests**

```ts
expect(globalStyles).toMatch(/--container-max:\s*80rem/);
expect(globalStyles).toMatch(/--container-width:\s*80vw/);
expect(globalStyles).toMatch(/\.container\s*\{[^}]*min\(var\(--container-width\), var\(--container-max\)\)/s);
expect(globalStyles).toMatch(/\.hero h1\s*\{[^}]*clamp\(3rem, 4\.8vw, 4\.75rem\)/s);
expect(sectionStyles).toMatch(/\.section-heading h2\s*\{[^}]*clamp\(2\.25rem, 3\.5vw, 3\.5rem\)/s);
expect(sectionStyles).toMatch(/@media \(max-width: 767px\)[\s\S]*calc\(100% - 2\.5rem\)/);
```

- [ ] **Step 2: Run the style tests and verify RED**

Run: `npm.cmd test -- src/styles/global.test.ts src/styles/editorial.test.ts`
Expected: FAIL on the missing 80vw shell and restrained scale.

- [ ] **Step 3: Implement the global shell and type tokens**

Add `--container-width: 80vw`, use `width: min(var(--container-width), var(--container-max))` for container and header, and restore `calc(100% - 2.5rem)` under 767px. Apply the exact Hero, section, group, card, body, and metric caps from the design.

- [ ] **Step 4: Reorganize dark evidence sections**

Make metrics compact, capabilities balanced two-up, and cases two-zone with the diagram placed as a quiet bounded visual inside the identity column on wide screens. Preserve every metric, capability, layer, chip, and case.

- [ ] **Step 5: Reorganize light and contact sections**

Align each project group to a smaller two-column header, constrain project/source text, balance timeline rows, technology manifest columns, process cards, About copy/facts, and contact form/channels. Keep all content visible and use one-column stacking at the existing responsive breakpoints.

- [ ] **Step 6: Run style and complete section tests**

Run: `npm.cmd test -- src/styles/global.test.ts src/styles/editorial.test.ts src/components/sections/Sections.test.tsx`
Expected: PASS with all section item counts unchanged.

---

### Task 4: Full release verification

**Files:**
- Review: all files changed by Tasks 1-3

**Interfaces:**
- No new runtime dependency, locale field, content field, route, analytics event, or server contract.

- [ ] **Step 1: Run the entire automated gate**

Run `npm.cmd test`, `npm.cmd run lint`, `npm.cmd run typecheck`, and `npm.cmd run build`. Expected: every command exits 0 with 0 test failures and 0 lint warnings.

- [ ] **Step 2: Inspect the production page responsively**

Start the Vite preview, inspect 390px, 768px, 1024px, and 1440px screenshots, and verify no horizontal page overflow, controlled headings, readable line lengths, centered active project, visible neighbor cards, and complete content.

- [ ] **Step 3: Inspect interaction and accessibility paths**

Verify first/repeat preloader visits, Escape and pointer skip, keyboard carousel navigation, focus visibility, reduced motion, secure project links, and mobile stacking.

- [ ] **Step 4: Review the final diff**

Confirm no secret, approved-copy change, hidden content, autoplay, unrelated refactor, or dependency addition appears in the diff.
