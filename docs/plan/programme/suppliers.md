---
title: Work with suppliers
search_title: Post-quantum questions for suppliers and purchases
sidebar_label: Work with suppliers
description: Triage suppliers, ask the ones you prioritise the same written post-quantum questions, judge the answers, and put wording into purchases and renewals.
displayed_sidebar: journeySidebar
---

## When this applies

Any system on your register depends on a supplier's product or service, you are buying or renewing one, or your own customers are asking you about post-quantum migration.

## Who does what

- **Procurement** keeps the supplier list, sends questions, chases answers, puts post-quantum wording into purchases and renewals, and uses the contract when answers fall short.
- **System owners** say what each system needs and whether an answer is usable.
- The **migration lead** records supplier answers, judgements, and dates on the [register](/templates/records/register/) and tracks gaps.
- **Legal or risk** advises on contract wording, remedies, and residual risk.

## Do this

On the [baseline](/plan/baseline/), step 5 applies: put post-quantum wording into every purchase and renewal, and judge the supplier's answer as in step 3. The baseline replaces a product that is out of support, or whose supplier has no post-quantum plan, with a date on the register. Steps 1 to 4 apply in full to suppliers behind the systems a programme covers.

### 1. Triage suppliers

Build the supplier list from the register, not from the purchasing system alone. Put each supplier in a tier:

- **Tier 1:** suppliers behind the rows that come first in their job's order on the register, such as key establishment for long-lived confidential data, verifiers that cannot be updated, or signatures with many relying parties.
- **Tier 2:** suppliers whose contract renews or ends within your planning period. The handbook suggests looking at least two years ahead, because a renewal is the cheapest point to add post-quantum wording.
- **Tier 3:** suppliers of supported commodity products, tracked on the baseline.

Ask tier 1 first and individually, and tier 2 in batches. Do not send tier 3 suppliers questions while their products stay in support: rely on their published support and release information, as the baseline does, and put the post-quantum wording to them at renewal. A product that leaves support is replaced, with a date on the register. Add each supplier's renewal or contract end date to the register, so a renewal triggers the wording rather than an automatic extension.

### 2. Ask the same questions in writing

Use the handbook's single question set. Ask about key establishment and signatures separately, for a named product and version, and set the date you need an answer by.

