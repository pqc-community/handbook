---
title: Post-quantum migration dates
sidebar_label: Dates
sidebar_position: 2
displayed_sidebar: standardsTimelinesSidebar
description: The UK, EU, and NIST clocks for post-quantum migration, and whose clock each date belongs to.
---

Use this page when you need two or three dates you can remember, and you need to know whose dates they are.

Three clocks are cited here. They are not the same clock. Handbook guidance: use the clock for the jurisdiction you are in, or that you sell into, and say which one you used.

## What can go wrong

A single "migrate by 2035" date hides a nearer deadline and hides the difference between key establishment and signatures. A date copied from another country becomes a duty the reader does not have. A vendor claim of "quantum safe" with no date and no scope is an assertion, not a clock.

## The clocks

**United Kingdom.** The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, set three dates for organisations. By 2028, define migration goals, carry out discovery, and build an initial plan. By 2031, carry out the early, highest-priority migration activities and refine the roadmap. By 2035, complete migration of systems, services, and products. The same page's 2028 row includes telling suppliers what you need, and the requirement to migrate long-lived hardware roots of trust. For organisations that rely on commodity IT, such as standard browsers, operating systems, and mobile devices, the NCSC says migration should happen as vendors update those services. Custom or specialised software follows the same timetable as larger organisations.

**European Union.** The [NIS Cooperation Group roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf), version 1.1, 11 June 2025, sets milestones for Member States. By 31 December 2026, initial national PQC transition roadmaps have been established, and planning and pilots for high- and medium-risk use cases have been initiated. By 31 December 2030, the PQC transition for high-risk use cases has been completed. By 31 December 2035, the transition for medium-risk use cases has been completed, and the transition for low-risk use cases has been completed as much as feasible. The roadmap treats a use case as high-risk, where confidentiality is protected with public-key cryptography, if a compromise after 10 years or more would still cause significant damage. It says data that needs to remain confidential for at least 10 years should be protected from quantum-computer attacks no later than the end of 2030.

**United States standards clock.** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, says NIST will deprecate quantum-vulnerable public-key cryptography after 2030 and disallow its use under NIST standards and guidelines after 2035. That window is the standards clock. It is not, by itself, a deadline for every organisation. The same report says National Security Memorandum 10's 2035 target for completing the US federal migration remains. For US federal high value assets and high impact systems, and for other federal systems that protect data expected to remain mission-sensitive in 2030, the report says key establishment moves by 31 December 2030 and digital signatures by 31 December 2031. It also says agencies must support TLS 1.3 no later than 2 January 2030.

## What to ask

Which clock applies to this organisation, and which assets fall under an earlier federal or high-risk date? Is the nearer job key establishment, signatures, or a long-lived root of trust?

## Evidence

The record is the clock you adopted, the source and date of that clock, and the list of assets you placed on the nearer date. An assertion that the organisation is "aligned to 2035" is the starting claim.

## A weak answer

"Everyone has until 2035, so this can wait."

## A stronger answer

"We sell into the UK and hold health records with a long secrecy life. The NCSC dates are 2028, 2031, and 2035. The records go on the priority list now because of harvest-now, decrypt-later, which we handle on the priority page. The 2035 date is the finish, not the start."

## Which pass

This page is the reason the first pass exists. It is not the inventory and it is not the cutover.

## Options

No algorithm is chosen here. [The EU roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf) says that when migrating, it is recommended to use standardised and tested hybrid solutions whenever feasible and suitable, and that for high-risk use cases quantum-vulnerable public-key mechanisms shall not be used stand-alone after the end of 2030. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) treats hybrid constructions as a temporary hedge and says NIST intends to accommodate them where their use is desired. Record the authority you are following. Do not treat either sentence as a product requirement for every reader.

Canada's government milestone years are not stated on this page. The Canadian reading-list entry is the July 2024 CFDIR guide, on [Migration guides](./migration-guides.md).

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group, Coordinated Implementation Roadmap, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Migration guides](./migration-guides.md)
- [Priority](../migration-practices/priority.md)
- [Where to start](../migration-practices/where-to-start.md)
