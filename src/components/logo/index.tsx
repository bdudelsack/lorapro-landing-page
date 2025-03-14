'use client';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

// @project
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import LogoMain from './LogoMain';
import LogoIcon from './LogoIcon';

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: string;
}

/***************************  MAIN - LOGO  ***************************/

export default function LogoSection({ isIcon, sx, to }: Props) {
  const theme = useTheme();
  return (
    <NextLink href={!to ? process.env.NEXT_PUBLIC_BASE_NAME || '/' : to} passHref legacyBehavior>
      <ButtonBase
        disableRipple
        sx={{ ...sx, display: 'block', '&:focus-visible': generateFocusVisibleStyles(theme.palette.primary.main) }}
        rel="noopener noreferrer"
        aria-label="logo"
      >
        {isIcon ? <LogoIcon /> : <LogoMain />}
      </ButtonBase>
    </NextLink>
  );
}
