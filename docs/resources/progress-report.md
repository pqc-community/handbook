---
title: Progress report
sidebar_label: Progress report
description: A one-page report from the migration lead to the sponsor after each review, with progress per job, what is blocked and why, milestones at risk, decisions needed, and the sponsor's response.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this report at the end of each review under [Review and report](/migration-practices/subsequent-review/), and whenever a report trigger named in the [programme charter](/resources/programme-charter/) fires. It is written from the [migration plan](/resources/migration-plan/) and the [review log](/resources/review-log/), so it adds no new facts: every statement in it should be traceable to a row in those records.

## Minimum fields

date, reported by, reported to, records reviewed, key establishment, signatures, non-updatable verifier, blocked, milestones at risk, decisions needed, next review, sponsor response

Like the charter, the report is one document, so the fields run down the page. Report each job in its own field, because their urgency and coordination differ: in each, name the assets by their inventory names and say what moved since the last report and what has not, in the words the [change record](/resources/change-record/) uses, such as "staging passed; production not migrated". Write `none` in a job field the programme does not cover yet.

- **blocked:** each blocked asset and job, why, and the date by which it has to be resolved.
- **milestones at risk:** each plan milestone that may be missed, with its timeline and authority from the plan, such as the UK NCSC target dates, or `none`. A target date belongs to the authority that set it and the audience it addresses, not to every asset.
- **decisions needed:** escalations, budget, or risk acceptances the sponsor must decide, or `none`, with any escalation date already set on the plan.
- **sponsor response:** what the sponsor decided, who, and when. A decision such as a risk acceptance also goes on the review log, with its own review date.

Record `unknown` in any field you cannot settle yet. Keep keys, secrets, and personal data out of the file. Store each report with the migration plan, rather than overwriting the last one, so the reports form the programme's history.

## Filled example

From [Protect this first](/resources/protect-this-first/). The organisation, roles, and dates are fictional.

| field | entry |
| --- | --- |
| date | 2026-11-10 |
| reported by | operations director (migration lead) |
| reported to | managing director (executive sponsor) |
| records reviewed | migration plan; vendor response log; change record for the archive pilot; inventory rows for the archive and the laptops; review log |
| key establishment | Product-design archive in supplier-hosted workspace: staging pilot passed on 2026-10-21 with X25519MLKEM768 negotiated; production rollout pending, so production is not migrated; stored-data key wrapping still unanswered by the supplier. Office laptops: on supported versions, tracked on the supplier-update path. |
| signatures | Product-design archive in supplier-hosted workspace: the supplier has given no signature date. Firmware-signing key for product sensor: scheme to be chosen with the verifier option; where the key is held not yet recorded. Office laptops: tracked on the supplier-update path. |
| non-updatable verifier | Firmware verifier for product sensor: no supported option; the microcontroller supplier's reply was vague. |
| blocked | Firmware verifier for product sensor: no supported signature and trust-root option; resolve before production design freeze on 2027-06-30 (fictional). |
| milestones at risk | none at this review; the sensor's design-freeze milestone is at risk if no option is found by 2027-03-31 |
| decisions needed | none at this review; escalation to the managing director on 2027-03-31 if there is still no supported sensor option |
| next review | 2026-12-01 (archive supplier answers); 2026-12-15 (microcontroller supplier's answer); 2027-02-10 (quarterly review) |
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

The report summarises the records; it does not replace them. Where a regulator, board, or customer asks for evidence, give the plan, change records, and review log behind the report. Keep real reports off a public ticket and off an unlocked shared drive.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Review and report](/migration-practices/subsequent-review/)
- [Review log](/resources/review-log/)
- [Migration plan](/resources/migration-plan/)
- [Programme charter](/resources/programme-charter/)
