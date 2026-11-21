---
title: "FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard"
sidebar_label: FIPS 203 (ML-KEM)
displayed_sidebar: standardsSidebar
description: NIST standard specifying ML-KEM, the only NIST-approved post-quantum public-key key-establishment scheme, with its dates and related guidance.
---

## What it covers

Federal Information Processing Standards Publication 203 (FIPS 203) specifies the Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM), derived from the CRYSTALS-Kyber submission. It defines three parameter sets — ML-KEM-512, ML-KEM-768 and ML-KEM-1024 — and the key generation, encapsulation and decapsulation algorithms two parties use to establish a shared secret key over a public channel. It addresses key establishment only; it does not provide digital signatures.

FIPS 203 is issued by the National Institute of Standards and Technology (NIST). NIST's FIPS compliance FAQ describes FIPS as standards for federal computer systems that are not always mandatory for federal agencies: each FIPS's applicability section says when it is mandatory. FIPS do not apply to national security systems, and private-sector organisations use them voluntarily, although contractors with government contracts must comply with FISMA, which mandates the use of FIPS.

:::info[Official texts]

- [FIPS 203 full text (PDF)](https://doi.org/10.6028/NIST.FIPS.203)
- [NIST CSRC publication page](https://csrc.nist.gov/pubs/fips/203/final)
- [FIPS 203 potential-updates spreadsheet](https://csrc.nist.gov/files/pubs/fips/203/final/docs/fips-203-potential-updates.xlsx)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2023-08-24">2023&#8209;08&#8209;24</time> | NIST released the draft of FIPS 203 for public comment. |
| <time dateTime="2024-08-13">2024&#8209;08&#8209;13</time> | NIST published FIPS 203 as a final standard. |
| <time dateTime="2025-11-17">2025&#8209;11&#8209;17</time> | NIST posted a planning note identifying an issue for future correction and published a potential-updates spreadsheet. This summary does not infer which implementations the issue affects. |

## Relationship with other standards

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/), finalised in October 2026, states in §4.1.2 that ML-KEM is the only approved post-quantum key-establishment scheme based on public-key cryptography, and that NIST recommends ML-KEM-768 as the default parameter set, with other parameter sets usable where that is impractical or higher security is required. IR 8547 also notes that HQC was selected as an alternative ([NIST IR 8545](/standards/post-quantum/nist-ir-8545/)) and will become approved once its FIPS is published. The quantum-vulnerable key-establishment schemes in [SP 800-56A](/standards/classical-public-key/sp-800-56a/) and [SP 800-56B](/standards/classical-public-key/sp-800-56b/) are scheduled for deprecation after 2030 and disallowance after 2035.

[NIST SP 800-227](/standards/post-quantum/sp-800-227/) gives recommendations for using KEMs and for combining ML-KEM with a classical secret in hybrid key establishment. In protocols, [RFC 10024](/standards/modules-protocols-identity/rfc-10024/) defines hybrid ML-KEM groups for TLS 1.3, while [RFC 9935](https://www.rfc-editor.org/info/rfc9935) and [RFC 9936](https://www.rfc-editor.org/info/rfc9936) (both March 2026) specify ML-KEM in X.509 certificates and in CMS. For US national security systems, the NSA's [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) FAQ (version 2.2, October 2026) specifies ML-KEM-1024.

Digital signatures are a separate migration with different drivers, covered by [FIPS 204](/standards/post-quantum/fips-204/) and [FIPS 205](/standards/post-quantum/fips-205/). For the handbook's decision path, see [Key establishment](/technology-options/key-establishment/).

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024; planning note of 17 November 2025 and potential-updates spreadsheet. [FIPS 203 publication page](https://csrc.nist.gov/pubs/fips/203/final), [FIPS 203 (PDF)](https://doi.org/10.6028/NIST.FIPS.203)
- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), updated 2 November 2026. [NIST FIPS FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NSA, Commercial National Security Algorithm Suite 2.0 and Quantum Computing FAQ, version 2.2, October 2026. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- IETF, RFC 9935 (ML-KEM in X.509) and RFC 9936 (ML-KEM in CMS), March 2026. [RFC 9935](https://www.rfc-editor.org/info/rfc9935), [RFC 9936](https://www.rfc-editor.org/info/rfc9936)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [NIST SP 800-227](/standards/post-quantum/sp-800-227/)
- [Key establishment](/technology-options/key-establishment/)
- [Hybrid approaches](/learn/hybrid/)
- [Key encapsulation explained](/learn/explainers/kem/)
