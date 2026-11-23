---
title: Wi-Fi and network access control
search_title: Post-quantum Wi-Fi and network access control
sidebar_label: Wi-Fi and network access
displayed_sidebar: technologyOptionsSidebar
description: What post-quantum readiness looks like for enterprise Wi-Fi and wired 802.1X with EAP-TLS, why it follows TLS and PKI, and what to ask equipment suppliers.
---

## What it is

Network access control decides which devices may join a wired or wireless network. Enterprise Wi-Fi and wired 802.1X commonly use the Extensible Authentication Protocol with TLS (EAP-TLS), where the authentication server, and normally the device, prove themselves with certificates. It does two jobs:

- **key establishment** in the TLS handshake inside EAP, whose derived keys protect the traffic, so a recording of it is exposed to [harvest-now, decrypt-later](/templates/reference/glossary/#harvest-now-decrypt-later);
- **signatures** in the device and server certificates.

## Post-quantum options and status

Status as checked on 21 November 2026.

| Part | Position |
| --- | --- |
| EAP-TLS with TLS 1.3 | [RFC 9190](https://www.rfc-editor.org/info/rfc9190) (Proposed Standard, February 2022) uses a TLS 1.3 handshake, normally with certificate-based mutual authentication (the server has to present a certificate and the device should), so its key exchange follows [TLS and web services](/technology-options/tls/) where the device and server support the post-quantum groups |
| Certificates | Follow [PKI and certificates](/technology-options/pki/); most deployments use a private certification authority |
| Personal or pre-shared Wi-Fi modes | Outside this card, which covers 802.1X and EAP-TLS; their key exchange is defined in IEEE and Wi-Fi industry specifications, so ask the equipment supplier in writing whether a post-quantum version exists and when it ships |

## Who usually chooses

The suppliers of the authentication server and the device operating systems decide which TLS groups and certificate algorithms they support; you run the private certification authority that issues the certificates.

## What good looks like

- Every device class that joins the network is on the register, including printers, phones, and embedded devices, with the EAP method it uses.
- The authentication server and device supplicants support the same post-quantum TLS groups before you prefer them.
- Certificates move with the private PKI, verifiers first, in both directions: the server accepts the new algorithm before devices are issued it, and devices accept it before the server's certificate changes.

## What to ask or test

- Which post-quantum TLS groups and certificate algorithms the authentication server and each device operating system support in EAP-TLS, and from which release.
- Whether larger certificates and handshakes still complete within EAP's limits for every device class.
- What happens when a device cannot use the new group: a classical fallback you can see, or a failed connection.

## Traps

- **Embedded and older devices** that cannot update their supplicant hold the network to classical key exchange or get locked out.
- **EAP-TLS over TLS 1.2.** Estates still on TLS 1.2 cannot use the TLS 1.3 hybrid groups; moving to EAP-TLS 1.3 comes first.
- **Two jobs, one handshake**: moving the key exchange leaves device certificates classical; track them on the PKI's signatures row.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Register](/templates/records/register/) | A key-establishment row for the EAP-TLS handshake of the authentication service and each device class, with the EAP method as a labelled value in `protected by today` (for example "EAP-TLS 1.3: X25519"), the private certification authority named, and supplier answers with their judgement; certificates stay on the PKI's signatures row; and a row for each device that cannot follow, with an owner, the replacement date, and a `next review` |
| [Change record](/templates/records/change-record/) | The negotiated group as the deployed-state check |

## Example

An insufficient record is "Wi-Fi uses WPA3, so it is fine."

A decision-ready record lists device classes with their EAP method and supplicant release, the TLS group each negotiates in a test, the devices that cannot follow with an owner and replacement date, and the link to the private CA's migration line.

## Sources

- IETF, EAP-TLS 1.3: Using the Extensible Authentication Protocol with TLS 1.3, RFC 9190, February 2022. [RFC 9190](https://www.rfc-editor.org/info/rfc9190)
- IETF, Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, RFC 10024, August 2026. [RFC 10024](https://www.rfc-editor.org/info/rfc10024)

## Related pages

- [TLS and web services](/technology-options/tls/)
- [PKI and certificates](/technology-options/pki/)
- [Inventory the cryptography](/plan/programme/inventory/)
- [Work with suppliers](/plan/programme/suppliers/)
