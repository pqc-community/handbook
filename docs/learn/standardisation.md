---
title: Standardisation
sidebar_label: Standardisation
description: How published post-quantum algorithm standards relate to protocol profiles and product support.
displayed_sidebar: learnSidebar
---

NIST published three post-quantum algorithm standards in August 2024. They specify algorithms; they do not, by themselves, say how every protocol or product uses them.

[FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) specifies ML-KEM for key establishment. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) specifies ML-DSA for digital signatures, and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) specifies SLH-DSA, also for digital signatures, with a hash-based design distinct from ML-DSA.

The distinction has three layers: a published FIPS defines an algorithm; a protocol profile defines how an algorithm is used in a protocol; and an implementation or product release makes that behaviour available to users. A draft is not a final standard, and a final algorithm standard does not guarantee that a particular product supports it.

As of 19 November 2026, NIST lists FIPS 203, FIPS 204, and FIPS 205 as final. Its publications list also includes draft SP 800-230 on additional SLH-DSA parameter sets for limited signature use cases. Protocol support has a separate status: the NCSC's TLS guidance published on 15 October 2026 recommends post-quantum key-exchange profiles, while TLS authentication and the public Web PKI are still being standardised. These statuses describe the cited work at that date and can change independently.

For current status, check NIST's [post-quantum publications list](https://csrc.nist.gov/Projects/Post-Quantum-Cryptography/publications) and the relevant protocol and product sources. The NIST IR 8547 (October 2026) transition schedule is explained in [Timelines](/learn/timelines/).

Continue with [Timelines](/learn/timelines/).

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 13 August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Post-Quantum Cryptography publications list, accessed 19 November 2026. [NIST publication status](https://csrc.nist.gov/Projects/Post-Quantum-Cryptography/publications)
- UK National Cyber Security Centre, Using Transport Layer Security to protect data, updated 15 October 2026. [NCSC TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data)

## Related pages

- [Learn the basics](/learn/)
- [In real systems](/learn/in-real-systems/)
- [Timelines](/learn/timelines/)
