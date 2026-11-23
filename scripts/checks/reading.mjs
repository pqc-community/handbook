// Reader journey rules (reader-journey.md, "Writing Rules for Journey Pages"):
// Which plan you need, Core actions and the Programme overview stay within reading budgets, and the
// retired routing labels do not reappear as labels anywhere on the site, except where a
// Standards summary quotes a source.
import fs from 'node:fs';
import path from 'node:path';
import {classifyLines, isDividerRow, pipeCells, relativePath, walkMarkdown} from '../lib/markdown.mjs';

export const JOURNEY_PAGES = ['docs/plan/index.md', 'docs/plan/core-actions.md', 'docs/plan/programme/index.md'];
export const MAX_WORDS = 900;
export const MAX_LINKS_PER_100_WORDS = 2;
export const MAX_SENTENCE_WORDS = 40;
// Staccato prose: a paragraph of at least MIN_CHOPPY_SENTENCES sentences whose average
// sentence is shorter than MIN_AVG_SENTENCE_WORDS reads as a list of rules rather than
// connected prose (style-guide.md, "Connected, not staccato"). Lists and tables are exempt.
export const MIN_AVG_SENTENCE_WORDS = 15;
const MIN_CHOPPY_SENTENCES = 3;

// Labels from the retired routing model. Words inside a label may be joined by spaces,
// hyphens or a line break. The ordinary words path, route, track and condition stay
// available; only these labels are blocked. The retired page names "Decide whether to
// act", "Start here" (now Which plan you need), "Plan the migration" (now Set dates and
// milestones) and "Baseline" (now Core actions) are matched only with their capital letter,
// so plain English such as "we decide whether to act" or "start here if" is allowed.
export const RETIRED_LABELS = [
  'short path',
  'full path',
  'short and full paths',
  'situation route',
  'asset track',
  'five conditions',
  'fifth condition',
  'urgent adopter',
  'regular adopter',
];
const CASE_SENSITIVE_LABELS = ['Decide whether to act', 'Start here', 'Plan the migration', 'Baseline'];

// Files outside docs/ where navigation and homepage labels live.
const SITE_FILES = ['src/pages/index.tsx', 'sidebars.ts', 'docusaurus.config.ts'];

// Standards summaries describe other publications and may quote their terms, such as the
// AIVD handbook's urgent and regular adopters. Section overviews (index.md) are the
// handbook's own words, so they are checked.
const isQuotingSummary = (name) => name.startsWith('docs/standards/') && !name.endsWith('/index.md');

// The body a reader reads: everything after the front matter and before Sources.
function body(text) {
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').split(/^## Sources\b/m)[0];
}

