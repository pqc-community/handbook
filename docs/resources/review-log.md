---
title: Subsequent review log
sidebar_label: Review log
description: A dated line for each item reviewed, with its owner, whether it is open or closed, and the next review.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this log when a planned subsequent review arrives, or when a trigger from the subsequent-review practice applies.

## Minimum fields

date, what was reviewed, item, owner, status, next review

Give each item its own row. Set `status` to `open`, or to `closed` with the date it was resolved; carry each `open` item forward to the next review rather than rewriting it, and leave closed rows in place as the history. Review dates for individual assets live on the [migration plan](/resources/migration-plan/); the `next review` cell here is for the item itself.

Record `unknown` in any cell you cannot verify yet. Separate multiple timelines or sources in a single cell with a semicolon, and keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| date | what was reviewed | item | owner | status | next review |
| --- | --- | --- | --- | --- | --- |
| 2026-11-10 | archive inventory row | update the row to show Workspace 4.2 and X25519MLKEM768 in staging, with production still on Workspace 4.1 | product engineering lead | closed 2026-11-10 | not applicable |
| 2026-11-10 | product-sensor plan line and verifier option | supported firmware-signing option before production design freeze on 2027-06-30 (fictional) | product security lead | open | 2026-12-01 |
| 2026-11-10 | supplier response for the archive | written signature-support plan from the supplier | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | supplier response for the archive | stored-data key wrapping answer and Workspace 4.1 end of support | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | archive pilot evidence | production rollout of Workspace 4.2 and production connection-log check | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | archive agility check | configuration change, change window, and deprecation path not yet evidenced | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | office laptop fleet | installed browser and operating-system versions not yet recorded | IT lead | open | 2026-12-01 |

## Blank template

| date | what was reviewed | item | owner | status | next review |
| --- | --- | --- | --- | --- | --- |

Download a blank CSV: [review-log.csv](/downloads/review-log.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Review and report](/migration-practices/subsequent-review/)
- [Vendor response log](/resources/vendor-response-log/)
- [Migration plan](/resources/migration-plan/)
