---
title: Protect this first
sidebar_label: Protect this first
displayed_sidebar: resourcesSidebar
description: Every migration record filled in for one fictional UK manufacturer, from the decision note and charter through inventory, supplier answers, purchase requirements, the plan, a change, review, and the sponsor's report.
---

This worked example shows every record in the [record set](/resources/) filled in for one fictional small manufacturer, in the order the records are used. Each template's filled example is taken from this page, and each record names the same assets, so you can follow one asset from the decision note to the sponsor's report.

The manufacturer is based in the United Kingdom. It is not a critical-infrastructure operator or a regulated-sector case. Every company fact, supplier, product version, letter, release date, and test result below is invented for illustration.

The manufacturer has three different migration paths: product designs in a supplier-hosted archive that must remain confidential for 15 years under the company's own retention policy; a product sensor whose firmware verifier cannot be updated after shipment, together with the key the manufacturer signs its firmware with; and ordinary office laptops that receive standard supplier updates. The UK National Cyber Security Centre (NCSC) milestones are used as UK planning targets. NIST standards are cited only as technical references, not as UK deadlines.

## Initial facts

- **Programme roles**: The managing director is the executive sponsor. The operations director is the migration lead, responsible for the programme records and the review cadence. Asset owners are the product engineering lead, the product security lead, and the IT lead. The managing director accepted the decision note on 2026-07-13, and the programme charter was agreed on 2026-08-03 (fictional).
- **Product-design archive**: The supplier controls the hosted workspace software; the product engineering lead owns the design data. The company's retention policy requires the designs to remain confidential for at least 15 years.
- **Product sensor firmware verifier and signing key**: The manufacturer signs the sensor's firmware with its own key, and each sensor checks that signature against a trust anchor held in write-protected boot ROM. The verifier cannot accept a replacement trust anchor after the sensor ships, so the product security lead needs to resolve the signature path before production design freeze, planned for 2027-06-30 (fictional).
- **Office laptops**: Standard browsers and operating systems are under vendor support and follow the commodity supplier-update path. No exception has been identified.

## Decision note

The [decision note](/resources/decision-note/) answers the four questions for each asset. The archive and the sensor put the manufacturer on the full path as an urgent adopter for those assets; the laptops stay on the short path. The rows are shown as accepted on 2026-07-13; the review on 2026-11-10 later confirmed the laptops' six-year period and added "(all five conditions hold)" to their route, as the [review log](/resources/review-log/) records.

