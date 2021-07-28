import React from 'react';
import { Footer, Header, SEO, NoJs, WmAscii } from 'components';
import 'typeface-lato';
import '../../../sass/global/styles.scss';
import './styles.scss';

const Layout = (props) => {
  const { children, customSEO } = props;
  return (
    <>
      <NoJs />
      <WmAscii />
      <Header />
      <main>
        {!customSEO && <SEO />}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
