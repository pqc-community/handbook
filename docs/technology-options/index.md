---
title: Post-quantum technology options
sidebar_label: Overview
displayed_sidebar: technologyOptionsSidebar
description: Find your technology and see, for key establishment and for signatures separately, which post-quantum mechanism exists and how mature it is.
---

Start with the technology in front of you. Each page below gives the job the technology does, the standardised post-quantum mechanism and its status, who usually chooses, what good looks like, what to ask or test, the traps, the record it fills, and an example. [Choosing an option](/technology-options/choosing/) holds the rules that apply to every technology: who chooses, how to check the authorities that apply to you, the hybrid rule of thumb, and what to record. The process for making the change is in the [programme](/plan/programme/).

## Technologies at a glance

The table has one column for each job. Each cell starts with where the post-quantum mechanism for that job stands:

- **Published**: a final NIST standard or a published RFC. "Proposed Standard" and "Informational" are IETF RFC categories, and the card says which applies.
- **Draft**: an Internet-Draft, which can still change.
- **None yet**: no post-quantum mechanism is published for that job in that technology.
- **Follows** another card: the technology takes the mechanism from the protocol or certificates underneath.
- **Supplier**: set by the product or provider, so ask in writing.

A dash means the technology does not do that job, or another card covers it. Verification by a device that cannot be updated sits in the signatures column.

### Connections

| Technology | Key establishment | Signatures and verification |
| --- | --- | --- |
| [TLS and web services](/technology-options/tls/) | **Published.** Hybrid ML-KEM groups for TLS 1.3 (RFC 10024, August 2026); ML-KEM alone is a draft in the RFC Editor queue | **Draft.** ML-DSA for TLS 1.3 authentication is in the RFC Editor queue; the certificate formats are published. TLS 1.2 will get no post-quantum mechanism for either job (RFC 9851) |
| [VPNs and IPsec](/technology-options/vpn-ipsec/) | **Draft.** The framework for adding a key exchange to IKEv2 is published (RFC 9370, May 2023); ML-KEM in IKEv2 is in the RFC Editor queue | **Draft.** ML-DSA and SLH-DSA authentication in IKEv2 is in the RFC Editor queue; composite signatures are an early working-group draft |
| [SSH](/technology-options/ssh/) | **Published.** Hybrid ML-KEM key exchange (RFC 10042) and sntrup761x25519 (RFC 9941), both Informational RFCs (2026) | **Draft.** Composite ML-DSA host and user keys are an early working-group draft; ML-DSA alone is an individual draft |
| [Wi-Fi and network access](/technology-options/wifi-network-access/) | **Follows** [TLS](/technology-options/tls/): EAP-TLS 1.3 (RFC 9190) uses its key-exchange groups | **Follows** [PKI](/technology-options/pki/): device and server certificates |
| [Secure messaging](/technology-options/secure-messaging/) | **Draft.** ML-KEM and hybrid cipher suites for MLS, in IETF Last Call | **Draft.** The same draft pairs them with traditional or ML-DSA signatures |

### Certificates and identity

| Technology | Key establishment | Signatures and verification |
| --- | --- | --- |
| [PKI and certificates](/technology-options/pki/) | **Published.** ML-KEM keys in certificates used for key establishment (RFC 9935, March 2026) | **Published.** ML-DSA (RFC 9881), composite ML-DSA (RFC 10073), SLH-DSA (RFC 9909), and HSS and XMSS (RFC 9802) in X.509; for public certificates, Chrome plans Merkle Tree Certificates, still a draft, rather than ML-DSA chains |
| [DNSSEC](/technology-options/dnssec/) | — | **Draft.** ML-DSA-44 has DNSSEC algorithm number 18 from IANA, but its specification is an individual Internet-Draft |
| [Identity and sign-in](/technology-options/identity/) | **Follows** the protocol underneath, where sign-in establishes keys | **Follows** [PKI](/technology-options/pki/) for certificates; **Supplier** for federation tokens, passkeys, and other sign-in protocols |
| [Kerberos and directory sign-in](/technology-options/kerberos/) | **None yet** for certificate logon: PKINIT (RFC 4556) predates post-quantum; the core is symmetric | **Follows** [PKI](/technology-options/pki/) for smart-card logon certificates |

