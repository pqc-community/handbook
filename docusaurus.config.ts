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
  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'PQC Handbook',
      logo: {alt: 'PQC Handbook', src: 'img/logo.svg'},
      style: 'dark',
      items: [
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
          title: 'Start here',
          items: [
            {label: 'Start here', to: '/start-here/'},
            {label: 'I own the plan', to: '/start-here/own-the-plan/'},
            {label: 'I own the product dates', to: '/start-here/own-the-product-dates/'},
            {label: 'I have to ask a vendor', to: '/start-here/ask-a-vendor/'},
            {label: 'I have to show evidence', to: '/start-here/show-evidence/'},
            {label: 'I have to change a protocol', to: '/start-here/change-a-protocol/'},
            {label: 'Keep software updated', to: '/start-here/keep-software-updated/'},
          ],
        },
        {
          title: 'Migration practices',
          items: [
            {label: 'Migration practices', to: '/migration-practices/'},
            {label: 'Where to start', to: '/migration-practices/where-to-start/'},
            {label: 'Inventory', to: '/migration-practices/inventory/'},
            {label: 'Priority', to: '/migration-practices/priority/'},
            {label: 'Vendor plan', to: '/migration-practices/vendor-plan/'},
            {label: 'Changing algorithms again', to: '/migration-practices/changing-algorithms-again/'},
            {label: 'The next pass', to: '/migration-practices/next-pass/'},
          ],
        },
        {
          title: 'Standards and options',
          items: [
            {label: 'Standards and timelines', to: '/standards-timelines/'},
            {label: 'Dates', to: '/standards-timelines/dates/'},
            {label: 'Migration guides', to: '/standards-timelines/migration-guides/'},
            {label: 'Algorithm and protocol options', to: '/algorithm-protocol-options/'},
            {label: 'Choosing an option', to: '/algorithm-protocol-options/choosing/'},
            {label: 'Key establishment', to: '/algorithm-protocol-options/key-establishment/'},
            {label: 'Signatures', to: '/algorithm-protocol-options/signatures/'},
            {label: 'Long-lived roots', to: '/algorithm-protocol-options/long-lived-roots/'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Resources', to: '/resources/'},
            {label: 'Inventory questions', to: '/resources/inventory-questions/'},
            {label: 'Prioritisation checklist', to: '/resources/prioritisation-checklist/'},
            {label: 'Vendor questions', to: '/resources/vendor-questions/'},
            {label: 'Protect this first', to: '/resources/protect-this-first/'},
            {label: 'Glossary', to: '/resources/glossary/'},
            {label: 'Curated references', to: '/resources/curated-references/'},
          ],
        },
      ],
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
