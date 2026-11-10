# Critique v2 Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the clinic records consistent and add the short rules from the critique-v2 spec, without a second rewrite.

**Architecture:** One content edit of existing Markdown. Task 1 locks the clinic values in a test and writes them on every record that carries them. Later tasks add rules around those values. No new pages, no CSV header changes, no homepage change.

**Tech Stack:** Docusaurus 3 Markdown under `docs/`. Node test runner. Existing voice, sources, and records scans.

**Spec:** `planning/superpowers/specs/2026-11-10-critique-v2-revision-design.md`

## Global Constraints

- Do not commit or otherwise write to git.
- Do not add a page, a diagram, a quiz, a parameter table, a spreadsheet, a LATICE phase, or a homepage, search, sitemap, or robots change.
- `last_reviewed` stays `2026-11-10`. CSV headers stay as they are. CSV files stay header-only.
- Body prose is complete sentences in plain British English. Do not use `must` or `shall` unless that same sentence names an allowed authority (`NCSC`, `NIST`, `FIPS`, `EU`, `NIS`, `ASD`, `ACSC`, `CISA`, `NSA`, `AIVD`, `ETSI`, or `CFDIR`).
- Do not use these phrases: `the clock`, `clocks`, `secrecy life`, `the stack`, `the next pass`, `weak answer`, `stronger answer`, `five responsibilities`, `where to start`, `start here`.
- ML-KEM-768 may be named as the default NIST IR 8547 states. Do not print a parameter table.
- The EU roadmap citation is version 1.1, 11 June 2025, at `https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf`.
- Table date cells use `2026-08-14` and `2026-12-01`. Use a straight apostrophe in `supplier's`, matching the surrounding pages.
- The five question groups on `docs/resources/vendor-response-log.md` stay. Do not move those questions out of Communicate and educate.
- Do not relabel existing Authority recommendation sentences except the quantum-threat paragraph in Task 5.
- The short-lived channel appears only on `docs/migration-practices/priority.md`.

## File map

| Task | Files |
| --- | --- |
| 1 | `scripts/check-clinic.test.mjs`, `package.json`, the seven work-product pages, `docs/resources/protect-this-first.md`, `docs/algorithm-protocol-options/key-establishment.md` |
| 2 | `docs/migration-practices/diagnose.md`, `inventory.md`, `priority.md`, `vendor-plan.md`, `implementation.md`, `changing-algorithms-again.md` |
| 3 | `docs/routes/not-sure.md`, `organisation-wide.md`, `vendor-managed-software.md`, `hard-to-change-systems.md`, `ask-a-supplier.md` |
| 4 | `docs/algorithm-protocol-options/choosing.md`, `docs/resources/editorial-policy.md` |
| 5 | `docs/learn/public-key-cryptography.md`, `quantum-threat.md`, `what-post-quantum-means.md`, `algorithms.md`, `in-real-systems.md`, `standardisation.md` |
| 6 | The seven work-product pages, field-rule paragraph only |
| 7 | Build and browser check. No further copy. |

---

### Task 1: Clinic records

**Files:**
- Create: `scripts/check-clinic.test.mjs`
- Modify: `package.json`
- Modify: `docs/resources/protect-this-first.md`
- Modify: `docs/resources/inventory-record.md`
- Modify: `docs/resources/priority-record.md`
- Modify: `docs/resources/vendor-response-log.md`
- Modify: `docs/resources/change-record.md`
- Modify: `docs/resources/review-log.md`
- Modify: `docs/resources/migration-plan.md`
- Modify: `docs/resources/evidence-record.md`
- Modify: `docs/algorithm-protocol-options/key-establishment.md`
- Test: `scripts/check-clinic.test.mjs`

