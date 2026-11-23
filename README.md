# PQC Handbook

**Practical, source-backed guidance for planning, prioritising, and evidencing a post-quantum cryptography migration.**

This repository contains the source for [pqchandbook.com](https://pqchandbook.com), a vendor-neutral handbook for security, engineering, product, procurement, and risk teams transitioning public-key cryptography to post-quantum standards without specialist cryptography staff in-house.

The PQC Handbook is built with [Docusaurus 3](https://docusaurus.io/) and is a sister site to the **Secure-by-Design Handbook** and the **Supply Chain Security Handbook**.

## Documentation

### Maintainer Guides

Read these four root documents before changing structure, prose, or styling:

- [Purpose & Positioning](./purpose-and-positioning.md) — Mission, promise and specialist boundary, audience, editorial thesis, sister-site boundaries, and non-goals
- [Navigation Structure](./navigation-structure.md) — URL policy, navbar and six sidebars, complete sitemap, and situation-route journeys
- [Style Guide](./style-guide.md) — Editorial voice, terminology, prose attribution, page patterns, sourcing principles, and review checklist
- [Brand Guidelines](./brand-guidelines.md) — Visual identity, logo assets, colour palette, typography, UI styling, and diagram/illustration guidance

### Handbook Content (`docs/`)

- [Learn the Basics](./docs/learn/index.md) — Plain-English conceptual background and optional explainers
- [Situation Routes](./docs/routes/index.md) (`docs/routes/`) — Two paths (short: vendor-managed software; full: organisation-wide) and the asset tracks the full path sends each asset to, entered from the homepage path chooser
- [Standards](./docs/standards/index.md) — Reference summaries of NIST cryptographic standards, US federal directives, and national/international migration guides
- [Migration Practices](./docs/migration-practices/index.md) — Procedures for diagnosis, commodity software updates, inventory, prioritisation, release dates, supplier plans, pilot implementation, cryptographic agility, and subsequent reviews
- [Technology options](./docs/technology-options/index.md) — Authority-backed option branches for key establishment, digital signatures, and long-lived roots of trust
- [Resources](./docs/resources/index.md) — What a migration lead takes away and uses, in three groups: the [migration records](./docs/resources/records/index.md), nine CSV-backed records in order of use, with how they connect and a zip of every blank CSV; the [Protect this first](./docs/resources/examples/protect-this-first.md) and [Stay on supplier updates](./docs/resources/examples/stay-on-supplier-updates.md) worked examples, for the full and short paths; and the [Glossary](./docs/resources/reference/glossary.md)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **20.0** or newer (`engines.node` in `package.json`)

### Install and Run Locally

```bash
npm install
npm start
```

Starts the local development server with hot reloading. Markdown pages under `docs/` are served directly from the site root with trailing slashes (for example, `/migration-practices/inventory/`).

## Verification and Build

Run the full check suite locally before opening a pull request or pushing to `main`:

```bash
npm test
npm run check
npm run typecheck
npm run build
```

| Command | Description |
| --- | --- |
| `npm test` | Runs the Node tests in `scripts/tests/`: for each area (pages, routes, standards, records, dates), sample cases that prove each rule catches what it should, plus a run of the rule against the whole site |
| `npm run records-zip` | Rebuilds `static/downloads/pqc-handbook-records.zip` from the blank CSVs |
| `npm run check` | Runs every whole-site rule in `scripts/checks/` and lists any violations by rule: page titles and navigation labels, admonition syntax, route pages linking Decide whether to act and a record, decision-note route values, Standards page structure and PDF labels, record CSVs and the records zip, and date formats |
| `npm run typecheck` | Runs TypeScript (`tsc`) against `docusaurus.config.ts`, `sidebars.ts`, and `src/` |
| `npm run build` | Builds static files and the local search index into `build/` (broken links, anchors, and Markdown links fail the build) |
| `npm run serve` | Serves the production `build/` output locally |

## Repository Layout

| Path | Purpose |
| --- | --- |
| `docs/` | Public handbook Markdown content (`routeBasePath: '/'`) |
| `src/pages/` | Homepage: hero, route chooser, three clocks, decision-note excerpt, and reference sections (`index.tsx` and `index.module.css`) |
| `src/css/custom.css` | Infima colour palette, typography, and responsive theme overrides |
| `static/downloads/` | Header-only CSVs for the nine migration records, and `pqc-handbook-records.zip` holding them all (rebuild with `npm run records-zip`) |
| `static/img/` | Shared shield logo, favicon, and `1200 × 630` OpenGraph social card |
| `sidebars.ts` | Six hand-written documentation sidebars |
| `docusaurus.config.ts` | Site configuration, navbar, footer, Mermaid theme, local search, and link policy |
| `scripts/` | `checks/` holds the site rules by area (`index.mjs` lists them all), `lib/` the shared Markdown and test helpers, `tests/` the tests, `check.mjs` the `npm run check` runner, and `records-zip.mjs` the records zip builder |

*(If present locally, `.ai-helper-files/` holds gitignored private drafting material and must never be linked or cited on public pages.)*

## Deployment

Pushes to `main` automatically build and deploy the site to GitHub Pages via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):

- **Live site**: [https://pqchandbook.com](https://pqchandbook.com) (`static/CNAME`)
- **CI steps**: Node 20 setup, `npm ci`, `npm run typecheck`, `npm run build`, and GitHub Pages artifact deployment (run `npm test` and `npm run check` locally before merging)

## Contributing and Reporting Issues

Contributions from migration leads, security practitioners, procurement and risk teams, and standards reviewers are welcome:

- **Report a stale reference or issue**: Open an issue on [github.com/pqc-community/handbook/issues](https://github.com/pqc-community/handbook/issues)
- **Propose content or structural changes**: Follow the sourcing, voice, and navigation rules in [style-guide.md](./style-guide.md) and [navigation-structure.md](./navigation-structure.md), and verify `npm test`, `npm run check`, `npm run typecheck`, and `npm run build` pass locally
