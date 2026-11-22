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
- The **migration lead** copies supplier dates into the [migration plan](/resources/records/migration-plan/) and tracks gaps.
- **Legal or risk** advises on contract wording, remedies, and residual risk.

## Do this

On the short path, step 5 applies: write post-quantum requirements into purchases and renewals. When a short-path product comes up for renewal or leaves support, you also ask its supplier in writing, so steps 2 to 4 (ask, judge, follow up) apply to that supplier's answers. Steps 1 to 4 apply in full to suppliers behind full-path rows on your [migration plan](/resources/records/migration-plan/).

### 1. Triage suppliers

Build the supplier list from the [inventory record](/resources/records/inventory/), not from the purchasing system alone. Put each supplier in a tier:

- **Tier 1:** suppliers behind the rows that come first in their job's order on the migration plan, such as key establishment for long-lived confidential data, verifiers that cannot be updated, or signatures with many relying parties.
- **Tier 2:** suppliers whose contract renews or ends within your planning period. The handbook suggests looking at least two years ahead, because a renewal is the cheapest point to add a requirement.
- **Tier 3:** suppliers of supported commodity products (see [Keep commodity software updated](/migration-practices/commodity-software/)).

Ask tier 1 first and individually, and tier 2 in batches. Do not send tier 3 suppliers questions while their products stay in support: rely on their published support and release information, as in Keep commodity software updated, and ask in writing when a product leaves support or comes up for renewal. Add each supplier's renewal or contract end date to the plan, so a renewal triggers a requirement rather than an automatic extension.

### 2. Ask the same questions in writing

Use the handbook's single question set on the [vendor response log](/resources/records/vendor-response-log/): what public-key cryptography the product uses and where; which post-quantum or hybrid algorithm or scheme it will support, from which release and date; when signatures and update verification will change; whether keys or [trust anchors](/resources/reference/glossary/#trust-anchor) are fixed in hardware; what evidence will be provided; and when support for your current release ends. Ask about key establishment and signatures separately, for a named product and version, and set the date you need an answer by. The [vendor questions guide](/standards/migration-guides/vendor-questions/) summarised in Standards gives a fuller set. The CISA, NSA, and NIST [Quantum-Readiness fact sheet](/standards/migration-guides/cisa-nsa-nist-fact-sheet/) (as of 17 August 2023) likewise encourages organisations to ask vendors about their quantum-readiness roadmaps.

### 3. Judge each answer, one row per job

- `complete`: names the product, version, algorithm or scheme, and date in a document you can keep.
- `vague`: gives a year or a promise without the algorithm or scheme, or without the product line.
- `missing`: no answer by the answer-due date you set.
- `concerning`: for example, a proprietary algorithm, no plan for an in-support product, or a refusal to say.

A supplier can be `complete` for key establishment and `vague` for signatures; record two rows. When an answer is `complete`, record the decision it supports in the log and link the source document.

A national milestone that a supplier quotes applies to the audience its authority names, not to every customer; see [Why migration timelines differ](/learn/explainers/timelines/).

### 4. Follow up and escalate

Ask a `vague` supplier for the missing items in writing. Give a `missing` answer a firm follow-up date and name who will escalate it; if nothing arrives, the system is not counted as migrated. For a `concerning` answer, procurement and the asset owner decide with legal or risk between: a contract remedy or a new commitment; a compensating control while the gap remains; replacement, recording the replacement lead time in the plan; or written risk acceptance by the sponsor, with a review date.

### 5. Write requirements into purchases and renewals

For anything new or renewed that uses public-key cryptography, ask before signing for:

- standards-based post-quantum support for the jobs the product performs, or a dated plan to deliver it;
- the algorithm or scheme and the standard it follows (for example [FIPS 203](/standards/post-quantum/fips-203/) or [FIPS 204](/standards/post-quantum/fips-204/));
- how updates are delivered and validated;
- whether keys or trust anchors are fixed in hardware;
- a support period;
- the evidence you will receive.

