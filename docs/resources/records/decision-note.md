---
title: Decision note
sidebar_label: Decision note
description: One row per asset recording the four answers that decide whether to act, the urgency category and path they lead to, who owns the next step, and the sponsor's acceptance.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this note when you [decide whether to act](/migration-practices/diagnose/): before any programme exists, and again whenever a new asset raises the question.

## Minimum fields

asset, A long-lived confidentiality, B fixed verifier, C others rely on your signatures, D bespoke systems, category, path, route, next step, owner, confirm by, accepted by

Give each asset its own row, because this handbook applies the urgent and regular adopter categories per asset: one organisation can be an urgent adopter for one asset and a regular adopter for another. Answer A to D with `yes`, `no`, or `unknown`, and add the reason in brackets; [Decide whether to act](/migration-practices/diagnose/#when-you-cannot-answer-or-cannot-choose) says how an `unknown` answer counts until it is closed. The questions are:

- **A.** Is any data protected by public-key cryptography required to stay confidential for many years?
- **B.** Does any product or device you build or run check signatures with a key it cannot replace after shipment?
- **C.** Do you operate a public-key infrastructure, or sign code, firmware, or documents that other people or devices rely on?
- **D.** Do you build or run bespoke systems, rather than only supported commodity software and supplier-hosted services?

Set `category` to `urgent adopter` or `regular adopter` and `path` to `full` or `short`, using the table on [Decide whether to act](/migration-practices/diagnose/). In `route`, name the asset's route as step 3 of [Decide whether to act](/migration-practices/diagnose/) sets it: Vendor-managed software, Long-lived confidentiality, or Hard-to-change systems, with any bracketed addition that step gives. For the vendor-managed route, add "(all five conditions hold)" once you have checked the [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route), or name the route the asset moved to. In `accepted by`, give the sponsor's role and the date they accepted the row.

Record `unknown` in any cell you cannot verify yet. Keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

From [Protect this first](/resources/examples/protect-this-first/). The dates are fictional. The rows are shown as accepted on 13 July 2026; the review on 10 November 2026 later confirmed the laptops' six-year period and added "(all five conditions hold)" to their route, as the [review log](/resources/records/review-log/) records.

| asset | A long-lived confidentiality | B fixed verifier | C others rely on your signatures | D bespoke systems | category | path | route | next step | owner | confirm by | accepted by |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | yes (15 years under the company retention policy) | no | no | no (supplier-hosted service) | urgent adopter | full | Long-lived confidentiality | set up the programme | operations director | 2026-08-03 | managing director, 2026-07-13 |
| Firmware verifier for product sensor | no (the verifier holds no confidential data) | yes (boot ROM trust anchor) | yes (the manufacturer signs the sensor's firmware) | yes (own product) | urgent adopter | full | Hard-to-change systems | set up the programme | operations director | 2026-08-03 | managing director, 2026-07-13 |
| Office laptops | no (design files are kept in the archive; period for the IT lead to confirm) | no | no | no (supported commodity software) | regular adopter | short | Vendor-managed software | keep commodity software updated | IT lead | 2026-08-03 | managing director, 2026-07-13 |

## Blank template

| asset | A long-lived confidentiality | B fixed verifier | C others rely on your signatures | D bespoke systems | category | path | route | next step | owner | confirm by | accepted by |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [decision-note.csv](/downloads/decision-note.csv).

The note records a decision, not a risk assessment. Where the answers are unclear for a regulated or critical system, take the decision to the risk owner or sector authority.

## Sources

- AIVD, CWI, and TNO, The PQC Migration Handbook, second edition, December 2024. [The PQC Migration Handbook (PDF)](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Decide whether to act](/migration-practices/diagnose/)
- [Programme charter](/resources/records/programme-charter/)
- [Inventory record](/resources/records/inventory/)
- [Situation routes](/routes/)
