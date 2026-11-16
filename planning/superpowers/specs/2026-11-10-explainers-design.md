# Explainers

Date: 2026-11-10

This spec adds four optional concept pages to the Learn path, and one sentence on each of the four short lessons named below. It does not change the numbered list on `/learn/`, the homepage, search, the sitemap plugin, robots, CSV headers, clinic rows, or `last_reviewed: 2026-11-10` on existing pages. Where this spec is silent, the edition design and the critique v2 revision stay in force.

Implementation does not commit, push, or open a pull request. It does not upgrade Docusaurus past 3.10.1 and does not run `npm audit fix`.

## Placement

The navbar stays one Learn item, labelled Learn the basics, pointing at `learnSidebar`. The footer Learn column stays a single link to `/learn/`. No new navbar item and no new footer link.

The numbered core path on `/learn/` stays these seven steps, in this order, with the existing link text:

1. Public key cryptography
2. Quantum threat
3. What post-quantum means
4. Algorithms
5. In real systems
6. Standardisation
7. Glossary

The sentence "This path does not give a migration procedure." stays. After that sentence, and before "When you are ready to plan", the landing page adds a heading **Go deeper** and one sentence: "These pages are optional." Then these four links, in this order:

1. [What the keys actually do](/learn/explainers/keys/)
2. [What a quantum computer changes](/learn/explainers/quantum-computers/)
3. [What a KEM is](/learn/explainers/kem/)
4. [What changes in a TLS connection](/learn/explainers/tls/)

`learnSidebar` keeps the landing page and the six lessons as a flat list. After the six lessons it adds one category, label **Go deeper**, `collapsed: false`, with the four explainer ids in the same order. Glossary stays on `resourcesSidebar` only.

`navigation-structure.md` records that the learn landing keeps the six lessons plus the glossary as step 7, and that Go deeper is an optional list of four explainers on the Learn landing page and in `learnSidebar`. It does not add a navbar item.

Each new page sets `displayed_sidebar: learnSidebar` and `last_reviewed: 2026-11-10`.

## Links from the short lessons

Each short lesson keeps its current next link. One sentence after that link points at the matching explainer. What post-quantum means, Standardisation, and every practice, route, option, and resource page do not gain an explainer sentence.

| Page | Sentence after the existing next link |
| --- | --- |
| Public-key cryptography | For how the two keys differ by job, read [What the keys actually do](/learn/explainers/keys/). |
| The quantum threat | For which quantum effect applies to confidentiality, read [What a quantum computer changes](/learn/explainers/quantum-computers/). |
| Algorithms | For why a KEM is not bulk encryption, read [What a KEM is](/learn/explainers/kem/). |
| In real systems | For where the shared secret sits in a connection, read [What changes in a TLS connection](/learn/explainers/tls/). |

Each explainer links back to its short lesson and onward to the next explainer. The back sentence is "This distinction continues from [short lesson](path)." The onward sentence is "Next: [page](path)." The sequence is keys, then quantum computers, then KEM, then TLS, then the Learn landing page.

| Explainer | Back | Next |
| --- | --- | --- |
| Keys | Public-key cryptography | What a quantum computer changes |
| Quantum computers | The quantum threat | What a KEM is |
| KEM | Algorithms | What changes in a TLS connection |
| TLS | In real systems | Learn the basics |

## Page contract

Every explainer follows this shape.

- The title is the question. The first sentence is the question written out below for that page.
- The opening says the page is for a reader who has read the matching short lesson and wants one further distinction. It names that lesson.
- One worked contrast appears that the short lesson does not hold. Prose carries it. A small table is added where a comparison helps. A sequence diagram is added only on the pages named below.
- Two or three sentences say what the reader should be able to say afterwards.
- Sources name the authority, the document, the date, and a public URL, in the same bullet form as the existing learn pages.
- The next links are the back link and the onward link in the table above.
- Edition voice applies. Complete sentences. Plain British English. A line may use `must` or `shall` only when that same line names an allowed authority (NCSC, NIST, FIPS, EU, NIS, ASD, ACSC, CISA, NSA, AIVD, ETSI, CFDIR). A fact is an **Authority statement**. Source advice is an **Authority recommendation**. A figure or a comparison this handbook draws is a **Handbook explanation**.
- `last_reviewed` is 10 November 2026, written `2026-11-10`.

A diagram is a static `mermaid` fence in the page, with a sentence immediately before it that says what the figure shows. The fence is a `sequenceDiagram` and nothing else. There is no image file, no flowchart, and no other Mermaid type. There is no parameter table, no configuration recipe, and no migration procedure. The clinic, its rows, and its field names do not appear.

