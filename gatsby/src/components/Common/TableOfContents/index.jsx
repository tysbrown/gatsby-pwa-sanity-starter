import React from 'react';
import { TocAccordion } from 'components';
import * as styles from './styles.module.scss';

// Use filter method like so to fetch anchorPoints:
// const anchorPointData = _rawBody.filter((block) => block._type === 'anchorPoint');

const TableOfContents = ({ title, anchorPoints }) => (
  <section className={styles.section}>
    <TocAccordion title={title}>
      {anchorPoints?.map((item) => (
        <div className={`${styles.anchorPoint} ${item?.isNested ? styles.nestedItem : ''}`}>
          <a href={`#${item?.slug?.current}`}>{item?.title}</a>
        </div>
      ))}
    </TocAccordion>
  </section>
);

export default TableOfContents;
