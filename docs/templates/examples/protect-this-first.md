---
title: Protect this first
search_title: "Worked example: a manufacturer's PQC migration"
sidebar_label: Protect this first
displayed_sidebar: templatesSidebar
description: All five migration records filled in for one fictional UK manufacturer running a full programme, from the questions and the charter to the sponsor's report.
---

This worked example follows one fictional manufacturer from [Which plan you need](/plan/) through a full [programme](/plan/programme/), with all five [records](/templates/records/) filled in. Each record page's filled example is taken from this page, and every record names the same systems, so you can follow one system from its register row to the sponsor's report.

The manufacturer is based in the United Kingdom. It is not a critical-infrastructure operator or a regulated-sector case. Every company fact, supplier, product version, letter, release date, and test result below is invented for illustration. The UK National Cyber Security Centre (NCSC) milestones are used as UK planning targets; NIST standards are cited only as technical references, not as UK deadlines.

## Initial facts

- **Roles**: The managing director is the executive sponsor. The operations director is the migration lead, responsible for the records and the review cadence. System owners are the product engineering lead, the product security lead, and the IT lead.
- **Product-design archive**: The supplier controls the hosted workspace software; the product engineering lead owns the design data. The company's retention policy requires the designs to remain confidential for at least 15 years.
- **Product sensor**: The manufacturer signs the sensor's firmware with its own key, and each sensor checks that signature against a trust anchor held in write-protected boot ROM. The verifier cannot accept a replacement trust anchor after the sensor ships, so the product security lead needs a supported signature option before production design freeze, planned for 30 June 2027.
- **Office laptops**: Standard browsers and operating systems under vendor support, kept updated by the IT lead.

## The four questions

On 13 July 2026 the operations director answered the four questions in [Which plan you need](/plan/) for the organisation as a whole, and the managing director accepted the answers:

- **Question 1, data that must stay secret for years**: applies. The product designs must stay confidential for 15 years, and the archive is supplier-hosted, so connections and stored files are both protected by the supplier's cryptography.
- **Question 2, devices with a fixed key**: applies. The sensor's boot ROM trust anchor cannot change after shipment.
- **Question 3, signatures others rely on**: applies. Every sensor shipped checks firmware the manufacturer signs.
- **Question 4, systems you build or configure**: applies. The sensor's firmware is the manufacturer's own product. Office IT is supported commodity software, kept covered by the core actions.

Because a device with a fixed key is involved, the manufacturer runs a full programme. The office laptops are covered by the [core actions](/plan/core-actions/): they hold office records, kept for six years, not the long-lived designs.

## First moves

In the week after answering, the manufacturer took a first move for each question that applied:

- **Question 1, the archive**: on 15 July 2026 the product engineering lead asked the workspace supplier in writing which method protects connections and which protects stored files, and when each changes.
- **Question 2, the sensor verifier**: the product security lead made a post-quantum signature in the boot verifier a condition of selection for the next sensor's microcontroller, before the design freeze. Procurement put the written question to the two shortlisted suppliers on 5 October 2026, once the shortlist existed.
- **Question 3, firmware signing**: the product security lead listed who checks the firmware signatures: every sensor shipped, through its boot verifier.
- **Question 4, the firmware build**: the product security lead started a register row for the firmware-signing key, to hold the signing tool's library and version once recorded.

## Programme charter

The managing director agreed a [programme charter](/templates/records/programme-charter/) on 3 August 2026, naming the roles, the first phase, and the reporting.

| field | entry |
| --- | --- |
| goal | Keep product designs confidential against future quantum attack, secure the product sensor's signature path before production design freeze, and keep office IT on supported supplier updates. |
| in scope | product-design archive; product sensor firmware verifier and its signing key; office laptops, covered by the core actions |
| out of scope | systems not yet on the register, until the first-pass inventory is complete |
| done for this phase | register rows for the archive, the sensor's firmware verifier and firmware-signing key, and the laptops; written supplier answers for the archive; a supported signature option for the sensor, or an escalation to the sponsor, before production design freeze on 2027-06-30 |
| executive sponsor | managing director |
| migration lead | operations director |
| system owners | product engineering lead (archive); product security lead (sensor); IT lead (laptops) |
| procurement | procurement manager |
| legal or risk | company secretary |
| operations | IT lead |
| first budget line | discovery and supplier engagement, from the operations budget |
| budget revisit | at the first quarterly review after the register has an order |
| reporting | progress report from the migration lead to the sponsor at each review; reviews every three months while any register row is first in its job's order |
| report triggers | the workspace supplier's release date moves; no supported sensor signature option three months before design freeze |
| people told | system owners, procurement, and IT by 2026-08-14; the workspace supplier and shortlisted microcontroller suppliers by written question |
| agreed by | managing director, 2026-08-03 |

