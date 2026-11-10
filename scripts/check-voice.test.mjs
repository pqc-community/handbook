import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { findVoiceViolations, findEditionVoiceViolations } from './check-voice.mjs';

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

test('flags an edition phrase and a modal verb without an authority', () => {
  const violations = withRoot(
    {
      ...extras,
      'docs/dates.md': 'Use the clock for this organisation.\n',
      'docs/modal.md': 'The reader must record the owner.\n',
      'docs/requirement.md': 'Requirement. NIST IR 8547 says agencies must support TLS 1.3.\n',
    },
    (root) => findEditionVoiceViolations(root),
  );
  assert.ok(violations.some((hit) => hit.includes('docs/dates.md:1: the clock')));
  assert.ok(violations.some((hit) => hit.includes('docs/modal.md:1: must or shall')));
  assert.equal(violations.some((hit) => hit.includes('docs/requirement.md')), false);
});

test('accepts a page that uses the edition terms', () => {
  const violations = withRoot(
    {
      ...extras,
      'docs/clean.md': 'Record the applicable migration timeline and the data confidentiality period.\n',
    },
    (root) => findEditionVoiceViolations(root),
  );
  assert.deepEqual(violations, []);
});

test('the combined scan flags an edition phrase', () => {
  const violations = withRoot(
    {...extras, 'docs/dates.md': 'Three clocks remain.\n'},
    (root) => findVoiceViolations(root),
  );
  assert.ok(violations.some((hit) => hit.includes('docs/dates.md:1: clocks')));
});
