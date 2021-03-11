import React from 'react';
import { useTranslation } from 'react-i18next';
import { createItemsList } from './logic';
import NavBar from './NavBar';

const Header: React.FC = () => {
  const { i18n } = useTranslation();

  return <NavBar listItems={createItemsList(i18n)} />;
};

export default Header;
