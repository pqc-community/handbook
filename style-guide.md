# PQC Handbook - Style Guide

Editorial standards for voice, terminology, attribution, page structure, and sourcing across the PQC Handbook. Visual identity lives in [brand-guidelines.md](./brand-guidelines.md); URL routing and sidebars live in [navigation-structure.md](./navigation-structure.md); mission, audience, editorial thesis, and scope live in [purpose-and-positioning.md](./purpose-and-positioning.md); how readers are routed, and the reading budgets for journey pages, live in [reader-journey.md](./reader-journey.md).

## 1. Voice and Tone

Write in a calm, practical, neutral, and evidence-led **briefing register** for experienced security, engineering, product, procurement, and risk professionals who are responsible for a post-quantum transition without specialist cryptographers in-house.

- **Accessible ≠ Basic English**: Explain *cryptographic* concepts (such as key encapsulation vs signing, hybrid constructions, or hardware trust anchors) clearly without assuming lattice or number-theory background. Never dumb down standard technical, operational, or governance English into primer-style phrasing:
  - *Avoid*: `"organisations that have to migrate … and do not have a cryptographer to do the deciding"` → *Prefer*: `"organisations planning a post-quantum migration without specialist cryptography staff"`
  - *Avoid*: `"decide what to migrate, in what order, and how it will know"` → *Prefer*: `"decide what to migrate, in what order, and how to evidence the transition"`
  - *Avoid*: `"before anyone claims the cryptography has moved"` → *Prefer*: `"before claiming systems have migrated"`
- **Decision first, cryptography second**: Open substantive pages on the operational decision, system constraint, supplier dependency, or external timeline that brings the reader there — then introduce algorithms, protocol profiles, and standards where they inform that decision.
- **Separate cryptographic jobs**: Do not treat post-quantum migration as a single cutover where urgency and coordination differ. Keep **key establishment** (driven by data confidentiality horizons and harvest-now, decrypt-later risk), **digital signatures** (driven by relying-party and PKI coordination), and **non-updatable verifiers** (long-lived hardware or firmware roots of trust) distinct.
- **Neutral across authorities and suppliers**: Where national cyber authorities or standards bodies take different positions (for example, on hybrid vs post-quantum-only deployment), present each option alongside the authority that supports it rather than choosing on the reader's behalf. Never endorse commercial products or adopt marketing hype.

## 2. Language, Mechanics, and Terminology

- **British English**: Use British spelling consistently — *organisation*, *programme* (for a planned set of activities; *program* only for computer code), *prioritise*, *standardisation*, *labelled*, *recognise*.
- **Direct, natural prose**: Prefer active voice and clear sentence structure. Use second person (*you*) for steps a practitioner carries out directly, and name specific organisational roles — *executive sponsor*, *migration lead*, *asset owner*, *procurement*, *legal or risk*, *operations*, or *supplier* — when responsibilities sit across functions.
- **Connected, not staccato**: Join related points into sentences that show how they relate, using *so*, *because*, *but*, *which*, *if*, and *while*, rather than a run of short declaratives that each start with their subject. Vary sentence length, keep colons for introducing a list or an example rather than joining two clauses, and give each paragraph one idea. When a review adds a rule, work it into an existing sentence instead of appending another one. On journey pages, `npm run check` flags any paragraph of three or more sentences that averages under 15 words a sentence.
  - *Avoid*: `"Answer for the organisation as a whole. A question applies if any system fits it. Not sure counts as yes. Do not wait for a complete inventory."` → *Prefer*: `"Answer for the organisation as a whole: a question applies if any system fits it, and one such system is enough, so there is no need to wait for a complete inventory."`
- **Acronyms**: Spell out abbreviations on first use on a page — for example, *post-quantum cryptography (PQC)*, *key-encapsulation mechanism (KEM)*, *cryptography bill of materials (CBOM)* — unless the short form is universally clearer in a heading or table and explained immediately in text or the [Glossary](./docs/templates/reference/glossary.md).
- **Dates**: Write dates in British day–month–year order in prose (*5 November 2026*) and ISO 8601 (`2026-11-10`) in front matter and structured record tables. `npm test` and `npm run check` fail on an ISO date in prose; a deliberate format example needs an entry in `ISO_FORMAT_EXAMPLES` in `scripts/checks/dates.mjs`.

