---
title: "NIST IR 8545: Status Report on the Fourth Round of the NIST Post-Quantum Cryptography Standardization Process"
search_title: "NIST IR 8545: fourth round report, HQC selected"
sidebar_label: NIST IR 8545 (Round 4 / HQC)
displayed_sidebar: standardsSidebar
description: NIST status report concluding the fourth round of the PQC process and selecting HQC as an additional KEM for standardisation.
---

## What it covers

NIST Internal Report (IR) 8545 summarises the fourth-round evaluation of candidate key-encapsulation mechanisms (KEMs) built on mathematical problems other than structured lattices. It records NIST's decision to standardise Hamming Quasi-Cyclic (HQC), a code-based KEM, as the only key-establishment algorithm selected from that round, giving an alternative to ML-KEM.

IR 8545 is an informative report from the National Institute of Standards and Technology (NIST); it does not itself impose requirements. HQC will not be an approved scheme until NIST publishes a final FIPS specifying it.

:::info[Official texts]

- [NIST IR 8545 full text (PDF)](https://doi.org/10.6028/NIST.IR.8545)
- [NIST CSRC publication page](https://csrc.nist.gov/pubs/ir/8545/final)

:::

## Timeline of key dates

| Date | Event |
| --- | --- |
| <time dateTime="2025-03-11">2025&#8209;03&#8209;11</time> | NIST published IR 8545, selecting HQC for standardisation. |
| <time dateTime="2026-10-27">2026&#8209;10&#8209;27</time> | NIST published IR 8547 as final, stating that a FIPS specifying HQC-KEM is under development. As of 21 November 2026, no draft of that FIPS had been published on CSRC. |

## Relationship with other standards

[NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) cites IR 8545 when explaining that NIST selected HQC as an alternative to ML-KEM (§2.1.2). IR 8547 states that, after publication, HQC will also be an approved post-quantum key-establishment scheme, and that NIST has no current plans to select further KEMs, although that could change (§4.1.2). Until then, ML-KEM in [FIPS 203](/standards/post-quantum/fips-203/) remains the only approved post-quantum public-key key-establishment scheme.

HQC concerns key establishment only. For organisations, its main practical relevance is as a reason to keep key-establishment choices changeable; see [Keep the ability to change again](/programme/changing-algorithms-again/).

## Sources

- NIST, Status Report on the Fourth Round of the NIST Post-Quantum Cryptography Standardization Process, NIST IR 8545, 11 March 2025. [NIST IR 8545 publication page](https://csrc.nist.gov/pubs/ir/8545/final), [NIST IR 8545 (PDF)](https://doi.org/10.6028/NIST.IR.8545)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, 27 October 2026. [NIST IR 8547 publication page](https://csrc.nist.gov/pubs/ir/8547/final), [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [FIPS 203](/standards/post-quantum/fips-203/)
- [Standardisation](/learn/standardisation/)
- [Keep the ability to change again](/programme/changing-algorithms-again/)
