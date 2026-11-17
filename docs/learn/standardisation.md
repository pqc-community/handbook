---
title: Standardisation
sidebar_label: Standardisation
description: Which NIST post-quantum standards are final, what remains in development, and where to read the current transition.
displayed_sidebar: learnSidebar
last_reviewed: 2026-11-10
---

Three NIST standards are final and name the core post-quantum algorithms in these lessons.

[FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) specifies ML-KEM for key establishment. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) specifies ML-DSA for digital signatures, and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) specifies SLH-DSA, also for digital signatures, with a hash-based design distinct from ML-DSA.

These names are not interchangeable. A draft can still change, and a published FIPS is the standard. A protocol profile, such as a TLS or PKIX specification, says how that standard is used on the network. The vendor implementation is the product release that ships that behaviour.

Further algorithms, protocol details, and deployment profiles remain in development. Binding post-quantum algorithms into TLS, PKIX, and supplier products is still evolving, and drafts change as implementations mature.

For the current transition, read the NIST CSRC publication pages for [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final), [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final), and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final), and [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, Transition to Post-Quantum Cryptography Standards.

Continue with [Timelines](/learn/timelines/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, FIPS 203, Module-Lattice-Based Key-Encapsulation Mechanism. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, FIPS 204, Module-Lattice-Based Digital Signature Algorithm. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, FIPS 205, Stateless Hash-Based Digital Signature Algorithm. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)

## Related pages

- [Learn the basics](/learn/)
- [In real systems](/learn/in-real-systems/)
- [Timelines](/learn/timelines/)
