// `npm run metrics`: reading load per section, for the three journey pages, and for the
// pages with the most retired routing labels. Uses the same measures as the reading check
// (scripts/checks/reading.mjs), so the report and the check cannot drift apart.
// Usage: node scripts/reading-metrics.mjs [root]
import fs from 'node:fs';
import path from 'node:path';
import {
  JOURNEY_PAGES,
  MAX_LINKS_PER_100_WORDS,
  MAX_SENTENCE_WORDS,
  MAX_WORDS,
  MIN_AVG_SENTENCE_WORDS,
  readingMetrics,
  retiredLabelsIn,
} from './checks/reading.mjs';
import {relativePath, walkMarkdown} from './lib/markdown.mjs';

const root = path.resolve(process.argv[2] ?? process.cwd());
const rows = walkMarkdown(path.join(root, 'docs')).map((file) => {
  const text = fs.readFileSync(file, 'utf8');
  const page = relativePath(path.join(root, 'docs'), file).replace(/\.md$/, '');
  return {page, ...readingMetrics(text), labels: retiredLabelsIn(text).length};
});

const fmt = (n) => (Number.isFinite(n) ? n.toFixed(1) : '0.0');
const row = (cells) => `| ${cells.join(' | ')} |`;

console.log(row(['Section', 'Pages', 'Words', 'Links per 100 words', 'Backticked terms', 'Longest sentence', 'Retired labels', 'Staccato paragraphs']));
console.log('|---|--:|--:|--:|--:|--:|--:|--:|');
const sections = new Map();
for (const r of rows) {
  const key = r.page.includes('/') ? r.page.split('/')[0] : '(root)';
  sections.set(key, [...(sections.get(key) ?? []), r]);
}
const sum = (list, key) => list.reduce((total, r) => total + r[key], 0);
for (const [name, list] of [...sections].sort()) {
  const w = sum(list, 'words');
  console.log(row([name, list.length, w, fmt((100 * sum(list, 'links')) / w), sum(list, 'backticks'), Math.max(...list.map((r) => r.longest)), sum(list, 'labels'), sum(list, 'choppy')]));
}
const words = sum(rows, 'words');
console.log(row(['**All**', rows.length, words, fmt((100 * sum(rows, 'links')) / words), sum(rows, 'backticks'), '', sum(rows, 'labels'), sum(rows, 'choppy')]));

const pageTable = (title, list) => {
  console.log(`\n${title}\n`);
  console.log(row(['Page', 'Words', 'Links per 100 words', 'Backticked', 'Longest sentence', 'Retired labels', 'Staccato paragraphs']));
  console.log('|---|--:|--:|--:|--:|--:|--:|');
  for (const r of list) console.log(row([r.page, r.words, fmt(r.linksPer100), r.backticks, r.longest, r.labels, r.choppy]));
};
const journey = JOURNEY_PAGES.map((p) => p.replace(/^docs\//, '').replace(/\.md$/, ''));
pageTable(`Journey pages (budgets: ${MAX_WORDS} words, ${MAX_LINKS_PER_100_WORDS} links per 100 words, ${MAX_SENTENCE_WORDS}-word sentences, no backticks, paragraphs averaging at least ${MIN_AVG_SENTENCE_WORDS} words a sentence)`, rows.filter((r) => journey.includes(r.page)));
const withLabels = rows.filter((r) => r.labels > 0).sort((a, b) => b.labels - a.labels).slice(0, 20);
if (withLabels.length) pageTable('Pages with retired labels (Standards summaries may quote them)', withLabels);
