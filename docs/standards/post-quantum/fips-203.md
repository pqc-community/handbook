---
title: "FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard"
sidebar_label: FIPS 203 (ML-KEM)
displayed_sidebar: standardsSidebar
last_reviewed: 2026-11-19
description: NIST standard specifying ML-KEM for post-quantum public-key key establishment.
---

| Field | Detail |
| --- | --- |
| Authority | National Institute of Standards and Technology (NIST) |
| Publication | Federal Information Processing Standards Publication 203 (2024) |
| Status | Final standard |
| Official source | [CSRC publication page (HTML)](https://csrc.nist.gov/pubs/fips/203/final) |

## What it covers

FIPS 203 specifies the Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM), derived from the CRYSTALS-Kyber submission. It defines three parameter sets — ML-KEM-512, ML-KEM-768, and ML-KEM-1024 — and the key generation, encapsulation, and decapsulation algorithms used by two parties to establish a shared secret key over a public channel.

NIST's CSRC page carries a planning note dated 17 November 2025: NIST identified an issue for correction in a future update or revision. Consult the [potential-updates errata spreadsheet](https://csrc.nist.gov/files/pubs/fips/203/final/docs/fips-203-potential-updates.xlsx) when assessing an implementation. This summary does not infer which parameter sets or implementations the issue affects.

## Role in the post-quantum transition

[NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, names FIPS 203 as one of the foundational post-quantum cryptography standards and notes that ML-KEM is the only approved post-quantum key-establishment scheme based on public-key cryptography at the time of that report. Its output is a shared secret key that can be used directly as a symmetric key or combined with another secret in a hybrid construction.

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [NIST SP 800-227](/standards/post-quantum/sp-800-227/)
- [Key establishment](/technology-options/key-establishment/)
- [Glossary](/resources/glossary/)