## What the keys actually do

Path: `/learn/explainers/keys/`. File: `docs/learn/explainers/keys.md`. Short lesson assumed: Public-key cryptography.

The first sentence is: "Which job does the public key do, and which job does the private key do?" The worked contrast is the table below, which the short lesson does not hold, plus one sequence diagram of an unnamed software update. The page names no algorithm.

**Handbook explanation:**

| Job | What the public key does | What the private key does |
| --- | --- | --- |
| Key establishment | Used to create a shared secret | Recovers that secret |
| Encryption | Encrypts | Decrypts |
| Signing | Checks the signature | Creates the signature |
| Verification | The check itself | Does not reverse the signature |

The running example is an unnamed web session for key establishment, and an unnamed software update for signing and verification. The sequence diagram uses two participants, Publisher and Device. The publisher sends the software update and a signature created with the private key. The device checks that signature with the public key. A note on the device says the check does not reverse the signature. The diagram does not show an algorithm, a certificate chain, or a file format.

Afterwards, three sentences: the public key is used to create a shared secret and the private key recovers it; the private key creates a signature and the public key checks it; checking a signature does not reverse it.

Sources:

- NIST, Transition to Post-Quantum Cryptography Standards (NIST IR 8547), October 2026, for the public-key jobs that report names. `https://doi.org/10.6028/NIST.IR.8547`
- FIPS 203 for post-quantum key establishment, and FIPS 204 and FIPS 205 for post-quantum signatures. `https://csrc.nist.gov/pubs/fips/203/final`, `https://csrc.nist.gov/pubs/fips/204/final`, `https://csrc.nist.gov/pubs/fips/205/final`

The encryption row is a handbook explanation of that classical job. The page does not claim that FIPS 203, FIPS 204, or FIPS 205 standardises public-key encryption.

## What a quantum computer changes

Path: `/learn/explainers/quantum-computers/`. File: `docs/learn/explainers/quantum-computers.md`. Short lesson assumed: The quantum threat.

The first sentence is: "Which quantum effect applies to confidentiality, and which does not?" The page has no diagram. Every claim about a quantum effect is an **Authority statement** from NIST IR 8547, October 2026, and the page says nothing beyond that report. It does not say a cryptographically relevant quantum computer already exists.

The statements are:

- Shor's algorithm threatens today's public-key key establishment and digital signatures.
- Grover's algorithm is the more limited effect and does not by itself retire symmetric cryptography on the same timetable.
- Harvest-now, decrypt-later is a confidentiality risk for information protected now and still sensitive later.
- A signature checked at the time of use is not that confidentiality risk.

The worked contrast the short lesson does not hold is the last statement, set beside the harvest-now statement in this table. The table arrangement is a **Handbook explanation**. The right-hand column is an **Authority statement**, cited to NIST IR 8547, October 2026.

| What is under consideration | What applies |
| --- | --- |
| Information protected now and still sensitive later | Harvest-now, decrypt-later, a confidentiality risk |
| A signature checked at the time of use | Not that confidentiality risk |

Afterwards, three sentences: Shor's algorithm applies to today's public-key key establishment and digital signatures; Grover's algorithm does not by itself retire symmetric cryptography on the same timetable; harvest-now, decrypt-later is a confidentiality risk, and a signature checked at the time of use is not that risk.

Source: NIST IR 8547, October 2026. `https://doi.org/10.6028/NIST.IR.8547`

## What a KEM is

Path: `/learn/explainers/kem/`. File: `docs/learn/explainers/kem.md`. Short lesson assumed: Algorithms.

The first sentence is: "What does a key-encapsulation mechanism produce, and why is that not bulk encryption?" One party encapsulates with the other's public key and produces a ciphertext and a shared secret. The other decapsulates with the private key and recovers the same secret. A protocol such as TLS then derives symmetric keys from that secret, and those keys protect the bulk of the traffic. The KEM does not carry the page, the file, or the health record. "Health record" here is an unnamed example of bulk data. The page does not name the clinic, a supplier, or a product.

The sequence diagram uses two participants, Sender and Recipient. The sender encapsulates with the recipient's public key and holds a ciphertext and a shared secret. The sender sends the ciphertext. The recipient decapsulates with the private key and recovers the same shared secret. The diagram has no parameter set and no ML-KEM-768 label. The sentence after the diagram repeats that the KEM does not carry the page, the file, or the health record.

