---
title: One-page migration plan
sidebar_label: Migration plan
description: One row per asset with an owner, an applicable timeline, and a subsequent-review date.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this plan when a migration lead is coordinating many assets across the organisation. [Plan the migration](/migration-practices/plan/) explains how to fill it, including which authority timelines apply and the four separate dates for each asset.

## Minimum fields

asset, owner, why it is included, applicable timeline, authority, milestone, supplier release, testing, production deployment, end of support, dependency, next action, subsequent review

Record `unknown` in any cell you cannot verify yet. Keep the four dates separate: a supplier's release is not your testing, your production deployment is not the supplier's release, and end of support is the date security fixes stop for the release you run now (see [Plan the migration](/migration-practices/plan/)). List every dependency inside the `dependency` cell separated by a semicolon rather than giving a shared component its own system row, separate multiple timelines or sources with a semicolon, and keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| asset | owner | why it is included | applicable timeline | authority | milestone | supplier release | testing | production deployment | end of support | dependency | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | product engineering lead | designs must remain confidential for 15 years | UK NCSC target dates | UK NCSC, published and reviewed 20 March 2025 | carry out highest-priority migration activities by 2031; complete migration by 2035 | 2026-10-01 | 2026-10-21 (staging pilot passed) | unknown | unknown | fictional supplier's Workspace 4.2 release | complete production interoperability checks; track signature support separately | 2026-12-01 |
| Firmware verifier for product sensor | product security lead | verifier cannot accept a new trust anchor after shipment | UK NCSC target dates | UK NCSC, published and reviewed 20 March 2025 | include the long-lived hardware root in the initial plan by 2028; carry out highest-priority migration activities by 2031 | unknown | unknown | unknown | unknown | boot ROM; production design freeze on 2027-06-30 (fictional) | obtain a supported signature and trust-root option before production design freeze | 2026-12-01 |
| Office laptops | IT lead | commodity platforms receive supplier updates | UK NCSC target dates; supplier-update path | UK NCSC, published and reviewed 20 March 2025 | track supplier delivery and include the fleet in the 2035 completion view | supplier-managed | not applicable (supplier-update path) | supplier-managed | unknown | browser and operating-system suppliers | confirm support status and record installed versions; route exceptions for review | 2026-12-01 |

## Blank template

| asset | owner | why it is included | applicable timeline | authority | milestone | supplier release | testing | production deployment | end of support | dependency | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [migration-plan.csv](/downloads/migration-plan.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Organisation-wide route](/routes/organisation-wide/)
- [Decide whether to act](/migration-practices/diagnose/)
- [Evidence record](/resources/evidence-record/)
