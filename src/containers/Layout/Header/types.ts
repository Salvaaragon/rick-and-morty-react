import { i18n } from 'i18next';
import { NavBarListItem } from './NavBar/types';

export type createItemsListType = (i18n: i18n) => NavBarListItem[];
