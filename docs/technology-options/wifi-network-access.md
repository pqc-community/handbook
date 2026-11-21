---
title: Wi-Fi and network access control
sidebar_label: Wi-Fi and network access
displayed_sidebar: technologyOptionsSidebar
description: What post-quantum readiness looks like for enterprise Wi-Fi and wired network access using 802.1X and EAP-TLS, why it follows TLS and PKI, and what to ask equipment suppliers.
---

## What it is

Network access control decides which devices may join a wired or wireless network. Enterprise Wi-Fi and wired 802.1X commonly use the Extensible Authentication Protocol with TLS (EAP-TLS), where the device and an authentication server prove themselves with certificates. It does two jobs:

- **key establishment** in the TLS handshake inside EAP;
- **signatures** in the device and server certificates.

## Post-quantum options and status

Status as checked on 21 November 2026.

| Part | Position |
| --- | --- |
| EAP-TLS with TLS 1.3 | [RFC 9190](https://www.rfc-editor.org/info/rfc9190) (Proposed Standard, February 2022) uses a TLS 1.3 handshake with certificate-based mutual authentication, so its key exchange follows [TLS and web services](/technology-options/tls/) where the device and server support the post-quantum groups |
| Certificates | Follow [PKI and certificates](/technology-options/pki/); most deployments use a private certification authority |
| Personal or pre-shared Wi-Fi modes, and the radio link itself | Defined by IEEE and Wi-Fi industry specifications that this handbook does not summarise; ask the equipment supplier |

## Who usually chooses

The supplier of the authentication server and the device operating systems decide which TLS groups and certificate algorithms they support; you run the private certification authority that issues the certificates.

## What good looks like

- Every device class that joins the network is on the inventory, including printers, phones, and embedded devices, with the EAP method it uses.
- The authentication server and device supplicants support the same post-quantum TLS groups before you prefer them.
- Device certificates move with the private PKI, verifiers first: the server accepts the new algorithm before devices are issued it.

## What to ask or test

- Which post-quantum TLS groups and certificate algorithms the authentication server and each device operating system support in EAP-TLS, and from which release.
- Whether larger certificates and handshakes still complete within EAP's limits for every device class.
- What happens when a device cannot use the new group: a classical fallback you can see, or a failed connection.

## Traps

- **Embedded and older devices** that cannot update their supplicant hold the network to classical key exchange or get locked out.
- **Two jobs, one handshake**: moving the key exchange leaves device certificates classical; track them on the PKI line.

## Record it fills

An [inventory](/resources/inventory-record/) row for the authentication service and each device class, with the private certification authority in `dependencies`; the PKI's signatures line on the [migration plan](/resources/migration-plan/); supplier answers in the [vendor response log](/resources/vendor-response-log/).

## Example

An insufficient record is "Wi-Fi uses WPA3, so it is fine."

A decision-ready record lists device classes with their EAP method and supplicant release, the TLS group each negotiates in a test, the devices that cannot follow with an owner and replacement date, and the link to the private CA's migration line.

## Sources

- IETF, EAP-TLS 1.3: Using the Extensible Authentication Protocol with TLS 1.3, RFC 9190, February 2022. [RFC 9190](https://www.rfc-editor.org/info/rfc9190)

## Related pages

- [TLS and web services](/technology-options/tls/)
- [PKI and certificates](/technology-options/pki/)
- [Inventory the cryptography](/migration-practices/inventory/)
- [Work with suppliers](/migration-practices/suppliers/)
