// `npm run check`: runs every whole-site check and lists any violations, grouped by check.
// Usage: node scripts/check.mjs [root]
import path from 'node:path';
import {runChecks} from './checks/index.mjs';

const root = path.resolve(process.argv[2] ?? process.cwd());
const failed = runChecks(root).filter((check) => check.violations.length > 0);

for (const check of failed) {
  console.error(`✖ ${check.name} (${check.violations.length})`);
  for (const violation of check.violations) console.error(`  ${violation}`);
}
if (failed.length > 0) process.exit(1);
