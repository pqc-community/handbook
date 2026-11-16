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

  const firmwareInventory =
    '| Firmware signature check that cannot be updated in the field | the clinic operations lead | unknown | unknown | unknown | unknown | unknown | unknown | unknown | firmware trust anchor | unknown |';
  assert.ok(protect.includes(firmwareInventory));

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

  assert.match(keys, /firmware/i);
  assert.match(keys, /blocked/i);
  assert.equal(keys.includes('leaves the clinic firmware signature check on the signatures page'), false);
});

test('practice pages state the critique-v2 rules', () => {
  const diagnose = read('docs/migration-practices/diagnose.md');
  const inventory = read('docs/migration-practices/inventory.md');
  const priority = read('docs/migration-practices/priority.md');
  const vendor = read('docs/migration-practices/vendor-plan.md');
  const implementation = read('docs/migration-practices/implementation.md');
  const again = read('docs/migration-practices/changing-algorithms-again.md');

  assert.match(diagnose, /name the systems/);
  assert.match(diagnose, /subsequent-review/);
  assert.match(diagnose, /\/routes\/not-sure\//);
  assert.match(inventory, /`dependencies`/);
  assert.match(inventory, /shared/);
  assert.match(inventory, /both algorithm cells/);
  assert.match(inventory, /known/);
  assert.match(priority, /confidentiality period/);
  assert.match(priority, /lead time/);
  assert.match(priority, /under one year/);
  assert.match(priority, /no numeric score/);
  assert.match(vendor, /migrated/);
  assert.equal(vendor.includes('product version 4.2'), false);
  assert.equal(vendor.includes('roadmap PDF'), false);
  assert.match(implementation, /pilot/i);
  assert.match(implementation, /not closed/);
  assert.match(again, /test/);
  assert.match(again, /deprecation/);
});

test('routes state the critique-v2 rules', () => {
  const unsure = read('docs/routes/not-sure.md');
  const org = read('docs/routes/organisation-wide.md');
  const vendor = read('docs/routes/vendor-managed-software.md');
  const hard = read('docs/routes/hard-to-change-systems.md');
  const ask = read('docs/routes/ask-a-supplier.md');

  assert.match(unsure, /asset route/);
  assert.match(unsure, /each system/);
  assert.match(org, /asset route/);
  assert.match(org, /each system/);
  assert.match(org, /Communicate and educate/);
  assert.equal(org.includes('verify the change, communicate it, and set the subsequent review is Communicate and educate'), false);
  assert.match(vendor, /in support/);
  assert.match(vendor, /written supplier plan/);
  assert.match(hard, /long-lived roots/);
  assert.match(hard, /verifier cannot be updated/);
  assert.match(hard, /blocked/);
  assert.match(hard, /change record/);
  assert.match(ask, /product/);
  assert.match(ask, /version/);
  assert.match(ask, /cryptographic job/);
});

test('choosing and the editorial policy match the critique-v2 spec', () => {
  const choosing = read('docs/algorithm-protocol-options/choosing.md');
  const policy = read('docs/resources/editorial-policy.md');

  assert.equal(
    (choosing.match(/Open the \[implementation check\]/g) || []).length,
    0,
  );
  assert.match(choosing, /supplier/);
  assert.match(choosing, /construction/);
  assert.match(choosing, /release date/);
  assert.match(choosing, /policy notes/);
  assert.match(choosing, /Non-updatable verifier/);
  assert.match(choosing, /long-lived roots/);
  assert.match(choosing, /change record/);
  assert.match(choosing, /updated together/);
  assert.match(policy, /Authority statement/);
  assert.match(policy, /binding obligation/);
  assert.match(policy, /audience/);
});

test('learn lessons match the critique-v2 spec', () => {
  const keys = read('docs/learn/public-key-cryptography.md');
  const threat = read('docs/learn/quantum-threat.md');
  const means = read('docs/learn/what-post-quantum-means.md');
  const algorithms = read('docs/learn/algorithms.md');
  const systems = read('docs/learn/in-real-systems.md');
  const standards = read('docs/learn/standardisation.md');

  assert.equal(keys.includes('only the other key can undo or check'), false);
  assert.match(keys, /public key/);
  assert.match(keys, /private key/);
  assert.match(keys, /shared secret/);
  assert.match(keys, /not reverse/);
  assert.match(threat, /\*\*Authority statement:\*\*/);
  assert.match(threat, /Grover/);
  assert.match(threat, /symmetric/);
  assert.match(means, /guarantee/);
  assert.match(means, /future attack/);
  assert.match(algorithms, /\/learn\/standardisation\//);
  assert.match(systems, /leaf certificate/);
  assert.match(systems, /intermediate/);
  assert.match(systems, /trust anchor/);
  assert.equal(systems.toLowerCase().includes('handshake'), false);
  assert.match(standards, /draft/);
  assert.match(standards, /published FIPS/);
  assert.match(standards, /standard/);
  assert.match(standards, /protocol profile/);
  assert.match(standards, /vendor implementation/);
  assert.match(standards, /product release/);
});

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
    assert.match(text, /secrets/);
    assert.match(text, /personal data/);
    assert.match(text, /stay out/);
    assert.match(text, /semicolon/);
  }
  assert.match(read('docs/resources/vendor-response-log.md'), /product/);
  assert.match(read('docs/resources/vendor-response-log.md'), /version/);
  assert.match(read('docs/resources/vendor-response-log.md'), /cryptographic job/);
});
