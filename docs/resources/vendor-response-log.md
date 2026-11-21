---
title: Vendor response log
sidebar_label: Vendor response log
description: One row per supplier answer, with judgement, follow-up, and the decision it supports.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this log when you ask an existing or prospective supplier about post-quantum migration, receive an answer, and need a decision-ready row before procurement or deployment work proceeds. [Work with suppliers](/migration-practices/suppliers/) explains how to ask, judge, and follow up.

This is the handbook's single question set; ask about a named product and version, and ask the key-establishment and signature questions separately. The [vendor questions guide](/standards/migration-guides/vendor-questions/) summarised in Standards gives a fuller set.

**About the product**

- Which public-key algorithms does the product use today, for key establishment and for signatures, and where (connections, stored data, updates, firmware)?
- Are any keys or trust anchors fixed in hardware or firmware so that they cannot be replaced in the field?

**Key establishment**

- Which standards-based post-quantum or hybrid algorithm or scheme will the product support, from which release and on what date?
- Does it apply to every connection and to stored-data key wrapping, or only to some?

**Signatures and updates**

- When will the product sign or verify with a post-quantum algorithm, for updates, certificates, or firmware?
- How will updates that change the algorithm be delivered and validated?

**Evidence and support**

- What evidence will you provide: release notes, test results, or module validation?
- When does security support for our current release end?

## Minimum fields

supplier, product and version, question, answer, date, source, judgement, follow-up, decision

Record `unknown` in any cell you cannot verify yet. Set `judgement` to `complete`, `vague`, `missing`, or `concerning`, and use a separate row for each product, version, and cryptographic job. Separate multiple timelines or sources in a single cell with a semicolon, and keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fictional design-platform supplier | Workspace 4.2 (fictional) | Which key-establishment algorithm or scheme, and which release date, apply to connections to the hosted archive? | The letter says Workspace 4.2 is scheduled for 2026-10-01 and uses hybrid key establishment (X25519MLKEM768) for TLS connections to the hosted workspace. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | complete | none for this question | pilot Workspace 4.2 for archive key establishment |
| Fictional design-platform supplier | Workspace 4.2 (fictional) | When will the hosted archive sign or verify with a post-quantum algorithm? | The letter says Workspace 4.2 does not include post-quantum signing changes and gives no date. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | vague | written signature-support plan due 2026-12-01 | track signatures as a separate plan line |
| Fictional design-platform supplier | Workspace 4.1 and 4.2 (fictional) | Which algorithm or scheme protects the key wrapping of stored files, and when does support for Workspace 4.1 end? | The letter does not answer either question. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | missing | written answer due 2026-12-01 | do not count stored-data protection as migrated |

## Blank template

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [vendor-response-log.csv](/downloads/vendor-response-log.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)

## Related pages

- [Work with suppliers](/migration-practices/suppliers/)
- [Ask a supplier](/routes/ask-a-supplier/)
- [Protect this first](/resources/protect-this-first/)