- **About the product:** which public-key algorithms does the product use today, for key establishment and for signatures, and where (connections, stored data, updates, firmware)? Are any keys or [trust anchors](/templates/reference/glossary/#trust-anchor) fixed in hardware or firmware so that they cannot be replaced in the field?
- **Key establishment:** which standards-based post-quantum or hybrid algorithm or scheme will the product support, from which release and on what date? Does it apply to every connection and to stored-data key wrapping, or only to some?
- **Signatures and updates:** when will the product sign or verify with a post-quantum algorithm, for updates, certificates, or firmware? How will updates that change the algorithm be delivered and validated?
- **Evidence and support:** what evidence will you provide: release notes, test results, or module validation? When does security support for our current release end?

Record the question, the date asked, and the date the answer is due in the register row's next step. The [vendor questions guide](/standards/migration-guides/vendor-questions/) summarised in Standards gives a fuller set. The CISA, NSA, and NIST [Quantum-Readiness fact sheet](/standards/migration-guides/cisa-nsa-nist-fact-sheet/) (as of 17 August 2023) likewise encourages organisations to ask vendors about their quantum-readiness roadmaps.

### 3. Judge each answer, one row per job

- `complete`: names the product, version, algorithm or scheme, and date in a document you can keep.
- `vague`: gives a year or a promise without the algorithm or scheme, or without the product line.
- `missing`: no answer by the answer-due date you set.
- `concerning`: for example, a proprietary algorithm, no plan for an in-support product, or a refusal to say.

Record each answer on the register row for that system and job: the supplier's answer, with its date and source document, and your judgement beside it. A supplier can be `complete` for key establishment and `vague` for signatures; record two rows. When an answer is `complete`, record the decision it supports as the row's next step.

A national milestone that a supplier quotes applies to the audience its authority names, not to every customer; see [Why migration timelines differ](/learn/explainers/why-timelines-differ/).

### 4. Follow up and escalate

Ask a `vague` supplier for the missing items in writing. Give a `missing` answer a firm follow-up date and name who will escalate it; if nothing arrives, the system is not counted as migrated. For a `concerning` answer, procurement and the system owner decide with legal or risk between: a contract remedy or a new commitment; a compensating control while the gap remains; replacement, recording the replacement lead time on the register; or written risk acceptance by the sponsor, with a review date. Where a supplied product on the baseline has no post-quantum plan, the baseline replaces it, with a date on the register; that alone is not a reason for a programme.

### 5. Put wording into purchases and renewals

For anything new or renewed that uses public-key cryptography, ask before signing for:

- standards-based post-quantum support for the jobs the product performs, or a dated plan to deliver it;
- the algorithm or scheme and the standard it follows (for example [FIPS 203](/standards/post-quantum/fips-203/) or [FIPS 204](/standards/post-quantum/fips-204/));
- how updates are delivered and validated;
- whether keys or trust anchors are fixed in hardware;
- a support period;
- the evidence you will receive.

Record the wording, the supplier's commitment, and whether it was met on the [purchase wording](/templates/records/purchase-wording/) record, one row per purchase or renewal, job, and candidate supplier. The [baseline](/plan/baseline/#wording-for-purchases-and-renewals) has a sentence to copy and adapt.

Be strictest where the product cannot change later: for devices and components whose verifier cannot be updated, make a post-quantum signature option a condition of selection before design freeze (see [Firmware and secure boot](/technology-options/firmware-secure-boot/)).

CISA's [product categories list](/standards/us-government-requirements/cisa-pqc-product-categories/) (23 January 2026) names categories, such as web software (web browsers and web servers), in which products supporting post-quantum standards are widely available, and notes that most of these categories support post-quantum key establishment but have not yet widely implemented post-quantum signatures. It shows where such wording is realistic today. Covered US federal contractors should also watch for the proposed rule that [Executive Order 14412](/standards/us-government-requirements/eo-14412/) (22 June 2026) directs the Federal Acquisition Regulatory Council to publish, requiring them to comply with NIST's Federal Information Processing Standards by 31 December 2030. It would bind them only once a final rule takes effect; its Standards summary explains.

### 6. Answer your own customers consistently

If you supply products, your customers will send you the same questions. Answer from the register: the rows and change records for the product concerned, with the dates you can stand behind and what is still unknown.

## Keep this evidence

The [register](/templates/records/register/) — one row per system and job, with the supplier, the product and version, the supplier's answer with its date and source document, your judgement, the follow-up or decision as the next step, and the status — plus the [purchase wording](/templates/records/purchase-wording/) record: the wording used in each purchase or renewal and the commitment the supplier agreed.

## Example

An insufficient record is "They told us on a call that they are quantum safe."

A decision-ready record, from [Protect this first](/templates/examples/protect-this-first/): the fictional design-platform supplier's letter of 4 September 2026 says Workspace 4.2, due on 1 October 2026, uses hybrid key establishment (X25519MLKEM768) for TLS connections to the hosted workspace. The product engineering lead records that row as `complete` for connections. A second row records signatures as `vague`, because the letter gives no date. A third row records stored-data [key wrapping](/templates/reference/glossary/#key-wrapping) and end of support for Workspace 4.1 as `missing`, because the letter does not answer them. Both follow-ups are due by 1 December 2026, and stored-data protection is not counted as migrated. For the next sensor design, procurement asks each shortlisted microcontroller supplier in writing whether the boot verifier supports a standards-based post-quantum signature and how the trust anchor is provisioned, and procurement, with the product security lead, makes a post-quantum signature option a condition of selection. One supplier has not answered; the one reply so far, dated 30 October 2026, says a post-quantum boot verifier is planned but names no scheme, date, or trust-anchor provisioning, so it is recorded as `vague` with a written answer due by 15 December 2026, and no supplier is selected.

## Limits and next step

The register records what suppliers say; it does not validate their products. Validation comes from your own testing and, where relevant, module validation such as [FIPS 140-3](/standards/modules-protocols-certificates/fips-140-3/). This page does not give contract clauses or legal advice. A supplier's answer is enough on its own only while you wait for a release; when you also have to change configuration or a verifier, take the row through the rest of the [programme](/plan/programme/). Next, [choose an option](/technology-options/choosing/) for each system, then [make and verify one change](/plan/programme/implementation/).

## Sources

- CISA, NSA, and NIST, Quantum-Readiness: Migration to Post-Quantum Cryptography, as of 17 August 2023. [Fact sheet (PDF)](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)
- The White House, Executive Order 14412, Securing the Nation Against Advanced Cryptographic Attacks, 22 June 2026. [EO 14412](https://www.govinfo.gov/app/details/DCPD-202600417)

## Related pages

- [Register](/templates/records/register/)
- [Purchase wording](/templates/records/purchase-wording/)
- [Baseline](/plan/baseline/)
- [Reading "quantum-safe" claims](/learn/explainers/quantum-safe-claims/)
- [Vendor questions guide](/standards/migration-guides/vendor-questions/)
