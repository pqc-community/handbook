---
title: Vendor response log
sidebar_label: Vendor response log
description: One row per supplier answer, with judgement, follow-up, and the decision it supports.
displayed_sidebar: resourcesSidebar
last_reviewed: 2026-11-10
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

A cell you cannot fill is the word `unknown`. **Handbook practice:** `judgement` is `complete`, `vague`, `missing`, or `concerning`.

**Handbook practice:** Where the row has a dependencies cell, every dependency goes in that cell, separated by a semicolon. A shared component does not get its own system row. Where the row records a timeline or a source, more than one may be named in that cell, separated by a semicolon. Keys, secrets, and personal data stay out of the file. Name the system.

**Handbook practice:** Use a separate row for each product, version, and cryptographic job.

## Filled example

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Clinic software supplier | named in the supplier letter | What key-establishment construction and release date apply to the health-records platform? | The letter names the product and version, names ML-KEM-768, names the release date, and states that signatures are not in that release. | 2026-08-14 | supplier letter | complete | none | record the key-establishment date and open a signatures follow-up |

## Blank template

| supplier | product and version | question | answer | date | source | judgement | follow-up | decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [vendor-response-log.csv](/downloads/vendor-response-log.csv).

Keep a real inventory off a public ticket and off an unlocked shared drive, and store it with the same care as the asset list it describes.

## Sources

- ASD and ACSC, with CISA and NSA, Post-quantum questions to ask your vendors, updated 5 November 2026. [Vendor guide](https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors)
- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)

## Related pages

- [Vendor plan](/migration-practices/vendor-plan/)
- [Ask a supplier](/routes/ask-a-supplier/)
- [Protect this first](/resources/protect-this-first/)
