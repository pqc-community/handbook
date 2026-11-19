# PQC Handbook - Navigation Structure

Public navigation, URL routing, and sidebar structure for `https://pqchandbook.com`. Keep this map aligned with `docusaurus.config.ts`, `sidebars.ts`, `src/pages/index.tsx`, and the Markdown tree under `docs/`.

## Route and URL Policy

Docs live under `docs/` with `routeBasePath: '/'` and `trailingSlash: true`, so folder paths under `docs/` map directly to root URLs ending in `/` (for example, `docs/migration-practices/inventory.md` serves `/migration-practices/inventory/`).

- Canonical base URL: `https://pqchandbook.com/`
- Never prefix public routes with `/docs/`.
- `onBrokenLinks`, `onBrokenAnchors`, and `onBrokenMarkdownLinks` are all set to `'throw'` in `docusaurus.config.ts`.
- Every Markdown file under `docs/` declares `displayed_sidebar` matching the sidebar that owns it in `sidebars.ts`.
- Downloadable CSV templates live in `static/downloads/*.csv` and resolve at `/downloads/*.csv`.
- Retired paths are not redirected; every live path appears in the sitemap below.

## Top-Level Navigation and Sidebars

The navbar stays restrained: the logo and **PQC Handbook** title link to `/`, five doc sidebars appear on the left, and local search, colour-mode toggle, and GitHub appear on the right:

1. **Learn the basics** (`learnSidebar`)
2. **Standards** (`standardsSidebar`)
3. **Migration practices** (`migrationPracticesSidebar`)
4. **Algorithm and protocol options** (`algorithmProtocolOptionsSidebar`)
5. **Resources** (`resourcesSidebar`)

**Routes** (`routesSidebar`) are intentionally omitted from the top navbar. Visitors enter a route from the homepage situation chooser or from the **Routes** column in the footer, and `routesSidebar` keeps all six routes visible once inside `/routes/*`.

`sidebars.ts` defines six hand-written sidebars: `learnSidebar`, `routesSidebar`, `standardsSidebar`, `migrationPracticesSidebar`, `algorithmProtocolOptionsSidebar`, and `resourcesSidebar`.

## Site Model

```text
Homepage Situation Chooser (/)
  ├── Six Situation Routes (/routes/*) ──► Migration Practices, Options, Standards, and Work Products
  └── Learn the Basics (/learn/*)      ──► Background lessons + optional Go deeper explainers
```

- **Homepage (`/`)**: Routes organisations by operational situation rather than cryptographic primitive.
- **Routes (`/routes/*`)**: Short, ordered reading lists tailored to one situation, naming the work-product output and the first onward step.
- **Learn the basics (`/learn/*`)**: Conceptual background before planning begins, kept separate from migration procedures.
- **Reference sections (`/standards/`, `/migration-practices/`, `/algorithm-protocol-options/`, `/resources/`)**: Reusable procedures, option trade-offs, authoritative standard/directive/guide summaries, and CSV-backed record templates shared across routes.

## Complete Book Map

