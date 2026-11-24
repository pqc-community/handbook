import type {ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

// Replaces the default 404 content with handbook wording and routes back into the site.
// Keep the 404 page out of search indexes and give it a plain title. GitHub Pages already
// serves it with a 404 status. The docs plugin serves the site root, so its catch-all
// route renders this content component directly; wrapping NotFound alone misses 404.html.
export default function NotFoundContent({className}: {className?: string}): ReactNode {
  return (
    <>
      <Head>
        <title>Page not found | PQC Handbook</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className={clsx('container margin-vert--xl', className)}>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <Heading as="h1" className="hero__title">
              Page not found
            </Heading>
            <p>
              There is no page at this address. It may have moved, or the link that brought you here may be
              mistyped.
            </p>
            <p>
              You can <Link to="/search/">search the handbook</Link>, start from the{' '}
              <Link to="/">homepage</Link>, or go straight to <Link to="/plan/">Which plan you need</Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
