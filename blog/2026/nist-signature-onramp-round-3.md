---
title: NIST advances nine signature candidates
description: NIST IR 8610 moves nine candidates in its additional post-quantum signature process to a third round; FIPS 204 and FIPS 205 remain the standards to plan with.
date: 2026-05-14
authors: [pqc_handbook]
tags: [standards-and-protocols, nist, signatures]
---

On May 14, 2026, the US National Institute of Standards and Technology (NIST) published [NIST IR 8610](https://csrc.nist.gov/pubs/ir/8610/final), its status report on the second round of the process for additional post-quantum digital signature schemes, and advanced nine candidates to a third round. It is status news for anyone tracking signature standards: none of the candidates is a standard, and the published signature standards remain the ones to plan with.

{/* truncate */}

## What NIST published

NIST opened the additional signatures process, sometimes called the on-ramp, to find general-purpose signature schemes that are not based on structured lattices, particularly ones with short signatures and fast verification. Its first-round report, [NIST IR 8528](/standards/post-quantum/nist-ir-8528/) of October 24, 2024, advanced 14 candidates to the second round.

IR 8610, summarized on the handbook's [NIST IR 8610 page](/standards/post-quantum/nist-ir-8610/), describes the evaluation criteria and selection process for that second round. Based on public feedback and internal reviews, NIST selected nine candidates for the third round: FAEST, HAWK, MAYO, MQOM, QR-UOV, SDitH, SNOVA, SQIsign and UOV. NIST says that any scheme eventually selected would augment its existing signature standards, FIPS 204, FIPS 205, FIPS 186-5 and SP 800-208, rather than replace them. The publication page gives no date for the end of the third round.

## What it does not change

IR 8610 is an informative report and imposes no requirements. A third-round candidate is still under evaluation, so it is not an approved algorithm and cannot be specified as one in a purchase or a design.

## What it means for your plan

Plan signature migration with the published standards: ML-DSA in [FIPS 204](/standards/post-quantum/fips-204/) and SLH-DSA in [FIPS 205](/standards/post-quantum/fips-205/), with the stateful hash-based schemes in SP 800-208 where they fit. Waiting for a later standard would delay work whose lead time is long, because signatures depend on certificate authorities, relying parties and the public key infrastructure that connects them, and devices with fixed verifiers need a decision before design freeze.

The third round is better read as a reason to keep systems able to change algorithm again. If a scheme with smaller signatures is standardized later, systems whose algorithm choice sits in configuration rather than code will be able to adopt it without a redesign. [Keep the ability to change again](/plan/program/changing-algorithms-again/) explains how to build that into a program, and the [register](/templates/records/register/) is where to record which signature algorithm each system uses today.

## Sources

- NIST, Status Report on the Second Round of the Additional Digital Signature Schemes for the NIST Post-Quantum Cryptography Standardization Process, NIST IR 8610, May 14, 2026. [Publication page (HTML)](https://csrc.nist.gov/pubs/ir/8610/final), [Report (PDF)](https://doi.org/10.6028/NIST.IR.8610)
- NIST, Status Report on the First Round of the Additional Digital Signature Schemes for the NIST Post-Quantum Cryptography Standardization Process, NIST IR 8528, October 24, 2024. [Publication page (HTML)](https://csrc.nist.gov/pubs/ir/8528/final)

## Related pages

- [Post-quantum cryptography standards](/standards/post-quantum/)
- [Standardization](/learn/standardization/)
