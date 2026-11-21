---
title: "NSA: Commercial National Security Algorithm Suite 2.0 (CNSA 2.0)"
sidebar_label: NSA CNSA 2.0
displayed_sidebar: standardsSidebar
description: The NSA's CNSA 2.0 algorithm suite and dates for US National Security Systems, as set out in the NSA's October 2026 FAQ, including its position on hybrids.
---

## What it covers

The Commercial National Security Algorithm Suite 2.0 (CNSA 2.0) is the set of public-standard algorithms that the US National Security Agency (NSA) specifies for protecting National Security Systems (NSS) against both classical and quantum-capable attackers. This summary follows the NSA's frequently asked questions document (October 2026, Version 2.2), which sets out the algorithms, the transition dates and the NSA's view on hybrid use.

The NSA states that the FAQ clarifies CNSA 2.0 requirements for NSS and gives recommended guidance for the Department of War and the Defense Industrial Base. The NSA adds that it may be useful more generally, especially for those who interact with NSS, Department of War or Defense Industrial Base systems. Organisations outside that audience are not bound by CNSA 2.0 and should read it as one authority's position for its own systems.

:::info[Official texts]

- **NSA CNSA 2.0 FAQ** — [Commercial National Security Algorithm Suite 2.0 and Quantum Computing Frequently Asked Questions, Version 2.2 (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF).

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2026-10">2026&#8209;10</time> | The NSA issued Version 2.2 of its CNSA 2.0 and quantum computing FAQ as a Cybersecurity Information Sheet. |
| <time dateTime="2027-01-01">2027&#8209;01&#8209;01</time> | CNSA 2.0 algorithms are required in all new acquisitions for NSS, according to the CNSSP 15 dates the FAQ cites. The NSA expects new deployments from this date to be CNSA 2.0 compliant unless the relevant profiles note otherwise. |
| <time dateTime="2030-12-31">2030&#8209;12&#8209;31</time> | NSS equipment and services that cannot support CNSA 2.0 must be phased out unless granted an exception. The NSA also expects encryption to be broadly quantum-resistant by default by this date. |
| <time dateTime="2031-12-31">2031&#8209;12&#8209;31</time> | CNSA 2.0 algorithms are mandated for use in NSS, unless otherwise noted, to achieve full quantum resistance. |
| <time dateTime="2035">2035</time> | The goal set by NSM-10 for mitigating quantum risk; the NSA intends all NSS to be quantum-resistant well ahead of it. |

## Relationship with other standards

CNSA 2.0 selects specific parameter sets from NIST standards. For general-purpose use the FAQ names AES with 256-bit keys ([FIPS 197](/standards/symmetric-and-primitives/fips-197/)), ML-KEM-1024 for key establishment ([FIPS 203](/standards/post-quantum/fips-203/)), ML-DSA-87 for digital signatures in any use case, including firmware and software signing ([FIPS 204](/standards/post-quantum/fips-204/)), and SHA-384 or SHA-512 ([FIPS 180-4](/standards/symmetric-and-primitives/fips-180-4/)). For signing firmware and software, the FAQ also approves the stateful hash-based schemes LMS and XMSS from [NIST SP 800-208](/standards/post-quantum/sp-800-208/). These choices are narrower than the options NIST standards allow: [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/), for example, names ML-KEM-768 as its recommended default.

The FAQ states that the NSA has confidence in CNSA 2.0 and will not require NSS developers to use hybrid certified products. It acknowledges that availability and interoperability may lead to hybrid solutions in specific cases, and that some protocols may need hybrid-like constructions to accommodate the sizes of ML-KEM-1024 and ML-DSA-87. Other authorities take different positions on hybrids; see the [comparison of national algorithm positions](/standards/national-algorithm-positions/) and [Hybrid cryptography](/learn/hybrid/).

The dates sit within the wider US framework set by [NSM-10](/standards/us-federal-directives/nsm-10/), which sets a 2035 goal for mitigating as much quantum risk as feasible. The FAQ attributes the dates to CNSSP 15; this summary records them only as the FAQ states them and does not summarise CNSSP 15 itself.

## Sources

- National Security Agency, Commercial National Security Algorithm Suite 2.0 and Quantum Computing Frequently Asked Questions, Cybersecurity Information Sheet U/OO/6072712-26, PP-26-3194, October 2026, Version 2.2. [CNSA 2.0 FAQ (PDF)](https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF)
- NIST IR 8547, Transition to Post-Quantum Cryptography Standards, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [National algorithm positions](/standards/national-algorithm-positions/)
- [US government requirements](/standards/us-federal-directives/)
- [Hybrid cryptography](/learn/hybrid/)
- [Choosing a post-quantum option](/technology-options/choosing/)
- [Hash-based signatures](/learn/explainers/hash-based-signatures/)
