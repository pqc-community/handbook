---
title: Vendor response log
sidebar_label: Vendor response log
description: One row per supplier answer, with judgement, follow-up, and the decision it supports.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this log when you prepare a supplier question, receive an answer, and need a decision-ready row before procurement or deployment work proceeds.

The [CISA, NSA, and NIST fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf), as of 17 August 2023, is the short official starting point for what to ask. Group your question list by the five LATICE phases from the [Post-quantum questions to ask your vendors](https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors) guide, updated 5 November 2026.

**Locate**

- Which products in the estate use public-key cryptography?
- Which upstream dependencies affect each cryptographic component?

**Assess**

- What is the data confidentiality period for each asset?
- What operational constraints limit how quickly each system can change?

**Triage**

- Which assets should move first given impact and supplier readiness?
- Which answers are still vague, missing, or concerning?

**Implement**

- What post-quantum key-establishment construction will ship, and on what date?
- What interoperability and performance tests will run before production?

**Communicate and educate**

- Who receives the cutover communication and the rollback plan?
- When is the subsequent review of this supplier answer?

## Minimum fields

supplier, product and version, question, answer, date, source, judgement, follow-up, decision

Record `unknown` in any cell you cannot verify yet. Set `judgement` to `complete`, `vague`, `missing`, or `concerning`, and use a separate row for each product, version, and cryptographic job. Separate multiple timelines or sources in a single cell with a semicolon, and keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fictional design-platform supplier | Workspace 4.2 (fictional) | Which key-establishment construction and release date apply to the hosted archive, and does the release include signatures? | The letter says Workspace 4.2 is scheduled for 2026-10-01, uses ML-KEM-768 for the hosted key-establishment service, and does not include post-quantum signing changes. | 2026-09-04 | Fictional supplier letter, 2026-09-04 | complete for key establishment | written signature-support plan due 2026-12-01 | pilot Workspace 4.2 for archive key establishment; track signatures separately |

## Blank template

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [vendor-response-log.csv](/downloads/vendor-response-log.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- ASD and ACSC, with CISA and NSA, Post-quantum questions to ask your vendors, updated 5 November 2026. [Vendor guide](https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors)
- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)

## Related pages

- [Get each supplier's plan](/migration-practices/vendor-plan/)
- [Ask a supplier](/routes/ask-a-supplier/)
- [Protect this first](/resources/protect-this-first/)
