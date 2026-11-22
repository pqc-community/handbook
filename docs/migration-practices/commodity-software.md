---
title: Keep commodity software updated
sidebar_label: Keep commodity software updated
description: For supported browsers, operating systems, mobile devices, and supplier-hosted services, keep supplier updates installed, record the versions, and move exceptions to the right route.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

You rely on supported commodity software — standard browsers, operating systems, mobile devices, and similar platforms — or on supplier-hosted services, such as hosted email and office suites, whose cryptography the supplier controls. Their suppliers are expected to deliver post-quantum support through normal updates. Each such asset stays on the Vendor-managed software route while Decide whether to act's [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route) hold. This is the short path from [Decide whether to act](/migration-practices/diagnose/). On the full path, it still applies to the commodity part of the estate alongside the other practices.

## Who does what

- **Operations** keeps updates installed and records versions.
- The **asset owner** confirms the platform is still in support.
- The **migration lead** moves exceptions to the right route and keeps them on the plan.

## Do this

1. **Keep supported versions installed** across the fleet, and record the installed browser and operating-system versions, with the date checked, in the `version` cell of the [inventory record](/resources/records/inventory/). For a supplier-hosted service there is no version to install: record the service and plan you subscribe to, and what the supplier publishes about its post-quantum support, with the date checked. A version alone does not prove post-quantum key establishment is in use: enterprise policy or an inspection proxy can disable or strip it. Where you can, check what connections actually negotiate.
2. **Keep servers out of this path.** Web servers, load balancers, and services you configure yourself are your own systems, not commodity endpoints; they belong on the inventory with their own rows.
3. **Check support status.** A product that is out of support, or whose supplier has no plan for a job it performs, fails the fifth of Decide whether to act's [five conditions](/migration-practices/diagnose/#five-conditions-for-the-vendor-managed-route). That section sends it to the [Hard-to-change systems](/routes/hard-to-change-systems/) route and says what happens to its path.
4. **Check for exceptions.** When an asset's answer to one of Decide whether to act's four questions changes, re-answer them on the decision note; [step 3](/migration-practices/diagnose/#do-this) there sets its new route, such as [Long-lived confidentiality](/routes/long-lived-confidentiality/) or Hard-to-change systems.
5. **Keep the fleet on the plan as a tracking line**, with a subsequent-review date, rather than as a bespoke project.
6. **Write post-quantum requirements into purchases and renewals**, following step 5 of [Work with suppliers](/migration-practices/suppliers/). You do not need to send these suppliers questions while their products stay in support; rely on their published support and release information, and ask in writing when a product leaves support or comes up for renewal.

The UK NCSC's [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/) (published and reviewed 20 March 2025) say that for small and medium-sized enterprises using mainly commodity IT, such as standard browsers, operating systems, and mobile devices, migration will be more straightforward and should happen seamlessly as services are updated by their vendors. This handbook applies the same path to supplier-hosted services, because there too the supplier controls the cryptography. CISA's [product categories list](/standards/us-federal-directives/cisa-pqc-product-categories/) (23 January 2026), addressed to organisations generally with specific direction for US federal civilian agencies, lists web browsers and web servers among the categories where products supporting post-quantum standards are already widely available, and notes that most of these categories support post-quantum key establishment but have not yet widely implemented post-quantum signatures. The same list places software as a service among the categories still transitioning to post-quantum standards, so check each hosted service's plan job by job. The same NCSC guidance says that, where you rely entirely on commodity platforms, post-quantum upgrades are likely to be delivered by your service provider, and that, for the many organisations whose IT capability is likely to come mostly from managed service providers, it is important to make sure those providers are also carrying out the discovery and assessment work it describes.

## Keep this evidence

The installed versions and the date checked on the inventory record, the requirement text used in each purchase or renewal on the [purchase requirements record](/resources/records/purchase-requirements/), and, for each exception, the route it moved to in the `route` cell of its [decision note](/resources/records/decision-note/) row, or on the [review log](/resources/records/review-log/) if it moved at a later review.

## Example

An insufficient record is "The platform will handle it."

A decision-ready record, from [Protect this first](/resources/examples/protect-this-first/), keeps the manufacturer's office laptops on the supplier-update path under the IT lead, records the installed browser and operating-system versions and a six-year confidentiality period at the 10 November 2026 review, sets the next check for the quarterly review on 10 February 2027, and notes that the product-design archive and the sensor's firmware verifier are tracked separately because their confidentiality period and update constraints differ.

For an organisation entirely on this path, see [Stay on supplier updates](/resources/examples/stay-on-supplier-updates/).

## Limits and next step

Supplier updates usually cover key establishment before signatures; a platform on this path is not "migrated" for every job. Next, [write requirements into purchases and renewals](/migration-practices/suppliers/#5-write-requirements-into-purchases-and-renewals), then [review and report](/migration-practices/subsequent-review/) on the fleet at each review date.

## Sources

- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)

## Related pages

- [Vendor-managed software](/routes/vendor-managed-software/)
- [Inventory record](/resources/records/inventory/)
- [Review and report](/migration-practices/subsequent-review/)