### Preferred Domain Terms

Use clear, literal domain terms consistently across guides and templates:

| Preferred term | Meaning |
| --- | --- |
| **applicable migration timeline** | The dated milestones of an authority that apply to the organisation's jurisdiction, sector, or customer base |
| **data confidentiality period** | How long protected information needs to remain confidential |
| **subsequent review** | A scheduled date or trigger to reopen and update migration records |
| **insufficient record** / **decision-ready record** | Contrasting examples showing an unverifiable assertion (such as *"We are quantum safe"*) alongside an actionable, auditable record |

## 3. Authority Language and Attribution

Overstating obligations is one of the most common failure modes in PQC guidance. Keep legal mandates, standards timelines, advisory recommendations, and handbook guidance clearly separated through natural prose attribution:

- **Attribute in prose, not with bold sentence-prefix tags**: Do **not** prefix paragraphs or sentences with ledger labels such as `**Handbook practice:**`, `**Authority recommendation:**`, `**Authority statement:**`, `**Handbook wording:**`, `**Requirement:**`, or `**Example:**`. Unattributed operational guidance in this handbook is already handbook practice. When citing an external position, name the authority, document, date, governed audience, and an accurate verb directly in the sentence (*"OMB M-26-15 requires US federal agencies to…"*, *"The EU NIS Cooperation Group roadmap recommends…"*, *"NIST IR 8547 notes that…"*).
- **Calibrate modal verbs**: Reserve `must` and `shall` for genuine binding obligations where the sentence names the issuing authority and governed audience. For handbook guidance and non-binding options, use direct instructional verbs (*record*, *verify*, *ask*, *escalate*) or measured phrasing (*can support*, *is recommended by*, *helps demonstrate*). Avoid claiming that an option *"is required"* or *"proves compliance"* without a specific source and scope.

## 4. Page Patterns

Structure pages around the reader's job rather than forcing every topic into identical headings. Typical patterns across the handbook:

| Page type | Reader job & structural guidance |
| --- | --- |
| **Learn lessons & explainers** (`/learn/`) | Build conceptual understanding in plain prose before planning begins. Keep lessons focused on one core distinction without mixing in migration checklists or parameter tables; use optional explainers (and diagrams where helpful) to explain a related distinction in more detail. |
| **Journey pages** (`/plan/`, `/plan/core-actions/`, `/plan/programme/`) | Take the reader from the four questions to a first action, readable alone, within the reading budgets and writing rules in [reader-journey.md](./reader-journey.md). Each outcome ends in an action with who does it; special cases sit at the end of the page. |
| **Practice & option guides** (`/plan/programme/*`, `/technology-options/`) | Walk through when the step applies, what to do or evaluate, what evidence to retain, a concrete contrast between an insufficient and a decision-ready record, and what remains for the next step. |
| **Records** (`/templates/records/`) | Explain when to use the record, list its fields, show a realistic filled example alongside a blank template and downloadable CSV (`/downloads/*.csv`), and state handling rules (`unknown` for unverified cells rather than guesses; no keys, secrets, or personal data; access controls matching the sensitivity of an asset register). |
| **Standards & guidance summaries** (`/standards/`) | Open with what the source covers; use a focused callout to link its official texts, adding context only to distinguish editions, drafts, or errata; show key dates in a compact two-column table with dates kept on one line; and explain its relationship to other standards and guidance. |
| **Worked examples** (`/templates/examples/`) | Fill the records one fictional organisation keeps, using the fictional organisation conventions set out after this table: all five records for a full programme in Protect this first, whose rows each record page's filled example must match verbatim, and the core actions' two records in Stay on supplier updates. |
| **Reference indexes & glossary** (`index.md`, `glossary.md`) | Route readers cleanly without duplicating full guides. Keep glossary entries alphabetical and concise, naming the standard directly in prose where a formal definition is cited. |

