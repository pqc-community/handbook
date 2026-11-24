---
title: NIST drafts its 2030 and 2035 transition plan
description: The NIST IR 8547 draft proposes deprecating quantum-vulnerable algorithms at 112-bit strength after 2030 and disallowing all of them after 2035.
date: 2024-11-12
authors: [pqc_handbook]
tags: [authority-updates, nist, key-establishment, signatures]
---

On 12 November 2024 the US National Institute of Standards and Technology (NIST) released the initial public draft of [NIST IR 8547, Transition to Post-Quantum Cryptography Standards](https://csrc.nist.gov/pubs/ir/8547/ipd), for comment until 10 January 2025. The draft proposes when NIST standards would deprecate and then disallow quantum-vulnerable public-key cryptography. It is addressed to federal agencies, technology providers, standards organisations and validation laboratories, and its dates could change.

{/* truncate */}

## What NIST proposed

The draft identifies the quantum-vulnerable algorithms in existing NIST standards and the post-quantum standards that replace them: ML-KEM in [FIPS 203](/standards/post-quantum/fips-203/) for key establishment, and ML-DSA, SLH-DSA and the stateful hash-based schemes for signatures. It then sets out a proposed transition schedule in two tables, one for signatures (ECDSA, EdDSA and RSA in [FIPS 186-5](/standards/classical-public-key/fips-186-5/)) and one for key establishment (finite-field and elliptic-curve Diffie-Hellman and MQV, and RSA).

## The proposed schedule

The draft treats security strengths differently. Algorithms and key sizes at 112 bits of security strength would be deprecated after 2030 and disallowed after 2035, while those at 128 bits or more would be disallowed after 2035, with no deprecation stage listed before it. In NIST's terms, a deprecated algorithm may still be used, but the data owner must examine the risk and decide whether to continue; a disallowed one is no longer allowed for the stated purpose.

For 112-bit schemes, this replaces an earlier projection in [SP 800-57 Part 1](/standards/transition-and-key-management/sp-800-57-part-1/) that NIST would disallow them on 1 January 2031. The draft says NIST intends instead to deprecate them, because of the need to migrate to quantum-resistant algorithms in that period, so organisations may continue using them while they migrate.

## Earlier dates for some applications

The general schedule is not the only date. The draft says application-specific NIST guidance may require or recommend earlier migration to post-quantum key establishment to counter harvest-now, decrypt-later attacks, and that NIST expects to prioritise this in interactive protocols such as TLS and IKE. It also notes that systems with long-term confidentiality needs may need to move earlier, while lower-risk systems may move more slowly, within National Security Memorandum 10's goal of mitigating as much quantum risk as feasible by 2035.

## What it means for your plan

This is a draft for comment, and the 2030 and 2035 dates describe what NIST standards would allow, not deadlines for every organisation. Note them in your plan as proposed NIST dates, as [Set dates and milestones](/plan/programme/dates/) describes, and check them against the final report when it appears. Your [register](/templates/records/register/) can already show which systems use algorithms at 112 bits of security strength, because the draft would deprecate those first. Key establishment protecting long-lived data remains the more urgent job, as the [quantum threat lesson](/learn/quantum-threat/) explains, whatever date the final report sets.

:::note[Later update]

NIST published IR 8547 as a final report on 27 October 2026; see [the later post on the final report](/news/2026/nist-ir-8547-final/) for how it compares with this draft.

:::

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547 initial public draft, 12 November 2024, comments due 10 January 2025. [CSRC publication page (HTML)](https://csrc.nist.gov/pubs/ir/8547/ipd), [Draft (PDF)](https://doi.org/10.6028/NIST.IR.8547.ipd)

## Related pages

- [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/)
- [Why migration timelines differ](/learn/explainers/why-timelines-differ/)
- [Post-quantum cryptography standards](/standards/post-quantum/)
