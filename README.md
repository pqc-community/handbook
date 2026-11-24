# PQC Handbook

**Practical, source-backed guidance for planning, prioritising, and evidencing a post-quantum cryptography migration.**

This repository contains the source for [pqchandbook.com](https://pqchandbook.com), a vendor-neutral handbook for security, engineering, product, procurement, and risk teams transitioning public-key cryptography to post-quantum standards without specialist cryptography staff in-house.

The PQC Handbook is built with [Docusaurus 3](https://docusaurus.io/) and is a sister site to the **Secure-by-Design Handbook** and the **Supply Chain Security Handbook**.

## Documentation

### Maintainer Guides

Read these five root documents before changing structure, prose, or styling:

- [Purpose & Positioning](./purpose-and-positioning.md) — Mission, promise and specialist boundary, audience, editorial thesis, sister-site boundaries, and non-goals
- [Navigation Structure](./navigation-structure.md) — URL policy, navbar and five sidebars, complete sitemap, homepage and footer
- [Reader Journey](./reader-journey.md) — How readers are routed from Plan your migration to a first action, the core actions and programme, the records, the rules that keep the journey simple, and why it was chosen
- [Style Guide](./style-guide.md) — Editorial voice, terminology, prose attribution, page patterns, sourcing principles, and review checklist
- [Brand Guidelines](./brand-guidelines.md) — Visual identity, logo assets, colour palette, typography, UI styling, and diagram/illustration guidance

### Handbook Content (`docs/`)

- [Learn the Basics](./docs/learn/index.md) — Plain-English conceptual background and optional explainers
- [Which plan you need](./docs/plan/index.md), [Core actions](./docs/plan/core-actions.md), and [Programme](./docs/plan/programme/index.md) — The reader journey: four questions, the core actions every organisation follows, and the programme with its first moves and practices in three phases (diagnose, order and schedule, execute)
- [Standards](./docs/standards/index.md) — Reference summaries of NIST cryptographic standards, US federal directives, and national/international migration guides
- [Programme practices](./docs/plan/programme/index.md) — Set up, inventory, prioritisation, dates, suppliers, implementation, cryptographic agility, and review, under `docs/plan/programme/`
- [Technology options](./docs/technology-options/index.md) — Authority-backed option branches for key establishment, digital signatures, and long-lived roots of trust
- [Templates](./docs/templates/index.md) — What you fill in and keep: the five [migration records](./docs/templates/records/index.md) with a zip of every blank CSV; the [Stay on supplier updates](./docs/templates/examples/stay-on-supplier-updates.md) and [Protect this first](./docs/templates/examples/protect-this-first.md) worked examples, for the core actions and a full programme; and the [Glossary](./docs/templates/reference/glossary.md)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **20.0** or newer (`engines.node` in `package.json`)

### Install and Run Locally

```bash
npm install
npm start
```

Starts the local development server with hot reloading. Markdown pages under `docs/` are served directly from the site root with trailing slashes (for example, `/plan/programme/inventory/`).

## Verification and Build

Run the full check suite locally before opening a pull request or pushing to `main`. The [GitHub Actions workflow](./.github/workflows/deploy.yml) runs the same four commands on every pull request and on every push to `main`, and deploys to GitHub Pages only when they all pass:

```bash
npm test
npm run check
npm run typecheck
npm run build
```

| Command | Description |
| --- | --- |
| `npm test` | Runs the Node tests in `scripts/tests/`: for each tested area (pages, standards, records, dates, search), sample cases that prove each rule catches what it should, plus a run of the rule against the whole site. The reading rules run only in `npm run check` |
| `npm run records-zip` | Rebuilds `static/downloads/pqc-handbook-records.zip` from the blank CSVs |
| `npm run check` | Runs every whole-site rule in `scripts/checks/` and lists any violations by rule: page titles and navigation labels, search titles and descriptions, URL slugs, admonition syntax, journey-page reading budgets, staccato paragraphs, and retired routing labels, Standards page structure and PDF labels, record CSVs and the records zip, and date formats |
| `npm run metrics` | Reports reading load per section, for the three journey pages, and for any page with a retired routing label (words, internal links per 100 words, backticked terms, longest sentence), using the same measures as the reading check |
| `npm run typecheck` | Runs TypeScript (`tsc`) against `docusaurus.config.ts`, `sidebars.ts`, and `src/` |
| `npm run build` | Builds static files and the local search index into `build/` (broken links, anchors, and Markdown links fail the build) |
| `npm run serve` | Serves the production `build/` output locally |

## Repository Layout

| Path | Purpose |
| --- | --- |
| `docs/` | Public handbook Markdown content (`routeBasePath: '/'`) |
| `src/pages/` | Homepage: hero, two ways in (Learn the basics and Plan your migration), why you might be here, and reference cards (`index.tsx` and `index.module.css`) |
| `src/theme/` | Theme wrappers: `DocItem/Metadata` (a page's optional `search_title` becomes its browser title) the 404 page's wording and links back into the handbook, and `noindex` for the 404 and search pages |
| `src/css/custom.css` | Infima colour palette, typography, and responsive theme overrides |
| `static/downloads/` | Header-only CSVs for the five migration records, and `pqc-handbook-records.zip` holding them all (rebuild with `npm run records-zip`) |
| `static/img/` | Shared shield logo, SVG and PNG favicons, Apple touch icon, and the `1200 × 630` OpenGraph social card (PNG, with its SVG source) |
| `sidebars.ts` | Five hand-written documentation sidebars |
| `docusaurus.config.ts` | Site configuration, navbar, footer, Mermaid theme, local search, and link policy |
| `scripts/` | `checks/` holds the site rules by area (`index.mjs` lists them all), `lib/` the shared Markdown and test helpers, `tests/` the tests, `check.mjs` the `npm run check` runner, `records-zip.mjs` the records zip builder, and `reading-metrics.mjs` the reading-metrics report |

*(If present locally, `.ai-helper-files/` holds gitignored private drafting material and must never be linked or cited on public pages.)*

## Deployment

Pushes to `main` automatically build and deploy the site to GitHub Pages via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):

- **Live site**: [https://pqchandbook.com](https://pqchandbook.com) (`static/CNAME`)
- **CI steps**: Node 24 setup, `npm ci`, `npm test`, `npm run check`, `npm run typecheck`, and `npm run build` on every pull request and push; on a push to `main`, GitHub Pages artifact upload and deployment follow only if every step passed

## Contributing, Security, and Licence

Contributions from migration leads, security practitioners, procurement and risk teams, and standards reviewers are welcome:

- **Report a stale reference or issue**: Open an issue on [github.com/pqc-community/handbook/issues](https://github.com/pqc-community/handbook/issues)
- **Propose content or structural changes**: Follow [CONTRIBUTING.md](./CONTRIBUTING.md), the sourcing, voice, and navigation rules in [style-guide.md](./style-guide.md) and [navigation-structure.md](./navigation-structure.md), and verify `npm test`, `npm run check`, `npm run typecheck`, and `npm run build` pass locally
- **Report a security vulnerability**: Report it privately as described in [SECURITY.md](./SECURITY.md)
- **Licence**: The handbook is licensed under [CC BY-SA 4.0](./LICENSE), the same licence as its sister sites
