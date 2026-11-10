# Revision Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite every surviving reference page, the six learn lessons, and the editorial policy into the edition contract, with the citations the spec allows.

**Architecture:** Each task replaces one file's body. Front matter keeps the sidebar id set by the routes plan and sets `last_reviewed: 2026-11-10`. Practice pages use only the seven headings in the spec. Learn pages stay procedural-free. The edition voice scan is still not joined to `findVoiceViolations`; this plan removes the phrases anyway so the finish plan can turn the scan on.

**Tech Stack:** Markdown in `docs/`. No new dependency.

**Spec:** `planning/superpowers/specs/2026-11-10-site-revision-design.md`

**Previous plan:** `planning/superpowers/plans/2026-11-10-revision-routes.md`

## Global Constraints

- Follow the guards plan's constraints. Do not commit or otherwise write to git.
- Do not use the edition phrases. Do not use `must` or `shall` unless that same sentence names an allowed authority.
- A sentence that states a date, a duty, or a technical choice begins with **Requirement**, **Authority recommendation**, **Handbook practice**, or **Example**.
- Parameter tables stay out. Vista Security is not cited. No Canadian milestone year is stated.
- ASD's end of 2030 is labelled as ASD's planning milestone for its audience.
- The NCCoE FAQ is six phases, last updated 5 November 2026. CBOM and enterprise discovery field lists are cited to NIST SP 1800-38B, December 2023, as a preliminary draft. The FAQ's statement that those drafts are not planned to become finals is included where the drafts are named.
- FIPS links: https://csrc.nist.gov/pubs/fips/203/final , https://csrc.nist.gov/pubs/fips/204/final , https://csrc.nist.gov/pubs/fips/205/final
- Vendor guide: https://www.cyber.gov.au/publication/post-quantum-questions-to-ask-your-vendors updated 5 November 2026. Use the guide's phrase "common concerns".
- ASD planning publication: https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography
- After every task, `npm run check:sources` exits 0. The build is run once, in Task 12.

## File map

Each row is one task's file. The task replaces the body and aligns front matter. `implementation.md`, the route pages, the work-product pages, and `learn/index.md` are already written; do not rewrite them except to fix a broken link a replacement page introduces.

| Task | File |
| --- | --- |
| 1 | `docs/migration-practices/diagnose.md`, `inventory.md`, `priority.md` |
| 2 | `docs/migration-practices/vendor-plan.md`, `changing-algorithms-again.md`, `subsequent-review.md`, `commodity-software.md`, `release-dates.md`, `index.md` |
| 3 | `docs/algorithm-protocol-options/choosing.md`, `key-establishment.md`, `signatures.md`, `long-lived-roots.md`, `index.md` |
| 4 | `docs/standards-timelines/dates.md` |
| 5 | `docs/standards-timelines/index.md`, `migration-guides.md`, `docs/resources/curated-references.md` |
| 6 | `docs/resources/protect-this-first.md` |
| 7 | `docs/resources/glossary.md` |
| 8 | `docs/resources/editorial-policy.md`, `docs/resources/index.md` |
| 9 | `docs/learn/public-key-cryptography.md`, `quantum-threat.md` |
| 10 | `docs/learn/what-post-quantum-means.md`, `algorithms.md` |
| 11 | `docs/learn/in-real-systems.md`, `standardisation.md` |
| 12 | Build |

---

### Task 1: Diagnose, inventory, and priority

**Files:**
- Modify: `docs/migration-practices/diagnose.md`
- Modify: `docs/migration-practices/inventory.md`
- Modify: `docs/migration-practices/priority.md`

**Interfaces:**
- Consumes: work-product paths `/resources/inventory-record/` and `/resources/priority-record/`
- Produces: the method pages those records depend on

- [ ] **Step 1: Replace `diagnose.md`**

Practice headings. When this applies: the reader has opened a route and has not yet listed the cryptography. Do this: name an owner; separate a vendor-managed estate, an estate with a long confidentiality period, and an estate the reader cannot yet classify; write the first inventory; set a subsequent-review date inside the first month. Keep this evidence: an inventory record, an owner, and a review date. Example: insufficient record "We are quantum safe." Decision-ready record names the owner, the first inventory, and the review date. Limits and next page: `/resources/inventory-record/`. Sources: the August 2023 fact sheet and the Dutch handbook, December 2024. **Authority recommendation** for the Dutch split between urgent adopters and regular adopters, cited to that handbook.

- [ ] **Step 2: Replace `inventory.md`**

