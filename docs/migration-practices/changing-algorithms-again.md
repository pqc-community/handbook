---
title: Change algorithm again after this migration
sidebar_label: Changing algorithms again
sidebar_position: 6
displayed_sidebar: migrationPracticesSidebar
last_reviewed: 2026-11-10
description: Check six capabilities that show whether the estate can change algorithm again after the current migration.
---

## When this applies

You have chosen an option for at least one system, or you are recording whether a later algorithm change remains possible.

## Do this

Confirm each capability before you treat the current migration as finished for that system:

1. The configuration can be changed without replacing the whole product.
2. An owner is named for the next algorithm change.
3. Dependencies are recorded in the inventory.
4. Tests exist that would show whether a new construction works in your environment.
5. A change window exists, with a named approver.
6. A deprecation path is written for the construction in use now.

**Handbook practice:** A capability counts only when its evidence exists: a configuration change that has been shown, a named owner, a dependency row in the inventory, a test that has been run, a change window with a named approver, and a written deprecation path for the construction in use now.

**Authority recommendation:** The PQC Migration Handbook (AIVD, CWI, and TNO, December 2024, Netherlands) says stakeholders should remain cryptographically agile so they can adapt to new developments.

## Keep this evidence

A named owner, the inventory rows for dependencies, the written deprecation path, and the test plan.

## Example

An insufficient record is "We picked an algorithm, so the programme is closed."

A decision-ready record names the application owner, lists the TLS terminator and the HSM as dependencies, points to the regression test pack, records the quarterly change window, and states that hybrid key establishment is temporary until ML-KEM-only is deployed.

## Limits and next page

This page does not set the subsequent-review date. The next page is [Subsequent review](/migration-practices/subsequent-review/).

## Sources

- AIVD, CWI, and TNO, The PQC Migration Handbook, December 2024. [Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Subsequent review](./subsequent-review.md)
- [Implementation](./implementation.md)
- [Inventory](./inventory.md)
- [Choosing an option](../algorithm-protocol-options/choosing.md)
