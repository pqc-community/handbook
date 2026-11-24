---
title: NIST flags a FIPS 203 issue for future correction
description: A NIST planning note of 17 November 2025 identifies an issue in FIPS 203 (ML-KEM) to be corrected in a future update, with details in a spreadsheet.
date: 2025-11-17
authors: [pqc_handbook]
tags: [standards-and-protocols, nist, key-establishment]
---

On 17 November 2025 NIST posted a planning note on the [FIPS 203 publication page](https://csrc.nist.gov/pubs/fips/203/final) saying it has identified an issue that will be corrected in a future update or revision of the standard, which specifies the ML-KEM key-encapsulation mechanism. NIST points readers to an "Errata (potential updates)" spreadsheet for details. FIPS 203 itself, published on 13 August 2024, has not changed.

{/* truncate */}

## What NIST posted

The note is short. It says NIST has identified an issue that will be corrected in a future update or revision of FIPS 203, and directs readers to the [potential-updates spreadsheet](https://csrc.nist.gov/files/pubs/fips/203/final/docs/fips-203-potential-updates.xlsx) listed under the page's documentation for the details. The note records NIST's intention to change the standard; it is not itself a revised text.

The handbook's [FIPS 203 summary](/standards/post-quantum/fips-203/) records the note and does not infer which implementations, if any, the issue affects. This post takes the same approach: the spreadsheet is NIST's own account of what it plans to correct, and anyone who needs to know whether a particular product is affected should read it and ask the product's supplier, rather than rely on a secondary summary.

## What has not changed

FIPS 203 remains the published standard for ML-KEM, and the note does not withdraw it, change its status, or set any new date, so products and plans that cite FIPS 203 still cite the right document.

## What it means for your plan

Most organisations get ML-KEM from their suppliers, inside TLS libraries, operating systems, VPNs and hardware security modules, so the practical step is a question rather than a code change. Where a supplier has told you that a product supports ML-KEM, ask whether it has reviewed NIST's potential-updates spreadsheet for FIPS 203, whether anything in it applies to the product, and, if so, which release will address it. [Work with suppliers](/plan/programme/suppliers/) covers how to ask for a named product and version and how to judge the answer.

Record the answer against the relevant key-establishment rows of your [register](/templates/records/register/), and add the eventual revision of FIPS 203 as a trigger for a [subsequent review](/plan/programme/subsequent-review/), so the record is reopened when NIST publishes the correction. If you implement ML-KEM yourself, the engineering team that owns the implementation should read the spreadsheet directly.

A published standard being corrected is the kind of change the [programme](/plan/programme/) expects, which is why it treats keeping the ability to change algorithms and their implementations as lasting work rather than a one-off migration.

## Sources

- NIST, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 203, 13 August 2024; planning note of 17 November 2025. [Publication page (HTML)](https://csrc.nist.gov/pubs/fips/203/final), [Full text (PDF)](https://doi.org/10.6028/NIST.FIPS.203)
- NIST, FIPS 203 Errata (potential updates), spreadsheet listed on the FIPS 203 publication page with the planning note of 17 November 2025. [Spreadsheet (XLSX)](https://csrc.nist.gov/files/pubs/fips/203/final/docs/fips-203-potential-updates.xlsx)

## Related pages

- [Key encapsulation explained](/learn/explainers/kem/)
- [NIST SP 800-227](/standards/post-quantum/sp-800-227/)
- [Keep the ability to change again](/plan/programme/changing-algorithms-again/)
