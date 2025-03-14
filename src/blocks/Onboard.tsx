// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GradientFab from '@/components/GradientFab';
import LogoSection from '@/components/logo';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Circles from '@/images/Circles';

interface Props {
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
}

/***************************  ONBOARD  ***************************/

export default function OnBoard({ heading, caption, primaryBtn, secondaryBtn }: Props) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard>
        <Stack
          sx={{
            minHeight: { xs: 'calc(100vh - 64px)', sm: 'calc(100vh - 80px)', md: 'calc(100vh - 96px)' },
            justifyContent: 'center',
            p: 4,
            gap: { xs: 7, md: 10 }
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                '& .gradient-fab': { display: 'contents', '& svg': { width: { xs: 66, sm: 100 }, height: { xs: 66, sm: 100 } } }
              }}
            >
              <GradientFab type="star" icon={<LogoSection isIcon={true} />} />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                width: 1,
                mt: { xs: -41.5, sm: -43.75 },
                height: 600,
                transform: { xs: 'scale(2.5)', sm: 'scale(1.5)', md: 'unset' },
                '& svg': { width: 1, height: 1 }
              }}
            >
              <Circles />
            </Box>
          </Box>
          <Stack sx={{ gap: { xs: 3, md: 5 }, position: 'relative' }}>
            <Typeset
              {...{
                heading,
                caption,
                stackProps: { sx: { alignItems: 'center', gap: 1.5 } },
                headingProps: { sx: { textAlign: 'center' }, variant: 'h1' },
                captionProps: { sx: { width: { xs: 300, sm: 616, md: 701 }, textAlign: 'center' } }
              }}
            />
            {(primaryBtn || secondaryBtn) && (
              <Stack direction={{ sm: 'row' }} sx={{ justifyContent: 'center', gap: { xs: 1, sm: 1.5 } }}>
                {primaryBtn && <Button color="primary" size="small" variant="contained" {...primaryBtn} />}
                {secondaryBtn && <Button color="primary" size="small" variant="outlined" {...secondaryBtn} />}
              </Stack>
            )}
          </Stack>
        </Stack>
      </GraphicsCard>
    </ContainerWrapper>
  );
}