When this applies: before anyone claims the cryptography has moved. Do this, in this order: list systems that handle sensitive data or an external connection; for each, record the key-establishment algorithm and the signature algorithm; record who controls the software, the confidentiality period, the renewal, the version where known, and the dependencies; mark what a scan cannot see, including embedded and hardware-bound cryptography; set confidence to `known` or `unknown`. Define a first-pass inventory as that list, and a maintained inventory as the same list with an owner and a subsequent-review date. **Authority recommendation:** the August 2023 fact sheet says discovery tools may not identify embedded cryptography and tells organisations to ask vendors. **Handbook practice:** growth beyond the first pass is described in NIST SP 1800-38B, December 2023, a preliminary draft; a CBOM in that draft is a developing model and is not a requirement of this handbook. The NCCoE FAQ, last updated 5 November 2026, says those drafts are not planned to become finals. Keep this evidence: the inventory record. Example uses the clinic health-record system with confidence `unknown` for the algorithm. Next page: `/resources/inventory-record/`.

- [ ] **Step 3: Replace `priority.md`**

When this applies: an inventory exists. Do this is the qualitative rubric, with no score: data confidentiality period; signatures that many parties change together; a verifier that cannot be updated later; impact; lead time; dependencies; supplier readiness. One tied case in Example: the clinic's health records and its firmware check are both first, for different jobs (`key establishment` and `non-updatable verifier`). One uncertain case: confidence `unknown` stays on the list with an owner, and is not dropped. **Authority recommendation:** NIST IR 8547, October 2026, describes harvest-now, decrypt-later and says signatures are not vulnerable to that attack. **Authority recommendation:** the EU roadmap, 11 June 2025, treats confidentiality protected by public-key cryptography as high-risk when a compromise after 10 years or more would still cause significant damage. Next page: `/resources/priority-record/`. Include the priority-branch figure as a list of the seven branches under Do this. A drawn diagram is optional; the list is the required figure content from the spec.

---

### Task 2: Remaining migration-practice pages

**Files:**
- Modify: the six files named in the file map for Task 2

**Interfaces:**
- Consumes: Task 1 paths
- Produces: practice pages the routes already link to

- [ ] **Step 1: Replace each file on the practice contract**

`vendor-plan.md`. Do this covers a complete answer (store the page, the date, and the product version), a vague answer (ask for the product, the construction, and the date), a missing answer (record `missing` and a follow-up date), and a concerning answer (escalate to procurement and the contract owner). Next page: `/resources/vendor-response-log/`. Sources: the August 2023 fact sheet and the UK NCSC timelines, modified 3 August 2026.

`changing-algorithms-again.md`. Do this checks six capabilities: the configuration can be changed; an owner is named; dependencies are recorded; tests exist; a change window exists; a deprecation path is written. Next page: `/migration-practices/subsequent-review/`. Sources: the Dutch handbook, December 2024, for the instruction to remain able to change algorithms.

`subsequent-review.md`. Do this: list the triggers (a new supplier release, a changed timeline, an unknown that is now known, a failed deployed-state check); set the agenda (open the review log, update confidence, carry unresolved items forward); write the next review date. Next page: `/resources/review-log/`.

`commodity-software.md`. Do this: confirm the supplier update is installed; if the product is out of support or the supplier has no plan, leave this page for the hard-to-change route; run the same exception check as the vendor-managed route. **Authority recommendation:** the UK NCSC timelines, modified 3 August 2026, say migration for standard browsers, operating systems, and mobile devices happens as vendors update those services. Next page: `/standards-timelines/dates/`.

`release-dates.md`. Do this records four dates for one asset: vendor release, testing, production deployment, and end of support. Example walks through a release that slips: the production date moves, the end-of-support date stays, and the priority record is updated rather than left on the old release date. Next page: `/migration-practices/vendor-plan/`.

`index.md`. A reference index. One paragraph on the lifecycle order used by the organisation-wide route, then a link to each page in `migrationPracticesSidebar` with the reader and the output. Sources: NIST IR 8547, October 2026.

---

### Task 3: Algorithm and protocol options

**Files:**
- Modify: the five files under `docs/algorithm-protocol-options/`

**Interfaces:**
- Consumes: `/migration-practices/implementation/` and `/resources/change-record/`
- Produces: the option pages the hard-to-change and long-lived routes read

- [ ] **Step 1: Replace `choosing.md`**

