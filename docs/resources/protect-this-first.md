---
title: Protect this first
sidebar_label: Protect this first
displayed_sidebar: resourcesSidebar
description: Follow a fictional UK manufacturer through the decision note and charter, inventory, supplier answers, the migration plan, a change and its evidence, and review.
---

This worked example follows a fictional small manufacturer based in the United Kingdom. It is not a critical-infrastructure operator or a regulated-sector case. Every company fact, supplier, product version, letter, release date, and test result below is invented for illustration.

The manufacturer has three different migration paths: product designs in a supplier-hosted archive that must remain confidential for 15 years under the company's own retention policy; a product sensor whose firmware verifier cannot be updated after shipment, together with the key the manufacturer signs its firmware with; and ordinary office laptops that receive standard supplier updates. The UK National Cyber Security Centre (NCSC) milestones are used as UK planning targets. NIST standards are cited only as technical references, not as UK deadlines.

## Initial facts

- **Programme roles**: The managing director is the executive sponsor. The operations director is the migration lead, responsible for the programme records and the review cadence. Asset owners are the product engineering lead, the product security lead, and the IT lead. The managing director accepted the [decision note](/resources/decision-note/) on 2026-07-13, and the [programme charter](/resources/programme-charter/) was agreed on 2026-08-03 (fictional); both pages use this example.
- **Product-design archive**: The supplier controls the hosted workspace software; the product engineering lead owns the design data. The company's retention policy requires the designs to remain confidential for at least 15 years.
- **Product sensor firmware verifier and signing key**: The manufacturer signs the sensor's firmware with its own key, and each sensor checks that signature against a trust anchor held in write-protected boot ROM. The verifier cannot accept a replacement trust anchor after the sensor ships, so the product security lead needs to resolve the signature path before production design freeze, planned for 2027-06-30 (fictional).
- **Office laptops**: Standard browsers and operating systems are under vendor support and follow the commodity supplier-update path. No exception has been identified.

## Inventory records

