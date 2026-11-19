---
title: Plan, test, and verify one change
sidebar_label: Implementation
description: Pilot, test, roll out, roll back, and verify one system after an option has been chosen.
displayed_sidebar: migrationPracticesSidebar
last_reviewed: 2026-11-19
---

## When this applies

An option and an authority are already recorded for one system.

## Do this

1. Name the pilot scope.
2. Name the interoperability and performance tests.
3. Write the cutover communication.
4. Write the rollback trigger and who may invoke it.
5. Write how the deployed state will be checked.
6. Write the [change record](/resources/change-record/) and the [evidence record](/resources/evidence-record/).

A result of `unknown` means the change is not closed.

## Keep this evidence

The [change record](/resources/change-record/).

## Example

An insufficient record is "We enabled PQC."

A decision-ready record for the manufacturer's product-design archive names ML-KEM-768 as the supplier's option, cites FIPS 203 as the technical standard, records a staging pilot that tests authorised access to sample files, defines failed file retrieval as the rollback trigger, checks the supplier's deployed release record, and records the pilot result and date. It does not claim production migration is complete.

A blocked record is the product sensor's firmware verifier row: the signature and trust-root option are `unknown`, the result is `unknown`, and implementation remains blocked until the manufacturer has a supported option and can test it before design freeze.

## Limits and next page

Leave protocol configuration for the product documentation. Further technical material is the [NCCoE migration project FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html). The next record is the [change record](/resources/change-record/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST NCCoE, Migration to post-quantum cryptography FAQ, last updated 5 November 2026. [FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html)

## Related pages

- [Change record](/resources/change-record/)
- [Evidence record](/resources/evidence-record/)
- [Hard to change systems route](/routes/hard-to-change-systems/)
