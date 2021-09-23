import React, { useState, useRef } from 'react';
import { Link } from 'components';
import * as styles from './styles.module.scss';
import Chevron from './Chevron';

const NavBarAccordion = ({ title, linkTo, dropdownChildren }) => {
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
        {linkTo && (
          <Link to={`/${linkTo?.slug?.current}/`} className={styles.accordionTitle}>
            {title}
          </Link>
        )}
        {!linkTo && <span className={styles.accordionTitle}>{title}</span>}
        <Chevron className={`${rotate}`} width={10} height={7} stroke="#171D1C" />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={`accordionContent ${styles.accordionContent} ${active}`}
      >
        {dropdownChildren.map((link) => (
          <Link key={link?._key} to={`/${link?.page?.slug?.current}/`} className={styles.navLink}>
            {link?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBarAccordion;
