---
title: Timelines
search_title: "Post-quantum migration timelines: reading a date"
sidebar_label: 9. Timelines
description: "How to read a post-quantum migration date: who set it, for whom, for which job and milestone, and when, and why dates that bind others still reach you."
displayed_sidebar: learnSidebar
---

Post-quantum guidance is full of dates: 2028, 2029, 2030, 2031, 2035. They are easy to quote and easy to misapply. A date only means something alongside five facts: who set it, whose behaviour it governs, which cryptographic job it covers, which milestone it marks, and when it was set. This lesson gives you those five questions, the three clocks that drive urgency, and the ways a date that binds someone else can still reach you.

## Five questions for any date

1. **Who set it?** A standards body can set when algorithms are deprecated or disallowed *under its standards*. A government can direct its own agencies. A national cyber authority can recommend targets for organisations in its stated audience. A regional body can coordinate Member States. A supplier can set a target for its own products and services. These instruments differ in force and scope.
2. **For whom?** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §4) sets 2030 for deprecating and 2035 for disallowing quantum-vulnerable public-key algorithms under NIST standards and guidelines. The same report records that US federal high-value assets and high-impact systems must adopt post-quantum key establishment by 31 December 2030 and signatures by 31 December 2031, under [Executive Order 14412](/standards/us-government-requirements/eo-14412/) and [OMB Memorandum M-26-15](/standards/us-government-requirements/omb-m-26-15/). The first is a standards horizon; the second binds named federal systems. Neither is a deadline for every organisation, and a supplier's target binds only the supplier.
3. **For which job?** Key-establishment and signature dates can differ, and so can their order. The US federal milestones put key establishment first; Google and Cloudflare have put authentication first for their own services.
4. **Which milestone?** "Complete discovery", "build a plan", "carry out highest-priority activities", "complete migration", "deprecate", and "disallow" are different events. The verb matters as much as the year.
5. **When was it set?** A date is a judgement made at a point in time, and it can change. NIST's final IR 8547 deprecates quantum-vulnerable public-key algorithms at every security strength after 2030, where its November 2024 draft applied that deprecation only at the 112-bit strength. The US federal deadlines above were set in June 2026. Note the version and date of each source you rely on.

## Three clocks

Behind the published dates sit three different drivers. They are the same three jobs introduced in [Signatures, certificates, and trust](/learn/signatures-and-trust/).

| Clock | Starts ticking | Measured by | Typical first action |
| --- | --- | --- | --- |
| Confidentiality (key establishment) | Now, for data that is recorded or stored | How long the data must stay secret, plus how long migration takes | Protect long-lived sensitive data in transit and at rest |
| Coordination (updatable signatures) | When the many parties involved need to start moving | How long signers, CAs, and relying parties take to move together | Map who must change together |
| Lifetime (non-updatable verifiers) | When a device is designed or bought | Whether the device will outlive trust in its classical algorithm | Require post-quantum-capable verification in procurement |

NIST IR 8547 (§4) reflects the first clock directly: systems that protect data with long-term confidentiality needs warrant the earliest transitions. The EU NIS Cooperation Group [roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography) (version 1.1, 11 June 2025) treats a confidentiality use case as high-risk if a compromise after ten or more years would still cause significant damage. [When to start](/learn/explainers/when-to-start/) turns the first clock into a calculation.

The clocks do not run in a fixed order. Google ([Quantum frontiers may be closer than they appear](https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/), 25 March 2026) says it has adjusted its threat model to prioritise post-quantum migration for authentication services. Cloudflare ([Cloudflare targets 2029 for full post-quantum security](https://blog.cloudflare.com/post-quantum-roadmap/), 7 April 2026), which has offered post-quantum key establishment by default since 2022, says a shorter expected timeline makes post-quantum authentication its top priority. Read through the handbook's clocks, an organisation that has already protected its recorded data finds the coordination clock has the longest lead time left, so urgency moves there.

## Dates that bind someone else

Meeting a published target does not mean the risk has gone. A date is its issuer's planning judgement for its own audience. Your data lifetimes, device service lives, and threat level can make an earlier date necessary for some systems, or show that a later one is defensible for low-risk systems; [The quantum threat](/learn/quantum-threat/#what-remains-uncertain) sets out those factors.

Dates that do not bind you can still reach you in three ways:

- **Through your suppliers.** A supplier's target for its own services decides when the connections, certificates, and products you take from it change. On the [register](/templates/records/register/) it belongs in the supplier release field, not with the dates that apply: it can shorten your migration, or force a change on its own schedule.
- **Through later authority dates.** NIST IR 8547 (§4.2) says its application-specific guidelines may specify earlier transitions, based on the expected impact of a cryptanalytically relevant quantum computer and the level of post-quantum support in standards, products, and services.
- **Through customers and contracts.** EO 14412 directs a procurement rule to be proposed for covered US federal contractors, so a deadline set for agencies can arrive in a contract.

Record each date with its issuer, audience, and version, alongside your own reasoning, and check it again at each review. [Why migration timelines differ](/learn/explainers/why-timelines-differ/) sets NIST, US federal, UK, EU, Australian, and supplier dates side by side. [Set dates and milestones](/plan/programme/dates/) shows how to work out which apply to you and record them.

## Check your understanding

- NIST IR 8547 says quantum-vulnerable algorithms are disallowed after 2035. Does that oblige a UK manufacturer to finish by 2035? What would you need to check?
- Why can a signature migration be urgent even though its algorithm will not be broken until a quantum computer exists?
- Which clock governs a sensor you are buying today that will run for 15 years?
- Your cloud provider targets 2029 for post-quantum authentication across its services. Is that your deadline, and how could it still change your plan?

Continue with [Crypto-agility](/learn/crypto-agility/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§1, §4, §4.2). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547 initial public draft, 12 November 2024 (superseded draft, cited for the change in schedule). [NIST IR 8547 draft](https://csrc.nist.gov/pubs/ir/8547/ipd)
- The White House, Securing the Nation Against Advanced Cryptographic Attacks, EO 14412, signed 22 June 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)
- UK National Cyber Security Centre, Timelines for migration to post-quantum cryptography, published 20 March 2025. [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- EU NIS Cooperation Group PQC work stream, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025 (§4, §5). [EU roadmap](https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography)
- Google, Quantum frontiers may be closer than they appear, 25 March 2026. [Google blog](https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/)
- Cloudflare, Cloudflare targets 2029 for full post-quantum security, 7 April 2026. [Cloudflare blog](https://blog.cloudflare.com/post-quantum-roadmap/)

## Related pages

- [Learn the basics](/learn/)
- [Why migration timelines differ](/learn/explainers/why-timelines-differ/)
- [Set dates and milestones](/plan/programme/dates/)
- [Decide what to migrate first](/plan/programme/priority/)
