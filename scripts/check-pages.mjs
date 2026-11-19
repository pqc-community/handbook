import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

export const MIN_TITLE_LENGTH = 3;
export const MAX_TITLE_LENGTH = 160;

function walkMarkdown(dir) {
  const found = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...walkMarkdown(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      found.push(full);
    }
  }
  return found;
}

function extractTitle(content) {
  const frontMatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontMatter) return undefined;
  const match = frontMatter[1].match(/^title:\s*(.+)$/m);
  if (!match) return undefined;
  let title = match[1].trim();
  if (
    (title.startsWith('"') && title.endsWith('"')) ||
    (title.startsWith("'") && title.endsWith("'"))
  ) {
    title = title.slice(1, -1);
  }
  return title.trim();
}

export function findPageViolations(docsDir) {
  const violations = [];
  for (const file of walkMarkdown(docsDir)) {
    const relative = path.relative(docsDir, file).split(path.sep).join('/');
    const title = extractTitle(fs.readFileSync(file, 'utf8'));
    if (!title) {
      violations.push(`${relative}: missing title`);
      continue;
    }
    if (title.length < MIN_TITLE_LENGTH) {
      violations.push(
        `${relative}: title length ${title.length} is below ${MIN_TITLE_LENGTH}`,
      );
    } else if (title.length > MAX_TITLE_LENGTH) {
      violations.push(
        `${relative}: title length ${title.length} exceeds ${MAX_TITLE_LENGTH}`,
      );
    }
  }
  return violations;
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const docsDir = path.resolve(
    process.argv[2] ?? path.join(process.cwd(), 'docs'),
  );
  const violations = findPageViolations(docsDir);
  if (violations.length > 0) {
    console.error(violations.join('\n'));
    process.exit(1);
  }
}
