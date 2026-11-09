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
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/migration-practices/where-to-start/">
            Where to start
          </Link>
          <Link className="button button--secondary button--lg" to="/start-here/">
            Start here
          </Link>
        </div>
      </div>
    </header>
  );
}

const roles = [
  {title: 'The migration plan', to: '/start-here/the-migration-plan/', text: 'An inventory, a priority, and a one-page plan.'},
  {title: 'Product release dates', to: '/start-here/product-release-dates/', text: 'A release date tied to one asset, and a vendor question if someone else owns the stack.'},
  {title: 'Questions for a vendor', to: '/start-here/questions-for-a-vendor/', text: 'Written questions and a tracking sheet.'},
  {title: 'Evidence of the migration', to: '/start-here/evidence-of-the-migration/', text: 'The records that show the inventory, the priority, the vendor answer, and what shipped.'},
  {title: 'Changing a protocol', to: '/start-here/changing-a-protocol/', text: 'Which job is changing, which option an authority defends, and how to roll back.'},
];

const steps = [
  {title: 'Standards and timelines', to: '/standards-timelines/'},
  {title: 'Migration practices', to: '/migration-practices/'},
  {title: 'Algorithm and protocol options', to: '/algorithm-protocol-options/'},
  {title: 'Resources', to: '/resources/'},
];

const featured = [
  {title: 'Inventory questions', to: '/resources/inventory-questions/', text: 'Questions a small staff can answer before anyone claims a migration.'},
  {title: 'Prioritisation checklist', to: '/resources/prioritisation-checklist/', text: 'Pick what to protect first from how long the data or the key must stay good.'},
  {title: 'Protect this first', to: '/resources/protect-this-first/', text: 'One worked illustration of a long-lived record and a root that cannot be updated later.'},
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Post-quantum cryptography migration"
      description="A practical handbook for organisations that have to migrate public-key cryptography to post-quantum algorithms without a cryptographer to do the deciding."
    >
      <HomepageHeader />
      <main>
        <section className={styles.choosePath}>
          <div className="container">
            <div className="text--center margin-bottom--lg">
              <Heading as="h2">Five responsibilities</Heading>
              <p>Each responsibility uses the same handbook. Keep software updated is linked from Start here.</p>
            </div>
            <div className={styles.roleGrid}>
              {roles.map((role) => (
                <Link key={role.title} className={styles.roleCard} to={role.to}>
                  <Heading as="h3">{role.title}</Heading>
                  <p>{role.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.model}>
          <div className="container">
            <div className="text--center">
              <Heading as="h2">How the handbook works</Heading>
              <div className={styles.modelFlow}>
                {steps.map((step, index) => (
                  <span key={step.title} className={styles.modelFlowItem}>
                    <Link to={step.to}>{step.title}</Link>
                    {index < steps.length - 1 && <span className={styles.modelArrow}>-&gt;</span>}
                  </span>
                ))}
              </div>
              <p className={styles.modelSummary}>Dates and duties, then the inventory and the priority, then the options, then the resources.</p>
            </div>
          </div>
        </section>
        <section className={styles.featuredResources}>
          <div className="container">
            <div className="text--center margin-bottom--lg">
              <Heading as="h2">Featured resources</Heading>
            </div>
            <div className={styles.resourceGrid}>
              {featured.map((item) => (
                <Link key={item.title} className={styles.resourceCard} to={item.to}>
                  <Heading as="h3">{item.title}</Heading>
                  <p>{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.community}>
          <div className="container">
            <Heading as="h2">Named sources</Heading>
            <p>Dates, duties, and options on this site name the authority and the date of the source.</p>
            <div className={styles.communityLinks}>
              <Link className="button button--outline button--primary" to="/algorithm-protocol-options/">Algorithm and protocol options</Link>
              <Link className="button button--outline button--secondary" to="/resources/curated-references/">Curated references</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
