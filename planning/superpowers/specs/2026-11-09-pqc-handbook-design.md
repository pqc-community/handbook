# PQC Handbook design

Date: 2026-11-09

The public site is the PQC Handbook at `https://pqchandbook.com`. It is a sister site to the Secure-by-Design Handbook and the Supply Chain Security Handbook. This edition is the site source. It builds and runs locally, and a push to `main` publishes it with the same GitHub Pages workflow as the sister handbooks. It does not include a blog. DNS for the domain stays at the registrar.

The reader is the person who must decide what the organisation migrates, in what order, and how anyone will know it happened, without being a cryptographer. Migration is the main path through a wider post-quantum cryptography handbook.

## Site shell

New Docusaurus 3.10 app, TypeScript, classic preset, dependency set aligned with the supply-chain handbook (`@docusaurus/core` and `@docusaurus/preset-classic` 3.10.1, React 19). Develop with Node 20.

| Setting | Value |
| --- | --- |
| `title` | PQC Handbook |
| `tagline` | A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding. |
| `url` | `https://pqchandbook.com` |
| `baseUrl` | `/` |
| `trailingSlash` | `true` |
| `organizationName` | `pqc-community` |
| `projectName` | `handbook` |
| Docs `routeBasePath` | `/` |
| `onBrokenLinks` | `throw` |
| `onBrokenAnchors` | `throw` |
| `onBrokenMarkdownLinks` | `throw` |
| Blog | `false` |

The homepage is `src/pages/index.tsx`. Handbook pages live in `docs/` and are served from the site root. `docs/migration-practices/inventory.md` is `/migration-practices/inventory/`.

The navbar shows the site title, which links home, four section sidebars, and a GitHub link to `https://github.com/pqc-community/handbook`:

1. Standards and timelines
2. Migration practices
3. Algorithm and protocol options
4. Resources

Start here has its own sidebar. It is reached from the homepage and the footer. It is not a navbar item. Each page sets `displayed_sidebar` to the sidebar that contains it.

`.gitignore` includes `.ai-helper-files/`, `node_modules/`, `build/`, and `.docusaurus/`. The sister-site trees and the research dumps stay local reference material.

These maintainer files sit at the repo root and are rewritten so they match this spec. They contain no links into the private research wiki:

- `README.md` explains install, `npm start`, `npm run typecheck`, `npm run check:sources`, and `npm run build`, and points at the four notes below
- `purpose-and-positioning.md`
- `navigation-structure.md`
- `style-guide.md`
- `brand-guidelines.md`

`planning/superpowers/specs/` holds this spec. It is outside `docs/`, so the spec is not a public page.

## Book map

Start here routes into the sections below. It does not add a second set of topics.

```text
/
/start-here/
/start-here/own-the-plan/
/start-here/own-the-product-dates/
/start-here/ask-a-vendor/
/start-here/show-evidence/
/start-here/change-a-protocol/
/start-here/keep-software-updated/

/standards-timelines/
/standards-timelines/dates/
/standards-timelines/migration-guides/

/migration-practices/
/migration-practices/where-to-start/
/migration-practices/inventory/
/migration-practices/priority/
/migration-practices/vendor-plan/
/migration-practices/changing-algorithms-again/
/migration-practices/next-pass/

/algorithm-protocol-options/
/algorithm-protocol-options/choosing/
/algorithm-protocol-options/key-establishment/
/algorithm-protocol-options/signatures/
/algorithm-protocol-options/long-lived-roots/

/resources/
/resources/inventory-questions/
/resources/prioritisation-checklist/
/resources/vendor-questions/
/resources/protect-this-first/
/resources/glossary/
/resources/curated-references/
```

Dates are one page. A duty that belongs to one authority stays a link to that authority. Migration guides are one reading list. The Dutch handbook is on that list and is not rewritten. Option pages stay at four: choosing, key establishment, signatures, and long-lived roots. Hybrid, ML-KEM, ML-DSA, SLH-DSA, and stateful hash-based signatures are choices on those pages. Changing algorithms again is its own practice page.

`sidebars.ts` has five hand-written sidebars: `startHereSidebar`, `standardsTimelinesSidebar`, `migrationPracticesSidebar`, `algorithmProtocolOptionsSidebar`, and `resourcesSidebar`. The navbar binds the four section sidebars.

### Start here

