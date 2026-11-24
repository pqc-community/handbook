// Every whole-site check, in one list. `npm run check` runs them all; each test file
// runs its own area's checks against the site as well as against small samples.
import path from 'node:path';
import {findCsvFieldViolations, findCsvLinkViolations, findRecordsZipViolations, findWorkedExampleViolations} from './records.mjs';
import {findAdmonitionViolations, findFrontMatterViolations, findNavigationViolations, findPageViolations} from './pages.mjs';
import {findPdfLinkLabelViolations, findStandardsLayoutViolations} from './standards.mjs';
import {findCheckedDateViolations, findDayMonthViolations, findProseDateViolations, findTimelineDateViolations} from './dates.mjs';
import {findJourneyBudgetViolations, findRetiredLabelViolations, findStaccatoViolations} from './reading.mjs';
import {findSearchMetadataViolations, findUrlViolations} from './search.mjs';
import {findPostViolations} from './posts.mjs';

const docs = (root) => path.join(root, 'docs');
const standards = (root) => path.join(root, 'docs', 'standards');
const posts = (root) => path.join(root, 'blog');

export const CHECKS = [
  {area: 'pages', name: 'front matter parses as YAML', run: (root) => findFrontMatterViolations(root)},
  {area: 'pages', name: 'page title lengths', run: (root) => findPageViolations(docs(root))},
  {area: 'pages', name: 'navbar, footer and sidebar label lengths', run: (root) => findNavigationViolations(root)},
  {area: 'pages', name: 'admonition title syntax', run: (root) => [...findAdmonitionViolations(docs(root)), ...findAdmonitionViolations(posts(root))]},
  {area: 'search', name: 'search titles and descriptions', run: (root) => findSearchMetadataViolations(docs(root))},
  {area: 'search', name: 'URL slugs', run: (root) => findUrlViolations(docs(root))},
  {area: 'reading', name: 'journey pages stay within reading budgets', run: (root) => findJourneyBudgetViolations(root)},
  {area: 'reading', name: 'retired routing labels are not used', run: (root) => findRetiredLabelViolations(root)},
  {area: 'reading', name: 'checked sections have no staccato paragraphs', run: (root) => findStaccatoViolations(root)},
  {area: 'standards', name: 'standards summary structure', run: (root) => findStandardsLayoutViolations(standards(root))},
  {area: 'standards', name: 'standards PDF link labels', run: (root) => findPdfLinkLabelViolations(standards(root))},
  {area: 'records', name: 'record pages link existing CSVs', run: (root) => findCsvLinkViolations(root)},
  {area: 'records', name: 'record CSVs match their pages', run: (root) => findCsvFieldViolations(root)},
  {area: 'records', name: 'filled examples match Protect this first', run: (root) => findWorkedExampleViolations(root)},
  {area: 'records', name: 'records zip is current', run: (root) => findRecordsZipViolations(root)},
  {area: 'posts', name: 'news post location, metadata, teaser and ending', run: (root) => findPostViolations(root)},
  {area: 'dates', name: 'prose dates are not ISO', run: (root) => findProseDateViolations(root)},
  {area: 'dates', name: 'dates are month–day–year', run: (root) => findDayMonthViolations(root)},
  {area: 'dates', name: 'timeline dates use non-breaking hyphens', run: (root) => findTimelineDateViolations(standards(root))},
  {area: 'dates', name: 'doc pages carry no checked dates', run: (root) => findCheckedDateViolations(root)},
];

export function runChecks(root, area) {
  return CHECKS
    .filter((check) => !area || check.area === area)
    .map((check) => ({...check, violations: check.run(root)}));
}
