'use client';

import { ReactNode } from 'react';

// @mui
import { SxProps, useTheme, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

// @project
import SvgIcon from '@/components/SvgIcon';
import { IconType } from '@/enum';

// @types
import { MenuItemsProps } from '@/types/mega-menu';
interface Props {
  menuItems: MenuItemsProps[];
  footerData?: ReactNode;
  popperWidth?: number;
  footerSX?: SxProps;
}

/***************************  MEGA MENU - 3  ***************************/

export default function MegaMenu3({ menuItems, footerData, popperWidth = 725, footerSX }: Props) {
  const theme = useTheme();
  return (
    <>
      <List
        component="nav"
        sx={{ p: 1, width: '100%', maxWidth: { xs: 1, md: popperWidth }, bgcolor: 'background.paper', display: 'flex', flexWrap: 'wrap' }}
      >
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              px: { xs: 1.5, md: 2 },
              py: { xs: 0.75, md: 1.25 },
              my: 0.25,
              mx: 0.25,
              width: { xs: 1, sm: '49%' },
              borderRadius: 3,
              '&:hover': { bgcolor: 'grey.50' },
              '&:focus-visible': { bgcolor: 'grey.200' }
            }}
            TouchRippleProps={{
              style: {
                color: alpha(theme.palette.primary.main, 0.3)
              }
            }}
          >
            {item.icon && (
              <ListItemAvatar sx={{ minWidth: 60 }}>
                <Avatar variant="rounded" sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: 'grey.100' }}>
                  <SvgIcon type={IconType.CUSTOM} {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                </Avatar>
              </ListItemAvatar>
            )}
            <ListItemText primary={item.title} secondary={item.content} primaryTypographyProps={{ variant: 'subtitle1', mb: 0.5 }} />
          </ListItemButton>
        ))}
      </List>
      {footerData && <Box sx={{ p: 2.5, bgcolor: 'grey.100', ...footerSX }}>{footerData}</Box>}
    </>
  );
}
