// @mui
import { Grid2Props } from '@mui/material/Grid2';
import { LinkProps } from '@mui/material/Link';

export interface ItemProps {
  label: string;
  link: LinkProps;
}

export interface FooterMenuProps {
  id: string | number;
  grid: Grid2Props;
  title: string;
  menu?: ItemProps[];
  megaMenu?: [];
  expanded?: boolean;
}
