import Copyright from '@Components/Copyright';
import Social from '@Components/Social';
import { Container, Divider, Grid } from '@material-ui/core';
import React from 'react';
import { SCFooter } from './styles';

const Footer: React.FC = () => {
  return (
    <SCFooter container>
      <Container maxWidth="lg" disableGutters>
        <Social />
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Copyright />
      </Container>
    </SCFooter>
  );
};

export default Footer;
