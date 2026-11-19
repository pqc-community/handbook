import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MIN_NAV_LABEL_LENGTH,
  MAX_NAVBAR_LABEL_LENGTH,
  MAX_FOOTER_TITLE_LENGTH,
  MAX_FOOTER_LABEL_LENGTH,
  MAX_SIDEBAR_LABEL_LENGTH,
  findPageViolations,
  findNavigationViolations,
} from './check-pages.mjs';

function withRoot(files, run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-pages-'));
  for (const [name, body] of Object.entries(files)) {
    const full = path.join(dir, name);
    fs.mkdirSync(path.dirname(full), {recursive: true});
    fs.writeFileSync(full, body);
  }
  try {
    return run(dir);
  } finally {
    fs.rmSync(dir, {recursive: true, force: true});
  }
}

function walkMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  const found = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...walkMarkdown(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) found.push(full);
  }
  return found;
}

function findInvalidTitledAdmonitions(docsDir) {
  const violations = [];
  const invalidTitle = /^\s*:::(?:note|tip|info|warning|danger)\s+\S/;

  for (const file of walkMarkdown(docsDir)) {
    const relative = path.relative(docsDir, file).split(path.sep).join('/');
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    let fence;

    for (const [index, line] of lines.entries()) {
      const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);
      if (fence) {
        const closePattern = new RegExp(`^\\s*${fence.character}{${fence.length},}\\s*$`);
        if (closePattern.test(line)) fence = undefined;
        continue;
      }
      if (fenceMatch) {
        fence = {character: fenceMatch[1][0], length: fenceMatch[1].length};
        continue;
      }
      if (invalidTitle.test(line)) {
        violations.push(`${relative}:${index + 1}: titled admonition must use bracket syntax, for example :::info[Title]`);
      }
    }
  }

  return violations;
}

test('flags missing, too-short, and overly long page titles', () => {
  const longTitle = 'A'.repeat(MAX_TITLE_LENGTH + 1);
  const violations = withRoot(
    {
      'docs/missing.md': '---\ndescription: No title field\n---\n',
      'docs/short.md': '---\ntitle: Hi\n---\n',
      'docs/long.md': `---\ntitle: "${longTitle}"\n---\n`,
    },
    (root) => findPageViolations(path.join(root, 'docs')),
  );
  assert.ok(violations.some((v) => v.includes('missing.md: missing title')));
  assert.ok(
    violations.some((v) =>
      v.includes(`short.md: title length 2 is below ${MIN_TITLE_LENGTH}`),
    ),
  );
  assert.ok(
    violations.some((v) =>
      v.includes(
        `long.md: title length ${MAX_TITLE_LENGTH + 1} exceeds ${MAX_TITLE_LENGTH}`,
      ),
    ),
  );
});

test('accepts unquoted and quoted titles within bounds', () => {
  const violations = withRoot(
    {
      'docs/plain.md': '---\ntitle: Timelines\n---\n',
      'docs/quoted.md':
        '---\ntitle: "FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard"\n---\n',
    },
    (root) => findPageViolations(path.join(root, 'docs')),
  );
  assert.deepEqual(violations, []);
});

test('flags titled admonitions that use unsupported title syntax', () => {
  const violations = withRoot(
    {
      'docs/invalid.md': ':::info Official text\nContent\n:::\n',
      'docs/valid.md': ':::info[Official text]\nContent\n:::\n',
      'docs/code-example.md': '```md\n:::info Example\n```\n',
    },
    (root) => findInvalidTitledAdmonitions(path.join(root, 'docs')),
  );
  assert.deepEqual(violations, [
    'invalid.md:1: titled admonition must use bracket syntax, for example :::info[Title]',
  ]);
});

test('all handbook admonition titles use supported syntax', () => {
  const docsDir = path.resolve(process.cwd(), 'docs');
  assert.deepEqual(findInvalidTitledAdmonitions(docsDir), []);
});

test('flags overly long navbar, footer, and sidebar labels independently', () => {
  const longNavbar = 'N'.repeat(MAX_NAVBAR_LABEL_LENGTH + 1);
  const longFooterTitle = 'T'.repeat(MAX_FOOTER_TITLE_LENGTH + 1);
  const longFooterLabel = 'F'.repeat(MAX_FOOTER_LABEL_LENGTH + 1);
  const longCategory = 'C'.repeat(MAX_SIDEBAR_LABEL_LENGTH + 1);
  const longSidebarDoc = 'S'.repeat(MAX_SIDEBAR_LABEL_LENGTH + 1);
  const longFallbackTitle = 'X'.repeat(MAX_SIDEBAR_LABEL_LENGTH + 5);

  const violations = withRoot(
    {
      'docusaurus.config.ts': `export default {
        themeConfig: {
          navbar: {
            items: [
              { label: '${longNavbar}', position: 'left' },
              { label: 'X', position: 'right' },
            ],
          },
          footer: {
            links: [
              {
                title: '${longFooterTitle}',
                items: [{ label: '${longFooterLabel}', to: '/routes/' }],
              },
            ],
          },
        },
      };\n`,
      'sidebars.ts': `export default {
        mainSidebar: [
          'ok-sidebar',
          {
            type: 'category',
            label: '${longCategory}',
            items: ['long-sidebar', 'missing-sidebar-label'],
          },
        ],
      };\n`,
      // 42 chars: longer than MAX_FOOTER_LABEL_LENGTH (32), valid in sidebar (<= 50)
      'docs/ok-sidebar.md':
        '---\ntitle: Short title\nsidebar_label: Discovery, readiness, and supplier guides\n---\n',
      'docs/long-sidebar.md': `---\ntitle: Short title\nsidebar_label: ${longSidebarDoc}\n---\n`,
      'docs/missing-sidebar-label.md': `---\ntitle: "${longFallbackTitle}"\n---\n`,
    },
    (root) => findNavigationViolations(root),
  );

  assert.ok(violations.some((v) => v.includes('navbar item')));
  assert.ok(
    violations.some((v) =>
      v.includes(`below ${MIN_NAV_LABEL_LENGTH}`),
    ),
  );
  assert.ok(violations.some((v) => v.includes('footer column title')));
  assert.ok(violations.some((v) => v.includes('footer link')));
  assert.ok(violations.some((v) => v.includes('sidebar category')));
  assert.ok(violations.some((v) => v.includes('long-sidebar.md')));
  assert.ok(violations.some((v) => v.includes('missing-sidebar-label.md')));
  assert.equal(
    violations.some((v) => v.includes('ok-sidebar.md')),
    false,
  );
});

test('all handbook docs have valid page title lengths', () => {
  const docsDir = path.resolve(process.cwd(), 'docs');
  assert.deepEqual(findPageViolations(docsDir), []);
});

test('all handbook navigation items fit their UI surface bounds', () => {
  assert.deepEqual(findNavigationViolations(process.cwd()), []);
});
