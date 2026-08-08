# Guilherme Ramires Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver the complete trilingual React portfolio and Cloudflare Pages contact endpoint described by the approved source documents.

**Architecture:** A single Vite SPA consumes strict locale dictionaries through focused layout, section, motion, and UI components. A separately tested Pages Function validates contact requests and integrates with Resend through REST.

**Tech Stack:** React, Vite, strict TypeScript, custom CSS, Motion for React, Vitest, Testing Library, ESLint, Cloudflare Pages Functions, Wrangler.

## Global Constraints

- Publish only copy and facts approved by `docs/site-content.md`.
- Implement the visual and interaction system in `docs/DESIGN.md`.
- Preserve the original files in `pictures/`.
- Do not deploy or change remote infrastructure.
- Every behavior starts with a failing focused test and completes with passing tests.

---

### Task 1: Toolchain and content contract

- [ ] Add pinned React/Vite/TypeScript, lint, test, Motion, icon, font, image, and Wrangler dependencies.
- [ ] Create strict TypeScript, Vite, Vitest, ESLint, and test-environment configuration.
- [ ] Write failing tests for locale resolution, locale route/hash updates, and the approved metric set.
- [ ] Implement `src/content/types.ts`, locale helpers, shared links, and all three complete dictionaries until the tests pass.

### Task 2: Application shell and narrative motion

- [ ] Write failing tests for the session-only preloader, skip behavior, reduced motion, semantic shell, and active locale.
- [ ] Implement providers, metadata synchronization, skip link, Header, Hero, identity preloader/panel, BuildRail, and one-time section reveal primitives.
- [ ] Verify the targeted tests, accessibility queries, and no React warnings.

### Task 3: Proof, capability, case, and experience sections

- [ ] Write failing content/structure tests for the six contextual metrics, five professional cases, timeline, technology groups, and five-step process.
- [ ] Implement source/build/ship sections with asymmetric modules, abstract SVG architecture flows, timeline, technology manifest, and connected process pipeline.
- [ ] Verify section tests and responsive source order.

### Task 4: Published projects and image behavior

- [ ] Copy inspected assets under deterministic public paths and generate optimized variants without touching originals.
- [ ] Write failing tests for secure external links, carousel keyboard/buttons, pagination state, and image fallback behavior.
- [ ] Implement `FocusImage`, the manual native scroll-snap carousel, open-source grid, and creative-lab card.
- [ ] Verify touch/keyboard interaction and real asset mapping.

### Task 5: Contact and analytics

- [ ] Write failing tests for client validation, error summaries, honeypot/timing fields, and unconfigured-provider handling.
- [ ] Implement the localized contact form, real fetch states, always-visible direct channels, and no-op analytics abstraction.
- [ ] Write failing server tests for method, content type, size/format validation, honeypot, missing configuration, provider errors, and stable security headers.
- [ ] Implement `functions/api/contact.ts` with Resend REST and safe plain-text content.

### Task 6: SEO, Pages configuration, and documentation

- [ ] Implement localized metadata, optional canonical/hreflang, Person JSON-LD, favicon, robots, conditional sitemap generation, `_headers`, `_redirects`, `.dev.vars.example`, and `wrangler.jsonc`.
- [ ] Document exact install, development, tests, variables, Pages preview, dashboard deployment settings, and optional direct Wrangler deployment.
- [ ] Confirm no domain, credential, unapproved fact, or fake success state is present.

### Task 7: Release verification

- [ ] Run `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build`; fix every failure.
- [ ] Start Vite and Cloudflare Pages previews and inspect desktop/mobile, all locales, keyboard flow, reduced motion, first/repeat preloader visits, links, console, network, and horizontal overflow.
- [ ] Inspect `dist/` for headers, redirects, favicon, robots, resume, and optimized image assets.
- [ ] Review the full diff for accidental internal copy, secrets, dead code, and unrequested changes.