The table shows the rows as first recorded. The review on 2026-11-10 updated the archive and laptop rows; see [Subsequent review](#subsequent-review).

The manufacturer records one row for each system on the [inventory record](/resources/inventory-record/). It marks facts it has not verified as `unknown`:

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | how found | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | product engineering lead | unknown | unknown | workspace supplier | 15 years (company policy) | unknown | Workspace 4.1 (fictional) | workspace supplier's hosting service | supplier-hosted cryptography | asset owner; supplier questions sent | unknown |
| Firmware verifier for product sensor | product security lead | not applicable (verifies signatures only) | unknown | manufacturer | not applicable | unknown | pre-production product (fictional) | boot ROM trust anchor | firmware trust anchor | product design documentation (fictional) | unknown |
| Firmware-signing key for product sensor | product security lead | not applicable (signs only) | unknown | manufacturer | not applicable | unknown | current firmware-signing process (fictional) | firmware verifier for product sensor; signing-key storage | signing-key storage and protection | decision note (question C); product security lead | unknown |
| Office laptops | IT lead | unknown | unknown | operating-system and browser suppliers | unknown | unknown | unknown | unknown | unknown | none yet | unknown |

## Supplier answers

The product engineering lead records the workspace supplier's written answer in the [vendor response log](/resources/vendor-response-log/). For the sensor, procurement asked the shortlisted microcontroller suppliers in writing; the product security lead records the one reply received so far. Every supplier, product, and version is fictional.

| supplier | product and version | job | question | asked | answer due | answer | answered | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fictional design-platform supplier | Workspace 4.2 (fictional) | key establishment | Which key-establishment algorithm or scheme, and which release date, apply to connections to the hosted archive? | 2026-08-14 | 2026-09-14 | The letter says Workspace 4.2 is scheduled for 2026-10-01 and uses hybrid key establishment (X25519MLKEM768) for TLS connections to the hosted workspace. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | complete | none for this question | pilot Workspace 4.2 for archive key establishment |
| Fictional design-platform supplier | Workspace 4.2 (fictional) | signatures | When will the hosted archive sign or verify with a post-quantum algorithm? | 2026-08-14 | 2026-09-14 | The letter says Workspace 4.2 does not include post-quantum signing changes and gives no date. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | vague | written signature-support plan due 2026-12-01 | track signatures as a separate plan line |
| Fictional design-platform supplier | Workspace 4.1 and 4.2 (fictional) | key establishment (stored data) | Which algorithm or scheme protects the key wrapping of stored files, and when does support for Workspace 4.1 end? | 2026-08-14 | 2026-09-14 | The letter of 2026-09-04 does not answer either question. | not answered | Fictional supplier letter, 2026-09-04 | missing | written answer due 2026-12-01 | do not count stored-data protection as migrated |
| Fictional microcontroller supplier | next microcontroller family (fictional) | non-updatable verifier | Does the boot verifier support a NIST-approved post-quantum signature, and how is the trust anchor provisioned? | 2026-10-05 | 2026-11-02 | The reply says a post-quantum boot verifier is planned for the next family, without naming the scheme, a date, or how the trust anchor is provisioned. | 2026-10-30 | Fictional supplier email, 2026-10-30 | vague | written answer naming the scheme, trust-anchor provisioning, and sample date, due 2026-12-15 | do not select; the sensor verifier stays blocked |

## Migration plan

The [migration plan](/resources/migration-plan/) holds both the order of work and the dates, one row per asset and job. The archive and the firmware verifier each come first for a different job, and the firmware-signing key comes first for signatures, moving with the verifier because it must switch to whatever scheme the verifier accepts; the archive's signature line follows the supplier, and the laptops are tracked on the supplier-update path rather than ranked. The order for the archive's key establishment rests on the 15-year retention policy, and its supplier readiness on the letter above. Each row's subsequent review follows its own driver: the archive rows on the supplier's answers due 2026-12-01, the sensor on the microcontroller supplier's answer due 2026-12-15, and the laptops on the next quarterly review.

The plan uses the UK NCSC target dates as planning guidance for this UK-based company. The guidance asks organisations to complete discovery and build an initial plan by 2028, to carry out their early, highest-priority migration activities by 2031, and to complete migration of systems, services, and products by 2035. The dates are targets, not a claim that every asset has the same milestone.

| asset | job | owner | order | reason and source | supplier readiness | timeline and authority | milestone | supplier release | testing | production deployment | end of support | dependencies | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | key establishment | product engineering lead | first for key establishment | the designs must remain confidential for 15 years (company retention policy, fictional) | complete | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | carry out highest-priority migration activities by 2031; complete migration by 2035 | 2026-10-01 | 2026-10-21 (staging pilot passed) | unknown | unknown | workspace supplier's Workspace 4.2 release | complete production checks; obtain end of support for Workspace 4.1 | 2026-12-01 |
| Product-design archive in supplier-hosted workspace | signatures | product engineering lead | track with the supplier; no bespoke work yet | the supplier has given no signature date (fictional supplier letter, 2026-09-04) | vague | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | complete migration by 2035 | unknown | unknown | unknown | unknown | workspace supplier | obtain the supplier's written signature plan | 2026-12-01 |
| Firmware verifier for product sensor | non-updatable verifier | product security lead | first for non-updatable verifier | the trust anchor cannot be changed after shipment (product design documentation, fictional; NIST IR 8547 device design advice) | vague (fictional microcontroller supplier email, 2026-10-30) | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025); production design freeze (product plan, fictional) | resolve a supported signature option before production design freeze on 2027-06-30 (fictional); include the long-lived hardware root in the initial plan by 2028 | unknown | unknown | unknown | unknown | boot ROM; production design freeze on 2027-06-30 (fictional) | obtain a supported signature and trust-root option before design freeze | 2026-12-15 |
| Firmware-signing key for product sensor | signatures | product security lead | first for signatures; moves with the non-updatable verifier line | every sensor shipped will check firmware signed with this key, so the signer must switch to the scheme the verifier accepts (product design documentation, fictional) | not applicable (the manufacturer's own signing process) | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025); production design freeze (product plan, fictional) | choose the signing scheme with the verifier option, before production design freeze on 2027-06-30 (fictional) | not applicable | unknown | unknown | not applicable | firmware verifier option; signing-key storage | record where the signing key is held and how it is protected; choose the signing scheme with the verifier option | 2026-12-15 |
| Office laptops | key establishment; signatures | IT lead | tracked, not ranked (supplier-update path) | no unsupported product or other exception is identified (UK NCSC timelines, published and reviewed 20 March 2025) | not asked (commodity supplier-update path) | UK NCSC target dates; supplier-update path (UK NCSC, published and reviewed 20 March 2025) | track supplier delivery and include the fleet in the 2035 completion view | unknown | not applicable (supplier-update path) | unknown | unknown | browser and operating-system suppliers | keep the fleet on supported versions; check support status at each review | 2027-02-10 |

## Option and authority

The supplier names hybrid key establishment for TLS connections to the workspace: X25519MLKEM768, which combines ML-KEM-768 with the classical X25519 exchange and is one of the groups defined in [RFC 10024](/standards/modules-protocols-identity/rfc-10024/). The manufacturer records that option against [FIPS 203](/standards/post-quantum/fips-203/), which specifies ML-KEM. The letter covers connections, not the key wrapping of stored files, which the manufacturer has asked about separately. This example records the supplier's choice; it does not present it as a universal default or an independently validated implementation. NIST posted a planning note on 17 November 2025 identifying an issue in FIPS 203 for future correction, so a real implementation decision also checks the FIPS 203 page for current errata. The UK NCSC timeline supplies migration-planning targets, not an algorithm selection.

The product sensor remains blocked at option selection. The manufacturer does not choose a firmware-signing scheme until it has evidence about a supported signature, the immutable trust anchor, and the production design constraints. Following [Choosing an option](/technology-options/choosing/) and [Long-lived roots of trust](/technology-options/long-lived-roots/), it records the option as `unknown` and the change as blocked on the change record below, with the design freeze as the plan milestone.

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

At the review on `2026-11-10`, the manufacturer reopened the migration plan, supplier responses, archive pilot evidence, sensor verifier plan, and laptop row. It updated the archive's inventory row to show Workspace 4.2 and X25519MLKEM768 in staging, with production still on Workspace 4.1. The IT lead confirmed that design files are opened from the archive rather than stored on laptops, so laptop data falls under the six-year office-records policy, and recorded the installed versions. The [review log](/resources/review-log/) records each item with its own owner, status, and next review: the archive and laptop updates are closed, and five items stay open. The supplier-answer items return on 2026-12-01, the sensor on 2026-12-15, and the archive production check at the quarterly review on 2027-02-10, because the programme reviews every three months while a line is first in its job's order. The operations director reported the outcome to the managing director the same day:

| date | what was reviewed | item | owner | status | next review |
| --- | --- | --- | --- | --- | --- |
| 2026-11-10 | archive inventory row | update the row to show Workspace 4.2 and X25519MLKEM768 in staging, with production still on Workspace 4.1 | product engineering lead | closed 2026-11-10 | not applicable |
| 2026-11-10 | product-sensor plan line and verifier option | supported firmware-signing option for the verifier and the signing key before production design freeze on 2027-06-30 (fictional); microcontroller supplier's written answer due 2026-12-15; signing-key storage not yet recorded | product security lead | open | 2026-12-15 |
| 2026-11-10 | supplier response for the archive | written signature-support plan from the supplier | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | supplier response for the archive | stored-data key wrapping answer and Workspace 4.1 end of support | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | archive pilot evidence | production rollout of Workspace 4.2 and production client handshake check | product engineering lead | open | 2027-02-10 |
| 2026-11-10 | archive agility check | supplier commitments on later updates, notice period for cryptographic changes, and deprecation plan, added to the supplier follow-up | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | office laptop fleet | confirm the confidentiality period and record installed versions: 6 years under the office-records policy (fictional), with supported browser and operating-system versions recorded from the device-management console | IT lead | closed 2026-11-10 | not applicable |

## Rejected alternative

The manufacturer considered a separate cryptographic redesign for its office laptops. It instead tracks supported browsers and operating systems through the NCSC's supplier-update path, while keeping the bespoke product sensor in the migration plan. If a laptop falls out of support or a supplier cannot provide a migration path, the manufacturer reopens that decision.

## Sources

- UK NCSC, *Timelines for migration to post-quantum cryptography*, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST, *Module-Lattice-Based Key-Encapsulation Mechanism Standard*, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)

## Related pages

- [Decision note](/resources/decision-note/)
- [Programme charter](/resources/programme-charter/)
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
