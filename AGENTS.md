# Agent guidance

This repository contains the source for the PQC Handbook, a Docusaurus site. Treat the existing maintainer guides as the source of truth; do not duplicate their full rules here.

## Before making changes

- For changes to handbook content, read [style-guide.md](style-guide.md) and [purpose-and-positioning.md](purpose-and-positioning.md).
- For page placement, URLs, links, or sidebars, read [navigation-structure.md](navigation-structure.md) and check `sidebars.ts` and `docusaurus.config.ts` as needed.
- For how readers are routed (Start here, the baseline, the programme, records, or the homepage path), read [reader-journey.md](reader-journey.md).
- For visual or UI changes, read [brand-guidelines.md](brand-guidelines.md).
- Check nearby pages and existing patterns before adding new content or components.

## Content requirements

- Write for experienced security, engineering, product, procurement, and risk professionals who may not have specialist cryptography staff.
- Keep guidance vendor-neutral, practical, and evidence-led. Attribute dates, obligations, and recommendations to the relevant primary source and its audience; do not present one authority's timeline as universal.
- Keep key establishment, digital signatures, and long-lived verifiers distinct where their migration drivers differ.
- Use British English and the page metadata, sourcing, and linking conventions in the style and navigation guides.
- Never link to or cite `.ai-helper-files/`; it contains private local drafting material, not public sources.

## Implementation and verification

- Docs live under `docs/` and are served from the site root. Keep Markdown metadata and `displayed_sidebar` aligned with the owning sidebar.
- Preserve the documented Node.js 20+ requirement. Use the package scripts rather than ad hoc build commands.
- Before considering a change ready, run the relevant checks. The full local verification sequence is `npm test`, `npm run check`, `npm run typecheck`, and `npm run build` (see [README.md](README.md)).
- Do not claim checks passed unless they were run and passed. If a check cannot be run, state that clearly.
