---
title: Post-quantum algorithm and protocol options
sidebar_label: Algorithm and protocol options
sidebar_position: 1
displayed_sidebar: algorithmProtocolOptionsSidebar
last_reviewed: 2026-11-10
description: Use-case map from confidentiality, many-party signatures, and non-updatable verifiers to the option pages and the evidence each job produces.
---

Use this map after the inventory and the priority record. Pick the situation, open the page, record the authority, and carry the evidence onto the work product named in the table.

| Situation | Page | Authority | Evidence to record |
| --- | --- | --- | --- |
| Confidentiality with a long data protection period | [Key establishment](/algorithm-protocol-options/key-establishment/) | NIST IR 8547, October 2026 | The [change record](/resources/change-record/) |
| Signatures that many parties change together | [Signatures](/algorithm-protocol-options/signatures/) | NIST IR 8547, October 2026 | The dependency list |
| A verifier that cannot be updated later | [Long-lived roots](/algorithm-protocol-options/long-lived-roots/) | UK NCSC timelines, 2028 plan row | The procurement checklist |

**Handbook practice:** [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) (ML-KEM), [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) (ML-DSA), and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) (SLH-DSA) are the NIST algorithm standards linked from this section. Parameter tables stay off this site; NIST IR 8547, October 2026, recommends ML-KEM-768 as the default parameter set for key establishment.

The next page is [Choosing an option](/algorithm-protocol-options/choosing/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Choosing an option](./choosing.md)
- [Priority](../migration-practices/priority.md)
- [Implementation](../migration-practices/implementation.md)
