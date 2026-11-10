import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const EDITION_DATE = '2026-11-10';

export const WORK_PRODUCTS = [
  {
    page: 'resources/inventory-record.md',
    csv: 'static/downloads/inventory-record.csv',
    header:
      'system,owner,key-establishment algorithm,signature algorithm,software control,confidentiality period,renewal,version,dependencies,not visible to a scan,confidence',
  },
  {
    page: 'resources/priority-record.md',
    csv: 'static/downloads/priority-record.csv',
    header:
      'asset,confidentiality period,job,impact,lead time,dependencies,supplier readiness,decision,reason,source,subsequent review',
  },
  {
    page: 'resources/vendor-response-log.md',
    csv: 'static/downloads/vendor-response-log.csv',
    header:
      'supplier,product and version,question,answer,date,source,judgement,follow-up,decision',
  },
  {
    page: 'resources/migration-plan.md',
    csv: 'static/downloads/migration-plan.csv',
    header:
      'asset,owner,why it is included,applicable timeline,authority,milestone,dependency,next action,subsequent review',
  },
  {
    page: 'resources/change-record.md',
    csv: 'static/downloads/change-record.csv',
    header:
      'system,change,option,authority,pilot scope,tests,rollback trigger,who can roll back,deployed-state check,result,date',
  },
  {
    page: 'resources/evidence-record.md',
    csv: 'static/downloads/evidence-record.csv',
    header: 'claim,record,source,date,owner,subsequent review',
  },
  {
    page: 'resources/review-log.md',
    csv: 'static/downloads/review-log.csv',
    header: 'date,what was reviewed,unresolved items,owner,next review',
  },
];

function linksToCsv(pageText, csv) {
  const publicPath = `/${csv.replace(/^static\//, '')}`;
  return pageText.includes(csv) || pageText.includes(publicPath);
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

export function findRecordViolations(rootDir) {
  const violations = [];
  const docsDir = path.join(rootDir, 'docs');
  const editionLine = `last_reviewed: ${EDITION_DATE}`;

  for (const file of walkMarkdown(docsDir)) {
    const relative = path.relative(docsDir, file).split(path.sep).join('/');
    const docPath = `docs/${relative}`;
    const text = fs.readFileSync(file, 'utf8');
    if (!text.includes(editionLine)) {
      violations.push(`${docPath}: missing last_reviewed`);
    }
  }

  for (const product of WORK_PRODUCTS) {
    const docPath = `docs/${product.page}`;
    const pagePath = path.join(docsDir, product.page);
    if (!fs.existsSync(pagePath)) {
      violations.push(`${docPath}: missing CSV link`);
      continue;
    }
    const pageText = fs.readFileSync(pagePath, 'utf8');
    if (!linksToCsv(pageText, product.csv)) {
      violations.push(`${docPath}: missing CSV link`);
    }

    const csvPath = path.join(rootDir, product.csv);
    if (!fs.existsSync(csvPath)) {
      violations.push(`${product.csv}: missing`);
    } else {
      const firstLine = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/)[0];
      if (firstLine !== product.header) {
        violations.push(`${product.csv}: header`);
      }
    }
  }

  return violations;
}

const isMain = process.argv[1]
  && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const rootDir = path.resolve(process.argv[2] ?? process.cwd());
  const violations = findRecordViolations(rootDir);
  if (violations.length > 0) {
    console.error(violations.join('\n'));
    process.exit(1);
  }
}
