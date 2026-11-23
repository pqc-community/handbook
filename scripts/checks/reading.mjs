// Reader journey rules (reader-journey.md, "Writing Rules for Journey Pages"):
// Start here, Baseline and the Programme overview stay within reading budgets, and the
// retired routing labels do not reappear as labels anywhere outside source summaries.
import fs from 'node:fs';
import path from 'node:path';
import {classifyLines, relativePath, walkMarkdown} from '../lib/markdown.mjs';

export const JOURNEY_PAGES = ['docs/start-here/index.md', 'docs/baseline/index.md', 'docs/programme/index.md'];
export const MAX_WORDS = 900;
export const MAX_LINKS_PER_100_WORDS = 2;
export const MAX_SENTENCE_WORDS = 40;

// Labels from the retired routing model. The ordinary words path, route, track and
// condition stay available; only these labels are blocked.
export const RETIRED_LABELS = [
  'short path',
  'full path',
  'situation route',
  'asset track',
  'five conditions',
  'fifth condition',
  'urgent adopter',
  'regular adopter',
  'decide whether to act',
];

// Standards summaries describe other publications and may quote their terms, such as
// the AIVD handbook's urgent and regular adopters.
const LABEL_EXEMPT_DIRS = ['docs/standards/'];

// The body a reader reads: everything after the front matter and before Sources.
function body(text) {
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').split(/\n## Sources\b/)[0];
}

const stripLinkTargets = (text) => text.replace(/\]\([^)]*\)/g, ']');

export function readingMetrics(text) {
  const main = body(text);
  const words = (stripLinkTargets(main).match(/[A-Za-z0-9][\w'’-]*/g) ?? []).length;
  const links = (main.match(/\]\((\/|\.)[^)]*\)/g) ?? []).length;
  const prose = classifyLines(main)
    .filter((line) => line.kind === 'prose')
    .map((line) => line.text)
    .join('\n');
  const sentences = stripLinkTargets(prose)
    .split(/(?<=[.!?;:])\s+|\n/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
  const longest = Math.max(0, ...sentences.map((sentence) => sentence.split(/\s+/).length));
  const backticks = (prose.match(/`[^`\n]+`/g) ?? []).length;
  return {words, links, linksPer100: words ? (100 * links) / words : 0, longest, backticks};
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
      violations.push(`${page}: ${m.linksPer100.toFixed(1)} internal links per 100 words (at most ${MAX_LINKS_PER_100_WORDS})`);
    }
    if (m.longest > MAX_SENTENCE_WORDS) violations.push(`${page}: a sentence of ${m.longest} words (at most ${MAX_SENTENCE_WORDS})`);
    if (m.backticks > 0) violations.push(`${page}: ${m.backticks} backticked terms in prose (none allowed)`);
  }
  return violations;
}

const LABEL_PATTERN = new RegExp(`\\b(${RETIRED_LABELS.join('|')})s?\\b`, 'i');

export function findRetiredLabelViolations(root = '.') {
  const violations = [];
  for (const file of walkMarkdown(path.join(root, 'docs'))) {
    const name = relativePath(root, file);
    if (LABEL_EXEMPT_DIRS.some((dir) => name.startsWith(dir))) continue;
    for (const line of classifyLines(fs.readFileSync(file, 'utf8'))) {
      if (line.kind === 'front-matter' || line.kind === 'fence') continue;
      const match = line.text.match(LABEL_PATTERN);
      if (match) violations.push(`${name}:${line.number}: retired label "${match[1]}"`);
    }
  }
  return violations;
}
