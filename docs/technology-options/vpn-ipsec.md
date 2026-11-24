---
title: VPNs and IPsec
search_title: Post-quantum VPNs and IPsec
sidebar_label: VPNs and IPsec
displayed_sidebar: technologyOptionsSidebar
description: What a good post-quantum site-to-site or remote-access VPN looks like, which IKEv2 mechanisms are published or draft, and why both ends and the path matter.
---

## What it is

Virtual private networks join sites to each other and remote users to the network. Most standards-based VPNs use IPsec, with Internet Key Exchange version 2 (IKEv2) setting up the keys. The job that matters first is **key establishment**: traffic recorded today can be decrypted later if the key exchange is broken. Gateways and users also authenticate with certificates or keys, a signatures job: the certificates are covered on [PKI and certificates](/technology-options/pki/), and the IKEv2 authentication method below. VPNs built on TLS follow [TLS and web services](/technology-options/tls/); proprietary VPN protocols have no standard path, so ask the supplier in writing.

## Post-quantum options and status

| Part | Mechanism | Status |
| --- | --- | --- |
| Adding a post-quantum exchange to IKEv2 | Multiple key exchanges in IKEv2, [RFC 9370](https://www.rfc-editor.org/info/rfc9370) | Proposed Standard, May 2023 |
| Mixing a post-quantum preshared key into IKEv2 | Mixing Preshared Keys in IKEv2 for Post-quantum Security, [RFC 8784](https://www.rfc-editor.org/info/rfc8784) | Proposed Standard, June 2020 |
| Extending the preshared key to the IKEv2 exchanges | Mixing Preshared Keys in the IKE_INTERMEDIATE and CREATE_CHILD_SA Exchanges of IKEv2, [RFC 9867](https://www.rfc-editor.org/info/rfc9867) | Proposed Standard, November 2025 |
| ML-KEM in IKEv2 | draft-ietf-ipsecme-ikev2-mlkem | Internet-Draft in the RFC Editor queue, intended as a Proposed Standard |
| Post-quantum authentication in IKEv2 | ML-DSA and SLH-DSA signatures, draft-ietf-ipsecme-ikev2-pqc-auth | Internet-Draft in the RFC Editor queue, intended as a Proposed Standard |
| Composite signatures in IKEv2 | draft-ietf-ipsecme-pq-hybrid-auth | Working-group Internet-Draft at an early stage |

RFC 9370 lets IKEv2 run additional key exchanges alongside the classical one, which is how a post-quantum exchange is added in hybrid form. The UK NCSC's [post-quantum whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography) (version 2.0, August 2024), for system and risk owners, gives the need to avoid IP-layer fragmentation in IKEv2 as an example of a protocol constraint that can make it difficult to drop the classical algorithm. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) says NIST expects to prioritize quantum-resistant key establishment in interactive protocols such as TLS and IKE. The authentication draft uses IKEv2's existing digital-signature method to carry ML-DSA or SLH-DSA, so gateways can authenticate with post-quantum certificates once both ends support it. Because these mechanisms are still drafts, apply the protocol-mechanisms rule on [Choosing an option](/technology-options/choosing/). France's ANSSI, in its [technical note on IPsec](/standards/national-algorithm-positions/anssi-pqc-position/) (February 2, 2026), a non-normative note for developers, administrators and security managers, recommends hybridization for both the IKEv2 key exchange and signature authentication, and explains that the post-quantum exchange travels in intermediate exchanges because IKEv2's message fragmentation (RFC 7383) cannot apply to the first messages.

RFC 8784 protects key establishment with a secret both peers already hold, configured out of band, so it suits a small number of fully controlled peers rather than remote-access clients or partners. Its key protects only the traffic keys for the tunnel, not the IKEv2 exchanges themselves, which ANSSI's note identifies as a limitation and RFC 9867 extends the key to cover. The Dutch [PQC Migration Handbook](/standards/migration-guides/dutch-pqc-handbook/) (December 2024) recommends a pre-shared key over a hybrid only where the system and its peers are fully controlled and rarely change, while ANSSI treats a pre-shared key as a temporary measure, to be followed by hybridization, and warns that a stolen key exposes every recorded session that used it.

## Who usually chooses

The VPN gateway supplier decides what the product supports; you choose what to enable. Both ends of every tunnel must agree, so a partner's or another site's gateway, and every remote-access client, is part of the decision.

## What good looks like

- Every tunnel and remote-access client is on the [register](/templates/records/register/) with its peer, and both ends support the same post-quantum key exchange before you require it.
- The post-quantum exchange is added under RFC 9370, using the draft ML-KEM method, or a supplier-specific one, only under the protocol-mechanisms rule on [Choosing an option](/technology-options/choosing/), and recorded as provisional until it is published. Between a few fully controlled sites, a preshared key under RFC 8784, or RFC 9867 where the IKEv2 exchanges also need it, is an alternative, recorded with where the key is held, how it is replaced, and, where ANSSI's position applies, the date it gives way to a hybrid.
- Each peer's negotiated key exchange is confirmed from the gateway logs, and peers that cannot follow have an owner and a date.
- Gateway certificates have their own signatures row on the [register](/templates/records/register/), with its own dates, as [PKI and certificates](/technology-options/pki/) describes.

## What to ask or test

- Which post-quantum key exchange the gateway and client support, from which release, and whether it follows RFC 9370 and the ML-KEM draft or a supplier-specific method.
- Whether gateways from different suppliers interoperate on that method.
- Whether tunnels still establish over paths that drop fragmented packets, and whether the gateway supports IKEv2 message fragmentation (RFC 7383), which carries larger exchanges and certificates.
- If you use a preshared key, whether the gateway mixes it into the IKEv2 exchanges as well (RFC 9867) or only into the tunnel's traffic keys (RFC 8784).
- What the tunnel negotiated, from the gateway's logs, after cutover.

## Traps

- **One end is not enough.** A post-quantum gateway talking to an older partner gateway falls back to classical key exchange.
- **Draft code points.** Implementations built on an earlier draft may not interoperate with the final specification.
- **Remote-access clients.** Clients on unmanaged devices update on their own schedule; plan for a mixed period.
- **Authentication lags.** Migrating the key exchange leaves gateway certificates classical; track them separately.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Register](/templates/records/register/) | A key-establishment row for each gateway, naming its peers, with the gateway supplier's answer and judgment; gateway certificates have their own signatures row; a row for each peer still on classical key exchange, with an owner and the date it moves; and a `next review` to revisit the draft mechanism when it is published |
| [Change record](/templates/records/change-record/) | The negotiated key exchange as the deployed-state check and, if a draft mechanism is used, "provisional: Internet-Draft" in `option`; for a preshared key, where the key is held and how it is replaced |

## Example

An insufficient record is "The VPN is quantum safe; the supplier says so."

A decision-ready record names the gateway model and release, the key exchange negotiated with each peer as seen in the gateway log, the peers still on classical key exchange with an owner and date, and whether the mechanism is RFC 9370 with a draft ML-KEM method, marked provisional.

## Sources

- IETF, Multiple Key Exchanges in the Internet Key Exchange Protocol Version 2 (IKEv2), RFC 9370, May 2023. [RFC 9370](https://www.rfc-editor.org/info/rfc9370)
- IETF, Mixing Preshared Keys in the Internet Key Exchange Protocol Version 2 (IKEv2) for Post-quantum Security, RFC 8784, June 2020. [RFC 8784](https://www.rfc-editor.org/info/rfc8784)
- IETF, Mixing Preshared Keys in the IKE_INTERMEDIATE and CREATE_CHILD_SA Exchanges of the Internet Key Exchange Protocol Version 2 (IKEv2) for Post-Quantum Security, RFC 9867, November 2025. [RFC 9867](https://www.rfc-editor.org/info/rfc9867)
- IETF, Internet Key Exchange Protocol Version 2 (IKEv2) Message Fragmentation, RFC 7383, November 2014. [RFC 7383](https://www.rfc-editor.org/info/rfc7383)
- IETF Datatracker, draft-ietf-ipsecme-ikev2-mlkem. [draft-ietf-ipsecme-ikev2-mlkem](https://datatracker.ietf.org/doc/draft-ietf-ipsecme-ikev2-mlkem/)
- IETF Datatracker, Signature Authentication in IKEv2 using PQC, draft-ietf-ipsecme-ikev2-pqc-auth-12, and Use of Composite Signatures in IKEv2, draft-ietf-ipsecme-pq-hybrid-auth-01. [draft-ietf-ipsecme-ikev2-pqc-auth](https://datatracker.ietf.org/doc/draft-ietf-ipsecme-ikev2-pqc-auth/) / [draft-ietf-ipsecme-pq-hybrid-auth](https://datatracker.ietf.org/doc/draft-ietf-ipsecme-pq-hybrid-auth/)
- ANSSI, Transition post-quantique d'IPsec, ANSSI-FT-117, version 1.0, February 2, 2026 (§3, §4, annex A). [ANSSI IPsec note (PDF)](https://messervices.cyber.gouv.fr/documents-guides/transition_post_quantique_ipsec.pdf)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Choosing an option](/technology-options/choosing/)
- [TLS and web services](/technology-options/tls/)
- [Modules, protocols, and certificates](/standards/modules-protocols-certificates/)
- [Make and verify one change](/plan/program/implementation/)
