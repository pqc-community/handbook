---
title: Kerberos and directory sign-in
sidebar_label: Kerberos and directory sign-in
displayed_sidebar: technologyOptionsSidebar
description: Where Kerberos and directory-based sign-in depend on public-key cryptography and where they do not, why smart-card and certificate logon are the part to plan, and what to ask suppliers.
---

## What it is

Kerberos is a sign-in protocol used by many enterprise directory services. Its core exchanges use **symmetric** cryptography: tickets are protected with shared keys derived from passwords or long-term secrets. Public-key cryptography enters in two places:

- **certificate and smart-card logon**, using Public Key Cryptography for Initial Authentication in Kerberos (PKINIT), which does **key establishment** and **signatures**;
- **directory connections** protected by TLS, such as LDAP over TLS, which follow [TLS and web services](/technology-options/tls/).

## Post-quantum options and status

Status as checked on 21 November 2026.

| Part | Position |
| --- | --- |
| Core Kerberos encryption | Symmetric, for example AES with HMAC-SHA2 ([RFC 8009](https://www.rfc-editor.org/info/rfc8009), Informational, October 2016). The UK NCSC's [post-quantum whitepaper](/standards/migration-guides/uk-ncsc-pqc-guidance/) (version 2.0, August 2024), for system and risk owners, says existing symmetric algorithms with at least 128-bit keys can continue to be used, while [CNSA 2.0](/standards/national-algorithm-positions/cnsa-2-0/) names AES with 256-bit keys for US national security systems; check which applies under [Choosing an option](/technology-options/choosing/) |
| PKINIT | [RFC 4556](https://www.rfc-editor.org/info/rfc4556) (Proposed Standard, June 2006) defines Diffie-Hellman and public-key-encryption methods for delivering the reply key, with certificates for authentication. It predates the post-quantum standards and defines no post-quantum method, so ask the supplier in writing for its post-quantum plan |
| Certificates for smart-card logon | Follow [PKI and certificates](/technology-options/pki/) and [Identity and sign-in](/technology-options/identity/) |

## Who usually chooses

The directory and operating-system supplier decides what the domain controllers and clients support; you run the certification authority that issues logon certificates, and you choose the encryption types allowed.

## What good looks like

- An inventory that separates password-based Kerberos (symmetric) from certificate and smart-card logon (public-key).
- Older, weaker encryption types removed in favour of AES, which is good practice regardless of post-quantum work.
- A written supplier answer on post-quantum PKINIT and certificate support, and a requirement in the next renewal.
- Smart cards and readers tracked with their replacement cycle, as on [Identity and sign-in](/technology-options/identity/).

## What to ask or test

- Whether certificate or smart-card logon is used, and for which users and systems.
- Which encryption types domain controllers and clients allow, and whether older types can be removed.
- The supplier's written plan for post-quantum PKINIT and logon certificates, naming the release that delivers it.
- Whether directory connections use TLS, and what they negotiate.

## Traps

- **Assuming all of Kerberos is affected**, or that none of it is; it depends on whether certificate logon is used.
- **Hardware tokens** have long replacement cycles; plan them early.
- **Trust between directories** and with partners can tie your timing to theirs.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Inventory](/resources/inventory-record/) | A row for the directory service, with labelled values in its algorithm cells, for example key establishment "password logon: not applicable (symmetric); certificate logon: Diffie-Hellman; directory connections: see TLS", and the issuing CA in `dependencies` |
| [Vendor response log](/resources/vendor-response-log/) | The supplier's answer |
| [Migration plan](/resources/migration-plan/) | For certificate logon, a key-establishment line and a signatures line |

## Example

An insufficient record is "Kerberos is symmetric, so we can ignore it."

A decision-ready record notes that password-based Kerberos uses AES encryption types only, that smart-card logon uses PKINIT with certificates from the internal CA, the supplier's written answer on post-quantum PKINIT, and the smart-card replacement date.

## Sources

- IETF, Public Key Cryptography for Initial Authentication in Kerberos (PKINIT), RFC 4556, June 2006. [RFC 4556](https://www.rfc-editor.org/info/rfc4556)
- IETF, AES Encryption with HMAC-SHA2 for Kerberos 5, RFC 8009, October 2016. [RFC 8009](https://www.rfc-editor.org/info/rfc8009)
- National Security Agency, Commercial National Security Algorithm Suite 2.0 and Quantum Computing Frequently Asked Questions, version 2.2, October 2026. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- UK National Cyber Security Centre, Next steps in preparing for post-quantum cryptography, version 2.0, August 2024. [NCSC whitepaper](https://www.ncsc.gov.uk/paper/next-steps-in-preparing-for-post-quantum-cryptography)

## Related pages

- [Identity and sign-in](/technology-options/identity/)
- [PKI and certificates](/technology-options/pki/)
- [TLS and web services](/technology-options/tls/)
- [Work with suppliers](/migration-practices/suppliers/)
