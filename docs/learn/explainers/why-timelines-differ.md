---
title: Why migration timelines differ
search_title: Why post-quantum migration timelines differ
sidebar_label: Why timelines differ
description: Post-quantum dates from NIST, US federal direction, the UK NCSC, the EU NIS roadmap and Australia's ASD compared, and why authority, audience and job matter.
displayed_sidebar: learnSidebar
---

**Question this answers:** why do different authorities give different post-quantum dates, and which apply to me? **Background:** [Timelines](/learn/timelines/).

Post-quantum migration dates look inconsistent because they come from documents with different jobs. Some set a transition horizon for standards. Others direct government agencies, recommend targets for organisations in a country, or coordinate Member States. Their dates also mark different milestones: planning, completing discovery, carrying out priority work, completing a transition, or stopping approval of an algorithm.

The examples below show how those differences affect what a date means. They are not one combined deadline for every organisation.

## At a glance

| Authority and document | Audience | Key dates | Kind of instrument |
| --- | --- | --- | --- |
| NIST, IR 8547 (October 2026) | Users of NIST standards and guidelines | Quantum-vulnerable public-key algorithms deprecated after 2030, disallowed after 2035 | Standards transition schedule |
| US federal direction (EO 14412, OMB M-26-15), as described in NIST IR 8547 | US federal agencies' high-value assets, high-impact systems, and other highly sensitive systems | Key establishment by 31 December 2030; signatures by 31 December 2031 | Binding direction to named agencies |
| UK NCSC (20 March 2025) | Primarily large organisations, CNI, and organisations with bespoke IT in the UK | 2028, 2031, 2035 activity milestones | National guidance with target dates |
| EU NIS Cooperation Group roadmap v1.1 (11 June 2025) | EU Member States | End of 2026, end of 2030, 2035 | Coordinated roadmap for national action |
| Australian Signals Directorate | Organisations planning their own transition in Australia | End of 2026, 2028, 2030 | National guidance |

## NIST standards guidance and US federal requirements

NIST's [IR 8547](https://doi.org/10.6028/NIST.IR.8547) (§4) describes the transition for cryptography used under NIST standards and guidelines: NIST will deprecate quantum-vulnerable public-key cryptography after 2030 and disallow its use under its standards and guidelines after 2035. NIST describes the 2030–2035 window as accommodating lower-risk systems and applications with legacy constraints.

The same report records much earlier milestones for US federal agencies. It states that Executive Order 14412 and OMB Memorandum M-26-15 require the government's most sensitive systems — high-value assets, high-impact systems, and others with highly sensitive data — to adopt post-quantum cryptography for key establishment by 31 December 2030 and for digital signatures by 31 December 2031. It also notes that National Security Memorandum 10 set 2035 as the target for completing the federal migration, which remains in place. These agency requirements arise from federal direction, summarised in [EO 14412](/standards/us-government-requirements/eo-14412/) and [OMB M-26-15](/standards/us-government-requirements/omb-m-26-15/). They do not turn NIST's standards horizon into a deadline for every organisation.

The split between key establishment and signatures reflects the different jobs they perform. Recorded data can be decrypted later, so data confidentiality lifetimes drive key establishment; signatures carry no historical exposure but need many parties to move together. IR 8547 therefore treats them as distinct parts of the migration.

## UK targets for organisational migration

The UK NCSC's [timelines for migration](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) set out key milestones and a target date of 2035 for completing migration:

- **By 2028:** define migration goals, carry out a full discovery exercise, and build an initial migration plan — including any requirement to migrate long-lived hardware roots of trust — and communicate needs to suppliers.
- **By 2031:** carry out (the NCSC's timeline table says *complete*) the early, highest-priority migration activities, and refine the plan into a thorough roadmap for completing migration.
- **By 2035:** complete migration of all systems, services, and products.

The NCSC says the guidance is primarily aimed at technical decision-makers and risk owners of large organisations, operators of critical national infrastructure and industrial control systems, and organisations with bespoke IT. It expects migration for smaller organisations using commodity IT to happen largely as services are updated by their vendors, while bespoke software follows the larger-organisation timetable. This is national guidance, not a NIST standards schedule or a directive to all organisations.

## EU roadmap for Member States

The [Coordinated Implementation Roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography) was produced by the post-quantum work stream of the EU NIS Cooperation Group (version 1.1, 11 June 2025) and published by the European Commission on 23 June 2025, which describes it as issued by the Member States with Commission support. It recommends that all Member States start a national transition by implementing its "First Steps" by the end of 2026; that high-risk use cases move to post-quantum cryptography as soon as possible and no later than the end of 2030; and that as many systems as practically feasible complete the transition by 2035, prioritising medium-risk use cases. It also states that, for high-risk use cases, quantum-vulnerable public-key mechanisms shall not be used stand-alone after the end of 2030.

This is a coordination roadmap addressed to Member States. National laws, sector rules, procurement conditions, and later guidance determine how it reaches particular organisations.

## Australian transition recommendation

The Australian Signals Directorate's [post-quantum planning guidance](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography) recommends that organisations refine a transition plan by the end of 2026, begin transition by the end of 2028, and complete it by the end of 2030. Its dates are national guidance for organisations planning their own transitions, not the same instrument as a NIST standard or a US federal agency requirement.

## Why the dates are not interchangeable

The dates above differ because their sources address different audiences and describe different events. A standards body sets when algorithms become deprecated or disallowed under its standards. A government sets requirements for agencies within its remit. National guidance gives organisations target dates for planning and migration, and a regional roadmap coordinates Member States that will implement it through their own arrangements.

So a date only makes sense alongside its source, audience, cryptographic job, and milestone. This page compares selected guidance; it does not replace the source documents or determine which requirements apply to a particular organisation.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§4). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published 20 March 2025. [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group PQC work stream, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025; European Commission publication page, 23 June 2025. [EU roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography)
- Australian Signals Directorate, Planning for post-quantum cryptography, published 6 July 2022 and reviewed 22 September 2025. [ASD guidance](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)

## Related pages

- [Timelines](/learn/timelines/)
- [US government requirements](/standards/us-government-requirements/)
- [National algorithm positions](/standards/national-algorithm-positions/)
- [Migration guides](/standards/migration-guides/)
