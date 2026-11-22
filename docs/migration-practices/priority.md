---
title: Decide what to migrate first
sidebar_label: Decide what to migrate first
description: Rank inventory rows within each cryptographic job using one plain rule per job and fixed tiebreakers, without numeric scores.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

A first-pass or maintained inventory exists and you need to decide what moves first.

## Who does what

- The **migration lead** proposes the order and records the order and the reason on the [migration plan](/resources/records/migration-plan/).
- **Asset owners** supply impact, lead time, and dependencies for their rows.
- **Legal or risk** confirms data confidentiality periods and accepts the decision for rows that stay later in the order.
- The **executive sponsor** approves the order when it affects budget or other programmes.

## Do this

1. **Split each inventory row by job.** A system can need key establishment, signatures, and a verifier that cannot be updated. Give each job its own priority line, because each has a different clock.
2. **Take rows on the supplier-update path out of the ranking.** Commodity products that will receive post-quantum support through normal updates are tracked, not ranked: record the decision "follow supplier updates" and move on (see [Keep commodity software updated](/migration-practices/commodity-software/)).
3. **Order the remaining lines within each job**, using one rule per job:
   - **Key establishment:** longest data confidentiality period first; treat an `unknown` period as long until the data owner confirms it. Data that must stay confidential for longer is exposed to recording now and decrypting later, and a long migration lead time adds to that exposure; [Mosca's inequality](/learn/explainers/when-to-start/) adds the two. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) says harvest-now, decrypt-later threatens confidentiality rather than signatures. The EU NIS Cooperation Group [roadmap](/standards/migration-guides/eu-nis-roadmap/) (version 1.1, 11 June 2025) treats a confidentiality use case as high-risk, for the Member States it addresses, when compromise after ten years or more would still cause significant damage.
   - **Verifiers that cannot be updated:** earliest design freeze or production date first. Decide each one before that date.
   - **Other signatures:** most relying parties that must change together first, because coordination sets the lead time. A signing key whose signatures a non-updatable verifier checks moves with that verifier's line, because the signer must switch to the scheme the verifier accepts.
4. **Break ties within a job in this order:** the earliest fixed date (design freeze, contract renewal, or end of support); then the longest lead time; then the greater impact if the protection fails; then systems exposed to other organisations or the internet before internal ones. These tiebreakers are this handbook's rule of thumb; replace them with your sector authority's method where one exists.
5. **Allow ties across jobs.** Two assets can both rank first when their jobs differ. Supplier readiness — the judgement from the [vendor response log](/resources/records/vendor-response-log/) (`complete`, `vague`, `missing`, or `concerning`) — does not change the order; it changes when work can start. A lower-ranked line with a `complete` answer can start in parallel, and a higher-ranked line with a `missing` answer goes to [Work with suppliers](/migration-practices/suppliers/) for escalation.
6. **Keep `unknown` rows on the list** under their owner; do not drop them to make the order look complete.
7. **Write the order, the reason, and its source on the plan row**, and a date to review it.

## Keep this evidence

The first columns of the [migration plan](/resources/records/migration-plan/): one row per asset and job, with the owner, its place in the order, the reason in plain words with its source, supplier readiness, and the subsequent-review date.

## Example

An insufficient record is "We will migrate all cryptography in one programme" or a numeric risk score with no reason.

A decision-ready record, from [Protect this first](/resources/examples/protect-this-first/), places the product-design archive first for key establishment because the company's retention policy requires 15 years of confidentiality, and places the product sensor's firmware verifier first for a non-updatable verifier because its boot ROM trust anchor cannot change after shipment. The key that signs the sensor's firmware comes first for signatures and moves with the verifier line. The archive's signature line and the laptops' combined line stay on supplier-led paths; the archive's two jobs are recorded separately so neither is dropped, and the laptops share one row because both jobs follow the same supplier updates. Both first places stand because the jobs differ.

## Limits and next step

This rubric deliberately avoids numeric scoring; it is not a formal risk assessment. Regulated and critical systems may need the sector authority's method. Next, [plan the migration](/migration-practices/plan/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)

## Related pages

- [Migration plan](/resources/records/migration-plan/)
- [Plan the migration](/migration-practices/plan/)
- [Long-lived confidentiality](/routes/long-lived-confidentiality/)
- [When to start: Mosca's inequality](/learn/explainers/when-to-start/)
