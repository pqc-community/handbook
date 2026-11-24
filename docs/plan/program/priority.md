---
title: Decide what to migrate first
search_title: Decide what to migrate first to post-quantum
sidebar_label: Decide what to migrate first
description: Rank register rows within each cryptographic job using one plain rule per job and fixed tiebreakers, without numeric scores.
displayed_sidebar: journeySidebar
---

## When this applies

A first-pass or maintained inventory exists on the register and you need to decide what moves first.

## Who does what

- The **migration lead** proposes the order and records the order and the reason on the [register](/templates/records/register/).
- **System owners** supply impact, lead time, and dependencies for their rows.
- **Legal or risk** confirms data confidentiality periods and accepts the decision for rows that stay later in the order.
- The **executive sponsor** approves the order when it affects budget or other programs.

## Do this

1. **Check that each system has a row per job.** A system can need key establishment, signatures, and a verifier that cannot be updated. Give each job its own row, because each has a different clock.
2. **Take supplied products out of the ranking.** Commodity products that will receive post-quantum support through normal updates follow the [core actions](/plan/core-actions/): record their order as `tracked, not ranked (core actions)` and move on. A program row whose change only its supplier can make, such as a hosted service's signatures, is recorded as `tracked, not ranked (supplier-led)`.
3. **Order the remaining rows within each job**, using one rule per job:
   - **Key establishment:** longest data confidentiality period first; treat an `unknown` period as long until the data owner confirms it. Data that must stay confidential for longer is exposed to recording now and decrypting later, and a long migration lead time adds to that exposure; [Mosca's inequality](/learn/explainers/when-to-start/) adds the two. [NIST IR 8547](/standards/transition-and-key-management/nist-ir-8547/) (October 2026) says harvest-now, decrypt-later threatens confidentiality rather than signatures. The EU NIS Cooperation Group [roadmap](/standards/migration-guides/eu-nis-roadmap/) (version 1.1, June 11, 2025) treats a confidentiality use case as high-risk, for the Member States it addresses, when compromise after ten years or more would still cause significant damage.
   - **Verifiers that cannot be updated:** earliest design freeze or production date first. Decide each one before that date.
   - **Other signatures:** most relying parties that must change together first, because coordination sets the lead time. A signing key whose signatures a non-updatable verifier checks moves with that verifier's row, because the signer must switch to the scheme the verifier accepts.
4. **Break ties within a job in this order:** the earliest fixed date (design freeze, contract renewal, or end of support); then the longest lead time; then the greater impact if the protection fails; then systems exposed to other organizations or the internet before internal ones. These tiebreakers are this handbook's rule of thumb; replace them with your sector authority's method where one exists.
5. **Allow ties across jobs.** Two systems can both rank first when their jobs differ. Supplier readiness — the judgment of the supplier's answer on the register (complete, vague, missing, or concerning) — does not change the order; it changes when work can start. A lower-ranked row with a complete answer can start in parallel, and a higher-ranked row with a missing answer goes to [Work with suppliers](/plan/program/suppliers/) for escalation.
6. **Keep unknown rows on the list** under their owner; do not drop them to make the order look complete.
7. **Write the order on the register row**, with the reason and its source in `why it is here`, and set its next review.

## Keep this evidence

The [register](/templates/records/register/): one row per system and job, with the owner, its place in the order, the reason in plain words with its source, the supplier's answer and its judgment, and the next review date.

## Example

An insufficient record is "We will migrate all cryptography in one program" or a numeric risk score with no reason.

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/), places the product-design archive first for key establishment because the company's retention policy requires 15 years of confidentiality, and places the sensor's firmware verifier first among verifiers that cannot be updated, because its boot ROM trust anchor cannot change after shipment. The key that signs the sensor's firmware comes first for signatures and moves with the verifier row. The archive's signature row is tracked, not ranked, because it follows the supplier, and the laptops' combined row is tracked, not ranked, as part of the core actions. The archive's jobs are recorded separately so neither is dropped, and the laptops share one row because both jobs follow the same supplier updates. Several rows can rank first because their jobs differ.

## Limits and next step

This rubric deliberately avoids numeric scoring and is not a formal risk assessment, so regulated and critical systems may need the sector authority's method. Next, [set dates and milestones](/plan/program/dates/).

## Sources

- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547, October 2026. [NIST IR 8547 (PDF)](https://doi.org/10.6028/NIST.IR.8547)
- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, June 11, 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)

## Related pages

- [Register](/templates/records/register/)
- [Set dates and milestones](/plan/program/dates/)
- [Program](/plan/program/)
- [When to start: Mosca's inequality](/learn/explainers/when-to-start/)
