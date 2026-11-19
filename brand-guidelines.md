# Brand guidelines

Visual and naming rules for the PQC Handbook site. Implementation lives in `src/css/custom.css`, `src/pages/index.module.css`, and `static/img/`.

## Name and domain

| Item | Value |
| --- | --- |
| Site name | **PQC Handbook** |
| Public URL | https://pqchandbook.com |
| Tagline | A practical handbook for organisations that have to migrate public-key cryptography and do not have a cryptographer to do the deciding. |
| GitHub org / repo | `pqc-community` / `handbook` — https://github.com/pqc-community/handbook |

Sister sites: Secure-by-Design Handbook and Supply Chain Security Handbook (shared handbook family).

## Logo

The logo is the **shared shield**: `static/img/logo.svg` and `static/img/favicon.svg` match the supply-chain handbook shield (`tech_shield_padlock_v5.svg` in that tree). **Do not introduce a new logo mark** for this edition.

`static/img/social-card.svg` is a social preview card in this palette with the site name and tagline.

## Palette

Match the sister sites:

| Role | Hex | Use |
| --- | --- | --- |
| Primary cyan | `#00C5D8` | Accents, links where appropriate |
| Deep teal | `#013B4E` | Navbar, footer, dark-mode background |
| Surface | `#F5FCFD` | Light page background |
| Body text on light | `#5E6E75` | Body copy |
| Highlight orange | `#FF9F45` | Rare emphasis only |

Navbar and footer use deep teal. The default light background is surface. In dark mode, the background is deep teal and text uses surface tones. **Meaning must not rely on colour alone.**

## Typography

| Role | Font | Weight |
| --- | --- | --- |
| Headings | Inter | 700 |
| Body | Inter | 400 |
| Code | Source Code Pro | 500 |

## Diagrams

Concept explainers render diagrams with `@docusaurus/theme-mermaid` (pinned to match `@docusaurus/core` at `3.10.1`), using the built-in `dagre` layout and `themeConfig.mermaid.theme` set to `{light: 'neutral', dark: 'dark'}`. Diagrams are static `mermaid` code fences (`sequenceDiagram`), not raster or SVG image files and not `@mermaid-js/layout-elk`.

## Homepage tone and metadata

- **Browser `<title>`** (`Layout` `title` prop in `src/pages/index.tsx`): `Post-quantum cryptography handbook` (renders as `Post-quantum cryptography handbook | PQC Handbook`).
- **Hero `<h1>`**: **PQC Handbook**, followed by one sentence of promise ("The handbook helps an organisation decide what to migrate, in what order, and how it will know.") and one sentence of limit ("It is not a risk assessment and not a substitute for a specialist on a large bespoke estate, critical national infrastructure, or a regulated system."). There are no hero call-to-action buttons.
- **Meta description**: `A practical handbook for organisations that have to migrate public-key cryptography to post-quantum algorithms without a cryptographer to do the deciding.`
- **Regions below the hero**: six situation cards under **Choose the situation**, **Learn the basics** visually separated below them, a single-row clinic priority preview linking to `/resources/protect-this-first/`, and four reference section cards. See [navigation-structure.md](./navigation-structure.md).

## Docusaurus settings (reference)

From `docusaurus.config.ts`: `title` PQC Handbook, `url` https://pqchandbook.com, `baseUrl` `/`, `trailingSlash` true, `routeBasePath` `/`, blog disabled, broken links/anchors/markdown links set to `throw`, Mermaid enabled, build-time local search via `@easyops-cn/docusaurus-search-local` (no hosted Algolia account), weekly `sitemap.xml`, `static/robots.txt` pointing to `https://pqchandbook.com/sitemap.xml`, and `static/CNAME` set to `pqchandbook.com`.
