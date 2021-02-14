import { Grid, Hidden } from '@material-ui/core';
import React from 'react';
import MainBar from './MainBar';
import ResponsiveBar from './ResponsiveBar';
import { NavBarList } from './types';

type NavBarProps = NavBarList;

type NavBar = (props: NavBarProps) => JSX.Element;

const NavBar: NavBar = (props: NavBarProps) => {
  const { listItems } = props;
  return (
    <Grid container>
      <Hidden smDown>
        <MainBar listItems={listItems} />
      </Hidden>
      <Hidden mdUp>
        <ResponsiveBar listItems={listItems} />
      </Hidden>
    </Grid>
  );
};

export default NavBar;