## Register

The [register](/templates/records/register/) holds one row per system and job. The archive has separate rows for connections, stored data, and signatures, because the supplier's answers and the follow-up dates differ. The verifier and the firmware-signing key each come first for their own job, and the key moves with the verifier because the signer must switch to whatever scheme the verifier accepts. The laptops are tracked covered by the core actions rather than ranked. The table shows the register as updated at the review on 10 November 2026.

The manufacturer uses the UK NCSC [timelines](/standards/migration-guides/ncsc-migration-timelines/) as planning targets for this UK company. They are aimed primarily at large organisations, operators of critical national infrastructure, and organisations with bespoke IT, and say their core timelines are relevant to all organisations. The dates are targets, not a claim that every system has the same milestone.

| system | job | owner | why it is here | protected by today | version or plan | supplier | supplier answer | judgement | dates that apply | supplier release | testing | production deployment | end of support | order | next step | status | next review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | key establishment | product engineering lead | question 1: designs confidential for 15 years (company retention policy, fictional) | in transit: X25519MLKEM768 in staging; unknown in production | Workspace 4.2 in staging; Workspace 4.1 in production (fictional) | Fictional design-platform supplier | letter of 2026-09-04: Workspace 4.2, due 2026-10-01, uses hybrid X25519MLKEM768 for TLS connections to the hosted workspace | complete | UK NCSC: highest-priority migration by 2031, complete by 2035 (20 March 2025) | 2026-10-01 | 2026-10-21 (staging pilot passed) | unknown | unknown | first for key establishment | roll out Workspace 4.2 and repeat the client handshake check in production | open | 2027-02-10 |
| Product-design archive in supplier-hosted workspace | key establishment (stored data) | product engineering lead | question 1: designs confidential for 15 years (company retention policy, fictional) | unknown | Workspace 4.1 in production (fictional) | Fictional design-platform supplier | the letter of 2026-09-04 does not say whether a public-key step protects stored files' keys, or when Workspace 4.1 support ends | missing | UK NCSC: highest-priority migration by 2031, complete by 2035 (20 March 2025) | unknown | unknown | unknown | unknown | first for key establishment, with the connections row | obtain the written answer due 2026-12-01; do not count stored data as migrated | open | 2026-12-01 |
| Product-design archive in supplier-hosted workspace | signatures | product engineering lead | on the register for question 1; its signatures are supplier-led | unknown | Workspace 4.2 (fictional) | Fictional design-platform supplier | letter of 2026-09-04: Workspace 4.2 has no post-quantum signing changes and gives no date | vague | UK NCSC: complete by 2035 (20 March 2025) | unknown | unknown | unknown | unknown | tracked, not ranked (supplier-led) | obtain the supplier's written signature plan, due 2026-12-01 | open | 2026-12-01 |
| Firmware verifier for product sensor | non-updatable verifier | product security lead | question 2: the boot ROM trust anchor cannot be changed after shipment (product design documentation, fictional) | unknown | pre-production product (fictional) | Fictional microcontroller supplier; Second fictional microcontroller supplier | email of 2026-10-30: a post-quantum boot verifier is planned, with no scheme, date, or trust-anchor provisioning named; second supplier: no answer by 2026-11-02 | vague; missing | production design freeze 2027-06-30 (product plan, fictional); UK NCSC: long-lived hardware roots of trust in the initial plan by 2028 (20 March 2025) | unknown | unknown | unknown | not applicable | first for non-updatable verifier | obtain written answers due 2026-12-15; escalate to the managing director if no supported option by 2027-03-31 | blocked: resolve before 2027-06-30 | 2026-12-15 |
| Firmware-signing key for product sensor | signatures | product security lead | questions 3 and 4: every sensor shipped checks firmware the manufacturer builds and signs with this key | unknown | current firmware-signing process (fictional) | not applicable (the manufacturer's own signing) | not applicable | not applicable | production design freeze 2027-06-30 (product plan, fictional) | not applicable | unknown | unknown | not applicable | first for signatures; moves with the verifier row | choose the signing scheme with the verifier option; record where the key is held and the signing tool's library and version | open | 2026-12-15 |
| Office laptops | key establishment; signatures | IT lead | core actions: supported commodity software; no question applies (office records kept 6 years, fictional) | unknown | supported browser and operating-system versions, recorded 2026-11-10 from the device-management console | browser and operating-system suppliers | published support pages and post-quantum roadmaps cover both jobs for the installed versions (fictional) | not asked (in support) | UK NCSC: commodity IT upgraded mostly by service providers (20 March 2025) | unknown | not applicable | unknown | unknown | tracked, not ranked (core actions) | keep on supported versions; check support at each review | open | 2027-02-10 |

## Purchase wording

The sensor's microcontroller has not been selected, so procurement makes a post-quantum signature option a condition of selection on the [purchase wording](/templates/records/purchase-wording/) record. It has one row per candidate supplier, and neither has committed yet.

| system | job | purchase or renewal | supplier | product and version | wording | decide by | supplier commitment | support until | evidence | owner | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | non-updatable verifier | selection of the microcontroller for the product sensor | Fictional microcontroller supplier | next microcontroller family (fictional) | a boot verifier that checks a standards-based post-quantum signature scheme, named with the standard it follows, with the trust-anchor provisioning method and a sample date, as a condition of selection | 2027-06-30 (production design freeze, fictional) | none yet; the reply of 2026-10-30 is vague (fictional supplier email) | unknown | a written answer naming the scheme, trust-anchor provisioning, and sample date, due 2026-12-15; samples for size and boot-time tests | procurement manager with the product security lead | sent, 2026-10-05 |
| Firmware verifier for product sensor | non-updatable verifier | selection of the microcontroller for the product sensor | Second fictional microcontroller supplier | candidate microcontroller family (fictional) | a boot verifier that checks a standards-based post-quantum signature scheme, named with the standard it follows, with the trust-anchor provisioning method and a sample date, as a condition of selection | 2027-06-30 (production design freeze, fictional) | none yet; no answer by 2026-11-02 | unknown | a written answer naming the scheme, trust-anchor provisioning, and sample date, due 2026-12-15; samples for size and boot-time tests | procurement manager with the product security lead | sent, 2026-10-05 |

## Option and authority

The supplier names hybrid key establishment for TLS connections to the workspace: X25519MLKEM768, which combines ML-KEM-768 with the classical X25519 exchange and is one of the groups defined in [RFC 10024](/standards/modules-protocols-certificates/rfc-10024/). The manufacturer checks that option against [FIPS 203](/standards/post-quantum/fips-203/), which specifies ML-KEM. As a UK company, it also checks it against the UK NCSC's [TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data) (15 October 2026), written for system administrators who configure TLS. That guidance recommends hybrid key exchange as an interim measure and also accepts ML-KEM on its own. The letter covers connections, not the protection of stored files' keys, which the manufacturer has asked about separately. This example records the supplier's choice; it does not present it as a universal default or an independently validated implementation. NIST posted a planning note on 17 November 2025 identifying an issue in FIPS 203 for future correction, so a real implementation decision also checks the FIPS 203 page for current errata.

The sensor remains blocked at option selection. Following [Choosing an option](/technology-options/choosing/) and [Firmware and secure boot](/technology-options/firmware-secure-boot/), the manufacturer does not choose a firmware-signing scheme until it has evidence about a supported signature, the trust anchor, and the production design constraints. It records the option as unknown and the change as blocked, with the design freeze as the date to resolve it by.

## Change records

The [change record](/templates/records/change-record/) separates a completed staging pilot from the sensor decision, which is still blocked. Its result makes the claim precise: the staging pilot passed, but production is not migrated.

| system | job | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | evidence | owner | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | key establishment | test the supplier's key-establishment update in staging | hybrid X25519MLKEM768 (ML-KEM-768 with X25519) for TLS connections | FIPS 203 (NIST, 13 August 2024; for US federal systems) for ML-KEM; UK NCSC TLS guidance (15 October 2026; for system administrators) for the hybrid form; hybrid because the supplier ships it | Workspace 4.2 staging workspace with sample files and one test client | the test client connects and its handshake log shows X25519MLKEM768 negotiated, confirmed by the supplier's connection log; an authorised test account retrieves the sample files | sample retrieval fails, or either log shows classical-only key establishment | product engineering lead with supplier support | staging: client handshake log inspected on 2026-10-21; production: repeat the client check against the production workspace after rollout | staging pilot passed with X25519MLKEM768 negotiated; production rollout pending, so production is not migrated | test client handshake log inspected 2026-10-21, with the supplier connection log as corroboration (fictional); fictional supplier letter, 2026-09-04 | product engineering lead | 2026-10-21 |

The sensor verifier's change is blocked because no supported signature and trust-root option is known. No implementation test is claimed:

| system | job | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | evidence | owner | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | non-updatable verifier | select and test a replacement before production design freeze | unknown | unknown | one pre-production sensor | not started; once an option exists: signature and key sizes against storage, verification time against boot time | not applicable (boot ROM cannot change after shipment) | not applicable | confirm the selected verifier and trust anchor before design approval | blocked: no supported option; resolve before production design freeze on 2027-06-30 (fictional) | none yet | product security lead | 2026-11-10 |

## Review

At the review on 10 November 2026, the operations director reopened the register, the purchase wording, and both change records. The archive's connections row now shows X25519MLKEM768 in staging, with production still on Workspace 4.1. The IT lead confirmed that design files are opened from the archive rather than stored on laptops, recorded the installed laptop versions, and checked that the browser and operating-system suppliers' published support and post-quantum roadmap pages cover both jobs. Five items remain open: the workspace supplier's answers on stored data and on signatures, due 1 December 2026; the two microcontroller suppliers' answers, due 15 December 2026; and the archive's production check at the quarterly review on 10 February 2027. The programme reviews every three months while a row is first in its job's order.

## Progress report

The operations director reported to the managing director the same day, using the [progress report](/templates/records/progress-report/), with a field for each job and every entry drawn from the register:

| field | entry |
| --- | --- |
| date | 2026-11-10 |
| reported by | operations director (migration lead) |
| reported to | managing director (executive sponsor) |
| records reviewed | register; purchase wording; change records for the archive pilot and the sensor verifier |
| key establishment | Product-design archive in supplier-hosted workspace: staging pilot passed on 2026-10-21 with X25519MLKEM768 negotiated; production rollout pending, so production is not migrated; stored-data key wrapping still unanswered by the supplier. Office laptops: on supported versions, tracked covered by the core actions. |
| signatures | Product-design archive in supplier-hosted workspace: the supplier has given no signature date. Firmware-signing key for product sensor: scheme to be chosen with the verifier option; where the key is held not yet recorded. Office laptops: tracked covered by the core actions. |
| non-updatable verifier | Firmware verifier for product sensor: no supported option; one shortlisted microcontroller supplier's reply was vague, and the other has not answered. |
| blocked | Firmware verifier for product sensor: no supported signature and trust-root option; resolve before production design freeze on 2027-06-30 (fictional). |
| milestones at risk | none at this review; the sensor's design-freeze milestone is at risk if no option is found by 2027-03-31 |
| decisions needed | none at this review; escalation to the managing director on 2027-03-31 if there is still no supported sensor option |
| next review | 2026-12-01 (archive supplier answers); 2026-12-15 (microcontroller suppliers' answers); 2027-02-10 (quarterly review) |
| sponsor response | noted by the managing director, 2026-11-10; no decision needed |

## Alternative not chosen

The manufacturer considered a separate cryptographic redesign for its office laptops. It instead covers them with the core actions, tracking supported browsers and operating systems through supplier updates, as the NCSC expects for commodity platforms, while running the programme for the archive and the sensor. If a laptop leaves support, the core action to replace what is out of support applies.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- UK National Cyber Security Centre, Using TLS to protect data, version 1.2, published 15 October 2026. [NCSC TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- IETF, Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, RFC 10024, Proposed Standard, August 2026. [RFC 10024](https://www.rfc-editor.org/info/rfc10024)

## Related pages

- [Which plan you need](/plan/)
- [Programme](/plan/programme/)
- [Migration records](/templates/records/)
- [Register](/templates/records/register/)
- [Work with suppliers](/plan/programme/suppliers/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [Stay on supplier updates](/templates/examples/stay-on-supplier-updates/)
