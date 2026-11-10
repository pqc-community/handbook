import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { EDITION_DATE, WORK_PRODUCTS, findRecordViolations } from './check-records.mjs';

function withRoot(files, run) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-records-'));
  for (const [name, body] of Object.entries(files)) {
    const full = path.join(root, name);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, body);
  }
  try {
    return run(root);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

function cleanTree() {
  const files = {
    'docs/guide.md': `---\nlast_reviewed: ${EDITION_DATE}\n---\n\n## Sources\n\n- [NCSC](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)\n`,
  };
  for (const product of WORK_PRODUCTS) {
    files[`docs/${product.page}`] = `---\nlast_reviewed: ${EDITION_DATE}\n---\n\n[${product.csv}](/${product.csv.replace('static/', '')})\n\n## Sources\n\n- [NCSC](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)\n`;
    files[product.csv] = `${product.header}\n`;
  }
  return files;
}

test('accepts the edition date and matching CSV headers', () => {
  const violations = withRoot(cleanTree(), (root) => findRecordViolations(root));
  assert.deepEqual(violations, []);
});

test('flags a missing date, a missing CSV link, and a wrong header', () => {
  const files = cleanTree();
  files['docs/guide.md'] = '---\ntitle: Guide\n---\n';
  files['docs/resources/inventory-record.md'] = `---\nlast_reviewed: ${EDITION_DATE}\n---\n\nNo download here.\n`;
  files['static/downloads/priority-record.csv'] = 'asset,owner\n';
  const violations = withRoot(files, (root) => findRecordViolations(root));
  assert.ok(violations.some((hit) => hit.includes('docs/guide.md: missing last_reviewed')));
  assert.ok(violations.some((hit) => hit.includes('docs/resources/inventory-record.md: missing CSV link')));
  assert.ok(violations.some((hit) => hit.includes('static/downloads/priority-record.csv: header')));
});
