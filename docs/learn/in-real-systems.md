---
title: In real systems
sidebar_label: In real systems
description: Where post-quantum mechanisms appear in TLS, VPNs, signatures, and certificates, hybrid deployments, and what changes in practice.
displayed_sidebar: learnSidebar
last_reviewed: 2026-11-10
---

Post-quantum public-key mechanisms do not live in isolation. They replace or accompany today's algorithms in the same places organisations already depend on public-key cryptography.

Key establishment appears in TLS sessions that protect web traffic, in VPN tunnels that carry remote access, and in other channel protocols that negotiate session keys across a network. Digital signatures appear on software packages and firmware images so installers and devices can verify what they run. Certificates bind names to public keys and chain to trust anchors in browsers, devices, and enterprise policies. A browser chain runs from the leaf certificate for the site, through an intermediate, to a trust anchor the browser already holds. A firmware check uses the same relationship: the device holds a trust anchor and checks the signature on the image.

**Authority recommendation:** [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547), October 2026, treats hybrid constructions as a temporary hedge: combining a classical algorithm with a post-quantum one while products and trust stores catch up.

During that transition, not every change is a local setting. Protocol stacks, certificate profiles, devices, and software often need a supplier release before post-quantum algorithms appear in production. Configuration can enable what the product already ships; it cannot add support that is not in the build.

Next: [Standardisation](/learn/standardisation/).

## Sources

- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Learn the basics](/learn/)
- [Algorithms](/learn/algorithms/)
