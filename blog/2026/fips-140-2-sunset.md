---
title: Last day for FIPS 140-2 modules in new systems
description: NIST's CMVP sets 21 September 2026 as the last day active FIPS 140-2 modules can be used for new systems, before their certificates move to the Historical list.
date: 2026-09-21
authors: [pqc_handbook]
tags: [authority-updates, nist, us-federal]
---

Today, 21 September 2026, is the last day on which, according to NIST's [Cryptographic Module Validation Program](https://csrc.nist.gov/projects/cryptographic-module-validation-program) (CMVP), active FIPS 140-2 validated modules can be used for new systems. After it their certificates move to the Historical list, which matters to US and Canadian federal agencies and to anyone whose contracts require [FIPS 140](/standards/modules-protocols-certificates/fips-140-3/) validation.

{/* truncate */}

## What changes

The CMVP, which NIST runs jointly with the Canadian Centre for Cyber Security, tests cryptographic modules against FIPS. FIPS 140-3 took effect on 22 September 2019, and since then FIPS 140-2 validations have been running down to a fixed sunset. The CMVP page says FIPS 140-2 modules can be accepted by federal agencies of both countries for new systems until today; after this date their certificates move to the Historical list, and agencies may continue to use them only for existing systems. NIST's FIPS 140-3 transition page gives 22 September 2026 for the move itself, and it adds that CMVP still supports the purchase and use of Historical modules for existing systems.

The change does not withdraw anything already deployed, and it is not a post-quantum deadline. It is a validation rule for agencies and others who rely on FIPS 140: NIST's FIPS compliance FAQ describes FIPS as standards for federal computer systems that private-sector organisations use voluntarily, although companies with government contracts must comply with FISMA, which mandates the use of FIPS.

## Why it matters for post-quantum migration

New purchases that need FIPS validation will now rest on FIPS 140-3 certificates, and that makes renewal a natural point to ask what a module's certificate actually covers. Validation has two layers: algorithm implementations, including ML-KEM ([FIPS 203](/standards/post-quantum/fips-203/)) and ML-DSA ([FIPS 204](/standards/post-quantum/fips-204/)), are tested under the Cryptographic Algorithm Validation Program, and the module as a whole under the CMVP. A claim that a product is FIPS 140 validated therefore names a module, not a migration, and says nothing about post-quantum support on its own.

Two further points shape the market. Executive Order 14412 of 22 June 2026 directs NIST to revise CMVP processes to accelerate validations of cryptographic modules, and NIST's November 2024 draft of IR 8547 said NIST will accommodate hybrid key establishment and dual signatures in FIPS 140 validation when suitably combined with a NIST-approved scheme. Neither means that validated post-quantum modules are yet widely available, and NIST's transition page warns that the choice of FIPS 140-3 modules may be limited for several years.

## What it means for your plan

If you need FIPS validation, ask suppliers in writing for the specific FIPS 140-3 certificate numbers for the modules in their products, and whether those certificates, or the algorithm validations behind them, cover the post-quantum algorithms the supplier claims to support. Record the answer as given, with `unknown` where the supplier cannot name a certificate, rather than accepting a general statement that a product is "FIPS validated". [Work with suppliers](/plan/programme/suppliers/) sets out how to ask, judge and follow up, and the [purchase wording record](/templates/records/purchase-wording/) holds the clauses to reuse at renewal.

If you do not rely on FIPS validation, this date changes nothing for you, although a supplier's FIPS 140-3 roadmap can still be a useful signal of when its modules will gain post-quantum algorithms.

## Sources

- NIST, Cryptographic Module Validation Program, project page, checked 21 September 2026. [CMVP project page (HTML)](https://csrc.nist.gov/projects/cryptographic-module-validation-program)
- NIST, FIPS 140-3 Transition Effort, project page, checked 21 September 2026. [FIPS 140-3 transition effort (HTML)](https://csrc.nist.gov/projects/fips-140-3-transition-effort)
- NIST, Security Requirements for Cryptographic Modules, FIPS 140-3, 22 March 2019. [FIPS 140-3 publication page (HTML)](https://csrc.nist.gov/pubs/fips/140-3/final)
- The White House, Securing the Nation Against Advanced Cryptographic Attacks, Executive Order 14412, 22 June 2026. [EO 14412 (HTML)](https://www.govinfo.gov/app/details/DCPD-202600417)
- NIST, Transition to Post-Quantum Cryptography Standards, NIST IR 8547 initial public draft, 12 November 2024. [Draft (PDF)](https://doi.org/10.6028/NIST.IR.8547.ipd)
- NIST, Compliance FAQs: Federal Information Processing Standards (FIPS), last updated 3 July 2024. [FIPS compliance FAQ (HTML)](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips)

## Related pages

- [Modules, protocols, and certificates](/standards/modules-protocols-certificates/)
- [HSMs and key management](/technology-options/hsm-kms/)
- [EO 14412](/standards/us-government-requirements/eo-14412/)
- [Glossary](/learn/glossary/)
