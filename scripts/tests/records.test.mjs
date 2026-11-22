import test from 'node:test';
import assert from 'node:assert/strict';
import {buildZip} from '../records-zip.mjs';
import {
  findCsvFieldViolations,
  findCsvLinkViolations,
  findRecordsZipViolations,
  findWorkedExampleViolations,
} from '../checks/records.mjs';
import {assertNoViolations, withRoot} from '../lib/test-helpers.mjs';

const ROOT = process.cwd();

const recordPage = (filled) => `---
title: Sample record
---

## Minimum fields

asset, owner

## Filled example

| asset | owner |
| --- | --- |
${filled}

## Blank template

| asset | owner |
| --- | --- |

Download a blank CSV: [sample.csv](/downloads/sample.csv).
`;

function sampleSite({csv = 'asset,owner\n', filled = '| Laptops | IT lead |', worked = '| asset | owner |\n| --- | --- |\n| Laptops | IT lead |'} = {}) {
  return {
    'docs/resources/records/sample.md': recordPage(filled),
    'docs/resources/examples/protect-this-first.md': `${worked}\n`,
    'static/downloads/sample.csv': csv,
    'static/downloads/pqc-handbook-records.zip': buildZip([{name: 'sample.csv', data: Buffer.from(csv)}]),
  };
}

test('accepts a record page that matches its CSV, the worked example and the zip', () => {
  withRoot(sampleSite(), (root) => {
    assert.deepEqual(findCsvFieldViolations(root), []);
    assert.deepEqual(findWorkedExampleViolations(root), []);
    assert.deepEqual(findRecordsZipViolations(root), []);
  });
});

// Filled-example checks cover the header row as well as the data rows.
test('flags a CSV header, filled row or stale zip that no longer matches', () => {
  const site = sampleSite({filled: '| Phones | IT lead |'});
  site['static/downloads/sample.csv'] = 'asset,owner,status\n';
  withRoot(site, (root) => {
    assert.deepEqual(findCsvFieldViolations(root), [
      'sample.md: CSV header differs from Minimum fields',
      'sample.md: filled row has 2 cells',
      'sample.md: filled row has 2 cells',
    ]);
    assert.deepEqual(findWorkedExampleViolations(root), [
      'sample.md: row not in Protect this first: | Phones | IT lead |',
    ]);
    assert.deepEqual(findRecordsZipViolations(root), [
      'pqc-handbook-records.zip is out of date: run npm run records-zip',
    ]);
  });
});

test('every record page links a CSV that exists', () => {
  assertNoViolations(findCsvLinkViolations(ROOT), 'Record pages and their CSVs');
});

test('CSV headers match each record page', () => {
  assertNoViolations(findCsvFieldViolations(ROOT), 'Record CSVs that differ from their pages');
});

test('filled examples match the worked example', () => {
  assertNoViolations(findWorkedExampleViolations(ROOT), 'Filled example rows missing from Protect this first');
});

test('the records zip holds the current CSVs', () => {
  assertNoViolations(findRecordsZipViolations(ROOT), 'Records zip');
});
