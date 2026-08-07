# Portfolio Editorial Reorganization Design

## Outcome

Reorganize the complete portfolio into a calmer editorial hierarchy without removing, shortening, hiding, or changing approved content. The finished page must feel easier to scan, keep the existing Code -> Product identity, and present one dominant idea at a time.

## Decisions

- Use the editorial-focus approach rather than a bento dashboard or full-screen chapters.
- Keep every approved item visible in the normal page flow; do not add tabs, accordions, or disclosure controls.
- Constrain desktop and tablet content to `min(80vw, 1280px)`.
- On viewports below 768px, use the available width with 20px side gutters instead of applying the 80vw constraint.
- Preserve all three locales, existing section order, links, analytics contracts, accessibility behavior, and the dark-to-light narrative sequence.
- Add no typing dependency. React and Motion already provide the timing, presence, and reduced-motion behavior needed for a small deterministic typewriter.
- Keep the projects carousel manual. Do not add autoplay.

## Global editorial system

The shared container aligns the header, Hero, sections, and footer to the same 80vw desktop shell with a 1280px cap. At ultrawide sizes this prevents long scanning distances; on phones the shell expands to the safe gutters.

Every section follows one readable sequence: eyebrow, title, introduction, primary evidence, then supporting detail. Section headers use a consistent two-column desktop grid with controlled text measures and collapse to one column on smaller viewports. Internal group headings are smaller than section headings and sit immediately above the content they label.

Typography uses a restrained fluid scale:

- Hero heading: `clamp(3rem, 4.8vw, 4.75rem)` with an approximately 11-character measure.
- Section heading: `clamp(2.25rem, 3.5vw, 3.5rem)` with an approximately 16-character measure.
- Group heading: `clamp(1.6rem, 2.3vw, 2.35rem)`.
- Card heading: `clamp(1.25rem, 1.8vw, 1.75rem)`.
- Body copy: 16px to 18px with a maximum readable measure of 60 to 64 characters.
- Metrics: visually strong but capped below the current section-heading scale.

Desktop sections use consistent vertical rhythm, while mobile spacing is reduced enough to keep related content together. Borders, syntax colors, and existing surfaces continue to separate information without introducing new decoration.

## Section reorganization

The Hero retains its copy-and-portrait composition but uses the new shell and type scale. The portrait and identity panel remain secondary to the headline, and the panel stays readable without extending outside the container.

Metrics become a compact evidence grid with reduced numeric scale and height. Capabilities retain all cards but use balanced columns, shorter vertical gaps, and a consistent internal anatomy. Cases become a two-zone editorial row: identity and outcome on the left, problem/decision/impact evidence on the right, with the diagram acting as supporting context rather than a competing third column.

Projects keep the section introduction followed by three clearly separated groups: published products, open source, and creative lab. Experience, technologies, process, about, and contact adopt the same title-to-evidence rhythm, controlled line lengths, balanced columns, and responsive stacking. No content field or card is deleted.

## Preloader typing

The session-only identity editor reveals the existing Python code character by character, including line breaks. A single text cursor follows the current character and blinks only while the overlay is active. Syntax coloring is preserved by rendering typed text through the existing four token groups.

The animation lasts no more than 2.5 seconds, then completes the existing identity-panel morph. Escape, pointer interaction, and the visible skip button still dismiss it immediately. Repeat visits skip it, and `prefers-reduced-motion: reduce` renders the Hero identity directly. The animated editor remains hidden from assistive technology while the overlay exposes a concise accessible label.

## Featured projects carousel

The active product card is centered and dominant. On desktop it occupies approximately 62% to 68% of the carousel width; its immediate neighbors remain partially visible at a smaller scale with reduced opacity. Selecting a neighbor, arrow, pagination dot, or keyboard direction centers that card with a Motion spring or native smooth scrolling. Mobile shows one near-full-width card and a small preview of the next card without applying desktop scaling.

Active state is explicit through `data-active` and `aria-current`. Images remain crisp for the active card and use the existing bounded focus treatment for inactive cards. Every card remains a real secure external link, all copy remains present, and the carousel remains swipeable, keyboard-operable, reduced-motion aware, and free of autoplay.

Centering calculations compare each card center with the track center, replacing the current left-edge comparison. Symmetric track padding allows the first and last cards to reach the centered position without overflowing the page shell.

## Responsive and accessibility behavior

- No horizontal page overflow at 390px, 768px, 1024px, 1440px, or ultrawide widths.
- Heading source order remains eyebrow, heading, introduction.
- All interactive targets remain at least 44px high or wide.
- Focus styles, skip navigation, semantic landmarks, locale behavior, and external-link announcements remain unchanged.
- Reduced motion removes the typewriter, spring scaling, smooth scrolling, and nonessential entrance movement.
- Content remains fully readable when JavaScript motion is unavailable.

## Component boundaries

- `IntroOverlay` owns overlay lifecycle, skip behavior, and the typed-character cursor.
- A focused `useTypewriter` hook owns deterministic character progression and exposes the visible character count.
- `ProjectsSection` owns active-card state and centered navigation.
- `LiveProjectCard` receives active state and exposes it semantically and visually.
- `SectionReveal` retains section framing; the editorial hierarchy is shared primarily through CSS rather than adding content-specific component APIs.
- Global CSS owns the shell and core type scale; section CSS owns evidence layouts and carousel presentation.

## Testing and release gates

Behavioral tests use fake timers to prove that the preloader starts with partial text, advances through characters, and still supports skip, session, and reduced-motion paths. Carousel tests prove active semantics, arrow and keyboard synchronization, and centered scroll calculations. Style contract tests protect the 80vw/1280px desktop shell, mobile gutters, restrained heading caps, centered carousel, and active-card treatment.

The release gate is the complete Vitest suite, ESLint with zero warnings, strict TypeScript, production build, and responsive browser inspection. Visual inspection must check information hierarchy, carousel centering, preloader timing, focus visibility, reduced motion, and horizontal overflow.