Each Start here page names that seat's decisions, the reading order, what the reader leaves with, and a weak answer beside a stronger one.

| Seat | Path | Read in order | Leave with |
| --- | --- | --- | --- |
| I own the plan | `/start-here/own-the-plan/` | Where to start, inventory, priority, dates, the next pass, inventory questions, prioritisation checklist | An inventory, a priority, and a one-page plan |
| I own the product dates | `/start-here/own-the-product-dates/` | Where to start, dates, priority, signatures, long-lived roots, vendor plan, protect this first | A release date tied to one asset, and a vendor question if someone else owns the stack |
| I have to ask a vendor | `/start-here/ask-a-vendor/` | Vendor plan, vendor questions, key establishment, signatures, changing algorithms again | Written questions and a tracking sheet |
| I have to show evidence | `/start-here/show-evidence/` | Where to start, inventory, priority, vendor plan, key establishment, signatures | The records that show the inventory, the priority, the vendor answer, and what shipped |
| I have to change a protocol | `/start-here/change-a-protocol/` | Choosing, key establishment, signatures, changing algorithms again, vendor plan | Which job is changing, which option an authority defends, and a way to roll back |
| Keep software updated | `/start-here/keep-software-updated/` | This page, then dates, then inventory questions if the reader is not sure they are a regular adopter | A reason to keep browsers, operating systems, and cloud services updated, and a route into "I own the plan" if the data or the keys are long-lived |

Keep software updated is linked from Start here and from Where to start. It is not a homepage card.

## Homepage and look

The homepage has five regions:

1. Hero. Title **PQC Handbook**. Subtitle is the tagline above. Primary button: Where to start (`/migration-practices/where-to-start/`). Secondary button: Start here (`/start-here/`).
2. Five role cards, in the seat order above, excluding Keep software updated.
3. One line, "How the handbook works": Standards and timelines, Migration practices, Algorithm and protocol options, Resources.
4. Three featured resources: inventory questions, the prioritisation checklist, and Protect this first.
5. A closing band linking to the options section and to curated references.

The footer lists the Start here paths, the practice pages, the dates page, the option pages, and the kit.

Palette and type, matching the sister sites:

| Role | Value |
| --- | --- |
| Primary cyan | `#00C5D8` |
| Deep teal | `#013B4E` |
| Surface | `#F5FCFD` |
| Body text on light | `#5E6E75` |
| Highlight orange | `#FF9F45`, rare |
| Headings and body | Inter, 700 and 400 |
| Code | Source Code Pro, 500 |

Navbar and footer use the deep teal. Light background is the surface colour. Dark mode uses the deep teal background and surface-coloured text. Meaning is not conveyed by colour alone.

`static/img/logo.svg` and `static/img/favicon.svg` are copies of the shared shield `tech_shield_padlock_v5.svg` from the supply-chain tree. `static/img/social-card.svg` is a new card in these colours with the site name and the tagline.

Pages use the research notes' spelling: organisation, programme, labelled.

## Page contract

Every URL in the book map is a finished first-edition page. Prose is written from the filed dumps under `.ai-helper-files/W264C-pqc-handbook-source-material/` and from the research notes that record both a claim and a public URL. Pages use plain language for the primary reader. Algorithm names arrive after the decision, with a plain gloss on first use: ML-KEM is the NIST key-establishment algorithm, ML-DSA and SLH-DSA are the two NIST signature algorithms.

Five shapes:

- **Decision pages** (practices, options, and the dates page) open with the decision, date, or threat, then what can go wrong, what a stronger practice looks like, what to ask, what evidence matters, a weak answer beside a stronger one, which pass of the migration the page belongs to, which options exist and who defends each, and the related pages.
- **Start here pages** use the seat table above.
- **Section landings** say what the section is for and link to its pages.
- **Kit pages** are the artifact. Inventory questions. A prioritisation checklist. A vendor tracking sheet with the columns vendor, question, answer, date, and source. One worked Protect this first, a labelled illustration of an urgent adopter with long-lived records or a long-lived firmware root. Each kit page says when to use the artifact.
- **Migration guides, the glossary, and Keep software updated** stay short. The glossary spells a term once and gives the short form. Handbook glosses are labelled as the handbook's wording.

