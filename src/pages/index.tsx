import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type Entry = {
  title: string;
  to: string;
  kind?: string;
  text: string;
};

const routes: Entry[] = [
  {
    kind: 'Short path',
    title: 'Standard, vendor-managed software',
    to: '/routes/vendor-managed-software/',
    text: 'Keep supplier updates installed, write post-quantum requirements into purchases and renewals, and review. Also the track for commodity assets on the full path.',
  },
  {
    kind: 'Full path',
    title: 'Coordinating a migration across the organisation',
    to: '/routes/organisation-wide/',
    text: 'Run the programme, send each asset to its track, order the work across tracks, and review and report to the sponsor.',
  },
  {
    kind: 'Track',
    title: 'Data that needs to stay confidential for years',
    to: '/routes/long-lived-confidentiality/',
    text: 'Key establishment for data whose confidentiality period makes harvest-now, decrypt-later the reason to start now.',
  },
  {
    kind: 'Track',
    title: 'Products or systems that may be hard to change',
    to: '/routes/hard-to-change-systems/',
    text: 'Bespoke systems, signatures that others rely on, and verifiers that cannot be updated after shipment.',
  },
];

const examples: Entry[] = [
  {
    kind: 'Full path',
    title: 'Protect this first',
    to: '/resources/examples/protect-this-first/',
    text: 'Every record filled in for a fictional UK manufacturer, from the decision note to the sponsor’s report: a product-design archive, a product sensor, and office laptops.',
  },
  {
    kind: 'Short path',
    title: 'Stay on supplier updates',
    to: '/resources/examples/stay-on-supplier-updates/',
    text: 'The short-path records for a fictional UK marketing agency that runs only supported devices and a hosted email and office suite.',
  },
];

const reference: Entry[] = [
  {
    title: 'Learn the basics',
    to: '/learn/',
    text: 'Ten short lessons on the cryptography a migration affects, with optional explainers. No mathematics assumed.',
  },
  {
    title: 'Standards',
    to: '/standards/',
    text: 'Summaries of standards, government requirements, national positions, and migration guides, with each one’s audience and status.',
  },
  {
    title: 'Migration practices',
    to: '/migration-practices/',
    text: 'The repeatable practices in lifecycle order, who leads each one, and the record it produces.',
  },
  {
    title: 'Technology options',
    to: '/technology-options/',
    text: 'One card per technology: the job it does and the status of its post-quantum mechanism.',
  },
  {
    title: 'Resources',
    to: '/resources/',
    text: 'The migration records to fill in, the worked examples, and the glossary.',
  },
];

function EntryList({entries, label}: {entries: Entry[]; label: string}) {
  return (
    <ul className={styles.entryList} aria-label={label}>
      {entries.map((entry) => (
        <li key={entry.to}>
          <Link className={styles.entry} to={entry.to}>
            <span className={styles.entryHead}>
              {entry.kind ? <span className={styles.entryKind}>{entry.kind}</span> : null}
              <span className={styles.entryTitle}>{entry.title}</span>
            </span>
            <span className={styles.entryText}>{entry.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroLead}>{siteConfig.tagline}.</p>
        <p className={styles.heroStart}>
          <Link className={styles.startLink} to="/migration-practices/diagnose/">
            Start with Decide whether to act
          </Link>
          <span>Four questions that put each asset on the short or full path.</span>
        </p>
        <p className={styles.heroLimit}>
          Not a formal risk assessment, and not a substitute for specialist cryptography advice on large bespoke
          estates, critical national infrastructure, or regulated systems.
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Post-quantum cryptography handbook"
      description="Practical, source-backed guidance for organisations planning, prioritising, and evidencing a migration to post-quantum cryptography without specialist cryptography staff."
    >
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">Situation routes</Heading>
            <p className={styles.sectionIntro}>
              Decide whether to act places each asset on a path. Each route sets out the steps, the records to keep, and
              when to change route. <Link to="/routes/">See how the routes fit together</Link>.
            </p>
            <EntryList entries={routes} label="Situation routes" />
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">Worked examples</Heading>
            <p className={styles.sectionIntro}>
              Two fictional organisations, with every record they keep filled in.
            </p>
            <EntryList entries={examples} label="Worked examples" />
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">Background and reference</Heading>
            <EntryList entries={reference} label="Background and reference" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
