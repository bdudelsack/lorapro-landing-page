'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { Copyright } from '@/components/auth';
import AuthOtpVerification from '@/components/auth/AuthOtpVerification';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';

import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import BackgroundCircle from '@/components/BackgroundCircle';

interface Props {
  heading: string;
  caption: { text: string; email: string };
}

/***************************  SECTIONS - OTP VERIFICATION  ***************************/

export default function OtpVerification({ heading, caption }: Props): JSX.Element {
  const theme = useTheme();

  const resendCode = () => {
    console.log('OtpVerification: resend code');
  };

  return (
    <ContainerWrapper sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Stack sx={{ height: 1, minHeight: '100vh', justifyContent: 'space-between', gap: 6, py: SECTION_COMMON_PY }}>
        <Stack sx={{ alignItems: 'center', position: 'relative' }}>
          <BackgroundCircle />
          <Stack sx={{ bgcolor: 'grey.100', p: 1.5, borderRadius: 4, mb: 1.5, position: 'relative', zIndex: 1 }}>
            <LogoSection isIcon={true} />
          </Stack>
          <Stack sx={{ textAlign: 'center', gap: 1, position: 'relative', zIndex: 1 }}>
            <Typography variant="h2">{heading}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {caption.text}{' '}
              <Typography component="span" sx={{ color: 'primary.main' }}>
                {caption.email}
              </Typography>
            </Typography>
          </Stack>
          <Box sx={{ width: 1, maxWidth: 458, mt: 6, position: 'relative', zIndex: 1 }}>
            <AuthOtpVerification />
            <Box sx={{ textAlign: 'center', mt: 2.5 }}>
              <Typography
                component="span"
                variant="subtitle1"
                tabIndex={0}
                onClick={resendCode}
                sx={{
                  color: 'primary.main',
                  cursor: 'pointer',
                  '&:focus-visible': generateFocusVisibleStyles(theme.palette.primary.main),
                  '&:hover': { color: 'primary.dark', textDecoration: 'underline' }
                }}
              >
                Resend Code
              </Typography>
            </Box>
          </Box>
        </Stack>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Copyright />
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}
