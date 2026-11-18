---
title: Classical public-key standards (transitioning)
sidebar_label: Overview
displayed_sidebar: standardsSidebar
last_reviewed: 2026-11-10
description: NIST classical signature, elliptic-curve, and pair-wise key-establishment standards that are vulnerable to quantum attack.
---

These standards specify classical public-key cryptography based on integer factorisation and discrete logarithms. Because Shor's algorithm breaks those mathematical foundations on a cryptanalytically relevant quantum computer, these standards are the primary baseline that post-quantum cryptography replaces.

### Signatures and curves

| Publication | Summary | Reference |
| --- | --- | --- |
| FIPS 186-5 | Digital Signature Standard specifying RSA, ECDSA, and EdDSA. | [FIPS 186-5](/standards/classical-public-key/fips-186-5/) |
| NIST SP 800-186 | Elliptic curve domain parameters for NIST signature and key-establishment schemes. | [NIST SP 800-186](/standards/classical-public-key/sp-800-186/) |

### Pair-wise key establishment

| Publication | Summary | Reference |
| --- | --- | --- |
| NIST SP 800-56A | Pair-wise key-establishment schemes using finite-field and elliptic-curve discrete logarithms. | [NIST SP 800-56A](/standards/classical-public-key/sp-800-56a/) |
| NIST SP 800-56B | Pair-wise key-establishment and key-transport schemes using RSA integer factorisation. | [NIST SP 800-56B](/standards/classical-public-key/sp-800-56b/) |

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://csrc.nist.gov/pubs/ir/8547/final)

## Related pages

- [Standards](/standards/)
- [Post-quantum cryptography standards](/standards/post-quantum/)
- [Inventory](/migration-practices/inventory/)
- [Timelines](/learn/timelines/)
