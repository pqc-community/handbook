// Shared helpers for reading the handbook's Markdown. Every check uses these,
// so front matter, code blocks and tables are recognized the same way everywhere.
import fs from 'node:fs';
import path from 'node:path';

// Every .md file under dir, recursively. Pass {excludeIndex: true} to skip index.md pages.
export function walkMarkdown(dir, {excludeIndex = false} = {}) {
  if (!fs.existsSync(dir)) return [];
  const found = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...walkMarkdown(full, {excludeIndex}));
    } else if (entry.isFile() && entry.name.endsWith('.md') && !(excludeIndex && entry.name === 'index.md')) {
      found.push(full);
    }
  }
  return found.sort();
}

// A path relative to base, with forward slashes, for messages.
export function relativePath(base, file) {
  return path.relative(base, file).split(path.sep).join('/');
}

function unquote(raw) {
  let value = raw.trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1);
  }
  return value.trim();
}

// The value of one front-matter field, unquoted, or undefined.
export function frontMatterField(content, field) {
  const frontMatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontMatter) return undefined;
  const match = frontMatter[1].match(new RegExp(`^${field}:\\s*(.+)$`, 'm'));
  if (!match) return undefined;
  return unquote(match[1]);
}

// Labels every line of a page as 'front-matter', 'fence' (a code block, including
// its delimiters), 'table' (a pipe-table row) or 'prose'. A code block closes only on
// a fence of the same character that is at least as long as the one that opened it.
export function classifyLines(text) {
  const lines = text.split(/\r?\n/);
  const result = [];
  let inFrontMatter = lines[0] === '---';
  let fence;
  lines.forEach((line, index) => {
    const number = index + 1;
    let kind;
    if (inFrontMatter) {
      kind = 'front-matter';
      if (index > 0 && line === '---') inFrontMatter = false;
    } else if (fence) {
      kind = 'fence';
      const close = new RegExp(`^\\s*${fence.character}{${fence.length},}\\s*$`);
      if (close.test(line)) fence = undefined;
    } else {
      const open = line.match(/^\s*(`{3,}|~{3,})/);
      if (open) {
        kind = 'fence';
        fence = {character: open[1][0], length: open[1].length};
      } else if (line.trimStart().startsWith('|')) {
        kind = 'table';
      } else {
        kind = 'prose';
      }
    }
    result.push({number, text: line, kind});
  });
  return result;
}

// The trimmed cells of a pipe-table row, or [] if the line is not one.
export function pipeCells(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith('|') || !trimmed.endsWith('|')) return [];
  return trimmed.slice(1, -1).split('|').map((cell) => cell.trim());
}

// True for a table's divider row, such as | --- | :---: |.
export function isDividerRow(line) {
  const cells = pipeCells(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

// The body of a level-2 section, up to the next level-2 heading, or ''.
export function section(text, heading) {
  const start = text.indexOf(`## ${heading}\n`);
  if (start === -1) return '';
  const rest = text.slice(start + heading.length + 4);
  const next = rest.search(/^## /m);
  return next === -1 ? rest : rest.slice(0, next);
}

// The pipe-table rows in a block of Markdown.
export function tableLines(block) {
  return block.split('\n').filter((line) => line.startsWith('|'));
}
