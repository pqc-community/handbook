---
title: OpenSSH 10.0 defaults to hybrid ML-KEM exchange
description: OpenSSH 10.0 makes the hybrid mlkem768x25519-sha256 key exchange its default, so sessions between up-to-date clients and servers use ML-KEM.
date: 2025-04-09
authors: [pqc_handbook]
tags: [deployment-milestones, key-establishment, signatures]
---

On April 9, 2025, the OpenSSH project released [OpenSSH 10.0](https://www.openssh.org/txt/release-10.0), which makes the hybrid post-quantum key exchange mlkem768x25519-sha256 the default for key agreement. The change matters to anyone who runs servers, network equipment or automation over [SSH](/technology-options/ssh/), because what a session negotiates now depends on whether both ends are recent enough to share the new method.

{/* truncate */}

## What OpenSSH changed

The release notes say the hybrid algorithm mlkem768x25519-sha256 is now used by default for key agreement, and describe it as no less strong than the classical curve25519-sha256 method and considerably faster than the previous default. It combines ML-KEM, the key-encapsulation mechanism NIST standardized in [FIPS 203](/standards/post-quantum/fips-203/), with the classical X25519 exchange, so a session stays at least as strong as the classical exchange alone even if the post-quantum part were to fail; the [hybrid lesson](/learn/hybrid/) explains that design.

This is not OpenSSH's first post-quantum default: according to the project's [post-quantum page](https://www.openssh.org/pq.html), OpenSSH 9.0, released in April 2022, made the hybrid sntrup761x25519-sha512 exchange the default, and OpenSSH 9.9 added mlkem768x25519-sha256, so version 10.0 moves the default from the first of those methods to the second.

The same release disables finite-field Diffie–Hellman key exchange in the server by default, while leaving it enabled in the client, and removes support for the DSA signature algorithm.

## Key exchange, not keys

The change covers key agreement only, which is the key-establishment job and the part of SSH exposed to harvest-now, decrypt-later. Host keys and user keys are a signatures job, and OpenSSH 10.0 leaves them on classical algorithms, so an upgrade protects the confidentiality of new sessions without changing how servers and users authenticate.

## What it means for your plan

An OpenSSH upgrade only helps sessions where both ends support a post-quantum method, so the useful test is what each connection actually negotiates. Most clients report the key-exchange method in verbose output, which lets you check servers by operating-system release rather than assume the latest default applies everywhere.

Network devices, appliances, out-of-band controllers and automation tools often carry their own SSH library and may lag well behind OpenSSH, so ask their suppliers which post-quantum key-exchange methods they support and when. Record the results on your [register](/templates/records/register/), with a key-establishment row for SSH sessions, a separate signatures row for host and user keys, and an owner and a review date for each device that cannot follow. The server's change of default on finite-field Diffie–Hellman is also worth testing against older clients before you deploy it.

## Sources

- OpenSSH, OpenSSH 10.0 release notes, April 9, 2025. [Release notes (TXT)](https://www.openssh.org/txt/release-10.0)
- OpenSSH, Post-Quantum Cryptography, checked November 24, 2026. [Project page (HTML)](https://www.openssh.org/pq.html)

## Related pages

- [Choosing an option](/technology-options/choosing/)
- [Inventory the cryptography](/plan/program/inventory/)
- [Work with suppliers](/plan/program/suppliers/)
