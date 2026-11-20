---
title: Post-quantum algorithms
sidebar_label: 5. Algorithms
description: What ML-KEM, ML-DSA, SLH-DSA, and the stateful hash-based schemes each do, which further algorithms NIST has selected, and why larger keys and signatures affect deployment.
displayed_sidebar: learnSidebar
---

You do not need to understand how post-quantum algorithms work internally to plan a migration. You do need to recognise their names, know which job each one does, and know why they behave differently from the algorithms they replace. This lesson gives that working knowledge; parameter tables stay in the standards.

## The algorithms by job

| Algorithm | Standard | Job | Basis | Status (20 November 2026) |
| --- | --- | --- | --- | --- |
| **ML-KEM** | [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) | Key establishment (a key-encapsulation mechanism) | Module lattices | Final, 13 August 2024 |
| **ML-DSA** | [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) | Digital signatures | Module lattices | Final, 13 August 2024 |
| **SLH-DSA** | [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) | Digital signatures | Hash functions, stateless | Final, 13 August 2024 |
| **LMS / HSS and XMSS / XMSS^MT** | [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final) | Digital signatures for limited uses | Hash functions, stateful | Final, October 2020 |
| **HQC** | NIST IR 8545 selection | Key establishment, alternative to ML-KEM | See IR 8545 | Selected March 2025; FIPS under development |
| FALCON-derived signature | — | Digital signatures | See NIST project pages | FIPS under development |

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547) (October 2026, §2.1) describes ML-KEM as derived from the CRYSTALS-Kyber submission, ML-DSA from CRYSTALS-Dilithium, and SLH-DSA from SPHINCS+; older documents and products may still use those names. The same section reports that NIST selected HQC as an alternative to ML-KEM, that a FIPS specifying HQC is under development, and that NIST is developing a FIPS for a signature algorithm derived from FALCON. NIST is also evaluating further signature schemes in a separate process.

## What each one is for

**ML-KEM** is the general-purpose post-quantum key-establishment algorithm. NIST IR 8547 (§4.1.2) states that it is, for now, the only approved post-quantum public-key key-establishment scheme and recommends **ML-KEM-768** as the default parameter set. It establishes a shared secret; it does not encrypt application data. [What a KEM is](/learn/explainers/kem/) explains the mechanism.

**ML-DSA** is the general-purpose post-quantum signature algorithm, the expected replacement for RSA and ECDSA signatures in certificates, documents, and code signing.

**SLH-DSA** is a second, independent signature design that relies on hash functions rather than lattices. The NCSC whitepaper notes that hash-based signatures are large and not suitable for general-purpose use, so SLH-DSA tends to be considered where a design independent of lattice assumptions is wanted and signature size matters less. NIST's draft [SP 800-230](https://csrc.nist.gov/pubs/sp/800/230/ipd) (13 April 2026) proposes additional SLH-DSA parameter sets for uses with a strict limit on the number of signatures per key.

**LMS and XMSS** are *stateful* hash-based signatures. The signer must never reuse a one-time key, so it has to track state reliably. NIST IR 8547 (§2.1.1) says they are not intended for general use but may be useful for software and firmware signing. [Hash-based signatures](/learn/explainers/hash-based-signatures/) explains why.

The UK NCSC's [Next steps](https://www.ncsc.gov.uk/whitepaper/next-steps-preparing-for-post-quantum-cryptography) whitepaper (August 2024) recommends ML-KEM-768 and ML-DSA-65 as giving appropriate security and efficiency for most use cases. Other authorities may prefer other parameter sets for their audiences; record the one your applicable authority names.

## Why they behave differently

The jobs are the same, but the engineering is not a like-for-like swap:

- **Size.** Post-quantum public keys, ciphertexts, and signatures are larger than their elliptic-curve equivalents; the exact sizes are in each FIPS. NIST IR 8547 (§2.2.1) notes that some protocols need more than a new algorithm identifier to accommodate the larger sizes.
- **Interfaces.** A KEM is not a drop-in Diffie–Hellman: one side encapsulates and the other decapsulates. NIST IR 8547 (§2.2.1) also identifies different interfaces as a reason protocols must change.
- **Hardware.** HSMs, TPMs, smart cards, and embedded chips have fixed memory and processing budgets. NIST IR 8547 (§2.2.3) says hardware modules must be upgraded or redesigned and, given long design lead times, that vendors should start now.
- **Maturity.** Implementations are newer and need side-channel hardening (NIST IR 8547 §2.2.2).

These differences explain why the handbook asks for product testing, not just an algorithm choice, before claiming a migration.

## Check your understanding

- Which algorithm would you expect to see for key establishment in a TLS handshake, and which in a new code-signing certificate?
- Why would anyone choose SLH-DSA over ML-DSA?
- What operational requirement makes LMS and XMSS unsuitable for general signing?

Continue with [Hybrid cryptography](/learn/hybrid/).

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 13 August 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST, Stateless Hash-Based Digital Signature Standard, FIPS 205, 13 August 2024. [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)
- NIST, Recommendation for Stateful Hash-Based Signature Schemes, SP 800-208, October 2020. [SP 800-208](https://csrc.nist.gov/pubs/sp/800/208/final)
- NIST, Additional SLH-DSA Parameter Sets for Limited Signature Use Cases, SP 800-230 (initial public draft), 13 April 2026. [SP 800-230 draft](https://csrc.nist.gov/pubs/sp/800/230/ipd)
- NIST, Status Report on the Fourth Round of the NIST Post-Quantum Cryptography Standardization Process, NIST IR 8545, March 2025. [NIST IR 8545](https://csrc.nist.gov/pubs/ir/8545/final)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026 (§2.1, §2.2, §4.1.2). [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/whitepaper/next-steps-preparing-for-post-quantum-cryptography)

## Related pages

- [Learn the basics](/learn/)
- [Post-quantum cryptography standards](/standards/post-quantum/)
- [Choosing an option](/technology-options/choosing/)
