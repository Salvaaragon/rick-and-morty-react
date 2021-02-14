import Logo from '@Components/Common/Logo';
import { SCLink } from '@Components/Custom/SCLink';
import { SCToolbar } from '@Components/Custom/SCToolbar';
import { MenuItem } from '@material-ui/core';
import React from 'react';
import { NavBarList } from '../types';

type MainBarProps = NavBarList;
type MainBar = (props: MainBarProps) => JSX.Element;

const MainBar: MainBar = (props: MainBarProps) => {
  const { listItems } = props;

  return (
    <SCToolbar>
      <Logo />
      {listItems.map(({ text, Icon, link }) => (
        <SCLink to={link} key={text}>
          <MenuItem>
            <Icon />
            <p>{text}</p>
          </MenuItem>
        </SCLink>
      ))}
    </SCToolbar>
  );
};

export default MainBar;