### Signing

| Technology | Key establishment | Signatures and verification |
| --- | --- | --- |
| [Code and software signing](/technology-options/code-signing/) | — | **Published.** ML-DSA, SLH-DSA, LMS, and XMSS are final; ML-DSA, SLH-DSA, and HSS/LMS in CMS are Proposed Standards (2025), as is composite ML-DSA in CMS (RFC 10082, November 2026); platform formats are set by each platform |
| [Firmware and secure boot](/technology-options/firmware-secure-boot/) | — | **Supplier.** Whatever the device's boot verifier supports, which may not change after shipment |
| [Documents and email signing](/technology-options/document-signing/) | — (see [Encrypted email and files](/technology-options/encrypted-files/)) | **Published.** Post-quantum OpenPGP (RFC 9980); ML-DSA, composite ML-DSA, and hash-based signatures in CMS; PDF and other formats depend on the supplier |

### Stored data

| Technology | Key establishment | Signatures and verification |
| --- | --- | --- |
| [Encrypted email and files](/technology-options/encrypted-files/) | **Published.** KEMs and ML-KEM in CMS (RFC 9629, RFC 9936); post-quantum OpenPGP (RFC 9980) | — (see [Documents and email signing](/technology-options/document-signing/)) |
| [Backups, archives and storage](/technology-options/backups-archives/) | **Supplier.** Depends on the product's key wrapping; CMS and OpenPGP formats follow [Encrypted email and files](/technology-options/encrypted-files/) | — |

### Platforms and environments

These last four span several jobs, so each points to the cards for the jobs it does.

| Technology | Key establishment | Signatures and verification |
| --- | --- | --- |
| [HSMs and key management](/technology-options/hsm-kms/) | **Supplier.** Algorithm support by module release, validated under FIPS 140-3 where validation is required | **Supplier.** As for key establishment, including signing state for LMS or XMSS |
| [Libraries and bespoke code](/technology-options/libraries-bespoke-code/) | **Published.** ML-KEM (FIPS 203); library support depends on the release | **Published.** ML-DSA and SLH-DSA (FIPS 204, 205), LMS and XMSS (SP 800-208); library support depends on the release |
| [Cloud and SaaS](/technology-options/cloud-saas/) | **Supplier.** The provider's choice | **Supplier.** The provider's choice |
| [OT and industrial systems](/technology-options/ot-industrial/) | **Follows** TLS, VPNs, and SSH for IT zones and remote access; **None yet** for many industrial protocols | **Supplier.** Field devices support whatever their supplier provides; integrity usually comes first |

