import type {ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostItem/Header/Info';

import styles from './styles.module.css';

// Like the theme's own BlogPostItem/Header/Info, except that the date is always
// written in US month–day–year order (November 24, 2026) in UTC, so a post's date
// never shifts with the reader's time zone (brand-guidelines.md, News and analysis).
// Reading time is not shown.
const US_DATE = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export default function BlogPostItemHeaderInfo({className}: Props): ReactNode {
  const {metadata} = useBlogPost();
  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      <time dateTime={metadata.date}>{US_DATE.format(new Date(metadata.date))}</time>
    </div>
  );
}
