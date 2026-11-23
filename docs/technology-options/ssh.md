---
title: SSH
search_title: Post-quantum SSH
sidebar_label: SSH
displayed_sidebar: technologyOptionsSidebar
description: What a good post-quantum SSH deployment looks like for administration, automation and Git, which key exchanges have RFCs, and why host keys are another job.
---

## What it is

Secure Shell (SSH) is used to administer servers and network devices, to run automation, and to reach Git repositories. Its key exchange is a **key-establishment** job, exposed to [harvest-now, decrypt-later](/templates/reference/glossary/#harvest-now-decrypt-later) for anything sensitive sent over the session. Host keys and user keys are a **signatures** job.

## Post-quantum options and status

Status as checked on 23 November 2026.

| Part | Mechanism | Status |
| --- | --- | --- |
| Key exchange with ML-KEM | mlkem768x25519-sha256, mlkem768nistp256-sha256, mlkem1024nistp384-sha384, defined in [RFC 10042](https://www.rfc-editor.org/info/rfc10042) | Informational RFC, August 2026 |
| Key exchange with NTRU Prime | sntrup761x25519-sha512, defined in [RFC 9941](https://www.rfc-editor.org/info/rfc9941) | Informational RFC, April 2026 |
| Host and user keys, composite | Composite ML-DSA signatures, draft-ietf-sshm-composite-sigs | Working-group Internet-Draft at an early stage |
| Host and user keys, ML-DSA alone | draft-sfluhrer-ssh-mldsa | Individual Internet-Draft, not adopted by a working group |

Both key-exchange methods are hybrids that keep a classical exchange alongside the post-quantum one. They are Informational RFCs, which document a method without making it an IETF standard. NTRU Prime is not one of NIST's standardised algorithms: [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) names ML-KEM as, at this time, NIST's only approved post-quantum key-establishment scheme. So check sntrup761x25519 against the authorities that apply to you, as [Choosing an option](/technology-options/choosing/) describes, before relying on it.

No post-quantum signature method for SSH host or user keys is published: RFC 10042 and RFC 9941 define key exchange only, and the signature drafts are at an early stage. Ask the SSH supplier what it ships, on which draft, and apply the protocol-mechanisms rule on the same page.

## Who usually chooses

The SSH implementation's supplier, usually the operating system or the network device maker, decides which methods exist and which are preferred by default. You choose what servers and clients allow. Both ends must share a method.

## What good looks like

- Servers and clients prefer a hybrid post-quantum key exchange that every applicable authority accepts, and classical-only methods are kept only where a recorded exception needs them.
- Network devices, appliances, and automation tools with their own SSH library are on the [register](/templates/records/register/), with the method each one negotiates.
- Host and user keys have their own signatures row on the [register](/templates/records/register/), with its own dates.

## What to ask or test

- Which post-quantum key-exchange methods each SSH server and client supports and prefers, by version.
- What a session actually negotiates; most clients show the key-exchange method in verbose output.
- Which devices and automation tools use their own SSH library: network equipment, appliances, and scripts often lag the operating system.

## Traps

- **Older embedded SSH.** Switches, appliances, and out-of-band controllers may never support the new methods; record them as exceptions with owners.
- **Key exchange is not keys.** Migrating the key exchange leaves host and user keys classical; keep them on their own line.
- **Algorithm acceptance.** A method can be on by default yet use an algorithm your applicable authority does not name.

## Record it fills

| Record | What it holds |
| --- | --- |
| [Register](/templates/records/register/) | A key-establishment row for SSH servers, and a separate signatures row for host and user keys; answers from the makers of devices and tools with their own SSH library, with their judgement; and a row for each device that cannot follow, with an owner, the replacement date, and a `next review` |
| [Change record](/templates/records/change-record/) | Any change to server or client settings, with the negotiated method as the deployed-state check |

## Example

An insufficient record is "We upgraded OpenSSH, so SSH is done."

A decision-ready record lists the servers by operating-system release with the key-exchange method each negotiated, records the network devices still on classical key exchange with an owner and a replacement date, and notes that host keys are unchanged.

## Sources

- IETF, Post-Quantum/Traditional Hybrid Key Exchange with the Module-Lattice-Based Key-Encapsulation Mechanism for Use in SSH, RFC 10042, August 2026. [RFC 10042](https://www.rfc-editor.org/info/rfc10042)
- IETF, Secure Shell (SSH) Key Exchange Method Using Hybrid Streamlined NTRU Prime sntrup761 and X25519 with SHA-512: sntrup761x25519-sha512, RFC 9941, April 2026. [RFC 9941](https://www.rfc-editor.org/info/rfc9941)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- IETF Datatracker, Post-Quantum Composite Signatures in SSH, draft-ietf-sshm-composite-sigs-01, and SSH Support of ML-DSA, draft-sfluhrer-ssh-mldsa-08, checked 23 November 2026. [draft-ietf-sshm-composite-sigs](https://datatracker.ietf.org/doc/draft-ietf-sshm-composite-sigs/) / [draft-sfluhrer-ssh-mldsa](https://datatracker.ietf.org/doc/draft-sfluhrer-ssh-mldsa/)

## Related pages

- [Choosing an option](/technology-options/choosing/)
- [Modules, protocols, and certificates](/standards/modules-protocols-certificates/)
- [Inventory the cryptography](/plan/programme/inventory/)
- [PKI and certificates](/technology-options/pki/)
