---
title: Post-quantum technology options
sidebar_label: Overview
displayed_sidebar: technologyOptionsSidebar
description: Find your technology, see which cryptographic job it does, and see which standardised post-quantum mechanism exists for it and how mature that mechanism is.
---

Start with the technology in front of you. Each page below gives the job the technology does, the standardised post-quantum mechanism and its status, who usually chooses, what good looks like, what to ask or test, the traps, the record it fills, and an example. [Choosing an option](/technology-options/choosing/) holds the rules that apply to every technology: who chooses, how to check the authorities that apply to you, the hybrid rule of thumb, and what to record. The process for making the change is in [Migration practices](/migration-practices/).

## Technologies at a glance

Status as checked on 21 November 2026. "Proposed Standard" and "Informational" are IETF RFC categories; an Internet-Draft can still change.

### Connections

| Technology | Job | Standardised post-quantum mechanism | Status |
| --- | --- | --- | --- |
| [TLS and web services](/technology-options/tls/) | Key establishment; signatures for server authentication | Hybrid ML-KEM groups for TLS 1.3 (RFC 10024) | Key exchange published (August 2026); ML-KEM alone and post-quantum authentication still drafts |
| [VPNs and IPsec](/technology-options/vpn-ipsec/) | Key establishment | Multiple key exchanges in IKEv2 (RFC 9370); ML-KEM in IKEv2 | Framework published (May 2023); ML-KEM draft in the RFC Editor queue |
| [SSH](/technology-options/ssh/) | Key establishment | Hybrid ML-KEM key exchange (RFC 10042); sntrup761x25519 (RFC 9941) | Both Informational RFCs (2026) |
| [Wi-Fi and network access](/technology-options/wifi-network-access/) | Key establishment; signatures in device certificates | None of its own; EAP-TLS 1.3 (RFC 9190) follows TLS and PKI | Depends on TLS groups and certificate support |
| [Secure messaging](/technology-options/secure-messaging/) | Key establishment; signatures | ML-KEM and hybrid cipher suites for MLS, with traditional or ML-DSA signatures | Internet-Draft in IETF Last Call |

### Certificates and identity

| Technology | Job | Standardised post-quantum mechanism | Status |
| --- | --- | --- | --- |
| [PKI and certificates](/technology-options/pki/) | Signatures | ML-DSA, composite ML-DSA, SLH-DSA and hash-based signatures in X.509 | Published RFCs (2025 to 2026) |
| [DNSSEC](/technology-options/dnssec/) | Signatures | ML-DSA-44 has a DNSSEC algorithm number (18) from IANA | Specification still an individual Internet-Draft |
| [Identity and sign-in](/technology-options/identity/) | Signatures, sometimes key establishment | Depends on the certificates and protocols underneath | No technology-specific profile listed yet |
| [Kerberos and directory sign-in](/technology-options/kerberos/) | Key establishment and signatures in certificate logon; the core is symmetric | None for certificate logon; PKINIT (RFC 4556) predates post-quantum | No post-quantum method for certificate logon yet |

### Signing

| Technology | Job | Standardised post-quantum mechanism | Status |
| --- | --- | --- | --- |
| [Code and software signing](/technology-options/code-signing/) | Signatures | ML-DSA, SLH-DSA, LMS, XMSS; ML-DSA, SLH-DSA and HSS/LMS in CMS | Algorithms final; formats published |
| [Firmware and secure boot](/technology-options/firmware-secure-boot/) | A verifier that may not be updatable | Whatever the device's boot verifier supports | Depends on the component supplier |
| [Documents and email signing](/technology-options/document-signing/) | Signatures | Post-quantum OpenPGP (RFC 9980); ML-DSA and hash-based signatures in CMS | Published RFCs |

### Stored data

| Technology | Job | Standardised post-quantum mechanism | Status |
| --- | --- | --- | --- |
| [Encrypted email and files](/technology-options/encrypted-files/) | Key establishment (stored data) | KEMs and ML-KEM in CMS (RFC 9629, RFC 9936); post-quantum OpenPGP (RFC 9980) | Published RFCs |
| [Backups, archives and storage](/technology-options/stored-data/) | Key establishment (stored data) | Depends on the product's key wrapping | Depends on the product |

