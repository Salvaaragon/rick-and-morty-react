import { NavBarListItem } from '../../types';

export type DrawerMenuProps = {
  open: boolean;
  closeFunction: () => void;
  listItems: NavBarListItem[];
};
