import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HTTP_LINK = /\]\(https?:\/\/[^)\s]+\)/;

export function findSourceViolations(docsDir) {
  const violations = [];
  for (const file of walkMarkdown(docsDir)) {
    const relative = path.relative(docsDir, file).split(path.sep).join('/');
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    const start = lines.findIndex((line) => line.trim() === '## Sources');
    if (start === -1) {
      violations.push(`${relative}: missing ## Sources`);
      continue;
    }
    let end = lines.length;
    for (let i = start + 1; i < lines.length; i += 1) {
      if (lines[i].startsWith('## ')) {
        end = i;
        break;
      }
    }
    const section = lines.slice(start + 1, end).join('\n');
    if (!HTTP_LINK.test(section)) {
      violations.push(`${relative}: ## Sources has no http link`);
    }
  }
  return violations;
}

function walkMarkdown(dir) {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...walkMarkdown(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      found.push(full);
    }
  }
  return found;
}

const isMain = process.argv[1]
  && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const docsDir = path.resolve(process.argv[2] ?? path.join(process.cwd(), 'docs'));
  const violations = findSourceViolations(docsDir);
  if (violations.length > 0) {
    console.error(violations.join('\n'));
    process.exit(1);
  }
}