Do this is a branch, not a choice made for the reader. Branches: system type, lifetime, jurisdiction, updateability, supplier control, and compatibility. Every branch ends with the implementation check and the subsequent-review condition. Keep the existing authority split, relabelled: **Authority recommendation** for the EU hybrid guidance (11 June 2025), the Dutch account of Germany, France, the Netherlands, and the UK (December 2024), NIST IR 8547 on hybrid as a temporary hedge (October 2026), the NCSC commodity path (modified 3 August 2026), and the Dutch regular-adopter guidance. **Handbook practice:** record which authority is being followed. State that quantum key distribution is set aside by the Dutch handbook and by ETSI TR 103 619, and that quantum random-number generators are outside this handbook. Link FIPS 203, 204, and 205 by name. No parameter table. Next page: `/migration-practices/implementation/`.

- [ ] **Step 2: Replace the three mechanism pages and the landing**

`key-establishment.md`. Do this: list TLS, VPN, SSH, and email channels that carry a long confidentiality period; name the component and the supplier; record compatibility, performance, testing, and deployment on the change record. **Authority recommendation:** NIST IR 8547, October 2026, says harvest-now, decrypt-later applies where a public-key scheme establishes symmetric keys that protect confidentiality, including recorded network sessions and encrypted email, and recommends ML-KEM-768 as the default parameter set. Do not tabulate other parameter sets. Next page: `/resources/change-record/`.

`signatures.md`. Do this: list signers, verifiers, the PKI, trust stores, clients, firmware, and relying parties; write the dependency and test checklist; one coordinated rollout in Example using the clinic firmware check. **Authority recommendation:** NIST IR 8547 says signatures are not vulnerable to harvest-now, decrypt-later and that the transition is still urgent because it takes longer and more parties coordinate. Define PKI in the sentence as the public-key infrastructure that issues and checks certificates. Next page: `/algorithm-protocol-options/long-lived-roots/`.

`long-lived-roots.md`. Do this is the applicability test (the verifier cannot be updated later, and the device will remain in use) and the procurement checklist: verifier updateability, device lifetime, signing chain, replacement options, stateful-key controls, and supplier commitments. **Authority recommendation:** the UK NCSC timelines include long-lived hardware roots of trust in the 2028 plan row. Next page: `/migration-practices/release-dates/`.

`index.md`. A use-case map with columns: situation, page, authority, evidence to record. Rows for confidentiality (key establishment, NIST IR 8547, the change record), many-party signatures (signatures, NIST IR 8547, the dependency list), and a non-updatable verifier (long-lived roots, NCSC 2028 row, the procurement checklist). Link the three FIPS pages. Next link: `/algorithm-protocol-options/choosing/`.

---

### Task 4: Dates comparison

**Files:**
- Modify: `docs/standards-timelines/dates.md`

**Interfaces:**
- Consumes: nothing new
- Produces: the comparison table the spec's Dates section requires

- [ ] **Step 1: Replace `dates.md`**

Title stays `Post-quantum migration dates`. Description: `Whose migration timeline applies, and which date belongs to which audience.`

When this applies: the reader needs to know which timeline to record. Do this: identify where the organisation operates and where it sells; record one row of the table for each timeline that applies; send a reader who cannot tell to the risk owner or the sector authority. The table columns are authority, audience, milestone, status, asset scope, last checked. Status is only `law`, `standard`, `government plan`, or `recommendation`.

Rows, with the claims limited to the spec's "What this edition may state" cells:

- UK NCSC, modified 3 August 2026. Audience: primarily technical decision-makers and risk owners of large organisations, operators of critical national infrastructure, and companies with bespoke IT; standard browsers, operating systems, and mobile devices follow the supplier update. Milestones: 2028, 2031, 2035, with the jobs already stated on the current page. Status: `recommendation`. Last checked: 10 November 2026.
- EU NIS Cooperation Group roadmap, 11 June 2025. Audience: Member States. Milestones already on the current page, including the end of 2026, 2030, and 2035. Status: `government plan`. Last checked: 10 November 2026.
- NIST IR 8547, October 2026, standards timeline. Audience: users of NIST standards. Deprecation after 2030 and disallowance after 2035. Status: `standard`. The standards timeline is not a deadline for every organisation.
- US federal direction inside the same report. Audience: US federal high-value assets, high-impact systems, and systems that protect data expected to remain mission-sensitive in 2030. Key establishment by 31 December 2030, digital signatures by 31 December 2031, TLS 1.3 no later than 2 January 2030. Status: `government plan`. Use **Requirement** only for the federal sentences that the report states as obligations, and name NIST in that sentence.
- ASD planning publication. Audience: the audience of that publication. Milestone: end of 2030. Status: `recommendation`. **Handbook practice:** do not copy it as a universal deadline.
- Canadian CFDIR guide, 10 July 2024. Audience: Canadian critical-infrastructure owners and operators, and others who adapt the guide. Milestone cell: the guide, with no year stated. Status: `recommendation`.

