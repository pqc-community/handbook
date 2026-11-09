import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { findVoiceViolations } from './check-voice.mjs';

function withRoot(files, run) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-voice-'));
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

const extras = {
  'src/pages/index.tsx': 'export default function Home() { return null }\n',
  'docusaurus.config.ts': 'const config = {}\n',
  'navigation-structure.md': '# Navigation\n',
};

test('flags retired phrases and ignores a clean page', () => {
  const violations = withRoot(
    {
      ...extras,
      'docs/start-here/own-the-plan.md': 'title: I own the plan\n',
      'docs/clean.md': 'The migration plan\n',
      'src/pages/index.tsx': 'what you leave with\n',
    },
    (root) => findVoiceViolations(root),
  );
  assert.ok(violations.some((hit) => hit.includes('docs/start-here/own-the-plan.md:1: i own the plan')));
  assert.ok(violations.some((hit) => hit.includes('src/pages/index.tsx:1: what you leave with')));
  assert.ok(violations.some((hit) => hit.includes('src/pages/index.tsx:1: leave with')));
  assert.equal(violations.some((hit) => hit.includes('docs/clean.md')), false);
});

test('accepts a tree with none of the retired phrases', () => {
  const violations = withRoot(
    { ...extras, 'docs/clean.md': 'The migration plan\n' },
    (root) => findVoiceViolations(root),
  );
  assert.deepEqual(violations, []);
});
