---
title: Set dates and milestones
search_title: Post-quantum migration dates and milestones
sidebar_label: Set dates and milestones
description: Record which authority dates apply to each system and job, and track supplier release, testing, deployment and end-of-support dates separately.
displayed_sidebar: journeySidebar
---

## When this applies

The register has an order and you need to turn it into dated, owned milestones, or a supplier release, test result, design freeze, or support end has changed a date you rely on.

## Who does what

- The **migration lead** keeps the [register](/templates/records/register/) and the dependencies that can move its dates.
- **Legal or risk** confirms which authority timelines apply to the organisation, its sectors, and its customers.
- **System owners** supply and update the four dates for their rows; the migration lead records them, including the production deployment date from the change record.
- **Procurement** supplies supplier release dates, renewal dates, and support ends from written answers and contracts.

## Do this

1. **Work out which timelines apply, and to whom.** A date binds or guides only the audience its authority names. Examples include:
   - the UK NCSC's [2028, 2031 and 2035 milestones](/standards/migration-guides/ncsc-migration-timelines/) for UK organisations;
   - the EU NIS Cooperation Group [roadmap](/standards/migration-guides/eu-nis-roadmap/) (2026, 2030 and 2035 milestones) for Member States and the entities that follow it;
   - the Australian Signals Directorate's [planning guidance](/standards/migration-guides/asd-planning/) (end-2026, end-2028 and end-2030 milestones) for Australian organisations;
   - [EO 14412](/standards/us-government-requirements/eo-14412/) and [OMB M-26-15](/standards/us-government-requirements/omb-m-26-15/) for US federal agencies, and, through a procurement rule the order directs the Federal Acquisition Regulatory Council to propose, for covered federal contractors;
   - NSA's [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) for US national security systems.

   [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) schedules quantum-vulnerable public-key algorithms for deprecation after 2030 and disallowance after 2035 under NIST standards and guidelines. Record the authority and audience beside every date. [Dates that may apply, by job](#dates-that-may-apply-by-job) sets out each authority's dates for key establishment, signatures, and verifiers that cannot be updated.
2. **Set a milestone for each system and job** on the rows [Decide what to migrate first](/plan/programme/priority/) has ordered, and record it in the row's `dates that apply`. Keep one row per system and job; combine jobs in one row only when they share every date, owner, and milestone. Highest-priority rows get the earliest applicable milestone. Supplied products covered by the core actions are tracked against their supplier's dates, not given a bespoke project.
3. **Track four separate dates on each row**, because a supplier's release is not your deployment:
   - **supplier release** — when the supplier ships post-quantum support;
   - **testing** — when your interoperability and performance checks complete;
   - **production deployment** — when the change is live and checked in your environment;
   - **end of support** — when the supplier stops security fixes for the release you run now.
4. **Record dependencies that can move a date** in the row's `next step`, and any fixed date in its `dates that apply`: a supplier release, a certificate authority, a hardware refresh, a contract renewal, or a product design freeze. A design freeze is a hard deadline: record its date and escalate when an option is still missing as it approaches.
5. **Re-plan when a date moves.** Replace the superseded date, note why, and check whether a later milestone is now at risk.

The NCSC's [timelines](/standards/migration-guides/ncsc-migration-timelines/) say that your plan will move as your suppliers evolve theirs. They ask organisations to build an initial migration plan by 2028 that identifies any requirement to migrate long-lived hardware roots of trust, and to carry out their early, highest-priority migration activities by 2031. The timelines are primarily aimed at large organisations, operators of critical national infrastructure, and companies with bespoke IT, though the NCSC says the core timelines are relevant to all organisations. NIST IR 8547, addressed to US federal agencies, technology providers, standards organisations, and validation laboratories, advises that devices unable to update signature verification in the field, if expected to remain in service once a cryptographically relevant quantum computer exists, should be designed to require quantum-resistant signatures on their executable code.

## Dates that may apply, by job

Each date binds or guides only the audience its authority names. Record each one that applies to you, with its authority and audience, in the register row's `dates that apply`, and see [Why migration timelines differ](/learn/explainers/why-timelines-differ/).

| Authority | Audience | Job it applies to | What it sets |
| --- | --- | --- | --- |
| UK NCSC, [timelines](/standards/migration-guides/ncsc-migration-timelines/), published and reviewed 20 March 2025 | Primarily technical decision-makers and risk owners in large organisations, operators of critical national infrastructure, and companies with bespoke IT; the NCSC says the core timelines are relevant to all organisations | Every job | General milestones, not specific to one job: defined migration goals, a full discovery exercise, and an initial migration plan by 2028; early, highest-priority activities by 2031; and migration of all systems, services, and products completed by 2035 |
| UK NCSC, as above | As above | Verifiers that cannot be updated | By 2028, an initial migration plan that identifies any requirement to migrate long-lived hardware roots of trust |
| EU NIS Cooperation Group, [roadmap](/standards/migration-guides/eu-nis-roadmap/), version 1.1, 11 June 2025 | EU Member States. It says public administrations and critical infrastructure entities, notably those in scope of the NIS2 Directive, should refer to it | Key establishment | Recommends that data needing to stay confidential for at least ten years be protected from quantum attack no later than the end of 2030, and that high-risk use cases complete the transition by then |
| EU roadmap, as above | As above | Systems with a long life cycle, and complex systems such as public-key infrastructures (the source's terms) | Says it is necessary to plan the migration of systems with a long life cycle, and of complex systems such as public-key infrastructures, well in advance, and recommends starting detailed transition plans for them as soon as possible |
| EU roadmap, as above | As above | Verifiers that cannot be updated | Highly recommends that products entering the market with an expected lifetime beyond 2030 be upgradable to post-quantum cryptography, with post-quantum signatures in their software and firmware upgrade mechanism. Sets, as a 31 December 2030 milestone in the timeline it recommends to Member States, that quantum-safe software and firmware upgrades are enabled by default |
| NIST, [IR 8547](/standards/transition-and-key-management/nist-ir-8547/), October 2026 | A broad audience, including US federal agencies, technology providers, standards organisations, and validation laboratories | Key establishment | Says systems that protect data with long-term confidentiality needs warrant the earliest transitions (§4). Schedules quantum-vulnerable key establishment for deprecation after 2030 and disallowance after 2035 under NIST standards and guidelines, and notes that, to mitigate harvest-now, decrypt-later attacks on network communications, application-specific guidance may require or recommend earlier migration (§4.1.2) |
| NIST IR 8547, as above | As above | Signatures, including those of a system you build | Schedules quantum-vulnerable signatures for deprecation after 2030 and disallowance after 2035 under NIST standards and guidelines (§4.1.1) |
| NIST IR 8547, as above | As above | Verifiers that cannot be updated | Where a device's signature verification cannot be updated after manufacture and the device may still be in use once a cryptographically relevant quantum computer exists, says it is important for the device to be designed to require quantum-resistant signatures on its code (§3.1.1) |
| [EO 14412](/standards/us-government-requirements/eo-14412/) and [OMB M-26-15](/standards/us-government-requirements/omb-m-26-15/), as recorded in NIST IR 8547 | US federal agencies; EO 14412 excludes National Security Systems from the inventory review that precedes these transitions (EO 14412, Sec. 4(b)(i)), and OMB M-26-15 does not apply to national security systems, which follow NSA requirements such as [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) | Key establishment | High value assets and high-impact systems must adopt post-quantum key establishment by 31 December 2030. Agencies must give the same priority to other systems with highly sensitive data or that are likely to be particularly vulnerable to attack by a cryptanalytically relevant quantum computer, including systems that protect data expected to remain mission-sensitive in 2030 (NIST IR 8547, §4) |
| EO 14412 and OMB M-26-15, as above | As above | Signatures, including those of a system you build, and verifiers that cannot be updated | High value assets and high-impact systems must adopt post-quantum digital signatures by 31 December 2031, and agencies must give the same priority to other systems with highly sensitive data or that are likely to be particularly vulnerable to attack by a cryptanalytically relevant quantum computer (NIST IR 8547, §4) |

The EU key-establishment row depends on data that must stay confidential for at least ten years. If a system you build or configure holds no such data, the EU date does not apply to its key establishment. NIST IR 8547's key-establishment schedule still does, and so does the US federal key-establishment date where you are in its audience; the NCSC general milestones apply to every job. Beyond the general milestones, no authority above sets a date specific to bespoke change lead time or to out-of-support products; their dates come from your own release cycle and the supplier's end-of-support date. NIST IR 8547, citing OMB M-26-15, says, without a date, that systems that cannot support post-quantum cryptography should be identified and prioritised for replacement or decommissioning (§4).

## Keep this evidence

The [register](/templates/records/register/): per system and job, the owner, the order and the reason, the dates that apply with their authority, the four dates, the next step, including dependencies, and the next review date.

## Example

An insufficient record is a single target year with no owner, test window, or deployment date.

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/), plans the product-design archive against the UK NCSC target dates. It comes first for key establishment because of its 15-year confidentiality period, so its key-establishment line takes the NCSC's 2031 milestone for highest-priority migration activities, within the 2035 completion date; its signature line is a separate row that waits on the supplier's plan. The plan records the supplier release as 1 October 2026, from the supplier's letter, and testing as the staging pilot passed on 21 October 2026. Production deployment stays `unknown` until production checks finish, and end of support for the current release is `unknown`, with a written answer due from the supplier by 1 December 2026. The sensor's firmware verifier takes its production design freeze on 30 June 2027 (fictional) as its milestone, with supplier release, testing, and production deployment `unknown` until a signature option exists, and end of support `not applicable`.

## Limits and next step

The plan records which dates apply; deciding whether a regulation or contract binds you is a legal question for your risk owner or sector authority. Next, [work with suppliers](/plan/programme/suppliers/) and [choose an option](/technology-options/choosing/) for each system.

## Sources

- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [NCSC guidance](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- The White House, Executive Order 14412, Securing the Nation Against Advanced Cryptographic Attacks, 22 June 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)
- Office of Management and Budget, Execution of the Migration to Post-Quantum Cryptography, M-26-15, 24 June 2026. [OMB M-26-15 (PDF)](https://www.whitehouse.gov/wp-content/uploads/2026/06/M-26-15-Execution-of-the-Migration-to-Post-Quantum-Cryptography.pdf)
- Australian Signals Directorate, Planning for post-quantum cryptography, published 6 July 2022, last reviewed 22 September 2025. [ASD publication page (HTML)](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography)
- National Security Agency, Commercial National Security Algorithm Suite 2.0 and Quantum Computing FAQ, version 2.2, October 2026. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Register](/templates/records/register/)
- [Why migration timelines differ](/learn/explainers/why-timelines-differ/)
- [Work with suppliers](/plan/programme/suppliers/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
