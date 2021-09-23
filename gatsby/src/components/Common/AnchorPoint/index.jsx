import React from 'react';
import * as styles from './styles.module.scss';

const AnchorPoint = ({ title, slug, isNested }) => (
  <div className={styles.container}>
    {/* Offset anchor tag to compensate for sticky header */}
    <a className={styles.anchor} id={slug?.current}>
      &nbsp;
    </a>
    {title && isNested ? <h4>{title}</h4> : <h3>{title}</h3>}
  </div>
);
export default AnchorPoint;
