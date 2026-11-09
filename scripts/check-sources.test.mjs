import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { findSourceViolations } from './check-sources.mjs';

function withDocs(files, run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-sources-'));
  for (const [name, body] of Object.entries(files)) {
    const full = path.join(dir, name);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, body);
  }
  try {
    return run(dir);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

test('flags a page with no Sources heading', () => {
  const violations = withDocs(
    { 'guide/a.md': '# Hi\n' },
    (dir) => findSourceViolations(dir),
  );
  assert.equal(violations.length, 1);
  assert.match(violations[0], /guide\/a\.md: missing ## Sources/);
});

test('flags a Sources section whose only http link is under the next heading', () => {
  const violations = withDocs(
    {
      'a.md': [
        '## Sources',
        '',
        'No link in this section.',
        '',
        '## Related pages',
        '',
        '[Home](https://pqchandbook.com/)',
        '',
      ].join('\n'),
    },
    (dir) => findSourceViolations(dir),
  );
  assert.equal(violations.length, 1);
  assert.match(violations[0], /a\.md: ## Sources has no http link/);
});

test('accepts an https link inside Sources', () => {
  const violations = withDocs(
    {
      'a.md': [
        '## Sources',
        '',
        '[UK NCSC](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)',
        '',
        '## Related pages',
        '',
      ].join('\n'),
    },
    (dir) => findSourceViolations(dir),
  );
  assert.deepEqual(violations, []);
});
