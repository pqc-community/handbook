---
title: IETF publishes composite ML-DSA for X.509
description: RFC 10073, a November 2026 Proposed Standard, defines composite signatures pairing ML-DSA with RSA, ECDSA, Ed25519 or Ed448 in X.509 certificates.
date: 2026-11-06
authors: [pqc_handbook]
tags: [standards-and-protocols, ietf, signatures]
---

On 6 November 2026 the Internet Engineering Task Force (IETF) published [RFC 10073](https://www.rfc-editor.org/info/rfc10073), which defines composite ML-DSA for X.509 public-key infrastructure, as a Proposed Standard. It gives certification authorities and the relying parties that check their certificates a standard way to combine ML-DSA with a classical signature, for organisations whose applicable authority recommends hybrid signatures.

{/* truncate */}

## What the IETF published

RFC 10073, summarised on the handbook's [RFC 10073 page](/standards/modules-protocols-certificates/rfc-10073/), defines composite ML-DSA: a post-quantum/traditional hybrid signature scheme that pairs ML-DSA, from [FIPS 204](/standards/post-quantum/fips-204/), with RSASSA-PKCS1-v1_5, RSASSA-PSS, ECDSA, Ed25519 or Ed448 under a single algorithm identifier for X.509 and PKIX structures. A composite signature is accepted only if every component signature verifies, so an operator gains protection against a flaw in ML-DSA or its implementation while keeping a classical algorithm in place. The RFC says its combinations are tailored to meet regulatory guidelines in certain regions.

It builds on RFC 9881, the Proposed Standard of October 2025 for ML-DSA keys and signatures on their own in X.509, so certificate formats now exist for both choices. Like other RFCs, it is a voluntary specification and obliges no one to use hybrid signatures, and the RFC's note on FIPS approval says it is not authoritative and has not been endorsed by NIST.

## Where authorities stand

The RFC does not settle whether hybrid signatures are needed, because authorities differ. NIST IR 8547, finalised on 27 October 2026, says existing NIST standards and guidelines accommodate dual or composite signatures provided at least one component is NIST-approved, and that hybrids are typically temporary and lead to a second transition. Germany's BSI TR-02102-1 recommends post-quantum signatures only together with classical ones, with exceptions for hash-based schemes, and France's ANSSI strongly stresses hybridation where post-quantum protection is needed, while the US NSA's CNSA 2.0 does not require hybrid products for national security systems. The handbook's [national algorithm positions](/standards/national-algorithm-positions/) set these out side by side.

## What it means for your plan

This is a signatures development and does not change key establishment. Its effect follows who must verify a signature, so the parties to plan around are the certification authorities, hardware security modules, trust stores and relying parties that would all need to understand the composite format before a certificate signed with it can be used. [Why post-quantum signatures affect more than the signer](/learn/explainers/signature-dependencies/) shows how to list them.

If you run a private PKI, the [PKI and certificates card](/technology-options/pki/) sets out what to ask: which certificate formats your CA software and HSMs support and from which release, whether each relying party verifies a test chain, and whether revocation services can sign with the new algorithm. Choose between composite and ML-DSA alone by the authority whose advice you follow, and record that authority with the choice. Composite signatures matter most where signatures must be trusted for a long time or checked by devices that are hard to update, so record any such verifier on its own row.

## Sources

- IETF, Composite Module-Lattice-Based Digital Signature Algorithm (ML-DSA) for Use in X.509 Public Key Infrastructure, RFC 10073, Proposed Standard, published 6 November 2026. [RFC 10073 information page (HTML)](https://www.rfc-editor.org/info/rfc10073), [Datatracker record (HTML)](https://datatracker.ietf.org/doc/rfc10073/)
- IETF, Algorithm Identifiers for ML-DSA in X.509, RFC 9881, Proposed Standard, October 2025. [RFC 9881 information page (HTML)](https://www.rfc-editor.org/info/rfc9881)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, final, 27 October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- BSI, Technical Guideline TR-02102-1, version 2026-01, 23 January 2026. [BSI TR-02102-1 (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TG02102/BSI-TR-02102-1.pdf)
- ANSSI, Follow-up position paper on post-quantum cryptography, December 2023. [ANSSI position paper (PDF)](https://messervices.cyber.gouv.fr/documents-guides/follow_up_position_paper_on_post_quantum_cryptography.pdf)
- NSA, CNSA 2.0 and Quantum Computing FAQ, version 2.2, October 2026. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)

## Related pages

- [Hybrid cryptography](/learn/hybrid/)
- [RFC 9881](/standards/modules-protocols-certificates/rfc-9881/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
