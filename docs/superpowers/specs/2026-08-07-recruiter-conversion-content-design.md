# Recruiter-first content and conversion design

## Objective

Turn the portfolio from a comprehensive technical dossier into a persuasive hiring page for recruiters and startup founders. A visitor should understand who Guilherme is, what outcomes he creates, why his work is credible, and how to start a conversation without reading a résumé-length page.

Primary conversion: reach the contact form for an interview or professional opportunity.

Secondary conversions: download the résumé and inspect selected projects or repositories.

## Editorial strategy

Use a conversion-first structure rather than shortening every paragraph equally. Preserve quantified outcomes, recognizable companies, representative projects, employment history, and personal fit. Remove repetition between capabilities, cases, technologies, process, and about content.

Target approximately 1,200–1,350 words of main-section copy in Portuguese, down from approximately 2,152. English and Spanish must carry the same information and hierarchy rather than literal word-for-word translations.

Copy rules:

- Lead with the outcome or hiring value.
- Keep section introductions to one short sentence.
- Keep card descriptions to one or two short sentences.
- Prefer concrete nouns and verbs over abstract claims.
- Keep implementation details only when they prove a relevant capability.
- Move exhaustive tooling and process detail to the résumé, project repositories, and visible technology chips.
- Do not invent metrics, responsibilities, clients, or technologies.

## Final page flow

1. **Hero:** concise positioning, availability, contact-first primary action, résumé secondary action.
2. **Impact:** four high-signal metrics covering tenure, commercial outcome, AI improvement, and time saved.
3. **Capabilities:** three hiring-oriented offers — backend/product engineering, applied AI and automation, and full-stack delivery.
4. **Cases:** three quantified cases — Spinver, Softplan, and DOJO. Delfos and QuintoAndar remain represented in experience.
5. **Projects:** keep four live products, two selected repositories, and the creative lab, but shorten descriptions and technical proof.
6. **Experience:** keep the complete five-company chronology with one concise summary per role.
7. **About:** two short paragraphs plus essential location, language, education, and availability facts.
8. **Contact:** frame the form explicitly around interviews, roles, and relevant startup/product conversations.

Remove the standalone Technologies and Process sections. Their strongest information already appears in capability chips, case stacks, repository proof, and experience summaries.

The primary navigation becomes: Home, Results, Projects, Experience, About, Contact. Capabilities and cases remain in the page flow but do not compete for scarce header space.

## Conversion system

Keep the persistent header contact action and change the hero primary action to target `#contact`.

Add a reusable internal conversion band after:

- Impact: invite the visitor to discuss a role or product challenge.
- Projects: convert demonstrated execution into a conversation.
- Experience: invite recruiters and founders to check fit directly.

Each band contains one short sentence and one action. All actions point to `#contact`, preserve keyboard accessibility, and emit `contact_cta_clicked` with a stable source identifier (`hero`, `impact`, `projects`, or `experience`).

The action language must be specific to hiring, such as “Conversar sobre uma oportunidade”, rather than generic language such as “Saiba mais”.

## Content model and components

- Add `ConversionCtaContent` and localized conversion entries to `SiteContent`.
- Add `contact_cta_clicked` to the analytics event contract and allow an optional CTA source in its payload.
- Create one `ConversionCta` component used by the three page placements.
- Pass `locale` into sections that emit CTA analytics.
- Remove technology/process content types, imports, renderers, rail entries, and unused CSS.
- Preserve the existing contact endpoint and form behavior.

## Responsive and visual behavior

Conversion bands should read as editorial pauses, not new full-height sections. Use a compact horizontal layout on desktop and a stacked layout on mobile. The existing 80vw shell, typography scale, carousel behavior, motion preferences, and dark/light section rhythm remain unchanged.

## Quality and regression coverage

Tests must verify:

- exactly four metrics, three capabilities, three professional cases, four live products, and five experience items per locale;
- Technologies and Process no longer render as standalone sections;
- the final navigation contains six items in the approved order;
- the three inline conversion actions plus hero action point to `#contact`;
- CTA clicks emit the localized analytics event and source;
- each locale stays below the agreed word budget while retaining approved projects and banned-string protections;
- all existing accessibility, carousel, contact, locale, metadata, lint, type, Pages Function, and production build checks continue to pass.

## Out of scope

- Changing factual employment dates or metrics.
- Removing projects or employment history.
- Redesigning the contact form or backend delivery.
- Adding a CMS, A/B testing platform, or third-party analytics provider.
- Deploying or pushing the branch.
