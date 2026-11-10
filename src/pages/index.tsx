import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={styles.heroLead}>
          The handbook helps an organisation decide what to migrate, in what order, and how it will know.
        </p>
        <p className={styles.heroLead}>
          It is not a risk assessment and not a substitute for a specialist on a large bespoke estate, critical national infrastructure, or a regulated system.
        </p>
      </div>
    </header>
  );
}

type SituationChoice = {
  title: string;
  to: string;
  text?: string;
};

const situations: SituationChoice[] = [
  {
    title: 'We mostly use standard, vendor-managed software',
    to: '/routes/vendor-managed-software/',
  },
  {
    title: 'We handle data that stays confidential for years',
    to: '/routes/long-lived-confidentiality/',
  },
  {
    title: 'We own products or systems that may be hard to change',
    to: '/routes/hard-to-change-systems/',
  },
  {
    title: 'I am coordinating a migration across the organisation',
    to: '/routes/organisation-wide/',
  },
  {
    title: 'Ask a supplier',
    to: '/routes/ask-a-supplier/',
    text: 'A shortcut across the four situations.',
  },
  {
    title: 'I am not sure',
    to: '/routes/not-sure/',
    text: 'A way to choose a situation without a risk assessment.',
  },
];

const referenceSections = [
  {title: 'Standards and timelines', to: '/standards-timelines/'},
  {title: 'Migration practices', to: '/migration-practices/'},
  {title: 'Algorithm and protocol options', to: '/algorithm-protocol-options/'},
  {title: 'Resources', to: '/resources/'},
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Post-quantum cryptography handbook"
      description="A practical handbook for organisations that have to migrate public-key cryptography to post-quantum algorithms without a cryptographer to do the deciding."
    >
      <HomepageHeader />
      <main>
        <section className={styles.choosePath}>
          <div className="container">
            <div className="text--center margin-bottom--lg">
              <Heading as="h2">Choose the situation</Heading>
            </div>
            <div className={styles.choiceGrid}>
              {situations.map((choice) => (
                <Link key={choice.title} className={styles.roleCard} to={choice.to}>
                  <Heading as="h3">{choice.title}</Heading>
                  {choice.text ? <p>{choice.text}</p> : null}
                </Link>
              ))}
            </div>
            <Link className={clsx(styles.roleCard, styles.learnApart)} to="/learn/">
              <Heading as="h3">Learn the basics</Heading>
              <p>For a reader who is not yet planning a migration.</p>
            </Link>
          </div>
        </section>
        <section className={styles.clinicPreview}>
          <div className="container">
            <table className={styles.priorityTable}>
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Why it is first</th>
                  <th>Next record</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Health records on the vendor system</td>
                  <td>Confidentiality still matters after 10 years</td>
                  <td>Priority record</td>
                </tr>
              </tbody>
            </table>
            <p>
              <Link to="/resources/protect-this-first/">The clinic example</Link>
            </p>
          </div>
        </section>
        <section className={styles.referenceLibrary}>
          <div className="container">
            <div className={styles.resourceGrid}>
              {referenceSections.map((section) => (
                <Link key={section.title} className={styles.resourceCard} to={section.to}>
                  <Heading as="h3">{section.title}</Heading>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
