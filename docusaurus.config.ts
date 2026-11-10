import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PQC Handbook',
  tagline:
    'A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding.',
  favicon: 'img/favicon.svg',
  future: {v4: true},
  url: 'https://pqchandbook.com',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'pqc-community',
  projectName: 'handbook',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      {
        docs: {routeBasePath: '/', sidebarPath: './sidebars.ts'},
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
        {type: 'docSidebar', sidebarId: 'standardsTimelinesSidebar', position: 'left', label: 'Standards and timelines'},
        {type: 'docSidebar', sidebarId: 'migrationPracticesSidebar', position: 'left', label: 'Migration practices'},
        {type: 'docSidebar', sidebarId: 'algorithmProtocolOptionsSidebar', position: 'left', label: 'Algorithm and protocol options'},
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
            {label: 'We mostly use standard, vendor-managed software', to: '/routes/vendor-managed-software/'},
            {label: 'We handle data that stays confidential for years', to: '/routes/long-lived-confidentiality/'},
            {label: 'We own products or systems that may be hard to change', to: '/routes/hard-to-change-systems/'},
            {label: 'I am coordinating a migration across the organisation', to: '/routes/organisation-wide/'},
            {label: 'Ask a supplier', to: '/routes/ask-a-supplier/'},
            {label: 'I am not sure', to: '/routes/not-sure/'},
          ],
        },
        {
          title: 'Learn',
          items: [{label: 'Learn the basics', to: '/learn/'}],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Standards and timelines', to: '/standards-timelines/'},
            {label: 'Migration practices', to: '/migration-practices/'},
            {label: 'Algorithm and protocol options', to: '/algorithm-protocol-options/'},
            {label: 'Resources', to: '/resources/'},
          ],
        },
      ],
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
