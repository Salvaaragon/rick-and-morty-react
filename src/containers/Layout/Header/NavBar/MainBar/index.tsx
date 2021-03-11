import { CustomLink } from '@Components/CustomLink';
import { CustomToolbar } from '@Components/CustomToolbar';
import Logo from '@Components/Logo';
import LanguageSelector from '@Containers/LanguageSelector';
import { MenuItem } from '@material-ui/core';
import React from 'react';
import { MainBarProps } from './types';

const MainBar: React.FC<MainBarProps> = (props: MainBarProps) => {
  const { listItems } = props;

  return (
    <CustomToolbar>
      <Logo />
      {listItems.map(({ text, Icon, link }) => (
        <CustomLink to={link} key={text}>
          <MenuItem>
            <Icon />
            <p>{text}</p>
          </MenuItem>
        </CustomLink>
      ))}
      <LanguageSelector />
    </CustomToolbar>
  );
};

export default MainBar;
