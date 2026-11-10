---
title: Post-quantum migration dates
sidebar_label: Dates
sidebar_position: 2
displayed_sidebar: standardsTimelinesSidebar
last_reviewed: 2026-11-10
description: Whose migration timeline applies, and which date belongs to which audience.
---

## When this applies

The reader needs to know which timeline to record.

## Do this

Identify where the organisation operates and where it sells. Record one row of the table for each timeline that applies. A reader who cannot tell which timeline applies is sent to the risk owner or the sector authority.

| authority | audience | milestone | status | asset scope | last checked |
| --- | --- | --- | --- | --- | --- |
| UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026 | Primarily technical decision-makers and risk owners of large organisations, operators of critical national infrastructure, and companies with bespoke IT. Commodity IT (standard browsers, operating systems, and mobile devices) follows the supplier update; custom or specialised software follows the same timetable as larger organisations. | By 2028, define migration goals, carry out discovery, and build an initial plan (including telling suppliers what you need, and migrating long-lived hardware roots of trust). By 2031, carry out the early, highest-priority migration activities and refine the roadmap. By 2035, complete migration of systems, services, and products. | recommendation | Systems, services, and products in scope of the guidance; commodity IT on the supplier-update path | 10 November 2026 |
| EU NIS Cooperation Group, Coordinated Implementation Roadmap, version 1.1, 11 June 2025 | Member States | By 31 December 2026, initial national PQC transition roadmaps have been established, and planning and pilots for high- and medium-risk use cases have been initiated. By 31 December 2030, the PQC transition for high-risk use cases has been completed. By 31 December 2035, the transition for medium-risk use cases has been completed, and the transition for low-risk use cases has been completed as much as feasible. High-risk, where confidentiality is protected with public-key cryptography, includes a compromise after 10 years or more that would still cause significant damage. | government plan | High-, medium-, and low-risk use cases under the roadmap's public-key confidentiality test | 10 November 2026 |
| NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026 (standards timeline) | Users of NIST standards | Deprecation of quantum-vulnerable public-key cryptography after 2030 and disallowance after 2035 under NIST standards and guidelines. | standard | Implementations and products governed by NIST standards and guidelines | 10 November 2026 |
| NIST IR 8547, October 2026 (US federal direction in the same report) | US federal high-value assets, high-impact systems, and systems that protect data expected to remain mission-sensitive in 2030 | Key establishment by 31 December 2030; digital signatures by 31 December 2031; TLS 1.3 no later than 2 January 2030. | government plan | Named federal asset classes and mission-sensitive data held through 2030 | 10 November 2026 |
| ASD, Planning for post-quantum cryptography | The audience of that publication | End of 2030 | recommendation | The systems the publication addresses; not a universal deadline | 10 November 2026 |
| Canadian Forum for Digital Infrastructure Resilience, Quantum-Readiness Best Practices, 10 July 2024 | Canadian critical-infrastructure owners and operators, and others who adapt the guide | The guide | recommendation | Critical-infrastructure systems and dependencies the guide covers | 10 November 2026 |

**Authority recommendation:** The EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025, says data that needs to remain confidential for at least 10 years should be protected from quantum-computer attacks no later than the end of 2030.

**Handbook practice:** The NIST IR 8547 standards timeline is not a deadline for every organisation.

**Requirement:** NIST IR 8547, October 2026, says agencies must support TLS 1.3 no later than 2 January 2030.

**Authority recommendation:** The end of 2030 in ASD's planning publication is ASD's planning milestone for the audience of that publication.

**Handbook practice:** Do not copy ASD's end of 2030 as a universal deadline.

## Keep this evidence

The timeline adopted, the source and date, and the assets placed on the nearer milestone.

## Example

An organisation that sells into the United Kingdom and holds health records records the UK NCSC dates for that market and does not drop a second timeline that applies where it operates. The health records are placed on the nearer milestone because of a long confidentiality period.

## Limits and next page

This page does not prioritise assets. The next page is [Priority](/migration-practices/priority/).

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group, Coordinated Implementation Roadmap on post-quantum cryptography, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- ASD, Planning for post-quantum cryptography. [Planning publication](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)
- Canadian Forum for Digital Infrastructure Resilience, Quantum-Readiness Best Practices, 10 July 2024. [CFDIR guide](https://ised-isde.canada.ca/site/spectrum-management-telecommunications/sites/default/files/documents/Quantum-Readiness%20Best%20Practices%20-%20v04%20-%2010%20July%202024.pdf)

## Related pages

- [Migration guides](./migration-guides.md)
- [Priority](../migration-practices/priority.md)
- [Diagnose](../migration-practices/diagnose.md)
