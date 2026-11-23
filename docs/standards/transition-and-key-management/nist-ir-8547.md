---
title: "NIST IR 8547: Transition to Post-Quantum Cryptography Standards"
search_title: "NIST IR 8547: PQC transition, 2030 and 2035"
sidebar_label: NIST IR 8547 (PQC transition)
displayed_sidebar: standardsSidebar
description: NIST report setting out its schedule for deprecating and disallowing quantum-vulnerable public-key cryptography, its hybrid position and the standards affected.
---

## What it covers

NIST Internal Report (IR) 8547 sets out NIST's approach to moving from quantum-vulnerable public-key cryptography to post-quantum key establishment and digital signatures. It identifies the quantum-vulnerable algorithms in existing NIST standards, the post-quantum standards that replace them, migration considerations by use case, NIST's position on hybrid constructions, and the schedule on which NIST will deprecate and then disallow quantum-vulnerable algorithms in its own standards and guidelines.

NIST issued the report for federal agencies, technology providers, standards organisations and Cryptographic Module Validation Program (CMVP) laboratories (§1.2), and describes it as a blueprint for critical infrastructure owners and operators and other organisations making the same shift (§1.1). It supports the implementation of [Executive Order 14412](/standards/us-government-requirements/eo-14412/) and [OMB Memorandum M-26-15](/standards/us-government-requirements/omb-m-26-15/). As a NIST IR it is an informative report and does not itself impose requirements; binding federal deadlines come from EO 14412 and M-26-15, which the report records.

:::info[Official texts]

- [NIST IR 8547 full text (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- [NIST CSRC publication page (HTML)](https://csrc.nist.gov/pubs/ir/8547/final)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2024-11-12">2024&#8209;11&#8209;12</time> | NIST published the initial public draft of IR 8547 for comment. |
| <time dateTime="2026-10-27">2026&#8209;10&#8209;27</time> | NIST published IR 8547 as a final report. |
| <time dateTime="2030">2030</time> | NIST schedule: quantum-vulnerable public-key algorithms in NIST standards are deprecated after 2030, at every security strength (§4, Tables 2 and 4). |
| <time dateTime="2035">2035</time> | NIST schedule: quantum-vulnerable public-key algorithms are disallowed under NIST standards and guidelines after 2035 (§4, Tables 2 and 4). |

## What the schedule says

NIST will deprecate quantum-vulnerable public-key cryptography after 2030 and disallow its use under NIST standards and guidelines after 2035 (§4). The same dates apply at every security strength, for signatures (ECDSA, EdDSA and RSA in [FIPS 186-5](/standards/classical-public-key/fips-186-5/), Table 2) and for key establishment (finite-field and elliptic-curve Diffie-Hellman and MQV in [SP 800-56A](/standards/classical-public-key/sp-800-56a/), and RSA in [SP 800-56B](/standards/classical-public-key/sp-800-56b/), Table 4). The report says the 2030–2035 window accommodates lower-risk systems and legacy constraints, and that it does not alter earlier deadlines set elsewhere.

The report records those earlier US federal deadlines. Under EO 14412 and M-26-15, federal high value assets and high-impact systems must adopt post-quantum key establishment by 31 December 2030 and post-quantum digital signatures by 31 December 2031; agencies must also support TLS 1.3 no later than 2 January 2030, as required by EO 14306 and M-26-15 (§4). These dates bind US federal agencies, not other organisations. Other authorities set their own timelines; see [Why migration timelines differ](/learn/explainers/why-timelines-differ/).

## Hybrid position

The report describes hybrid solutions, which combine quantum-resistant and quantum-vulnerable algorithms, as typically temporary measures that lead to a second transition to PQC-only tools, and notes that they add complexity and cost (§3.2). NIST will accommodate hybrid key establishment and dual signatures in FIPS 140 validation when suitably combined with a NIST-approved scheme. For key establishment, the generic composite technique in [SP 800-56C](/standards/symmetric-and-hash/sp-800-56c/) is allowed even if one input comes from a disallowed algorithm (§3.2.1); for signatures, NIST standards and guidelines accommodate dual signatures provided at least one component is NIST-approved (§3.2.2).

## Relationship with other standards

IR 8547 is the reference that connects the classical, post-quantum, symmetric and protocol publications in this section. It names [FIPS 203](/standards/post-quantum/fips-203/) as the post-quantum key-establishment standard and [FIPS 204](/standards/post-quantum/fips-204/), [FIPS 205](/standards/post-quantum/fips-205/) and [SP 800-208](/standards/post-quantum/sp-800-208/) for signatures, and says NIST will revise [SP 800-131A](/standards/transition-and-key-management/sp-800-131a/) with more detailed guidelines and schedules (§4.1). It replaces the earlier projection in [SP 800-57 Part 1](/standards/transition-and-key-management/sp-800-57-part-1/) for disallowing 112-bit public-key schemes (§4.1.1).

Key establishment and signatures carry different drivers. Harvest-now, decrypt-later risk makes key establishment urgent, and the report notes that application-specific guidance may require or recommend earlier migration (§4.1.2). Signatures are not exposed to that attack, but the report treats their transition as urgent because it is longer, more complex and needs more parties to coordinate (§3).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, final 27 October 2026 (initial public draft 12 November 2024). [CSRC publication page](https://csrc.nist.gov/pubs/ir/8547/final) / [Full text (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Transition and key-management publications](/standards/transition-and-key-management/)
- [Executive Order 14412](/standards/us-government-requirements/eo-14412/)
- [OMB Memorandum M-26-15](/standards/us-government-requirements/omb-m-26-15/)
- [Why migration timelines differ](/learn/explainers/why-timelines-differ/)
- [Hybrid](/learn/hybrid/)
