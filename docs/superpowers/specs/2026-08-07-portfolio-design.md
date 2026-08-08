# Guilherme Ramires Portfolio Design

## Outcome

Build a production-ready, trilingual professional portfolio that presents Guilherme Ramires as a **Python Software Engineer | Full-Stack & AI** and converts qualified visitors into direct contact.

## Inputs and non-negotiables

- `docs/site-content.md` is the only source for publishable facts and copy.
- `docs/DESIGN.md` defines the visual system, Code → Product narrative, motion, accessibility, and responsive behavior.
- The inspected files in `pictures/` provide the real portrait and the four live-product screenshots.
- Internal TODOs, excluded repositories, unconfirmed stacks, invented metrics, testimonials, and client data never enter public dictionaries or rendered HTML.

## Approaches considered

1. One monolithic page with inline strings: fastest to scaffold, but hard to verify, translate, and maintain.
2. A data-driven SPA with typed language dictionaries and focused components: keeps every locale structurally identical, makes prohibited-content tests practical, and preserves the current section while changing language. **Selected.**
3. Three separately generated applications: stronger static localization, but triples markup and interaction maintenance for no benefit at the current scope.

## Architecture

The Vite application renders one semantic React tree. A small language module resolves `/pt`, `/en`, and `/es`, then local storage, browser preference, and the PT fallback. Locale changes update the URL, document language, metadata, canonical/hreflang links when `VITE_SITE_URL` exists, and the JSON-LD payload without reloading the page.

Content lives in `src/content/` under one strict `SiteContent` contract. Reusable components own motion, focus images, external links, section framing, carousel state, language selection, and contact behavior. Section components are grouped by editorial responsibility so no single application file owns the whole experience.

Cloudflare Pages serves the static SPA from `dist/`. `functions/api/contact.ts` is a separately testable Pages Function that validates requests and calls Resend through REST only when all required environment variables exist. Static and Function responses carry their own appropriate security headers.

## Visual and motion system

The visual sequence follows Source → Build → Ship → Human → Connect. Dark technical sections use structural borders, connectors, restrained halos, and a desktop build rail. Projects and the editorial pause move onto the light paper theme; contact returns to void.

The preloader is a session-only overlay over an already-rendered Hero. It types the approved Python identity, morphs toward the Hero identity panel in no more than 2.5 seconds, and can be skipped by Escape, pointer action, or its accessible control. Reduced motion and repeat visits render the final state immediately.

`LazyMotion` with `domAnimation` powers one-time section reveals, short cascades, scroll-linked progress, springs, transforms, and opacity. Focus-image blur is bounded, removed after reveal, and disabled for reduced motion. There are no infinite decorative loops, scroll hijacking, autoplay, or hover-only information.

## Accessibility and resilience

The document contains one `h1`, semantic landmarks, a first-focus skip link, keyboard-complete navigation and carousel controls, visible focus, 44px targets, safe external-link announcements, form error associations, status announcements, and full reduced-motion fallbacks. The Hero remains usable if the preloader or image loading fails.

## Testing strategy

Behavioral tests cover locale resolution/persistence/hash preservation, approved public content, banned internal strings, session preloader behavior, reduced motion, form validation and provider configuration errors, safe external links, and carousel controls. Lint, strict type checking, the full Vitest suite, production build, local Pages preview, keyboard checks, and responsive visual inspection form the release gate.

## Asset decisions

Use `guilherme.png` only for Guilherme and the four inspected screenshots for their matching live projects. Keep originals untouched. Generate deterministic responsive copies where local tooling supports it. Open-source and creative-lab cards use code-native abstract diagrams or typography because no real thumbnails were supplied; they never simulate product screenshots.

