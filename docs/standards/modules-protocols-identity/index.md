---
title: Modules, protocols, and certificates
sidebar_label: Overview
displayed_sidebar: standardsSidebar
description: Standards for validating cryptographic modules, configuring TLS, and carrying post-quantum algorithms in protocols, X.509 certificates and identity credentials.
---

These documents sit between the algorithm standards and the products a migration team buys and runs: how cryptographic modules are validated, how protocols such as TLS negotiate post-quantum key establishment, and how post-quantum signatures are carried in certificates and identity credentials. Their binding status varies. FIPS publications are NIST standards for US federal systems, applicable as each FIPS's applicability section states; NIST Special Publications are guidance for US federal agencies, widely used by others; and IETF RFCs are voluntary technical specifications that implementations follow for interoperability.

## Which document do I need?

- Does a product's cryptography carry a recognised validation? → [FIPS 140-3](/standards/modules-protocols-identity/fips-140-3/)
- How should TLS be configured, and when will NIST cover post-quantum TLS? → [NIST SP 800-52](/standards/modules-protocols-identity/sp-800-52/)
- Which hybrid key exchange groups does post-quantum TLS 1.3 use? → [RFC 10024](/standards/modules-protocols-identity/rfc-10024/)
- How are ML-DSA keys and signatures put in certificates, alone or paired with a classical algorithm? → [RFC 9881](/standards/modules-protocols-identity/rfc-9881/) and [RFC 10073](/standards/modules-protocols-identity/rfc-10073/)
- How do post-quantum plans affect US federal PIV credentials? → [FIPS 201-3](/standards/modules-protocols-identity/fips-201-3/)

### Module validation

| Publication | Summary | Reference |
| --- | --- | --- |
| FIPS 140-3 | Security requirements for cryptographic modules validated under the CMVP. Final, 22 March 2019; effective 22 September 2019. | [FIPS 140-3](/standards/modules-protocols-identity/fips-140-3/) |

### Protocols

| Publication | Summary | Reference |
| --- | --- | --- |
| NIST SP 800-52 Rev. 2 | Guidelines for selecting and configuring TLS. Final, 29 August 2019; revision with post-quantum support planned (note of 19 November 2026). | [NIST SP 800-52](/standards/modules-protocols-identity/sp-800-52/) |
| RFC 10024 | Hybrid ML-KEM and elliptic-curve key agreement groups for TLS 1.3. Proposed Standard, August 2026. | [RFC 10024](/standards/modules-protocols-identity/rfc-10024/) |

### Certificates and identity

| Publication | Summary | Reference |
| --- | --- | --- |
| RFC 9881 | ML-DSA algorithm identifiers and encodings for X.509 certificates and CRLs. Proposed Standard, October 2025. | [RFC 9881](/standards/modules-protocols-identity/rfc-9881/) |
| RFC 10073 | Composite signatures pairing ML-DSA with a classical algorithm in X.509. Proposed Standard, November 2026. | [RFC 10073](/standards/modules-protocols-identity/rfc-10073/) |
| FIPS 201-3 | Personal Identity Verification (PIV) of US federal employees and contractors. Final, 24 January 2022. | [FIPS 201-3](/standards/modules-protocols-identity/fips-201-3/) |

### Other post-quantum protocol and format specifications

These IETF documents are not summarised in the handbook. Statuses were checked on 21 November 2026; follow the links for current status.

| Specification | Summary | Reference |
| --- | --- | --- |
| RFC 9629 | Using key-encapsulation mechanisms in CMS. Proposed Standard, August 2024. | [RFC 9629](https://www.rfc-editor.org/info/rfc9629) |
| RFC 9936 | ML-KEM in CMS. Proposed Standard, March 2026. | [RFC 9936](https://www.rfc-editor.org/info/rfc9936) |
| RFC 9814 | SLH-DSA in CMS. Proposed Standard, July 2025. | [RFC 9814](https://www.rfc-editor.org/info/rfc9814) |
| RFC 9708 | HSS/LMS hash-based signatures in CMS. Proposed Standard, January 2025. | [RFC 9708](https://www.rfc-editor.org/info/rfc9708) |
| RFC 9909 | SLH-DSA in X.509. Proposed Standard, December 2025. | [RFC 9909](https://www.rfc-editor.org/info/rfc9909) |
| RFC 9935 | ML-KEM in X.509. Proposed Standard, March 2026. | [RFC 9935](https://www.rfc-editor.org/info/rfc9935) |
| RFC 9802 | HSS and XMSS hash-based signatures in X.509. Proposed Standard, June 2025. | [RFC 9802](https://www.rfc-editor.org/info/rfc9802) |
| RFC 9954 | Hybrid key exchange design framework for TLS 1.3. Informational, July 2026. | [RFC 9954](https://www.rfc-editor.org/info/rfc9954) |
| draft-ietf-tls-mlkem | ML-KEM on its own in TLS 1.3. Internet-Draft in the RFC Editor queue. | [draft-ietf-tls-mlkem](https://datatracker.ietf.org/doc/draft-ietf-tls-mlkem/) |
| RFC 9941 | SSH key exchange with sntrup761x25519. Informational, April 2026. | [RFC 9941](https://www.rfc-editor.org/info/rfc9941) |
| RFC 10042 | SSH hybrid key exchange with ML-KEM (mlkem768x25519). Informational, August 2026. | [RFC 10042](https://www.rfc-editor.org/info/rfc10042) |
| RFC 9370 | Multiple key exchanges in IKEv2. Proposed Standard, May 2023. | [RFC 9370](https://www.rfc-editor.org/info/rfc9370) |
| draft-ietf-ipsecme-ikev2-mlkem | ML-KEM in IKEv2. Internet-Draft in the RFC Editor queue. | [draft-ietf-ipsecme-ikev2-mlkem](https://datatracker.ietf.org/doc/draft-ietf-ipsecme-ikev2-mlkem/) |
| RFC 9980 | Post-quantum cryptography in OpenPGP. Proposed Standard, June 2026. | [RFC 9980](https://www.rfc-editor.org/info/rfc9980) |
| RFC 9794 | Terminology for post-quantum/traditional hybrid schemes. Informational, June 2025. | [RFC 9794](https://www.rfc-editor.org/info/rfc9794) |

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), updated 2 November 2026. [NIST FIPS compliance FAQ](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)
- RFC Editor information pages for each RFC listed, checked 21 November 2026. [RFC Editor](https://www.rfc-editor.org/)

## Related pages

- [Standards](/standards/)
- [In real systems](/learn/in-real-systems/)
- [TLS explainer](/learn/explainers/tls/)
- [Signatures and trust](/learn/signatures-and-trust/)
- [Hybrid approaches](/learn/hybrid/)
