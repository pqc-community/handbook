import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const RETIRED_PHRASES = [
  'what you leave with',
  'i own the product dates',
  'i have to ask a vendor',
  'i have to show evidence',
  'i have to change a protocol',
  'i own the plan',
  'choose your path',
  'leave with',
  'operating layer',
  'the rhythm',
];

export const EDITION_PHRASES = [
  'the clock',
  'clocks',
  'secrecy life',
  'the stack',
  'the next pass',
  'weak answer',
  'stronger answer',
  'five responsibilities',
  'where to start',
  'start here',
];

export const AUTHORITY_PATTERN = /\b(NCSC|NIST|FIPS|EU|NIS|ASD|ACSC|CISA|NSA|AIVD|ETSI|CFDIR)\b/;

const MODAL_PATTERN = /\b(must|shall)\b/i;

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

export function voiceFiles(rootDir) {
  return [
    ...walkMarkdown(path.join(rootDir, 'docs')),
    path.join(rootDir, 'src/pages/index.tsx'),
    path.join(rootDir, 'docusaurus.config.ts'),
    path.join(rootDir, 'navigation-structure.md'),
  ];
}

export function findVoiceViolations(rootDir) {
  const violations = [];
  for (const file of voiceFiles(rootDir)) {
    const relative = path.relative(rootDir, file).split(path.sep).join('/');
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    lines.forEach((line, index) => {
      const lower = line.toLowerCase();
      for (const phrase of RETIRED_PHRASES) {
        if (lower.includes(phrase)) {
          violations.push(`${relative}:${index + 1}: ${phrase}`);
        }
      }
    });
  }
  violations.push(...findEditionVoiceViolations(rootDir));
  return violations;
}

export function findEditionVoiceViolations(rootDir) {
  const violations = [];
  for (const file of voiceFiles(rootDir)) {
    const relative = path.relative(rootDir, file).split(path.sep).join('/');
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    lines.forEach((line, index) => {
      const lower = line.toLowerCase();
      for (const phrase of EDITION_PHRASES) {
        if (lower.includes(phrase)) {
          violations.push(`${relative}:${index + 1}: ${phrase}`);
        }
      }
      if (MODAL_PATTERN.test(line) && !AUTHORITY_PATTERN.test(line)) {
        violations.push(`${relative}:${index + 1}: must or shall`);
      }
    });
  }
  return violations;
}

const isMain = process.argv[1]
  && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const rootDir = path.resolve(process.argv[2] ?? process.cwd());
  const violations = findVoiceViolations(rootDir);
  if (violations.length > 0) {
    console.error(violations.join('\n'));
    process.exit(1);
  }
}
