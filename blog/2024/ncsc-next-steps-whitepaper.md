---
title: UK NCSC updates its post-quantum whitepaper
description: NCSC's Next steps whitepaper, version 2.0, names ML-KEM-768 and ML-DSA-65 for most uses, sets hybrid as an interim measure and tells system owners to plan now.
date: 2024-08-14
authors: [pqc_handbook]
tags: [authority-updates, uk, key-establishment, signatures]
---

On August 14, 2024, the UK National Cyber Security Centre (NCSC) published version 2.0 of its whitepaper [Next steps in preparing for post-quantum cryptography](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography), first published in November 2023. Written for system and risk owners in commercial enterprises, public sector organizations and critical national infrastructure, it follows NIST's final standards of the previous day with NCSC's algorithm, parameter and hybrid recommendations.

{/* truncate */}

## What NCSC published

The whitepaper explains the threat a cryptographically relevant quantum computer would pose to today's public-key cryptography, then sets out what users and system owners should do. It treats the two jobs separately. For key establishment, the risk is an attacker recording data now and decrypting it later, which NCSC says is only likely to be worthwhile for very high-value information. For signatures, the threat is forgery once such a computer exists, and NCSC says it should be considered now when deploying keys for high-value trust anchors with a long operational lifetime.

It names the algorithms NCSC recommends: ML-KEM ([FIPS 203](/standards/post-quantum/fips-203/)) for key establishment and ML-DSA ([FIPS 204](/standards/post-quantum/fips-204/)) for signatures, with SLH-DSA, LMS and XMSS for uses such as signing firmware and software. NCSC says all parameter sets of these algorithms provide an acceptable level of security for personal, enterprise and OFFICIAL-tier government information, and recommends ML-KEM-768 and ML-DSA-65 for most use cases. It advises that operational systems use only robust implementations of the final standards, and protocol implementations based on published RFCs rather than Internet-Drafts.

## Hybrid as an interim measure

NCSC accepts that hybrid schemes, which combine a post-quantum algorithm with a traditional one, may be needed for interoperability, implementation security or protocol constraints. It also says they are more complex and less efficient, and that if one is chosen it should be an interim measure within a framework that allows a straightforward later move to post-quantum algorithms alone. For public key infrastructure, NCSC prefers a single migration to a fully post-quantum PKI over an intermediate hybrid one. Other authorities take different positions, as the [hybrid lesson](/learn/hybrid/) sets out.

## What it means for your plan

The whitepaper recommends rather than requires, and it applies to NCSC's stated audience. For commodity IT such as standard browsers and operating systems, NCSC expects post-quantum support to arrive through software updates, so keeping supported products up to date, as in the [core actions](/plan/core-actions/), is the main task. Owners of enterprise IT should ask their suppliers about their plans for post-quantum support; [Work with suppliers](/plan/program/suppliers/) shows how to record the answers.

For bespoke systems and operational technology, NCSC expects system and risk owners to choose algorithms and protocols themselves, and it advises owners of both enterprise and bespoke IT to begin financial planning, timing upgrades with broader technology refreshes. Long-lived signing keys and roots of trust deserve early attention, as the [firmware and secure boot card](/technology-options/firmware-secure-boot/) explains.

## Sources

- UK NCSC, Next steps in preparing for post-quantum cryptography, whitepaper version 2.0, August 14, 2024 (first published November 2023). [Whitepaper (HTML)](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)

## Related pages

- [UK NCSC guidance](/standards/migration-guides/ncsc-migration-timelines/)
- [National algorithm positions](/standards/national-algorithm-positions/)
- [Choosing an option](/technology-options/choosing/)
