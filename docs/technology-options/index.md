---
title: Post-quantum technology options
sidebar_label: Technology options
displayed_sidebar: technologyOptionsSidebar
description: Use-case map from confidentiality, many-party signatures, and non-updatable verifiers to the option pages and the evidence each job produces.
---

Use this map after the inventory and the order on the migration plan. Pick the situation, open the page, record the authority, and carry the evidence onto the work product named in the table.

| Situation | Page | Authority | Evidence to record |
| --- | --- | --- | --- |
| Confidentiality with a long data protection period | [Key establishment](/technology-options/key-establishment/) | NIST IR 8547, October 2026 | The [change record](/resources/change-record/) |
| Signatures that many parties change together | [Signatures](/technology-options/signatures/) | NIST IR 8547, October 2026 | The dependency list |
| A verifier that cannot be updated later | [Long-lived roots](/technology-options/long-lived-roots/) | UK NCSC timelines, 2028 plan row | The procurement checklist |

[FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) (ML-KEM), [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) (ML-DSA), and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) (SLH-DSA) are the NIST post-quantum algorithm standards referenced in this section. Parameter tables remain in those publications; NIST IR 8547 (October 2026) recommends ML-KEM-768 as the default parameter set for key establishment.

The next page is [Choosing an option](/technology-options/choosing/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Choosing an option](./choosing.md)
- [Decide what to migrate first](../migration-practices/priority.md)
- [Make and verify one change](../migration-practices/implementation.md)
