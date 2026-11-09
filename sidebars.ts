import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  startHereSidebar: [
    'start-here/index',
    'start-here/own-the-plan',
    'start-here/own-the-product-dates',
    'start-here/ask-a-vendor',
    'start-here/show-evidence',
    'start-here/change-a-protocol',
    'start-here/keep-software-updated',
  ],
  standardsTimelinesSidebar: [
    'standards-timelines/index',
    'standards-timelines/dates',
    'standards-timelines/migration-guides',
  ],
  migrationPracticesSidebar: [
    'migration-practices/index',
    'migration-practices/where-to-start',
    'migration-practices/inventory',
    'migration-practices/priority',
    'migration-practices/vendor-plan',
    'migration-practices/changing-algorithms-again',
    'migration-practices/next-pass',
  ],
  algorithmProtocolOptionsSidebar: [
    'algorithm-protocol-options/index',
    'algorithm-protocol-options/choosing',
    'algorithm-protocol-options/key-establishment',
    'algorithm-protocol-options/signatures',
    'algorithm-protocol-options/long-lived-roots',
  ],
  resourcesSidebar: [
    'resources/index',
    'resources/inventory-questions',
    'resources/prioritisation-checklist',
    'resources/vendor-questions',
    'resources/protect-this-first',
    'resources/glossary',
    'resources/curated-references',
  ],
};

export default sidebars;