### Platforms and environments

These last four span several jobs, so each points to the cards for the jobs it does.

| Technology | Job | Standardised post-quantum mechanism | Status |
| --- | --- | --- | --- |
| [HSMs and key management](/technology-options/hsm-kms/) | Holds keys for every job | Support for the new algorithms in the module, validated under FIPS 140-3 where validation is required | Depends on the supplier |
| [Libraries and bespoke code](/technology-options/libraries-bespoke-code/) | Any job the code performs | ML-KEM, ML-DSA and SLH-DSA (FIPS 203 to 205); LMS and XMSS (SP 800-208) | Algorithms final; library support depends on the release |
| [Cloud and SaaS](/technology-options/cloud-saas/) | Whatever the service does | The supplier's choice | Depends on the provider |
| [OT and industrial systems](/technology-options/ot-industrial/) | All three jobs; integrity usually comes first | Enterprise mechanisms for remote access and IT zones; none yet for many industrial protocols | Depends on the layer and the supplier |

## Technology not listed?

1. **Name the jobs it does**: does it agree or wrap keys (key establishment), sign or check signatures (signatures), or check code with a verifier that cannot be updated?
2. **Find the protocol or format underneath.** Many products run on TLS, SSH, IPsec, X.509 certificates, CMS, or OpenPGP; use that card for that job.
3. **If a supplier controls it**, ask in writing for each job, as [Work with suppliers](/migration-practices/suppliers/) describes; the questions on [Cloud and SaaS](/technology-options/cloud-saas/) work for most bought-in products.
4. **If you build it**, use [Libraries and bespoke code](/technology-options/libraries-bespoke-code/).
5. **Then apply** [Choosing an option](/technology-options/choosing/) and record each job on its own line.

## Keep the jobs separate

One product can do several jobs, each on its own clock. Key establishment runs to the data's confidentiality period, because of [harvest-now, decrypt-later](/resources/glossary/#harvest-now-decrypt-later). Signatures run to the coordination of everyone who verifies them, which [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) notes takes longer and involves more parties. A verifier that cannot be updated runs to its product's design freeze, the date after which the hardware can no longer change. Record each job on its own line of the [migration plan](/resources/migration-plan/).

Commodity products that receive post-quantum support through supplier updates need no option chosen here; see [Keep commodity software updated](/migration-practices/commodity-software/). Algorithms are summarised in [Post-quantum cryptography standards](/standards/post-quantum/), protocols and certificates in [Modules, protocols, and certificates](/standards/modules-protocols-identity/), and authorities' positions in [National algorithm positions](/standards/national-algorithm-positions/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- IANA, DNSSEC Algorithm Numbers registry, last updated 10 August 2026. [IANA registry](https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml)
- RFC Editor information pages for [RFC 10024](https://www.rfc-editor.org/info/rfc10024), [RFC 9370](https://www.rfc-editor.org/info/rfc9370), [RFC 10042](https://www.rfc-editor.org/info/rfc10042), [RFC 9941](https://www.rfc-editor.org/info/rfc9941), [RFC 9881](https://www.rfc-editor.org/info/rfc9881), [RFC 10073](https://www.rfc-editor.org/info/rfc10073), [RFC 9629](https://www.rfc-editor.org/info/rfc9629), [RFC 9936](https://www.rfc-editor.org/info/rfc9936) and [RFC 9980](https://www.rfc-editor.org/info/rfc9980), checked 21 November 2026.
- IETF Datatracker, [draft-ietf-tls-mlkem](https://datatracker.ietf.org/doc/draft-ietf-tls-mlkem/) and [draft-ietf-ipsecme-ikev2-mlkem](https://datatracker.ietf.org/doc/draft-ietf-ipsecme-ikev2-mlkem/), checked 21 November 2026.

## Related pages

- [Choosing an option](/technology-options/choosing/)
- [Migration practices](/migration-practices/)
- [Modules, protocols, and certificates](/standards/modules-protocols-identity/)
- [Hybrid cryptography](/learn/hybrid/)
