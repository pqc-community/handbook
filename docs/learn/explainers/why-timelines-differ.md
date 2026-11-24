---
title: Why migration timelines differ
search_title: Why post-quantum migration timelines differ
sidebar_label: Why timelines differ
description: Post-quantum dates from NIST, US federal direction, the UK NCSC, the EU, Australia's ASD and large suppliers compared, and why issuer, audience and job matter.
displayed_sidebar: learnSidebar
---

**Question this answers:** why do different authorities and suppliers give different post-quantum dates, and which apply to me? **Background:** [Timelines](/learn/timelines/).

Post-quantum migration dates look inconsistent because they come from documents with different jobs. Some set a transition horizon for standards, while others direct government agencies, recommend targets for organizations in a country, or coordinate Member States, and suppliers set targets for their own services. The dates also mark different milestones: planning, completing discovery, carrying out priority work, completing a transition, or stopping approval of an algorithm.

The examples below show how those differences affect what a date means. They are not one combined deadline for every organization.

## At a glance

| Authority and document | Audience | Key dates | Kind of instrument |
| --- | --- | --- | --- |
| NIST, IR 8547 (October 2026) | Users of NIST standards and guidelines | Quantum-vulnerable public-key algorithms deprecated after 2030, disallowed after 2035 | Standards transition schedule |
| US federal direction (EO 14412, OMB M-26-15, June 2026) | US federal agencies' high-value assets, high-impact systems, and other highly sensitive systems | Key establishment by December 31, 2030; signatures by December 31, 2031 | Binding direction to named agencies |
| UK NCSC (March 20, 2025) | Primarily large organizations, CNI, and organizations with bespoke IT in the UK | 2028, 2031, 2035 activity milestones | National guidance with target dates |
| EU NIS Cooperation Group roadmap v1.1 (June 11, 2025) | EU Member States | End of 2026, end of 2030, 2035 | Coordinated roadmap for national action |
| Australian Signals Directorate (reviewed September 22, 2025) | Organizations planning their own transition in Australia | End of 2026, 2028, 2030 | National guidance |