```text
/

/learn/
/learn/public-key-cryptography/
/learn/quantum-threat/
/learn/what-post-quantum-means/
/learn/algorithms/
/learn/in-real-systems/
/learn/standardisation/
/learn/timelines/
/learn/explainers/keys/
/learn/explainers/quantum-computers/
/learn/explainers/kem/
/learn/explainers/tls/
/learn/explainers/timelines/

/routes/vendor-managed-software/
/routes/long-lived-confidentiality/
/routes/hard-to-change-systems/
/routes/organisation-wide/
/routes/ask-a-supplier/
/routes/not-sure/

/standards/
/standards/post-quantum/
/standards/post-quantum/fips-203/
/standards/post-quantum/sp-800-227/
/standards/post-quantum/fips-204/
/standards/post-quantum/fips-205/
/standards/post-quantum/sp-800-208/
/standards/post-quantum/nist-ir-8528/
/standards/post-quantum/nist-ir-8545/
/standards/transition-and-key-management/
/standards/transition-and-key-management/nist-ir-8547/
/standards/transition-and-key-management/sp-800-131a/
/standards/transition-and-key-management/sp-800-57-part-1/
/standards/classical-public-key/
/standards/classical-public-key/fips-186-5/
/standards/classical-public-key/sp-800-186/
/standards/classical-public-key/sp-800-56a/
/standards/classical-public-key/sp-800-56b/
/standards/symmetric-and-primitives/
/standards/symmetric-and-primitives/fips-197/
/standards/symmetric-and-primitives/sp-800-232/
/standards/symmetric-and-primitives/fips-180-4/
/standards/symmetric-and-primitives/fips-202/
/standards/symmetric-and-primitives/sp-800-185/
/standards/symmetric-and-primitives/fips-198-1/
/standards/symmetric-and-primitives/sp-800-56c/
/standards/symmetric-and-primitives/sp-800-108/
/standards/symmetric-and-primitives/sp-800-132/
/standards/symmetric-and-primitives/sp-800-90a/
/standards/modules-protocols-identity/
/standards/modules-protocols-identity/fips-140-3/
/standards/modules-protocols-identity/sp-800-52/
/standards/modules-protocols-identity/fips-201-3/
/standards/us-federal-directives/
/standards/us-federal-directives/nsm-10/
/standards/us-federal-directives/eo-14306/
/standards/us-federal-directives/eo-14412/
/standards/us-federal-directives/omb-m-26-15/
/standards/migration-guides/
/standards/migration-guides/dutch-pqc-handbook/
/standards/migration-guides/uk-ncsc-pqc-guidance/
/standards/migration-guides/eu-nis-roadmap/
/standards/migration-guides/asd-planning/
/standards/migration-guides/canadian-cfdir-guide/
/standards/migration-guides/etsi-tr-103-619/
/standards/migration-guides/etsi-tr-104-016/
/standards/migration-guides/pqcc-roadmap/
/standards/migration-guides/cisa-nsa-nist-fact-sheet/
/standards/migration-guides/nccoe-migration-to-pqc/
/standards/migration-guides/vendor-questions/

/migration-practices/
/migration-practices/diagnose/
/migration-practices/commodity-software/
/migration-practices/inventory/
/migration-practices/priority/
/migration-practices/release-dates/
/migration-practices/vendor-plan/
/migration-practices/implementation/
/migration-practices/changing-algorithms-again/
/migration-practices/subsequent-review/

/algorithm-protocol-options/
/algorithm-protocol-options/choosing/
/algorithm-protocol-options/key-establishment/
/algorithm-protocol-options/signatures/
/algorithm-protocol-options/long-lived-roots/

/resources/
/resources/inventory-record/
/resources/priority-record/
/resources/vendor-response-log/
/resources/migration-plan/
/resources/change-record/
/resources/evidence-record/
/resources/review-log/
/resources/protect-this-first/
/resources/glossary/
/resources/curated-references/
/resources/editorial-policy/
```

Static CSV downloads served alongside `/resources/*`:

- `/downloads/inventory-record.csv`
- `/downloads/priority-record.csv`
- `/downloads/vendor-response-log.csv`
- `/downloads/migration-plan.csv`
- `/downloads/change-record.csv`
- `/downloads/evidence-record.csv`
- `/downloads/review-log.csv`

## Route Journeys

Each route page states who the route serves, any exception check, an ordered reading sequence using canonical slugs, the resulting work product, and one sentence naming the first onward step. Coordinating across multiple assets uses `/routes/organisation-wide/` for programme governance while still following the matching asset route per system.

| Route | Path | Situation | Reading order | Work-product output |
| --- | --- | --- | --- | --- |
| Vendor-managed software | `/routes/vendor-managed-software/` | Standard supplier-updated browsers, operating systems, and mobile devices | Commodity software, Timelines, Vendor response log, Subsequent review | Vendor response log plus a note confirming all five exception checks hold (or the route moved to) |
| Long-lived confidentiality | `/routes/long-lived-confidentiality/` | Data with a multi-year confidentiality period | Diagnose, Inventory, Inventory record, Priority, Priority record, Key establishment, Timelines | Priority record for assets with a long data confidentiality period |
| Hard to change | `/routes/hard-to-change-systems/` | Bespoke products, embedded devices, or systems costly to update later | Inventory, Release dates, Long-lived roots (if non-updatable verifier), Signatures (if choosing signatures), Vendor plan, Implementation, Change record, Vendor response log | Vendor-release, test, production-deployment, and end-of-support dates plus a closed or blocked change record |
| Organisation-wide | `/routes/organisation-wide/` | Coordinated migration across an estate | Migration plan, Diagnose, Inventory, Priority, Evidence record, Subsequent review | One-page migration plan with an owner per asset and a subsequent-review date |
| Ask a supplier | `/routes/ask-a-supplier/` | Procurement and supplier readiness follow-up across situations | Vendor plan, Vendor response log | Decision-ready row in the vendor response log per product, version, and cryptographic job |
| Not sure | `/routes/not-sure/` | Unclassified estate or missing facts | Classification checks routing into one of the four situation routes | Named route, or a list of open unknowns with the owner who will close them |

