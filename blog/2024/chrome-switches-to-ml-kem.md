---
title: Chrome to switch from Kyber to ML-KEM
description: Google says Chrome 131 will replace hybrid Kyber with standard ML-KEM under a new TLS codepoint and drop the draft, so servers using Kyber need to update.
date: 2024-09-13
authors: [pqc_handbook]
tags: [deployment-milestones, key-establishment, crypto-agility]
---

On September 13, 2024, Google announced on its [security blog](https://security.googleblog.com/2024/09/a-new-path-for-kyber-on-web.html) that Chrome 131 will replace its hybrid Kyber key exchange with the standardized ML-KEM, using a new TLS codepoint, and will not support both at once. It matters to anyone running TLS servers or middleboxes that adopted the pre-standard Kyber group, because those deployments now have to change again.

{/* truncate */}

## What Google announced

Chrome has offered a hybrid key exchange combining X25519 with Kyber-768 by default on desktop since [Chrome 124](/news/2024/chrome-hybrid-kyber-default/). Google explains that Kyber has since been standardized, with minor technical changes, as ML-KEM in [FIPS 203](/standards/post-quantum/fips-203/), and that those changes make the final version incompatible with the Kyber version Chrome deployed. The TLS codepoint for the hybrid key exchange therefore changes, from 0x6399 for Kyber768+X25519 to 0x11EC for ML-KEM768+X25519.

In Chrome 131, Google says, Chrome will switch from Kyber to ML-KEM, offer a predicted key share for hybrid ML-KEM, and stop supporting hybrid Kyber. The PostQuantumKeyAgreementEnabled enterprise policy will apply to both. Google has also implemented ML-KEM in its BoringSSL cryptography library, and says Chrome Canary, Dev and Beta may see the change before Chrome 131.

## Why not both

Google gives several reasons for not supporting Kyber and ML-KEM together. Kyber was always experimental, so continuing to support it would risk ossification on a non-standard algorithm. Post-quantum key shares are also too large for a browser to send two predicted key shares in the same handshake. Google suggests that server operators can support both algorithms for a while, keeping post-quantum protection for a wider set of clients as they update, and says it is waiting until Chrome 131 so that operators have time to update their implementations.

## What it means for your plan

If you enabled the Kyber group on your own servers or load balancers, ask your supplier when its product will support the ML-KEM hybrid, and plan to offer both groups during the changeover so that older and newer clients keep a post-quantum key exchange. Once Chrome 131 reaches your users, check from the client side which group connections actually negotiate, as the [TLS card](/technology-options/tls/) describes, because a server that supports only the Kyber group will no longer share a post-quantum group with updated Chrome, and its connections can quietly fall back to classical key exchange.

The wider lesson is that early, pre-standard deployments had to change again once the standard was final. That is the point of [crypto-agility](/learn/crypto-agility/): record which mechanism each system uses and whether it is a draft, and keep the ability to change it through configuration and supplier updates rather than a rebuild. [Keep the ability to change again](/plan/program/changing-algorithms-again/) shows how to build that into a program.

## Sources

- Google Security Blog, A new path for Kyber on the web, September 13, 2024. [Blog post (HTML)](https://security.googleblog.com/2024/09/a-new-path-for-kyber-on-web.html)
- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, August 13, 2024. [FIPS 203 publication page (HTML)](https://csrc.nist.gov/pubs/fips/203/final)

## Related pages

- [Hybrid cryptography](/learn/hybrid/)
- [What changes in a TLS connection](/learn/explainers/tls/)
- [Work with suppliers](/plan/program/suppliers/)
