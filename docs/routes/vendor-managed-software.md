---
title: Mostly standard, vendor-managed software
sidebar_label: Vendor-managed software
description: For an organisation whose software and hosted services are updated by their suppliers, with a check for the cases that need a different route.
displayed_sidebar: routesSidebar
---

This route is for an organisation that relies on standard browsers, operating systems, and mobile devices, and on supported supplier-hosted services such as hosted email and office suites.

Stay on this route only when all of these hold: the software is supplier-updated browsers, operating systems, or mobile devices, or a supplier-hosted service whose cryptography the supplier controls; no record needs to stay confidential for many years (question A on [Decide whether to act](/migration-practices/diagnose/)); there is no bespoke system; no verifier that cannot be updated later; and the product is in support and has a published or written supplier plan. A product that is out of support, or has no such plan, uses the [hard-to-change systems route](/routes/hard-to-change-systems/). An organisation coordinating many assets also opens the [organisation-wide route](/routes/organisation-wide/).

When all of those conditions hold, read in this order:

1. [Keep commodity software updated](/migration-practices/commodity-software/)
2. [Timelines](/learn/timelines/)
3. [Vendor response log](/resources/records/vendor-response-log/)
4. [Review and report](/migration-practices/subsequent-review/)

The output is the checked versions on the [inventory record](/resources/records/inventory/), the requirement text used in purchases and renewals on the [purchase requirements record](/resources/records/purchase-requirements/), [vendor response log](/resources/records/vendor-response-log/) rows for any supplier you ask in writing, a tracking line on the [migration plan](/resources/records/migration-plan/), the [review log](/resources/records/review-log/) and [progress report](/resources/records/progress-report/) from each review, and, in the `route` cell of the [decision note](/resources/records/decision-note/), either "(all five conditions hold)" or the route you moved to.

The primary next page is [Keep commodity software updated](/migration-practices/commodity-software/).

For an illustration, not a real organisation, see [Stay on supplier updates](/resources/examples/stay-on-supplier-updates/), which follows a small agency through this route, or the laptops in [Protect this first](/resources/examples/protect-this-first/).

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Keep commodity software updated](/migration-practices/commodity-software/)
- [Ask a supplier](/routes/ask-a-supplier/)
- [Not sure which route applies](/routes/not-sure/)
