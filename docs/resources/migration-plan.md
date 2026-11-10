---
title: One-page migration plan
sidebar_label: Migration plan
description: One row per asset with an owner, an applicable timeline, and a subsequent-review date.
displayed_sidebar: resourcesSidebar
last_reviewed: 2026-11-10
---

## When to use it

Use this plan when a migration lead is coordinating many assets across the organisation.

## Minimum fields

asset, owner, why it is included, applicable timeline, authority, milestone, dependency, next action, subsequent review

A cell you cannot fill is the word `unknown`.

**Handbook practice:** Where the row has a dependencies cell, every dependency goes in that cell, separated by a semicolon. A shared component does not get its own system row. Where the row records a timeline or a source, more than one may be named in that cell, separated by a semicolon. Keys, secrets, and personal data stay out of the file. Name the system.

## Filled example

| asset | owner | why it is included | applicable timeline | authority | milestone | dependency | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | the clinic operations lead | long data confidentiality period | end of 2030 | EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025 | end of 2030 | supplier release named in the letter of 14 August 2026 | signatures follow-up | 2026-12-01 |

## Blank template

| asset | owner | why it is included | applicable timeline | authority | milestone | dependency | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [migration-plan.csv](/downloads/migration-plan.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- EU NIS Cooperation Group, Coordinated Implementation Roadmap on post-quantum cryptography, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- ASD, Planning for post-quantum cryptography. [Planning publication](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)

## Related pages

- [Organisation-wide route](/routes/organisation-wide/)
- [Diagnose](/migration-practices/diagnose/)
- [Evidence record](/resources/evidence-record/)
