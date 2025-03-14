'use client';

import { ReactElement, useState } from 'react';

// @next
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

// @project
import MenuPopper from './MenuPopper';

import { MegaMenu1, MegaMenu2, MegaMenu3, MegaMenu4, MegaMenu5 } from '@/blocks/mega-menu';

import SvgIcon from '@/components/SvgIcon';
import { MegaMenuType } from '@/enum';

// @types
import { NavItemProps } from '@/types/navbar';
import { MenuFooterProps } from '@/types/mega-menu';

const navItemSX = { py: 1.5, borderRadius: { xs: 0, sm: 4 } };

/***************************  MENU - EXPANDED  ***************************/

function ExpanedList({ item, menuTextColor }: { item: NavItemProps; menuTextColor?: string }) {
  const [open, setOpen] = useState(item.expanded || false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton sx={navItemSX} onClick={handleClick}>
        <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'caption2', color: menuTextColor || 'text.primary' }} />
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: '52%',
            transform: 'translateY(-50%)',
            transition: `transform 0.15s`,
            mr: 2.5,
            ...(open && { transform: 'translateY(-62%) rotate(-180deg)' })
          }}
        >
          <SvgIcon name="tabler-chevron-down" size={16} color={menuTextColor || 'text.primary'} stroke={2.5} />
        </Box>
      </ListItemButton>
      <Collapse in={open}>
        <Box sx={{ mb: 0.5 }}>
          {item.megaMenu && item.megaMenu.type === MegaMenuType.MEGAMENU1 && (
            <MegaMenu1
              {...{
                ...{ ...item.megaMenu, footerData: item.megaMenu.footerData as MenuFooterProps },
                footerSX: { px: 5, ml: -2.5, mr: -5 }
              }}
            />
          )}
          {item.megaMenu && item.megaMenu.type === MegaMenuType.MEGAMENU2 && <MegaMenu2 {...item.megaMenu} />}
          {item.megaMenu && item.megaMenu.type === MegaMenuType.MEGAMENU3 && (
            <MegaMenu3
              {...{ ...{ ...item.megaMenu, footerData: item.megaMenu.footerData as ReactElement }, footerSX: { px: 5, ml: -2.5, mr: -5 } }}
            />
          )}
          {item.megaMenu && item.megaMenu.type === MegaMenuType.MEGAMENU4 && (
            <MegaMenu4
              {...{ ...{ ...item.megaMenu, footerData: item.megaMenu.footerData as ReactElement }, footerSX: { px: 5, ml: -2.5, mr: -5 } }}
            />
          )}
          {item.megaMenu && item.megaMenu.type === MegaMenuType.MEGAMENU5 && (
            <MegaMenu5
              {...{ ...{ ...item.megaMenu, bannerData: item.megaMenu.bannerData as ReactElement }, footerSX: { px: 5, ml: -2.5, mr: -5 } }}
            />
          )}
        </Box>
      </Collapse>
    </>
  );
}

/***************************  NAVBAR - DRAWER  ***************************/

function MenuDrawer({ item, menuTextColor }: { item: NavItemProps; menuTextColor?: string }) {
  return (
    <>
      {!item.megaMenu ? (
        <ListItemButton
          {...(item.link && { component: NextLink, href: item.link, underline: 'none', ...(item?.target && { target: item.target }) })}
          sx={navItemSX}
        >
          <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'caption2', color: menuTextColor || 'text.primary' }} />
        </ListItemButton>
      ) : (
        <ExpanedList item={item} menuTextColor={menuTextColor} />
      )}
    </>
  );
}

/***************************  NAVBAR - LIST  ***************************/

function NavList({ item, menuTextColor }: { item: NavItemProps; menuTextColor?: string }) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const currentPath = usePathname(); // Get the current path
  const toggleProps = { color: menuTextColor || 'text.primary', py: 1.5, ...theme.typography.caption2, pl: { md: 2.25, lg: 3 } };
  const buttonProps = {
    sx: {
      ...toggleProps,
      pr: { md: 2.25, lg: 3 },
      ...(item.icon && { justifyContent: 'center', gap: 0.75 }),
      ...(item.link &&
        (currentPath === item.link || (item.link === '/sections' && currentPath.includes('/sections'))) && {
          color: 'primary.main',
          fontWeight: 600
        })
    },
    ...(item.link && { component: NextLink, href: item.link, ...(item?.target && { target: item.target }) })
  };

  return (
    <>
      {!item.megaMenu ? (
        <Button size="small" {...buttonProps}>
          {item.title}
          {item?.icon && (
            <SvgIcon color="inherit" size={16} {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
          )}
        </Button>
      ) : (
        <MenuPopper
          menuTextColor={menuTextColor}
          {...(downMD && item.megaMenu?.popperOffset && { offset: item.megaMenu?.popperOffset })}
          {...(!downMD && item.megaMenu?.popperOffsetX && { offsetX: item.megaMenu?.popperOffsetX })}
          toggleProps={{ ...item.megaMenu.toggleBtn, sx: toggleProps, endIcon: true }}
          {...(item.megaMenu.type === MegaMenuType.MEGAMENU3 && { popperWidth: item.megaMenu.popperWidth || 725 })}
          {...(item.megaMenu.type === MegaMenuType.MEGAMENU4 && { popperWidth: item.megaMenu.popperWidth || 936 })}
          {...(item.megaMenu.type === MegaMenuType.MEGAMENU5 && { popperWidth: item.megaMenu.popperWidth || 750 })}
        >
          <>
            {item.megaMenu.type === MegaMenuType.MEGAMENU1 && (
              <MegaMenu1 {...{ ...item.megaMenu, footerData: item.megaMenu.footerData as MenuFooterProps }} />
            )}
            {item.megaMenu.type === MegaMenuType.MEGAMENU2 && <MegaMenu2 {...item.megaMenu} />}
            {item.megaMenu.type === MegaMenuType.MEGAMENU3 && (
              <MegaMenu3
                {...{ ...item.megaMenu, footerData: item.megaMenu.footerData as ReactElement }}
                popperWidth={item.megaMenu.popperWidth || 725}
              />
            )}
            {item.megaMenu.type === MegaMenuType.MEGAMENU4 && (
              <MegaMenu4
                {...{ ...item.megaMenu, footerData: item.megaMenu.footerData as ReactElement }}
                popperWidth={item.megaMenu.popperWidth || 936}
              />
            )}
            {item.megaMenu.type === MegaMenuType.MEGAMENU5 && (
              <MegaMenu5
                {...{ ...item.megaMenu, bannerData: item.megaMenu.bannerData as ReactElement }}
                popperWidth={item.megaMenu.popperWidth || 750}
              />
            )}
          </>
        </MenuPopper>
      )}
    </>
  );
}

/***************************  NAVBAR - MENUS  ***************************/

export function NavMenu({ navItems, menuTextColor }: { navItems: NavItemProps[]; menuTextColor?: string }) {
  return navItems.map((item: NavItemProps, index: number) => <NavList key={index} {...{ item, menuTextColor }} />);
}

export function NavMenuDrawer({ navItems, menuTextColor }: { navItems: NavItemProps[]; menuTextColor?: string }) {
  return (
    <List>
      {navItems.map((item: NavItemProps, index: number) => (
        <MenuDrawer key={index} {...{ item, menuTextColor }} />
      ))}
    </List>
  );
}
