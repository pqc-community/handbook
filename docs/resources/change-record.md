---
title: Change and testing record
sidebar_label: Change record
description: One change on one system, with tests, rollback, and a deployed-state check.
displayed_sidebar: resourcesSidebar
last_reviewed: 2026-11-10
---

## When to use it

Use this record when you plan, test, and verify one change after an option has been chosen, especially when the verifier cannot be updated later.

## Minimum fields

system, change, option, authority, pilot scope, tests, rollback trigger, who can roll back, deployed-state check, result, date

A cell you cannot fill is the word `unknown`.

**Handbook practice:** Where the row has a dependencies cell, every dependency goes in that cell, separated by a semicolon. A shared component does not get its own system row. Where the row records a timeline or a source, more than one may be named in that cell, separated by a semicolon. Keys, secrets, and personal data stay out of the file. Name the system.

## Filled example

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | Adopt the supplier's key-establishment construction | ML-KEM-768 | NIST IR 8547, October 2026 | One clinic site | Key establishment on the health-records channel | Clients cannot connect after the change | the clinic operations lead | The deployed configuration matches the supplier letter | Pilot passed | 2026-08-14 |

The firmware row is blocked: implementation does not start while the option is unknown.

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Clinic field device firmware signature check | replace trust anchor before next deployment | unknown | unknown | one spare device in the workshop | signature verification on sample firmware | failed verification on pilot device | the clinic operations lead | compare flashed firmware hash to signed manifest | unknown | unknown |

## Blank template

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [change-record.csv](/downloads/change-record.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026. [NIST IR 8547](https://doi.org/10.6028/NIST.IR.8547)

## Related pages

- [Implementation](/migration-practices/implementation/)
- [Hard to change systems route](/routes/hard-to-change-systems/)
- [Protect this first](/resources/protect-this-first/)
