# PQC Handbook - Brand Guidelines

These guidelines define the visual identity, UI conventions, and naming standards for the PQC Handbook across the public website, social previews, diagrams, and downloadable materials. Implementation lives in `src/css/custom.css`, `src/pages/index.tsx`, `src/pages/index.module.css`, `src/theme/DocItem/Content/index.tsx`, `static/img/`, and `docusaurus.config.ts`.

## Brand Essence

| Element | Guidance |
| --- | --- |
| Name | **PQC Handbook** |
| Domain | `https://pqchandbook.com` |
| Repository | `pqc-community/handbook` (`https://github.com/pqc-community/handbook`) |
| Tagline | A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding. |
| Core proposition | Source-backed decision paths, practices, technical options, standards summaries, and record templates for planning and evidencing a post-quantum cryptography migration. |
| Personality | Practical, neutral, standards-aware, evidence-led, and jurisdiction-explicit. |
| Voice | Briefing register in plain British English: calm, concrete, and decision-oriented, without hype, vendor promotion, or cryptographer-only jargon. |

The PQC Handbook belongs to the same handbook family as the **Secure-by-Design Handbook** and the **Supply Chain Security Handbook**. It shares their teal-and-cyan visual system and shield mark while occupying a distinct editorial scope: migrating public-key cryptography and keeping auditable migration records.

## Logo and Asset Suite

| Asset | Path | Dimensions / Format | Usage |
| --- | --- | --- | --- |
| Header logo | `static/img/logo.svg` | Vector SVG | Site navbar mark and small brand lockups (`alt="PQC Handbook"`). |
| Favicon | `static/img/favicon.svg` | Vector SVG | Browser tab and bookmark icon. |
| Social preview card | `static/img/social-card.svg` | `1200 × 630` SVG | OpenGraph and social link preview in Deep Teal (`#013B4E`) with Primary Cyan (`#00C5D8`) rule and Surface Light (`#F5FCFD`) typography. |

Logo rules:

- Reuse the shared family shield (`static/img/logo.svg` and `static/img/favicon.svg`, derived from the shared `tech_shield_padlock_v5.svg` mark); do not introduce a separate logo mark.
- Maintain clear space of at least half the mark's height on all sides and keep stroke legibility at small sizes (`≥ 24 px`).
- Do not skew, stretch, outline, recolour arbitrarily, or alter stroke weights.

## Colour Palette

Colours are implemented as Infima custom properties in `src/css/custom.css` with automatic `prefers-color-scheme` support (`colorMode.respectPrefersColorScheme: true`).

| Role | Hex | CSS variable / selector | Usage |
| --- | --- | --- | --- |
| Primary Cyan | `#00C5D8` | `--ifm-color-primary` (shades `#008996` to `#1FFFFD`) | Interactive accents, links, card hover borders, social-card accent bar. |
| Deep Teal | `#013B4E` | `[data-theme='light'] --ifm-navbar-background-color`, `[data-theme='dark'] --ifm-background-color`, `.footer--dark` | Light-mode navbar, dark-mode page canvas, dark footer, hero banner, social card background. |
| Darker Teal | `#012A38` | `[data-theme='dark'] --ifm-navbar-background-color` | Dark-mode navbar depth separation against the Deep Teal page canvas. |
| Surface Light | `#F5FCFD` | `[data-theme='light'] --ifm-background-color`, `[data-theme='dark'] --ifm-font-color-base` | Light-mode page background and dark-mode primary foreground text. |
| Mid Grey | `#5E6E75` | `[data-theme='light'] --ifm-font-color-base` | Light-mode body text on Surface Light. |
| Code Surface (Light / Dark) | `#EEF9FB` / `#024C63` | `--ifm-code-background` | Inline code and fenced block backgrounds in light and dark modes. |
| Highlight Orange | `#FF9F45` | `--ifm-color-warning` | Rare warning or emphasis states only. |

Accessibility rules:

- Never rely on colour alone to convey status, priority, or authority requirements; pair visual styling with explicit labels or table columns.
- Preserve AA contrast ratios (`#5E6E75` on `#F5FCFD` in light mode; `#F5FCFD` on `#013B4E` in dark mode).
- Extend styling via existing `--ifm-*` variables in `src/css/custom.css` rather than hardcoding ad-hoc hex values in components.

## Typography

Fonts are loaded via Google Fonts in `docusaurus.config.ts` with system sans-serif and monospace fallbacks.

| Role | Family and weight | CSS definition |
| --- | --- | --- |
| Headings | **Inter**, `700` | `--ifm-font-family-base: 'Inter', sans-serif; --ifm-heading-font-weight: 700;` |
| Body copy and UI | **Inter**, `400` (`700` semibold) | `--ifm-font-family-base: 'Inter', sans-serif; --ifm-font-weight-semibold: 700;` |
| Code and CSV identifiers | **Source Code Pro**, `500` | `--ifm-font-family-monospace: 'Source Code Pro', monospace; --ifm-code-font-size: 95%;` |

