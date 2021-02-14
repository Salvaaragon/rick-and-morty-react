import { SCLink } from '@Components/Custom/SCLink';
import { NavBarListItem } from '@Components/Layout/Header/NavBar/types';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import React from 'react';

type DrawerMenuProps = {
  open: boolean;
  closeFunction: () => void;
  listItems: NavBarListItem[];
};
type DrawerMenu = (props: DrawerMenuProps) => JSX.Element;

const DrawerMenu: DrawerMenu = (props: DrawerMenuProps) => {
  const { open, closeFunction, listItems } = props;
  return (
    <Drawer anchor="left" open={open} onClose={closeFunction}>
      <div
        role="presentation"
        onClick={closeFunction}
        onKeyDown={closeFunction}
      >
        <List>
          {listItems.map(({ Icon, text, link }) => (
            <SCLink to={link} key={text}>
              <ListItem button>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </SCLink>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
