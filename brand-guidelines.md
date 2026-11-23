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
| Favicon | `static/img/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Vector SVG; `32 × 32` and `180 × 180` PNG | Browser tab and bookmark icon. The PNGs, rendered from the logo, serve browsers that do not use the SVG; the Apple touch icon sits on Deep Teal. |
| Social preview card | `static/img/social-card.png` (source `social-card.svg`) | `1200 × 630` PNG | OpenGraph and link-preview card on Deep Teal (`#013B4E`) with Primary Cyan (`#00C5D8`) accent bar and Surface Light (`#F5FCFD`) Inter type. Social platforms do not render SVG previews, so `og:image` points to the PNG; re-export it with Inter loaded whenever the SVG changes. |

Logo usage rules:

- Use the approved shared family shield in `static/img/`; do not create a separate mark or redraw strokes.
- Keep clear space of at least `0.5×` the logo height on all sides and maintain legibility down to `24 px` height.
- Do not stretch, skew, outline, add drop shadows, recolour arbitrarily, or alter stroke weights.

## Colour Palette

The site uses the handbook-family teal-and-cyan palette across light and dark modes (`prefers-color-scheme` aware).

| Role | Hex | Usage |
| --- | --- | --- |
| Primary Cyan | `#00C5D8` | Interactive accents, card hover borders, and focal highlights (`--ifm-color-primary`); links and active states in dark mode. |
| Link Teal | `#006B78` | Light-mode text links, active sidebar, breadcrumb and table-of-contents entries, and focus outlines on Surface Light, where Primary Cyan is too pale for text (`--pqc-link-on-light`). |
| Deep Teal | `#013B4E` | Light-mode navbar, dark footer, hero background, social card canvas, and dark-mode page background. |
| Darker Teal | `#012A38` | Dark-mode navbar background for subtle elevation against Deep Teal pages. |
| Surface Light | `#F5FCFD` | Light-mode page background and dark-mode primary foreground text. |
| Mid Grey | `#5E6E75` | Light-mode body copy on Surface Light. |
| Code Surface | `#EEF9FB` / `#024C63` | Inline code and code-block backgrounds in light mode (`#EEF9FB`) and dark mode (`#024C63`). |
| Highlight Orange | `#FF9F45` | Warnings or rare emphasis only (`--ifm-color-warning`). |

Colour and accessibility rules:

- Never convey meaning, priority, or status by colour alone; always pair colour with clear text or structural labels.
- Maintain WCAG AA contrast (`#5E6E75` on `#F5FCFD` in light mode; `#F5FCFD` on `#013B4E` in dark mode).
- Never set text in Primary Cyan on Surface Light: it is about 2:1. Use Link Teal (`#006B78`, about 5.9:1) for light-mode links and active states.
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
| Navbar | Deep Teal (`#013B4E` in light mode, `#012A38` in dark mode) with light text and restrained top-level items on one line; between `997px` and `1365px` the logo stands without the title so the items do not wrap. |
| Footer | Deep Teal (`#013B4E`) with Surface Light (`#F5FCFD`) links and safe wrapping on narrow mobile viewports (`.footer__link-item { max-width: 100%; }`). |
| Cards | Outlined surface cards with subtle `1px` borders that highlight in Primary Cyan (`#00C5D8`) on hover and stack cleanly to one column on mobile (`≤ 768px`). |
| Homepage | Calm reference entry point, not a product landing page. A concise Deep Teal hero header: title, tagline, the line that every organisation needs a post-quantum migration plan and that for most it is short, who needs more, and one sourced line on why now; audience and limit sit beside it as a quiet bordered note. No buttons. Then two equal outlined cards, **Learn the basics** and **Plan your migration**, as the two ways in. Then Which plan you need: the four questions as a numbered list beside their three outcomes, each titled "Your plan: …", stacked as outlined cards, so a desktop reader sees both together; on narrow screens the outcomes follow the questions. Then three compact reference cards, each naming pages inside it. Nothing else: no thesis grid or record excerpt, which a persona review found readers skipped. The homepage questions and outcomes are a shortened subset of Which plan you need, with no claim that page does not make. No promotional banners, button pairs, feature grids, gradients, or decorative splash graphics. |
| Tables | Clean borders, subtle header shading, and scannable cell density suitable for both desktop and mobile screens. On phone screens, 3- and 4-column tables become stacked cards, one per row, with each cell labelled by its column heading; wider record tables scroll inside the page. |

## Diagrams and Illustrations

- Keep diagrams and illustrations functional, clean, and low-noise — every visual should clarify a technical relationship, workflow, or decision boundary.
- Mermaid diagrams use the `neutral` theme in light mode and `dark` theme in dark mode so diagrams stay legible in both colour schemes.
- When introducing vector illustrations or icons, prefer flat-vector or consistent `~2 px` stroke line work, using Primary Cyan (`#00C5D8`) selectively as an accent rather than filling entire graphics.
- Avoid decorative stock art, glowing "quantum" clichés, or seal/badge motifs that suggest certification, legal authority, or compliance approval.

## Governance

Visual changes should be reviewed alongside `src/css/custom.css` and `static/img/`. Related maintainer guides cover the non-visual domains of the handbook:

- [purpose-and-positioning.md](./purpose-and-positioning.md) — mission, audience, editorial thesis, sister-site boundaries, and non-goals
- [navigation-structure.md](./navigation-structure.md) — URL structure, sidebars, and user journeys
- [style-guide.md](./style-guide.md) — editorial voice, terminology, prose attribution, page patterns, and sourcing