Supplier targets are a different kind of date and are covered [after the authorities](#supplier-targets).

## NIST standards guidance and US federal requirements

NIST's [IR 8547](https://doi.org/10.6028/NIST.IR.8547) (§4) describes the transition for cryptography used under NIST standards and guidelines: NIST will deprecate quantum-vulnerable public-key cryptography after 2030 and disallow its use under its standards and guidelines after 2035. NIST describes the 2030–2035 window as accommodating lower-risk systems and applications with legacy constraints. The final report, published in October 2026, deprecates these algorithms at every security strength after 2030; the November 2024 draft had applied that deprecation only at the 112-bit strength.

The same report records much earlier milestones for US federal agencies. It states that Executive Order 14412 and OMB Memorandum M-26-15, both issued in June 2026, require the government's most sensitive systems — high-value assets, high-impact systems, and others with highly sensitive data — to adopt post-quantum cryptography for key establishment by December 31, 2030, and for digital signatures by December 31, 2031. It also notes that National Security Memorandum 10 set 2035 as the target for completing the federal migration, which remains in place. These agency requirements arise from federal direction, summarized in [EO 14412](/standards/us-government-requirements/eo-14412/) and [OMB M-26-15](/standards/us-government-requirements/omb-m-26-15/). They do not turn NIST's standards horizon into a deadline for every organization, although EO 14412 also directs a procurement rule to be proposed for covered federal contractors, which is how an agency date can reach a supplier.

The split between key establishment and signatures reflects the different jobs they perform. Recorded data can be decrypted later, so data confidentiality lifetimes drive key establishment; signatures carry no historical exposure but need many parties to move together. IR 8547 therefore treats them as distinct parts of the migration.

## UK targets for organizational migration

The UK NCSC's [timelines for migration](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) set out key milestones and a target date of 2035 for completing migration:

- **By 2028:** define migration goals, carry out a full discovery exercise, and build an initial migration plan — including any requirement to migrate long-lived hardware roots of trust — and communicate needs to suppliers.
- **By 2031:** carry out (the NCSC's timeline table says *complete*) the early, highest-priority migration activities, and refine the plan into a thorough roadmap for completing migration.
- **By 2035:** complete migration of all systems, services, and products.

The NCSC bases the 2035 target on its view that ten years is enough for standards to appear, for products that use them to be developed, and for uptake to become widespread. It says the guidance is primarily aimed at technical decision-makers and risk owners of large organizations, operators of critical national infrastructure and industrial control systems, and organizations with bespoke IT. It expects migration for smaller organizations using commodity IT to happen largely as services are updated by their vendors, while bespoke software follows the larger-organization timetable. This is national guidance, not a NIST standards schedule or a directive to all organizations.

## EU roadmap for Member States

The [Coordinated Implementation Roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography) was produced by the post-quantum work stream of the EU NIS Cooperation Group (version 1.1, June 11, 2025) and published by the European Commission on June 23, 2025, which describes it as issued by the Member States with Commission support. It recommends that all Member States start a national transition by implementing its "First Steps" by the end of 2026; that high-risk use cases move to post-quantum cryptography as soon as possible and no later than the end of 2030; and that as many systems as practically feasible complete the transition by 2035, prioritizing medium-risk use cases. It also states that, for high-risk use cases, quantum-vulnerable public-key mechanisms shall not be used stand-alone after the end of 2030.

This is a coordination roadmap addressed to Member States. National laws, sector rules, procurement conditions, and later guidance determine how it reaches particular organizations.

## Australian transition recommendation

The Australian Signals Directorate's [post-quantum planning guidance](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography) recommends that organizations refine a transition plan by the end of 2026, begin transition by the end of 2028, and complete it by the end of 2030. Its dates are national guidance for organizations planning their own transitions, not the same instrument as a NIST standard or a US federal agency requirement.

## Supplier targets

Large suppliers also publish post-quantum dates, for their own products and services:

- **Google** ([Quantum frontiers may be closer than they appear](https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/), March 25, 2026) set 2029 as its post-quantum migration target and said it now prioritizes authentication services.
- **Cloudflare** ([Cloudflare targets 2029 for full post-quantum security](https://blog.cloudflare.com/post-quantum-roadmap/), April 7, 2026) set 2029 to be fully post-quantum secure, including authentication, with interim milestones it describes as subject to change. It [reported](https://blog.cloudflare.com/post-quantum-authentication-to-origins/) the first of them, post-quantum authentication for connections to customers' origin servers, as live on July 29, 2026.

Read these with the same questions as any other date. They are commitments a supplier makes for its own services, so they bind no customer, and the supplier can revise them. Their milestone is completion of the supplier's own migration, which makes 2029 earlier than any completion milestone in the table above; they are not comparable with NIST's dates for deprecating and disallowing algorithms.

Supplier targets matter to you in two ways. They set when the services you depend on will change, which belongs in the supplier release field of your [register](/templates/records/register/) rather than with the dates that apply. They also show how large operators read the risk; [The quantum threat](/learn/quantum-threat/#what-remains-uncertain) sets out the evidence they cite.

## Why the dates are not interchangeable

The dates above differ because their sources address different audiences and describe different events. A standards body sets when algorithms become deprecated or disallowed under its standards. A government sets requirements for agencies within its remit. National guidance gives organizations target dates for planning and migration, and a regional roadmap coordinates Member States that will implement it through their own arrangements. A supplier sets targets for its own services. Each is a judgment made at a point in time: NIST changed its deprecation schedule between draft and final report, and the US federal deadlines date from June 2026.

So a date only makes sense alongside its source, audience, cryptographic job, milestone, and the date it was set. This page compares selected guidance; it does not replace the source documents. [Set dates and milestones](/plan/program/dates/) shows how to work out which timelines apply to your organization, and to whom, and how to record each one with its authority.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§4). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547 initial public draft, November 12, 2024 (superseded draft, cited for the change in schedule). [NIST IR 8547 draft](https://csrc.nist.gov/pubs/ir/8547/ipd)
- The White House, Securing the Nation Against Advanced Cryptographic Attacks, EO 14412, signed June 22, 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)
- Office of Management and Budget, Execution of the Migration to Post-Quantum Cryptography, M-26-15, June 24, 2026. [OMB M-26-15 (PDF)](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published March 20, 2025. [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group PQC work stream, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, June 11, 2025; European Commission publication page, June 23, 2025. [EU roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography)
- Australian Signals Directorate, Planning for post-quantum cryptography, published July 6, 2022, and reviewed September 22, 2025. [ASD guidance](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)
- Google, Quantum frontiers may be closer than they appear, March 25, 2026. [Google blog](https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/)
- Cloudflare, Cloudflare targets 2029 for full post-quantum security, April 7, 2026. [Cloudflare blog](https://blog.cloudflare.com/post-quantum-roadmap/)
- Cloudflare, Post-quantum authentication to origins is now supported, July 29, 2026. [Cloudflare blog](https://blog.cloudflare.com/post-quantum-authentication-to-origins/)

## Related pages

- [Timelines](/learn/timelines/)
- [Set dates and milestones](/plan/program/dates/)
- [US government requirements](/standards/us-government-requirements/)
- [National algorithm positions](/standards/national-algorithm-positions/)
- [Migration guides](/standards/migration-guides/)
