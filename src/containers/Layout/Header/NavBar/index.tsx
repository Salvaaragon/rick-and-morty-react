import { Hidden } from '@material-ui/core';
import React from 'react';
import MainBar from './MainBar';
import ResponsiveBar from './ResponsiveBar';
import { NavbarContainer } from './styles';
import { NavBarProps } from './types';

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const { listItems } = props;

  return (
    <NavbarContainer container>
      <Hidden smDown>
        <MainBar listItems={listItems} />
      </Hidden>
      <Hidden mdUp>
        <ResponsiveBar listItems={listItems} />
      </Hidden>
    </NavbarContainer>
  );
};

export default NavBar;