Example is one cross-border case: an organisation that sells into the UK and holds health records records the NCSC dates and does not drop a second timeline that applies where it operates. Keep this evidence: the timeline adopted, the source and date, and the assets placed on the nearer milestone. Next page: `/migration-practices/priority/`. Sources: the three timeline documents, the ASD planning URL, and the CFDIR PDF URL already used on the current page.

---

### Task 5: Reading lists

**Files:**
- Modify: `docs/standards-timelines/index.md`
- Modify: `docs/standards-timelines/migration-guides.md`
- Modify: `docs/resources/curated-references.md`

**Interfaces:**
- Consumes: the dates page
- Produces: the reference indexes

- [ ] **Step 1: Replace the three lists**

Each entry states what the work covers, what it assumes, what it leaves out, whether it is current or preliminary, and the date last checked (10 November 2026 unless the source itself carries a later date already verified: the vendor guide and the NCCoE FAQ are 5 November 2026). Group entries by task and audience. Add the ASD planning publication and the 5 November 2026 vendor guide. Describe the NCCoE FAQ as six phases. Remove the sentence "Start with an inventory, then four guides." Keep NIST SP 1800-38 labelled as 2023 preliminary drafts, and record that the FAQ says they are not planned to become finals. The standards landing's next action is `/standards-timelines/dates/`.

---

### Task 6: Clinic example

**Files:**
- Modify: `docs/resources/protect-this-first.md`

**Interfaces:**
- Consumes: the work-product pages
- Produces: the only end-to-end example

- [ ] **Step 1: Replace the page**

Keep the label that this is an illustration and not a real organisation. Walk the clinic in this order: initial facts; one inventory-record row for the health records and one for the firmware check; the priority decision that both are first for different jobs; one complete supplier answer; the option recorded with its authority; the change-record fields that show the deployed-state check; the subsequent-review date. Include one rejected alternative: treating the office laptops as a redesign. The reason they are rejected is the NCSC commodity path, modified 3 August 2026: those devices wait for the supplier update. Link each step to the matching work-product page.

---

### Task 7: Glossary

**Files:**
- Modify: `docs/resources/glossary.md`

**Interfaces:**
- Consumes: the learn pages and the mechanism pages
- Produces: the seventh learn step

- [ ] **Step 1: Add the missing entries and keep the existing ones**

Add handbook-wording entries, each linked to a page, for: PKI (the public-key infrastructure that issues and checks certificates; signatures page); KEM (a key-encapsulation mechanism, which establishes a shared secret; key-establishment page); verifier (the component that checks a signature; long-lived roots); root of trust (a check the device cannot replace later; long-lived roots); certificate chain (the linked certificates from a leaf to a trust anchor; signatures page); CBOM (a cryptography bill of materials, a developing model in NIST SP 1800-38B, not a requirement of this handbook; inventory page); discovery (finding where cryptography is used, including what a scan cannot see; inventory page). Keep PQC, hybrid, harvest-now decrypt-later, the three algorithm names, urgent and regular adopter, and crypto-agility. Link ML-KEM, ML-DSA, and SLH-DSA to the FIPS pages.

---

### Task 8: Editorial policy and resources landing

**Files:**
- Modify: `docs/resources/editorial-policy.md`
- Modify: `docs/resources/index.md`

**Interfaces:**
- Consumes: `EDITION_DATE`
- Produces: the policy page the finish plan does not rewrite

- [ ] **Step 1: Replace `editorial-policy.md`**

Title: `Editorial policy`. State the source order: standards and legal requirements, national cyber guidance, sector guidance, illustrative practice. State jurisdiction handling: record the timeline for the place the organisation operates or sells into, and do not copy another jurisdiction's milestone as a universal deadline. Owner: the maintainers of the `pqc-community/handbook` repository. Review sources every quarter and when a cited work is republished. Edition: November 2026. Changelog: one entry for 10 November 2026 that says the chooser, the routes, the learn sequence, the work products, and this voice replaced the first public edition. Report a stale reference through the repository issue tracker at https://github.com/pqc-community/handbook/issues . Name the two validations this build does not complete: a formal screen-reader audit, and observed sessions with a small organisation, a bespoke product owner, procurement, and a risk lead. Sources: NIST IR 8547, October 2026, as the example of a standards source.

