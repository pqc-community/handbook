import type {ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostItem/Header/Info';

import styles from './styles.module.css';

// Like the theme's own BlogPostItem/Header/Info, except that the date is always
// written in British day–month–year order (24 November 2026). The site's locale
// key stays 'en' for search, so the theme's locale-based formatter would give US
// order (brand-guidelines.md, News and analysis). Reading time is not shown.
const BRITISH_DATE = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export default function BlogPostItemHeaderInfo({className}: Props): ReactNode {
  const {metadata} = useBlogPost();
  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      <time dateTime={metadata.date}>{BRITISH_DATE.format(new Date(metadata.date))}</time>
    </div>
  );
}
