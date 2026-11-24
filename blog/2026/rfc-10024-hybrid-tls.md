---
title: IETF publishes hybrid ML-KEM groups for TLS 1.3
description: RFC 10024 standardises X25519MLKEM768 and two other hybrid ML-KEM key agreement groups for TLS 1.3, the first post-quantum TLS mechanisms at Proposed Standard.
date: 2026-08-10
authors: [pqc_handbook]
tags: [standards-and-protocols, ietf, key-establishment]
---

On 10 August 2026 the Internet Engineering Task Force (IETF) published [RFC 10024](https://www.rfc-editor.org/info/rfc10024), Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, as a Proposed Standard. It defines three hybrid groups that combine ML-KEM with elliptic-curve Diffie-Hellman, giving anyone who runs or buys TLS a stable, standards-track name to specify for post-quantum key exchange.

{/* truncate */}

## What the IETF published

RFC 10024, summarised on the handbook's [RFC 10024 page](/standards/modules-protocols-certificates/rfc-10024/), defines X25519MLKEM768, SecP256r1MLKEM768 and SecP384r1MLKEM1024. Each group runs ML-KEM, the key-encapsulation mechanism NIST standardised in [FIPS 203](/standards/post-quantum/fips-203/) on 13 August 2024, alongside a classical elliptic-curve exchange, and assigns the code points that TLS 1.3 clients and servers use to negotiate it. The design follows RFC 9954, Hybrid Key Exchange in TLS 1.3, which the IETF published as an Informational RFC in July 2026.

Like other RFCs, it is a voluntary technical specification rather than an obligation: it binds no organisation by itself, but it is what interoperable TLS implementations build to, and other authorities' guidance and procurement rules can now point to a published standard instead of an Internet-Draft.

## Key establishment only

The RFC changes how a TLS 1.3 handshake agrees its session keys, which is the part of the connection exposed to harvest-now, decrypt-later collection. It does not change the certificates that authenticate the server, so moving a service to a hybrid group leaves its signatures classical, and that second job runs on a different clock that depends on certification authorities and relying parties.

The groups are defined for TLS 1.3 only. RFC 9851, published in July 2026, puts TLS 1.2 in feature freeze and says the IETF will not specify post-quantum cryptography for it, so an endpoint still limited to TLS 1.2 has to move to TLS 1.3 before it can use any of these groups.

Publishing hybrid groups does not settle whether hybrid or ML-KEM alone is preferable, because authorities take different positions. NIST's November 2024 initial public draft of IR 8547, for example, describes hybrid solutions as typically temporary measures that lead to a second transition to post-quantum-only tools, and leaves the decision to each application; the [hybrid cryptography lesson](/learn/hybrid/) sets the authorities' positions side by side.

## What it means for your plan

If your organisation runs its own web servers, load balancers or gateways, the [TLS and web services card](/technology-options/tls/) sets out what to check: which of these groups each product supports and from which release, whether they are on by default, and what connections actually negotiate when checked from the client side rather than from the configuration. Test middleboxes and older servers in the path, because a hybrid key share makes the TLS ClientHello larger and some devices fail or strip it.

If suppliers run TLS for you, ask them which RFC 10024 groups they offer and when, and record the answer against the key-establishment row in your [register](/templates/records/register/) rather than as a general statement of post-quantum readiness.

## Sources

- IETF, Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, RFC 10024, Proposed Standard, published 10 August 2026. [RFC 10024 information page (HTML)](https://www.rfc-editor.org/info/rfc10024), [Datatracker record (HTML)](https://datatracker.ietf.org/doc/rfc10024/)
- IETF, Hybrid Key Exchange in TLS 1.3, RFC 9954, Informational, July 2026. [RFC 9954 information page (HTML)](https://www.rfc-editor.org/info/rfc9954)
- IETF, TLS 1.2 is in Feature Freeze, RFC 9851, Proposed Standard, July 2026. [RFC 9851 information page (HTML)](https://www.rfc-editor.org/info/rfc9851)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547 initial public draft, 12 November 2024. [Draft (PDF)](https://doi.org/10.6028/NIST.IR.8547.ipd)

## Related pages

- [TLS explainer](/learn/explainers/tls/)
- [Forward secrecy and recorded traffic](/learn/explainers/forward-secrecy/)
- [Modules, protocols, and certificates](/standards/modules-protocols-certificates/)
