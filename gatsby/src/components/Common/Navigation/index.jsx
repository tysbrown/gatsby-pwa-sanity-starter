import React, { useState, useEffect } from 'react';
import { Link, NavBarAccordion } from 'components';
import * as styles from './styles.module.scss';
import arrow from '../../../images/downarrow.svg';

const Navigation = (props) => {
  const { navigationData, navbarOpen } = props;
  const [desktopView, setDesktopView] = useState();

  // Detect screen width - Dropdown items rendered as hover
  // effect on desktop, and in NavBarAccordion comp on mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1025px)');
    setDesktopView(mediaQuery.matches || false);
    mediaQuery.addListener((e) => {
      const mobileViewOn = e.matches;
      setDesktopView(mobileViewOn);
    });
  }, []);

  return (
    /* Apply mobile styles when navbar is open */
    <nav className={`${styles.navigation} ${navbarOpen ? styles.mobileMenu : ''}`}>
      <ul>
        {navigationData &&
          navigationData?.map((navItem) =>
            /* Is current navItem a dropdown or singleton? */
            navItem?._type === 'dropdownNavItem' ? (
              /* Current navItem is a dropdown */
              <li key={navItem?._key} className={styles.dropdownContainer}>
                {/* Dropdown rendered with hover effect on desktop */}
                {desktopView && (
                  <>
                    {/* Is the dropdown title a link? */}
                    {navItem.isLink ? (
                      /* Title is a link, render it in Link comp */
                      <Link
                        to={`/${navItem?.linkTo?.slug?.current}/`}
                        className={styles.navLink}
                        activeClassName={styles.active}
                      >
                        {navItem?.title}
                        {navItem.dropdownChildren && <img src={arrow} className={styles.arrow} alt="" />}
                      </Link>
                    ) : (
                      /* Title is not a link, render in a span */
                      <span className={`${styles.navLink} ${styles.dropdownTitleNoLink}`}>
                        {navItem?.title}
                        {navItem.dropdownChildren && <img src={arrow} className={styles.arrow} alt="" />}
                      </span>
                    )}
                    {/* Dropdown children */}
                    <ul className={styles.dropdownNavItems}>
                      {navItem?.dropdownChildren?.map((dropdownItem) => (
                        <li key={dropdownItem?._key} className={styles.dropdownLinkWrapper}>
                          {/* Change this to a UL element after getting it working */}
                          <Link
                            to={`/${dropdownItem?.page?.slug?.current}/`}
                            className={styles.dropdownLink}
                            activeClassName={styles.active}
                          >
                            {dropdownItem?.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {/* Dropdown rendered in accordion on mobile */}
                {!desktopView && <NavBarAccordion {...navItem} />}
              </li>
            ) : (
              /* Current navItem is a singleton */
              <li key={navItem?._key}>
                <Link
                  /* If current navItem is toggled as external, pass url to Link */
                  to={`${navItem.isExternal ? navItem?.url : `/${navItem?.linkTo?.slug?.current}/`}`}
                  className={`${navItem.isBtn ? `button ${navItem.btnType}` : styles.navLink}`}
                  activeClassName={styles.active}
                >
                  {navItem?.title}
                </Link>
              </li>
            )
          )}
      </ul>
    </nav>
  );
};

export default Navigation;
