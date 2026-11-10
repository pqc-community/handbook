# Navigation structure

Handbook URLs use a **trailing slash** (for example `/migration-practices/inventory/`). Docs live in `docs/` with `routeBasePath` `/`, so paths match the book map below.

## Navbar and sidebars

The navbar shows the site title (links home), **Learn the basics**, four reference section sidebars, and GitHub:

1. Learn the basics
2. Standards and timelines
3. Migration practices
4. Algorithm and protocol options
5. Resources

**Routes** (`routesSidebar`) are reached from the homepage situation chooser and the footer. They are **not** navbar items. Each page sets `displayed_sidebar` to the sidebar that contains it.

`sidebars.ts` defines six hand-written sidebars: `learnSidebar`, `routesSidebar`, `standardsTimelinesSidebar`, `migrationPracticesSidebar`, `algorithmProtocolOptionsSidebar`, and `resourcesSidebar`.

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

/routes/vendor-managed-software/
/routes/long-lived-confidentiality/
/routes/hard-to-change-systems/
/routes/organisation-wide/
/routes/ask-a-supplier/
/routes/not-sure/

/standards-timelines/
/standards-timelines/dates/
/standards-timelines/migration-guides/

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

- Dates are one page. A duty that belongs to one authority stays a link to that authority.
- Migration guides are one reading list. The Dutch handbook is on that list and is not rewritten.
- Option pages stay at four: choosing, key establishment, signatures, long-lived roots.
- Changing algorithms again is its own practice page.
- The learn landing lists six lessons; the glossary on the resources sidebar is the seventh step in the sequence.

The **slugs in the book map are the ones the site uses** (folder names under `docs/` map to these paths).

## Route pages

Each route page names who it is for, an ordered reading list, the work product output, and one primary next page.

| Route | Path | Role |
| --- | --- | --- |
| Vendor-managed software | `/routes/vendor-managed-software/` | Commodity IT updated by suppliers |
| Long-lived confidentiality | `/routes/long-lived-confidentiality/` | Data with a long confidentiality period |
| Hard to change | `/routes/hard-to-change-systems/` | Products or systems that are costly to change later |
| Organisation-wide | `/routes/organisation-wide/` | Coordinated programme across the estate |
| Ask a supplier | `/routes/ask-a-supplier/` | Procurement and supplier follow-up |
| Not sure | `/routes/not-sure/` | Chooser when the situation is unclear |

Reading-order links on route pages use these same slugs (for example `/migration-practices/diagnose/`, `/standards-timelines/dates/`).

## Homepage (orientation)

The homepage (`src/pages/index.tsx`) is the situation chooser: hero with tagline and limit statement; six situation links; a learn-the-basics link; one clinic row pointing at protect this first; a closing band to options and curated references. There is no hero button to a single practice page and no separate orientation hub.

## Broken links

`docusaurus.config.ts` sets `onBrokenLinks`, `onBrokenAnchors`, and `onBrokenMarkdownLinks` to `throw`. Any new path matches this map and exists under `docs/`.
