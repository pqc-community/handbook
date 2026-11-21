---
title: "FIPS 204: Module-Lattice-Based Digital Signature Standard"
sidebar_label: FIPS 204 (ML-DSA)
displayed_sidebar: standardsSidebar
description: NIST standard specifying ML-DSA, a lattice-based post-quantum digital signature algorithm, with its dates, errata and related formats.
---

## What it covers

Federal Information Processing Standards Publication 204 (FIPS 204) specifies the Module-Lattice-Based Digital Signature Algorithm (ML-DSA), derived from the CRYSTALS-Dilithium submission. It defines key generation, signing and verification across three parameter sets — ML-DSA-44, ML-DSA-65 and ML-DSA-87 — for protecting data integrity and authenticating the signer.

FIPS 204 is issued by the National Institute of Standards and Technology (NIST). NIST's FIPS compliance FAQ describes FIPS as standards for federal computer systems that are not always mandatory for federal agencies: each FIPS's applicability section says when it is mandatory. FIPS do not apply to national security systems, and private-sector organisations use them voluntarily, although contractors with government contracts must comply with FISMA, which mandates the use of FIPS.

:::info[Official texts]

- [FIPS 204 full text (PDF)](https://doi.org/10.6028/NIST.FIPS.204)
- [NIST CSRC publication page](https://csrc.nist.gov/pubs/fips/204/final)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2023-08-24">2023&#8209;08&#8209;24</time> | NIST released the draft of FIPS 204 for public comment. |
| <time dateTime="2024-08-13">2024&#8209;08&#8209;13</time> | NIST published FIPS 204 as a final standard. |
| <time dateTime="2026-07-31">2026&#8209;07&#8209;31</time> | NIST posted a planning note listing several minor issues and published a potential-updates spreadsheet, available from the CSRC publication page. |

## Relationship with other standards

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) lists ML-DSA, alongside SLH-DSA in [FIPS 205](/standards/post-quantum/fips-205/) and the stateful schemes in [SP 800-208](/standards/post-quantum/sp-800-208/), among NIST's approved quantum-resistant digital signature schemes. Separately, IR 8547 schedules the quantum-vulnerable signature algorithms in [FIPS 186-5](/standards/classical-public-key/fips-186-5/) — ECDSA, EdDSA and RSA signatures — for deprecation after 2030 and disallowance after 2035. IR 8547 also says a FIPS for a FALCON-derived signature algorithm is under development, and that dual or composite signatures can be accommodated in FIPS 140 validation if at least one component is approved (§3.2 and §3.2.2).

For certificates, [RFC 9881](/standards/modules-protocols-identity/rfc-9881/) (October 2025) specifies ML-DSA in X.509, and [RFC 10073](/standards/modules-protocols-identity/rfc-10073/) (November 2026) specifies composite ML-DSA. For US national security systems, the NSA's [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) FAQ (version 2.2, October 2026) specifies ML-DSA-87 for signatures in any use case.

Signature migration has different drivers from key establishment under [FIPS 203](/standards/post-quantum/fips-203/): what matters is when verifiers must be able to check new signatures, not whether recorded traffic could later be decrypted. Verifiers that cannot be updated in the field need particular care; see [Firmware and secure boot](/technology-options/firmware-secure-boot/).

## Sources

- NIST, Module-Lattice-Based Digital Signature Standard, FIPS 204, 13 August 2024; planning note of 31 July 2026. [FIPS 204 publication page](https://csrc.nist.gov/pubs/fips/204/final), [FIPS 204 (PDF)](https://doi.org/10.6028/NIST.FIPS.204)
- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), content last updated 3 July 2024. [NIST FIPS FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NSA, Commercial National Security Algorithm Suite 2.0 and Quantum Computing FAQ, version 2.2, October 2026. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- IETF, RFC 9881, ML-DSA in the Internet X.509 Public Key Infrastructure, October 2025. [RFC 9881](https://www.rfc-editor.org/info/rfc9881)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [FIPS 205](/standards/post-quantum/fips-205/)
- [PKI and certificates](/technology-options/pki/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