The Post-Quantum Cryptography Coalition, a non-governmental community whose [migration roadmap](/standards/migration-guides/pqcc-roadmap/) is summarised in Standards, publishes a [State of the Migration](https://pqcc.org/learn-more/state-of-the-migration/) heatmap. It scores each protocol's standardisation separately for post-quantum confidentiality and authentication, in pure and hybrid forms. Its latest heatmap is for June 2026. It is a useful second view of the same split; where it differs from the cards, they cite the primary source.

## Technology not listed?

1. **Name the jobs it does**: does it agree or wrap keys (key establishment), sign or check signatures (signatures), or check code with a verifier that cannot be updated?
2. **Find the protocol or format underneath.** Many products run on TLS, SSH, IPsec, X.509 certificates, CMS, or OpenPGP; use that card for that job.
3. **If a supplier controls it**, ask in writing for each job, as [Work with suppliers](/plan/programme/suppliers/) describes; the questions on [Cloud and SaaS](/technology-options/cloud-saas/) work for most bought-in products.
4. **If you build it**, use [Libraries and bespoke code](/technology-options/libraries-bespoke-code/).
5. **Then apply** [Choosing an option](/technology-options/choosing/) and record each job on its own line.

## Keep the jobs separate

One product can do several jobs, each on its own clock. Key establishment runs to the data's confidentiality period, because of [harvest-now, decrypt-later](/templates/reference/glossary/#harvest-now-decrypt-later). Signatures run to the coordination of everyone who verifies them, which [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) notes takes longer and involves more parties. A verifier that cannot be updated runs to its product's design freeze, the date after which the hardware can no longer change. Record each job on its own row of the [register](/templates/records/register/).

Commodity products that receive post-quantum support through supplier updates need no option chosen here; the [core actions](/plan/core-actions/) cover them. Algorithms are summarised in [Post-quantum cryptography standards](/standards/post-quantum/), protocols and certificates in [Modules, protocols, and certificates](/standards/modules-protocols-certificates/), and authorities' positions in [National algorithm positions](/standards/national-algorithm-positions/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- IANA, DNSSEC Algorithm Numbers registry, last updated 10 August 2026. [IANA registry](https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml)
- RFC Editor information pages for [RFC 10024](https://www.rfc-editor.org/info/rfc10024), [RFC 9370](https://www.rfc-editor.org/info/rfc9370), [RFC 10042](https://www.rfc-editor.org/info/rfc10042), [RFC 9941](https://www.rfc-editor.org/info/rfc9941), [RFC 9881](https://www.rfc-editor.org/info/rfc9881), [RFC 10073](https://www.rfc-editor.org/info/rfc10073), [RFC 10082](https://www.rfc-editor.org/info/rfc10082), [RFC 9629](https://www.rfc-editor.org/info/rfc9629), [RFC 9936](https://www.rfc-editor.org/info/rfc9936) and [RFC 9980](https://www.rfc-editor.org/info/rfc9980).
- RFC Editor information pages for [RFC 9935](https://www.rfc-editor.org/info/rfc9935), [RFC 9909](https://www.rfc-editor.org/info/rfc9909), [RFC 9802](https://www.rfc-editor.org/info/rfc9802) and [RFC 9190](https://www.rfc-editor.org/info/rfc9190), as cited on the PKI and Wi-Fi cards, and [RFC 9851](https://www.rfc-editor.org/info/rfc9851).
- IETF Datatracker, [draft-ietf-tls-mldsa](https://datatracker.ietf.org/doc/draft-ietf-tls-mldsa/), [draft-ietf-ipsecme-ikev2-pqc-auth](https://datatracker.ietf.org/doc/draft-ietf-ipsecme-ikev2-pqc-auth/) and [draft-ietf-sshm-composite-sigs](https://datatracker.ietf.org/doc/draft-ietf-sshm-composite-sigs/).
- IETF Datatracker, [draft-ietf-tls-mlkem](https://datatracker.ietf.org/doc/draft-ietf-tls-mlkem/) and [draft-ietf-ipsecme-ikev2-mlkem](https://datatracker.ietf.org/doc/draft-ietf-ipsecme-ikev2-mlkem/).

- Google, Chrome Quantum-resistant Root Program, Frequently Asked Questions. [Chrome Quantum-resistant Root Program FAQ (HTML)](https://googlechrome.github.io/chromerootprogram/cqrp/faq/)
- Post-Quantum Cryptography Coalition, State of the Migration, June 2026 heatmap. [PQCC heatmap](https://pqcc.org/learn-more/state-of-the-migration/)

## Related pages

- [Choosing an option](/technology-options/choosing/)
- [Programme](/plan/programme/)
- [Modules, protocols, and certificates](/standards/modules-protocols-certificates/)
- [Hybrid cryptography](/learn/hybrid/)
