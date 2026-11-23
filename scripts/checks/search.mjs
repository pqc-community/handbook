// Search metadata and URL rules (style-guide.md, Metadata and Naming Lengths;
// navigation-structure.md, URL and Linking Conventions): every page has a description
// of 100–160 characters, browser titles fit a results list, titles and descriptions are
// distinct across the site, and URLs follow the slug pattern.
import fs from 'node:fs';
import {frontMatterField, relativePath, walkMarkdown} from '../lib/markdown.mjs';

export const BROWSER_TITLE_SUFFIX = ' | PQC Handbook';
export const MAX_BROWSER_TITLE_LENGTH = 65;
export const MIN_DESCRIPTION_LENGTH = 100;
export const MAX_DESCRIPTION_LENGTH = 160;
export const MAX_URL_SEGMENTS = 3;
export const MAX_SLUG_LENGTH = 32;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// The browser title a page renders: its search_title if set, otherwise its title,
// followed by the site suffix (src/theme/DocItem/Metadata).
export function browserTitle(content) {
  const title = frontMatterField(content, 'search_title') ?? frontMatterField(content, 'title') ?? '';
  return `${title}${BROWSER_TITLE_SUFFIX}`;
}

// The URL path segments a doc is served at (routeBasePath '/'; index.md serves its folder).
export function urlSegments(docsDir, file) {
  const segments = relativePath(docsDir, file).replace(/\.md$/, '').split('/');
  if (segments.at(-1) === 'index') segments.pop();
  return segments;
}

function pushDuplicates(violations, seen, kind) {
  for (const [value, pages] of seen) {
    if (pages.length > 1) violations.push(`${kind} "${value}" is used by ${pages.join(', ')}`);
  }
}

export function findSearchMetadataViolations(docsDir) {
  const violations = [];
  const titles = new Map();
  const descriptions = new Map();
  for (const file of walkMarkdown(docsDir)) {
    const relative = relativePath(docsDir, file);
    const content = fs.readFileSync(file, 'utf8');

    const title = frontMatterField(content, 'title');
    const searchTitle = frontMatterField(content, 'search_title');
    if (searchTitle !== undefined && searchTitle === title) {
      violations.push(`${relative}: search_title repeats title; remove it`);
    }
    const rendered = browserTitle(content);
    if (rendered.length > MAX_BROWSER_TITLE_LENGTH) {
      violations.push(
        `${relative}: browser title "${rendered}" is ${rendered.length} characters, over ${MAX_BROWSER_TITLE_LENGTH}; shorten the title or add a search_title`,
      );
    }
    titles.set(rendered, [...(titles.get(rendered) ?? []), relative]);

    const description = frontMatterField(content, 'description');
    if (!description) {
      violations.push(`${relative}: missing description`);
      continue;
    }
    if (description.length < MIN_DESCRIPTION_LENGTH || description.length > MAX_DESCRIPTION_LENGTH) {
      violations.push(
        `${relative}: description is ${description.length} characters, outside ${MIN_DESCRIPTION_LENGTH}–${MAX_DESCRIPTION_LENGTH}`,
      );
    }
    descriptions.set(description, [...(descriptions.get(description) ?? []), relative]);
  }
  pushDuplicates(violations, titles, 'browser title');
  pushDuplicates(violations, descriptions, 'description');
  return violations;
}

export function findUrlViolations(docsDir) {
  const violations = [];
  const finalSegments = new Map();
  for (const file of walkMarkdown(docsDir)) {
    const relative = relativePath(docsDir, file);
    if (frontMatterField(fs.readFileSync(file, 'utf8'), 'slug') !== undefined) {
      violations.push(`${relative}: slug front matter is not used; a page's URL comes from its file path`);
    }
    const segments = urlSegments(docsDir, file);
    const url = `/${segments.join('/')}/`;
    if (segments.length > MAX_URL_SEGMENTS) {
      violations.push(`${relative}: URL ${url} has ${segments.length} segments, over ${MAX_URL_SEGMENTS}`);
    }
    for (const segment of segments) {
      if (!SLUG.test(segment)) {
        violations.push(`${relative}: URL segment "${segment}" must be lowercase letters, digits and single hyphens`);
      } else if (segment.length > MAX_SLUG_LENGTH) {
        violations.push(`${relative}: URL segment "${segment}" is ${segment.length} characters, over ${MAX_SLUG_LENGTH}`);
      }
    }
    // Pages in the same section must not share a final segment, such as
    // /learn/timelines/ and /learn/explainers/timelines/.
    if (segments.length > 1) {
      const key = `${segments[0]}/…/${segments.at(-1)}`;
      finalSegments.set(key, [...(finalSegments.get(key) ?? []), url]);
    }
  }
  for (const [key, urls] of finalSegments) {
    if (urls.length > 1) violations.push(`URLs in /${key.split('/')[0]}/ share the final segment "${key.split('/').at(-1)}": ${urls.join(', ')}`);
  }
  return violations;
}