const stripLinkTargets = (text) => text.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1');
const stripHeadingIds = (text) => text.replace(/\{#[\w-]+\}/g, '');

// Splits text into sentences at . ! or ? followed by space, without breaking at common
// abbreviations.
const ABBREVIATIONS = /\b(e\.g|i\.e|etc|cf|vs|no|para|sec|stat|h\.r)\.$/i;
export function sentences(text) {
  const parts = text.split(/(?<=[.!?])\s+/);
  const out = [];
  for (const part of parts) {
    if (out.length && ABBREVIATIONS.test(out[out.length - 1])) out[out.length - 1] += ` ${part}`;
    else out.push(part);
  }
  return out.map((s) => s.trim()).filter(Boolean);
}

// Paragraphs (prose lines that are not list items) that read as staccato.
export function choppyParagraphs(text) {
  return classifyLines(stripHeadingIds(body(text)))
    .filter((line) => line.kind === 'prose' && !/^\s*(?:[-*+]|\d+\.)\s/.test(line.text))
    .map((line) => sentences(stripLinkTargets(line.text)).map((sentence) => sentence.split(/\s+/).length))
    .filter((lengths) => lengths.length >= MIN_CHOPPY_SENTENCES)
    .map((lengths) => lengths.reduce((total, n) => total + n, 0) / lengths.length)
    .filter((average) => average < MIN_AVG_SENTENCE_WORDS);
}

export function readingMetrics(text) {
  const main = stripHeadingIds(body(text));
  const words = (stripLinkTargets(main).match(/[A-Za-z0-9][\w'’-]*/g) ?? []).length;
  // Internal links: root-relative or relative targets, not images or external URLs.
  const links = (main.match(/(?<!!)\[[^\]]*\]\((?!https?:|mailto:|#)[^)\s]+\)/g) ?? []).length;
  const lines = classifyLines(main);
  const prose = lines.filter((line) => line.kind === 'prose').map((line) => line.text);
  const cells = lines
    .filter((line) => line.kind === 'table' && !isDividerRow(line.text))
    .flatMap((line) => pipeCells(line.text));
  const units = [...prose, ...cells].map((unit) => stripLinkTargets(unit).replace(/^\s*(?:[-*+]|\d+\.)\s+/, ''));
  const longest = Math.max(0, ...units.flatMap(sentences).map((sentence) => sentence.split(/\s+/).length));
  const backticks = (prose.join('\n').match(/`[^`\n]+`/g) ?? []).length;
  return {words, links, linksPer100: words ? (100 * links) / words : 0, longest, backticks, choppy: choppyParagraphs(text).length};
}

// Staccato paragraphs are blocked across every doc page (style-guide.md, "Connected, not
// staccato"). The journey pages are reported by their budget check instead, once.
export const STACCATO_SECTIONS = ['docs'];

export function findStaccatoViolations(root = '.') {
  const violations = [];
  for (const section of STACCATO_SECTIONS) {
    const dir = path.join(root, section);
    if (!fs.existsSync(dir)) continue;
    for (const file of walkMarkdown(dir)) {
      if (JOURNEY_PAGES.includes(relativePath(root, file))) continue;
      const count = choppyParagraphs(fs.readFileSync(file, 'utf8')).length;
      if (count > 0) {
        violations.push(`${relativePath(root, file)}: ${count} staccato paragraphs (3 or more sentences averaging under ${MIN_AVG_SENTENCE_WORDS} words; join related points)`);
      }
    }
  }
  return violations;
}

export function findJourneyBudgetViolations(root = '.') {
  const violations = [];
  for (const page of JOURNEY_PAGES) {
    const file = path.join(root, page);
    if (!fs.existsSync(file)) {
      violations.push(`${page} is missing`);
      continue;
    }
    const m = readingMetrics(fs.readFileSync(file, 'utf8'));
    if (m.words > MAX_WORDS) violations.push(`${page}: ${m.words} words (at most ${MAX_WORDS})`);
    if (m.linksPer100 > MAX_LINKS_PER_100_WORDS) {
      violations.push(`${page}: ${m.linksPer100.toFixed(2)} internal links per 100 words (at most ${MAX_LINKS_PER_100_WORDS})`);
    }
    if (m.longest > MAX_SENTENCE_WORDS) violations.push(`${page}: a sentence of ${m.longest} words (at most ${MAX_SENTENCE_WORDS})`);
    if (m.backticks > 0) violations.push(`${page}: ${m.backticks} backticked terms in prose (none allowed)`);
    if (m.choppy > 0) {
      violations.push(`${page}: ${m.choppy} staccato paragraphs (3 or more sentences averaging under ${MIN_AVG_SENTENCE_WORDS} words; join related points)`);
    }
  }
  return violations;
}

const labelSource = (label) => label.split(' ').map((word) => word.replace(/s$/, 's?')).join('[\\s-]+');
const LABEL_PATTERN = new RegExp(`\\b(${RETIRED_LABELS.map(labelSource).join('|')})s?\\b`, 'gi');
const CASED_PATTERN = new RegExp(`\\b(${CASE_SENSITIVE_LABELS.map(labelSource).join('|')})\\b`, 'g');

// Every retired label in a text, with its line number. Matches across line breaks.
export function retiredLabelsIn(text) {
  const matches = [];
  for (const pattern of [LABEL_PATTERN, CASED_PATTERN]) {
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) matches.push({start: match.index, end: match.index + match[0].length, label: match[0]});
  }
  // Longest match first, so "short and full paths" is reported once, not also as "full path".
  matches.sort((a, b) => a.start - b.start || b.end - a.end);
  const found = [];
  let covered = -1;
  for (const m of matches) {
    if (m.start < covered) continue;
    covered = m.end;
    found.push({line: text.slice(0, m.start).split('\n').length, label: m.label.replace(/\s+/g, ' ')});
  }
  return found;
}

export function findRetiredLabelViolations(root = '.') {
  const violations = [];
  const files = [
    ...walkMarkdown(path.join(root, 'docs')),
    ...SITE_FILES.map((file) => path.join(root, file)).filter((file) => fs.existsSync(file)),
  ];
  for (const file of files) {
    const name = relativePath(root, file);
    if (isQuotingSummary(name)) continue;
    for (const {line, label} of retiredLabelsIn(fs.readFileSync(file, 'utf8'))) {
      violations.push(`${name}:${line}: retired label "${label}"`);
    }
  }
  return violations;
}
