---
title: Standard, vendor-managed software
sidebar_label: Vendor-managed software
description: The short path, and the track for commodity assets on the full path. Keep supplier updates installed, write requirements into purchases and renewals, review, and leave when a condition stops holding.
displayed_sidebar: routesSidebar
---

This route is the short path through a post-quantum migration. It is also the track for the commodity part of a full-path estate. It covers the assets that meet the [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route) on Decide whether to act, whose suppliers are expected to deliver post-quantum support through normal updates.

The UK NCSC's [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/) (published and reviewed 20 March 2025), primarily aimed at technical decision-makers and risk owners in large organisations, operators of critical national infrastructure, and companies with bespoke IT, say that for small and medium-sized enterprises using mainly commodity IT, such as standard browsers, operating systems, and mobile devices, migration should happen seamlessly as services are updated by their vendors.

## Who it is for

This route is for assets that answer no to all four questions on [Decide whether to act](/migration-practices/diagnose/) and, once checked, meet its [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route).

- **Every asset's path is short:** this page is the short path, and there is no programme charter. A product that fails the fifth condition follows Hard-to-change systems, as the [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route) section says.
- **Some assets on the full path:** the programme runs from [Organisation-wide](/routes/organisation-wide/), and this page is the track for the remaining assets, such as office laptops.

## Steps

1. [Decide whether to act](/migration-practices/diagnose/). Record it on the [decision note](/resources/records/decision-note/). Each asset's `route` reads "Vendor-managed software (all five conditions hold)" once you have checked the conditions. The first rows go on the [inventory record](/resources/records/inventory/).
2. [Keep commodity software updated](/migration-practices/commodity-software/). Record the installed versions, or the subscribed service and plan, with the date checked, in the inventory record. Add a tracking line on the [migration plan](/resources/records/migration-plan/); [Timelines](/learn/timelines/) explains how to read the timeline it records.
3. [Work with suppliers](/migration-practices/suppliers/#5-write-requirements-into-purchases-and-renewals), step 5. Record the requirement text used in each purchase and renewal on the [purchase requirements record](/resources/records/purchase-requirements/). When a product comes up for renewal or leaves support, [Keep commodity software updated](/migration-practices/commodity-software/) says to ask its supplier in writing, and steps 2 to 4 of the same practice apply. Record those answers on the [vendor response log](/resources/records/vendor-response-log/).
4. [Review and report](/migration-practices/subsequent-review/). At each review, recheck the five conditions. Record the review on the [review log](/resources/records/review-log/) and the [progress report](/resources/records/progress-report/). On the full path, these assets are reviewed in the programme's review on the Organisation-wide route, not in a separate report.

For a product that fails the fifth condition, follow the [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route) section, which says how it uses the [Hard-to-change systems](/routes/hard-to-change-systems/) steps alongside these.

## Output records

- The decision note's `route` cell: "(all five conditions hold)", or the route the asset moved to.
- The checked versions on the inventory record.
- The requirement text on the purchase requirements record.
- Vendor response log rows for any supplier you ask in writing.
- A tracking line on the migration plan.
- The review log and progress report from each review.
- For a product that fails the fifth condition, the plan dates and change record that the [Hard-to-change systems](/routes/hard-to-change-systems/) steps produce, as the [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route) section says.

## When to leave

- **An answer to question A, B, C, or D turns yes.** Re-answer the questions on the decision note. The asset moves to the track its new answers give, and the organisation follows the full path from [Organisation-wide](/routes/organisation-wide/).
- **The fifth condition no longer holds for a product.** Follow Decide whether to act's [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route) section, which sends it to the [Hard-to-change systems](/routes/hard-to-change-systems/) track and says what happens to its path.
- **An answer stays `unknown`, or you cannot choose.** Follow [When you cannot answer or cannot choose](/migration-practices/diagnose/#when-you-cannot-answer-or-cannot-choose).

## Worked example

[Stay on supplier updates](/resources/examples/stay-on-supplier-updates/) follows a fictional marketing agency along this route, from its decision note to the sponsor's report. The office laptops in [Protect this first](/resources/examples/protect-this-first/) show the same route as a track inside a full-path estate.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Situation routes](/routes/)
- [Keep commodity software updated](/migration-practices/commodity-software/)
- [Work with suppliers](/migration-practices/suppliers/)
- [Stay on supplier updates](/resources/examples/stay-on-supplier-updates/)
