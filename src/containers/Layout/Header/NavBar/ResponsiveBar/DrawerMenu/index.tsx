import { CustomLink } from '@Components/CustomLink';
import LanguageSelector from '@Containers/LanguageSelector';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import React from 'react';
import { DrawerMenuProps } from './types';

const DrawerMenu: React.FC<DrawerMenuProps> = (props: DrawerMenuProps) => {
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
            <CustomLink to={link} key={text}>
              <ListItem button>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </CustomLink>
          ))}
        </List>
        <LanguageSelector />
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
