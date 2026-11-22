---
title: Purchase requirements record
sidebar_label: Purchase requirements
description: One row per purchase or renewal, job, and candidate supplier, with the post-quantum requirement asked for before signing, the supplier's commitment, the evidence due, and whether the requirement was met.
displayed_sidebar: resourcesSidebar
---

## When to use it

Use this record when anything new or renewed uses public-key cryptography, before the contract is signed. [Work with suppliers](/migration-practices/suppliers/#5-write-requirements-into-purchases-and-renewals) explains what to ask for; on the short path, [Keep commodity software updated](/migration-practices/commodity-software/) uses the same step. The [vendor response log](/resources/vendor-response-log/) holds answers to questions; this record holds what you required and what the supplier committed to.

## Minimum fields

asset, job, purchase or renewal, supplier, product and version, requirement, decide by, supplier commitment, support until, evidence, owner, status

Use one row per purchase or renewal, job, and candidate supplier, with `job` set to `key establishment`, `signatures`, or `non-updatable verifier`, and a qualifier in brackets where it helps. In `asset`, use the inventory name; for a product not yet on the inventory, add its row first with `unknown` cells. In `requirement`, write the text you put to the supplier: the algorithm or scheme and the standard it follows, or a dated plan to deliver it, plus how updates are delivered and validated and whether keys or trust anchors are fixed in hardware. In `decide by`, give the signing or selection date, such as a design freeze or renewal date.

In `supplier commitment`, quote what the supplier agreed and where, such as a contract clause or a written answer, or write `none yet`. Set `status`, with the date, to `drafted`; `sent`; `agreed`, once the supplier commits in writing or in the contract; `met`, once the evidence has arrived and been checked; or `not met`, if the supplier refuses or `decide by` passes without a commitment. Once a row is `agreed`, copy `support until` into the plan's `end of support` for that line. A `not met` row goes to the follow-up and escalation step of Work with suppliers, and any decision to proceed anyway goes on the [review log](/resources/review-log/) with who decided.

Record `unknown` in any cell you cannot verify yet. Keep keys, secrets, and personal data out of the file — name the system only.

## Filled example

From [Protect this first](/resources/protect-this-first/). The supplier, product, and dates are fictional.

| asset | job | purchase or renewal | supplier | product and version | requirement | decide by | supplier commitment | support until | evidence | owner | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firmware verifier for product sensor | non-updatable verifier | selection of the microcontroller for the product sensor | Fictional microcontroller supplier | next microcontroller family (fictional) | a boot verifier that checks a standards-based post-quantum signature scheme, named with the standard it follows, with the trust-anchor provisioning method and a sample date, as a condition of selection | 2027-06-30 (production design freeze, fictional) | none yet; the reply of 2026-10-30 is vague (fictional supplier email) | unknown | a written answer naming the scheme, trust-anchor provisioning, and sample date, due 2026-12-15; samples for size and boot-time tests | procurement manager with the product security lead | sent, 2026-10-05 |
| Firmware verifier for product sensor | non-updatable verifier | selection of the microcontroller for the product sensor | Second fictional microcontroller supplier | candidate microcontroller family (fictional) | a boot verifier that checks a standards-based post-quantum signature scheme, named with the standard it follows, with the trust-anchor provisioning method and a sample date, as a condition of selection | 2027-06-30 (production design freeze, fictional) | none yet; no answer by 2026-11-02 | unknown | a written answer naming the scheme, trust-anchor provisioning, and sample date, due 2026-12-15; samples for size and boot-time tests | procurement manager with the product security lead | sent, 2026-10-05 |

## Blank template

| asset | job | purchase or renewal | supplier | product and version | requirement | decide by | supplier commitment | support until | evidence | owner | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Download a blank CSV: [purchase-requirements.csv](/downloads/purchase-requirements.csv).

Be strictest where the product cannot change later: for a verifier that cannot be updated, the requirement is a condition of selection, not a request. CISA's [product categories list](/standards/us-federal-directives/cisa-pqc-product-categories/) (23 January 2026), addressed to organisations generally with specific direction for US federal civilian agencies, shows the categories in which products supporting post-quantum standards are widely available, which helps judge where a requirement is realistic today. That support is mostly for key establishment rather than signatures, so the list says little about a signature requirement such as a boot verifier's.

Keep a real record off a public ticket and off an unlocked shared drive: requirements and commitments describe how your systems are protected.

## Sources

- CISA, Product Categories for Technologies That Use Post-Quantum Cryptography Standards, 23 January 2026. [CISA product categories](https://www.cisa.gov/resources-tools/resources/product-categories-technologies-use-post-quantum-cryptography-standards)

## Related pages

- [Work with suppliers](/migration-practices/suppliers/)
- [Vendor response log](/resources/vendor-response-log/)
- [Firmware and secure boot](/technology-options/firmware-secure-boot/)
- [Protect this first](/resources/protect-this-first/)
