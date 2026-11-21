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

Give each item its own row. An item can also record a decision, such as a risk the sponsor has accepted, with who decided and the review date, so it is not lost. Set `status` to `open`, or to `closed` with the date it was resolved; carry each `open` item forward to the next review rather than rewriting it, and leave closed rows in place as the history. Review dates for individual assets live on the [migration plan](/resources/migration-plan/); the `next review` cell here is for the item itself.

Record `unknown` in any cell you cannot verify yet. Separate multiple timelines or sources in a single cell with a semicolon, and keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| date | what was reviewed | item | owner | status | next review |
| --- | --- | --- | --- | --- | --- |
| 2026-11-10 | archive inventory row | update the row to show Workspace 4.2 and X25519MLKEM768 in staging, with production still on Workspace 4.1 | product engineering lead | closed 2026-11-10 | not applicable |
| 2026-11-10 | product-sensor plan line and verifier option | supported firmware-signing option for the verifier and the signing key before production design freeze on 2027-06-30 (fictional); microcontroller supplier's written answer due 2026-12-15; signing-key storage not yet recorded | product security lead | open | 2026-12-15 |
| 2026-11-10 | supplier response for the archive | written signature-support plan from the supplier | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | supplier response for the archive | stored-data key wrapping answer and Workspace 4.1 end of support | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | archive pilot evidence | production rollout of Workspace 4.2 and production client handshake check | product engineering lead | open | 2027-02-10 |
| 2026-11-10 | archive agility check | supplier commitments on later updates, notice period for cryptographic changes, and deprecation plan, added to the supplier follow-up | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | office laptop fleet | confirm the confidentiality period and record installed versions: 6 years under the office-records policy (fictional), with supported browser and operating-system versions recorded from the device-management console | IT lead | closed 2026-11-10 | not applicable |

## Blank template

| date | what was reviewed | item | owner | status | next review |
| --- | --- | --- | --- | --- | --- |

Download a blank CSV: [review-log.csv](/downloads/review-log.csv).

Keep a real review log off a public ticket and off an unlocked shared drive, and store it with the same care as the records it reviews.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Review and report](/migration-practices/subsequent-review/)
- [Vendor response log](/resources/vendor-response-log/)
- [Migration plan](/resources/migration-plan/)