**Interfaces:**
- Consumes: the clinic tables in the spec
- Produces: these exact cell values for later tasks. Health-records inventory confidence is `unknown`. Priority source for the 10-year reason is `EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025`. Supplier letter date is `2026-08-14` and the answer names ML-KEM-768. Closed change option is `ML-KEM-768`, result `Pilot passed`, date `2026-08-14`. Firmware option, authority, result, and date are `unknown`, and the row is marked blocked. Review unresolved item is `blocked firmware option`. Migration-plan next action is `signatures follow-up`.

- [ ] **Step 1: Write the failing test**

Create `scripts/check-clinic.test.mjs`:

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (file) => fs.readFileSync(file, 'utf8');

test('clinic records match the critique-v2 spec', () => {
  const protect = read('docs/resources/protect-this-first.md');
  const inventory = read('docs/resources/inventory-record.md');
  const priority = read('docs/resources/priority-record.md');
  const vendor = read('docs/resources/vendor-response-log.md');
  const change = read('docs/resources/change-record.md');
  const review = read('docs/resources/review-log.md');
  const plan = read('docs/resources/migration-plan.md');
  const evidence = read('docs/resources/evidence-record.md');
  const keys = read('docs/algorithm-protocol-options/key-establishment.md');

  const healthInventory =
    '| Health records on the vendor system | the clinic operations lead | unknown | unknown | the vendor | more than 10 years | unknown | unknown | unknown | unknown | unknown |';
  assert.ok(protect.includes(healthInventory));
  assert.ok(inventory.includes(healthInventory));

  const healthPriority =
    '| Health records on the vendor system | more than 10 years | key establishment | unknown | unknown | unknown | unknown | first for key establishment | confidentiality period longer than 10 years | EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025 | 2026-12-01 |';
  assert.ok(protect.includes(healthPriority));
  assert.ok(priority.includes(healthPriority));
  assert.equal(protect.includes('confidentiality period longer than 10 years | NIST IR 8547'), false);

  const letter =
    '| Clinic software supplier | named in the supplier letter | What key-establishment construction and release date apply to the health-records platform? | The letter names the product and version, names ML-KEM-768, names the release date, and states that signatures are not in that release. | 2026-08-14 | supplier letter | complete | none | record the key-establishment date and open a signatures follow-up |';
  assert.ok(protect.includes(letter));
  assert.ok(vendor.includes(letter));

  const closed =
    "| Health records on the vendor system | Adopt the supplier's key-establishment construction | ML-KEM-768 | NIST IR 8547, October 2026 | One clinic site | Key establishment on the health-records channel | Clients cannot connect after the change | the clinic operations lead | The deployed configuration matches the supplier letter | Pilot passed | 2026-08-14 |";
  assert.ok(protect.includes(closed));
  assert.ok(change.includes(closed));

  assert.match(protect, /blocked: implementation does not start while the option is unknown/i);
  assert.match(change, /blocked: implementation does not start while the option is unknown/i);
  const firmware =
    '| Clinic field device firmware signature check | replace trust anchor before next deployment | unknown | unknown | one spare device in the workshop | signature verification on sample firmware | failed verification on pilot device | the clinic operations lead | compare flashed firmware hash to signed manifest | unknown | unknown |';
  assert.ok(protect.includes(firmware));
  assert.ok(change.includes(firmware));

  assert.equal(protect.includes('**Requirement:** subsequent review'), false);
  assert.ok(review.includes('| unknown | priority record and vendor response log for health records | blocked firmware option | the clinic operations lead | 2026-12-01 |'));
  assert.equal(review.includes('supplier date for key-establishment release'), false);

  assert.ok(plan.includes('| Health records on the vendor system | the clinic operations lead | long data confidentiality period | end of 2030 | EU NIS Cooperation Group roadmap, version 1.1, 11 June 2025 | end of 2030 | supplier release named in the letter of 14 August 2026 | signatures follow-up | 2026-12-01 |'));
  assert.equal(plan.includes('send supplier letter'), false);

  assert.ok(evidence.includes('| The health-records key-establishment pilot passed | change record for health records | supplier letter of 14 August 2026; NIST IR 8547, October 2026 | 2026-08-14 | the clinic operations lead | 2026-12-01 |'));

  assert.match(keys, /firmware check is blocked until an option is known/i);
  assert.equal(keys.includes('leaves the clinic firmware signature check on the signatures page'), false);
});
```

In `package.json`, change the test script to:

```json
"test": "node --test scripts/check-voice.test.mjs scripts/check-sources.test.mjs scripts/check-records.test.mjs scripts/check-clinic.test.mjs"
```

- [ ] **Step 2: Run the test and confirm it fails**

Run: `npm test`

Expected: FAIL in `clinic records match the critique-v2 spec`, because the current rows still have confidence `known`, the NIST source on the 10-year reason, and `**Requirement:** subsequent review`.

- [ ] **Step 3: Write the clinic rows**

On Protect this first, the inventory record, and the priority record, replace the filled clinic rows with the rows asserted above. The inventory record's filled example is the health-records inventory row only. The priority record's filled example is the health-records priority row only. Protect this first keeps both inventory rows and both priority rows.

On the inventory record, replace `confidence` is `known` or `unknown` with: `confidence` is `known` only when both the key-establishment algorithm and the signature algorithm name a construction. Otherwise it is `unknown`.

On Protect this first, replace the Requirement sentence with:

```markdown
**Example:** The clinic sets the subsequent review to 2026-12-01 in the priority record, and opens the [review log](/resources/review-log/) when that date arrives. The agenda follows [subsequent review](/migration-practices/subsequent-review/).
```

Above the firmware change row, on Protect this first and the change record, add:

```markdown
The firmware row is blocked: implementation does not start while the option is unknown.
```

The change record's filled example is the closed health-records row, then that blocked sentence, then the firmware row. Keep the blank template and the CSV link.

Replace the supplier row on Protect this first and the vendor response log with the letter row asserted above. Leave the five LATICE question groups on the vendor response log untouched.

Replace the review-log filled row, the migration-plan filled row, and the evidence filled row with the rows asserted above.

On the key-establishment example, replace the clause that leaves the firmware check on the signatures page with: the firmware check is blocked until an option is known, and long-lived roots comes before a signature choice. Keep ML-KEM-768 and NIST IR 8547 in that example. Do not add a third clinic asset.

Add this source bullet to Protect this first, the priority record, and the migration plan if it is not already there:

```markdown
- EU NIS Cooperation Group, Coordinated Implementation Roadmap on post-quantum cryptography, version 1.1, 11 June 2025. [Roadmap](https://securitydelta.nl/media/com_hsd/report/750/document/Roadmap-on-postquantum-cryptography-PzBJxNUYyeuEdVUacWL696DofZQ-117507.pdf)
```

Keep the existing NIST IR 8547 source bullets. Do not change `last_reviewed` or any CSV file.

- [ ] **Step 4: Run the tests**

Run: `npm test && npm run check:voice && npm run check:sources && npm run check:records`

Expected: all exit 0.

- [ ] **Step 5: Do not commit**

Leave the work in the working tree.

---

### Task 2: Practice pages

**Files:**
- Modify: `docs/migration-practices/diagnose.md`
- Modify: `docs/migration-practices/inventory.md`
- Modify: `docs/migration-practices/priority.md`
- Modify: `docs/migration-practices/vendor-plan.md`
- Modify: `docs/migration-practices/implementation.md`
- Modify: `docs/migration-practices/changing-algorithms-again.md`
- Test: `scripts/check-clinic.test.mjs`

**Interfaces:**
- Consumes: Task 1 clinic values
- Produces: the practice rules later route pages may link to, without copying them

- [ ] **Step 1: Add the failing assertions**

Append this test to `scripts/check-clinic.test.mjs`:

```javascript
test('practice pages state the critique-v2 rules', () => {
  const diagnose = read('docs/migration-practices/diagnose.md');
  const inventory = read('docs/migration-practices/inventory.md');
  const priority = read('docs/migration-practices/priority.md');
  const vendor = read('docs/migration-practices/vendor-plan.md');
  const implementation = read('docs/migration-practices/implementation.md');
  const again = read('docs/migration-practices/changing-algorithms-again.md');

  assert.match(diagnose, /person who can name the systems and accept the subsequent-review date/);
  assert.match(diagnose, /\/routes\/not-sure\//);
  assert.match(inventory, /shared library or service is named in `dependencies`/);
  assert.match(inventory, /`known` only when both algorithm cells name a construction/);
  assert.match(priority, /longer confidentiality period comes first, then the longer lead time/);
  assert.match(priority, /confidentiality period under one year/);
  assert.match(priority, /Assign no numeric score/);
  assert.match(vendor, /not treated as migrated/);
  assert.equal(vendor.includes('product version 4.2'), false);
  assert.equal(vendor.includes('roadmap PDF'), false);
  assert.match(implementation, /Pilot passed/);
  assert.match(implementation, /result of `unknown` means the change is not closed/);
  assert.match(again, /test that has been run/);
});
```

- [ ] **Step 2: Run the test and confirm it fails**

Run: `node --test scripts/check-clinic.test.mjs`

Expected: the new test FAIL. The Task 1 test still PASS.

- [ ] **Step 3: Add the rules**

In `diagnose.md`, under Do this, keep the four numbered actions. Add these two sentences before the Dutch handbook recommendation:

```markdown
The owner is the person who can name the systems and accept the subsequent-review date. Before writing the inventory, answer the questions on [Not sure](/routes/not-sure/): supplier-updated commodity software, data that stays confidential for years, a verifier that cannot be updated, and whether someone is coordinating many assets. An estate that fits none of those is written down as unclassified.
```

In `inventory.md`, after the numbered list, add:

```markdown
**Handbook practice:** List systems that hold sensitive data or have an external connection, then add supplier-controlled and hardware items a scan cannot see. One row per system. A shared library or service is named in `dependencies`, not given a second system row. `confidence` is `known` only when both algorithm cells name a construction. Otherwise it is `unknown`.
```

Keep the existing fact-sheet and CBOM sentences.

In `priority.md`, after the rubric, add:

```markdown
**Handbook practice:** Two assets may both be first when their jobs differ. Within key establishment, the longer confidentiality period comes first, then the longer lead time. A non-updatable verifier comes before a verifier that can be changed on a long cycle, then the longer lead time. Signatures are ordered by how many parties have to change together, then the longer lead time. An unknown factor keeps the row. The inventory owner accepts the order.
```

In the priority example, keep the clinic pair that are both first for different jobs. Add: a short-lived channel with a confidentiality period under one year comes after the health records for key establishment. Do not give that channel a product name. There is no numeric score. Do not add the channel to any other file.

In `vendor-plan.md`, add under Do this:

```markdown
**Handbook practice:** A `complete` answer names the product, the version, the construction, and a date, and the source can be kept. If no commitment has arrived by the follow-up date, procurement records the gap and the system is not treated as migrated.
```

Replace the decision-ready example that mentions product version 4.2 with the clinic letter: judgement `complete`, product and version named in the supplier letter, construction ML-KEM-768, date 14 August 2026, source the supplier letter.

In `implementation.md`, replace the example with the closed health-records change as the decision-ready record and the firmware row as the blocked record. Add: a result of `unknown` means the change is not closed. Do not add a monitoring programme or a protocol specification.

In `changing-algorithms-again.md`, after the six numbered capabilities, add:

```markdown
**Handbook practice:** A capability counts only when its evidence exists: a configuration change that has been shown, a named owner, a dependency row in the inventory, a test that has been run, a change window with a named approver, and a written deprecation path for the construction in use now.
```

- [ ] **Step 4: Run the tests**

Run: `npm test && npm run check:voice && npm run check:sources`

Expected: all exit 0.

- [ ] **Step 5: Do not commit**

---

### Task 3: Routes

**Files:**
- Modify: `docs/routes/not-sure.md`
- Modify: `docs/routes/organisation-wide.md`
- Modify: `docs/routes/vendor-managed-software.md`
- Modify: `docs/routes/hard-to-change-systems.md`
- Modify: `docs/routes/ask-a-supplier.md`
- Test: `scripts/check-clinic.test.mjs`

**Interfaces:**
- Consumes: the route paths already published
- Produces: the multi-route sentence, the vendor stay-conditions, the hard-to-change markers, the supplier output line, and the corrected LATICE sentence

- [ ] **Step 1: Add the failing assertions**

Append:

```javascript
test('routes state the critique-v2 rules', () => {
  const unsure = read('docs/routes/not-sure.md');
  const org = read('docs/routes/organisation-wide.md');
  const vendor = read('docs/routes/vendor-managed-software.md');
  const hard = read('docs/routes/hard-to-change-systems.md');
  const ask = read('docs/routes/ask-a-supplier.md');

  assert.match(unsure, /follow the asset route for each system as well/);
  assert.match(org, /follow the asset route for each system as well/);
  assert.match(org, /LATICE's Communicate and educate is the communication of that result/);
  assert.equal(org.includes('verify the change, communicate it, and set the subsequent review is Communicate and educate'), false);
  assert.match(vendor, /in support and has a written supplier plan/);
  assert.match(hard, /Long-lived roots is read only when the verifier cannot be updated later/);
  assert.match(hard, /A blocked row counts as that change record/);
  assert.match(ask, /one row per product, version, and cryptographic job/);
});
```

- [ ] **Step 2: Run the test and confirm it fails**

Run: `node --test scripts/check-clinic.test.mjs`

Expected: the new test FAIL. Earlier tests still PASS.

- [ ] **Step 3: Edit the five route pages**

In `not-sure.md` and `organisation-wide.md`, state that the organisation-wide route coordinates the programme and the reader follows the asset route for each system as well. Coordinating many assets is not a reason to leave the asset route. Keep the specialist sentence.

In `organisation-wide.md`, replace the LATICE sentence with:

```markdown
**Handbook practice:** The five phase names come from ASD's [planning for post-quantum cryptography](https://www.cyber.gov.au/publication/planning-for-post-quantum-cryptography) publication. The alignment is handbook practice. Name an owner is the step before LATICE. Find dependencies is Locate. Assess confidentiality and constraints is Assess. Prioritise is Triage. Engage suppliers and migrate is Implement. Handbook step 6 verifies the change, records it on the evidence record and the change record, and sets the subsequent review. LATICE's Communicate and educate is the communication of that result. The learn sequence is the education material. The two lists still differ in length.
```

In `vendor-managed-software.md`, replace the exception paragraph with stay-conditions. The reader stays only when all of these hold: the software is supplier-updated browsers, operating systems, or mobile devices; no record needs to stay confidential for years; there is no bespoke system; no verifier that cannot be updated later; and the product is in support and has a written supplier plan. A product that is out of support, or has no written supplier plan, uses the hard-to-change route. An organisation coordinating many assets also opens the organisation-wide route. Keep the existing reading order for the case where the reader stays.

In `hard-to-change-systems.md`, keep the eight links in their current order and mark them in the list text:

1. Inventory, required.
2. Release dates, required.
3. Long-lived roots is read only when the verifier cannot be updated later.
4. Signatures is read only when a signature construction is being chosen.
5. Vendor plan is read only when a supplier is involved.
6. Implementation is read when the product will change, including when the change is intended and the option is still unknown.
7. The change record is read in that same case.
8. The vendor response log is read only when a supplier is involved.

Add: the reader stops when the release dates are recorded and the change record exists. A blocked row counts as that change record.

In `ask-a-supplier.md`, replace the output sentence with: the output is one row per product, version, and cryptographic job. A route-specific plan is still required when the organisation has to change configuration or a verifier, rather than only wait for a release.

- [ ] **Step 4: Run the tests**

Run: `npm test && npm run check:voice && npm run check:sources`

Expected: all exit 0.

- [ ] **Step 5: Do not commit**

---

### Task 4: Choosing an option, and the labels

**Files:**
- Modify: `docs/algorithm-protocol-options/choosing.md`
- Modify: `docs/resources/editorial-policy.md`
- Test: `scripts/check-clinic.test.mjs`

**Interfaces:**
- Consumes: `/migration-practices/implementation/`, `/algorithm-protocol-options/long-lived-roots/`, the FIPS links already on the page
- Produces: one implementation hand-off, the next-action table, and the five label definitions

- [ ] **Step 1: Add the failing assertions**

Append:

```javascript
test('choosing and the editorial policy match the critique-v2 spec', () => {
  const choosing = read('docs/algorithm-protocol-options/choosing.md');
  const policy = read('docs/resources/editorial-policy.md');

  assert.equal(
    (choosing.match(/Open the \[implementation check\]/g) || []).length,
    0,
  );
  assert.match(choosing, /Where a supplier controls the software, the supplier decides the construction and the release date/);
  assert.match(choosing, /policy notes to record/);
  assert.match(choosing, /\| Non-updatable verifier \| Open long-lived roots before choosing a signature \| The change record, closed or blocked \|/);
  assert.match(choosing, /whether every verifier can be updated together/);
  assert.match(policy, /Authority statement/);
  assert.match(policy, /binding obligation inside the audience named by that authority/);
});
```

- [ ] **Step 2: Run the test and confirm it fails**

Run: `node --test scripts/check-clinic.test.mjs`

Expected: the new test FAIL.

- [ ] **Step 3: Edit Choosing an option**

At the top of Do this, add:

```markdown
The reader records the system type, the confidentiality period, whether it can be updated, and who controls the software. The authority decides the timeline, and any hybrid rule, for its own audience. Where a supplier controls the software, the supplier decides the construction and the release date.
```

Before the jurisdiction branch, add: these are policy notes to record, and this page does not choose among them. Before the hybrid paragraphs in the compatibility branch, add the same sentence.

Delete all six lines whose text is:

```markdown
Open the [implementation check](/migration-practices/implementation/) and note the [subsequent-review condition](/migration-practices/subsequent-review/).
```

Leave the single hand-off in Limits and next page.

After the compatibility branch, and before Keep this evidence, add:

```markdown
| Job | What the reader records next | Evidence |
| --- | --- | --- |
| Key establishment | The supplier's construction, or the authority's stated default, and the confidentiality period | The inventory row and the authority citation |
| Signatures | Who has to change together | The priority row |
| Non-updatable verifier | Open long-lived roots before choosing a signature | The change record, closed or blocked |
```

In the compatibility branch, add: ask whether the protocol, the certificate, and the hardware can carry the larger values, and whether every verifier can be updated together. Do not state a size limit. Keep the FIPS links. Do not add ML-KEM-768 to this table.

- [ ] **Step 4: Define the labels**

In `editorial-policy.md`, after Jurisdiction handling, add:

```markdown
## Labels

- **Requirement** is a binding obligation inside the audience named by that authority.
- **Authority recommendation** is the source advising an action.
- **Authority statement** is the source describing a fact.
- **Handbook practice** is what this handbook tells the reader to do.
- **Example** is an illustration, including the clinic.

A date or an obligation records the authority, the date of the source, the jurisdiction, the audience, and the status when those change the meaning.
```

Do not relabel other pages in this task.

- [ ] **Step 5: Run the tests**

Run: `npm test && npm run check:voice && npm run check:sources`

Expected: all exit 0.

- [ ] **Step 6: Do not commit**

---

### Task 5: Learn the basics

**Files:**
- Modify: `docs/learn/public-key-cryptography.md`
- Modify: `docs/learn/quantum-threat.md`
- Modify: `docs/learn/what-post-quantum-means.md`
- Modify: `docs/learn/algorithms.md`
- Modify: `docs/learn/in-real-systems.md`
- Modify: `docs/learn/standardisation.md`
- Test: `scripts/check-clinic.test.mjs`

**Interfaces:**
- Consumes: the FIPS and NIST IR 8547 links already on these pages
- Produces: the corrected sentences. No new lesson.

- [ ] **Step 1: Add the failing assertions**

Append:

```javascript
test('learn lessons match the critique-v2 spec', () => {
  const keys = read('docs/learn/public-key-cryptography.md');
  const threat = read('docs/learn/quantum-threat.md');
  const means = read('docs/learn/what-post-quantum-means.md');
  const algorithms = read('docs/learn/algorithms.md');
  const systems = read('docs/learn/in-real-systems.md');
  const standards = read('docs/learn/standardisation.md');

  assert.equal(keys.includes('only the other key can undo or check'), false);
  assert.match(keys, /Checking a signature does not reverse it/);
  assert.match(threat, /\*\*Authority statement:\*\*/);
  assert.match(threat, /does not by itself retire symmetric cryptography on the same timetable/);
  assert.match(means, /not a guarantee against every future attack/);
  assert.match(algorithms, /\/learn\/standardisation\//);
  assert.match(systems, /leaf certificate for the site, through an intermediate, to a trust anchor/);
  assert.equal(systems.toLowerCase().includes('handshake'), false);
  assert.match(standards, /A published FIPS is a standard/);
  assert.match(standards, /vendor implementation is the product release/);
});
```

The in-real-systems assertion forbids the word `handshake`. While editing that page, remove the existing use of that word as well as not adding a handshake procedure. The current opening says "TLS handshakes"; rephrase that clause to "TLS sessions that protect web traffic" so the test can pass.

- [ ] **Step 2: Run the test and confirm it fails**

Run: `node --test scripts/check-clinic.test.mjs`

Expected: the new test FAIL.

- [ ] **Step 3: Edit the six lessons**

In `public-key-cryptography.md`, delete "What one key in the pair does, only the other key can undo or check." Replace it with: the two keys do different jobs. For key establishment, the public key is used to create a shared secret and the private key recovers it. For a signature, the private key creates the signature and the public key checks it. Checking a signature does not reverse it. Leave the later paragraphs.

In `quantum-threat.md`, change the label on the NIST paragraph from Authority recommendation to Authority statement. Do not add a sentence about Grover.

In `what-post-quantum-means.md`, after the opening paragraph, add: the design aims to resist known quantum attacks, and it is not a guarantee against every future attack.

In `algorithms.md`, add: where the three standards sit among drafts, protocol profiles, and products is covered on [Standardisation](/learn/standardisation/). Do not add a picture or a parameter table.

In `in-real-systems.md`, rephrase the TLS clause so the page does not contain `handshake`. Add: a browser chain runs from the leaf certificate for the site, through an intermediate, to a trust anchor the browser already holds. A firmware check uses the same relationship: the device holds a trust anchor and checks the signature on the image.

In `standardisation.md`, after the three final standards, add: a draft is still open to change. A published FIPS is a standard. A protocol profile, such as a TLS or PKIX specification, is a separate document for how a standard is used on the network. A vendor implementation is the product release that ships that behaviour. Keep the sentence that further algorithms remain in development. Do not name a candidate algorithm.

- [ ] **Step 4: Run the tests**

Run: `npm test && npm run check:voice && npm run check:sources`

Expected: all exit 0.

- [ ] **Step 5: Do not commit**

---

### Task 6: Work-product field rules

**Files:**
- Modify: `docs/resources/inventory-record.md`
- Modify: `docs/resources/priority-record.md`
- Modify: `docs/resources/vendor-response-log.md`
- Modify: `docs/resources/migration-plan.md`
- Modify: `docs/resources/change-record.md`
- Modify: `docs/resources/evidence-record.md`
- Modify: `docs/resources/review-log.md`
- Test: `scripts/check-clinic.test.mjs`

**Interfaces:**
- Consumes: Task 1 rows, which stay intact
- Produces: the same field-rule paragraph on each work-product page

- [ ] **Step 1: Add the failing assertions**

Append:

```javascript
test('work products state the field rules', () => {
  const pages = [
    'docs/resources/inventory-record.md',
    'docs/resources/priority-record.md',
    'docs/resources/vendor-response-log.md',
    'docs/resources/migration-plan.md',
    'docs/resources/change-record.md',
    'docs/resources/evidence-record.md',
    'docs/resources/review-log.md',
  ];
  for (const page of pages) {
    const text = read(page);
    assert.match(text, /Keys, secrets, and personal data stay out of the file/);
    assert.match(text, /separated by a semicolon/);
  }
  assert.match(read('docs/resources/vendor-response-log.md'), /separate row for each product, version, and cryptographic job/);
});
```

- [ ] **Step 2: Run the test and confirm it fails**

Run: `node --test scripts/check-clinic.test.mjs`

Expected: the new test FAIL. The Task 1 row assertions still PASS.

- [ ] **Step 3: Add the paragraph**

On each of the seven pages, after the existing unknown-cell sentence, add:

```markdown
**Handbook practice:** Where the row has a dependencies cell, every dependency goes in that cell, separated by a semicolon. A shared component does not get its own system row. Where the row records a timeline or a source, more than one may be named in that cell, separated by a semicolon. Keys, secrets, and personal data stay out of the file. Name the system.
```

Keep the sentence about a public ticket and an unlocked shared drive. Do not change the filled rows, the blank templates, or the CSV links.

On the vendor response log only, also add:

```markdown
**Handbook practice:** Use a separate row for each product, version, and cryptographic job.
```

- [ ] **Step 4: Run the tests**

Run: `npm test && npm run check:voice && npm run check:records`

Expected: all exit 0. `check:records` still passes because the CSV headers were not edited.

- [ ] **Step 5: Do not commit**

---

### Task 7: Build and browser check

**Files:**
- Modify: none

**Interfaces:**
- Consumes: Tasks 1 to 6
- Produces: a passing build and a checked rendering of five pages

- [ ] **Step 1: Run the full local checks**

Run: `npm test && npm run check:voice && npm run check:sources && npm run check:records && npm run typecheck && npm run build`

Expected: each command exits 0. The build writes `build/sitemap.xml`. Do not edit `static/sitemap.xml`.

- [ ] **Step 2: Serve the build**

Run: `npm run serve -- --host 0.0.0.0 --port 3456`

This needs permission to bind a port. Open these URLs:

- `http://127.0.0.1:3456/resources/protect-this-first/` shows confidence `unknown`, the EU roadmap on the 10-year row, ML-KEM-768, and the firmware row marked blocked.
- `http://127.0.0.1:3456/algorithm-protocol-options/choosing/` shows one next-action table and does not repeat "Open the implementation check" through the branches.
- `http://127.0.0.1:3456/routes/hard-to-change-systems/` shows which links are conditional and that a blocked row counts as the change record.
- `http://127.0.0.1:3456/learn/public-key-cryptography/` shows "Checking a signature does not reverse it."
- `http://127.0.0.1:3456/resources/change-record/` shows the closed health-records row and the blocked firmware row, and the tables are readable.

Stop the server when the five pages have been read.

- [ ] **Step 3: Do not commit**
