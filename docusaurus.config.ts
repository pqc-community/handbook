import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeTableLabels from './src/plugins/rehype-table-labels.mjs';

const config: Config = {
  title: 'PQC Handbook',
  tagline:
    'Practical, source-backed guidance for planning, prioritising, and evidencing a post-quantum cryptography migration',
  favicon: 'img/favicon.svg',
  // PNG and Apple touch icons for browsers and platforms that do not use the SVG favicon.
  headTags: [
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32.png'}},
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png'}},
  ],
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
  // British English: sets <html lang>, hreflang and og:locale; the locale key stays 'en' for search.
  i18n: {defaultLocale: 'en', locales: ['en'], localeConfigs: {en: {htmlLang: 'en-GB'}}},
  presets: [
    [
      'classic',
      {
        docs: {routeBasePath: '/', sidebarPath: './sidebars.ts', rehypePlugins: [rehypeTableLabels]},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
        // Google ignores changefreq and priority. The search page is not indexed.
        sitemap: {changefreq: null, priority: null, ignorePatterns: ['/search/**'], filename: 'sitemap.xml'},
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
    // Social platforms do not render SVG previews; social-card.svg is the source for this PNG.
    image: 'img/social-card.png',
    metadata: [
      {property: 'og:site_name', content: 'PQC Handbook'},
      {property: 'og:type', content: 'website'},
      {property: 'og:image:width', content: '1200'},
      {property: 'og:image:height', content: '630'},
      {property: 'og:image:alt', content: 'PQC Handbook: practical guidance for a post-quantum cryptography migration'},
      {name: 'twitter:image:alt', content: 'PQC Handbook: practical guidance for a post-quantum cryptography migration'},
    ],
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'PQC Handbook',
      logo: {alt: 'PQC Handbook', src: 'img/logo.svg'},
      style: 'dark',
      items: [
        {type: 'doc', docId: 'start-here/index', sidebarId: 'journeySidebar', position: 'left', label: 'Start here'},
        {type: 'doc', docId: 'baseline/index', sidebarId: 'journeySidebar', position: 'left', label: 'Baseline'},
        {type: 'doc', docId: 'programme/index', sidebarId: 'journeySidebar', position: 'left', label: 'Programme'},
        {type: 'docSidebar', sidebarId: 'learnSidebar', position: 'left', label: 'Learn'},
        {type: 'docSidebar', sidebarId: 'technologyOptionsSidebar', position: 'left', label: 'Technology options'},
        {type: 'docSidebar', sidebarId: 'standardsSidebar', position: 'left', label: 'Standards'},
        {type: 'docSidebar', sidebarId: 'templatesSidebar', position: 'left', label: 'Templates'},
        {href: 'https://github.com/pqc-community/handbook', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start',
          items: [
            {label: 'Start here', to: '/start-here/'},
            {label: 'Baseline', to: '/baseline/'},
            {label: 'Programme', to: '/programme/'},
          ],
        },
        {
          title: 'Learn',
          items: [{label: 'Learn the basics', to: '/learn/'}],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Technology options', to: '/technology-options/'},
            {label: 'Standards', to: '/standards/'},
            {label: 'Templates', to: '/templates/'},
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
