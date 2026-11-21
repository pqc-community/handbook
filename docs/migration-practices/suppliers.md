---
title: Work with suppliers
sidebar_label: Work with suppliers
description: Triage suppliers, ask existing and prospective suppliers the same written questions, judge their answers, write post-quantum requirements into purchases and renewals, and escalate when answers fall short.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

Any system on your inventory depends on a supplier's product or service, you are buying or renewing one, or your own customers are asking you about post-quantum migration.

## Who does what

- **Procurement** keeps the supplier list, sends questions, chases answers, writes requirements into purchases and renewals, and uses the contract when answers fall short.
- **Asset owners** say what each system needs and whether an answer is usable.
- The **migration lead** copies supplier dates into the [migration plan](/resources/migration-plan/) and tracks gaps.
- **Legal or risk** advises on contract wording, remedies, and residual risk.

## Do this

### 1. Triage suppliers

Build the supplier list from the [inventory record](/resources/inventory-record/), not from the purchasing system alone. Put each supplier in a tier:

- **Tier 1:** suppliers behind high-priority rows — long-lived confidential data, verifiers that cannot be updated, or many relying parties.
- **Tier 2:** suppliers with renewals due within the planning horizon.
- **Tier 3:** suppliers of supported commodity products (see [Keep commodity software updated](/migration-practices/commodity-software/)).

Ask tier 1 first and individually; ask tiers 2 and 3 in batches. Add each supplier's renewal or contract end date to the plan, so a renewal triggers a requirement rather than an automatic extension.

### 2. Ask the same questions in writing

Use the handbook's single question set on the [vendor response log](/resources/vendor-response-log/): what public-key cryptography the product uses and where; which post-quantum or hybrid construction it will support, from which release and date; when signatures and update verification will change; whether keys or trust anchors are fixed in hardware; what evidence will be provided; and when support for your current release ends. Ask about key establishment and signatures separately, for a named product and version. The Australian Signals Directorate's [vendor questions guide](/standards/migration-guides/vendor-questions/) (published 16 July 2026) gives a fuller set. The CISA, NSA, and NIST [Quantum-Readiness fact sheet](/standards/migration-guides/cisa-nsa-nist-fact-sheet/) (as of 17 August 2023) likewise encourages organisations to ask vendors about their quantum-readiness roadmaps.

### 3. Judge each answer, one row per job

- `complete`: names the product, version, construction, and date in a document you can keep.
- `vague`: gives a year or a promise without the construction or the product line.
- `missing`: no answer by the date you asked for.
- `concerning`: for example, a proprietary algorithm, no plan for an in-support product, or a refusal to say.

A supplier can be `complete` for key establishment and `vague` for signatures; record two rows.

### 4. Follow up and escalate

Ask a `vague` supplier for the missing items in writing. Give a `missing` answer a firm follow-up date; if nothing arrives, the system is not counted as migrated. For a `concerning` answer, procurement and the asset owner decide with legal or risk between: a contract remedy or a new commitment; a compensating control while the gap remains; replacement, recording the replacement lead time in the plan; or written risk acceptance by the sponsor, with a review date.

### 5. Write requirements into purchases and renewals

For anything new or renewed that uses public-key cryptography, ask before signing for:

- standards-based post-quantum support for the jobs the product performs, or a dated plan to deliver it;
- the construction and the standard it follows (for example [FIPS 203](/standards/post-quantum/fips-203/) or [FIPS 204](/standards/post-quantum/fips-204/));
- how updates are delivered and validated;
- whether keys or trust anchors are fixed in hardware;
- a support period;
- the evidence you will receive.

Be strictest where the product cannot change later: for devices and components whose verifier cannot be updated, make a post-quantum signature option a condition of selection before design freeze (see [Long-lived roots](/technology-options/long-lived-roots/)).

CISA's [product categories list](/standards/us-federal-directives/cisa-pqc-product-categories/) (23 January 2026) shows where such requirements are realistic today. It lists categories in which products supporting post-quantum standards are widely available — including web browsers and servers, cloud platform and infrastructure services, and data-at-rest endpoint encryption — and advises acquiring only post-quantum-capable products in those categories, noting that the support is mostly for key establishment rather than signatures. Some buyers face obligations: [Executive Order 14412](/standards/us-federal-directives/eo-14412/) (22 June 2026) directs the Federal Acquisition Regulatory Council to propose, within 180 days, a rule requiring covered contractors to comply with NIST FIPS, including post-quantum cryptography, by 31 December 2030. As at 21 November 2026, that is a rule the order directs to be proposed, not a contract term.

### 6. Answer your own customers consistently

If you supply products, your customers will send you the same questions. Answer from the same records: the inventory, plan, and change records for the product concerned, with dates you can stand behind.

## Keep this evidence

The [vendor response log](/resources/vendor-response-log/) — one row per supplier, product, version, and job, with the question, answer, date, source document, judgement, follow-up, and decision — plus the requirement text used in each purchase or renewal and the contract commitment agreed.

## Example

An insufficient record is "They told us on a call that they are quantum safe."

A decision-ready record, from [Protect this first](/resources/protect-this-first/): the fictional design-platform supplier's letter of 2026-09-04 says Workspace 4.2, due on 2026-10-01, uses hybrid key establishment (X25519MLKEM768) for TLS connections to the hosted workspace. The product engineering lead records that row as `complete` for connections. A second row records signatures as `vague`, because the letter gives no date. A third row records stored-data key wrapping and end of support for Workspace 4.1 as `missing`, because the letter does not answer them. Both follow-ups are due by 2026-12-01, and stored-data protection is not counted as migrated. For the next sensor design, procurement asks each shortlisted microcontroller supplier in writing whether the boot verifier supports a NIST-approved post-quantum signature and how the trust anchor is provisioned, and the product security lead makes a written answer a condition of selection.

## Limits and next step

The log records what suppliers say; it does not validate their products. Validation comes from your own testing and, where relevant, module validation such as [FIPS 140-3](/standards/modules-protocols-identity/fips-140-3/). This page does not give contract clauses or legal advice. Next, [choose an option](/technology-options/choosing/) for each system, then [make and verify one change](/migration-practices/implementation/).

## Sources

- Australian Signals Directorate, Post-quantum questions to ask your vendors, published 16 July 2026. [Vendor questions](https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors)
- CISA, NSA, and NIST, Quantum-Readiness: Migration to Post-Quantum Cryptography, as of 17 August 2023. [Fact sheet (PDF)](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)
- The White House, Executive Order 14412, Securing the Nation Against Advanced Cryptographic Attacks, 22 June 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)

## Related pages

- [Vendor response log](/resources/vendor-response-log/)
- [Ask a supplier](/routes/ask-a-supplier/)
- [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/)
- [Vendor questions guide](/standards/migration-guides/vendor-questions/)
