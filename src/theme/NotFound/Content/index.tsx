import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import NotFoundContent from '@theme-original/NotFound/Content';

// Keep the 404 page out of search indexes and give it a plain title. GitHub Pages already
// serves it with a 404 status. The docs plugin serves the site root, so its catch-all
// route renders this content component directly; wrapping NotFound alone misses 404.html.
export default function NotFoundContentWrapper(props: Record<string, unknown>): ReactNode {
  return (
    <>
      <Head>
        <title>Page not found | PQC Handbook</title>
        <meta name="robots" content="noindex" />
      </Head>
      <NotFoundContent {...props} />
    </>
  );
}
