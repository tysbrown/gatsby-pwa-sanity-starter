import React from 'react';
import { Footer, Header, SEO, NoJs } from 'components';
import 'typeface-lato';
import '../../../sass/global/styles.scss';
import './styles.scss';

const Layout = (props) => {
  const { children, seo } = props;
  return (
    <>
      <NoJs />
      <Header />
      <main>
        {seo && <SEO {...seo} />}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