Where a migration decision lands on signing, key establishment in a device, or firmware update, the page links to the closest public page in the local Secure-by-Design or Supply Chain Security tree. Secure boot, SBOM and VEX, OTA, vulnerability disclosure, and CRA implementation stay in the Secure-by-Design Handbook. Supplier evidence, product acceptance, attestation, and procurement questions stay in the Supply Chain Security Handbook. Those links are onward reading. They are not the authority for a post-quantum date or duty.

This edition does not publish parameter sets, security proofs, a product catalogue, a symmetric-cryptography migration, quantum key distribution, or quantum random-number generators.

### Page jobs

| Page | Job |
| --- | --- |
| Start here | Send each seat into the reading order |
| Dates | The UK, EU, and NIST clocks from the filed dumps, and whose clocks they are. Canada is the CFDIR reading-list entry, not the CCCS milestone years |
| Migration guides | A reading list. The Dutch handbook is listed and not rewritten |
| Where to start | Inventory before a migration claim, then priority by how long the data or the key must stay good |
| Inventory | What to list before anyone claims a migration |
| Priority | Order work by data lifetime and by key lifetime. Harvest-now, decrypt-later is the confidentiality clock for key establishment. Signatures are a different job |
| Vendor plan | What to ask the organisation that owns the stack |
| Changing algorithms again | The operating capability to change algorithms on a later pass |
| The next pass | One cutover is not the migration |
| Choosing | Hybrid, pure post-quantum, waiting for a vendor update, and doing nothing yet, with the authority that defends each |
| Key establishment | The confidentiality job, including hybrid key agreement |
| Signatures | The authentication job. It does not become urgent because of harvest-now, decrypt-later. It is urgent when many parties must move together, or a check cannot be updated later |
| Long-lived roots | A firmware or trust root that cannot be updated later |
| Inventory questions | Questions a small staff can answer |
| Prioritisation checklist | How to pick what to protect first |
| Vendor questions | Questions plus the tracking-sheet table |
| Protect this first | One worked illustration |
| Glossary | The short forms used in the book |
| Curated references | The works this edition actually cites |

## Citations

A date, a duty, or a disagreement is checkable from the sentence.

Any sentence that states a date or whose date it is, what an authority requires, recommends, or sets aside, or a figure from a survey, names the source in the sentence: the body, the document, the month and year, and a link to the public page. Where authorities disagree, each position cites the authority that defends it. The handbook's own mapping is labelled as guidance and points at the sources it rests on. A quotation stays in the source's words and stays short. A paraphrase is the handbook's wording and still carries the citation.

Each page ends with `## Sources`, then `## Related pages`. Sources lists the works that page used, with title, body, date, and URL. Curated references is the handbook's full set. A page's Sources list is the subset that page used. A routing page that states no external fact still has `## Sources`, listing the works the pages it links will rely on.

### Sourcing gate

A sentence ships when the writer can point to a filed dump that contains the claim, or to a line in the purpose or landscape notes that contains both the claim and the public URL. The page links to that URL.

Use these filed dumps for claims about what an authority says:

| Dump | Public URL | Use |
| --- | --- | --- |
| `ncsc-pqc-migration-timelines-20250320.txt` | https://www.ncsc.gov.uk/guidance/pqc-migration-timelines | UK dates, who they apply to, commodity IT as a software update |
| `ncsc-next-steps-preparing-for-pqc-20240814.txt` | https://www.ncsc.gov.uk/whitepaper/next-steps-preparing-for-post-quantum-cryptography | UK preparation steps recorded in that paper |
| `eu-nis-cg-pqc-roadmap-20250611.txt` | https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf | EU NIS Cooperation Group roadmap |
| `nist-ir-8547-202610.txt` | https://doi.org/10.6028/NIST.IR.8547 | US standards clock. Cite the October 2026 final, not the initial public draft |
| `cisa-nsa-nist-quantum-readiness-20230821.txt` | https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf | Inventory, vendors, supply chain, as of 17 August 2023 |
| `aivd-cwi-tno-pqc-migration-handbook-202412.txt` | https://english.aivd.nl/site/binaries/site-content/collections/documents/2024/12/3/the-pqc-migration-handbook/The+PQC+Migration+Handbook+.pdf | Diagnose, plan, execute. Urgent, regular, and cryptography-supplier organisations. Do not rewrite the book |
| `pqcc-pqc-migration-roadmap-202505.txt` | https://pqcc.org/wp-content/uploads/2025/05/PQC-Migration-Roadmap-PQCC-2.pdf | The four-part checklist, as a supplement |
| `nist-sp-1800-38a-preliminary-draft-202304.txt`, `nist-sp-1800-38b-preliminary-draft-202312.txt`, `nist-sp-1800-38c-preliminary-draft-202312.txt` | The URLs in `sources.txt` | Discovery is still a 2023 preliminary draft. Say so |
| `vista-pqc-roadmap-smb-20261013.txt` | https://vistasecurity.io/pqc-roadmap-small-midsize-businesses/ | A vendor blog used only as a sizing for a small staff. Label it as a vendor blog. Leave the 90-day illustration on their page |

