# Navigation structure

Handbook URLs use a **trailing slash** (for example `/migration-practices/inventory/`). Docs live in `docs/` with `routeBasePath` `/`, so paths match the book map below.

## Navbar and sidebars

The navbar shows the site title (links home), **Learn the basics**, four reference section sidebars, and GitHub:

1. Learn the basics
2. Standards
3. Migration practices
4. Algorithm and protocol options
5. Resources

**Routes** (`routesSidebar`) are reached from the homepage situation chooser and the footer. They are **not** navbar items. Each page sets `displayed_sidebar` to the sidebar that contains it.

`sidebars.ts` defines six hand-written sidebars: `learnSidebar`, `routesSidebar`, `standardsSidebar`, `migrationPracticesSidebar`, `algorithmProtocolOptionsSidebar`, and `resourcesSidebar`.

## Book map

The homepage is the situation chooser. Learn the basics is a separate path. Reference sections hold practices, options, standards, and work products.

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

**Structural rules**

- A migration date is recorded on the timelines deep dive (`/learn/explainers/timelines/`). A duty that belongs to one authority stays a link to that authority.
- Standards, policy directives, and migration guides have reference summaries under `/standards/`. The Dutch handbook is linked there and is not rewritten.
- Option pages stay at four: choosing, key establishment, signatures, long-lived roots.
- Changing algorithms again is its own practice page.
- The learn landing lists seven lessons; the glossary on the resources sidebar is the eighth step in the sequence. Go deeper is an optional list of five explainers on the Learn landing page and in `learnSidebar`. Explainer links (`/learn/explainers/*`) stay on `/learn/` and its lessons and explainers only.
- Learn the basics is not inserted into route reading orders.
- Work-product CSV downloads live under `static/downloads/*.csv` and are served at `/downloads/*.csv`.

The **slugs in the book map are the ones the site uses** (folder names under `docs/` map to these paths).

## Route pages

Each route page names who it is for, an ordered reading list, the work product output, and one primary onward link written as a sentence. Coordinating across many assets uses `/routes/organisation-wide/` alongside the matching asset route for each system.

| Route | Path | Role | Output |
| --- | --- | --- | --- |
| Vendor-managed software | `/routes/vendor-managed-software/` | Commodity IT updated by suppliers | Vendor response log, plus either a note that no exception applies or the named exception route |
| Long-lived confidentiality | `/routes/long-lived-confidentiality/` | Data with a long confidentiality period | Priority record for assets with a long data confidentiality period |
| Hard to change | `/routes/hard-to-change-systems/` | Products or systems that are costly to change later | Release, test, deployment, and end-of-support dates plus a closed or blocked change record |
| Organisation-wide | `/routes/organisation-wide/` | Coordinated programme across the estate | One-page migration plan with an owner per asset and a subsequent-review date |
| Ask a supplier | `/routes/ask-a-supplier/` | Procurement and supplier follow-up | Decision-ready row in the vendor response log per product, version, and cryptographic job |
| Not sure | `/routes/not-sure/` | Chooser when the situation is unclear | Named route, or a list of unknowns with the owner who will close them |

Reading-order links on route pages use these same slugs (for example `/migration-practices/diagnose/`, `/standards/`).

## Homepage (orientation)

The homepage (`src/pages/index.tsx`) is the situation chooser: hero with promise and limit statements; six situation links; a learn-the-basics link set apart below them; one clinic row pointing at `/resources/protect-this-first/`; and four reference section cards (`/standards/`, `/migration-practices/`, `/algorithm-protocol-options/`, `/resources/`). There is no hero button to a single practice page and no separate orientation hub.

## Search, sitemap, and broken links

- Local search is built at compile time with `@easyops-cn/docusaurus-search-local` in the navbar (no external search service).
- `docusaurus.config.ts` generates `sitemap.xml`, and `static/robots.txt` references `https://pqchandbook.com/sitemap.xml`.
- `docusaurus.config.ts` sets `onBrokenLinks`, `onBrokenAnchors`, and `onBrokenMarkdownLinks` to `throw`. Any new path matches this map and exists under `docs/`, with no redirects from retired slugs.
