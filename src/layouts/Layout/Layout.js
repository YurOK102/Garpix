import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useStylesLayout } from './LayoutStyle';

const Layout = ({ children }) => {
  const classes = useStylesLayout();

  return (
    <div className={classes.layout} id="layout">
      <Header />

      <div className={classes.layout__content}>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
