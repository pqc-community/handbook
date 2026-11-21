---
title: Keep commodity software updated
sidebar_label: Keep commodity software updated
description: For supported browsers, operating systems, and mobile devices, keep supplier updates installed, record the versions, and move exceptions to the right route.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

You rely on supported commodity software — standard browsers, operating systems, mobile devices, and similar platforms — whose suppliers deliver post-quantum support through normal updates, and no exception moves a system to another route.

## Who does what

- **Operations** keeps updates installed and records versions.
- The **asset owner** confirms the platform is still in support.
- The **migration lead** moves exceptions to the right route and keeps them on the plan.

## Do this

1. **Keep supported versions installed** across the fleet, and record the installed browser and operating-system versions, with the date checked, in the `version` cell of the [inventory record](/resources/inventory-record/). A version alone does not prove post-quantum key establishment is in use: enterprise policy or an inspection proxy can disable or strip it. Where you can, check what connections actually negotiate.
2. **Keep servers out of this path.** Web servers, load balancers, and services you configure yourself are your own systems, not commodity endpoints; they belong on the inventory with their own rows.
3. **Check support status.** A product out of support, or a supplier with no migration plan, is no longer commodity: move it to the [Hard-to-change systems](/routes/hard-to-change-systems/) route.
4. **Check for exceptions** that need their own priority line: long-lived confidential data belongs on the [Long-lived confidentiality](/routes/long-lived-confidentiality/) route, and bespoke systems or devices whose signature check cannot be updated belong on Hard-to-change systems.
5. **Keep the fleet on the plan as a tracking line**, with a subsequent-review date, rather than as a bespoke project.

The UK NCSC's [timelines](/standards/migration-guides/uk-ncsc-pqc-guidance/) (published and reviewed 20 March 2025) say that for small and medium-sized organisations using standard commodity IT, migration should happen seamlessly as services are updated by their vendors. CISA's [product categories list](/standards/us-federal-directives/cisa-pqc-product-categories/) (23 January 2026) lists web browsers and web servers among the categories where products supporting post-quantum standards are already widely available, and notes that in most such categories the support is for key establishment rather than signatures.

## Keep this evidence

The installed versions and the date checked on the inventory record, and a written note for each exception naming the route it moved to.

## Example

An insufficient record is "The platform will handle it."

A decision-ready record, from [Protect this first](/resources/protect-this-first/), keeps the manufacturer's office laptops on the supplier-update path under the IT lead, assigns recording the installed browser and operating-system versions as an open item for the 2026-12-01 review, and notes that the product-design archive and the sensor's firmware verifier are tracked separately because their confidentiality period and update constraints differ.

## Limits and next step

Supplier updates usually cover key establishment before signatures; a platform on this path is not "migrated" for every job. Next, [review and report](/migration-practices/subsequent-review/) on the fleet at each review date.

## Sources

- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)

## Related pages

- [Vendor-managed software](/routes/vendor-managed-software/)
- [Inventory record](/resources/inventory-record/)
- [Review and report](/migration-practices/subsequent-review/)
