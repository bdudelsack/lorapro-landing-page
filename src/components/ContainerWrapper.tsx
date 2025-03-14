'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container, { ContainerProps } from '@mui/material/Container';

/***************************  MAIN - CONTAINER  ***************************/

export default function ContainerWrapper({ children, sx }: ContainerProps) {
  const theme = useTheme();
  const upMD = useMediaQuery(theme.breakpoints.up('md'));
  const upXL = useMediaQuery(theme.breakpoints.up('xl'));
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const isDesktop = (upMD || upXL) && !downMD;

  return (
    <Container {...(isDesktop && { maxWidth: upXL ? 'xl' : 'lg' })} sx={{ ...(downMD && { px: { xs: 2, sm: 4, md: 0 } }), ...sx }}>
      {children}
    </Container>
  );
}
