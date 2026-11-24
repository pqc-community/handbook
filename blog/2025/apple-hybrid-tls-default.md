---
title: Apple turns on hybrid TLS key exchange by default
description: From iOS 26 and macOS Tahoe 26, Apple's URLSession and Network APIs offer X25519MLKEM768 hybrid key exchange in TLS 1.3 by default; test older servers.
date: 2025-09-15
authors: [pqc_handbook]
tags: [deployment-milestones, key-establishment]
---

With iOS 26, iPadOS 26, macOS Tahoe 26 and visionOS 26, released on September 15, 2025, Apple devices offer hybrid post-quantum key exchange in TLS 1.3 by default. Apple's support article [Prepare your network for quantum-secure encryption in TLS](https://support.apple.com/en-gb/122756), written for enterprise and education network administrators, warns that some legacy servers fail to read the larger handshake message these devices now send.

{/* truncate */}

## What Apple changed

Apple's [Platform Security guide](https://support.apple.com/en-gb/guide/security/sec100a75d12/web) says that on iOS 26 and iPadOS 26 or later, TLS 1.3 with what Apple calls "quantum-secure encryption", using the X25519MLKEM768 key exchange algorithm, is enabled by default for the URLSession framework and the Network APIs. Its overview of quantum-secure cryptography on Apple devices lists the same support in iOS 26, iPadOS 26, macOS 26, tvOS 26 and watchOS 26, and says these APIs enable it by default for all system services and apps that use them.

X25519MLKEM768 is a hybrid group: it combines the classical X25519 exchange with ML-KEM-768 from [FIPS 203](/standards/post-quantum/fips-203/), so the session key stays protected as long as either part holds. Apple's support article explains that the devices' TLS ClientHello now includes X25519MLKEM768 among its supported groups, with a matching key share, and that a server can select it if it supports it or choose another group that the client also advertised. The change protects key establishment against traffic recorded now and decrypted later; it does not change the certificates that authenticate the server, which remain a separate signatures question, as [PKI and certificates](/technology-options/pki/) explains.

## The compatibility warning

The extra key share makes the ClientHello larger. Apple warns that devices on the new releases may fail to connect to some legacy servers whose TLS implementation incorrectly fails to read large ClientHello messages. A server that handles the message correctly but does not support the hybrid group simply negotiates a classical group, so the risk sits with faulty implementations rather than with servers that lack post-quantum support.

## What it means for your plan

Any client on these releases that uses Apple's networking APIs can now offer hybrid key exchange to your services, which makes server-side support worth checking on the [TLS and web services card](/technology-options/tls/). Test your public endpoints, and the load balancers, firewalls and inspection proxies in front of them, with a client that sends the larger ClientHello, and treat any connection failure as a defect to raise with the supplier of that component.

For endpoints you run, record on the [register](/templates/records/register/) which post-quantum groups each one supports and what real clients negotiate, checked from the client side as [Make and verify one change](/plan/program/implementation/) describes, because a configured group is not the same as a negotiated one. Where a supplier runs the endpoint, ask when it will accept hybrid key exchange from these clients and whether anything in its path rejects large handshakes.

This is a client default from one platform supplier, not a requirement from any authority, so it changes what you should test rather than any date you work to.

## Sources

- Apple, Apple Platform Security, "TLS security" and "Quantum-secure cryptography in Apple devices", checked November 24, 2026. [TLS security (HTML)](https://support.apple.com/en-gb/guide/security/sec100a75d12/web), [Quantum-secure cryptography (HTML)](https://support.apple.com/en-gb/guide/security/secc7c82e533/web)
- Apple Support, Prepare your network for quantum-secure encryption in TLS, article 122756, version published July 23, 2025 (as archived on August 17, 2025); the current version is dated June 25, 2026. [Support article (HTML)](https://support.apple.com/en-gb/122756)
- Apple Support, Apple security releases, initial release dates for iOS 26, iPadOS 26, macOS Tahoe 26 and visionOS 26 (September 15, 2025). [Security releases page (HTML)](https://support.apple.com/en-us/100100)

## Related pages

- [What changes in a TLS connection](/learn/explainers/tls/)
- [Hybrid cryptography](/learn/hybrid/)
- [Work with suppliers](/plan/program/suppliers/)
