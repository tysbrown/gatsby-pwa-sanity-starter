import React from 'react';
import { Section, BlockContent } from 'components';
import * as styles from './styles.module.scss';

const PortableText = ({ data }) => {
  const { body } = data;
  return <Section className={styles.portableText}>{body && <BlockContent data={body} />}</Section>;
};

export default PortableText;
