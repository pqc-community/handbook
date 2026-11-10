import React, {type ReactNode} from 'react';
import Content from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

function reviewDate(value: unknown): string | undefined {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const year = value.getUTCFullYear();
    const month = String(value.getUTCMonth() + 1).padStart(2, '0');
    const day = String(value.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  if (typeof value === 'string') {
    const match = value.match(/^(\d{4}-\d{2}-\d{2})/);
    return match?.[1];
  }
  return undefined;
}

function formatReviewed(value: string): string {
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'}).format(date);
}

export default function DocItemContent(props: {children: ReactNode}): ReactNode {
  const {frontMatter} = useDoc();
  const reviewed = reviewDate((frontMatter as {last_reviewed?: unknown}).last_reviewed);
  return (
    <>
      {reviewed && <p>Last reviewed {formatReviewed(reviewed)}</p>}
      <Content {...props} />
    </>
  );
}
