---
title: TLS and web services
sidebar_label: TLS and web services
displayed_sidebar: technologyOptionsSidebar
description: What a good post-quantum TLS deployment looks like for web servers, APIs, load balancers and browsers, which mechanisms are published, and the traps that leave connections classical.
---

## What it is

Transport Layer Security (TLS) protects web traffic, APIs, load balancers, content delivery networks, and most connections to cloud and SaaS services. It does two jobs:

- **key establishment** in the handshake, which protects confidentiality and is exposed to [harvest-now, decrypt-later](/resources/reference/glossary/#harvest-now-decrypt-later);
- **signatures** in the server's certificate chain, which authenticate the server; that job runs on a different clock and is covered on [PKI and certificates](/technology-options/pki/).

## Post-quantum options and status

Status as checked on 21 November 2026.

| Part | Mechanism | Status |
| --- | --- | --- |
| Key exchange, hybrid | X25519MLKEM768, SecP256r1MLKEM768, SecP384r1MLKEM1024, defined in [RFC 10024](/standards/modules-protocols-identity/rfc-10024/) | Proposed Standard, August 2026 |
| Key exchange, ML-KEM alone | draft-ietf-tls-mlkem | Internet-Draft in the RFC Editor queue, intended as Informational |
| Server authentication | Post-quantum certificates in TLS | Not yet standardised for TLS |

The UK NCSC's [TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data) (version 1.2, 15 October 2026), written for system administrators who configure TLS, recommends hybrid key exchange as an interim measure and considers ML-KEM on its own acceptable. It notes that the IETF has so far standardised post-quantum algorithms for key exchange in TLS but not for authentication, and that organisations running private PKIs may be able to adopt post-quantum authentication sooner than services relying on the public Web PKI. For US federal systems, NIST has announced that it will revise its TLS guidelines, [SP 800-52](/standards/modules-protocols-identity/sp-800-52/), to add support for post-quantum algorithms (planning note of 19 November 2026). Which form to use follows the hybrid rule on [Choosing an option](/technology-options/choosing/), and drafts follow its protocol-mechanisms rule.

## Who usually chooses

- **Browsers, operating systems, CDNs, and SaaS providers:** the supplier. Your job is to keep them updated and check what they negotiate.
- **Your own servers, load balancers, and gateways:** you, within what the product supports. Both ends of a connection must support the same group, so check the clients and partners that connect to you.

## What good looks like

- Every TLS endpoint you run is on the [inventory](/resources/records/inventory/) with the post-quantum groups its software supports, and the clients and partners that connect to it.
- A hybrid group from RFC 10024, or ML-KEM alone recorded as provisional while draft-ietf-tls-mlkem is a draft, chosen by the hybrid and protocol-mechanisms rules on [Choosing an option](/technology-options/choosing/), is offered and preferred wherever the product supports it, and what connections actually negotiate is checked from the client side.
- Proxies, load balancers, and CDNs that end the TLS connection are recorded with their own support, because each one starts a new handshake.
- Certificates have their own signatures line on the [migration plan](/resources/records/migration-plan/), with its own milestone, as [PKI and certificates](/technology-options/pki/) describes.

## What to ask or test

- Which post-quantum groups the product supports, from which release, and whether they are on by default.
- What a connection actually negotiates, checked from the client side or in server logs, not from the configuration.
- Whether load balancers, inspection proxies, and firewalls in the path pass the larger handshake or strip it.
- What happens when an older client cannot use the new group: a clean classical fallback you can see, or a failure.

## Traps

- **Configured is not negotiated.** A server can offer a hybrid group while every real client still uses X25519.
- **Forward secrecy does not help.** It protects past sessions against a stolen server key, not against a quantum computer that breaks the key exchange; see [Forward secrecy and recorded traffic](/learn/explainers/forward-secrecy/).
- **Two jobs, one connection.** Migrating the key exchange leaves the certificate's signature classical; record the two separately.
- **Middleboxes.** A TLS-inspecting proxy re-terminates the connection, so the outer client's post-quantum handshake ends at the proxy.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Inventory](/resources/records/inventory/) | The key-establishment cell, updated as the change reaches each environment, for example "in transit: X25519MLKEM768 in staging" |
| [Vendor response log](/resources/records/vendor-response-log/) | The supplier's answer, where a supplier controls the endpoint |
| [Migration plan](/resources/records/migration-plan/) | A key-establishment line; certificates have their own signatures line |
| [Change record](/resources/records/change-record/) | The option, the authority, the client-side check as the deployed-state check, and a fallback to classical-only key establishment as a rollback trigger |

## Example

An insufficient record is "TLS is configured for hybrid key exchange."

A decision-ready record, from [Protect this first](/resources/examples/protect-this-first/): the supplier's letter, judged `complete`, names hybrid X25519MLKEM768 for TLS connections to the hosted design workspace in Workspace 4.2. The staging pilot passed on 21 October 2026, checked from the test client's handshake log and confirmed by the supplier's connection log; production rollout is pending, so the change is not closed. The archive's stored files are a separate question, covered on [Backups, archives and storage](/technology-options/stored-data/).

## Sources

- IETF, Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, RFC 10024, August 2026. [RFC 10024](https://www.rfc-editor.org/info/rfc10024)
- IETF Datatracker, draft-ietf-tls-mlkem, checked 21 November 2026. [draft-ietf-tls-mlkem](https://datatracker.ietf.org/doc/draft-ietf-tls-mlkem/)
- UK National Cyber Security Centre, Using TLS to protect data, version 1.2, published 15 October 2026. [NCSC TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data)
- NIST, Guidelines for the Selection, Configuration, and Use of Transport Layer Security (TLS) Implementations, SP 800-52 Rev. 2, August 2019, planning note of 19 November 2026. [SP 800-52 Rev. 2](https://csrc.nist.gov/pubs/sp/800/52/r2/final)

## Related pages

- [What changes in a TLS connection](/learn/explainers/tls/)
- [PKI and certificates](/technology-options/pki/)
- [Cloud and SaaS](/technology-options/cloud-saas/)
- [Make and verify one change](/migration-practices/implementation/)
