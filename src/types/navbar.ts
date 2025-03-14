import { ReactElement } from 'react';

// @mui
import { ButtonProps } from '@mui/material/Button';

// @project
import { MegaMenuType } from '@/enum';
import { SpriteIconProps } from './icon';
import { MenuFooterProps, MenuItemsProps } from './mega-menu';

interface NavMegamenuProps {
  type: MegaMenuType;
  toggleBtn: ButtonProps;
  menuItems: MenuItemsProps[];
  footerData?: ReactElement | MenuFooterProps;
  bannerData?: ReactElement;
  popperOffset?: number;
  popperOffsetX?: number;
  popperWidth?: number;
}

export interface NavItemProps {
  id: string | number;
  title: string;
  link?: string;
  target?: string;
  icon?: SpriteIconProps;
  expanded?: boolean;
  megaMenu?: NavMegamenuProps;
}

export interface NavbarContentProps {
  navItems?: NavItemProps[];
  primaryBtn?: ButtonProps;
  secondaryBtn?: ButtonProps;
  customization?: boolean;
}
