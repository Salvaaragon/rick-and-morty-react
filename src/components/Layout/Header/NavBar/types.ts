import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type NavBarListItem = {
  text: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  link: string;
};

export type NavBarList = {
  listItems: NavBarListItem[];
};
