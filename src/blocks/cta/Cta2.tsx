'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BgImageProps } from '@/types/graphics';

interface Props {
  bgImage?: BgImageProps;
  heading: string;
  primaryBtn: ButtonProps;
}

/***************************  CALL TO ACTION - 2  ***************************/

export default function Cta2({ bgImage, heading, primaryBtn }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard
        {...(bgImage && {
          sx: {
            position: 'relative',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&:before': {
              content: `' '`,
              position: 'absolute',
              width: 1,
              height: 1,
              left: 0,
              bottom: 0,
              background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} -280%, ${theme.palette.grey[100]} 143.54%)`
            }
          }
        })}
      >
        <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, position: 'relative', width: 1 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ alignItems: { xs: 'flex-start', md: 'flex-end' }, justifyContent: 'space-between', gap: { xs: 3, sm: 4 } }}
          >
            <Typography variant="h3">{heading}</Typography>
            {primaryBtn && <Button color="primary" size="large" variant="contained" sx={{ minWidth: 215 }} {...primaryBtn} />}
          </Stack>
        </Box>
      </GraphicsCard>
    </ContainerWrapper>
  );
}
