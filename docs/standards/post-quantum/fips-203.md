---
title: "FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard"
sidebar_label: FIPS 203 (ML-KEM)
displayed_sidebar: standardsSidebar
description: NIST standard specifying ML-KEM for post-quantum public-key key establishment.
---

## What it covers

Federal Information Processing Standards Publication 203 (FIPS 203), issued by the National Institute of Standards and Technology (NIST), specifies the Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM), derived from the CRYSTALS-Kyber submission. It defines three parameter sets — ML-KEM-512, ML-KEM-768, and ML-KEM-1024 — and the key generation, encapsulation, and decapsulation algorithms used by two parties to establish a shared secret key over a public channel.

:::info[Official texts]

- **FIPS 203 full text (PDF)** — [read the standard (PDF)](https://doi.org/10.6028/NIST.FIPS.203) or visit its [NIST CSRC publication page (HTML)](https://csrc.nist.gov/pubs/fips/203/final).
- **Potential updates** — consult NIST's [FIPS 203 errata spreadsheet](https://csrc.nist.gov/files/pubs/fips/203/final/docs/fips-203-potential-updates.xlsx) when assessing an implementation.

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2024-08-13">2024&#8209;08&#8209;13</time> | NIST published FIPS 203 as a final standard, defining ML-KEM for public-key key establishment. |
| <time dateTime="2025-11-17">2025&#8209;11&#8209;17</time> | NIST posted a planning note identifying an issue for future correction. Consult the potential-updates spreadsheet when assessing an implementation; this summary does not infer which parameter sets or implementations the issue affects. |

## Relationship with other standards

[NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547), published in October 2026, identifies FIPS 203 as a foundational post-quantum cryptography standard and states that ML-KEM is the only approved post-quantum key-establishment scheme based on public-key cryptography at the time of that report. ML-KEM establishes a shared secret that can be used by a symmetric algorithm or combined with another secret in a hybrid construction.

[NIST SP 800-227](/standards/post-quantum/sp-800-227/) gives recommendations for using key-encapsulation mechanisms and combining shared secrets. Digital signatures are a separate cryptographic job covered by [FIPS 204](/standards/post-quantum/fips-204/) and [FIPS 205](/standards/post-quantum/fips-205/). For the handbook's practical decision path, see [Key establishment](/technology-options/key-establishment/).

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, published 13 August 2024; and potential-updates errata spreadsheet. [FIPS 203 publication page](https://csrc.nist.gov/pubs/fips/203/final), [errata spreadsheet](https://csrc.nist.gov/files/pubs/fips/203/final/docs/fips-203-potential-updates.xlsx)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [NIST SP 800-227](/standards/post-quantum/sp-800-227/)
- [Key establishment](/technology-options/key-establishment/)
- [Glossary](/resources/glossary/)
