'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { Customization, MenuPopper, NavMenu, NavMenuDrawer, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 10  ***************************/

export default function NavbarContent10({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();

  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
      <Logo />
      {!downMD && navItems && (
        <Box sx={{ bgcolor: 'grey.200', borderRadius: 10 }}>
          <NavMenu {...{ navItems }} />
        </Box>
      )}
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
        {customization && <Customization />}
        {!downSM && (
          <>
            <NavSecondaryButton {...secondaryBtn} />
            <ButtonAnimationWrapper>
              <NavPrimaryButton {...primaryBtn} />
            </ButtonAnimationWrapper>
          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0 }
              }}
            >
              <ContainerWrapper>
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems }} />
                  </Box>
                )}
                {downSM && (
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1, px: 5, py: 2.5, mx: -5, bgcolor: 'grey.100' }}>
                    <NavSecondaryButton {...secondaryBtn} />
                    <ButtonAnimationWrapper>
                      <NavPrimaryButton {...primaryBtn} />
                    </ButtonAnimationWrapper>
                  </Stack>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}
