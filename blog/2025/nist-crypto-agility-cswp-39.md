---
title: NIST finalizes CSWP 39 on crypto-agility
description: NIST CSWP 39, final on December 19, 2025, surveys how to achieve cryptographic agility, the ability to replace algorithms without disrupting operations.
date: 2025-12-19
authors: [pqc_handbook]
tags: [authority-updates, nist, crypto-agility]
---

On December 19, 2025, NIST published [CSWP 39, Considerations for Achieving Cryptographic Agility: Strategies and Practices](https://csrc.nist.gov/pubs/cswp/39/considerations-for-achieving-cryptographic-agility/final), as a final Cybersecurity White Paper. It surveys how to build the ability to replace and adapt cryptographic algorithms across protocols, software, hardware and infrastructure. It names no specific audience and, as a white paper, imposes no requirement on anyone.

{/* truncate */}

## What NIST published

CSWP 39 defines cryptographic agility, or crypto-agility, as the capabilities needed to replace and adapt cryptographic algorithms in protocols, applications, software, hardware, firmware and infrastructure while preserving security and ongoing operations. Its abstract says it surveys current approaches, discusses the challenges and trade-offs involved, identifies approaches for providing operational mechanisms to achieve agility, and highlights areas that need further work. It is summarized on the handbook's [CSWP 39 page](/standards/transition-and-key-management/nist-cswp-39/).

The paper was written by NIST staff with co-authors from outside NIST. It follows an initial public draft of March 5, 2025, and a second public draft of July 17, 2025, so the final text has been through two rounds of comment.

## Status

Like other NIST Cybersecurity White Papers, CSWP 39 is informative: it imposes no requirement and sets no date, because it describes capabilities and practices rather than rules, and it complements, rather than replaces, the publications that say which algorithms are approved, deprecated or disallowed and when.

## What it means for your plan

The post-quantum migration is unlikely to be the last time algorithms change, and the effort it takes is largely a measure of how hard it is to change cryptography at all. [Crypto-agility and the next transition](/learn/crypto-agility/) explains why, and CSWP 39 gives that idea a NIST reference that you can cite in architecture standards and purchase requirements.

The paper is most useful when it is turned into specific questions. For systems you build, ask whether the algorithm is chosen by configuration or fixed in code, and whether keys, certificates and protocols can change without a redesign. For products you buy, ask suppliers how a future algorithm change would be delivered and how long it would take, as [Work with suppliers](/plan/program/suppliers/) describes, and record the answers on your [register](/templates/records/register/).

Plan agility separately for each cryptographic job, because each changes on a different path. Key establishment can often change through software updates at both ends, signatures depend on every relying party accepting the new algorithm, and long-lived verifiers such as hardware roots of trust may never change once deployed. [Keep the ability to change again](/plan/program/changing-algorithms-again/) turns this into steps for the program.

:::note[Later update]

On June 29, 2026, NIST withdrew this version of CSWP 39 and published CSWP 39 upd1, Considerations for Achieving Crypto Agility, which supersedes it; the handbook's [CSWP 39 page](/standards/transition-and-key-management/nist-cswp-39/) now follows the updated version.

:::

## Sources

- NIST, Considerations for Achieving Cryptographic Agility: Strategies and Practices, NIST CSWP 39, December 19, 2025 (initial public draft March 5, 2025; second public draft July 17, 2025; withdrawn June 29, 2026). [Publication page (HTML)](https://csrc.nist.gov/pubs/cswp/39/considerations-for-achieving-cryptographic-agility/final)
- NIST, Considerations for Achieving Crypto Agility: Strategies and Practices, NIST CSWP 39 upd1, includes updates as of June 29, 2026. [Publication page (HTML)](https://csrc.nist.gov/pubs/cswp/39/upd1/considerations-for-achieving-crypto-agility/final)

## Related pages

- [Transition and key-management publications](/standards/transition-and-key-management/)
- [Core actions](/plan/core-actions/)
- [Technology options](/technology-options/)