Where pages use a worked organisational example, align with the shared fictional UK manufacturer in [Protect this first](./docs/templates/examples/protect-this-first.md) (the core actions agency in [Stay on supplier updates](./docs/templates/examples/stay-on-supplier-updates.md) stays on its own page), keep its invented facts and event dates explicit, and keep downloadable CSV headers in `static/downloads/` matched to their page tables.

## 5. Sourcing and Citations

- **Cite primary public sources**: Attribute dates, duties, algorithm properties, and inter-authority differences to primary publications — naming the issuing body, document title, publication or modification date, and official `https://` URL. Every doc page ends with `## Sources` (containing Markdown links to the works used) followed by curated `## Related pages`.
- **Source hierarchy**: When ordering multi-source lists, list sources from most authoritative downward:
  1. Standards and legal requirements
  2. National cyber guidance
  3. Sector guidance
  4. Illustrative practice
- **Preserve scope and document status**:
  - Separate **published algorithm standards** (e.g. FIPS 203/204/205), **standards deprecation schedules** (e.g. NIST IR 8547's general standards horizon), **binding government directives** (e.g. US federal agency deadlines), and **national planning milestones** (e.g. UK NCSC, EU NIS Cooperation Group, or ASD guidance). Always state *whose* audience a milestone applies to; never copy one jurisdiction's date as a universal deadline.
  - Cite final publications rather than superseded initial public drafts, and explicitly label preliminary or draft documents as drafts when referencing them.
  - Link rather than rewrite external handbooks and standards; keep parameter tables in the underlying FIPS/standards documents.
  - Treat links to the **Secure-by-Design Handbook** and **Supply Chain Security Handbook** as onward engineering or assurance reading, not as authorities for PQC dates or obligations.
  - Never cite or link local drafting files under `.ai-helper-files/` or unverified survey/marketing claims.

## 6. Metadata and Naming Lengths

Every Markdown file under `docs/` includes the four front-matter fields below, and may add an optional `search_title` (sidebar ordering is controlled explicitly in `sidebars.ts`):

```yaml
---
title: Inventory the cryptography
search_title: Build a cryptographic inventory for PQC migration
sidebar_label: Inventory the cryptography
description: List public-key cryptography system by system, with several discovery methods, including embedded and supplier-controlled cryptography a scanner misses.
displayed_sidebar: migrationPracticesSidebar
---
```

### Search titles and descriptions

A result should tell the handbook's audience exactly what the page answers, in the words they would search with. Write for the reader, not for keywords: no keyword stuffing, clickbait, superlatives, questions written to bait clicks, or sales language. The same British English, neutrality, and attribution rules apply as in the page body.

- **Titles**: A doc's `title` is its `<h1>` and sidebar text. Its browser title is its `search_title` if set, otherwise its `title`, followed by ` | PQC Handbook`, and it also feeds Open Graph and Twitter previews. Keep every browser title distinct and within 65 characters in total.
  - Add `search_title` only where the `title` is too long for a results list (such as a standard's full official title, which stays the `<h1>`) or too vague out of context ("SSH", "Timelines", "Register"). It must describe the same page in the same terms and never promise more.
  - Patterns:
    - standards: the identifier, then a plain description ("NIST IR 8547: PQC transition, 2030 and 2035");
    - technology cards: "Post-quantum" plus the technology ("Post-quantum SSH");
    - records: the record name plus "template";
    - worked examples: "Worked example:" plus who it is about.
  - Use sentence case.
- **Descriptions**: The search snippet. `100–160` characters (aim for about `120–155`), distinct across the site. Say what the page answers or helps the reader do, starting with the content rather than "This page", and make no claim the page does not support. For a standards summary, name the issuer, what the document does, its audience, and a key date where the page gives one.
- **Distinct jobs**: Give routing pages, practice guides, and standard summaries different titles and snippets so they do not compete for the same query.

### Search vocabulary

Aim at specific, practical queries rather than broad head terms. Use these terms where the page supports them, at most one or two per title or description, and never as a list:

| Reader's term | Where it belongs |
| --- | --- |
| **post-quantum cryptography (PQC)**, **post-quantum migration**, **PQC migration** | Learn, the journey pages, practices, and section overviews. Spell out "post-quantum" in titles; use "PQC" for a second mention or where it is part of a document's own name. |
| **harvest-now, decrypt-later** | Key-establishment pages: the quantum-threat lesson, forward secrecy, when to start, Which plan you need, and the programme's first moves. |
| **ML-KEM, ML-DSA, SLH-DSA**, with their former names **CRYSTALS-Kyber, CRYSTALS-Dilithium, SPHINCS+** | The FIPS 203, 204 and 205 summaries and the algorithms lesson. Use former names in descriptions only, never as the main name. |
| **Authority plus date** (for example "UK NCSC 2028, 2031 and 2035", "NIST 2030 and 2035", "CNSA 2.0") | Standards and migration-guide descriptions, only for dates the page states, attributed to the authority and its audience. |
| **cryptographic inventory**, **cryptography bill of materials (CBOM)** | The inventory practice and inventory record. |
| **crypto-agility** | The crypto-agility lesson, Keep the ability to change again, and CSWP 39. |
| **hybrid key exchange**, **hybrid TLS** | The hybrid lesson, the TLS explainer and card, and RFC 10024. |
| **post-quantum** plus a technology (**TLS**, **SSH**, **VPN**, **PKI**, **code signing**, and so on) | Each technology card's `search_title`. |
| **questions to ask suppliers** or **vendors**, **purchase requirements** | The suppliers practice, vendor response log, purchase requirements record, and the ACSC, CISA and NSA vendor-questions guide. |
| **template** | Record pages, because readers search for templates. |
| **without specialist cryptography staff** | The homepage, Which plan you need, and the Learn overview. |
| **quantum-safe**, **quantum-resistant** | Only where attributed (ETSI uses "quantum-safe") or where the page is about the claim itself. Never as a claim about a product or organisation. |
| **Q-Day** | Not used: hype vocabulary (see [purpose-and-positioning.md](./purpose-and-positioning.md)). |

### Length bounds

- **Checked by `npm run check`**, with tests in `scripts/tests/search.test.mjs`:
  - browser title `≤ 65` characters;
  - description `100–160` characters;
  - distinct browser titles and descriptions;
  - no `search_title` that repeats `title`.
- **UI surface length bounds** (checked by `npm run check`):
  - Page `title`: `3–160` characters (keep narrative and practice titles concise, typically `≤ 60` characters; `/standards/` pages may carry full official titles, with a shorter `search_title`).
  - Sidebar labels (`sidebar_label` and `sidebars.ts` categories): `2–50` characters.
  - Top navbar and footer link labels (`docusaurus.config.ts`): `2–32` characters (`2–24` for footer column headings) so horizontal and mobile navigation never overflow.

## 7. Editorial Review Checklist

Before merging new or revised content, check that the page passes these tests:

- **Audience fit**: Can an experienced technical, risk, or procurement lead act on the page without specialist cryptography training — and without feeling talked down to?
- **Decision clarity**: Does the page open on a real migration decision, constraint, or timeline rather than a detached algorithm lecture?
- **Job separation**: Are key establishment, digital signatures, and non-updatable verifiers kept distinct where their urgency or rollout differs?
- **Honest sourcing**: Is every date, requirement, and authority recommendation attributed with its source, date, and target audience?
- **Freshness**: Could a publication status, protocol profile, product capability, or recommendation have changed? If so, is the claim tied to a dated primary source and clearly framed as current at that date?
- **Actionable evidence**: Does the page show what concrete record or artifact demonstrates the work (rather than vague claims of being *"quantum safe"*)?
- **Search result**: Read out of context, do the browser title and description tell the reader exactly what the page answers, accurately and without sales language?
- **Clean checks**: Do `npm test`, `npm run check`, `npm run typecheck`, and `npm run build` pass?
