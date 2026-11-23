---
title: VPNs and IPsec
search_title: Post-quantum VPNs and IPsec
sidebar_label: VPNs and IPsec
displayed_sidebar: technologyOptionsSidebar
description: What a good post-quantum site-to-site or remote-access VPN looks like, which IKEv2 mechanisms are published or draft, and why both ends and the path matter.
---

## What it is

Virtual private networks join sites to each other and remote users to the network. Most standards-based VPNs use IPsec, with Internet Key Exchange version 2 (IKEv2) setting up the keys. The job that matters first is **key establishment**: traffic recorded today can be decrypted later if the key exchange is broken. Gateways and users also authenticate with certificates or keys, a signatures job covered on [PKI and certificates](/technology-options/pki/). VPNs built on TLS follow [TLS and web services](/technology-options/tls/); proprietary VPN protocols have no standard path, so ask the supplier in writing.

## Post-quantum options and status

Status as checked on 21 November 2026.

| Part | Mechanism | Status |
| --- | --- | --- |
| Adding a post-quantum exchange to IKEv2 | Multiple key exchanges in IKEv2, [RFC 9370](https://www.rfc-editor.org/info/rfc9370) | Proposed Standard, May 2023 |
| ML-KEM in IKEv2 | draft-ietf-ipsecme-ikev2-mlkem | Internet-Draft in the RFC Editor queue, intended as a Proposed Standard |

RFC 9370 lets IKEv2 run additional key exchanges alongside the classical one, which is how a post-quantum exchange is added in hybrid form. The UK NCSC's [post-quantum whitepaper](/standards/migration-guides/ncsc-migration-timelines/) (version 2.0, August 2024), for system and risk owners, gives the need to avoid IP-layer fragmentation in IKEv2 as an example of a protocol constraint that can make hybrid necessary. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) says NIST expects to prioritise quantum-resistant key establishment in interactive protocols such as TLS and IKE. Because the ML-KEM mechanism is still a draft, apply the protocol-mechanisms rule on [Choosing an option](/technology-options/choosing/).

## Who usually chooses

The VPN gateway supplier decides what the product supports; you choose what to enable. Both ends of every tunnel must agree, so a partner's or another site's gateway, and every remote-access client, is part of the decision.

## What good looks like

- Every tunnel and remote-access client is on the [inventory](/resources/records/inventory/) with its peer, and both ends support the same post-quantum key exchange before you require it.
- The post-quantum exchange is added under RFC 9370, using the draft ML-KEM method, or a supplier-specific one, only under the protocol-mechanisms rule on [Choosing an option](/technology-options/choosing/), and recorded as provisional until it is published.
- Each peer's negotiated key exchange is confirmed from the gateway logs, and peers that cannot follow have an owner and a date.
- Gateway certificates have their own signatures line on the [migration plan](/resources/records/migration-plan/), with its own milestone, as [PKI and certificates](/technology-options/pki/) describes.

## What to ask or test

- Which post-quantum key exchange the gateway and client support, from which release, and whether it follows RFC 9370 and the ML-KEM draft or a supplier-specific method.
- Whether gateways from different suppliers interoperate on that method.
- Whether tunnels still establish over paths that drop fragmented packets.
- What the tunnel negotiated, from the gateway's logs, after cutover.

## Traps

- **One end is not enough.** A post-quantum gateway talking to an older partner gateway falls back to classical key exchange.
- **Draft code points.** Implementations built on an earlier draft may not interoperate with the final specification.
- **Remote-access clients.** Clients on unmanaged devices update on their own schedule; plan for a mixed period.
- **Authentication lags.** Migrating the key exchange leaves gateway certificates classical; track them separately.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Inventory](/resources/records/inventory/) | A row for each gateway, with the key-establishment cell and the peers in `dependencies` |
| [Vendor response log](/resources/records/vendor-response-log/) | The gateway supplier's answer |
| [Migration plan](/resources/records/migration-plan/) | A key-establishment line; gateway certificates have their own signatures line |
| [Change record](/resources/records/change-record/) | The negotiated key exchange as the deployed-state check and, if a draft mechanism is used, "provisional: Internet-Draft" in `option` |
| [Review log](/resources/records/review-log/) | Peers still on classical key exchange, as exceptions with an owner and the date they move in `item`, and an item to revisit the draft mechanism when it is published |

## Example

An insufficient record is "The VPN is quantum safe; the supplier says so."

A decision-ready record names the gateway model and release, the key exchange negotiated with each peer as seen in the gateway log, the peers still on classical key exchange with an owner and date, and whether the mechanism is RFC 9370 with a draft ML-KEM method, marked provisional.

## Sources

- IETF, Multiple Key Exchanges in the Internet Key Exchange Protocol Version 2 (IKEv2), RFC 9370, May 2023. [RFC 9370](https://www.rfc-editor.org/info/rfc9370)
- IETF Datatracker, draft-ietf-ipsecme-ikev2-mlkem, checked 21 November 2026. [draft-ietf-ipsecme-ikev2-mlkem](https://datatracker.ietf.org/doc/draft-ietf-ipsecme-ikev2-mlkem/)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Choosing an option](/technology-options/choosing/)
- [TLS and web services](/technology-options/tls/)
- [Modules, protocols, and certificates](/standards/modules-protocols-certificates/)
- [Make and verify one change](/migration-practices/implementation/)
