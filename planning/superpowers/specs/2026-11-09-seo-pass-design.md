# SEO pass design

Date: 2026-11-09

A small edit so Google has one URL for each search this handbook can win. The site is not yet registered with Google. Page jobs, section order, sidebar labels, and URLs stay as in the voice pass. This spec wins for the five visitor-facing strings in the table below. That table is the whole edit. [The voice pass](./2026-11-09-voice-pass-design.md) and [the first-edition design](./2026-11-09-pqc-handbook-design.md) are not rewritten.

## Rule

A doc `title` is the visible heading and the search-result title. Docusaurus appends ` | PQC Handbook`. A doc `description` is the search snippet. The homepage is the exception: the `Layout` title is the search-result title, and the hero heading stays **PQC Handbook**.

Change a heading only where two pages compete for the same search. The page that should win keeps its title. The other page takes a heading that names its own job. A snippet changes only where it still repeats the winner's query.

## Strings

| Place | Field | New string |
| --- | --- | --- |
| Homepage, `src/pages/index.tsx` | `Layout` title | Post-quantum cryptography handbook |
| `/start-here/` | `title` | Five responsibilities for a post-quantum migration |
| `/start-here/questions-for-a-vendor/` | `title` | The reading order for vendor questions |
| `/start-here/questions-for-a-vendor/` | `description` | Which pages to read when someone else owns the stack, and where the written answer is stored. |
| `/migration-practices/vendor-plan/` | `description` | How to keep the written post-quantum answer from the organisation that owns the stack. |

Rendered browser titles:

| URL | `<title>` |
| --- | --- |
| `/` | Post-quantum cryptography handbook \| PQC Handbook |
| `/start-here/` | Five responsibilities for a post-quantum migration \| PQC Handbook |
| `/start-here/questions-for-a-vendor/` | The reading order for vendor questions \| PQC Handbook |
| `/migration-practices/vendor-plan/` | The vendor's migration plan \| PQC Handbook |

The homepage hero stays **PQC Handbook**. The homepage description stays: "A practical handbook for organisations that have to migrate public-key cryptography to post-quantum algorithms without a cryptographer to do the deciding."

The Start here description stays: "Five responsibilities for a post-quantum migration, each using the same pages, plus a page for regular adopters whose software picks up the change in an update."

These titles stay, so those pages keep the search:

| Page | Title that stays | Search it owns |
| --- | --- | --- |
| `/migration-practices/where-to-start/` | Where to start a post-quantum migration | Where to start a migration |
| `/resources/vendor-questions/` | Questions to ask a vendor | Questions to ask a vendor |
| `/standards-timelines/dates/` | Post-quantum migration dates | UK, EU, and NIST dates |
| `/start-here/product-release-dates/` | Post-quantum product release dates | Which release carries the change |

`/migration-practices/vendor-plan/` still opens with "Decide what to ask the organisation that owns the stack, and how to keep the answer." That sentence stays. It is the page's job. Only the snippet yields "what to ask" to the question sheet.

## Files

Edit:

- `src/pages/index.tsx`, the `Layout` `title` prop only.
- `docs/start-here/index.md`, the `title` field only.
- `docs/start-here/questions-for-a-vendor.md`, the `title` and `description` fields only.
- `docs/migration-practices/vendor-plan.md`, the `description` field only.

Leave in place:

- Sidebar labels, URLs, footer, navbar, and body prose.
- `docusaurus.config.ts`, including the title template and the sitemap.
- `navigation-structure.md`.
- The voice-pass spec, the first-edition design, and the `.superpowers/sdd/` briefs.
- Robots, the social card, and every other page.

## Verification

The pass is done when all four of these are true.

1. The four files under Edit contain the new strings, and a search of those files finds none of the retired strings: "Post-quantum cryptography migration" on the homepage `Layout` title, "Start a post-quantum migration", "Post-quantum questions for a vendor", and "What to ask the organisation that owns the stack about post-quantum migration, and how to keep the written answer."
2. `npm run check:sources`, `npm run check:voice`, and `npm run typecheck` pass.
3. `npm run build` passes. The built HTML for `/`, `/start-here/`, `/start-here/questions-for-a-vendor/`, and `/migration-practices/vendor-plan/` shows the browser titles in the table above, the two new snippets, and the hero heading **PQC Handbook**.
4. No new test is added.
