import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Copyright from './Copyright';
import Social from './Social';

type Footer = () => JSX.Element;

const Footer: Footer = () => {
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

const SCFooter = styled(Grid)`
  background-color: gray;
  color: white;
`;
