---
title: First-pass inventory record
sidebar_label: Inventory record
description: A one-row template for the first pass over systems that use public-key cryptography.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this record when completing a first-pass inventory of systems that handle sensitive data or external connections, before claiming any system has migrated.

## Minimum fields

system, owner, key-establishment algorithm, signature algorithm, software control, confidentiality period, renewal, version, dependencies, not visible to a scan, confidence

Record `unknown` in any cell you cannot verify yet. Set `confidence` to `known` only when both the key-establishment algorithm and the signature algorithm name a construction; otherwise leave it as `unknown`.

List every dependency inside the `dependencies` cell separated by a semicolon rather than giving a shared component its own system row. Separate multiple timelines or sources in a single cell with a semicolon. Keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | product engineering lead | unknown | unknown | workspace supplier | 15 years (company policy) | unknown | Workspace 4.1 (fictional) | workspace supplier's hosting service | supplier-hosted cryptography | unknown |

## Blank template

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [inventory-record.csv](/downloads/inventory-record.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)

## Related pages

- [Inventory the cryptography](/migration-practices/inventory/)
- [Long-lived confidentiality route](/routes/long-lived-confidentiality/)
- [Protect this first](/resources/protect-this-first/)
