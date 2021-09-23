import React, { useState, useRef } from 'react';
import { BlockContent } from 'components';
import * as styles from './styles.module.scss';
import Chevron from './Chevron';

const Accordion = ({ title, body }) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState(styles.accordionIcon);

  const content = useRef(null);

  const toggleAccordion = () => {
    setActive(active === '' ? styles.active : '');
    setHeight(active === styles.active ? '0px' : `${content.current.scrollHeight}px`);
    setRotate(active === styles.active ? styles.accordionIcon : styles.rotate);
  };

  return (
    <div className={styles.accordionSection}>
      <button type="button" className={`accordion ${styles.accordion} ${active}`} onClick={toggleAccordion}>
        {title && <p className={styles.accordionTitle}>{title}</p>}
        <Chevron className={`${rotate}`} width={10} height={7} stroke="#171D1C" />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={`accordionContent ${styles.accordionContent} ${active}`}
      >
        {body && <BlockContent data={body} />}
      </div>
    </div>
  );
};

export default Accordion;