- [ ] **Step 2: Replace `resources/index.md`**

Group the work products by route. For each, name the reader and the output. Link the editorial policy and the glossary. Sources: the August 2023 fact sheet.

---

### Task 9: Keys and the quantum threat

**Files:**
- Modify: `docs/learn/public-key-cryptography.md`
- Modify: `docs/learn/quantum-threat.md`

**Interfaces:**
- Consumes: `/learn/`
- Produces: lessons 1 and 2. Each lesson's only onward link is the next lesson.

- [ ] **Step 1: Write lesson 1**

Explain public and private keys, key establishment, encryption, and digital signatures in ordinary sentences. Say where RSA and elliptic-curve cryptography are used: key establishment and signatures on the web, in mail, and in software updates. No migration procedure. Next: `/learn/quantum-threat/`. Sources: NIST IR 8547, October 2026.

- [ ] **Step 2: Write lesson 2**

**Authority recommendation:** name Shor's algorithm as the quantum algorithm that threatens today's public-key key establishment and signatures, and Grover's algorithm as the more limited threat, which does not by itself retire symmetric cryptography on the same timetable. Explain harvest-now, decrypt-later as collecting ciphertext now and decrypting it later, and say it applies to confidentiality. State that this page does not say a cryptographically relevant quantum computer already exists. Next: `/learn/what-post-quantum-means/`. Sources: NIST IR 8547, October 2026.

---

### Task 10: What the new algorithms are

**Files:**
- Modify: `docs/learn/what-post-quantum-means.md`
- Modify: `docs/learn/algorithms.md`

**Interfaces:**
- Produces: lessons 3 and 4

- [ ] **Step 1: Write lesson 3**

Define post-quantum cryptography as public-key cryptography intended to stay secure against a cryptographically relevant quantum computer, running on ordinary computers. Distinguish it from quantum cryptography and from quantum key distribution. **Authority recommendation:** the Dutch handbook, December 2024, advises against relying on the security of quantum key distribution for the time being. Next: `/learn/algorithms/`.

- [ ] **Step 2: Write lesson 4**

State the purpose of ML-KEM (key establishment), ML-DSA (signatures), and SLH-DSA (signatures). Explain a KEM as a way for two parties to establish a shared secret. Describe size and performance only as qualitative trade-offs: post-quantum keys and signatures are often larger, and the deployment cost is the reason to test. No parameter table. Link the three FIPS pages. Next: `/learn/in-real-systems/`. Sources: NIST IR 8547, October 2026, and the FIPS pages.

---

### Task 11: Systems and standards

**Files:**
- Modify: `docs/learn/in-real-systems.md`
- Modify: `docs/learn/standardisation.md`

**Interfaces:**
- Produces: lessons 5 and 6. Lesson 6 links to the glossary.

- [ ] **Step 1: Write lesson 5**

Say where the mechanisms appear: TLS and VPN key establishment, signatures on software and firmware, and certificates. **Authority recommendation:** NIST IR 8547, October 2026, treats hybrid constructions as a temporary hedge. Say what changes: protocols, certificates, devices, and software may need a supplier release rather than a local setting. No migration procedure. Next: `/learn/standardisation/`.

- [ ] **Step 2: Write lesson 6**

State what is final: FIPS 203, FIPS 204, and FIPS 205, linked. State that further algorithms and protocol details remain in development, and point the reader to the NIST CSRC publication pages and to NIST IR 8547, October 2026, for the current transition. Next: `/resources/glossary/`. Also link `/` and `/resources/curated-references/` as onward paths after the glossary.

---

### Task 12: Build

**Files:** none new.

- [ ] **Step 1: Search for banned material and build**

Run:

```bash
rg -n -i "vista security|the clock|secrecy life|the stack|the next pass|weak answer|stronger answer|five responsibilities|where to start|start here" docs src/pages/index.tsx docusaurus.config.ts navigation-structure.md
npm run check:sources
npm run typecheck
npm run build
```

Expected: the search prints nothing. The three commands exit 0. `npm run check:voice` still exits 0 because the edition scan is not joined yet. Do not run `npm run check:records` and treat a failure as a defect of this plan; the finish plan is the first plan that requires it to pass.
