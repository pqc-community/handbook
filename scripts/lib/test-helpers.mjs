// Helpers shared by the test files.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';

// Writes the given files into a temporary folder, runs the callback with that
// folder's path, and removes the folder afterwards.
export function withRoot(files, run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-check-'));
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

// Fails with every violation listed, under a heading that says what to fix.
export function assertNoViolations(violations, heading) {
  assert.deepEqual(violations, [], `${heading}:\n${violations.join('\n')}`);
}
