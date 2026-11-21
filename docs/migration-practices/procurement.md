---
title: Buy post-quantum-ready products and services
sidebar_label: Buy post-quantum-ready
description: Put post-quantum requirements into new purchases and renewals, ask for evidence before signing, and record what the supplier committed to.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

You are buying, renewing, or extending a product or service that uses public-key cryptography — especially one you will run for many years, one that protects long-lived data, or a device or component that verifies signatures. Every purchase made now without a post-quantum requirement is a migration you will have to fund later.

## Who does what

- **Procurement** writes the requirement into the tender, contract, or renewal and keeps the supplier's answer.
- The **asset owner** says which cryptographic jobs the product performs and how long it will be in service.
- **Legal or risk** advises on contract wording, remedies, and any obligations that apply to your sector or customers.
- The **migration lead** checks that the purchase matches the [migration plan](/resources/migration-plan/).

## Do this

1. **Decide what the product must do and for how long.** Note whether it performs key establishment, signs or verifies signatures, or holds a trust anchor that cannot be changed after delivery, and its expected service life.
2. **Write a requirement the supplier can answer in writing.** Ask the supplier to:
   - support standards-based post-quantum algorithms for the jobs the product performs, or give a dated plan to deliver them;
   - name the construction and the standard it follows (for example [FIPS 203](/standards/post-quantum/fips-203/) or [FIPS 204](/standards/post-quantum/fips-204/));
   - say how updates will be delivered and validated;
   - state whether any key or trust anchor is fixed in hardware;
   - commit to a support period.
3. **Ask for evidence, not a label.** A "quantum-safe" claim is not evidence; ask for documentation, release notes, or module validation where relevant. See [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/).
4. **Be stricter where the product cannot be changed later.** For devices and components whose verifier cannot be updated after shipment, make the post-quantum signature option a condition of selection before design freeze; see [Long-lived roots](/technology-options/long-lived-roots/).
5. **Check what is realistic for the product type.** CISA's [product categories list](/standards/us-federal-directives/cisa-pqc-product-categories/) (23 January 2026) identifies categories where products supporting post-quantum standards are already widely available — including web browsers and servers, some cloud platform services, and data-at-rest encryption — and advises acquiring only post-quantum-capable products in those categories. It notes that in most of them the support is for key establishment rather than signatures.
6. **Record the supplier's answer and the contract term** before signing, and add the asset to the inventory and plan.

Some buyers will meet these requirements as obligations rather than choices. [Executive Order 14412](/standards/us-federal-directives/eo-14412/) (22 June 2026) directs the US Federal Acquisition Regulatory Council to propose a rule requiring federal contractors to comply with NIST FIPS, including post-quantum cryptography, by 31 December 2030. That rule was a proposal the order directs, not a contract term, when this page was written. Check your own sector and customer requirements with legal or risk.

## Keep this evidence

The requirement text used, the supplier's written answer logged in the [vendor response log](/resources/vendor-response-log/) with its judgement, the contract clause or commitment agreed, and the asset's new row in the [inventory record](/resources/inventory-record/).

## Example

An insufficient record is "The new supplier says the product is quantum safe."

A decision-ready record, using the fictional manufacturer from [Protect this first](/resources/protect-this-first/): before choosing a secure microcontroller for the next sensor design, procurement asks each shortlisted supplier in writing whether the boot verifier supports a NIST-approved post-quantum signature, which standard it follows, and whether the trust anchor can be provisioned before shipment. Answers are logged with their judgements. The product security lead makes a written post-quantum signature option a condition of selection before design freeze.

## Limits and next step

This page does not provide contract wording or legal advice; take clause drafting to legal or risk. It does not choose algorithms; see [Choosing an option](/technology-options/choosing/). Next, [make and verify one change](/migration-practices/implementation/).

## Sources

- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)
- The White House, Executive Order 14412, Securing the Nation Against Advanced Cryptographic Attacks, 22 June 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)

## Related pages

- [Get each supplier's plan](/migration-practices/vendor-plan/)
- [Vendor response log](/resources/vendor-response-log/)
- [Ask a supplier](/routes/ask-a-supplier/)
- [Vendor questions guide](/standards/migration-guides/vendor-questions/)