These research-note entries have a URL and a one-line job. A reading-list or curated-references entry may repeat that job, the date, and the URL. It does not add claims beyond that line:

| Work | URL | Job this edition may repeat |
| --- | --- | --- |
| NCCoE migration FAQ, October 2026 | https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/index.html | Start with an inventory, then four guides. Do not name the four from this line |
| Canadian CFDIR guide, July 2024 | https://ised-isde.canada.ca/site/spectrum-management-telecommunications/sites/default/files/documents/Quantum-Readiness%20Best%20Practices%20-%20v04%20-%2010%20July%202024.pdf | Actions a leadership team can take without a cryptographer |
| ETSI TR 104 016, October 2024 | https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf | Eleven steps, repeated each year, for a programme office |
| ETSI TR 103 619 | https://www.etsi.org/deliver/etsi_tr/103600_103699/103619/01.01.01_60/tr_103619v010101p.pdf | Three stages: inventory, plan, execute. Public-key protections. Sets quantum key distribution and quantum random-number generators aside |
| Dutch government resource list | https://www.nldigitalgovernment.nl/overview/quantum-safe-cryptography/useful-resources/ | Use the Dutch handbook for strategy and the PQCC roadmap as a supplement |

The Canada CCCS milestone years, the Cloudflare, Google Cloud, and AWS deployment details, and the Entrust-sponsored Ponemon percentages appear in the landscape notes without a filed dump and, for the vendor status and the CCCS years, without a URL. This edition does not state them. The dates page states the UK, EU, and NIST clocks from the dumps. Canada appears through the CFDIR reading-list entry above. Key establishment explains hybrid and the confidentiality clock from the filed dumps. FIPS 203, FIPS 204, and FIPS 205 are named as the standards this book does not rewrite. This edition does not link them, because the research set has no URL for them. Parameter tables stay out.

NSA CNSA 2.0, BSI TR-02102-1, Executive Order 14412, OMB M-26-15, the Singapore CSA advisory, and the Palo Alto harvest-now page are filed. This edition does not cite them. Citations come from the dump table and the reading-list table above.

An unsourced date, percentage, or claim that an authority requires something does not go on the page.

## Build and verification

Static site. Markdown in `docs/` is the content. The homepage is the only custom React page. There is no CMS and no search service.

| Path | Responsibility |
| --- | --- |
| `docusaurus.config.ts` | Site URL, navbar, footer, broken-link policy, blog off |
| `sidebars.ts` | Five hand-written sidebars |
| `src/pages/index.tsx`, `src/pages/index.module.css` | Homepage regions |
| `src/css/custom.css` | Palette, type, card grid |
| `docs/**/*.md` | Public pages, with `title`, `description`, and `displayed_sidebar` |
| `static/img/` | Shield logo, favicon, social card |
| `scripts/check-sources.mjs` | Exits 1 unless every `docs/**/*.md` file has `## Sources` followed by at least one `http` link before the next heading |
| Root maintainer notes | Purpose, navigation, style, brand, README |

`package.json` script `check:sources` runs that script.

Completion checks, in order:

1. `npm run typecheck`
2. `npm run check:sources`
3. `npm run build`
4. Read locally: the homepage, `/start-here/own-the-plan/`, `/migration-practices/priority/`, and `/resources/vendor-questions/`. Confirm the navbar, the trailing-slash URLs, and a visible Sources list on the three handbook pages.

## Deployment

A push to `main` runs `.github/workflows/deploy.yml`: Node 20, `npm ci`, typecheck, production build, then GitHub Pages. `static/CNAME` contains `pqchandbook.com`. The sources checks stay local. DNS records stay at the registrar.

## Out of scope

- A blog or news stream
- A new logo
- A page per algorithm
- Publishing `.ai-helper-files/`
