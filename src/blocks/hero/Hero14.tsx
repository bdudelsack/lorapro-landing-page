'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GradientFab from '@/components/GradientFab';
import SvgIcon from '@/components/SvgIcon';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Wave from '@/images/graphics/Wave';
import DrawnArrow from '@/images/graphics/DrawnArrow';

// @types
import { SmallHeroProps } from '@/types/small-hero';
import { SpriteIconProps } from '@/types/icon';

interface ListItem {
  title: string;
  icon: SpriteIconProps;
}
interface Props extends SmallHeroProps {
  tagline?: string;
  list: ListItem[];
  primaryBtn: ButtonProps;
}

/***************************  HERO - 14  ***************************/

export default function Hero14({ headLine, captionLine, tagline, list, primaryBtn }: Props) {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard>
        <Stack sx={{ p: { xs: 3, sm: 4 }, alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {tagline}
          </Typography>
          <Box sx={{ mb: { xs: 2, md: 3 }, mt: { xs: 1, sm: 1.5 } }}>
            <Wave />
          </Box>
          {headLine}
          {captionLine && (
            <Typography align="center" sx={{ color: 'text.secondary', maxWidth: { xs: 400, md: 500 }, mt: { xs: 1.5, sm: 2 } }}>
              {captionLine}
            </Typography>
          )}
          <Stack direction="row" sx={{ justifyContent: 'center', mt: 5, position: 'relative' }}>
            <Box
              component="span"
              sx={{
                position: 'absolute',
                top: '-10px',
                left: '-25px',
                ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' })
              }}
            >
              <DrawnArrow />
            </Box>
            <OutlinedInput
              placeholder="Enter your email address"
              endAdornment={<Button color="primary" variant="contained" sx={{ px: 4 }} {...primaryBtn} />}
              slotProps={{ input: { 'aria-label': 'Email address' } }}
              sx={{
                ...theme.typography.caption2,
                color: 'secondary.main',
                p: 0.5,
                whiteSpace: 'nowrap',
                '& .MuiOutlinedInput-input': { p: '6px 20px' },
                '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
              }}
            />
          </Stack>
        </Stack>
      </GraphicsCard>
      <Box sx={{ mt: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={{ xs: 1.5, sm: 3 }} sx={{ justifyContent: 'center' }}>
          {list.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4, md: 3 }}>
              <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center', '& .gradient-fab': { display: 'contents' } }}>
                <GradientFab
                  type="round"
                  icon={<SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />}
                />
                <Stack sx={{ justifyContent: 'center' }}>
                  <Typography sx={{ color: 'text.secondary' }}>{item.title}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ContainerWrapper>
  );
}
