import Logo from '@Components/Common/Logo';
import { SCToolbar } from '@Components/Custom/SCToolbar';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { NavBarList } from '../types';
import DrawerMenu from './DrawerMenu';

type ResponsiveBarProps = NavBarList;

type ResponsiveBar = (props: ResponsiveBarProps) => JSX.Element;

const ResponsiveBar: ResponsiveBar = (props: ResponsiveBarProps) => {
  const { listItems } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(!isOpen);
  };

  const closeFunction = () => {
    setIsOpen(false);
  };

  return (
    <SCToolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={onClickButton}
      >
        <MenuIcon />
      </IconButton>
      <DrawerMenu
        open={isOpen}
        closeFunction={closeFunction}
        listItems={listItems}
      />
      <Logo />
    </SCToolbar>
  );
};

export default ResponsiveBar;
