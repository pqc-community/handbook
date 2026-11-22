---
title: Coordinating a migration across the organisation
sidebar_label: Organisation-wide
description: The full path. Run the programme, send each asset to its track, order the work across tracks, and review and report to the sponsor.
displayed_sidebar: routesSidebar
---

This route is the full path through a post-quantum migration. It runs the programme and sends each asset to its track. The tracks hold the steps for each asset; this page holds the steps that span them.

## Who it is for

This route is for any organisation with at least one asset whose path is full under the [path table](/migration-practices/diagnose/#do-this) on Decide whether to act. The migration lead usually follows it for the executive sponsor.

Each role supplies one input to the plan:

| Role | Input |
| --- | --- |
| Executive sponsor | The decision to proceed, in an accepted [decision note](/resources/records/decision-note/), and the agreed [programme charter](/resources/records/programme-charter/) |
| Migration lead | The migration plan |
| Asset owners | The system and its unknowns |
| Procurement | The supplier questions |
| Legal or risk | The applicable timeline, and advice on the confidentiality period that the data owner confirms |
| Operations | The change window and the rollback owner |
| Suppliers | The product, version, and the answer |

## Steps

1. [Decide whether to act](/migration-practices/diagnose/). Record the path and route for each asset on the [decision note](/resources/records/decision-note/). The first rows go on the [inventory record](/resources/records/inventory/).
2. [Set up the programme](/migration-practices/programme/). Record the roles, scope, first budget line and reporting on the [programme charter](/resources/records/programme-charter/).
3. [Inventory the cryptography](/migration-practices/inventory/). Record one row per asset on the inventory record, with unknowns marked. When the inventory finds an asset that raises the question again, answer the four questions for it on the decision note.
4. **Send each asset to its track.** Each asset follows the route in its [decision note](/resources/records/decision-note/) `route` cell, which [Decide whether to act](/migration-practices/diagnose/), step 3, sets:
   - [Long-lived confidentiality](/routes/long-lived-confidentiality/);
   - [Hard-to-change systems](/routes/hard-to-change-systems/);
   - [Vendor-managed software](/routes/vendor-managed-software/).
5. [Decide what to migrate first](/migration-practices/priority/). This step owns the order, using the rules on Decide what to migrate first. Record the order, the reason, and a subsequent-review date for each line on the [migration plan](/resources/records/migration-plan/), within each job and across every track; each track's step 2 places its lines in this order.
6. **Follow each track's steps.** The tracks' inventory and priority steps add each asset's detail to the same inventory record and migration plan; they are not a second inventory. Record the plan dates, vendor response log rows, purchase requirements and change records that each track produces.
7. [Review and report](/migration-practices/subsequent-review/). Record the [review log](/resources/records/review-log/) and [progress report](/resources/records/progress-report/), and reopen records on their triggers.

ETSI's [TR 104 016](/standards/migration-guides/etsi-tr-104-016/) (October 2024), an informative technical report, sets out a repeatable migration framework that likewise runs from identifying the enterprise architecture and generating asset inventories, through prioritisation and planning, to executing the plans and preparing for the next iteration. This route makes programme setup an explicit step because it decides who does the work and by when.

## Output records

- The decision note, with a path and a route for each asset.
- The programme charter.
- The inventory record.
- A [migration plan](/resources/records/migration-plan/) with an owner, an order or tracking line, and a subsequent-review date for each asset and job.
- The review log and progress report from each review.
- Through the tracks: the [vendor response log](/resources/records/vendor-response-log/), [purchase requirements](/resources/records/purchase-requirements/), and [change records](/resources/records/change-record/).

## When to leave

- **At a later review, every asset's path is short again** under the [path table](/migration-practices/diagnose/#do-this), so the organisation is on the short path; follow [Vendor-managed software](/routes/vendor-managed-software/).
- **An asset's answers change.** Re-answer the four questions on the decision note; the asset moves to the track its new answers give.
- **You cannot choose a route for an asset, or the system may need a specialist.** Follow [When you cannot answer or cannot choose](/migration-practices/diagnose/#when-you-cannot-answer-or-cannot-choose) on Decide whether to act.

## Worked example

[Protect this first](/resources/examples/protect-this-first/) follows a fictional manufacturer along this route, from the decision note and charter to the sponsor's report. Its three assets are on all three tracks: the product-design archive on Long-lived confidentiality, the sensor's firmware verifier on Hard-to-change systems, and the office laptops on Vendor-managed software.

## Sources

- ETSI, TR 104 016, October 2024. [TR 104 016](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)

## Related pages

- [Situation routes](/routes/)
- [Set up the programme](/migration-practices/programme/)
- [Work with suppliers](/migration-practices/suppliers/)
- [Protect this first](/resources/examples/protect-this-first/)
- [Migration records](/resources/records/)
