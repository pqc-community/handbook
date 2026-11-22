---
title: Subsequent review log
sidebar_label: Review log
description: A dated line for each item reviewed, with its owner, whether it is open or closed, and the next review.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this log when a planned subsequent review arrives, or when a trigger from the subsequent-review practice applies.

## Minimum fields

date, record, asset, job, item, owner, status, next review

Give each item its own row. In `record`, name the record you reopened, such as `migration plan` or `vendor response log`; in `asset` and `job`, copy the names from that record, or write `programme` and `not applicable` for an item that concerns the programme as a whole. Separate several values with semicolons, and combine assets or jobs in one item only when they share its owner, status, and next review. An item can also record a decision, such as a risk the sponsor has accepted, with who decided and the review date, so it is not lost. Set `status` to `open`, or to `closed` with the date it was resolved; carry each `open` item forward to the next review rather than rewriting it, and leave closed rows in place as the history. Review dates for individual assets live on the [migration plan](/resources/migration-plan/); the `next review` cell here is for the item itself.

Record `unknown` in any cell you cannot verify yet. Separate multiple timelines or sources in a single cell with a semicolon, and keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| date | record | asset | job | item | owner | status | next review |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-11-10 | inventory record | Product-design archive in supplier-hosted workspace | key establishment | update the row to show Workspace 4.2 and X25519MLKEM768 in staging, with production still on Workspace 4.1 | product engineering lead | closed 2026-11-10 | not applicable |
| 2026-11-10 | migration plan; change record; purchase requirements | Firmware verifier for product sensor; Firmware-signing key for product sensor | non-updatable verifier; signatures | supported firmware-signing option for the verifier and the signing key before production design freeze on 2027-06-30 (fictional); written answers from both shortlisted microcontroller suppliers due 2026-12-15; signing-key storage not yet recorded | product security lead | open | 2026-12-15 |
| 2026-11-10 | vendor response log | Product-design archive in supplier-hosted workspace | signatures | written signature-support plan from the supplier | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | vendor response log | Product-design archive in supplier-hosted workspace | key establishment (stored data) | stored-data key wrapping answer and Workspace 4.1 end of support | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | change record | Product-design archive in supplier-hosted workspace | key establishment | production rollout of Workspace 4.2 and production client handshake check | product engineering lead | open | 2027-02-10 |
| 2026-11-10 | vendor response log | Product-design archive in supplier-hosted workspace | key establishment | supplier commitments on later updates, notice period for cryptographic changes, and deprecation plan, added to the supplier follow-up | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | inventory record; decision note | Office laptops | key establishment; signatures | confirm the confidentiality period (6 years, office-records policy, fictional; question A stays `no`) and record the installed browser and operating-system versions from the device-management console; the decision note's route now reads "Vendor-managed software (all five conditions hold)" | IT lead | closed 2026-11-10 | not applicable |

## Blank template

| date | record | asset | job | item | owner | status | next review |
| --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [review-log.csv](/downloads/review-log.csv).

Keep a real review log off a public ticket and off an unlocked shared drive, and store it with the same care as the records it reviews.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Review and report](/migration-practices/subsequent-review/)
- [Vendor response log](/resources/vendor-response-log/)
- [Migration plan](/resources/migration-plan/)
