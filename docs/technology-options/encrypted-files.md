---
title: Encrypted email and files
search_title: Post-quantum encrypted email and files
sidebar_label: Encrypted email and files
displayed_sidebar: technologyOptionsSidebar
description: Post-quantum options for encrypted email and files sent to named recipients, which formats are published, and what to do about messages already sent.
---

## What it is

Encrypted email and files protect content for named recipients: S/MIME, OpenPGP, and file-encryption tools that encrypt a data key to each recipient's public key. It is a **key-establishment** job for stored data, and exposed to [harvest-now, decrypt-later](/learn/glossary/#harvest-now-decrypt-later): [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) notes that, as with other applications providing data confidentiality, email encryption is subject to it. Signing the same messages is a separate job, on [Documents and email signing](/technology-options/document-signing/).

## Post-quantum options and status

All are Proposed Standards.

| Format | Mechanism | Published |
| --- | --- | --- |
| S/MIME and other CMS-based formats | Key-encapsulation mechanisms in CMS ([RFC 9629](https://www.rfc-editor.org/info/rfc9629)); ML-KEM in CMS ([RFC 9936](https://www.rfc-editor.org/info/rfc9936)) | August 2024; March 2026 |
| OpenPGP | Post-quantum encryption and signatures ([RFC 9980](https://www.rfc-editor.org/info/rfc9980)) | June 2026 |
| Recipient certificates with ML-KEM keys | [RFC 9935](https://www.rfc-editor.org/info/rfc9935) | March 2026 |
| Proprietary file-encryption tools | Supplier's own method | Ask the supplier |

Form and drafts follow the hybrid and protocol-mechanisms rules on [Choosing an option](/technology-options/choosing/).

## Who usually chooses

The email and encryption software suppliers decide what the product supports. Recipients decide when they publish post-quantum keys, so the sender cannot move alone.

## What good looks like

- Software that implements a published mechanism (RFC 9629 with RFC 9936 for CMS-based formats, RFC 9980 for OpenPGP) or, for proprietary tools, a `complete` supplier answer naming the mechanism, and recipients who publish post-quantum keys or certificates (RFC 9935 for certificates).
- A chosen and recorded rule for recipients without a post-quantum key, rather than whatever the software does by default.
- The mechanism shown by a sample message, recorded on the register.
- The exposure of messages already sent recorded on the [register](/templates/records/register/), with the sponsor's decision.

## What to ask or test

- Which post-quantum mechanism the software uses to protect the message key, and from which release.
- Whether recipients can publish and use post-quantum keys or certificates, and what the software does when a recipient has none.
- Whether a sample message, inspected after sending, shows the new mechanism protecting its key.

## Traps

- **Messages already sent cannot be recalled.** Copies held by recipients or mail providers stay protected by the old key exchange; record that exposure rather than assuming re-encryption fixes it.
- **One classical recipient** in a group can mean the message key is also protected classically.
- **Archives and journalling** keep encrypted mail for years; they follow [Backups, archives and storage](/technology-options/backups-archives/).

## Record it fills

| Record | What it holds |
| --- | --- |
| [Register](/templates/records/register/) | A key-establishment row for the encryption service, with the value in `protected by today` labelled "stored files:", the recipient groups named, and the software suppliers' answers and judgement; for messages and files already sent, the exposure and the sponsor's decision, as [Backups, archives and storage](/technology-options/backups-archives/) describes |
| [Change record](/templates/records/change-record/) | The rule for recipients without a post-quantum key, with the mechanism a sample message showed as the deployed-state check |

## Example

An insufficient record is "Encrypted email is on the roadmap."

A decision-ready record names the email client and gateway releases, the mechanism shown by a sample message, the share of internal and external recipients with post-quantum keys, and a register entry recording that mail sent before the change stays classically protected, with the sponsor's decision.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- IETF, Using Key Encapsulation Mechanism (KEM) Algorithms in the Cryptographic Message Syntax (CMS), RFC 9629, August 2024. [RFC 9629](https://www.rfc-editor.org/info/rfc9629)
- IETF, Use of ML-KEM in the Cryptographic Message Syntax (CMS), RFC 9936, March 2026. [RFC 9936](https://www.rfc-editor.org/info/rfc9936)
- IETF, Post-Quantum Cryptography in OpenPGP, RFC 9980, June 2026. [RFC 9980](https://www.rfc-editor.org/info/rfc9980)
- IETF, Internet X.509 Public Key Infrastructure - Algorithm Identifiers for the Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM), RFC 9935, March 2026. [RFC 9935](https://www.rfc-editor.org/info/rfc9935)

## Related pages

- [Backups, archives and storage](/technology-options/backups-archives/)
- [Documents and email signing](/technology-options/document-signing/)
- [What a KEM is](/learn/explainers/kem/)
- [Choosing an option](/technology-options/choosing/)
