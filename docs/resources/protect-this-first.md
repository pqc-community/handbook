---
title: Protect this first
sidebar_label: Protect this first
displayed_sidebar: resourcesSidebar
last_reviewed: 2026-11-10
description: End-to-end worked example tracing a fictional clinic across inventory, priority, supplier response, option selection, change verification, and review.
---

The clinic below is a worked illustration rather than a real organisation. It operates patient health records on a vendor-managed platform, field devices whose firmware signature verifier cannot be updated in the field, and standard office laptops. The sections below trace that single estate across the handbook's work products in order.

## Initial facts

- **Health-records platform**: Hosted on a vendor-managed system owned internally by the clinic operations lead, with software controlled by the supplier. Because the [EU NIS Cooperation Group roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf) (version 1.1, 11 June 2025) classifies public-key-protected confidentiality as high-risk when compromise after 10 years or more would still cause significant damage, this system enters prioritisation under `key establishment`.
- **Field-device firmware check**: Uses a hardware-anchored signature check that cannot be updated in the field, entering prioritisation under `non-updatable verifier`.
- **Office laptops**: Under the [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) (modified 3 August 2026), standard browsers, operating systems, and mobile devices follow a supplier-update path, so laptops remain on routine vendor patching rather than joining the bespoke redesign queue.

## Inventory records

The clinic records one row per system on the [inventory record](/resources/inventory-record/), marking unverified fields as `unknown`:

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | the clinic operations lead | unknown | unknown | the vendor | more than 10 years | unknown | unknown | unknown | unknown | unknown |
| Firmware signature check that cannot be updated in the field | the clinic operations lead | unknown | unknown | unknown | unknown | unknown | unknown | unknown | firmware trust anchor | unknown |

## Priority decision

Both assets rank first on the [priority record](/resources/priority-record/) because they address distinct cryptographic jobs:

| asset | confidentiality period | job | impact | lead time | dependencies | supplier readiness | decision | reason | source | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | more than 10 years | key establishment | unknown | unknown | unknown | unknown | first for key establishment | confidentiality period longer than 10 years | EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025 | 2026-12-01 |
| Firmware signature check that cannot be updated in the field | unknown | non-updatable verifier | unknown | unknown | unknown | unknown | first for non-updatable verifier | verifier cannot be updated in the field | UK NCSC timelines, modified 3 August 2026 | 2026-12-01 |

## Supplier answer

A written commitment from the platform vendor is logged on the [vendor response log](/resources/vendor-response-log/):

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Clinic software supplier | named in the supplier letter | What key-establishment construction and release date apply to the health-records platform? | The letter names the product and version, names ML-KEM-768, names the release date, and states that signatures are not in that release. | 2026-08-14 | supplier letter | complete | none | record the key-establishment date and open a signatures follow-up |

## Option and authority

Before deployment, the clinic records the chosen option and supporting standard using [Choosing an option](/algorithm-protocol-options/choosing/). For the health-records key-establishment channel, the supplier's ML-KEM-768 release aligns with the default key-establishment recommendation in [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026), which is cited as the technical authority.

## Change record and deployed-state check

Two entries sit on the [change record](/resources/change-record/) — a completed pilot for the health-records channel verified against the deployed configuration, and a blocked entry for the field-device firmware:

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | Adopt the supplier's key-establishment construction | ML-KEM-768 | NIST IR 8547, October 2026 | One clinic site | Key establishment on the health-records channel | Clients cannot connect after the change | the clinic operations lead | The deployed configuration matches the supplier letter | Pilot passed | 2026-08-14 |

The firmware row remains blocked because implementation does not start while the replacement option is `unknown`:

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Clinic field device firmware signature check | replace trust anchor before next deployment | unknown | unknown | one spare device in the workshop | signature verification on sample firmware | failed verification on pilot device | the clinic operations lead | compare flashed firmware hash to signed manifest | unknown | unknown |

## Subsequent review

The clinic schedules a subsequent review for `2026-12-01` and tracks the open firmware blocker on the [review log](/resources/review-log/) using the [subsequent review](/migration-practices/subsequent-review/) agenda:

| date | what was reviewed | unresolved items | owner | next review |
| --- | --- | --- | --- | --- |
| unknown | priority record and vendor response log for health records | blocked firmware option | the clinic operations lead | 2026-12-01 |

## Rejected alternative

The clinic initially considered running a bespoke migration project for office laptops alongside the health-records platform. Because the [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) (modified 3 August 2026) place standard client devices on the commodity supplier-update path, the clinic instead tracks laptop updates under the [vendor-managed software route](/routes/vendor-managed-software/) and [Commodity software](/migration-practices/commodity-software/).

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
