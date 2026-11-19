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
          Practical, source-backed guidance for deciding what public-key cryptography to migrate, in what order, and how to evidence the transition.
        </p>
        <p className={styles.heroLead}>
          Not a formal risk assessment, and not a substitute for specialist cryptography advice on large bespoke estates, critical national infrastructure, or regulated systems.
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
    text: 'This is a shortcut across the four situations.',
  },
  {
    title: 'I am not sure',
    to: '/routes/not-sure/',
    text: 'Choose a situation here without making a risk assessment.',
  },
];

const referenceSections = [
  {title: 'Standards', to: '/standards/'},
  {title: 'Migration practices', to: '/migration-practices/'},
  {title: 'Technology options', to: '/technology-options/'},
  {title: 'Resources', to: '/resources/'},
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Post-quantum cryptography handbook"
      description="Practical, source-backed guidance for organisations planning, prioritising, and evidencing a migration to post-quantum cryptography without specialist cryptography staff."
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
              <p>Read this for background before you choose a route.</p>
            </Link>
          </div>
        </section>
        <section className={styles.workedExamplePreview}>
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
                  <td>Product-design archive</td>
                  <td>Company policy requires 15 years of confidentiality</td>
                  <td>Priority record</td>
                </tr>
              </tbody>
            </table>
            <p>
              <Link to="/resources/protect-this-first/">The manufacturer example</Link>
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
