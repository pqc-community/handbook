# Navigation structure

Handbook URLs use a **trailing slash** (for example `/migration-practices/inventory/`). Docs live in `docs/` with `routeBasePath` `/`, so paths match the book map below.

## Navbar and sidebars

The navbar shows the site title (links home), four section sidebars, and GitHub:

1. Standards and timelines
2. Migration practices
3. Algorithm and protocol options
4. Resources

**Start here** has its own sidebar. It is reached from the homepage and the footer. It is **not** a navbar item. Each page sets `displayed_sidebar` to the sidebar that contains it.

`sidebars.ts` defines five hand-written sidebars: `startHereSidebar`, `standardsTimelinesSidebar`, `migrationPracticesSidebar`, `algorithmProtocolOptionsSidebar`, and `resourcesSidebar`.

## Book map

Start here routes into the sections below; it does not add a second set of topics.

```text
/
/start-here/
/start-here/the-migration-plan/
/start-here/product-release-dates/
/start-here/questions-for-a-vendor/
/start-here/evidence-of-the-migration/
/start-here/changing-a-protocol/
/start-here/keep-software-updated/

/standards-timelines/
/standards-timelines/dates/
/standards-timelines/migration-guides/

/migration-practices/
/migration-practices/where-to-start/
/migration-practices/inventory/
/migration-practices/priority/
/migration-practices/vendor-plan/
/migration-practices/changing-algorithms-again/
/migration-practices/next-pass/

/algorithm-protocol-options/
/algorithm-protocol-options/choosing/
/algorithm-protocol-options/key-establishment/
/algorithm-protocol-options/signatures/
/algorithm-protocol-options/long-lived-roots/

/resources/
/resources/inventory-questions/
/resources/prioritisation-checklist/
/resources/vendor-questions/
/resources/protect-this-first/
/resources/glossary/
/resources/curated-references/
```

**Structural rules**

- Dates are one page. A duty that belongs to one authority stays a link to that authority.
- Migration guides are one reading list. The Dutch handbook is on that list and is not rewritten.
- Option pages stay at four: choosing, key establishment, signatures, long-lived roots.
- Changing algorithms again is its own practice page.

The **slugs in the book map and in the Start here table below are the ones the site uses** (folder names under `docs/` map to these paths).

## Start here seats

Each Start here page names that responsibility's decisions, the reading order, the outcome, and a weak answer beside a stronger one.

| Seat | Path | Read in order | Outcome |
| --- | --- | --- | --- |
| The migration plan | `/start-here/the-migration-plan/` | Where to start, inventory, priority, dates, the next pass, inventory questions, prioritisation checklist | An inventory, a priority, and a one-page plan |
| Product release dates | `/start-here/product-release-dates/` | Where to start, dates, priority, signatures, long-lived roots, vendor plan, protect this first | A release date tied to one asset, and a vendor question if someone else owns the stack |
| Questions for a vendor | `/start-here/questions-for-a-vendor/` | Vendor plan, vendor questions, key establishment, signatures, changing algorithms again | Written questions and a tracking sheet |
| Evidence of the migration | `/start-here/evidence-of-the-migration/` | Where to start, inventory, priority, vendor plan, key establishment, signatures | The records that show the inventory, the priority, the vendor answer, and what shipped |
| Changing a protocol | `/start-here/changing-a-protocol/` | Choosing, key establishment, signatures, changing algorithms again, vendor plan | Which job is changing, which option an authority defends, and a way to roll back |
| Keep software updated | `/start-here/keep-software-updated/` | This page, then dates, then inventory questions if the reader is not sure they are a regular adopter | A reason to keep browsers, operating systems, and cloud services updated, and a route into "The migration plan" if the data or the keys are long-lived |

**Keep software updated** is linked from Start here and from Where to start. It is not a homepage role card.

Reading-order links on Start here pages use these same slugs (for example `/migration-practices/where-to-start/`, `/standards-timelines/dates/`).

## Homepage (orientation)

The homepage (`src/pages/index.tsx`) has five regions: hero with tagline and buttons to Where to start and Start here; five role cards in seat order (excluding Keep software updated); one line on how the handbook works; three featured resources; a closing band to options and curated references. Details are in the design spec.

## Broken links

`docusaurus.config.ts` sets `onBrokenLinks`, `onBrokenAnchors`, and `onBrokenMarkdownLinks` to `throw`. Any new path must match this map and exist under `docs/`.
