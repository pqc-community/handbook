---
title: Change record
search_title: Change and testing record template
sidebar_label: Change record
description: One change to one system and job, with tests, rollback, a deployed-state check, and the evidence for what has and has not been shown.
displayed_sidebar: templatesSidebar
---

## When to use it

Use this record when you plan, test, and verify one change after an option has been chosen, especially when the verifier cannot be updated later.

## Minimum fields

system, job, change, option, authority, pilot scope, tests, rollback trigger, who can roll back, deployed-state check, result, evidence, owner, date

Use one record per change to one system and job. Copy `system` and `job` from the [register](/templates/records/register/) row the change delivers, with `job` set to `key establishment`, `signatures`, or `non-updatable verifier` and any qualifier the register uses. Write `option` as the algorithm or scheme and its form; if it relies on a specification still at Internet-Draft, add "provisional: Internet-Draft". Write `result` so that it says exactly what has been shown and what has not, such as "staging passed; production not migrated"; where no supported option exists yet, write "blocked" with the date by which it has to be resolved. Set `date` to the date the result was last recorded. In `evidence`, cite the test output, log, or inspection that supports the result, not the standard the option follows. This is the record to show when someone asks what supports a claim that a change is complete.

Record `unknown` in any cell you cannot verify yet. Separate multiple timelines or sources in a single cell with a semicolon, and keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| system | job | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | evidence | owner | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product-design archive in supplier-hosted workspace | key establishment | test the supplier's key-establishment update in staging | hybrid X25519MLKEM768 (ML-KEM-768 with X25519) for TLS connections | FIPS 203 (NIST, 13 August 2024; for US federal systems) for ML-KEM; UK NCSC TLS guidance (15 October 2026; for system administrators) for the hybrid form; hybrid because the supplier ships it | Workspace 4.2 staging workspace with sample files and one test client | the test client connects and its handshake log shows X25519MLKEM768 negotiated, confirmed by the supplier's connection log; an authorised test account retrieves the sample files | sample retrieval fails, or either log shows classical-only key establishment | product engineering lead with supplier support | staging: client handshake log inspected on 2026-10-21; production: repeat the client check against the production workspace after rollout | staging pilot passed with X25519MLKEM768 negotiated; production rollout pending, so production is not migrated | test client handshake log inspected 2026-10-21, with the supplier connection log as corroboration (fictional); fictional supplier letter, 2026-09-04 | product engineering lead | 2026-10-21 |

The firmware row is blocked: implementation does not start while the option is unknown.

| system | job | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | evidence | owner | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | non-updatable verifier | select and test a replacement before production design freeze | unknown | unknown | one pre-production sensor | not started; once an option exists: signature and key sizes against storage, verification time against boot time | not applicable (boot ROM cannot change after shipment) | not applicable | confirm the selected verifier and trust anchor before design approval | blocked: no supported option; resolve before production design freeze on 2027-06-30 (fictional) | none yet | product security lead | 2026-11-10 |

## Blank template

| system | job | change | option | authority | pilot scope | tests | rollback trigger | who can roll back | deployed-state check | result | evidence | owner | date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [change-record.csv](/downloads/change-record.csv).

Keep real change records off a public ticket and off an unlocked shared drive: test results and rollback triggers describe how your systems are protected.

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, published 13 August 2024. [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)
- UK National Cyber Security Centre, Using TLS to protect data, version 1.2, published 15 October 2026. [NCSC TLS guidance](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data)

## Related pages

- [Make and verify one change](/plan/programme/implementation/)
- [Programme](/plan/programme/)
- [Protect this first](/templates/examples/protect-this-first/)
