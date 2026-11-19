---
title: Why migration timelines differ
sidebar_label: Why timelines differ
description: Compare post-quantum migration dates and understand how their authority, audience, and milestones differ.
displayed_sidebar: learnSidebar
---

Post-quantum migration dates can look inconsistent because they come from documents with different jobs. Some set a transition horizon for standards. Others direct government agencies or recommend targets for organisations in a country or sector. Their dates also mark different milestones: planning, starting work, completing a transition, or stopping approval of an algorithm.

The examples below show how those differences affect what a date means. They are not one combined deadline for every organisation.

## NIST standards guidance and US federal requirements

NIST's [IR 8547](https://doi.org/10.6028/NIST.IR.8547) describes the transition for cryptography used under NIST standards and guidelines. It sets 2030 as the point after which quantum-vulnerable public-key cryptography is to be deprecated, and 2035 as the point after which it is to be disallowed under those standards and guidelines. These are NIST's general standards horizons.

The same report describes earlier milestones for US federal agencies' highest-priority systems: key establishment by 31 December 2030 and digital signatures by 31 December 2031. Those agency requirements arise from federal direction, including [EO 14412](/standards/us-federal-directives/eo-14412/) and [OMB M-26-15](/standards/us-federal-directives/omb-m-26-15/). They do not turn the NIST standards horizons into deadlines for every organisation.

The split between key establishment and signatures reflects the different jobs they perform. An attacker can retain encrypted traffic or data and attempt to decrypt it later, so the confidentiality lifetime of the data matters to key-establishment decisions. A signature is used to establish authenticity and integrity; its exposure has a different shape and depends on where and when signatures are created or checked. IR 8547 therefore treats these as distinct parts of the migration.

## UK targets for organisational migration

The UK NCSC presents its dates as indicative targets for organisations: establish migration goals, discover relevant systems, and make an initial plan by 2028; begin migrating the highest-priority systems by 2031; and complete migration by 2035. This is national cyber-security guidance, not a NIST standards transition schedule or a directive to all organisations.

The NCSC says its guidance is relevant across organisations but is primarily aimed at large organisations, technical decision-makers, risk owners, critical national infrastructure, industrial control systems, and organisations with bespoke IT. Smaller organisations using commodity browsers, operating systems, and mobile devices can generally follow supplier updates; custom or specialist systems bring them closer to the larger-organisation timeline.

## EU roadmap for Member States

The European Commission's coordinated roadmap sets milestones for Member States to organise a transition. It calls for national roadmaps and initial planning by the end of 2026, prioritises high-risk use cases for transition by the end of 2030, and places medium-risk use cases by the end of 2035, with low-risk cases addressed as feasible.

This is a coordination roadmap addressed primarily to Member States. It gives governments a shared frame for national planning; it is not, by itself, a uniform implementation order addressed directly to every company. National laws, sector rules, procurement conditions, and later guidance determine how the roadmap reaches particular organisations.

## Australian transition recommendation

The Australian Signals Directorate's post-quantum planning guidance recommends that organisations refine a transition plan by the end of 2026, begin transition by the end of 2028, and complete it by the end of 2030. Its dates are national guidance for organisations planning their own transitions. They are not the same instrument as a NIST standard or a US federal agency requirement.

## Why the dates are not interchangeable

The dates above differ because their sources address different audiences and describe different events. A standards body can set when algorithms become deprecated or disallowed under its standards. A government can set requirements for agencies within its remit. National guidance can give organisations target dates for planning and migration, while a regional roadmap can coordinate Member States that will implement it through their own arrangements.

So a date only makes sense alongside its source, audience, cryptographic job, and milestone. For the basic distinction between a standard and a migration date, see [Timelines](/learn/timelines/). This page compares selected guidance; it does not replace the source documents or determine which requirements apply to a particular organisation.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- Executive Office of the President, Strengthening U.S. National Cybersecurity, Executive Order 14412, 2026. [EO 14412](/standards/us-federal-directives/eo-14412/)
- Office of Management and Budget, Execution of the Migration to Post-Quantum Cryptography, OMB Memorandum M-26-15, 24 June 2026. [OMB M-26-15 (PDF)](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- European Commission, Coordinated implementation roadmap for the transition to post-quantum cryptography, published 23 June 2025. [EU roadmap publication page](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography)
- Australian Signals Directorate, Planning for post-quantum cryptography, published 6 July 2022 and reviewed 22 September 2025. [ASD guidance](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)

## Related pages

- [Timelines](/learn/timelines/)
- [Standardisation](/learn/standardisation/)
- [US federal directives](/standards/us-federal-directives/)
