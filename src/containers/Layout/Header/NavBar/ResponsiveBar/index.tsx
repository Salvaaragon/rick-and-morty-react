import Logo from '@Components/Logo';
import { CustomToolbar } from '@Components/CustomToolbar';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import DrawerMenu from './DrawerMenu';
import { ResponsiveBarProps } from './types';

const ResponsiveBar: React.FC<ResponsiveBarProps> = (
  props: ResponsiveBarProps,
) => {
  const { listItems } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(!isOpen);
  };

  const closeFunction = () => {
    setIsOpen(false);
  };

  return (
    <CustomToolbar>
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
    </CustomToolbar>
  );
};

export default ResponsiveBar;
