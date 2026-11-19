---
title: The vendor's migration plan
sidebar_label: Vendor plan
displayed_sidebar: migrationPracticesSidebar
description: How to record a complete, vague, missing, or concerning supplier answer, and when to escalate to procurement.
---

## When this applies

You have asked a supplier for a written post-quantum migration answer, or you are following up on an earlier question.

## Do this

1. Assign a judgement to each supplier response: `complete`, `vague`, `missing`, or `concerning`.
2. For a `complete` answer — one that names the product, version, cryptographic construction, and release date in a retainable source — log those details in the vendor response log.
3. For a `vague` answer, follow up in writing to request the specific product line, construction, and release date.
4. For a `missing` answer, record `missing` with a firm follow-up date; if no commitment arrives by that date, procurement logs the gap and the system is not counted as migrated.
5. For a `concerning` answer, escalate to procurement and the contract owner.

The CISA, NSA, and NIST [Quantum-Readiness fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf) (17 August 2023, United States) recommends requesting vendor quantum-readiness roadmaps — including testing and integration timelines — and updating contract language so new purchases deliver post-quantum support and existing products have an upgrade path. The [UK NCSC timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines) (published and reviewed 20 March 2025, United Kingdom) note that while commodity platform providers deliver upgrades through routine refreshes, custom or mixed environments require per-system decisions.

## Keep this evidence

The vendor response log, with judgement, follow-up date, and source for each row.

## Example

An insufficient record is "They told us on a call that they are quantum safe."

A decision-ready record stores judgement `complete`, the product and version named in the supplier letter, construction ML-KEM-768, the answer date 14 August 2026, and source the supplier letter.

A `vague` answer that names a year but not a construction gets a written follow-up asking for the product line, the algorithm construction, and the test date.

## Limits and next page

Leave the algorithm construction for the supplier's answer. The next record is the [vendor response log](/resources/vendor-response-log/).

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)
- UK NCSC, Timelines for migration to post-quantum cryptography, published and reviewed 20 March 2025. [Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)

## Related pages

- [Vendor response log](/resources/vendor-response-log/)
- [Release dates](./release-dates.md)
- [Choosing an option](../technology-options/choosing.md)
- [Changing algorithms again](./changing-algorithms-again.md)
