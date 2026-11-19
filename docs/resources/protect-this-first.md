---
title: Protect this first
sidebar_label: Protect this first
displayed_sidebar: resourcesSidebar
last_reviewed: 2026-11-19
description: Follow a fictional UK manufacturer through inventory, prioritisation, supplier planning, implementation evidence, and review.
---

This worked example follows a fictional small manufacturer based in the United Kingdom. It is not a critical-infrastructure operator or a regulated-sector case. Every company fact, supplier, product version, letter, release date, and test result below is invented for illustration.

The manufacturer has three different migration paths: product designs in a supplier-hosted archive that must remain confidential for 15 years under the company's own retention policy; a product sensor with a firmware verifier that cannot be updated after shipment; and ordinary office laptops that receive standard supplier updates. The UK National Cyber Security Centre (NCSC) milestones are used as UK planning targets. NIST standards are cited only as technical references, not as UK deadlines.

## Initial facts

- **Product-design archive**: The supplier controls the hosted workspace software; the product engineering lead owns the design data. The company's retention policy requires the designs to remain confidential for at least 15 years.
- **Product sensor firmware verifier**: A trust anchor is held in write-protected boot ROM. The verifier cannot accept a replacement trust anchor after the sensor ships, so the product security lead needs to resolve the signature path before production design freeze.
- **Office laptops**: Standard browsers and operating systems are under vendor support and follow the commodity supplier-update path. No exception has been identified.

## Inventory records

The manufacturer records one row for each system on the [inventory record](/resources/inventory-record/). It marks facts it has not verified as `unknown`:

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | product engineering lead | unknown | unknown | workspace supplier | 15 years (company policy) | unknown | Workspace 4.1 (fictional) | unknown | unknown | unknown |
| Firmware verifier for product sensor | product security lead | unknown | unknown | manufacturer | unknown | unknown | pre-production product (fictional) | boot ROM trust anchor | firmware trust anchor | unknown |
| Office laptops | IT lead | unknown | unknown | operating-system and browser suppliers | unknown | unknown | unknown | unknown | unknown | unknown |

## Priority decision

The [priority record](/resources/priority-record/) keeps the three cryptographic jobs separate. The archive and firmware verifier each rank first for a different job; laptops remain on their supplier-update path.

| asset | confidentiality period | job | impact | lead time | dependencies | supplier readiness | decision | reason | source | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | 15 years (company policy) | key establishment | unknown | unknown | unknown | planned supplier release | first for key establishment | the company's designs must remain confidential for 15 years | company retention policy (fictional); UK NCSC timelines, published and reviewed 20 March 2025 | 2026-12-01 |
| Firmware verifier for product sensor | unknown | non-updatable verifier | unknown | long product life; exact period unknown | boot ROM trust anchor | unknown | first for non-updatable verifier | the trust anchor cannot be changed after shipment | UK NCSC timelines, published and reviewed 20 March 2025 | 2026-12-01 |
| Office laptops | unknown | key establishment | unknown | routine refresh | browser and operating-system suppliers | supplier-update path | follow supplier updates; no bespoke pilot | no unsupported product or other exception is identified | UK NCSC timelines, published and reviewed 20 March 2025 | 2026-12-01 |

## Supplier answer

The product engineering lead records the supplier's written answer in the [vendor response log](/resources/vendor-response-log/). The supplier, product, and version are explicitly fictional.

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fictional design-platform supplier | Workspace 4.2 (fictional) | Which key-establishment construction and release date apply to the hosted archive, and does the release include signatures? | The letter says Workspace 4.2 is scheduled for 2026-10-01, uses ML-KEM-768 for the hosted key-establishment service, and does not include post-quantum signing changes. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | complete for key establishment | written signature-support plan due 2026-12-01 | pilot Workspace 4.2 for archive key establishment; track signatures separately |

## Migration plan

The [migration plan](/resources/migration-plan/) records the UK NCSC target dates as planning guidance for this UK-based company. The guidance asks organisations to complete discovery and an initial plan by 2028, highest-priority migration activities by 2031, and migration of systems, services, and products by 2035. The dates are targets, not a claim that every asset has the same milestone.

