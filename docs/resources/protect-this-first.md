---
title: Protect this first
sidebar_label: Protect this first
sidebar_position: 5
displayed_sidebar: resourcesSidebar
last_reviewed: 2026-11-10
description: A labelled illustration, not a real organisation. The clinic walks inventory, priority, supplier answers, options, change, and review in order.
---

**Example:** This page is an illustration, not a real organisation.

The fictional clinic runs health records on a vendor system and field devices whose firmware signature check cannot be updated in the field. Office laptops stay on the commodity path. The sections below follow one organisation through the work products in order.

## Initial facts

**Example:** Health records sit on a vendor-managed platform. **Authority recommendation:** The EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025, treats confidentiality protected by public-key cryptography as high-risk when a compromise after 10 years or more would still cause significant damage, so confidentiality on those records still matters after 10 years. The inventory owner is the clinic operations lead. Software control sits with the vendor. The priority job for that row is `key establishment`.

**Example:** A firmware signature check on clinic field devices cannot be updated in the field. The priority job for that row is `non-updatable verifier`.

**Authority recommendation:** The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, treat standard browsers, operating systems, and mobile devices as a supplier-update path. **Handbook practice:** The clinic's office laptops stay on that path rather than on the redesign list for the health-records platform or the firmware root.

## Inventory records

**Handbook practice:** The clinic keeps one row per system on the [inventory record](/resources/inventory-record/). Unfilled cells are the word `unknown`.

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | the clinic operations lead | unknown | unknown | the vendor | more than 10 years | unknown | unknown | unknown | unknown | unknown |
| Firmware signature check that cannot be updated in the field | the clinic operations lead | unknown | unknown | unknown | unknown | unknown | unknown | unknown | firmware trust anchor | unknown |

## Priority decision

**Example:** Both assets are `first`, for different jobs. Record them on the [priority record](/resources/priority-record/).

| asset | confidentiality period | job | impact | lead time | dependencies | supplier readiness | decision | reason | source | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | more than 10 years | key establishment | unknown | unknown | unknown | unknown | first for key establishment | confidentiality period longer than 10 years | EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025 | 2026-12-01 |
| Firmware signature check that cannot be updated in the field | unknown | non-updatable verifier | unknown | unknown | unknown | unknown | first for non-updatable verifier | verifier cannot be updated in the field | UK NCSC timelines, modified 3 August 2026 | 2026-12-01 |

## Supplier answer

**Handbook practice:** One complete supplier letter is logged on the [vendor response log](/resources/vendor-response-log/).

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Clinic software supplier | named in the supplier letter | What key-establishment construction and release date apply to the health-records platform? | The letter names the product and version, names ML-KEM-768, names the release date, and states that signatures are not in that release. | 2026-08-14 | supplier letter | complete | none | record the key-establishment date and open a signatures follow-up |

## Option and authority

**Handbook practice:** Before implementation, the clinic records the option and its authority on [Choosing an option](/algorithm-protocol-options/choosing/).

**Example:** For the health-records key-establishment channel, the clinic matches the supplier's named construction to the default key-establishment option in [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, and records that publication as the authority. This page does not reproduce a parameter table.

## Change record and deployed-state check

**Handbook practice:** The clinic records two changes on the [change record](/resources/change-record/): the health-records change is closed, and the firmware change is blocked. The row that matters for verification is the deployed-state check.

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | Adopt the supplier's key-establishment construction | ML-KEM-768 | NIST IR 8547, October 2026 | One clinic site | Key establishment on the health-records channel | Clients cannot connect after the change | the clinic operations lead | The deployed configuration matches the supplier letter | Pilot passed | 2026-08-14 |

The firmware row is blocked: implementation does not start while the option is unknown.

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Clinic field device firmware signature check | replace trust anchor before next deployment | unknown | unknown | one spare device in the workshop | signature verification on sample firmware | failed verification on pilot device | the clinic operations lead | compare flashed firmware hash to signed manifest | unknown | unknown |

## Subsequent review

**Example:** The clinic sets the subsequent review to 2026-12-01 in the priority record, and opens the [review log](/resources/review-log/) when that date arrives. The agenda follows [subsequent review](/migration-practices/subsequent-review/).

| date | what was reviewed | unresolved items | owner | next review |
| --- | --- | --- | --- | --- |
| unknown | priority record and vendor response log for health records | blocked firmware option | the clinic operations lead | 2026-12-01 |

## Rejected alternative

**Example:** The clinic considered treating office laptops as a full redesign alongside the health-records platform.

**Authority recommendation:** The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, place standard laptops on the commodity path: those devices wait for the supplier update. The clinic records laptops on the [vendor-managed software route](/routes/vendor-managed-software/) and the [commodity software](/migration-practices/commodity-software/) practice instead of opening a redesign programme for them.

## Sources

- EU NIS Cooperation Group, Coordinated Implementation Roadmap on post-quantum cryptography, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Inventory](/migration-practices/inventory/)
- [Inventory record](/resources/inventory-record/)
- [Priority](/migration-practices/priority/)
- [Priority record](/resources/priority-record/)
- [Vendor plan](/migration-practices/vendor-plan/)
- [Vendor response log](/resources/vendor-response-log/)
- [Choosing an option](/algorithm-protocol-options/choosing/)
- [Key establishment](/algorithm-protocol-options/key-establishment/)
- [Long-lived roots](/algorithm-protocol-options/long-lived-roots/)
- [Implementation](/migration-practices/implementation/)
- [Change record](/resources/change-record/)
- [Subsequent review](/migration-practices/subsequent-review/)
- [Review log](/resources/review-log/)
- [Vendor-managed software route](/routes/vendor-managed-software/)
