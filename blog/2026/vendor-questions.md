---
title: ASD, CISA and NSA publish vendor questions
description: Joint Australian and US guidance of July 2026 gives buyers questions to assess a vendor's post-quantum readiness at procurement, renewal and review.
date: 2026-07-16
authors: [pqc_handbook]
tags: [authority-updates, australia, us-federal]
---

On 16 July 2026 the Australian Signals Directorate's Australian Cyber Security Centre (ASD's ACSC), in partnership with the US Cybersecurity and Infrastructure Security Agency (CISA) and National Security Agency (NSA), published [Post-quantum questions to ask your vendors](https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors). It gives buyers practical questions for judging a vendor's post-quantum readiness, for audiences ranging from small businesses to government.

{/* truncate */}

## What was published

The guidance, summarised on the handbook's [vendor questions page](/standards/migration-guides/vendor-questions/), is written for use during procurement, contract renewal and ongoing vendor assurance. Its stated audience is small and medium businesses, large organisations and critical infrastructure, and government, and it names cyber security leaders, procurement and vendor management teams, and technical stakeholders as its readers.

Its questions cover which public-key cryptography a product uses, how standards-based post-quantum updates will be delivered and validated, whether the product supports cryptographic agility, and whether embedded or hardware-bound keys restrict updates in the field. Rather than naming algorithms, it asks vendors to use those approved by the appropriate authority for the buyer's organisation, which lets buyers in different jurisdictions apply the same questions.

It is advisory guidance, not a contractual or regulatory requirement, and it complements ASD's earlier planning publication.

## Why it matters

Most organisations will receive post-quantum cryptography through products and services they buy, so supplier answers decide much of their migration. A shared question set from three national agencies gives procurement teams wording they can point to, and gives suppliers one set of questions to prepare for rather than many variants.

## What it means for your plan

The questions line up with the handbook's single question set in [Work with suppliers](/plan/programme/suppliers/), which asks about key establishment and signatures separately, for a named product and version, with a date by which you need the answer. Asking per job matters because a product may already offer post-quantum key establishment while its update signing and certificates remain classical. Judge each answer against the standards it cites, such as [FIPS 203](/standards/post-quantum/fips-203/) for key establishment and FIPS 204 or FIPS 205 for signatures, and record it on the [register](/templates/records/register/).

The question about hardware-bound keys deserves particular weight for devices whose verifier cannot be updated, because there the answer decides whether the device can ever move to post-quantum signatures; the [firmware and secure boot card](/technology-options/firmware-secure-boot/) explains why. When you buy or renew, carry the same points into the contract and track the supplier's commitment on the [purchase wording](/templates/records/purchase-wording/) record. If you follow only the core actions, use the questions at renewal rather than sending them to every supplier of a supported commodity product.

## Sources

- ASD's ACSC, in partnership with CISA and NSA, Post-quantum questions to ask your vendors, 16 July 2026. [ASD publication page (HTML)](https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors)

## Related pages

- [Post-quantum migration guides](/standards/migration-guides/)
- [Wording for purchases and renewals](/plan/core-actions/#wording-for-purchases-and-renewals)
