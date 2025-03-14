'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Marquee from 'react-fast-marquee';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { MarqueesDataProps, TagProps } from '@/types/integration';

/***************************  INTEGRATION - TAG  ***************************/

function IntegrationTag({ label, image }: TagProps) {
  const size = { xs: 24, sm: 36, md: 48 };

  return (
    <Chip
      label={<Typography variant="h5">{label}</Typography>}
      avatar={
        <Avatar alt="social" sx={{ bgcolor: 'background.default' }}>
          <GraphicsImage image={image!} sx={{ width: size, height: size }} />
        </Avatar>
      }
      sx={{
        px: { xs: 2.25, md: 3 },
        py: { xs: 2, sm: 2.75, md: 4 },
        mx: { xs: 0.5, sm: 0.75, md: 1 },
        minWidth: { sm: 150, md: 200 },
        bgcolor: 'background.default',
        borderRadius: { xs: 4, sm: 5, md: 7 },
        '& .MuiChip-label': { p: 0, pl: { xs: 1.25, sm: 1.5 } },
        '& .MuiChip-avatar': { width: 'auto', height: 'auto' }
      }}
    />
  );
}

interface Props {
  marquees: MarqueesDataProps[];
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
}

/***************************  INTEGRATION - 7  ***************************/

export default function Integration7({ headLine, primaryBtn, marquees }: Props) {
  const theme = useTheme();
  const grey100 = theme.palette.grey[100];

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 3, sm: 4 }}>
        <Grid size={12}>
          <Grid container spacing={{ xs: 3, sm: 1.5 }} sx={{ alignItems: 'flex-end' }}>
            <Grid size={{ xs: 12, sm: 7 }}>{headLine && <Typography variant="h2">{headLine}</Typography>}</Grid>
            <Grid size={{ xs: 12, sm: 5 }} sx={{ textAlign: { sm: 'right' } }}>
              {primaryBtn && <Button variant="contained" {...primaryBtn} />}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <GraphicsCard sx={{ position: 'relative' }}>
            <Stack sx={{ gap: { xs: 1, sm: 1.5, md: 2 }, py: { xs: 3.25, sm: 5, md: 7.875 } }}>
              {marquees.map((marquee, index) => (
                <Stack key={index} direction="row" sx={{ alignItems: 'center' }}>
                  <Marquee pauseOnHover {...(theme.direction === ThemeDirection.RTL && { direction: 'right' })} {...marquee.marqueeProps}>
                    {marquee.data.map((integration, index) => (
                      <IntegrationTag key={index} {...integration} />
                    ))}
                  </Marquee>
                </Stack>
              ))}
            </Stack>
            <Box
              sx={{
                background: `radial-gradient(59.52% 59.52% at 50.07% 49.93%, ${alpha(grey100, 0)} 0%, ${grey100} 200%)`,
                position: 'absolute',
                width: 1,
                height: 1,
                top: 0,
                zIndex: 1
              }}
            />
          </GraphicsCard>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
