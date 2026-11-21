---
title: Protect this first
sidebar_label: Protect this first
displayed_sidebar: resourcesSidebar
description: Follow a fictional UK manufacturer through inventory, supplier answers, the migration plan, a change and its evidence, and review.
---

This worked example follows a fictional small manufacturer based in the United Kingdom. It is not a critical-infrastructure operator or a regulated-sector case. Every company fact, supplier, product version, letter, release date, and test result below is invented for illustration.

The manufacturer has three different migration paths: product designs in a supplier-hosted archive that must remain confidential for 15 years under the company's own retention policy; a product sensor with a firmware verifier that cannot be updated after shipment; and ordinary office laptops that receive standard supplier updates. The UK National Cyber Security Centre (NCSC) milestones are used as UK planning targets. NIST standards are cited only as technical references, not as UK deadlines.

## Initial facts

- **Programme roles**: The managing director is the executive sponsor. The operations director is the migration lead, responsible for the programme records and the review cadence. Asset owners are the product engineering lead, the product security lead, and the IT lead. The programme charter was agreed on 2026-08-03 (fictional).
- **Product-design archive**: The supplier controls the hosted workspace software; the product engineering lead owns the design data. The company's retention policy requires the designs to remain confidential for at least 15 years.
- **Product sensor firmware verifier**: A trust anchor is held in write-protected boot ROM. The verifier cannot accept a replacement trust anchor after the sensor ships, so the product security lead needs to resolve the signature path before production design freeze, planned for 2027-06-30 (fictional).
- **Office laptops**: Standard browsers and operating systems are under vendor support and follow the commodity supplier-update path. No exception has been identified.

## Inventory records