Record each requirement, the supplier's commitment, and whether it was met on the [purchase requirements record](/resources/records/purchase-requirements/), one row per purchase or renewal, job, and candidate supplier.

Be strictest where the product cannot change later: for devices and components whose verifier cannot be updated, make a post-quantum signature option a condition of selection before design freeze (see [Firmware and secure boot](/technology-options/firmware-secure-boot/)).

CISA's [product categories list](/standards/us-federal-directives/cisa-pqc-product-categories/) (23 January 2026) names categories, such as web browsers and servers, in which products supporting post-quantum standards are widely available, and notes that the support is mostly for key establishment rather than signatures. It shows where such requirements are realistic today. US federal contractors should also watch for the procurement rule that [Executive Order 14412](/standards/us-federal-directives/eo-14412/) (22 June 2026) directs the Federal Acquisition Regulatory Council to propose. It would bind contractors only once a final rule takes effect; its Standards summary explains.

### 6. Answer your own customers consistently

If you supply products, your customers will send you the same questions. Answer from the same records: the inventory, plan, and change records for the product concerned, with dates you can stand behind.

## Keep this evidence

The [vendor response log](/resources/records/vendor-response-log/) — one row per supplier, product, version, and job, with the assets it covers, the question, the dates asked, due, and answered, the answer, source document, judgement, follow-up, and decision — plus the [purchase requirements record](/resources/records/purchase-requirements/): the requirement text used in each purchase or renewal and the commitment the supplier agreed.

## Example

An insufficient record is "They told us on a call that they are quantum safe."

A decision-ready record, from [Protect this first](/resources/examples/protect-this-first/): the fictional design-platform supplier's letter of 4 September 2026 says Workspace 4.2, due on 1 October 2026, uses hybrid key establishment (X25519MLKEM768) for TLS connections to the hosted workspace. The product engineering lead records that row as `complete` for connections. A second row records signatures as `vague`, because the letter gives no date. A third row records stored-data [key wrapping](/resources/reference/glossary/#key-wrapping) and end of support for Workspace 4.1 as `missing`, because the letter does not answer them. Both follow-ups are due by 1 December 2026, and stored-data protection is not counted as migrated. For the next sensor design, procurement asks each shortlisted microcontroller supplier in writing whether the boot verifier supports a NIST-approved post-quantum signature and how the trust anchor is provisioned, and procurement, with the product security lead, makes a post-quantum signature option a condition of selection. One supplier has not answered; the one reply so far, dated 30 October 2026, says a post-quantum boot verifier is planned but names no scheme, date, or trust-anchor provisioning, so it is recorded as `vague` with a written answer due by 15 December 2026, and no supplier is selected.

## Limits and next step

The log records what suppliers say; it does not validate their products. Validation comes from your own testing and, where relevant, module validation such as [FIPS 140-3](/standards/modules-protocols-identity/fips-140-3/). This page does not give contract clauses or legal advice. A supplier's answer is enough on its own only while you wait for a release; when you also have to change configuration or a verifier, take the asset's line through the track its decision-note row records, such as [Long-lived confidentiality](/routes/long-lived-confidentiality/) or [Hard-to-change systems](/routes/hard-to-change-systems/). Next, [choose an option](/technology-options/choosing/) for each system, then [make and verify one change](/migration-practices/implementation/).

## Sources

- CISA, NSA, and NIST, Quantum-Readiness: Migration to Post-Quantum Cryptography, as of 17 August 2023. [Fact sheet (PDF)](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)
- The White House, Executive Order 14412, Securing the Nation Against Advanced Cryptographic Attacks, 22 June 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)

## Related pages

- [Vendor response log](/resources/records/vendor-response-log/)
- [Situation routes](/routes/)
- [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/)
- [Vendor questions guide](/standards/migration-guides/vendor-questions/)
