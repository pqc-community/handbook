---
title: Progress report
search_title: Post-quantum progress report template
sidebar_label: Progress report
description: "A one-page report from migration lead to sponsor after each review: progress per job, blockers, milestones at risk, decisions needed and the sponsor's response."
displayed_sidebar: templatesSidebar
---

## When to use it

A full program uses this record at the end of each review, as the charter's `reporting` field sets out and [Review and report](/plan/program/subsequent-review/) describes, and whenever a report trigger named in the [program charter](/templates/records/program-charter/) fires; a small program reports through the register instead. It is written from the records reviewed, chiefly the [register](/templates/records/register/), so it adds no new facts: every statement in it should be traceable to a row in those records.

## Minimum fields

date, reported by, reported to, records reviewed, key establishment, signatures, non-updatable verifier, blocked, milestones at risk, decisions needed, next review, sponsor response

Like the charter, the report is one document, so the fields run down the page. Report each job in its own field, because their urgency and coordination differ: in each, name the systems by their register names and say what moved since the last report and what has not, in the words the [change record](/templates/records/change-record/) uses, such as "staging passed; production not migrated". Write `not applicable` in a job field the program does not cover.

Where you can count it, give a number in each job's field, such as the share of connections whose logs show post-quantum key establishment, or the rows migrated out of the rows in scope, so the sponsor can see the trend from one report to the next. The UK NCSC suggests metrics of this kind, such as how many of your software clients use post-quantum cryptography.

- **blocked:** each blocked system and job, why, and the date by which it has to be resolved.
- **milestones at risk:** each date on the register that may be missed, with its authority, such as the UK NCSC target dates, or `none`. A target date belongs to the authority that set it and the audience it addresses, not to every system.
- **decisions needed:** escalations, budget, or risk acceptances the sponsor needs to decide, or `none`, with any escalation date already set on the register.
- **sponsor response:** what was decided, by whom, and when. A decision such as a risk acceptance also goes on the register, with its own review date.

Record `unknown` in any field you cannot settle yet, and keep keys, secrets, and personal data out of the file. Store each report with the register rather than overwriting the last one, so that the reports form the program's history.

## Filled example

From [Protect this first](/templates/examples/protect-this-first/). The organization, roles, and dates are fictional.

| field | entry |
| --- | --- |
| date | 2026-11-10 |
| reported by | operations director (migration lead) |
| reported to | managing director (executive sponsor) |
| records reviewed | register; purchase wording; change records for the archive pilot and the sensor verifier |
| key establishment | Product-design archive in supplier-hosted workspace: staging pilot passed on 2026-10-21 with X25519MLKEM768 negotiated; production rollout pending, so production is not migrated; stored-data key wrapping still unanswered by the supplier. Office laptops: on supported versions, tracked as part of the core actions. |
| signatures | Product-design archive in supplier-hosted workspace: the supplier has given no signature date. Firmware-signing key for product sensor: scheme to be chosen with the verifier option; where the key is held not yet recorded. Office laptops: tracked as part of the core actions. |
| non-updatable verifier | Firmware verifier for product sensor: no supported option; one shortlisted microcontroller supplier's reply was vague, and the other has not answered. |
| blocked | Firmware verifier for product sensor: no supported signature and trust-root option; resolve before production design freeze on 2027-06-30 (fictional). |
| milestones at risk | none at this review; the sensor's design-freeze milestone is at risk if no option is found by 2027-03-31 |
| decisions needed | none at this review; escalation to the managing director on 2027-03-31 if there is still no supported sensor option |
| next review | 2026-12-01 (archive supplier answers); 2026-12-15 (microcontroller suppliers' answers); 2027-02-10 (quarterly review) |
| sponsor response | noted by the managing director, 2026-11-10; no decision needed |

## Blank template

| field | entry |
| --- | --- |
| date | |
| reported by | |
| reported to | |
| records reviewed | |
| key establishment | |
| signatures | |
| non-updatable verifier | |
| blocked | |
| milestones at risk | |
| decisions needed | |
| next review | |
| sponsor response | |

Download a blank CSV: [progress-report.csv](/downloads/progress-report.csv).

The report summarizes the records rather than replacing them, so where a regulator, board, or customer asks for evidence, give them the register and change records behind it. Keep real reports off public tickets and unlocked shared drives, because they describe how your systems are protected.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed March 20, 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Review and report](/plan/program/subsequent-review/)
- [Register](/templates/records/register/)
- [Program charter](/templates/records/program-charter/)