Afterwards, three sentences: encapsulation produces a ciphertext and a shared secret; decapsulation recovers that secret; the KEM does not carry the page, the file, or the health record.

Sources:

- FIPS 203, for ML-KEM. `https://csrc.nist.gov/pubs/fips/203/final`
- NIST IR 8547, October 2026, for that pattern of use. `https://doi.org/10.6028/NIST.IR.8547`

The page does not name ML-KEM-768 and does not show a parameter set.

## What changes in a TLS connection

Path: `/learn/explainers/tls/`. File: `docs/learn/explainers/tls.md`. Short lesson assumed: In real systems.

The first sentence is: "Where is the shared secret established in a TLS connection, and how is that different from checking who the server is?" The page does not contain the word "handshake". It gives no client setting, no cipher list, and no byte-level exchange.

The sequence diagram is one connection with two participants, Client and Server. One step is key establishment, noted as the shared secret. A separate step is the client checking the server with a signature. The diagram does not show cipher negotiation or message bytes.

The table is a **Handbook explanation** of three patterns. Server authentication stays a separate signature check in every row.

| Exchange | What establishes the shared secret | What still authenticates the server |
| --- | --- | --- |
| Classical | Today's public-key key establishment | A separate signature check |
| Hybrid | A classical key establishment and a post-quantum key establishment used together | A separate signature check |
| Post-quantum-only | Post-quantum key establishment alone | A separate signature check |

**Authority recommendation:** NIST IR 8547, October 2026, treats a hybrid construction as a temporary hedge. This is the same label already used for that hedge on In real systems, because the report is advising an action.

**Authority recommendation:** The UK NCSC timelines, modified 3 August 2026, note that popular browsers can agree a post-quantum key using a hybrid of traditional key exchange and ML-KEM, and that an exact industry-wide mechanism was not yet standardised at publication, so further updates can be expected. The URL is `https://www.ncsc.gov.uk/guidance/pqc-migration-timelines`.

Afterwards, three sentences: key establishment produces the shared secret; checking the server is a separate signature check; that split holds for a classical exchange, a hybrid exchange, and a post-quantum-only exchange.

Sources are NIST IR 8547, October 2026, and the UK NCSC timelines, modified 3 August 2026, at the URLs above. The page does not cite RFC 10024, SP 800-227, or a separate NCSC TLS publication.

## Mermaid

`@docusaurus/theme-mermaid` is added at version 3.10.1, the same version as `@docusaurus/core`. No other Docusaurus package changes version. `markdown.mermaid` is set to `true`. The theme is added to the `themes` array beside the existing local-search theme. `themeConfig.mermaid.theme` is `{light: 'neutral', dark: 'dark'}`. If `Preset.ThemeConfig` does not include `mermaid`, the config adds that field without weakening the type of the rest of the config.

The layout stays the built-in `dagre` layout. `@mermaid-js/layout-elk` is not installed. Pages do not import the dynamic Mermaid component. Only the three sequence diagrams in this spec are added. The quantum page has no `mermaid` fence.

## Left out

These stay out of this change:

- A signatures explainer and a standards explainer.
- Diagram image files, flowcharts, and every Mermaid type other than `sequenceDiagram`.
- A diagram on the quantum page.
- Parameter tables, configuration recipes, and migration procedures.
- Clinic rows, clinic field names, and the word clinic.
- A new navbar item, a new footer link, and any change to search, sitemap, or robots configuration.
- Search-impression measurement.
- ML-KEM-768 on the KEM page, and any candidate algorithm name.
- The word handshake on the TLS page.
- An explainer sentence on What post-quantum means, Standardisation, or any practice, route, option, or resource page.

## Checks

`npm test`, `npm run check:voice`, `npm run check:sources`, and `npm run check:records` pass. The production build passes. The clinic test still passes because no clinic row changes.

After the build, a browser check confirms all of the following:

- `/learn/` shows the seven-step core path, then Go deeper with the four links.
- The Learn sidebar shows the six lessons and then the open Go deeper category with four titles. Opening an explainer leaves the six lessons visible in that sidebar.
- Keys, KEM, and TLS each show a rendered sequence diagram, not a code block. The quantum page shows no diagram.
- Each explainer shows its question, its contrast, its sources, and its back and next links.
- The navbar still has one Learn item.

A broken Mermaid fence must not be published. Docusaurus leaves a bad diagram as an error inside the page rather than failing the whole site, so the browser check of the three rendered diagrams is the gate.
