---
title: ANSSI sets hybrid advice for TLS, IPsec and SSH
description: ANSSI's 2026 technical notes apply its hybrid position to TLS 1.3, IPsec and SSHv2, and treat pre-shared keys as a temporary measure.
date: 2026-02-02
authors: [pqc_handbook]
tags: [authority-updates, france, key-establishment, signatures]
---

On February 2, 2026, France's ANSSI published technical notes on the post-quantum transition of TLS 1.3, IPsec and SSHv2, two weeks after a note on crypto-agility. The notes are not normative, but they apply ANSSI's [hybrid position](/standards/national-algorithm-positions/anssi-pqc-position/) protocol by protocol, for key exchange and authentication, and treat pre-shared keys as a temporary measure, which matters to anyone running VPNs, SSH or TLS to French recommendations.

{/* truncate */}

## What ANSSI published

The three notes, ANSSI-FT-115 for TLS 1.3, FT-116 for SSHv2 and FT-117 for IPsec, are written in French for developers, administrators, information-security managers and IT directors, and say that, unless a regulation provides otherwise, their recommendations are not normative. Each describes the state of the protocol's transition and recommends hybridization, which ANSSI calls its preferred solution, for both the key exchange and signature-based authentication. Each treats moving confidentiality as more urgent than authentication, because recorded traffic can be decrypted later.

The notes allow a pre-shared key as an interim route where it is carefully managed, but only as a temporary measure, because compromising the key exposes every session that used it. TLS 1.3 can already use an external pre-shared key; for IPsec the note explains that [RFC 8784](https://www.rfc-editor.org/info/rfc8784) protects only the traffic keys, not the IKEv2 exchanges, which [RFC 9867](https://www.rfc-editor.org/info/rfc9867) extends to cover; SSH has no pre-shared-key mechanism, so hybridization is its only route. The crypto-agility note, in English for developers and system architects, recommends designing for full algorithm replacement, sizing for the worst case, never negotiating down to a deprecated algorithm, and protecting updates with the most trusted signatures and against replay.

The notes describe the hybrid key exchanges for TLS and SSH as still in Internet-Drafts, and say no standard yet exists for hybrid authentication in any of the three protocols, so for now hybrid authentication is something to plan for rather than deploy.

## What it means for your plan

Where ANSSI is one of the authorities that apply to you, its position is now explicit for each protocol: plan for hybrid key exchange in [TLS](/technology-options/tls/), [SSH](/technology-options/ssh/) and IPsec and, once standards exist, hybrid authentication, and record any pre-shared key as an interim measure with a date to replace it. For [VPNs and IPsec](/technology-options/vpn-ipsec/), ask whether a pre-shared key protects the IKEv2 exchanges or only the traffic keys, and apply the hybrid rule on [Choosing an option](/technology-options/choosing/).

For long-lived devices, the crypto-agility note's advice on update signing adds to the questions on [Firmware and secure boot](/technology-options/firmware-secure-boot/).

## Sources

- ANSSI, Transition post-quantique de TLS 1.3, ANSSI-FT-115, version 1.0, February 2, 2026. [ANSSI TLS 1.3 note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_tls_1_3.pdf)
- ANSSI, Transition post-quantique d'IPsec, ANSSI-FT-117, version 1.0, February 2, 2026. [ANSSI IPsec note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_ipsec.pdf)
- ANSSI, Transition post-quantique de SSHv2, ANSSI-FT-116, version 1.0, February 2, 2026. [ANSSI SSHv2 note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_ssh_v2.pdf)
- ANSSI, ANSSI views on crypto agility, January 19, 2026. [ANSSI crypto-agility note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/ANSSI-views-on-crypto-agility.pdf)

## Related pages

- [Hybrid cryptography](/learn/hybrid/)
- [Keep the ability to change again](/plan/program/changing-algorithms-again/)
