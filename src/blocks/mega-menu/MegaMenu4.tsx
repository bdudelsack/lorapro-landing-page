import { ReactNode } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { SxProps } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// @project
import PreviewCard from '@/components/cards/PreviewCard';

//@type
import { MenuItemsProps } from '@/types/mega-menu';

interface Props {
  menuItems: MenuItemsProps[];
  footerData?: ReactNode;
  footerSX?: SxProps;
  popperWidth?: number;
}

/***************************  MEGA MENU - 4  ***************************/

export default function MegaMenu4({ menuItems, footerData, popperWidth = 936, footerSX }: Props) {
  return (
    <Box sx={{ maxWidth: { xs: 1, md: popperWidth } }}>
      <Grid container spacing={1} sx={{ p: 1, bgcolor: 'background.paper' }}>
        {menuItems.map((item, index) => (
          <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
            <Link
              {...(item.link && { component: NextLink, ...item.link, sx: { ...item.link?.sx, WebkitTapHighlightColor: 'transparent' } })}
              aria-label={item.title}
            >
              <PreviewCard {...item} />
            </Link>
          </Grid>
        ))}
      </Grid>
      {footerData && <Box sx={{ p: 2.5, bgcolor: 'grey.100', ...footerSX }}>{footerData}</Box>}
    </Box>
  );
}
