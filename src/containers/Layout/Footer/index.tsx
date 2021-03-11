import Copyright from '@Components/Copyright';
import Social from '@Components/Social';
import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import { SCFooter } from './styles';

const Footer: React.FC = () => {
  return (
    <SCFooter container>
      <Social />
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Copyright />
    </SCFooter>
  );
};

export default Footer;
