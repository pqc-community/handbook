---
title: Algorithms
sidebar_label: Algorithms
description: The purpose of ML-KEM, ML-DSA, and SLH-DSA, and the size and performance considerations that can affect deployment.
displayed_sidebar: learnSidebar
---

Three final NIST standards define the post-quantum algorithms introduced in this lesson, and each has a different job in real systems.

[ML-KEM](https://csrc.nist.gov/pubs/fips/203/final), in FIPS 203, is for key establishment. [ML-DSA](https://csrc.nist.gov/pubs/fips/204/final), in FIPS 204, is for digital signatures, and [SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final), in FIPS 205, is also for digital signatures, with a hash-based design distinct from ML-DSA.

The standards specify algorithms, while protocols and products determine how people can use them. [Standardisation](/learn/standardisation/) explains those layers.

ML-KEM establishes a shared secret; it does not encrypt application data. Read [What a KEM is](/learn/explainers/kem/) for how encapsulation and decapsulation work.

Post-quantum public keys, signatures, and handshake messages can be larger than their classical counterparts. Processing can also require more time or memory, particularly on constrained devices. These differences can affect certificates, handshakes, storage, and firmware updates, so deployment needs product-specific testing rather than assuming a library swap is sufficient.

Continue with [In real systems](/learn/in-real-systems/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)

## Related pages

- [Learn the basics](/learn/)
- [What post-quantum means](/learn/what-post-quantum-means/)
