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

1. **Answer four questions.** The [Not sure](/routes/not-sure/) route asks the same questions in more detail.
   - **A.** Is any data protected by public-key cryptography required to stay confidential for many years? The EU NIS Cooperation Group [roadmap](/standards/migration-guides/eu-nis-roadmap/) (version 1.1, 11 June 2025) treats a confidentiality use case as high-risk, for the Member States it addresses, when compromise after ten years or more would still cause significant damage; if you hold data that may be long-lived but do not know its period, answer yes until the data owner confirms it.
   - **B.** Does any product or device you build or run check signatures with a key it cannot replace after shipment?
   - **C.** Do you operate a public-key infrastructure, or sign code, firmware, or documents that other people or devices rely on?
   - **D.** Do you build or run bespoke systems, rather than only supported commodity software and supplier-hosted services?
2. **Turn the answers into an urgency category and a path.** The Dutch [PQC Migration Handbook](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf) (AIVD, CWI, and TNO, second edition, December 2024) distinguishes urgent adopters, which need to start now because they cannot afford to delay, from regular adopters, which can take a more reactive stance towards migration for now. This handbook maps the answers to those categories as follows; the mapping is the handbook's rule of thumb, not the Dutch handbook's:

   | Your answers | Category | Path |
   | --- | --- | --- |
   | Yes to A or B | Urgent adopter, for the assets concerned | Full path: [set up the programme](/migration-practices/programme/) |
   | No to A and B, yes to C or D | Regular adopter that still needs a programme, because coordinated or bespoke changes take years | Full path: [set up the programme](/migration-practices/programme/) |
   | No to all four | Regular adopter | Short path: [keep commodity software updated](/migration-practices/commodity-software/) |

   Record the category per asset where answers differ: an organisation can be an urgent adopter for one archive and a regular adopter for its laptops. A reactive stance should not mean inaction: even on the short path, add post-quantum requirements to purchases and renewals now (see [Work with suppliers](/migration-practices/suppliers/)), because each product bought today is one you may have to replace later.
3. **Choose the route that matches your answers**, for a summary of what to read: [Long-lived confidentiality](/routes/long-lived-confidentiality/) for yes to A; [Hard-to-change systems](/routes/hard-to-change-systems/) for yes to B, C, or D; [Vendor-managed software](/routes/vendor-managed-software/) for no to all four; and [Organisation-wide](/routes/organisation-wide/) when many assets need coordinating.
4. **Write the first inventory rows** for the systems that triggered the decision, marking unverified facts as `unknown`. Do not wait for a complete inventory before deciding.
5. **Name the owner of the next step** and set a date to confirm the decision. On the full path, the next step is [Set up the programme](/migration-practices/programme/); on the short path, it is [Keep commodity software updated](/migration-practices/commodity-software/).

## Keep this evidence

A short decision note that the sponsor has accepted: the answers to questions A to D, the urgency category and path for each asset, the route, the named owner, and the date the decision will be confirmed. The first rows go on the [inventory record](/resources/inventory-record/).

## Example

An insufficient record is "We are quantum safe" or "This is an IT matter."

A decision-ready record, from [Protect this first](/resources/protect-this-first/): the fictional manufacturer records that product designs must stay confidential for 15 years under its own retention policy, and that its product sensor's firmware verifier cannot accept a new trust anchor after shipment. It answers yes to A and B, so it records itself as an urgent adopter for those two assets and takes the full path. Its office laptops are not where the long-lived designs are kept, so on their own they answer no to all four and stay on the short, supplier-update path; the IT lead later confirms their confidentiality period as six years under the office-records policy, below the ten-year threshold in question A. The managing director accepts the decision and names the operations director as migration lead, with the programme charter to follow.

## Limits and next step

This decision does not choose algorithms or dates, and it is not a formal risk assessment. Where the answers are unclear for a regulated or critical system, take the decision to the risk owner or sector authority. Next, [set up the programme](/migration-practices/programme/), or for a vendor-managed estate with no exception, [keep commodity software updated](/migration-practices/commodity-software/).

## Sources

- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- AIVD, CWI, and TNO, The PQC Migration Handbook, second edition, December 2024. [The PQC Migration Handbook (PDF)](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Not sure](/routes/not-sure/)
- [Set up the programme](/migration-practices/programme/)
- [Inventory record](/resources/inventory-record/)
- [When to start: Mosca's inequality](/learn/explainers/when-to-start/)
