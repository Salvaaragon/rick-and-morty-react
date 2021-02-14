import NavBar from '@Components/Layout/Header/NavBar';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleIcon from '@material-ui/icons/People';
import React from 'react';
import { NavBarListItem } from './NavBar/types';

const navbarListItems: NavBarListItem[] = [
  {
    text: 'Inicio',
    Icon: HomeIcon,
    link: '/',
  },
  {
    text: 'Personajes',
    Icon: PeopleIcon,
    link: '/characters',
  },
  {
    text: 'Localizaciones',
    Icon: LocationOnIcon,
    link: '/locations',
  },
  {
    text: 'Episodios',
    Icon: MovieIcon,
    link: '/episodes',
  },
];

type Header = () => JSX.Element;

const Header: Header = () => {
  return <NavBar listItems={navbarListItems} />;
};

export default Header;
