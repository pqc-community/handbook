---
title: Inventory record
sidebar_label: Inventory record
description: One row per system that uses public-key cryptography, for the first pass and for the maintained inventory that follows.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this record when completing a first-pass inventory of systems that handle sensitive data or external connections, before claiming any system has migrated.

## Minimum fields

system, owner, key-establishment algorithm, signature algorithm, software control, confidentiality period, renewal, version, dependencies, not visible to a scan, how found, confidence

Record `unknown` in any cell you cannot verify yet. Where a system uses key establishment both in transit and for stored data, or is part-way through a change, label each value in the cell and separate them with semicolons, for example "in transit: X25519MLKEM768 in staging, X25519 in production; stored files: unknown". Set `confidence` to `known` only when every applicable algorithm cell, and every labelled value in it, names a specific algorithm or scheme, such as X25519MLKEM768 or ECDSA P-256 (use `not applicable` for a job the system does not perform); otherwise leave it as `unknown`. In `how found`, name the discovery methods used for the row, such as an owner interview, a certificate export, a scan, or a supplier answer, so a reviewer can judge coverage.

List every dependency inside the `dependencies` cell separated by a semicolon rather than giving a shared component its own system row. For a signing key, include where the key is held, such as the hardware security module, once known. Separate multiple timelines or sources in a single cell with a semicolon. Keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | how found | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | product engineering lead | unknown | unknown | workspace supplier | 15 years (company policy) | unknown | Workspace 4.1 (fictional) | workspace supplier's hosting service | supplier-hosted cryptography | asset owner; supplier questions sent | unknown |

## Blank template

| system | owner | key-establishment algorithm | signature algorithm | software control | confidentiality period | renewal | version | dependencies | not visible to a scan | how found | confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [inventory-record.csv](/downloads/inventory-record.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)

## Related pages

- [Inventory the cryptography](/migration-practices/inventory/)
- [Long-lived confidentiality route](/routes/long-lived-confidentiality/)
- [Protect this first](/resources/protect-this-first/)
