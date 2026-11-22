import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {DOWNLOADS_DIR, ZIP_NAME, buildZip, listCsvFiles} from './records-zip.mjs';

const RESOURCES = 'docs/resources';
const WORKED_EXAMPLE = path.join(RESOURCES, 'protect-this-first.md');

function cells(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
}

function section(text, heading) {
  const start = text.indexOf(`## ${heading}\n`);
  if (start === -1) return '';
  const rest = text.slice(start + heading.length + 4);
  const next = rest.search(/^## /m);
  return next === -1 ? rest : rest.slice(0, next);
}

function tableLines(block) {
  return block.split('\n').filter((line) => line.startsWith('|'));
}

// Record pages are the ones that offer a blank CSV download.
function recordPages() {
  return fs
    .readdirSync(RESOURCES)
    .filter((name) => name.endsWith('.md'))
    .map((name) => ({name, text: fs.readFileSync(path.join(RESOURCES, name), 'utf8')}))
    .map((page) => ({...page, csv: page.text.match(/\(\/downloads\/([a-z-]+\.csv)\)/)?.[1]}))
    .filter((page) => page.csv);
}

function csvHeader(csv) {
  return fs.readFileSync(path.join(DOWNLOADS_DIR, csv), 'utf8').trimEnd().split('\n');
}

test('every record page links a CSV that exists', () => {
  const pages = recordPages();
  assert.ok(pages.length >= 9, `expected at least nine record pages, found ${pages.length}`);
  for (const page of pages) {
    assert.ok(fs.existsSync(path.join(DOWNLOADS_DIR, page.csv)), `${page.name}: missing ${page.csv}`);
  }
});

test('CSV headers match each record page', () => {
  for (const page of recordPages()) {
    const lines = csvHeader(page.csv);
    const minimum = section(page.text, 'Minimum fields').trim().split('\n')[0].split(', ');
    const blank = tableLines(section(page.text, 'Blank template'));
    if (lines[0] === 'field,entry') {
      // Documents that run down the page: one CSV line per field.
      const fields = lines.slice(1).map((line) => line.replace(/,$/, ''));
      assert.deepEqual(fields, minimum, `${page.name}: CSV fields differ from Minimum fields`);
      const tableFields = blank.slice(2).map((line) => cells(line)[0]);
      assert.deepEqual(tableFields, minimum, `${page.name}: blank template differs from Minimum fields`);
    } else {
      const header = lines[0].split(',');
      assert.equal(lines.length, 1, `${page.name}: CSV should hold only a header row`);
      assert.deepEqual(header, minimum, `${page.name}: CSV header differs from Minimum fields`);
      assert.deepEqual(cells(blank[0]), minimum, `${page.name}: blank template differs from Minimum fields`);
      for (const line of tableLines(section(page.text, 'Filled example'))) {
        if (/^\|\s*-/.test(line)) continue;
        if (cells(line).length !== header.length) assert.fail(`${page.name}: filled row has ${cells(line).length} cells`);
      }
    }
  }
});

test('filled examples match the worked example', () => {
  const worked = fs.readFileSync(WORKED_EXAMPLE, 'utf8');
  for (const page of recordPages()) {
    for (const line of tableLines(section(page.text, 'Filled example'))) {
      if (/^\|\s*-/.test(line)) continue;
      assert.ok(worked.includes(line), `${page.name}: row not in Protect this first: ${line.slice(0, 90)}`);
    }
  }
});

test('the records zip holds the current CSVs', () => {
  const committed = fs.readFileSync(path.join(DOWNLOADS_DIR, ZIP_NAME));
  assert.ok(
    committed.equals(buildZip(listCsvFiles())),
    `${ZIP_NAME} is out of date: run npm run records-zip`,
  );
});
