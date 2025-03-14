'use client';

import { useEffect, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps, NavItemProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 8  ***************************/

export default function NavbarContent8({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [menuItems1, setMenuItems1] = useState<NavItemProps[]>([]);
  const [menuItems2, setMenuItems2] = useState<NavItemProps[]>([]);

  // Splits navItems into two arrays, menuItems1 and menuItems2, for display purposes
  useEffect(() => {
    if (navItems?.length) {
      const length = navItems.length;
      const mid = Math.ceil(length / 2);
      const part1 = navItems.slice(0, mid);
      const part2 = navItems.slice(mid);
      setMenuItems1(part1);
      setMenuItems2(part2);
    }
  }, [navItems]);

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        justifyContent: { xs: 'space-between', sm: 'center' },
        '& .MuiButtonBase-root': { px: { sm: 2, md: 3 }, '&[position="relative"]': { pr: { sm: 4, md: 5 } } }
      }}
    >
      {downSM && <LogoSection isIcon={true} />}
      {!downSM && (
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', gap: 0.75 }}>
          {navItems && menuItems1.map((item) => <NavMenu key={item.id} navItems={[item]} menuTextColor={theme.palette.text.secondary} />)}
          <Box sx={{ mx: { sm: 1.5, md: 7.25 } }}>
            <LogoSection isIcon={true} />
          </Box>
          {navItems && menuItems2.map((item) => <NavMenu key={item.id} navItems={[item]} menuTextColor={theme.palette.text.secondary} />)}
          {primaryBtn && <NavPrimaryButton variant="text" {...primaryBtn} />}
          {secondaryBtn && <NavSecondaryButton variant="text" {...secondaryBtn} />}
          {customization && <Customization />}
        </Stack>
      )}
      {downSM && (
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1.25 }}>
          {customization && <Customization />}
          <MenuPopper
            offset={12}
            toggleProps={{
              children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
              color: 'inherit',
              sx: { minWidth: 40, width: 40, height: 40, p: 0 }
            }}
          >
            <ContainerWrapper>
              {navItems && (
                <Box sx={{ mx: -2 }}>
                  <NavMenuDrawer {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
                </Box>
              )}
              <Divider />
              <Stack direction="row" sx={{ gap: 1, alignItems: 'center', my: 1.25 }}>
                {secondaryBtn && <NavSecondaryButton fullWidth {...secondaryBtn} />}
                {primaryBtn && <NavPrimaryButton variant="text" fullWidth {...primaryBtn} />}
              </Stack>
            </ContainerWrapper>
          </MenuPopper>
        </Stack>
      )}
    </Stack>
  );
}
