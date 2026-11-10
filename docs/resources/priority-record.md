---
title: Priority record
sidebar_label: Priority record
description: One row per asset that records why it is first and when it will be reviewed again.
displayed_sidebar: resourcesSidebar
last_reviewed: 2026-11-10
---

## When to use it

Use this record after an inventory exists and before you commit budget or procurement action to a specific asset.

## Minimum fields

asset, confidentiality period, job, impact, lead time, dependencies, supplier readiness, decision, reason, source, subsequent review

A cell you cannot fill is the word `unknown`. **Handbook practice:** `job` is `key establishment`, `signatures`, or `non-updatable verifier`.

## Filled example

| asset | confidentiality period | job | impact | lead time | dependencies | supplier readiness | decision | reason | source | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | more than 10 years | key establishment | unknown | unknown | unknown | unknown | first for key establishment | confidentiality period longer than 10 years | NIST IR 8547, October 2026 | 2026-12-01 |

## Blank template

| asset | confidentiality period | job | impact | lead time | dependencies | supplier readiness | decision | reason | source | subsequent review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [priority-record.csv](/downloads/priority-record.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Priority](/migration-practices/priority/)
- [Inventory record](/resources/inventory-record/)
- [Protect this first](/resources/protect-this-first/)
