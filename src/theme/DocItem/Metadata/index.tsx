import type {ReactNode} from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

// Like the theme's own DocItem/Metadata, except that an optional `search_title`
// in front matter replaces `title` in the browser title, Open Graph and Twitter
// tags. The `title` stays the page's h1 and sidebar text. Use it only where the
// title is too long for a results list or too vague out of context
// (style-guide.md, Metadata and Naming Lengths).
export default function DocItemMetadata(): ReactNode {
  const {metadata, frontMatter, assets} = useDoc();
  const searchTitle = (frontMatter as {search_title?: string}).search_title;
  return (
    <PageMetadata
      title={searchTitle ?? metadata.title}
      description={metadata.description}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image}
    />
  );
}
