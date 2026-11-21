---
title: Migration plan
sidebar_label: Migration plan
description: One row per asset and job, with its place in the order and why, the applicable timeline, the four separate dates, and the next review.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this plan from the moment an inventory exists. Two practices fill it: [Decide what to migrate first](/migration-practices/priority/) fills the order, the reason, and supplier readiness, and [Plan the migration](/migration-practices/plan/) fills the timeline, milestone, and four dates.

## Minimum fields

asset, job, owner, order, reason and source, supplier readiness, timeline and authority, milestone, supplier release, testing, production deployment, end of support, dependencies, next action, subsequent review

Use one row per asset and job, and set `job` to `key establishment`, `signatures`, or `non-updatable verifier`. Combine jobs in one row only when they share every date, owner, and milestone. Record `unknown` in any cell you cannot verify yet.

- **order:** the line's place within its job, such as `first for key establishment`, or `tracked, not ranked (supplier-update path)` for commodity products.
- **reason and source:** the reason in plain words, with the source in brackets (a policy, a supplier letter, or an authority document).
- **supplier readiness:** the judgement from the [vendor response log](/resources/vendor-response-log/) (`complete`, `vague`, `missing`, or `concerning`), or `not asked`.
- **the four dates:** keep them separate. A supplier's release is not your testing, your production deployment is not the supplier's release, and end of support is the date security fixes stop for the release you run now.

List every dependency inside the `dependencies` cell separated by a semicolon, rather than giving a shared component its own row. Separate multiple timelines or sources with a semicolon. Keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| asset | job | owner | order | reason and source | supplier readiness | timeline and authority | milestone | supplier release | testing | production deployment | end of support | dependencies | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | key establishment | product engineering lead | first for key establishment | the designs must remain confidential for 15 years (company retention policy, fictional) | complete | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | carry out highest-priority migration activities by 2031; complete migration by 2035 | 2026-10-01 | 2026-10-21 (staging pilot passed) | unknown | unknown | workspace supplier's Workspace 4.2 release | complete production checks; obtain end of support for Workspace 4.1 | 2026-12-01 |
| Product-design archive in supplier-hosted workspace | signatures | product engineering lead | track with the supplier; no bespoke work yet | the supplier has given no signature date (fictional supplier letter, 2026-09-04) | vague | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | complete migration by 2035 | unknown | unknown | unknown | unknown | workspace supplier | obtain the supplier's written signature plan | 2026-12-01 |
| Firmware verifier for product sensor | non-updatable verifier | product security lead | first for non-updatable verifier | the trust anchor cannot be changed after shipment (product design documentation, fictional; NIST IR 8547 device design advice) | not asked yet | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025); production design freeze (product plan, fictional) | resolve a supported signature option before production design freeze on 2027-06-30 (fictional); include the long-lived hardware root in the initial plan by 2028 | unknown | unknown | unknown | unknown | boot ROM; production design freeze on 2027-06-30 (fictional) | obtain a supported signature and trust-root option before design freeze | 2026-12-01 |
| Office laptops | key establishment; signatures | IT lead | tracked, not ranked (supplier-update path) | no unsupported product or other exception is identified (UK NCSC timelines, published and reviewed 20 March 2025) | not asked (commodity supplier-update path) | UK NCSC target dates; supplier-update path (UK NCSC, published and reviewed 20 March 2025) | track supplier delivery and include the fleet in the 2035 completion view | unknown | not applicable (supplier-update path) | unknown | unknown | browser and operating-system suppliers | confirm support status and record installed versions | 2026-12-01 |

## Blank template

| asset | job | owner | order | reason and source | supplier readiness | timeline and authority | milestone | supplier release | testing | production deployment | end of support | dependencies | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [migration-plan.csv](/downloads/migration-plan.csv).

Keep a real plan off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Decide what to migrate first](/migration-practices/priority/)
- [Plan the migration](/migration-practices/plan/)
- [Organisation-wide route](/routes/organisation-wide/)
- [Protect this first](/resources/protect-this-first/)
