---
title: Plan, test, and verify one change
sidebar_label: Implementation
description: Pilot, test, roll out, roll back, and verify one system after an option has been chosen.
displayed_sidebar: migrationPracticesSidebar
last_reviewed: 2026-11-10
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

## Keep this evidence

The [change record](/resources/change-record/).

## Example

An insufficient record is "We enabled PQC."

A decision-ready record names one channel, the authority, the rollback owner, and the check that the deployed configuration matches the record.

## Limits and next page

This page is not a protocol specification. Further technical material is the [NCCoE migration project FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html). The next page is the [change record](/resources/change-record/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)
- NIST NCCoE, Migration to post-quantum cryptography FAQ, last updated 5 November 2026. [FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html)

## Related pages

- [Change record](/resources/change-record/)
- [Evidence record](/resources/evidence-record/)
- [Hard to change systems route](/routes/hard-to-change-systems/)
