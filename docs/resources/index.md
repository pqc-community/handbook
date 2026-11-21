---
title: Post-quantum migration resources
sidebar_label: Resources
displayed_sidebar: resourcesSidebar
description: Work products and reference pages grouped by route, with who uses each one and the record it produces.
---

These pages are the records and references that route pages point to. Each entry names who it is for and what to file when the step is done.

## Vendor-managed software

Route: [Mostly standard, vendor-managed software](/routes/vendor-managed-software/).

- [Vendor response log](/resources/vendor-response-log/) — **Reader:** someone on the vendor-managed route with no exception. **Output:** a vendor response log and either a note that no exception applies or the name of the route moved to.
- [Review log](/resources/review-log/) — **Reader:** someone who has reopened records after [subsequent review](/migration-practices/subsequent-review/) on this route. **Output:** a dated line for what was reviewed, what stayed unresolved, and the next review date.

## Long-lived confidentiality

Route: [Long-lived confidentiality](/routes/long-lived-confidentiality/).

- [Inventory record](/resources/inventory-record/) — **Reader:** someone who has listed systems with a long data confidentiality period. **Output:** a first-pass inventory row per system, with `known` or `unknown` confidence.
- [Migration plan](/resources/migration-plan/) — **Reader:** someone with an inventory before budgeting work on long-lived assets. **Output:** an order for those assets by job, with the reason, including unknowns that stay on the list.

## Hard to change

Route: [Products or systems that may be hard to change](/routes/hard-to-change-systems/).

- [Change record](/resources/change-record/) — **Reader:** someone finishing [implementation](/migration-practices/implementation/) on a hard-to-change product. **Output:** the option chosen, the test and deployment evidence, and the deployed-state check.
- [Vendor response log](/resources/vendor-response-log/) — **Reader:** someone recording supplier answers while planning a release on this route. **Output:** judgement rows for each question, with follow-up dates where needed.

## Organisation-wide

Route: [Coordinating a migration across the organisation](/routes/organisation-wide/).

- [Programme charter](/resources/programme-charter/) — **Reader:** a sponsor or migration lead starting a programme. **Output:** a one-page charter with the goal, scope, named roles, first budget line, and reporting.
- [Migration plan](/resources/migration-plan/) — **Reader:** a migration lead coordinating many assets. **Output:** one row per asset and job with an owner, its place in the order, an applicable timeline, the four separate dates (supplier release, testing, production deployment, end of support), and a subsequent-review date.
- [Change record](/resources/change-record/) — **Reader:** someone asked what supports a claim that a change is complete. **Output:** the result, stating what has and has not been shown, and the evidence behind it.
- [Review log](/resources/review-log/) — **Reader:** someone due to reopen programme records after verification and communication. **Output:** an updated review log and the next review date.

## Ask a supplier

Route: [Ask a supplier](/routes/ask-a-supplier/).

- [Vendor response log](/resources/vendor-response-log/) — **Reader:** procurement or an asset owner preparing or following up supplier questions. **Output:** at least one decision-ready row with the product, the algorithm or scheme, the answer, and the judgement.

## Not sure

Route: [Not sure which route applies](/routes/not-sure/).

This route's output is a named situation route or a list of unknowns and the person who will close them. The primary next page is [Decide whether to act](/migration-practices/diagnose/), which leads to an [inventory record](/resources/inventory-record/) when the handbook applies.

- [Decision note](/resources/decision-note/) — **Reader:** someone deciding whether post-quantum migration applies. **Output:** one row per asset with the answers to the four questions, the urgency category and path, and the owner of the next step, accepted by the sponsor.

## Edition reference

These pages sit on the resources sidebar for every reader.

- [Protect this first](/resources/protect-this-first/) — **Reader:** anyone who wants an illustration across selected records. **Output:** a walkthrough of one fictional UK manufacturer's rows, not a template or sector guide for a real organisation.
- [Glossary](/resources/glossary/) — **Reader:** someone encountering a short form in a lesson or practice page. **Output:** plain-language definitions linked to the page that uses each term.
- [Curated references](/resources/curated-references/) — **Reader:** someone choosing a longer authority document. **Output:** a grouped index of cited standards, directives, and migration guides.

## Sources

- CISA, NSA, and NIST, Quantum-Readiness fact sheet, as of 17 August 2023. [Fact sheet](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)

## Related pages

- [Curated references](./curated-references.md)
- [Glossary](./glossary.md)
- [Homepage](/)
