import React, { useState, useEffect } from 'react';
import { Logo, Navigation, GraphQLErrorList, Hamburger } from 'components';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './styles.module.scss';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [bodyLocked, setBodyLock] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const toggleNav = (event) => {
    event.preventDefault();
    setNavbarOpen(!navbarOpen);
  };

  const lockBody = () => {
    // Lock body while show nav true
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    setScrollTop(scrollPosition);
    document.body.style.top = `-${scrollPosition}px`;
    document.body.classList.add('nav-open');
    setBodyLock(true);
  };

  const unlockBody = () => {
    // Unlock body when nav is closed
    document.body.classList.remove('nav-open');
    document.body.style.top = '0px';
    window.scrollTo(0, scrollTop);
    setScrollTop(0);
    setBodyLock(false);
  };

  useEffect(() => {
    if (navbarOpen && !bodyLocked) lockBody();
    if (!navbarOpen && bodyLocked) unlockBody();
  }, [navbarOpen]);

  // Fetch navigation data
  const headerQuery = graphql`
    query {
      ...GlobalHeaderLinks
    }
  `;
  const {
    nav: { headerNav },
    errors,
  } = useStaticQuery(headerQuery);

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo />
        <Navigation navigationData={headerNav} navbarOpen={navbarOpen} />
        <Hamburger onClick={toggleNav} active={navbarOpen} />
      </div>
    </header>
  );
};

export default Header;
