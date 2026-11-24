// Page and navigation rules: title lengths, navbar, footer and sidebar label
// lengths, admonition title syntax, and front matter that parses as YAML.
import fs from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
import yaml from 'js-yaml';
import {classifyLines, frontMatterField, relativePath, walkMarkdown} from '../lib/markdown.mjs';

export const MIN_TITLE_LENGTH = 3;
export const MAX_TITLE_LENGTH = 160;

export const MIN_NAV_LABEL_LENGTH = 2;
export const MAX_NAVBAR_LABEL_LENGTH = 32;
export const MAX_FOOTER_TITLE_LENGTH = 24;
export const MAX_FOOTER_LABEL_LENGTH = 32;
export const MAX_SIDEBAR_LABEL_LENGTH = 50;

function loadTsModule(filePath) {
  const abs = path.resolve(filePath);
  const source = fs.readFileSync(abs, 'utf8');
  const {outputText} = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const mod = {exports: {}};
  const localRequire = createRequire(abs);
  vm.runInNewContext(outputText, {
    exports: mod.exports,
    module: mod,
    require: localRequire,
    __filename: abs,
    __dirname: path.dirname(abs),
  });
  return mod.exports.default ?? mod.exports;
}

function checkBounds(violations, context, label, min, max) {
  if (!label || typeof label !== 'string' || !label.trim()) {
    violations.push(`${context}: missing label`);
    return;
  }
  const text = label.trim();
  if (text.length < min) {
    violations.push(
      `${context} "${text}": length ${text.length} is below ${min}`,
    );
  } else if (text.length > max) {
    violations.push(
      `${context} "${text}": length ${text.length} exceeds ${max}`,
    );
  }
}

function walkSidebarItems(items, sidebarName, violations) {
  if (!Array.isArray(items)) return;
  for (const item of items) {
    if (!item || typeof item !== 'object') continue;
    if (item.type === 'category' || item.items) {
      checkBounds(
        violations,
        `sidebars.ts (${sidebarName}) sidebar category`,
        item.label,
        MIN_NAV_LABEL_LENGTH,
        MAX_SIDEBAR_LABEL_LENGTH,
      );
      walkSidebarItems(item.items, sidebarName, violations);
    } else if (item.label) {
      checkBounds(
        violations,
        `sidebars.ts (${sidebarName}) sidebar item`,
        item.label,
        MIN_NAV_LABEL_LENGTH,
        MAX_SIDEBAR_LABEL_LENGTH,
      );
    }
  }
}

export function findPageViolations(docsDir) {
  const violations = [];
  for (const file of walkMarkdown(docsDir)) {
    const relative = relativePath(docsDir, file);
    const title = frontMatterField(fs.readFileSync(file, 'utf8'), 'title');
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

export function findNavigationViolations(rootDir) {
  const violations = [];
  const configPath = path.join(rootDir, 'docusaurus.config.ts');
  if (fs.existsSync(configPath)) {
    const config = loadTsModule(configPath);
    const navbarItems = config?.themeConfig?.navbar?.items ?? [];
    for (const item of navbarItems) {
      if (item?.label !== undefined) {
        checkBounds(
          violations,
          'docusaurus.config.ts navbar item',
          item.label,
          MIN_NAV_LABEL_LENGTH,
          MAX_NAVBAR_LABEL_LENGTH,
        );
      }
    }

    const footerLinks = config?.themeConfig?.footer?.links ?? [];
    for (const entry of footerLinks) {
      if (Array.isArray(entry?.items)) {
        if (entry.title !== null && entry.title !== undefined) {
          checkBounds(
            violations,
            'docusaurus.config.ts footer column title',
            entry.title,
            MIN_NAV_LABEL_LENGTH,
            MAX_FOOTER_TITLE_LENGTH,
          );
        }
        for (const link of entry.items) {
          if (link?.html) continue;
          checkBounds(
            violations,
            `docusaurus.config.ts footer link (${entry.title ?? 'footer'})`,
            link?.label,
            MIN_NAV_LABEL_LENGTH,
            MAX_FOOTER_LABEL_LENGTH,
          );
        }
      } else if (entry && !entry.html) {
        checkBounds(
          violations,
          'docusaurus.config.ts footer link',
          entry.label,
          MIN_NAV_LABEL_LENGTH,
          MAX_FOOTER_LABEL_LENGTH,
        );
      }
    }
  }

  const sidebarsPath = path.join(rootDir, 'sidebars.ts');
  if (fs.existsSync(sidebarsPath)) {
    const sidebars = loadTsModule(sidebarsPath);
    for (const [name, items] of Object.entries(sidebars ?? {})) {
      walkSidebarItems(items, name, violations);
    }
  }

  const docsDir = path.join(rootDir, 'docs');
  for (const file of walkMarkdown(docsDir)) {
    const relative = relativePath(docsDir, file);
    const content = fs.readFileSync(file, 'utf8');
    const sidebarLabel =
      frontMatterField(content, 'sidebar_label') ??
      frontMatterField(content, 'title');
    checkBounds(
      violations,
      `docs/${relative} sidebar label`,
      sidebarLabel,
      MIN_NAV_LABEL_LENGTH,
      MAX_SIDEBAR_LABEL_LENGTH,
    );
  }

  return violations;
}

// Titled admonitions must use Docusaurus bracket syntax, such as :::info[Title].
export function findAdmonitionViolations(docsDir) {
  const violations = [];
  const invalidTitle = /^\s*:::(?:note|tip|info|warning|danger)\s+\S/;
  for (const file of walkMarkdown(docsDir)) {
    const relative = relativePath(docsDir, file);
    for (const line of classifyLines(fs.readFileSync(file, 'utf8'))) {
      if (line.kind !== 'fence' && invalidTitle.test(line.text)) {
        violations.push(`${relative}:${line.number}: titled admonition must use bracket syntax, for example :::info[Title]`);
      }
    }
  }
  return violations;
}

// Doc pages and posts: front matter must parse as YAML, as the build requires. An unquoted
// value containing ": " (such as a description with a colon) breaks the build but not the
// field-by-field reads the other checks use.
export function findFrontMatterViolations(rootDir) {
  return ['docs', 'blog'].flatMap((dir) => walkMarkdown(path.join(rootDir, dir))).flatMap((file) => {
    const match = fs.readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return [];
    try {
      yaml.load(match[1]);
      return [];
    } catch (error) {
      return [`${relativePath(rootDir, file)}: front matter is not valid YAML (${error.reason}); quote values that contain ": "`];
    }
  });
}
