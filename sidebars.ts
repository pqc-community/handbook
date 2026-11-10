import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  learnSidebar: [
    'learn/index',
    'learn/public-key-cryptography',
    'learn/quantum-threat',
    'learn/what-post-quantum-means',
    'learn/algorithms',
    'learn/in-real-systems',
    'learn/standardisation',
  ],
  routesSidebar: [
    'routes/vendor-managed-software',
    'routes/long-lived-confidentiality',
    'routes/hard-to-change-systems',
    'routes/organisation-wide',
    'routes/ask-a-supplier',
    'routes/not-sure',
  ],
  standardsTimelinesSidebar: [
    'standards-timelines/index',
    'standards-timelines/dates',
    'standards-timelines/migration-guides',
  ],
  migrationPracticesSidebar: [
    'migration-practices/index',
    'migration-practices/diagnose',
    'migration-practices/commodity-software',
    'migration-practices/inventory',
    'migration-practices/priority',
    'migration-practices/release-dates',
    'migration-practices/vendor-plan',
    'migration-practices/implementation',
    'migration-practices/changing-algorithms-again',
    'migration-practices/subsequent-review',
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
    'resources/inventory-record',
    'resources/priority-record',
    'resources/vendor-response-log',
    'resources/migration-plan',
    'resources/change-record',
    'resources/evidence-record',
    'resources/review-log',
    'resources/protect-this-first',
    'resources/glossary',
    'resources/curated-references',
    'resources/editorial-policy',
  ],
};

export default sidebars;