Syntax highlighting uses `prismThemes.github` in light mode and `prismThemes.dracula` in dark mode.

## UI Components and Diagrams

| Component | Implementation & guidance |
| --- | --- |
| Navbar | Dark style (`style: 'dark'`), Deep Teal in light mode and Darker Teal in dark mode. Shows logo, **PQC Handbook**, five doc sidebars (**Learn the basics**, **Standards**, **Migration practices**, **Algorithm and protocol options**, **Resources**), local search bar, theme toggle, and GitHub link. |
| Footer | Dark style (`style: 'dark'`, `.footer--dark` in `#013B4E` with `#F5FCFD` links) organised into three columns: **Routes**, **Learn**, and **Reference**. |
| Cards | Outlined surface cards (`.roleCard` and `.resourceCard` in `src/pages/index.module.css`) with `1px` emphasis border, `1.05rem` `<h3>` titles, and `#00C5D8` hover border. Two-column grids collapse to a single column at `≤ 768px`. |
| Review stamp | `src/theme/DocItem/Content/index.tsx` wraps Docusaurus doc content and renders `Last reviewed <D Month YYYY>` (`en-GB` UTC formatting) from each page's `last_reviewed` front matter. |
| Tables & CSV kits | Structured Markdown tables for authority comparisons, option branches, and work-product templates, paired with header-only CSV files in `static/downloads/`. Keep cell phrasing concise so tables remain readable on narrow viewports. |
| Diagrams | Rendered with `@docusaurus/theme-mermaid` (pinned to `3.10.1` alongside `@docusaurus/core`) using the built-in `dagre` layout and `themeConfig.mermaid.theme` set to `{light: 'neutral', dark: 'dark'}`. Only static `sequenceDiagram` fences are used on Learn explainers — no raster/SVG diagram images, no flowcharts, and no `@mermaid-js/layout-elk`. |

## Homepage Visual Pattern

The homepage (`src/pages/index.tsx`) is a single-purpose **situation chooser** rather than a marketing landing page:

1. **Hero banner (`.heroBanner`)**: Displays `<h1>` **PQC Handbook** followed by two centred lead sentences (`max-width: 760px`) — one stating the handbook's promise and one stating its specialist/risk-assessment boundary. There are no hero buttons.
2. **Situation chooser (`.choosePath`)**: Heading **Choose the situation** over a two-column grid (`.choiceGrid`) of six situation cards linking to `/routes/*`, followed by a full-width **Learn the basics** card (`.learnApart`) visually separated below the six choices.
3. **Worked example preview (`.clinicPreview`)**: A compact three-column priority table (`Asset`, `Why it is first`, `Next record`) showing the clinic health-records row and linking to [Protect this first](./docs/resources/protect-this-first.md).
4. **Reference library (`.referenceLibrary`)**: A two-column grid (`.resourceGrid`) of the four reference sections (**Standards**, **Migration practices**, **Algorithm and protocol options**, **Resources**).

Homepage search metadata:

- Browser `<title>` (`Layout` `title` prop): `Post-quantum cryptography handbook` (rendered as `Post-quantum cryptography handbook | PQC Handbook`), keeping the visible `<h1>` as **PQC Handbook**.
- Meta `description`: `A practical handbook for organisations that have to migrate public-key cryptography to post-quantum algorithms without a cryptographer to do the deciding.`

## Naming, URLs, and Site Configuration

- **Project name**: Always write **PQC Handbook** for the site title and **post-quantum cryptography (PQC)** in prose (expanded on first use per [style-guide.md](./style-guide.md)).
- **Canonical URLs**: Docs are served from root (`routeBasePath: '/'`) with `trailingSlash: true` (for example, `/migration-practices/inventory/`), never under `/docs/`.
- **Search and indexing**: Compile-time local search is provided by `@easyops-cn/docusaurus-search-local` (`indexDocs: true`, `indexBlog: false`, `docsRouteBasePath: '/'`) with no external Algolia dependency. `docusaurus.config.ts` emits a weekly `sitemap.xml`, `static/robots.txt` allows all crawlers and points to `https://pqchandbook.com/sitemap.xml`, and `static/CNAME` sets `pqchandbook.com`.
- **Link integrity**: `onBrokenLinks`, `onBrokenAnchors`, and `markdown.hooks.onBrokenMarkdownLinks` are all set to `'throw'`. Blog is disabled (`blog: false`).

## Governance

Treat these four root documents as the maintainer specification for the repository:

- [purpose-and-positioning.md](./purpose-and-positioning.md) — audience, promise and limits, content model, sister-site boundaries, and non-goals
- [navigation-structure.md](./navigation-structure.md) — navbar, sidebars, URL book map, and route journeys
- [style-guide.md](./style-guide.md) — voice, epistemic labels, page contracts, CSV/clinic schemas, citations, and automated checks
- [brand-guidelines.md](./brand-guidelines.md) — visual identity, palette, typography, components, and homepage pattern
