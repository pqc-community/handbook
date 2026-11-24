---
title: OpenSSH enables hybrid ML-DSA signatures
description: OpenSSH 10.6 enables the hybrid ssh-mldsa44-ed25519 signature algorithm for SSH keys, ahead of any IETF standard for post-quantum SSH signatures.
date: 2026-11-05
authors: [pqc_handbook]
tags: [deployment-milestones, signatures]
---

The OpenSSH project's [10.6 release](https://www.openssh.org/txt/release-10.6) of October 6, 2026, enables a hybrid post-quantum signature algorithm, ssh-mldsa44-ed25519, and the 10.6p2 update of November 5, 2026, allows it for signing certificates. It is the first post-quantum option for [SSH](/technology-options/ssh/) host and user keys that a widely used implementation enables rather than offers as an experiment, and it arrives before any IETF standard for one.

{/* truncate */}

## What OpenSSH changed

The 10.6 release notes say the hybrid algorithm, which combines ML-DSA-44 with the classical Ed25519 signature, is now enabled, and that it no longer uses the "@openssh.com" suffix of the experimental version added in [OpenSSH 10.4](https://www.openssh.org/txt/release-10.4), so keys generated with that experimental support must be regenerated or removed. The [10.6p2 release notes](https://www.openssh.org/txt/release-10.6p2) add it to the algorithms allowed for certificate authorities. ML-DSA is the signature scheme NIST standardized in [FIPS 204](/standards/post-quantum/fips-204/), and pairing it with a classical signature follows the hybrid design the [hybrid lesson](/learn/hybrid/) explains.

The same release adds a WarnWeakCrypto option to the server, on by default, which logs when a client uses a key agreement that is not post-quantum safe. The client gained the equivalent warning in an earlier release.

## A draft, not a standard

The IETF has not standardized a post-quantum signature method for SSH: the working-group draft for composite ML-DSA signatures, draft-ietf-sshm-composite-sigs, is at an early stage, and the release notes do not say which draft's encoding 10.6 implements. The regeneration notice shows the cost of building on a draft, because a key format can change before the method is standardized, which is why [Choosing an option](/technology-options/choosing/) treats protocol mechanisms from drafts with caution.

## What it means for your plan

Host and user keys are a signatures job with their own clock, separate from the SSH key exchange that OpenSSH already defaults to a hybrid post-quantum method. Keep them on their own row in the [register](/templates/records/register/), and treat this release as something to test rather than a reason to change keys across an estate: ask each SSH supplier, including the makers of network devices and automation tools with their own SSH library, which signature method they ship, on which draft, and when they expect to follow the standard. The new server log is a cheap way to find clients still negotiating classical key exchange.

## Sources

- OpenSSH, OpenSSH 10.4 release notes, July 6, 2026. [Release notes (TXT)](https://www.openssh.org/txt/release-10.4)
- OpenSSH, OpenSSH 10.6 release notes, October 6, 2026. [Release notes (TXT)](https://www.openssh.org/txt/release-10.6)
- OpenSSH, OpenSSH 10.6p2 release notes, November 5, 2026. [Release notes (TXT)](https://www.openssh.org/txt/release-10.6p2)
- IETF Datatracker, Post-Quantum Composite Signatures in SSH, draft-ietf-sshm-composite-sigs. [draft-ietf-sshm-composite-sigs](https://datatracker.ietf.org/doc/draft-ietf-sshm-composite-sigs/)

## Related pages

- [Work with suppliers](/plan/program/suppliers/)
- [Inventory the cryptography](/plan/program/inventory/)
- [PKI and certificates](/technology-options/pki/)