## Learn Sequence and Explainer Isolation

`/learn/` lists an eight-step background sequence: seven lessons on `learnSidebar` (`public-key-cryptography`, `quantum-threat`, `what-post-quantum-means`, `algorithms`, `in-real-systems`, `standardisation`, `timelines`) followed by `/resources/glossary/` as step 8 (`glossary` remains on `resourcesSidebar` only).

Below the numbered sequence, `/learn/` and `learnSidebar` expose an open (`collapsed: false`) **Go deeper** category with five optional explainers in fixed order:

1. `/learn/explainers/keys/`
2. `/learn/explainers/quantum-computers/`
3. `/learn/explainers/kem/`
4. `/learn/explainers/tls/`
5. `/learn/explainers/timelines/`

Isolation rules:

- Links to `/learn/explainers/*` appear only on `/learn/`, the paired short lessons (`public-key-cryptography`, `quantum-threat`, `algorithms`, `in-real-systems`, `timelines`), and the five explainers themselves. Practice, route, option, standard, and resource pages do not link to `/learn/explainers/*`.
- Learn lessons are never inserted into `/routes/*` reading orders.

## Standards Hierarchy

`standardsSidebar` groups reference summaries under `/standards/` into seven categories, each with its own index document (`link: {type: 'doc', id: '...'}`):

1. **Post-quantum cryptography** (`collapsed: false`) — nested subcategories for *Key establishment and KEMs*, *Digital signatures*, and *Standardisation status reports*.
2. **Transition and key management** (`collapsed: true`) — NIST IR 8547, SP 800-131A, SP 800-57 Part 1.
3. **Classical public-key (transitioning)** (`collapsed: true`) — nested subcategories for *Signatures and curves* and *Pair-wise key establishment*.
4. **Symmetric, hash, and KDF primitives** (`collapsed: true`) — nested subcategories for *Encryption and lightweight cryptography*, *Hash functions, XOFs, and MACs*, and *Key derivation and random bit generation*.
5. **Modules, protocols, and identity** (`collapsed: true`) — FIPS 140-3, SP 800-52, FIPS 201-3.
6. **US federal directives** (`collapsed: true`) — NSM-10, EO 14306, EO 14412, OMB M-26-15.
7. **Migration guides** (`collapsed: true`) — nested subcategories for *Programme and strategy guides* and *Discovery, readiness, and supplier guides* (linking external guides such as the Dutch PQC Migration Handbook rather than rewriting them).

## Homepage, Footer, and Search

- **Homepage (`src/pages/index.tsx`)**: Hero promise and limit; six situation cards (`/routes/*`) with **Learn the basics** (`/learn/`) visually apart below them; single-row clinic preview linking to `/resources/protect-this-first/`; and four reference section cards (`/standards/`, `/migration-practices/`, `/algorithm-protocol-options/`, `/resources/`). No hero button points to a single practice hub.
- **Footer (`docusaurus.config.ts`)**: Three columns — **Routes** (all six `/routes/*` paths), **Learn** (`/learn/`), and **Reference** (`/standards/`, `/migration-practices/`, `/algorithm-protocol-options/`, `/resources/`).
- **Search and indexing**: Navbar search uses `@easyops-cn/docusaurus-search-local` built at compile time; `sitemap.xml` is generated on build and referenced from `static/robots.txt`.

## Structural Guardrails

- Migration timelines across authorities live on `/learn/timelines/` and `/learn/explainers/timelines/`; audience-specific duties stay attributed and linked to their issuing authority.
- Algorithm and protocol option pages stay at four (`choosing`, `key-establishment`, `signatures`, `long-lived-roots`); individual NIST standards live under `/standards/post-quantum/`.
- `changing-algorithms-again` remains a dedicated practice under `/migration-practices/`, separate from `implementation` and `subsequent-review`.
- Resources stay focused on actionable records, the single worked clinic illustration (`protect-this-first`), `glossary`, `curated-references`, and `editorial-policy`.
