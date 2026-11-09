# Style guide

Rules for public handbook pages in `docs/`. The design spec is [planning/superpowers/specs/2026-11-09-pqc-handbook-design.md](./planning/superpowers/specs/2026-11-09-pqc-handbook-design.md).

## Voice

Practical, neutral, and decision-oriented. Plain enough that the reader can use the page without a cryptographer in the room.

This applies to every visitor-facing string: handbook pages, the homepage, the navbar, and the footer.

- The handbook's own voice is a briefing: plain British English, and complete sentences in body prose. A homepage card may be a noun phrase.
- Open on the reader's decision, the date, or the threat. Algorithm names come after that, with a plain gloss.
- Keep key establishment and signatures as separate jobs where that split changes the action. Record which authority defends hybrid or pure post-quantum. Do not choose for the reader.
- Campaign lines, pep, cute metaphors, hype, and a single-vendor recommendation fail. Quoted weak answers stay casual on purpose.

## Spelling

Use the research notes' spelling consistently:

- **organisation** (not organization)
- **programme** (not program, when meaning a planned set of activities)
- **labelled** (not labeled)

## Page shapes

Five shapes appear in the book:

| Shape | Where | Contract |
| --- | --- | --- |
| **Decision pages** | Practices, options, dates | See order below |
| **Start here** | `docs/start-here/*` | Seat table in [navigation-structure.md](./navigation-structure.md) |
| **Section landings** | `*/index.md` | What the section is for; links to its pages |
| **Kit pages** | Resources artifacts | The artifact itself; when to use it |
| **Short pages** | Migration guides, glossary, Keep software updated | Brief; glossary spells a term once and gives the short form |

**Kit specifics:** Vendor questions includes a tracking sheet (columns: vendor, question, answer, date, source). Protect this first is one worked illustration of an urgent adopter with long-lived records or a long-lived firmware root. Handbook glosses in the glossary are labelled as the handbook's wording.

## Decision-page order

Decision pages (practices, options, and the dates page) open in this order:

1. The decision, date, or threat
2. What can go wrong
3. What a stronger practice looks like
4. What to ask
5. What evidence matters
6. A weak answer beside a stronger one
7. Which pass of the migration the page belongs to
8. Which options exist and who defends each
9. Related pages (via `## Related pages` at the end; see Citations)

Use plain language for the primary reader. Algorithm names arrive after the decision, with a plain gloss on first use (for example: ML-KEM is the NIST key-establishment algorithm; ML-DSA and SLH-DSA are the two NIST signature algorithms).

## Citations

A date, a duty, or a disagreement must be checkable from the sentence.

Any sentence that states a date or whose date it is, what an authority requires, recommends, or sets aside, or a figure from a survey, names the source in the sentence: the body, the document, the month and year, and a link to the **public** page. Where authorities disagree, each position cites the authority that defends it. The handbook's own mapping is labelled as guidance and points at the sources it rests on. A quotation stays in the source's words and stays short. A paraphrase is the handbook's wording and still carries the citation.

**Page endings**

Each page ends with:

```markdown
## Sources
…

## Related pages
…
```

`## Sources` lists the works that page used, with title, body, date, and URL. [Curated references](/resources/curated-references/) is the handbook's full set; a page's Sources list is the subset that page used. A routing page that states no external fact still has `## Sources`, listing the works the pages it links will rely on.

The build runs `npm run check:sources`, which requires at least one `http` link under `## Sources` before the next heading.

## Sourcing gate

A sentence ships when the writer can point to a **filed dump** that contains the claim, or to a line in the purpose or landscape notes that contains both the claim and the public URL. The page links to that URL.

Do **not** treat gitignored local paths as public citations. Material under `.ai-helper-files/` is for drafting only.

**Allowed dump set (examples)** — full table in the design spec:

| Topic | Public URL (use on the page) |
| --- | --- |
| UK PQC migration timelines | https://www.ncsc.gov.uk/guidance/pqc-migration-timelines |
| UK preparation whitepaper | https://www.ncsc.gov.uk/whitepaper/next-steps-preparing-for-post-quantum-cryptography |
| EU NIS Cooperation Group roadmap | https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf |
| NIST IR 8547 (final, October 2026) | https://doi.org/10.6028/NIST.IR.8547 |
| Quantum readiness fact sheet | https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf |
| Dutch PQC Migration Handbook | https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf |
| PQCC migration roadmap | https://pqcc.org/wp-content/uploads/2025/05/PQC-Migration-Roadmap-PQCC-2.pdf |
| NIST SP 1800-38 preliminary drafts | URLs in the project's `sources.txt` for discovery; say discovery is still a 2023 preliminary draft |
| Vista SMB roadmap (vendor blog) | https://vistasecurity.io/pqc-roadmap-small-midsize-businesses/ — label as a vendor blog; leave the 90-day illustration on their page |

**Reading-list works** (NCCoE FAQ, Canadian CFDIR guide, ETSI TR 104 016, ETSI TR 103 619, Dutch government resource list) may repeat the one-line job, date, and URL from the spec; they do not add claims beyond that line.

An unsourced date, percentage, or claim that an authority requires something **does not go on the page**.

## Front matter

Each doc needs `title`, `description`, and `displayed_sidebar` matching [navigation-structure.md](./navigation-structure.md).
