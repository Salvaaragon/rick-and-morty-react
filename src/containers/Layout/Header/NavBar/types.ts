import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type NavBarListItem = {
  text: string;
  Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
  link: string;
};

export type NavBarList = {
  listItems: NavBarListItem[];
};

export type NavBarProps = NavBarList;
