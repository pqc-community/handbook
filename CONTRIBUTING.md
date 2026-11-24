# Contributing to the PQC Handbook

Thank you for helping improve the PQC Handbook. It gives security, engineering, product, procurement, and risk teams practical, source-backed guidance for a post-quantum cryptography migration, without assuming specialist cryptography staff in-house.

## What helps most

- Corrections where a page no longer matches its primary source, such as a standard that has been revised or an authority date that has moved.
- Broken or moved source links.
- Places where the guidance is unclear for the handbook's audience.
- New technology options or authority positions, backed by a primary source.

For a small fix, open a pull request. For anything larger, such as a new page or a change to the reader journey, open an [issue](https://github.com/pqc-community/handbook/issues) first so the approach can be agreed before you write it.

## Before you write

Read the maintainer guides in the repository root. They are the source of truth for how the handbook is written and organized:

- [Purpose and positioning](purpose-and-positioning.md) covers the audience, the editorial thesis, and what the handbook deliberately does not cover.
- [Style guide](style-guide.md) covers voice, terminology, attribution, page patterns, and sourcing.
- [Navigation structure](navigation-structure.md) covers URLs, sidebars, and where a page belongs.
- [Reader journey](reader-journey.md) covers how readers are routed from the four questions to their plan.
- [Brand guidelines](brand-guidelines.md) covers visual and UI changes.
- [Periodic review](periodic-review.md) covers the monthly review that keeps sources, dates, and guidance current.

In short, write in US English, keep guidance vendor-neutral, attribute every date and obligation to its primary source and the audience it names, and keep key establishment and digital signatures separate where their migration drivers differ. Do not add vendor endorsements or promotional material, and disclose any affiliation relevant to your change in the pull request.

## Working locally

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm start
```

Before opening a pull request, run the full verification sequence. The same checks run on every pull request and must pass before anything is deployed.

```bash
npm test
npm run check
npm run typecheck
npm run build
```

## Pull requests

Keep each pull request to one change, explain what it changes and why, and link the primary source for any factual change.

## License

By contributing, you agree that your contributions are licensed under the same [CC BY-SA 4.0](LICENSE) license as the rest of the project.