| asset | owner | why it is included | applicable timeline | authority | milestone | dependency | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | product engineering lead | designs must remain confidential for 15 years | UK NCSC target dates | UK NCSC, published and reviewed 20 March 2025 | complete highest-priority migration activities by 2031; complete migration by 2035 | supplier's Workspace 4.2 release | complete production interoperability checks; keep signature support as a separate item | 2026-12-01 |
| Firmware verifier for product sensor | product security lead | verifier cannot accept a new trust anchor after shipment | UK NCSC target dates | UK NCSC, published and reviewed 20 March 2025 | include the long-lived hardware root in the initial plan by 2028; plan highest-priority work by 2031 | boot ROM and product design freeze | obtain a supported signature and trust-root option before production design freeze | 2026-12-01 |
| Office laptops | IT lead | public-key cryptography is managed through supported commodity platforms | UK NCSC target dates; supplier-update path | UK NCSC, published and reviewed 20 March 2025 | track supplier delivery and include the fleet in the 2035 completion view | browser and operating-system suppliers | confirm support status and record installed versions; route unsupported devices for review | 2026-12-01 |

## Option and authority

The supplier names ML-KEM-768 for the workspace release. The manufacturer records that supplier option against [FIPS 203](/standards/post-quantum/fips-203/), which specifies ML-KEM and its parameter sets. This example records the supplier's choice; it does not present ML-KEM-768 as a universal default or an independently validated implementation. NIST's FIPS 203 page notes a potential update, so a real implementation decision also checks the current errata. The UK NCSC timeline supplies migration-planning targets, not an algorithm selection.

The product sensor remains blocked at option selection. The manufacturer does not choose a firmware-signing construction until it has evidence about a supported signature, the immutable trust anchor, and the production design constraints. It records that dependency in [Choosing an option](/technology-options/choosing/) and [Long-lived roots](/technology-options/long-lived-roots/).

## Change record and deployed-state check

The [change record](/resources/change-record/) distinguishes a completed staging pilot from the product sensor decision, which is still blocked:

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | test the supplier's key-establishment update in staging | ML-KEM-768 | FIPS 203, NIST, 13 August 2024 (technical standard) | Workspace 4.2 staging workspace with sample files | confirm the release setting and that an authorised test account can retrieve sample files | test account cannot retrieve the sample files | product engineering lead with supplier support | supplier release record names Workspace 4.2 and ML-KEM-768 | pilot passed; production rollout pending | 2026-10-21 |

The sensor verifier row remains blocked because the replacement signature and trust-root option is not known. No implementation test is claimed:

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | select and test a replacement before production design freeze | unknown | unknown | one pre-production sensor | not started; option unknown | unknown | product security lead | confirm the selected verifier and trust anchor before design approval | unknown | unknown |

## Evidence record

The [evidence record](/resources/evidence-record/) makes the claim precise: the staging pilot passed, but production migration is not complete.

| claim | record | source | date | owner | subsequent review |
| --- | --- | --- | --- | --- | --- |
| The Workspace 4.2 staging pilot passed; production rollout remains pending | change record for the product-design archive | fictional supplier letter, 2026-09-04; FIPS 203, 13 August 2024 | 2026-10-21 | product engineering lead | 2026-12-01 |

## Subsequent review

At the review on `2026-11-10`, the manufacturer reopened the priority record, supplier response, archive pilot evidence, and sensor verifier plan. The [review log](/resources/review-log/) records what remains unresolved and the next review date:

| date | what was reviewed | unresolved items | owner | next review |
| --- | --- | --- | --- | --- |
| 2026-11-10 | archive pilot evidence, supplier response, and product-sensor priority | supported firmware-signing option and supplier plan; archive signature-support date | product security lead | 2026-12-01 |

## Rejected alternative

The manufacturer considered a separate cryptographic redesign for its office laptops. It instead tracks supported browsers and operating systems through the NCSC's supplier-update path, while keeping the bespoke product sensor in the migration plan. If a laptop falls out of support or a supplier cannot provide a migration path, the manufacturer reopens that decision.

## Sources

- UK NCSC, *Timelines for migration to post-quantum cryptography*, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST, *Module-Lattice-Based Key-Encapsulation Mechanism Standard*, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)

## Related pages

- [Inventory](/migration-practices/inventory/)
- [Inventory record](/resources/inventory-record/)
- [Priority](/migration-practices/priority/)
- [Priority record](/resources/priority-record/)
- [Vendor plan](/migration-practices/vendor-plan/)
- [Vendor response log](/resources/vendor-response-log/)
- [Migration plan](/resources/migration-plan/)
- [Choosing an option](/technology-options/choosing/)
- [Key establishment](/technology-options/key-establishment/)
- [Signatures](/technology-options/signatures/)
- [Long-lived roots](/technology-options/long-lived-roots/)
- [Implementation](/migration-practices/implementation/)
- [Change record](/resources/change-record/)
- [Evidence record](/resources/evidence-record/)
- [Subsequent review](/migration-practices/subsequent-review/)
- [Review log](/resources/review-log/)
- [Vendor-managed software route](/routes/vendor-managed-software/)
