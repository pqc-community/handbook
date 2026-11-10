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

## Filled example

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Clinic field device firmware signature check | replace trust anchor before next deployment | unknown | UK NCSC timelines, modified 3 August 2026 | one spare device in the workshop | signature verification on sample firmware | failed verification on pilot device | the clinic operations lead | compare flashed firmware hash to signed manifest | unknown | unknown |

## Blank template

| system | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [change-record.csv](/downloads/change-record.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- UK NCSC, Timelines for migration to post-quantum cryptography, modified 3 August 2026. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Implementation](/migration-practices/implementation/)
- [Hard to change systems route](/routes/hard-to-change-systems/)
- [Protect this first](/resources/protect-this-first/)
