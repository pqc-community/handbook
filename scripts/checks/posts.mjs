// News and analysis post rules (style-guide.md, News and analysis posts;
// navigation-structure.md, URL and Linking Conventions): each post lives at
// blog/<year>/<slug>.md with its date in front matter and no slug, so its URL is
// /news/<year>/<slug>/; it has a short title and a 100–160 character description
// that no doc page or other post shares; it opens with a 45–75 word teaser before
// the MDX truncate marker; it links at least three handbook pages inline; and it
// ends with Sources and then Related pages.
import fs from 'node:fs';
import path from 'node:path';
import {classifyLines, frontMatterField, relativePath, walkMarkdown} from '../lib/markdown.mjs';
import {MAX_DESCRIPTION_LENGTH, MAX_SLUG_LENGTH, MIN_DESCRIPTION_LENGTH} from './search.mjs';

export const POSTS_DIR = 'blog';
export const TRUNCATE_MARKER = '{/* truncate */}';
// A post's browser title is "<title> | PQC Handbook", which must fit in 65 characters.
export const MIN_POST_TITLE_LENGTH = 3;
export const MAX_POST_TITLE_LENGTH = 50;
export const MIN_TEASER_WORDS = 45;
export const MAX_TEASER_WORDS = 75;
export const MIN_INLINE_LINKS = 3;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DAY = /^(\d{4})-(\d{2})-(\d{2})$/;

// The words of a post's teaser: prose before the truncate marker, with link
// targets and Markdown emphasis removed. Returns undefined if there is no marker.
export function teaserWords(content) {
  const lines = classifyLines(content);
  const marker = lines.findIndex((line) => line.kind === 'prose' && line.text.trim() === TRUNCATE_MARKER);
  if (marker < 0) return undefined;
  const text = lines
    .slice(0, marker)
    .filter((line) => line.kind === 'prose' && !line.text.trimStart().startsWith('#'))
    .map((line) => line.text)
    .join(' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '');
  return text.split(/\s+/).filter(Boolean).length;
}

// Distinct handbook pages linked (root paths, such as /plan/) in prose before
// ## Sources: the post's inline links, not its Related pages list. Links to
// other posts (/news/...) do not count.
export function inlineHandbookLinks(content) {
  const lines = classifyLines(content);
  const end = lines.findIndex((line) => line.kind === 'prose' && line.text.trim() === '## Sources');
  const body = (end < 0 ? lines : lines.slice(0, end)).filter((line) => line.kind === 'prose');
  const targets = body
    .flatMap((line) => [...line.text.matchAll(/\]\((\/[^)#\s]*)/g)].map((match) => match[1]))
    .filter((target) => !target.startsWith('/news/'));
  return new Set(targets).size;
}

// The level-2 headings of a page, in order.
function headings(content) {
  return classifyLines(content)
    .filter((line) => line.kind === 'prose' && /^## /.test(line.text))
    .map((line) => line.text.slice(3).trim());
}

function docDescriptions(root) {
  const found = new Map();
  for (const file of walkMarkdown(path.join(root, 'docs'))) {
    const description = frontMatterField(fs.readFileSync(file, 'utf8'), 'description');
    if (description) found.set(description, relativePath(root, file));
  }
  return found;
}

export function findPostViolations(root = '.') {
  const violations = [];
  const postsDir = path.join(root, POSTS_DIR);
  const fromDocs = docDescriptions(root);
  const descriptions = new Map();
  const titles = new Map();
  for (const file of walkMarkdown(postsDir)) {
    const rel = relativePath(root, file);
    const content = fs.readFileSync(file, 'utf8');
    const parts = relativePath(postsDir, file).replace(/\.md$/, '').split('/');

    if (parts.length !== 2 || !/^\d{4}$/.test(parts[0])) {
      violations.push(`${rel}: posts live at ${POSTS_DIR}/<year>/<slug>.md`);
    }
    const slug = parts.at(-1);
    if (!SLUG.test(slug)) {
      violations.push(`${rel}: slug "${slug}" must be lowercase letters, digits and single hyphens`);
    } else if (slug.length > MAX_SLUG_LENGTH) {
      violations.push(`${rel}: slug "${slug}" is ${slug.length} characters, over ${MAX_SLUG_LENGTH}`);
    }
    if (frontMatterField(content, 'slug') !== undefined) {
      violations.push(`${rel}: slug front matter is not used; a post's URL comes from its year folder and file name`);
    }

    const date = frontMatterField(content, 'date');
    const day = date?.match(ISO_DAY);
    if (!day) {
      violations.push(`${rel}: date must be set in front matter as YYYY-MM-DD`);
    } else if (parts.length === 2 && day[1] !== parts[0]) {
      violations.push(`${rel}: date ${date} is not in the ${parts[0]} folder`);
    }

    const title = frontMatterField(content, 'title');
    if (!title) {
      violations.push(`${rel}: missing title`);
    } else {
      if (title.length < MIN_POST_TITLE_LENGTH || title.length > MAX_POST_TITLE_LENGTH) {
        violations.push(`${rel}: title is ${title.length} characters, outside ${MIN_POST_TITLE_LENGTH}–${MAX_POST_TITLE_LENGTH}`);
      }
      titles.set(title, [...(titles.get(title) ?? []), rel]);
    }

    const description = frontMatterField(content, 'description');
    if (!description) {
      violations.push(`${rel}: missing description`);
    } else {
      if (description.length < MIN_DESCRIPTION_LENGTH || description.length > MAX_DESCRIPTION_LENGTH) {
        violations.push(
          `${rel}: description is ${description.length} characters, outside ${MIN_DESCRIPTION_LENGTH}–${MAX_DESCRIPTION_LENGTH}`,
        );
      }
      if (fromDocs.has(description)) violations.push(`${rel}: description is also used by ${fromDocs.get(description)}`);
      descriptions.set(description, [...(descriptions.get(description) ?? []), rel]);
    }

    const words = teaserWords(content);
    if (words === undefined) {
      violations.push(`${rel}: missing the truncate marker ${TRUNCATE_MARKER} on its own line`);
    } else if (words < MIN_TEASER_WORDS || words > MAX_TEASER_WORDS) {
      violations.push(`${rel}: teaser is ${words} words, outside ${MIN_TEASER_WORDS}–${MAX_TEASER_WORDS}`);
    }

    const links = inlineHandbookLinks(content);
    if (links < MIN_INLINE_LINKS) {
      violations.push(`${rel}: links ${links} handbook pages inline, under ${MIN_INLINE_LINKS}; link them in the body, not only in Related pages`);
    }

    const last = headings(content).slice(-2);
    if (last[0] !== 'Sources' || last[1] !== 'Related pages') {
      violations.push(`${rel}: must end with ## Sources and then ## Related pages`);
    }
  }
  for (const [value, posts] of titles) {
    if (posts.length > 1) violations.push(`title "${value}" is used by ${posts.join(', ')}`);
  }
  for (const [value, posts] of descriptions) {
    if (posts.length > 1) violations.push(`description "${value}" is used by ${posts.join(', ')}`);
  }
  return violations;
}
