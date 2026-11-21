---
title: Decide whether to act
sidebar_label: Decide whether to act
description: Decide whether a post-quantum migration applies, how urgently, and which route to follow, and name the person who owns the next step.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

You have not yet decided whether post-quantum migration is a programme for your organisation or a routine supplier matter, or you have opened a route and have not yet listed any cryptography.

## Who does what

- The **executive sponsor** decides whether a programme is needed and accepts the urgency category.
- The **migration lead** (or whoever the sponsor asks to look first) answers the questions below and writes the first rows of the inventory.
- **Asset owners** confirm the facts about their systems.

## Do this

1. **Ask the questions that decide urgency.** Is any data protected by public-key cryptography required to stay confidential for many years? Does any product or device check signatures with a key it cannot replace after shipment? Do you operate a public-key infrastructure, or sign code, firmware, or documents that other people or devices rely on? Do you build or run bespoke systems rather than only supplier-updated commodity software? The [Not sure](/routes/not-sure/) route asks the same questions in more detail.
2. **Record an urgency category.** The Dutch [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, second edition, December 2024) distinguishes urgent adopters, which need to start now because they cannot afford to delay, from regular adopters, which can take a more reactive stance towards migration for now. Write down which fits you and why, using the answers from step 1. A reactive stance is not inaction: even a regular adopter should add post-quantum requirements to purchases and renewals now (see [Work with suppliers](/migration-practices/suppliers/)), because each product bought today is one you may have to replace later.
3. **Choose the route.** Use [Vendor-managed software](/routes/vendor-managed-software/) when every system is supported commodity software with no exception; [Long-lived confidentiality](/routes/long-lived-confidentiality/) for data that must stay secret for years; [Hard-to-change systems](/routes/hard-to-change-systems/) for bespoke systems, signing infrastructure, and devices whose verifier cannot be updated; and [Organisation-wide](/routes/organisation-wide/) when many assets need coordinating.
4. **Write the first inventory rows** for the systems that triggered the decision, marking unverified facts as `unknown`. Do not wait for a complete inventory before deciding.
5. **Name the owner of the next step** and set a date to confirm the decision. For an urgent adopter or the organisation-wide route, the next step is [Set up the programme](/migration-practices/programme/).

## Keep this evidence

A short decision note that the sponsor has accepted: the answers to step 1, the urgency category and its reason, the route, the named owner, and the date the decision will be confirmed. The first rows go on the [inventory record](/resources/inventory-record/).

## Example

An insufficient record is "We are quantum safe" or "This is an IT matter."

A decision-ready record, from [Protect this first](/resources/protect-this-first/): the fictional manufacturer records that product designs must stay confidential for 15 years under its own retention policy, and that its product sensor's firmware verifier cannot accept a new trust anchor after shipment. It therefore records itself as an urgent adopter for those two assets. Its office laptops stay on the supplier-update path. The managing director accepts the decision and names the operations director as migration lead, with the programme charter to follow.

## Limits and next step

This decision does not choose algorithms or dates, and it is not a formal risk assessment. Where the answers are unclear for a regulated or critical system, take the decision to the risk owner or sector authority. Next, [set up the programme](/migration-practices/programme/), or for a vendor-managed estate with no exception, [keep commodity software updated](/migration-practices/commodity-software/).

## Sources

- AIVD, CWI, and TNO, The PQC Migration Handbook, second edition, December 2024. [The PQC Migration Handbook (PDF)](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Not sure](/routes/not-sure/)
- [Set up the programme](/migration-practices/programme/)
- [Inventory record](/resources/inventory-record/)
- [When to start: Mosca's inequality](/learn/explainers/when-to-start/)
