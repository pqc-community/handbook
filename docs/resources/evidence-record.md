---
title: Evidence record
sidebar_label: Evidence record
description: Links a claim about the migration to the record and source that support it.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this record when someone asks what evidence supports a statement that a migration step is complete. [Make and verify one change](/migration-practices/implementation/) produces it alongside the change record.

## Minimum fields

claim, record, source, date, owner, subsequent review

Record `unknown` in any cell you cannot verify yet. Separate multiple timelines or sources in a single cell with a semicolon, and keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| claim | record | source | date | owner | subsequent review |
| --- | --- | --- | --- | --- | --- |
| The Workspace 4.2 staging pilot passed; production rollout remains pending | change record for the product-design archive | fictional supplier letter, 2026-09-04; FIPS 203, 13 August 2024 | 2026-10-21 | product engineering lead | 2026-12-01 |

## Blank template

| claim | record | source | date | owner | subsequent review |
| --- | --- | --- | --- | --- | --- |

Download a blank CSV: [evidence-record.csv](/downloads/evidence-record.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)

## Related pages

- [Make and verify one change](/migration-practices/implementation/)
- [Organisation-wide route](/routes/organisation-wide/)
- [Review and report](/migration-practices/subsequent-review/)
