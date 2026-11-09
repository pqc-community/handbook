---
title: Glossary
sidebar_label: Glossary
sidebar_position: 6
displayed_sidebar: resourcesSidebar
description: Short forms used in this handbook. Handbook wording is labelled as handbook wording.
---

Each entry is the handbook's wording unless it cites a source.

### Post-quantum cryptography (PQC)

Handbook wording: public-key cryptography intended to stay secure against a cryptographically relevant quantum computer.

### Hybrid

Handbook wording, aligned with [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)'s description: a classical algorithm and a post-quantum algorithm used together so the exchange or the signature still holds if either one fails. NIST IR 8547, October 2026, is the source for the property that the construction is secure if at least one component is secure.

### Harvest-now, decrypt-later

NIST IR 8547's name for collecting encrypted data now and decrypting it later. It applies to confidentiality, not to authentication.

### ML-KEM, ML-DSA, SLH-DSA

Handbook gloss: the NIST key-establishment algorithm, and the two NIST signature algorithms. The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines), modified 3 August 2026, name them as FIPS 203, FIPS 204, and FIPS 205. This edition does not link those standards.

### Urgent adopter and regular adopter

The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) split: urgent adopters need to start because they cannot afford to delay; regular adopters do not need to react yet.

### Crypto-agility

Handbook wording on this site: the ability to change algorithms again. The Dutch handbook tells stakeholders to remain cryptographically agile so they can adapt.

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Choosing an option](../algorithm-protocol-options/choosing.md)
- [Priority](../migration-practices/priority.md)
- [Where to start](../migration-practices/where-to-start.md)
