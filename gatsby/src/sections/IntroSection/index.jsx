import React from 'react';
import { Section } from 'components';
import * as styles from './styles.module.scss';

const IntroSection = ({ data }) => {
  const { title, subtitle } = data;
  return (
    <Section containerClassName={styles.container} sectionName="IntroSection">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Section>
  );
};

export default IntroSection;
