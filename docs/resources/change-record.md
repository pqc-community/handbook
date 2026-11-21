---
title: Change and testing record
sidebar_label: Change record
description: One change on one system, with tests, rollback, and a deployed-state check.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this record when you plan, test, and verify one change after an option has been chosen, especially when the verifier cannot be updated later.

## Minimum fields

system, change, option, authority, pilot scope, tests, rollback trigger, who can roll back, deployed-state check, result, date

Record `unknown` in any cell you cannot verify yet. Separate multiple timelines or sources in a single cell with a semicolon, and keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | test the supplier's key-establishment update in staging | hybrid X25519MLKEM768 (ML-KEM-768 with X25519) for TLS connections | FIPS 203, NIST, 13 August 2024 (technical standard for ML-KEM) | Workspace 4.2 staging workspace with sample files and one test client | the test client connects and the supplier's connection log shows X25519MLKEM768 negotiated; an authorised test account retrieves the sample files | sample retrieval fails, or the connection log shows classical-only key establishment | product engineering lead with supplier support | staging: connection log inspected on 2026-10-21; production: inspect production connection logs after rollout | staging pilot passed; production rollout pending | 2026-10-21 |

The firmware row is blocked: implementation does not start while the option is unknown.

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | select and test a replacement before production design freeze | unknown | unknown | one pre-production sensor | not started; option unknown | not applicable (boot ROM cannot change after shipment) | not applicable | confirm the selected verifier and trust anchor before design approval | unknown | unknown |

## Blank template

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [change-record.csv](/downloads/change-record.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)

## Related pages

- [Make and verify one change](/migration-practices/implementation/)
- [Hard to change systems route](/routes/hard-to-change-systems/)
- [Protect this first](/resources/protect-this-first/)
