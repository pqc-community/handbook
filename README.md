# PQC Handbook

**A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding.**

This repository is the site source for the public [PQC Handbook](https://pqchandbook.com): a Docusaurus 3 static site. It builds and runs locally. **This repository does not contain a deploy workflow** — no GitHub Actions, GitHub Pages automation, or DNS setup for the domain.

## Requirements

- [Node.js](https://nodejs.org/) **20** or newer (`package.json` sets `engines.node` to `>=20.0`)

## Install and run

```bash
npm install
npm start
```

The dev server opens the site locally. Handbook pages live under `docs/` and are served from the site root (for example, `/migration-practices/inventory/`).

## Verification

Before you merge or publish a build, run:

```bash
npm run typecheck
npm run test:sources
npm run check:sources
npm run build
```

| Command | What it does |
| --- | --- |
| `npm run typecheck` | TypeScript check |
| `npm run test:sources` | Unit tests for the sources checker |
| `npm run check:sources` | Ensures every `docs/**/*.md` page has `## Sources` with at least one `http` link before the next heading |
| `npm run build` | Production static build (broken links and anchors fail the build) |

Optional: `npm run serve` serves the build output after `npm run build`.

## Maintainer notes

Read these before editing content or structure:

| File | Topic |
| --- | --- |
| [purpose-and-positioning.md](./purpose-and-positioning.md) | Reader, four questions, layers, non-goals |
| [navigation-structure.md](./navigation-structure.md) | Book map, Start here seats, slugs |
| [style-guide.md](./style-guide.md) | Page shapes, citations, sourcing gate, spelling |
| [brand-guidelines.md](./brand-guidelines.md) | Name, domain, palette, type, logo |

The full design spec lives in [planning/superpowers/specs/2026-11-09-pqc-handbook-design.md](./planning/superpowers/specs/2026-11-09-pqc-handbook-design.md). That directory is outside `docs/`, so the spec is not a public site page.

## Local reference material

The `.ai-helper-files/` directory holds local research notes and filed source extracts used while writing pages. It is listed in `.gitignore` and is **not** part of the public repository. Do not cite paths under `.ai-helper-files/` as public sources on handbook pages; use the citation and sourcing rules in [style-guide.md](./style-guide.md).

## Repository layout (short)

| Path | Role |
| --- | --- |
| `docs/` | Public handbook Markdown |
| `src/pages/` | Homepage (`index.tsx`) |
| `sidebars.ts` | Five hand-written sidebars |
| `docusaurus.config.ts` | Site URL, navbar, footer, link policy |
| `scripts/check-sources.mjs` | Sources section checker |

Public handbook: [https://pqchandbook.com](https://pqchandbook.com). Source: [https://github.com/pqc-community/handbook](https://github.com/pqc-community/handbook).
