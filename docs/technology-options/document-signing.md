---
title: Documents and email signing
sidebar_label: Documents and email signing
displayed_sidebar: technologyOptionsSidebar
description: What a good post-quantum move looks like for signed email, PDFs and other signed documents, which formats have published specifications, and the traps for recipients and long-lived records.
---

## What it is

Signed email (S/MIME or OpenPGP), signed PDFs, and other signed documents prove who sent a message or approved a document and that it has not changed. It is a **signatures** job: you sign, and recipients' email clients, document readers, and archives verify. Encrypting email and files is a separate job, covered on [Encrypted email and files](/technology-options/encrypted-files/).

## Post-quantum options and status

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) notes that email, PDF files, and document signing commonly use RSA and ECDSA, and names S/MIME and OpenPGP as standards for public-key encryption and signing of email. Status as checked on 21 November 2026:

| Format | Mechanism | Status |
| --- | --- | --- |
| OpenPGP | Post-quantum signatures and encryption, [RFC 9980](https://www.rfc-editor.org/info/rfc9980) | Proposed Standard, June 2026 |
| S/MIME and other CMS-based signatures | ML-DSA ([RFC 9882](https://www.rfc-editor.org/info/rfc9882)), SLH-DSA ([RFC 9814](https://www.rfc-editor.org/info/rfc9814)), HSS/LMS ([RFC 9708](https://www.rfc-editor.org/info/rfc9708)) | Proposed Standards, 2025 |
| Signer certificates | ML-DSA and other algorithms in X.509 | See [PKI and certificates](/technology-options/pki/) |
| PDF and other document formats | Depends on the format and the reader | Ask the software supplier |

The scheme follows the signature-schemes rule on [Choosing an option](/technology-options/choosing/): for documents and email, ML-DSA unless an applicable authority says otherwise.

## Who usually chooses

The email and document software suppliers decide what their products sign with and verify; your certification authority decides what signer certificates contain. You choose when to switch, which depends on your recipients.

## What good looks like

- Internal and external recipient groups listed, with whether their software verifies the new algorithm.
- Signer certificates issued with the chosen scheme, following [PKI and certificates](/technology-options/pki/).
- A switch date for each recipient group, set only after verification tests pass, with classical signing kept for groups that cannot yet verify.
- An agreed way, recorded with the archive's owner, to keep long-lived signed records verifiable through the transition.

## What to ask or test

- Which post-quantum signature algorithms the email client, document software, and signing service support, and from which release.
- Whether your recipients' software can verify them; external recipients are the slowest party.
- How long signed records must stay verifiable, and how your archive will keep proving that.

## Traps

- **Recipients you do not control.** A signature they cannot verify looks like a broken or forged message.
- **Long-lived signed records.** Contracts and approvals may need to be checked for years; plan how the archive keeps them verifiable through the transition.
- **Signing and encryption keys differ.** Moving one leaves the other classical.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Inventory](/resources/inventory-record/) | A row for the signing service and the signer certificates, with recipient groups in `dependencies` |
| [Vendor response log](/resources/vendor-response-log/) | The software suppliers' answers |
| [Migration plan](/resources/migration-plan/) | The signatures line |
| [Change record](/resources/change-record/) | Verification tests for each recipient group |

## Example

An insufficient record is "Our email is post-quantum signed now."

A decision-ready record names the signing software and release, the algorithm in the signer certificates, the internal and external recipient groups tested with the result for each, and the date from which documents are signed with the new algorithm.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- IETF, Post-Quantum Cryptography in OpenPGP, RFC 9980, June 2026. [RFC 9980](https://www.rfc-editor.org/info/rfc9980)
- IETF, Use of the ML-DSA Signature Algorithm in the Cryptographic Message Syntax (CMS), RFC 9882, October 2025. [RFC 9882](https://www.rfc-editor.org/info/rfc9882)
- IETF, Use of the SLH-DSA Signature Algorithm in the Cryptographic Message Syntax (CMS), RFC 9814, July 2025. [RFC 9814](https://www.rfc-editor.org/info/rfc9814)
- IETF, Use of the HSS/LMS Hash-Based Signature Algorithm in the Cryptographic Message Syntax (CMS), RFC 9708, January 2025. [RFC 9708](https://www.rfc-editor.org/info/rfc9708)

## Related pages

- [Encrypted email and files](/technology-options/encrypted-files/)
- [PKI and certificates](/technology-options/pki/)
- [Choosing an option](/technology-options/choosing/)
- [Why post-quantum signatures affect more than the signer](/learn/explainers/signature-dependencies/)
