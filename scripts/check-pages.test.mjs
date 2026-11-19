import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  findPageViolations,
} from './check-pages.mjs';

function withDocs(files, run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-pages-'));
  for (const [name, body] of Object.entries(files)) {
    const full = path.join(dir, name);
    fs.mkdirSync(path.dirname(full), {recursive: true});
    fs.writeFileSync(full, body);
  }
  try {
    return run(dir);
  } finally {
    fs.rmSync(dir, {recursive: true, force: true});
  }
}

test('flags missing, too-short, and overly long page titles', () => {
  const longTitle = 'A'.repeat(MAX_TITLE_LENGTH + 1);
  const violations = withDocs(
    {
      'missing.md': '---\ndescription: No title field\n---\n',
      'short.md': '---\ntitle: Hi\n---\n',
      'long.md': `---\ntitle: "${longTitle}"\n---\n`,
    },
    (dir) => findPageViolations(dir),
  );
  assert.ok(violations.some((v) => v.includes('missing.md: missing title')));
  assert.ok(
    violations.some((v) =>
      v.includes(`short.md: title length 2 is below ${MIN_TITLE_LENGTH}`),
    ),
  );
  assert.ok(
    violations.some((v) =>
      v.includes(
        `long.md: title length ${MAX_TITLE_LENGTH + 1} exceeds ${MAX_TITLE_LENGTH}`,
      ),
    ),
  );
});

test('accepts unquoted and quoted titles within bounds', () => {
  const violations = withDocs(
    {
      'plain.md': '---\ntitle: Timelines\n---\n',
      'quoted.md':
        '---\ntitle: "FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard"\n---\n',
    },
    (dir) => findPageViolations(dir),
  );
  assert.deepEqual(violations, []);
});

test('all handbook docs have valid page title lengths', () => {
  const docsDir = path.resolve(process.cwd(), 'docs');
  assert.deepEqual(findPageViolations(docsDir), []);
});
