import Header from '@Components/Layout/Header';
import { Container } from '@material-ui/core';
import React from 'react';
import Content from './Content';
import Footer from './Footer';

const Layout: () => JSX.Element = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default Layout;
