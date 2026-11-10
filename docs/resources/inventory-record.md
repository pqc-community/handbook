---
title: First-pass inventory record
sidebar_label: Inventory record
description: A one-row template for the first pass over systems that use public-key cryptography.
displayed_sidebar: resourcesSidebar
last_reviewed: 2026-11-10
---

## When to use it

Use this record when you finish a first pass over systems that handle sensitive data or an external connection, before anyone claims the cryptography has moved.

## Minimum fields

system, owner, key-establishment algorithm, signature algorithm, software control, confidentiality period, renewal, version, dependencies, not visible to a scan, confidence

A cell you cannot fill is the word `unknown`. **Handbook practice:** `confidence` is `known` or `unknown`.

## Filled example

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health records on the vendor system | the clinic operations lead | unknown | unknown | the vendor | more than 10 years | unknown | unknown | unknown | unknown | known |

## Blank template

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [inventory-record.csv](/downloads/inventory-record.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)

## Related pages

- [Inventory](/migration-practices/inventory/)
- [Long-lived confidentiality route](/routes/long-lived-confidentiality/)
- [Protect this first](/resources/protect-this-first/)
