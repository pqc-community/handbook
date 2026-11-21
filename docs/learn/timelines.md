---
title: Timelines
sidebar_label: 9. Timelines
description: How to read a post-quantum migration date — who set it, for whom, for which cryptographic job, and for which milestone — without treating any one authority's date as universal.
displayed_sidebar: learnSidebar
---

Post-quantum guidance is full of dates: 2028, 2030, 2031, 2035. They are easy to quote and easy to misapply. A date only means something alongside four facts: who set it, whose behaviour it governs, which cryptographic job it covers, and which milestone it marks. This lesson gives you those four questions and a model of the three clocks that drive urgency.

## Four questions for any date

1. **Who set it?** A standards body can set when algorithms are deprecated or disallowed *under its standards*. A government can direct its own agencies. A national cyber authority can recommend targets for organisations in its stated audience. A regional body can coordinate Member States. These instruments differ in force and scope.
2. **For whom?** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §4) sets 2030 for deprecating and 2035 for disallowing quantum-vulnerable public-key algorithms under NIST standards and guidelines. The same report records that US federal high-value assets and high-impact systems must adopt post-quantum key establishment by 31 December 2030 and signatures by 31 December 2031, under [Executive Order 14412](/standards/us-federal-directives/eo-14412/) and [OMB Memorandum M-26-15](/standards/us-federal-directives/omb-m-26-15/). The first is a standards horizon; the second binds named federal systems. Neither is a deadline for every organisation.
3. **For which job?** Key-establishment and signature dates can differ, as the US federal milestones show.
4. **Which milestone?** "Complete discovery", "build a plan", "carry out highest-priority activities", "complete migration", "deprecate", and "disallow" are different events. The verb matters as much as the year.

## Three clocks

Behind the published dates sit three different drivers. They are the same three jobs introduced in [Signatures, certificates, and trust](/learn/signatures-and-trust/).

| Clock | Starts ticking | Measured by | Typical first action |
| --- | --- | --- | --- |
| Confidentiality (key establishment) | Now, for data that is recorded or stored | How long the data must stay secret, plus how long migration takes | Protect long-lived sensitive data in transit and at rest |
| Coordination (updatable signatures) | When the many parties involved need to start moving | How long signers, CAs, and relying parties take to move together | Map who must change together |
| Lifetime (non-updatable verifiers) | When a device is designed or bought | Whether the device will outlive trust in its classical algorithm | Require post-quantum-capable verification in procurement |

NIST IR 8547 (§4) reflects the first clock directly: systems that protect data with long-term confidentiality needs warrant the earliest transitions. The EU NIS Cooperation Group [roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography) (version 1.1, 11 June 2025) treats a confidentiality use case as high-risk if a compromise after ten or more years would still cause significant damage. [When to start](/learn/explainers/when-to-start/) turns the first clock into a calculation.

## A date is not a guarantee of safety

Meeting a published target does not mean the risk has gone. A date is an authority's planning judgement for its audience. Your own data lifetimes, supplier release dates, and device service lives can make an earlier date necessary — or show that a later one is defensible for low-risk systems. Record the authority and its date alongside your own reasoning.

The [timeline comparison](/learn/explainers/timelines/) sets NIST, US federal, UK, EU, and Australian dates side by side. For recording an applicable timeline against a system, see [Decide what to migrate first](/migration-practices/priority/).

## Check your understanding

- NIST IR 8547 says quantum-vulnerable algorithms are disallowed after 2035. Does that oblige a UK manufacturer to finish by 2035? What would you need to check?
- Why can a signature migration be urgent even though its algorithm will not be broken until a quantum computer exists?
- Which clock governs a sensor you are buying today that will run for 15 years?

Continue with [Crypto-agility](/learn/crypto-agility/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§1, §4). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- EU NIS Cooperation Group PQC work stream, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025 (§4, §5). [EU roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published 20 March 2025. [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Learn the basics](/learn/)
- [Why migration timelines differ](/learn/explainers/timelines/)
- [Decide what to migrate first](/migration-practices/priority/)
