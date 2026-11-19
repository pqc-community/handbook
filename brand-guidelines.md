# PQC Handbook - Brand Guidelines

These guidelines define the visual identity, brand assets, colour palette, typography, and presentation standards for the PQC Handbook across the website, social previews, diagrams, and external materials. CSS tokens and assets live in `src/css/custom.css` and `static/img/`.

## Brand Essence

| Element | Guidance |
| --- | --- |
| Name | **PQC Handbook** |
| Domain | `pqchandbook.com` |
| Tagline | Practical, source-backed guidance for planning, prioritising, and evidencing a post-quantum cryptography migration |
| Personality | Practical, neutral, standards-aware, and evidence-led |
| Visual tone | Calm, utilitarian, and readable — an engineering and governance reference, not a marketing site |

The PQC Handbook is part of the same open handbook family as the **Secure-by-Design Handbook** and the **Supply Chain Security Handbook**. It shares their teal-and-cyan visual system and shield mark so readers recognise the family immediately, while keeping an independent editorial identity focused on post-quantum cryptography transition.

## Naming

- Always refer to the publication as **PQC Handbook** (capitalised, no "The" inside titles or lockups).
- Use **post-quantum cryptography** (or **PQC** after first mention) for the discipline itself.
- Keep naming vendor-neutral and jurisdiction-neutral: avoid phrasing or sub-brands that imply endorsement by a government agency, standards body, or commercial supplier.
- For editorial tone and prose mechanics, follow [style-guide.md](./style-guide.md).

## Logo and Asset Suite

| Asset | File | Format / Size | Usage |
| --- | --- | --- | --- |
| Header logo | `static/img/logo.svg` | Vector SVG | Site navbar mark, slide headers, and compact brand lockups (`alt="PQC Handbook"`). |
| Favicon | `static/img/favicon.svg` | Vector SVG | Browser tab and bookmark icon (export `32 × 32` PNG only where an external platform requires raster icons). |
| Social preview card | `static/img/social-card.svg` | `1200 × 630` SVG | OpenGraph and link-preview card on Deep Teal (`#013B4E`) with Primary Cyan (`#00C5D8`) accent bar and Surface Light (`#F5FCFD`) Inter type (export PNG if a platform does not render SVG previews). |

Logo usage rules:

- Use the approved shared family shield in `static/img/`; do not create a separate mark or redraw strokes.
- Keep clear space of at least `0.5×` the logo height on all sides and maintain legibility down to `24 px` height.
- Do not stretch, skew, outline, add drop shadows, recolour arbitrarily, or alter stroke weights.

## Colour Palette

The site uses the handbook-family teal-and-cyan palette across light and dark modes (`prefers-color-scheme` aware).

| Role | Hex | Usage |
| --- | --- | --- |
| Primary Cyan | `#00C5D8` | Interactive accents, links, active states, card hover borders, and focal highlights (`--ifm-color-primary`). |
| Deep Teal | `#013B4E` | Light-mode navbar, dark footer, hero background, social card canvas, and dark-mode page background. |
| Darker Teal | `#012A38` | Dark-mode navbar background for subtle elevation against Deep Teal pages. |
| Surface Light | `#F5FCFD` | Light-mode page background and dark-mode primary foreground text. |
| Mid Grey | `#5E6E75` | Light-mode body copy on Surface Light. |
| Code Surface | `#EEF9FB` / `#024C63` | Inline code and code-block backgrounds in light mode (`#EEF9FB`) and dark mode (`#024C63`). |
| Highlight Orange | `#FF9F45` | Warnings or rare emphasis only (`--ifm-color-warning`). |

Colour and accessibility rules:

- Never convey meaning, priority, or status by colour alone; always pair colour with clear text or structural labels.
- Maintain WCAG AA contrast (`#5E6E75` on `#F5FCFD` in light mode; `#F5FCFD` on `#013B4E` in dark mode).
- Reference Infima variables in `src/css/custom.css` rather than hardcoding hex values inside components.

## Typography

| Role | Typeface | Weight | CSS reference |
| --- | --- | --- | --- |
| Headings | **Inter** | `700` | `--ifm-font-family-base: 'Inter', sans-serif; --ifm-heading-font-weight: 700;` |
| Body and UI | **Inter** | `400` (`700` strong) | `--ifm-font-family-base: 'Inter', sans-serif;` |
| Code and identifiers | **Source Code Pro** | `500` | `--ifm-font-family-monospace: 'Source Code Pro', monospace; --ifm-code-font-size: 95%;` |

Always retain system sans-serif and monospace fallbacks. Code blocks use high-contrast syntax themes (`github` in light mode, `dracula` in dark mode).

## UI Visual Style

| Element | Visual guidance |
| --- | --- |
| Navbar | Deep Teal (`#013B4E` in light mode, `#012A38` in dark mode) with light text and restrained top-level items. |
| Footer | Deep Teal (`#013B4E`) with Surface Light (`#F5FCFD`) links and safe wrapping on narrow mobile viewports (`.footer__link-item { max-width: 100%; }`). |
| Cards | Outlined surface cards with subtle `1px` borders that highlight in Primary Cyan (`#00C5D8`) on hover and stack cleanly to one column on mobile (`≤ 768px`). |
| Homepage | Calm, utilitarian entry point: a concise Deep Teal hero header followed by clean card grids and structured reference tables rather than promotional banners or decorative splash graphics. |
| Tables | Clean borders, subtle header shading, and scannable cell density suitable for both desktop and mobile screens. |

## Diagrams and Illustrations

- Keep diagrams and illustrations functional, clean, and low-noise — every visual should clarify a technical relationship, workflow, or decision boundary.
- Mermaid diagrams use the `neutral` theme in light mode and `dark` theme in dark mode so diagrams stay legible in both colour schemes.
- When introducing vector illustrations or icons, prefer flat-vector or consistent `~2 px` stroke line work, using Primary Cyan (`#00C5D8`) selectively as an accent rather than filling entire graphics.
- Avoid decorative stock art, glowing "quantum" clichés, or seal/badge motifs that suggest certification, legal authority, or compliance approval.

## Governance

Visual changes should be reviewed alongside `src/css/custom.css` and `static/img/`. Related maintainer guides cover the non-visual domains of the handbook:

- [purpose-and-positioning.md](./purpose-and-positioning.md) — mission, audience, scope, and sister-site boundaries
- [navigation-structure.md](./navigation-structure.md) — URL structure, sidebars, and user journeys
- [style-guide.md](./style-guide.md) — editorial voice, page structures, schemas, and citations
