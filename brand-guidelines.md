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

## Homepage tone

The hero shows **PQC Handbook**, the tagline, a primary button to **Where to start** (`/migration-practices/where-to-start/`), and a secondary button to **Start here** (`/start-here/`). Role cards follow the Start here seat order (excluding Keep software updated). See [navigation-structure.md](./navigation-structure.md).

## Docusaurus settings (reference)

From `docusaurus.config.ts`: `title` PQC Handbook, `url` https://pqchandbook.com, `baseUrl` `/`, `trailingSlash` true, blog disabled.
