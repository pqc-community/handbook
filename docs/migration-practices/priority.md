---
title: Decide what to migrate first
sidebar_label: Decide what to migrate first
description: Rank inventory rows by cryptographic job, data confidentiality period, verifier constraints, impact, lead time, dependencies, and supplier readiness, without numeric scores.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

A first-pass or maintained inventory exists and you need to decide what moves first.

## Who does what

- The **migration lead** proposes the order and keeps the [priority record](/resources/priority-record/).
- **Asset owners** supply impact, lead time, and dependencies for their rows.
- **Legal or risk** confirms data confidentiality periods and accepts the decision for rows that stay later in the order.
- The **executive sponsor** approves the order when it affects budget or other programmes.

## Do this

1. **Split each inventory row by job.** A system can need key establishment, signatures, and a verifier that cannot be updated. Give each job its own priority line, because each has a different clock.
2. **Consider each factor in words, not scores:** data confidentiality period; how many parties must change signatures together; whether a verifier can be updated later; impact if the protection fails; lead time; dependencies; and supplier readiness — the judgement from the [vendor response log](/resources/vendor-response-log/) (`complete`, `vague`, `missing`, or `concerning`) for the supplier and job concerned.
3. **Order key establishment by confidentiality period and lead time together.** Data that must stay confidential for longer is exposed to recording now and decrypting later, and a long migration lead time adds to that exposure; [Mosca's inequality](/learn/explainers/when-to-start/) adds the two. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) says harvest-now, decrypt-later threatens confidentiality rather than signatures. The EU NIS Cooperation Group [roadmap](/standards/migration-guides/eu-nis-roadmap/) (version 1.1, 11 June 2025) treats a confidentiality use case as high-risk when compromise after ten years or more would still cause significant damage.
4. **Put non-updatable verifiers ahead of verifiers that can be updated**, and decide them before a product's design freeze. Order other signature migrations by how many relying parties must coordinate and by lead time.
5. **Allow ties across jobs.** Two assets can both rank first when their jobs differ.
6. **Keep `unknown` rows on the list** under their owner; do not drop them to make the order look complete.
7. **Write the reason and the source for each decision**, and a date to review it.

## Keep this evidence

The [priority record](/resources/priority-record/): one line per asset and job, the decision, the reason in plain words, the source for any authority date or definition used, and the subsequent-review date.

## Example

An insufficient record is "We will migrate all cryptography in one programme" or a numeric risk score with no reason.

A decision-ready record, from [Protect this first](/resources/protect-this-first/), places the product-design archive first for key establishment because the company's retention policy requires 15 years of confidentiality, and places the product sensor's firmware verifier first for a non-updatable verifier because its boot ROM trust anchor cannot change after shipment. The archive's signature line and both laptop lines stay on supplier-led paths, each recorded separately so no job is dropped. Both first places stand because the jobs differ.

## Limits and next step

This rubric deliberately avoids numeric scoring; it is not a formal risk assessment. Regulated and critical systems may need the sector authority's method. Next, [plan the migration](/migration-practices/plan/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)

## Related pages

- [Priority record](/resources/priority-record/)
- [Plan the migration](/migration-practices/plan/)
- [Long-lived confidentiality](/routes/long-lived-confidentiality/)
- [When to start: Mosca's inequality](/learn/explainers/when-to-start/)