The table shows the rows as first recorded. The review on 2026-11-10 updated the archive row; see [Subsequent review](#subsequent-review).

The manufacturer records one row for each system on the [inventory record](/resources/inventory-record/). It marks facts it has not verified as `unknown`:

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | how found | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | product engineering lead | unknown | unknown | workspace supplier | 15 years (company policy) | unknown | Workspace 4.1 (fictional) | workspace supplier's hosting service | supplier-hosted cryptography | asset owner; supplier questions sent | unknown |
| Firmware verifier for product sensor | product security lead | not applicable (verifies signatures only) | unknown | manufacturer | not applicable | unknown | pre-production product (fictional) | boot ROM trust anchor | firmware trust anchor | product design documentation (fictional) | unknown |
| Office laptops | IT lead | unknown | unknown | operating-system and browser suppliers | unknown | unknown | unknown | unknown | unknown | none yet | unknown |

## Supplier answer

The product engineering lead records the supplier's written answer in the [vendor response log](/resources/vendor-response-log/). The supplier, product, and version are explicitly fictional.

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fictional design-platform supplier | Workspace 4.2 (fictional) | Which key-establishment algorithm or scheme, and which release date, apply to connections to the hosted archive? | The letter says Workspace 4.2 is scheduled for 2026-10-01 and uses hybrid key establishment (X25519MLKEM768) for TLS connections to the hosted workspace. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | complete | none for this question | pilot Workspace 4.2 for archive key establishment |
| Fictional design-platform supplier | Workspace 4.2 (fictional) | When will the hosted archive sign or verify with a post-quantum algorithm? | The letter says Workspace 4.2 does not include post-quantum signing changes and gives no date. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | vague | written signature-support plan due 2026-12-01 | track signatures as a separate plan line |
| Fictional design-platform supplier | Workspace 4.1 and 4.2 (fictional) | Which algorithm or scheme protects the key wrapping of stored files, and when does support for Workspace 4.1 end? | The letter does not answer either question. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | missing | written answer due 2026-12-01 | do not count stored-data protection as migrated |

## Migration plan

The [migration plan](/resources/migration-plan/) holds both the order of work and the dates, one row per asset and job. The archive and the firmware verifier each come first for a different job; the archive's signature line follows the supplier, and the laptops are tracked on the supplier-update path rather than ranked. The order for the archive's key establishment rests on the 15-year retention policy, and its supplier readiness on the letter above.

The plan uses the UK NCSC target dates as planning guidance for this UK-based company. The guidance asks organisations to complete discovery and build an initial plan by 2028, to carry out their early, highest-priority migration activities by 2031, and to complete migration of systems, services, and products by 2035. The dates are targets, not a claim that every asset has the same milestone.

| asset | job | owner | order | reason and source | supplier readiness | timeline and authority | milestone | supplier release | testing | production deployment | end of support | dependencies | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | key establishment | product engineering lead | first for key establishment | the designs must remain confidential for 15 years (company retention policy, fictional) | complete | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | carry out highest-priority migration activities by 2031; complete migration by 2035 | 2026-10-01 | 2026-10-21 (staging pilot passed) | unknown | unknown | workspace supplier's Workspace 4.2 release | complete production checks; obtain end of support for Workspace 4.1 | 2026-12-01 |
| Product-design archive in supplier-hosted workspace | signatures | product engineering lead | track with the supplier; no bespoke work yet | the supplier has given no signature date (fictional supplier letter, 2026-09-04) | vague | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | complete migration by 2035 | unknown | unknown | unknown | unknown | workspace supplier | obtain the supplier's written signature plan | 2026-12-01 |
| Firmware verifier for product sensor | non-updatable verifier | product security lead | first for non-updatable verifier | the trust anchor cannot be changed after shipment (product design documentation, fictional; NIST IR 8547 device design advice) | not asked yet | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025); production design freeze (product plan, fictional) | resolve a supported signature option before production design freeze on 2027-06-30 (fictional); include the long-lived hardware root in the initial plan by 2028 | unknown | unknown | unknown | unknown | boot ROM; production design freeze on 2027-06-30 (fictional) | obtain a supported signature and trust-root option before design freeze | 2026-12-01 |
| Office laptops | key establishment; signatures | IT lead | tracked, not ranked (supplier-update path) | no unsupported product or other exception is identified (UK NCSC timelines, published and reviewed 20 March 2025) | not asked (commodity supplier-update path) | UK NCSC target dates; supplier-update path (UK NCSC, published and reviewed 20 March 2025) | track supplier delivery and include the fleet in the 2035 completion view | unknown | not applicable (supplier-update path) | unknown | unknown | browser and operating-system suppliers | confirm support status and record installed versions | 2026-12-01 |

## Option and authority

The supplier names hybrid key establishment for TLS connections to the workspace: X25519MLKEM768, which combines ML-KEM-768 with the classical X25519 exchange and is one of the groups defined in [RFC 10024](/standards/modules-protocols-identity/rfc-10024/). The manufacturer records that option against [FIPS 203](/standards/post-quantum/fips-203/), which specifies ML-KEM. The letter covers connections, not the key wrapping of stored files, which the manufacturer has asked about separately. This example records the supplier's choice; it does not present it as a universal default or an independently validated implementation. NIST's FIPS 203 page notes a potential update, so a real implementation decision also checks the current errata. The UK NCSC timeline supplies migration-planning targets, not an algorithm selection.

The product sensor remains blocked at option selection. The manufacturer does not choose a firmware-signing scheme until it has evidence about a supported signature, the immutable trust anchor, and the production design constraints. It records that dependency in [Choosing an option](/technology-options/choosing/) and [Long-lived roots](/technology-options/long-lived-roots/).

## Change record and deployed-state check

