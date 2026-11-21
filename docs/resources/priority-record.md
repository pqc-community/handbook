---
title: Priority record
sidebar_label: Priority record
description: One row per asset that records why it is first and when it will be reviewed again.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this record after an inventory exists and before you commit budget or procurement action to a specific asset.

## Minimum fields

asset, confidentiality period, job, impact, lead time, dependencies, supplier readiness, decision, reason, source, subsequent review

Record `unknown` in any cell you cannot verify yet. Set `job` to `key establishment`, `signatures`, or `non-updatable verifier`.

List every dependency inside the `dependencies` cell separated by a semicolon rather than giving a shared component its own system row. Separate multiple timelines or sources in a single cell with a semicolon. Keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| asset | confidentiality period | job | impact | lead time | dependencies | supplier readiness | decision | reason | source | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | 15 years (company policy) | key establishment | unknown | unknown | workspace supplier | complete | first for key establishment | the company's designs must remain confidential for 15 years | company retention policy (fictional) | 2026-12-01 |
| Product-design archive in supplier-hosted workspace | not applicable | signatures | unknown | unknown | workspace supplier | vague | track with the supplier; no bespoke work yet | the supplier has given no signature date | fictional supplier letter, 2026-09-04 | 2026-12-01 |
| Firmware verifier for product sensor | not applicable | non-updatable verifier | unknown | unknown; must be resolved before production design freeze on 2027-06-30 (fictional) | boot ROM trust anchor | not asked yet | first for non-updatable verifier | the trust anchor cannot be changed after shipment | product design documentation (fictional); NIST IR 8547 device design advice | 2026-12-01 |
| Office laptops | unknown | key establishment | unknown | routine refresh | browser and operating-system suppliers | not asked (commodity supplier-update path) | follow supplier updates; no bespoke pilot | no unsupported product or other exception is identified | UK NCSC timelines, published and reviewed 20 March 2025 | 2026-12-01 |
| Office laptops | not applicable | signatures | unknown | routine refresh | browser and operating-system suppliers | not asked (commodity supplier-update path) | follow supplier updates | signature changes are expected through supported platform updates; no exception identified | UK NCSC timelines, published and reviewed 20 March 2025 | 2026-12-01 |

## Blank template

| asset | confidentiality period | job | impact | lead time | dependencies | supplier readiness | decision | reason | source | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [priority-record.csv](/downloads/priority-record.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Decide what to migrate first](/migration-practices/priority/)
- [Inventory record](/resources/inventory-record/)
- [Protect this first](/resources/protect-this-first/)
