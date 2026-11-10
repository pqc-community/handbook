---
title: Algorithms
sidebar_label: Algorithms
description: The purpose of ML-KEM, ML-DSA, and SLH-DSA, what a KEM is, and qualitative trade-offs of size and performance.
displayed_sidebar: learnSidebar
last_reviewed: 2026-11-10
---

Three NIST standards name the post-quantum algorithms most organisations meet first. Each standard has a different job in real systems.

[ML-KEM](https://csrc.nist.gov/pubs/fips/203/final), in FIPS 203, is for key establishment. [ML-DSA](https://csrc.nist.gov/pubs/fips/204/final), in FIPS 204, is for digital signatures. [SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final), in FIPS 205, is also for digital signatures, using a hash-based design with a different profile from ML-DSA.

A key-encapsulation mechanism, or KEM, is a way for two parties to establish a shared secret across an open network. One party runs encapsulation with the other's public key and produces ciphertext plus that shared secret; the other party decapsulates with the private key and recovers the same secret. Protocols such as TLS often use that secret to derive symmetric keys that protect the bulk of the traffic, in the same pattern as earlier public-key key establishment.

Post-quantum public keys and signatures are often larger than those from RSA or elliptic-curve cryptography. Processing can cost more CPU time or memory on constrained devices. Certificates, handshake messages, and firmware images therefore need more space and more testing before deployment. Those qualitative size and performance trade-offs are why teams treat deployment as an engineering exercise rather than a drop-in library swap.

Next: [In real systems](/learn/in-real-systems/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST, FIPS 203, Module-Lattice-Based Key-Encapsulation Mechanism. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, FIPS 204, Module-Lattice-Based Digital Signature Algorithm. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, FIPS 205, Stateless Hash-Based Digital Signature Algorithm. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)

## Related pages

- [Learn the basics](/learn/)
- [What post-quantum means](/learn/what-post-quantum-means/)
