# PQC Handbook - Style Guide

Editorial standards for voice, terminology, attribution, page structure, and sourcing across the PQC Handbook. Visual identity lives in [brand-guidelines.md](./brand-guidelines.md); URL routing and sidebars live in [navigation-structure.md](./navigation-structure.md); mission, audience, editorial thesis, and scope live in [purpose-and-positioning.md](./purpose-and-positioning.md).

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
- **Acronyms**: Spell out abbreviations on first use on a page — for example, *post-quantum cryptography (PQC)*, *key-encapsulation mechanism (KEM)*, *cryptography bill of materials (CBOM)* — unless the short form is universally clearer in a heading or table and explained immediately in text or the [Glossary](./docs/resources/reference/glossary.md).
- **Dates**: Write dates in British day–month–year order in prose (*5 November 2026*) and ISO 8601 (`2026-11-10`) in front matter and structured record tables.

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
| **Situation routes** (`/routes/`) | Help readers confirm whether a route fits their estate (calling out exceptions clearly), follow a short ordered reading path into the reference sections, and see which work product they will produce. |
| **Practice & option guides** (`/migration-practices/`, `/technology-options/`) | Walk through when the step applies, what to do or evaluate, what evidence to retain, a concrete contrast between an insufficient and a decision-ready record, and what remains for the next step. |
| **Work-product templates** (`/resources/`) | Explain when to use the record, list its fields, show a realistic filled example alongside a blank template and downloadable CSV (`/downloads/*.csv`), and state handling rules (`unknown` for unverified cells rather than guesses; no keys, secrets, or personal data; access controls matching the sensitivity of an asset register). |
| **Standards & guidance summaries** (`/standards/`) | Open with what the source covers; use a focused callout to link its official texts, adding context only to distinguish editions, drafts, or errata; show key dates in a compact two-column table with dates kept on one line; and explain its relationship to other standards and guidance. |
| **Reference indexes & glossary** (`index.md`, `glossary.md`) | Route readers cleanly without duplicating full guides. Keep glossary entries alphabetical and concise, naming the standard directly in prose where a formal definition is cited. |

Where pages use a worked organisational example, align with the shared fictional UK manufacturer in [Protect this first](./docs/resources/examples/protect-this-first.md), keep its invented facts and event dates explicit, and keep downloadable CSV headers in `static/downloads/` matched to their page tables.

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

Every Markdown file under `docs/` includes the four front-matter fields below (sidebar ordering is controlled explicitly in `sidebars.ts`):

```yaml
---
title: Inventory the cryptography
sidebar_label: Inventory
description: List public-key cryptography across the estate, including embedded and supplier-controlled components a scanner cannot see, before claiming systems have migrated.
displayed_sidebar: migrationPracticesSidebar
---
```

- **Search-intent clarity**: A doc's `title` serves as both its `<h1>` and browser `<title>` (`<title> | PQC Handbook`), and `description` serves as its search snippet. Give each page a distinct title and snippet matching its specific job so routing pages, practice guides, and standard summaries do not compete for the same query.
- **UI surface length bounds** (checked by `npm run check`):
  - Page `title`: `3–160` characters (keep narrative and practice titles concise, typically `≤ 60` characters; `/standards/` pages may carry full official titles).
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
- **Clean checks**: Do `npm test`, `npm run check`, `npm run typecheck`, and `npm run build` pass?
