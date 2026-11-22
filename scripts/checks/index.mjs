// Every whole-site check, in one list. `npm run check` runs them all; each test file
// runs its own area's checks against the site as well as against small samples.
import path from 'node:path';
import {findCsvFieldViolations, findCsvLinkViolations, findRecordsZipViolations, findWorkedExampleViolations} from './records.mjs';
import {findAdmonitionViolations, findNavigationViolations, findPageViolations} from './pages.mjs';
import {findPdfLinkLabelViolations, findStandardsLayoutViolations} from './standards.mjs';
import {findProseDateViolations, findTimelineDateViolations} from './dates.mjs';

const docs = (root) => path.join(root, 'docs');
const standards = (root) => path.join(root, 'docs', 'standards');

export const CHECKS = [
  {area: 'pages', name: 'page title lengths', run: (root) => findPageViolations(docs(root))},
  {area: 'pages', name: 'navbar, footer and sidebar label lengths', run: (root) => findNavigationViolations(root)},
  {area: 'pages', name: 'admonition title syntax', run: (root) => findAdmonitionViolations(docs(root))},
  {area: 'standards', name: 'standards summary structure', run: (root) => findStandardsLayoutViolations(standards(root))},
  {area: 'standards', name: 'standards PDF link labels', run: (root) => findPdfLinkLabelViolations(standards(root))},
  {area: 'records', name: 'record pages link existing CSVs', run: (root) => findCsvLinkViolations(root)},
  {area: 'records', name: 'record CSVs match their pages', run: (root) => findCsvFieldViolations(root)},
  {area: 'records', name: 'filled examples match Protect this first', run: (root) => findWorkedExampleViolations(root)},
  {area: 'records', name: 'records zip is current', run: (root) => findRecordsZipViolations(root)},
  {area: 'dates', name: 'prose dates are day–month–year', run: (root) => findProseDateViolations(root)},
  {area: 'dates', name: 'timeline dates use non-breaking hyphens', run: (root) => findTimelineDateViolations(standards(root))},
];

export function runChecks(root, area) {
  return CHECKS
    .filter((check) => !area || check.area === area)
    .map((check) => ({...check, violations: check.run(root)}));
}
