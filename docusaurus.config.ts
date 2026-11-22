import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeTableLabels from './src/plugins/rehype-table-labels.mjs';

const config: Config = {
  title: 'PQC Handbook',
  tagline:
    'Practical, source-backed guidance for planning, prioritising, and evidencing a post-quantum cryptography migration',
  favicon: 'img/favicon.svg',
  future: {v4: true},
  url: 'https://pqchandbook.com',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'pqc-community',
  projectName: 'handbook',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      {
        docs: {routeBasePath: '/', sidebarPath: './sidebars.ts', rehypePlugins: [rehypeTableLabels]},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
        sitemap: {changefreq: 'weekly', priority: 0.5, filename: 'sitemap.xml'},
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Source+Code+Pro:wght@500&display=swap',
  ],
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'PQC Handbook',
      logo: {alt: 'PQC Handbook', src: 'img/logo.svg'},
      style: 'dark',
      items: [
        {type: 'docSidebar', sidebarId: 'learnSidebar', position: 'left', label: 'Learn the basics'},
        {type: 'docSidebar', sidebarId: 'standardsSidebar', position: 'left', label: 'Standards'},
        {type: 'docSidebar', sidebarId: 'migrationPracticesSidebar', position: 'left', label: 'Migration practices'},
        {type: 'docSidebar', sidebarId: 'technologyOptionsSidebar', position: 'left', label: 'Technology options'},
        {type: 'docSidebar', sidebarId: 'resourcesSidebar', position: 'left', label: 'Resources'},
        {href: 'https://github.com/pqc-community/handbook', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Routes',
          items: [
            {label: 'All routes', to: '/routes/'},
            {label: 'Decide whether to act', to: '/migration-practices/diagnose/'},
            {label: 'Short path: vendor-managed', to: '/routes/vendor-managed-software/'},
            {label: 'Full path: organisation-wide', to: '/routes/organisation-wide/'},
            {label: 'Long-lived confidentiality', to: '/routes/long-lived-confidentiality/'},
            {label: 'Hard-to-change systems', to: '/routes/hard-to-change-systems/'},
          ],
        },
        {
          title: 'Learn',
          items: [{label: 'Learn the basics', to: '/learn/'}],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Standards', to: '/standards/'},
            {label: 'Migration practices', to: '/migration-practices/'},
            {label: 'Technology options', to: '/technology-options/'},
            {label: 'Resources', to: '/resources/'},
          ],
        },
      ],
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig & {
    mermaid: {theme: {light: 'neutral'; dark: 'dark'}};
  },
};

export default config;
