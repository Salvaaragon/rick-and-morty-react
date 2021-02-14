import NavBar from '@Components/Layout/Header/NavBar';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleIcon from '@material-ui/icons/People';
import { i18n } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavBarListItem } from './NavBar/types';

type createItemsListType = (i18n: i18n) => NavBarListItem[];

const createItemsList: createItemsListType = (i18n) => {
  return [
    {
      text: i18n.t('navbar:home'),
      Icon: HomeIcon,
      link: '/',
    },
    {
      text: i18n.t('navbar:characters'),
      Icon: PeopleIcon,
      link: '/characters',
    },
    {
      text: i18n.t('navbar:locations'),
      Icon: LocationOnIcon,
      link: '/locations',
    },
    {
      text: i18n.t('navbar:episodes'),
      Icon: MovieIcon,
      link: '/episodes',
    },
  ];
};

type Header = () => JSX.Element;

const Header: Header = () => {
  const { i18n } = useTranslation();
  return <NavBar listItems={createItemsList(i18n)} />;
};

export default Header;
