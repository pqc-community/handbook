---
title: "NIST CSWP 39: Considerations for Achieving Crypto Agility"
sidebar_label: CSWP 39 (Crypto agility)
displayed_sidebar: standardsSidebar
description: NIST white paper on the capabilities, strategies and practices organisations need to replace and adapt cryptographic algorithms without disrupting operations.
---

## What it covers

NIST Cybersecurity White Paper (CSWP) 39, "Considerations for Achieving Crypto Agility: Strategies and Practices", defines cryptographic agility as the capabilities needed to replace and adapt cryptographic algorithms across protocols, software, hardware and infrastructure while preserving security and ongoing operations. According to its abstract, it surveys current approaches, discusses challenges and trade-offs, identifies operational mechanisms for achieving agility, and highlights areas that need further work. The current version is CSWP 39 upd1.

NIST published the paper, written by NIST staff with co-authors from outside NIST. NIST CSWPs are white papers: they are informative and do not themselves impose requirements.

:::info[Official texts]

- [NIST CSRC publication page for CSWP 39 upd1 (HTML)](https://csrc.nist.gov/pubs/cswp/39/upd1/considerations-for-achieving-crypto-agility/final)
- [CSWP 39 upd1 full text via DOI](https://doi.org/10.6028/NIST.CSWP.39-upd1)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2025-03-05">2025&#8209;03&#8209;05</time> | NIST published the initial public draft of CSWP 39 for comment. |
| <time dateTime="2025-07-17">2025&#8209;07&#8209;17</time> | NIST published a second public draft of CSWP 39. |
| <time dateTime="2025-12-19">2025&#8209;12&#8209;19</time> | NIST published CSWP 39 as a final white paper. |
| <time dateTime="2026-06-29">2026&#8209;06&#8209;29</time> | NIST withdrew the original CSWP 39 and published CSWP 39 upd1, which supersedes it and includes updates as of this date. |

## Relationship with other standards

CSWP 39 addresses the capability behind the schedules in [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/): IR 8547 says a smooth transition requires building long-term cryptographic agility into organisational infrastructure so that updates can follow as post-quantum standards evolve. Where IR 8547 and [SP 800-131A](/standards/transition-and-key-management/sp-800-131a/) say which algorithms are deprecated or disallowed and when, CSWP 39 is about being able to make such changes in practice, now and in later transitions. The NIST National Cybersecurity Center of Excellence (NCCoE) says in its Migration to PQC FAQ (updated 18 November 2026) that the project is now using NIST Cybersecurity White Papers, including CSWP 39 and CSWP 48, to share progress.

Agility needs to be planned separately for key establishment, for digital signatures and for long-lived verifiers such as roots of trust, because each changes on a different path. For the handbook's practical treatment, see [Crypto-agility and the next transition](/learn/crypto-agility/) and [Keep the ability to change again](/migration-practices/changing-algorithms-again/).

## Sources

- NIST, Considerations for Achieving Crypto Agility: Strategies and Practices, NIST CSWP 39 upd1, published 19 December 2025, includes updates as of 29 June 2026. [CSRC publication page](https://csrc.nist.gov/pubs/cswp/39/upd1/considerations-for-achieving-crypto-agility/final) / [DOI](https://doi.org/10.6028/NIST.CSWP.39-upd1)
- NIST, Considerations for Achieving Cryptographic Agility: Strategies and Practices, NIST CSWP 39 (withdrawn 29 June 2026; drafts 5 March 2025 and 17 July 2025). [CSRC publication page](https://csrc.nist.gov/pubs/cswp/39/considerations-for-achieving-cryptographic-agility/final)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- NIST NCCoE, Frequently Asked Questions about Post-Quantum Cryptography, last updated 18 November 2026. [FAQ (HTML)](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html)

## Related pages

- [Transition and key-management publications](/standards/transition-and-key-management/)
- [Crypto-agility and the next transition](/learn/crypto-agility/)
- [Keep the ability to change again](/migration-practices/changing-algorithms-again/)
- [NCCoE Migration to PQC](/standards/migration-guides/nccoe-migration-to-pqc/)