The [change record](/resources/change-record/) distinguishes a completed staging pilot from the product sensor decision, which is still blocked. Its result and evidence make the claim precise: the staging pilot passed, but production migration is not complete.

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | evidence | owner | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | test the supplier's key-establishment update in staging | hybrid X25519MLKEM768 (ML-KEM-768 with X25519) for TLS connections | FIPS 203, NIST, 13 August 2024 (technical standard for ML-KEM) | Workspace 4.2 staging workspace with sample files and one test client | the test client connects and its handshake log shows X25519MLKEM768 negotiated, confirmed by the supplier's connection log; an authorised test account retrieves the sample files | sample retrieval fails, or either log shows classical-only key establishment | product engineering lead with supplier support | staging: client handshake log inspected on 2026-10-21; production: repeat the client check against the production workspace after rollout | staging pilot passed with X25519MLKEM768 negotiated; production rollout pending, so production is not migrated | test client handshake log inspected 2026-10-21, with the supplier connection log as corroboration (fictional); fictional supplier letter, 2026-09-04 | product engineering lead | 2026-10-21 |

The sensor verifier row remains blocked because the replacement signature and trust-root option is not known. No implementation test is claimed:

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | evidence | owner | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | select and test a replacement before production design freeze | unknown | unknown | one pre-production sensor | not started; option unknown | not applicable (boot ROM cannot change after shipment) | not applicable | confirm the selected verifier and trust anchor before design approval | unknown | none yet | product security lead | unknown |

## Subsequent review

At the review on `2026-11-10`, the manufacturer reopened the migration plan, supplier response, archive pilot evidence, and sensor verifier plan. It updated the archive's inventory row to show Workspace 4.2 and X25519MLKEM768 in staging, with production still on Workspace 4.1. The [review log](/resources/review-log/) records each item with its own owner and status: the inventory update is closed, and the six unresolved items stay open with the next review date. The operations director reported the outcome to the managing director the same day:

| date | what was reviewed | item | owner | status | next review |
| --- | --- | --- | --- | --- | --- |
| 2026-11-10 | archive inventory row | update the row to show Workspace 4.2 and X25519MLKEM768 in staging, with production still on Workspace 4.1 | product engineering lead | closed 2026-11-10 | not applicable |
| 2026-11-10 | product-sensor plan line and verifier option | supported firmware-signing option before production design freeze on 2027-06-30 (fictional) | product security lead | open | 2026-12-01 |
| 2026-11-10 | supplier response for the archive | written signature-support plan from the supplier | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | supplier response for the archive | stored-data key wrapping answer and Workspace 4.1 end of support | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | archive pilot evidence | production rollout of Workspace 4.2 and production client handshake check | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | archive agility check | supplier commitments on later updates, notice period for cryptographic changes, and deprecation plan, added to the supplier follow-up | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | office laptop fleet | installed browser and operating-system versions not yet recorded | IT lead | open | 2026-12-01 |

## Rejected alternative

The manufacturer considered a separate cryptographic redesign for its office laptops. It instead tracks supported browsers and operating systems through the NCSC's supplier-update path, while keeping the bespoke product sensor in the migration plan. If a laptop falls out of support or a supplier cannot provide a migration path, the manufacturer reopens that decision.

## Sources

- UK NCSC, *Timelines for migration to post-quantum cryptography*, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST, *Module-Lattice-Based Key-Encapsulation Mechanism Standard*, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)

## Related pages

- [Inventory the cryptography](/migration-practices/inventory/)
- [Inventory record](/resources/inventory-record/)
- [Decide what to migrate first](/migration-practices/priority/)
- [Work with suppliers](/migration-practices/suppliers/)
- [Vendor response log](/resources/vendor-response-log/)
- [Migration plan](/resources/migration-plan/)
- [Choosing an option](/technology-options/choosing/)
- [Key establishment](/technology-options/key-establishment/)
- [Signatures](/technology-options/signatures/)
- [Long-lived roots](/technology-options/long-lived-roots/)
- [Make and verify one change](/migration-practices/implementation/)
- [Change record](/resources/change-record/)
- [Review and report](/migration-practices/subsequent-review/)
- [Review log](/resources/review-log/)
- [Vendor-managed software route](/routes/vendor-managed-software/)
