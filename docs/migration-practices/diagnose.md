---
title: Decide whether to act
sidebar_label: Decide whether to act
description: Decide whether a post-quantum migration applies, how urgently, which path the organisation takes and which route each asset follows, and name the person who owns the next step.
displayed_sidebar: migrationPracticesSidebar
---

## When this applies

You have not yet decided whether post-quantum migration is a programme for your organisation or a routine supplier matter, or you have opened a route and have not yet listed any cryptography.

## Who does what

- The **executive sponsor** decides whether a programme is needed and accepts the urgency category.
- The **migration lead** (or whoever the sponsor asks to look first) answers the questions below and writes the first rows of the inventory.
- **Asset owners** confirm the facts about their systems.

## Do this

1. **Answer four questions for each asset**, with `yes`, `no`, or `unknown`.
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
3. **Record each asset's route.** The path says how the organisation runs the work; the route names the track each asset follows:
   - yes to A: **Long-lived confidentiality**;
   - yes to B, C, or D: **Hard-to-change systems**;
   - yes to A and to B, C, or D: **Long-lived confidentiality (also Hard-to-change systems)**, because the key-establishment line and the signature or verifier line run on different clocks;
   - no to all four: **Vendor-managed software**, adding "(all five conditions hold)" once you have checked the [five conditions](#five-conditions-for-the-vendor-managed-route) below, or naming the route the asset moved to.

   The table gives each asset its own path. If any asset's path is full, the organisation is on the full path: run the programme from the [Organisation-wide](/routes/organisation-wide/) route, and send each asset, including any on Vendor-managed software, to the route its row records. If every asset is on the short path, follow the [Vendor-managed software](/routes/vendor-managed-software/) route. [Situation routes](/routes/) shows both paths and the three tracks.
4. **Write the first inventory rows** for the systems that triggered the decision, marking unverified facts as `unknown`. Do not wait for a complete inventory before deciding.
5. **Name the owner of the next step** and set a date to confirm the decision. On the full path, the next step is [Set up the programme](/migration-practices/programme/); on the short path, it is [Keep commodity software updated](/migration-practices/commodity-software/).

### Five conditions for the vendor-managed route

An asset that answers no to all four questions stays on the Vendor-managed software route only while all five of these hold:

1. The software is supplier-updated browsers, operating systems, or mobile devices, or a supplier-hosted service whose cryptography the supplier controls. Including supplier-hosted services is this handbook's position, explained on [Keep commodity software updated](/migration-practices/commodity-software/).
2. No record needs to stay confidential for many years (question A).
3. There is no bespoke system (question D), and the organisation neither runs a public-key infrastructure nor signs code, firmware, or documents that others rely on (question C).
4. There is no verifier that cannot be updated later (question B).
5. The product is in support and has a published or written supplier plan that covers each job it performs. A plan that gives a target date without naming the algorithm is enough; when you next ask the supplier in writing, at a renewal or when the product leaves support, record the missing details as a `vague` answer on the [vendor response log](/resources/records/vendor-response-log/) and follow them up.

Conditions 2 to 4 are questions A to D again, and condition 1 is question D seen from the product: software you host or configure yourself is not only supported commodity software, so it answers yes to question D. An asset that fails one of conditions 1 to 4 therefore re-answers the matching question and takes its route from step 3. Support status and the supplier's plan belong to condition 5 only: a commodity product or supplier-hosted service that leaves support, or has no plan, fails condition 5, not condition 1, and still answers no to question D.

A product that is out of support, or has no such plan, uses the Hard-to-change systems route: record that route in its `route` cell, or on the [review log](/resources/records/review-log/) if it moves at a later review. Its `path` stays as the table gives it. On the short path, take the product's replacement or upgrade through the [Hard-to-change systems](/routes/hard-to-change-systems/) steps without setting up a programme: its plan line records the reason and the end-of-support or renewal date instead of a ranked order, the short path's records gain that line's four dates and its change record, and it is reviewed with the rest of the short path under [Review and report](/migration-practices/subsequent-review/). In an organisation on the full path, the product's line instead joins the programme's order and review like any other line. When the product is back in support with a plan that covers each job, check the five conditions again; if they hold, it returns to Vendor-managed software.

### When you cannot answer or cannot choose

- Write each `unknown` down on the asset's row, say in its brackets who will close it, and set the `confirm by` date. Do not add "(all five conditions hold)" to a row while one of its answers is still `unknown`.
- Choosing a route does not assess risk. When you still cannot choose, the risk owner or the sector authority chooses.
- A large bespoke estate, critical national infrastructure, or a regulated system needs a specialist as well as the Organisation-wide route.

## Keep this evidence

A [decision note](/resources/records/decision-note/) that the sponsor has accepted: the answers to questions A to D, with who will close each `unknown`, the urgency category and path for each asset, the route, the named owner, and the date the decision will be confirmed. The first rows go on the [inventory record](/resources/records/inventory/).

## Example

An insufficient record is "We are quantum safe" or "This is an IT matter."

A decision-ready record, from [Protect this first](/resources/examples/protect-this-first/): the fictional manufacturer records that product designs must stay confidential for 15 years under its own retention policy, and that its product sensor's firmware verifier cannot accept a new trust anchor after shipment. It answers yes to A and B, so it records itself as an urgent adopter for those two assets and takes the full path. Its office laptops are not where the long-lived designs are kept, so on their own they answer no to all four and stay on the short, supplier-update path; the IT lead later confirms their confidentiality period as six years under the office-records policy, which the IT lead judges short of the many years question A covers. The managing director accepts the decision and names the operations director as migration lead, with the programme charter to follow.

## Limits and next step

This decision does not choose algorithms or dates, and it is not a formal risk assessment. Where the answers are unclear for a regulated or critical system, take the decision to the risk owner or sector authority. Next, on the full path, [set up the programme](/migration-practices/programme/); on the short path, [keep commodity software updated](/migration-practices/commodity-software/), taking any product that fails the fifth condition through the Hard-to-change systems steps as the [five conditions](#five-conditions-for-the-vendor-managed-route) section says.

## Sources

- EU NIS Cooperation Group, A Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography, version 1.1, 11 June 2025. [Roadmap (PDF)](https://ec.europa.eu/newsroom/dae/redirection/document/117507)
- AIVD, CWI, and TNO, The PQC Migration Handbook, second edition, December 2024. [The PQC Migration Handbook (PDF)](https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf)

## Related pages

- [Situation routes](/routes/)
- [Set up the programme](/migration-practices/programme/)
- [Decision note](/resources/records/decision-note/)
- [Inventory record](/resources/records/inventory/)
- [When to start: Mosca's inequality](/learn/explainers/when-to-start/)
