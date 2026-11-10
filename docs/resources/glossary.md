---
title: Post-quantum glossary
sidebar_label: Glossary
sidebar_position: 6
displayed_sidebar: resourcesSidebar
last_reviewed: 2026-11-10
description: Short forms used in this handbook, from PQC and hybrid to harvest-now, decrypt-later. Handbook wording is labelled as handbook wording.
---

This page is step 7 of [Learn the basics](/learn/). Each entry is handbook wording unless it cites a source. When you are ready to plan, return to the [homepage](/).

### CBOM (cryptography bill of materials)

**Handbook wording:** A cryptography bill of materials, a developing model in NIST SP 1800-38B ([preliminary draft](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38b-preliminary-draft.pdf), December 2023), not a requirement of this handbook. See [Inventory the cryptography](/migration-practices/inventory/).

### Certificate chain

**Handbook wording:** The linked certificates from a leaf to a trust anchor. See [Signatures](/algorithm-protocol-options/signatures/).

### Crypto-agility

**Handbook wording:** The ability to change algorithms again. The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) tells stakeholders to remain cryptographically agile so they can adapt.

### Discovery

**Handbook wording:** Finding where cryptography is used, including what a scan cannot see. See [Inventory the cryptography](/migration-practices/inventory/).

### Harvest-now, decrypt-later

**Authority recommendation:** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, names collecting encrypted data now and decrypting it later. It applies to confidentiality, not to authentication.

### Hybrid

**Authority recommendation:** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, describes a classical algorithm and a post-quantum algorithm used together so the exchange or the signature still holds if either one fails. The construction is secure if at least one component is secure.

### KEM (key-encapsulation mechanism)

**Handbook wording:** A key-encapsulation mechanism, which establishes a shared secret. See [Key establishment](/algorithm-protocol-options/key-establishment/).

### ML-DSA (Module-Lattice-Based Digital Signature Algorithm)

NIST's lattice-based signature algorithm in [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final).

### ML-KEM (Module-Lattice-Based Key-Encapsulation Mechanism)

NIST's key-establishment algorithm in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final).

### PKI (public-key infrastructure)

**Handbook wording:** The public-key infrastructure that issues and checks certificates. See [Signatures](/algorithm-protocol-options/signatures/).

### Post-quantum cryptography (PQC)

**Handbook wording:** Public-key cryptography intended to stay secure against a cryptographically relevant quantum computer.

### Regular adopter

**Authority recommendation:** The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) classifies organisations that do not need to react yet as regular adopters.

### Root of trust

**Handbook wording:** A check the device cannot replace later. See [Long-lived roots of trust](/algorithm-protocol-options/long-lived-roots/).

### SLH-DSA (Stateless Hash-Based Digital Signature Algorithm)

NIST's stateless hash-based signature algorithm in [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final).

### Urgent adopter

**Authority recommendation:** The [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, December 2024) classifies organisations that cannot afford to delay as urgent adopters.

### Verifier

**Handbook wording:** The component that checks a signature. See [Long-lived roots of trust](/algorithm-protocol-options/long-lived-roots/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Learn the basics](/learn/)
- [Standardisation](/learn/standardisation/)
- [Homepage](/)
- [Curated references](/resources/curated-references/)
- [Choosing an option](/algorithm-protocol-options/choosing/)
- [Key establishment](/algorithm-protocol-options/key-establishment/)
- [Signatures](/algorithm-protocol-options/signatures/)
- [Long-lived roots of trust](/algorithm-protocol-options/long-lived-roots/)
- [Inventory the cryptography](/migration-practices/inventory/)
- [Priority](/migration-practices/priority/)
- [Diagnose](/migration-practices/diagnose/)
