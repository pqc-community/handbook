// Standards summary rules: the preferred section structure and callout, and
// PDF links that say they are PDFs. Timeline date formatting lives in dates.mjs.
import fs from 'node:fs';
import {pipeCells, relativePath, walkMarkdown} from '../lib/markdown.mjs';

function nextNonEmptyLine(lines, start) {
  for (let index = start; index < lines.length; index += 1) {
    if (lines[index].trim()) return index;
  }
  return -1;
}

function findLayoutProblems(relative, content) {
  const problems = [];
  const lines = content.split(/\r?\n/);
  const text = lines.join('\n');
  const positions = {
    summary: text.indexOf('## What it covers'),
    officialTexts: text.indexOf(':::info[Official texts]'),
    timeline: text.indexOf('## Timeline of key dates'),
    sources: text.indexOf('## Sources'),
    related: text.indexOf('## Related pages'),
  };
  const relationshipMatch = text.match(/^## Relationship (?:with other standards|to other standards(?: and guidance)?)\s*$/m);
  positions.relationship = relationshipMatch ? relationshipMatch.index : -1;

  const required = [
    ['What it covers', positions.summary],
    ['Official texts callout', positions.officialTexts],
    ['Timeline of key dates', positions.timeline],
    ['Relationship section', positions.relationship],
    ['Sources', positions.sources],
    ['Related pages', positions.related],
  ];
  for (const [label, position] of required) {
    if (position < 0) problems.push(`missing ${label}`);
  }

  const ordered = required.map(([, position]) => position);
  if (ordered.every((position) => position >= 0) &&
      ordered.some((position, index) => index > 0 && position <= ordered[index - 1])) {
    problems.push('sections are out of order');
  }

  if (positions.officialTexts >= 0) {
    const openingLine = lines.findIndex((line) => line.trim() === ':::info[Official texts]');
    const closingLine = lines.findIndex((line, index) => index > openingLine && line.trim() === ':::');
    if (openingLine < 0 || closingLine < 0) {
      problems.push('Official texts callout is not closed');
    } else if (!/\[[^\]]+\]\(https?:\/\/[^)]+\)/.test(lines.slice(openingLine + 1, closingLine).join('\n'))) {
      problems.push('Official texts callout has no source link');
    } else if (/\*\*(?:Authority|Publication|Status):\*\*/i.test(lines.slice(openingLine + 1, closingLine).join('\n'))) {
      problems.push('Official texts callout repeats document metadata');
    }
  }

  if (positions.timeline >= 0) {
    const headingLine = lines.findIndex((line) => line.trim() === '## Timeline of key dates');
    const headerLine = nextNonEmptyLine(lines, headingLine + 1);
    const dividerLine = headerLine >= 0 ? nextNonEmptyLine(lines, headerLine + 1) : -1;
    const bodyLine = dividerLine >= 0 ? nextNonEmptyLine(lines, dividerLine + 1) : -1;
    const headers = headerLine >= 0 ? pipeCells(lines[headerLine]) : [];
    const divider = dividerLine >= 0 ? pipeCells(lines[dividerLine]) : [];
    const body = bodyLine >= 0 ? pipeCells(lines[bodyLine]) : [];

    if (headers.length !== 2 || headers[0] !== 'Date' || headers[1] !== 'Event' ||
        divider.length !== 2 || !divider.every((cell) => /^:?-{3,}:?$/.test(cell)) ||
        body.length !== 2) {
      problems.push('timeline table must have Date and Event columns');
    }
  }

  return problems.length ? `${relative}: ${problems.join('; ')}` : undefined;
}

export function findStandardsLayoutViolations(standardsDir) {
  return walkMarkdown(standardsDir, {excludeIndex: true}).flatMap((file) => {
    const relative = relativePath(standardsDir, file);
    const problem = findLayoutProblems(relative, fs.readFileSync(file, 'utf8'));
    return problem ? [problem] : [];
  });
}

export function findPdfLinkLabelViolations(standardsDir) {
  return walkMarkdown(standardsDir, {excludeIndex: true}).flatMap((file) => {
    const relative = relativePath(standardsDir, file);
    const content = fs.readFileSync(file, 'utf8');
    const problems = [];
    const markdownLink = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
    const isPdfUrl = (url) =>
      /\.pdf(?:[?#]|$)/i.test(url) ||
      /^https:\/\/doi\.org\/10\.6028\/NIST\.(?:FIPS|SP|IR)\./i.test(url);

    for (const [, label, url] of content.matchAll(markdownLink)) {
      if (isPdfUrl(url) && !/\(PDF\)/i.test(label)) {
        problems.push(`${relative}: PDF link text must include (PDF)`);
      }
    }
    return problems;
  });
}
