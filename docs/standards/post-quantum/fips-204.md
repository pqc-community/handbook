---
title: "FIPS 204: Module-Lattice-Based Digital Signature Standard"
sidebar_label: FIPS 204 (ML-DSA)
displayed_sidebar: standardsSidebar
last_reviewed: 2026-11-10
description: NIST standard specifying ML-DSA for general-purpose post-quantum digital signatures.
---

| Field | Detail |
| --- | --- |
| Authority | National Institute of Standards and Technology (NIST) |
| Publication | Federal Information Processing Standards Publication 204 (2024) |
| Status | Final standard |
| Official source | [CSRC publication page (HTML)](https://csrc.nist.gov/pubs/fips/204/final) |

## What it covers

FIPS 204 specifies the Module-Lattice-Based Digital Signature Algorithm (ML-DSA), derived from the CRYSTALS-Dilithium submission. It defines key generation, signing, and verification across three parameter sets — ML-DSA-44, ML-DSA-65, and ML-DSA-87 — for protecting message integrity and authenticating the signer.

## Role in the post-quantum transition

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, identifies FIPS 204 as NIST's primary general-purpose post-quantum digital signature standard replacing quantum-vulnerable schemes in [FIPS 186-5](/standards/classical-public-key/fips-186-5/). It sits alongside [FIPS 205](/standards/post-quantum/fips-205/), which provides a stateless hash-based alternative built on different mathematical assumptions.

## Sources

- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 2024. [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [FIPS 205](/standards/post-quantum/fips-205/)
- [Signatures](/technology-options/signatures/)
- [Glossary](/resources/glossary/)
