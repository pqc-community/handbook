---
title: Change and testing record
sidebar_label: Change record
description: One change on one system, with tests, rollback, and a deployed-state check.
displayed_sidebar: resourcesSidebar
last_reviewed: 2026-11-19
---

## When to use it

Use this record when you plan, test, and verify one change after an option has been chosen, especially when the verifier cannot be updated later.

## Minimum fields

system, change, option, authority, pilot scope, tests, rollback trigger, who can roll back, deployed-state check, result, date

Record `unknown` in any cell you cannot verify yet. Separate multiple timelines or sources in a single cell with a semicolon, and keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | test the supplier's key-establishment update in staging | ML-KEM-768 | FIPS 203, NIST, 13 August 2024 (technical standard) | Workspace 4.2 staging workspace with sample files | confirm the release setting and that an authorised test account can retrieve sample files | test account cannot retrieve the sample files | product engineering lead with supplier support | supplier release record names Workspace 4.2 and ML-KEM-768 | pilot passed; production rollout pending | 2026-10-21 |

The firmware row is blocked: implementation does not start while the option is unknown.

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | select and test a replacement before production design freeze | unknown | unknown | one pre-production sensor | not started; option unknown | unknown | product security lead | confirm the selected verifier and trust anchor before design approval | unknown | unknown |

## Blank template

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [change-record.csv](/downloads/change-record.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)

## Related pages

- [Implementation](/migration-practices/implementation/)
- [Hard to change systems route](/routes/hard-to-change-systems/)
- [Protect this first](/resources/protect-this-first/)
