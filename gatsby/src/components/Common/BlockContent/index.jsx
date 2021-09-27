/* eslint-disable react/display-name */
import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import { Link, Section } from 'components';
import * as styles from './styles.module.scss';

const BlockContent = ({ data, className }) => {
  const blocks = data;

  const newBlocks = blocks.map((i) => {
    i.markDefs = i.markDefs || [];
    return i;
  });

  const hasContainer = newBlocks.length > 1;

  const serializers = {
    types: {
      block: ({ node: { style }, children }) => {
        if (style === `h1`) return <h1 className={hasContainer ? '' : className}>{children}</h1>;

        if (style === `h2`) return <h2 className={hasContainer ? '' : className}>{children}</h2>;

        if (style === `h3`) return <h3 className={hasContainer ? '' : className}>{children}</h3>;

        if (style === `h4`) return <h4 className={hasContainer ? '' : className}>{children}</h4>;

        if (style === `h5`) return <h5 className={hasContainer ? '' : className}>{children}</h5>;

        if (children) return <p className={hasContainer ? '' : className}>{children}</p>;
      },
      image: (props) => {
        const builder = imageUrlBuilder({
          projectId: process.env.SANITY_PROJECT_ID,
          dataset: process.env.SANITY_DATASET,
        });
        function urlFor(source) {
          return builder.image(source);
        }
        return (
          <Section containerClassName={styles.imageWrapper}>
            <img src={urlFor(props?.node?.asset)} alt={props?.node?.alt} />
          </Section>
        );
      },
    },
    list: ({ children, type }) => {
      const bullet = type === 'bullet';

      if (bullet) {
        return <ul className={`${styles.ul} ${hasContainer ? '' : className}`}>{children}</ul>;
      }

      return <ol>{children}</ol>;
    },
    listItem: ({ children }) => <li>{children}</li>,
    marks: {
      link: ({ children, mark }) =>
        mark.href ? (
          <Link to={mark?.href} className={styles.link}>
            {children}
          </Link>
        ) : null,
      internalLink: ({ children, mark }) => (
        <Link to={`/${mark?.internal?.slug?.current}/`} className={styles.link}>
          {children}
        </Link>
      ),
      strong: ({ children }) => <strong className={styles.strong}>{children}</strong>,
      em: ({ children }) => <em className={styles.em}>{children}</em>,
      alignCenter: ({ children }) => <div className={styles.centered}>{children}</div>,
      alignRight: ({ children }) => <div className={styles.alignRight}>{children}</div>,
    },
  };

  if (blocks) {
    return (
      <PortableText
        blocks={newBlocks}
        serializers={serializers}
        projectId={process.env.SANITY_PROJECT_ID}
        dataset={process.env.SANITY_DATASET}
        className={className}
      />
    );
  }
  return null;
};

export default BlockContent;