| asset | A long-lived confidentiality | B fixed verifier | C others rely on your signatures | D bespoke systems | category | path | route | next step | owner | confirm by | accepted by |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | yes (15 years under the company retention policy) | no | no | no (supplier-hosted service) | urgent adopter | full | Long-lived confidentiality | set up the programme | operations director | 2026-08-03 | managing director, 2026-07-13 |
| Firmware verifier for product sensor | no (the verifier holds no confidential data) | yes (boot ROM trust anchor) | yes (the manufacturer signs the sensor's firmware) | yes (own product) | urgent adopter | full | Hard-to-change systems | set up the programme | operations director | 2026-08-03 | managing director, 2026-07-13 |
| Office laptops | no (design files are kept in the archive; period for the IT lead to confirm) | no | no | no (supported commodity software) | regular adopter | short | Vendor-managed software | keep commodity software updated | IT lead | 2026-08-03 | managing director, 2026-07-13 |

## Programme charter

Because two assets are on the full path, the managing director agrees a [programme charter](/resources/programme-charter/) naming the roles, the first phase, and the reporting.

| field | entry |
| --- | --- |
| goal | Keep product designs confidential against future quantum attack, secure the product sensor's signature path before production design freeze, and keep office IT on supported supplier updates. |
| in scope | product-design archive; product sensor firmware verifier and its signing key; office laptops, on the supplier-update path |
| out of scope | systems not yet on the inventory, until the first-pass inventory is complete |
| done for this phase | inventory rows for the archive, the sensor's firmware verifier and firmware-signing key, and the laptops; written supplier answers for the archive; a supported signature option for the sensor, or an escalation to the sponsor, before production design freeze on 2027-06-30 |
| executive sponsor | managing director |
| migration lead | operations director |
| asset owners | product engineering lead (archive); product security lead (sensor); IT lead (laptops) |
| procurement | procurement manager |
| legal or risk | company secretary |
| operations | IT lead |
| first budget line | discovery and supplier engagement, from the operations budget |
| budget revisit | at the first quarterly review after the migration plan has an order |
| reporting | monthly report from the migration lead to the sponsor; quarterly review while any line is first in its job's order |
| report triggers | the workspace supplier's release date moves; no supported sensor signature option three months before design freeze |
| people told | asset owners, procurement, and IT by 2026-08-14; the workspace supplier and shortlisted microcontroller suppliers by written question |
| agreed by | managing director, 2026-08-03 |

## Inventory records

The table shows the rows as first recorded. The review on 2026-11-10 updated the archive and laptop rows; see [Subsequent review](#subsequent-review).

The manufacturer records one row for each system on the [inventory record](/resources/inventory-record/). It marks facts it has not verified as `unknown`:

| asset | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | how found | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | product engineering lead | unknown | unknown | workspace supplier | 15 years (company policy) | unknown | Workspace 4.1 (fictional) | workspace supplier's hosting service | supplier-hosted cryptography | asset owner; supplier questions sent | unknown |
| Firmware verifier for product sensor | product security lead | not applicable (verifies signatures only) | unknown | manufacturer | not applicable | unknown | pre-production product (fictional) | boot ROM trust anchor | firmware trust anchor | product design documentation (fictional) | unknown |
| Firmware-signing key for product sensor | product security lead | not applicable (signs only) | unknown | manufacturer | not applicable | unknown | current firmware-signing process (fictional) | firmware verifier for product sensor; signing-key storage | signing-key storage and protection | decision note (question C); product security lead | unknown |
| Office laptops | IT lead | unknown | unknown | operating-system and browser suppliers | unknown | unknown | unknown | unknown | unknown | none yet | unknown |

## Supplier answers

The product engineering lead records the workspace supplier's written answer in the [vendor response log](/resources/vendor-response-log/). For the sensor, procurement asked the two shortlisted microcontroller suppliers in writing on 2026-10-05; the product security lead records the one reply received and marks the other answer `missing` once its due date passes. Every supplier, product, and version is fictional.

| supplier | product and version | asset | job | question | asked | answer due | answer | answered | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fictional design-platform supplier | Workspace 4.2 (fictional) | Product-design archive in supplier-hosted workspace | key establishment | Which key-establishment algorithm or scheme, and which release date, apply to connections to the hosted archive? | 2026-08-14 | 2026-09-14 | The letter says Workspace 4.2 is scheduled for 2026-10-01 and uses hybrid key establishment (X25519MLKEM768) for TLS connections to the hosted workspace. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | complete | later-update commitment, notice period for cryptographic changes, and deprecation plan, due 2026-12-01 | pilot Workspace 4.2 for archive key establishment |
| Fictional design-platform supplier | Workspace 4.2 (fictional) | Product-design archive in supplier-hosted workspace | signatures | When will the hosted archive sign or verify with a post-quantum algorithm? | 2026-08-14 | 2026-09-14 | The letter says Workspace 4.2 does not include post-quantum signing changes and gives no date. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | vague | written signature-support plan due 2026-12-01 | track signatures as a separate plan line |
| Fictional design-platform supplier | Workspace 4.1 and 4.2 (fictional) | Product-design archive in supplier-hosted workspace | key establishment (stored data) | Which algorithm or scheme protects the key wrapping of stored files, and when does support for Workspace 4.1 end? | 2026-08-14 | 2026-09-14 | The letter of 2026-09-04 does not answer either question. | not answered | Fictional supplier letter, 2026-09-04 | missing | written answer due 2026-12-01 | do not count stored-data protection as migrated |
| Fictional microcontroller supplier | next microcontroller family (fictional) | Firmware verifier for product sensor | non-updatable verifier | Does the boot verifier support a NIST-approved post-quantum signature, and how is the trust anchor provisioned? | 2026-10-05 | 2026-11-02 | The reply says a post-quantum boot verifier is planned for the next family, without naming the scheme, a date, or how the trust anchor is provisioned. | 2026-10-30 | Fictional supplier email, 2026-10-30 | vague | written answer naming the scheme, trust-anchor provisioning, and sample date, due 2026-12-15 | do not select; the sensor verifier stays blocked |
| Second fictional microcontroller supplier | candidate microcontroller family (fictional) | Firmware verifier for product sensor | non-updatable verifier | Does the boot verifier support a NIST-approved post-quantum signature, and how is the trust anchor provisioned? | 2026-10-05 | 2026-11-02 | No answer received by the answer due date. | not answered | none | missing | written answer due 2026-12-15 | do not select; the sensor verifier stays blocked |

## Purchase requirements

The sensor's microcontroller has not yet been selected, so procurement makes a post-quantum signature option a condition of selection on the [purchase requirements record](/resources/purchase-requirements/). It has one row per candidate supplier, and neither has committed yet.

| asset | job | purchase or renewal | supplier | product and version | requirement | decide by | supplier commitment | support until | evidence | owner | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | non-updatable verifier | selection of the microcontroller for the product sensor | Fictional microcontroller supplier | next microcontroller family (fictional) | a boot verifier that checks a standards-based post-quantum signature scheme, named with the standard it follows, with the trust-anchor provisioning method and a sample date, as a condition of selection | 2027-06-30 (production design freeze, fictional) | none yet; the reply of 2026-10-30 is vague (fictional supplier email) | unknown | a written answer naming the scheme, trust-anchor provisioning, and sample date, due 2026-12-15; samples for size and boot-time tests | procurement manager with the product security lead | sent, 2026-10-05 |
| Firmware verifier for product sensor | non-updatable verifier | selection of the microcontroller for the product sensor | Second fictional microcontroller supplier | candidate microcontroller family (fictional) | a boot verifier that checks a standards-based post-quantum signature scheme, named with the standard it follows, with the trust-anchor provisioning method and a sample date, as a condition of selection | 2027-06-30 (production design freeze, fictional) | none yet; no answer by 2026-11-02 | unknown | a written answer naming the scheme, trust-anchor provisioning, and sample date, due 2026-12-15; samples for size and boot-time tests | procurement manager with the product security lead | sent, 2026-10-05 |

## Migration plan

The [migration plan](/resources/migration-plan/) holds both the order of work and the dates, one row per asset and job. The archive and the firmware verifier each come first for a different job, and the firmware-signing key comes first for signatures, moving with the verifier because it must switch to whatever scheme the verifier accepts; the archive's signature line follows the supplier, and the laptops are tracked on the supplier-update path rather than ranked. The order for the archive's key establishment rests on the 15-year retention policy, and its supplier readiness on the letter above. Each row's subsequent review follows its own driver: the archive rows on the supplier's answers due 2026-12-01, the sensor on the microcontroller suppliers' answers due 2026-12-15, and the laptops on the next quarterly review.

The plan uses the UK NCSC target dates as planning guidance for this UK-based company. The guidance, written mainly for large organisations, operators of critical national infrastructure, and organisations that run bespoke IT, asks them to complete discovery and build an initial plan by 2028, to carry out their early, highest-priority migration activities by 2031, and to complete migration of systems, services, and products by 2035. The dates are targets, not a claim that every asset has the same milestone.

| asset | job | owner | order | reason and source | supplier readiness | timeline and authority | milestone | supplier release | testing | production deployment | end of support | dependencies | next action | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | key establishment | product engineering lead | first for key establishment | the designs must remain confidential for 15 years (company retention policy, fictional) | complete (connections); missing (stored data) | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | carry out highest-priority migration activities by 2031; complete migration by 2035 | 2026-10-01 | 2026-10-21 (staging pilot passed) | unknown | unknown | workspace supplier's Workspace 4.2 release | complete production checks; obtain the stored-data key-wrapping answer and end of support for Workspace 4.1 | 2026-12-01 |
| Product-design archive in supplier-hosted workspace | signatures | product engineering lead | tracked, not ranked (supplier-led; no bespoke work yet) | the supplier has given no signature date (fictional supplier letter, 2026-09-04) | vague | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025) | complete migration by 2035 | unknown | unknown | unknown | unknown | workspace supplier | obtain the supplier's written signature plan | 2026-12-01 |
| Firmware verifier for product sensor | non-updatable verifier | product security lead | first for non-updatable verifier | the trust anchor cannot be changed after shipment (product design documentation, fictional; NIST IR 8547 device design advice) | vague (fictional microcontroller supplier email, 2026-10-30); missing (second fictional microcontroller supplier) | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025); production design freeze (product plan, fictional) | resolve a supported signature option before production design freeze on 2027-06-30 (fictional); include the long-lived hardware root in the initial plan by 2028 | unknown | unknown | unknown | unknown | boot ROM; production design freeze on 2027-06-30 (fictional) | obtain a supported signature and trust-root option before design freeze; escalate to the managing director if none by 2027-03-31, three months before design freeze | 2026-12-15 |
| Firmware-signing key for product sensor | signatures | product security lead | first for signatures; moves with the non-updatable verifier line | every sensor shipped will check firmware signed with this key, so the signer must switch to the scheme the verifier accepts (product design documentation, fictional) | not applicable (the manufacturer's own signing process) | UK NCSC target dates (UK NCSC, published and reviewed 20 March 2025); production design freeze (product plan, fictional) | choose the signing scheme with the verifier option, before production design freeze on 2027-06-30 (fictional) | not applicable | unknown | unknown | not applicable | firmware verifier option; signing-key storage | record where the signing key is held and how it is protected; choose the signing scheme with the verifier option | 2026-12-15 |
| Office laptops | key establishment; signatures | IT lead | tracked, not ranked (supplier-update path) | no unsupported product or other exception is identified (UK NCSC timelines, published and reviewed 20 March 2025) | not asked (commodity supplier-update path) | UK NCSC target dates; supplier-update path (UK NCSC, published and reviewed 20 March 2025) | track supplier delivery and include the fleet in the 2035 completion view | unknown | not applicable (supplier-update path) | unknown | unknown | browser and operating-system suppliers | keep the fleet on supported versions; check support status at each review | 2027-02-10 |

## Option and authority

The supplier names hybrid key establishment for TLS connections to the workspace: X25519MLKEM768, which combines ML-KEM-768 with the classical X25519 exchange and is one of the groups defined in [RFC 10024](/standards/modules-protocols-identity/rfc-10024/). The manufacturer checks that option against [FIPS 203](/standards/post-quantum/fips-203/), which specifies ML-KEM, and, as a UK company, against the UK NCSC's [TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data) (15 October 2026), written for system administrators who configure TLS, which recommends hybrid key exchange as an interim measure and also accepts ML-KEM on its own, and records both as the authority. The letter covers connections, not the key wrapping of stored files, which the manufacturer has asked about separately. This example records the supplier's choice; it does not present it as a universal default or an independently validated implementation. NIST posted a planning note on 17 November 2025 identifying an issue in FIPS 203 for future correction, so a real implementation decision also checks the FIPS 203 page for current errata. The UK NCSC timeline supplies migration-planning targets, not an algorithm selection.

The product sensor remains blocked at option selection. The manufacturer does not choose a firmware-signing scheme until it has evidence about a supported signature, the immutable trust anchor, and the production design constraints. Following [Choosing an option](/technology-options/choosing/) and [Firmware and secure boot](/technology-options/firmware-secure-boot/), it records the option as `unknown` and the change as blocked on the change record below, with the design freeze as the plan milestone.

## Change record and deployed-state check

The [change record](/resources/change-record/) distinguishes a completed staging pilot from the product sensor decision, which is still blocked. Its result and evidence make the claim precise: the staging pilot passed, but production migration is not complete.

| asset | job | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | evidence | owner | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | key establishment | test the supplier's key-establishment update in staging | hybrid X25519MLKEM768 (ML-KEM-768 with X25519) for TLS connections | FIPS 203 (NIST, 13 August 2024; for US federal systems) for ML-KEM; UK NCSC TLS guidance (15 October 2026; for system administrators) for the hybrid form; hybrid because the supplier ships it | Workspace 4.2 staging workspace with sample files and one test client | the test client connects and its handshake log shows X25519MLKEM768 negotiated, confirmed by the supplier's connection log; an authorised test account retrieves the sample files | sample retrieval fails, or either log shows classical-only key establishment | product engineering lead with supplier support | staging: client handshake log inspected on 2026-10-21; production: repeat the client check against the production workspace after rollout | staging pilot passed with X25519MLKEM768 negotiated; production rollout pending, so production is not migrated | test client handshake log inspected 2026-10-21, with the supplier connection log as corroboration (fictional); fictional supplier letter, 2026-09-04 | product engineering lead | 2026-10-21 |

The sensor verifier row remains blocked because the replacement signature and trust-root option is not known. No implementation test is claimed:

| asset | job | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | evidence | owner | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | non-updatable verifier | select and test a replacement before production design freeze | unknown | unknown | one pre-production sensor | not started; once an option exists: signature and key sizes against storage, verification time against boot time | not applicable (boot ROM cannot change after shipment) | not applicable | confirm the selected verifier and trust anchor before design approval | blocked: no supported option; resolve before production design freeze on 2027-06-30 (fictional) | none yet | product security lead | 2026-11-10 |

## Subsequent review

At the review on `2026-11-10`, the manufacturer reopened the migration plan, supplier responses, purchase requirements, archive pilot evidence, sensor verifier plan, and the laptops' inventory and decision-note rows. It updated the archive's inventory row to show Workspace 4.2 and X25519MLKEM768 in staging, with production still on Workspace 4.1. The IT lead confirmed that design files are opened from the archive rather than stored on laptops, so laptop data falls under the six-year office-records policy, and recorded the installed versions. The [review log](/resources/review-log/) records each item with its own owner, status, and next review: the archive and laptop updates are closed, and five items stay open. The supplier-answer items return on 2026-12-01, the sensor on 2026-12-15, and the archive production check at the quarterly review on 2027-02-10, because the programme reviews every three months while a line is first in its job's order. The review log holds each item:

| date | record | asset | job | item | owner | status | next review |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-11-10 | inventory record | Product-design archive in supplier-hosted workspace | key establishment | update the row to show Workspace 4.2 and X25519MLKEM768 in staging, with production still on Workspace 4.1 | product engineering lead | closed 2026-11-10 | not applicable |
| 2026-11-10 | migration plan; change record; purchase requirements | Firmware verifier for product sensor; Firmware-signing key for product sensor | non-updatable verifier; signatures | supported firmware-signing option for the verifier and the signing key before production design freeze on 2027-06-30 (fictional); written answers from both shortlisted microcontroller suppliers due 2026-12-15; signing-key storage not yet recorded | product security lead | open | 2026-12-15 |
| 2026-11-10 | vendor response log | Product-design archive in supplier-hosted workspace | signatures | written signature-support plan from the supplier | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | vendor response log | Product-design archive in supplier-hosted workspace | key establishment (stored data) | stored-data key wrapping answer and Workspace 4.1 end of support | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | change record | Product-design archive in supplier-hosted workspace | key establishment | production rollout of Workspace 4.2 and production client handshake check | product engineering lead | open | 2027-02-10 |
| 2026-11-10 | vendor response log | Product-design archive in supplier-hosted workspace | key establishment | supplier commitments on later updates, notice period for cryptographic changes, and deprecation plan, added to the supplier follow-up | product engineering lead | open | 2026-12-01 |
| 2026-11-10 | inventory record; decision note | Office laptops | key establishment; signatures | confirm the confidentiality period (6 years, office-records policy, fictional; question A stays `no`, because the IT lead judges six years short of the many years question A covers) and record the installed browser and operating-system versions from the device-management console; the decision note's route now reads "Vendor-managed software (all five conditions hold)" | IT lead | closed 2026-11-10 | not applicable |

The review updated two inventory rows. The archive now shows the staging change and the stored-data gap; the laptops show the confirmed confidentiality period and recorded versions, but their algorithm cells stay `unknown` until the negotiated methods are checked, so `confidence` stays `unknown` and the laptop plan line keeps its next check at the quarterly review:

| asset | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | how found | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | product engineering lead | in transit: X25519MLKEM768 in staging (Workspace 4.2), unknown in production (Workspace 4.1); stored files: unknown | unknown | workspace supplier | 15 years (company policy) | unknown | Workspace 4.2 in staging; Workspace 4.1 in production (fictional) | workspace supplier's hosting service | supplier-hosted cryptography | asset owner; supplier letter, 2026-09-04; staging handshake log, 2026-10-21 | unknown |
| Office laptops | IT lead | unknown | unknown | operating-system and browser suppliers | 6 years (office-records policy, fictional) | unknown | supported browser and operating-system versions, recorded 2026-11-10 from the device-management console | browser and operating-system suppliers | unknown | device-management console; IT lead | unknown |

## Progress report

The operations director reported the outcome to the managing director the same day on the [progress report](/resources/progress-report/), one field per job, written from the plan and the review log:

| field | entry |
| --- | --- |
| date | 2026-11-10 |
| reported by | operations director (migration lead) |
| reported to | managing director (executive sponsor) |
| records reviewed | migration plan; vendor response log; purchase requirements; change records for the archive pilot and the sensor verifier; inventory rows for the archive and the laptops; decision note for the laptops; review log |
| key establishment | Product-design archive in supplier-hosted workspace: staging pilot passed on 2026-10-21 with X25519MLKEM768 negotiated; production rollout pending, so production is not migrated; stored-data key wrapping still unanswered by the supplier. Office laptops: on supported versions, tracked on the supplier-update path. |
| signatures | Product-design archive in supplier-hosted workspace: the supplier has given no signature date. Firmware-signing key for product sensor: scheme to be chosen with the verifier option; where the key is held not yet recorded. Office laptops: tracked on the supplier-update path. |
| non-updatable verifier | Firmware verifier for product sensor: no supported option; one shortlisted microcontroller supplier's reply was vague, and the other has not answered. |
| blocked | Firmware verifier for product sensor: no supported signature and trust-root option; resolve before production design freeze on 2027-06-30 (fictional). |
| milestones at risk | none at this review; the sensor's design-freeze milestone is at risk if no option is found by 2027-03-31 |
| decisions needed | none at this review; escalation to the managing director on 2027-03-31 if there is still no supported sensor option |
| next review | 2026-12-01 (archive supplier answers); 2026-12-15 (microcontroller suppliers' answers); 2027-02-10 (quarterly review) |
| sponsor response | noted by the managing director, 2026-11-10; no decision needed |

## Rejected alternative

The manufacturer considered a separate cryptographic redesign for its office laptops. It instead tracks supported browsers and operating systems through the NCSC's supplier-update path, while keeping the bespoke product sensor in the migration plan. If a laptop falls out of support or a supplier cannot provide a migration path, the manufacturer reopens that decision.

## Sources

- UK NCSC, *Timelines for migration to post-quantum cryptography*, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- UK National Cyber Security Centre, Using TLS to protect data, version 1.2, published 15 October 2026. [NCSC TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data)
- NIST, *Module-Lattice-Based Key-Encapsulation Mechanism Standard*, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Resources: the record set](/resources/)
- [Decision note](/resources/decision-note/)
- [Programme charter](/resources/programme-charter/)
- [Inventory the cryptography](/migration-practices/inventory/)
- [Inventory record](/resources/inventory-record/)
- [Decide what to migrate first](/migration-practices/priority/)
- [Work with suppliers](/migration-practices/suppliers/)
- [Vendor response log](/resources/vendor-response-log/)
- [Purchase requirements](/resources/purchase-requirements/)
- [Migration plan](/resources/migration-plan/)
- [Choosing an option](/technology-options/choosing/)
- [TLS and web services](/technology-options/tls/)
- [PKI and certificates](/technology-options/pki/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [Make and verify one change](/migration-practices/implementation/)
- [Change record](/resources/change-record/)
- [Review and report](/migration-practices/subsequent-review/)
- [Review log](/resources/review-log/)
- [Progress report](/resources/progress-report/)
- [Vendor-managed software route](/routes/vendor-managed-software/)
