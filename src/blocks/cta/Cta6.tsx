'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GradientFab from '@/components/GradientFab';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import DrawnArrow from '@/images/graphics/DrawnArrow';

// @types
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  heading: string;
  icon?: JSX.Element;
  caption: string;
  primaryBtn: ButtonProps;
  clienteleList: ClienteleListProps[];
}

/***************************  CALL TO ACTION - 6  ***************************/

export default function Cta6({ heading, caption, icon, primaryBtn, clienteleList }: Props): JSX.Element {
  const theme = useTheme();

  const settings: Settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1.92, centerMode: true }
      }
    ]
  };

  const shade = {
    content: `' '`,
    zIndex: 1,
    position: 'absolute',
    width: { xs: 13, sm: 119 },
    height: 1,
    top: 0,
    background: `linear-gradient(270deg,  ${alpha(theme.palette.grey[100], 0)} 0%, ${theme.palette.grey[100]} 104.2%)`,
    ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' })
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5
        }}
      >
        <GraphicsCard>
          <Stack sx={{ gap: { xs: 6, md: 8 }, p: { xs: 3, sm: 4, md: 8 } }}>
            <Stack sx={{ alignItems: 'center', gap: { xs: 3, sm: 4, md: 5 }, textAlign: 'center' }}>
              <Stack sx={{ alignItems: 'center', gap: { xs: 2, sm: 2.5 }, '& .gradient-fab': { display: 'contents' } }}>
                <GradientFab type="star" size={55} icon={icon || <SvgIcon name="tabler-cloud-up" size={24} />} />
                <Typeset {...{ heading, caption, captionProps: { sx: { maxWidth: 478, mx: 'auto' } }, stackProps: { sx: { gap: 1 } } }} />
              </Stack>
              <Stack direction="row" sx={{ justifyContent: 'center', position: 'relative' }}>
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
                  endAdornment={
                    <Button color="primary" variant="contained" sx={{ px: 4, minWidth: { xs: 110, md: 120 } }} {...primaryBtn} />
                  }
                  slotProps={{ input: { 'aria-label': 'Email address' } }}
                  sx={{
                    ...theme.typography.caption2,
                    color: 'text.secondary',
                    p: 0.5,
                    whiteSpace: 'nowrap',
                    '& .MuiOutlinedInput-input': { p: '6px 20px' },
                    '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
                  }}
                />
              </Stack>
            </Stack>
            <Box
              sx={{
                position: 'relative',
                '.slick-track': { display: 'flex', alignItems: 'center' },
                '&:before': { ...shade, left: 0 },
                '&:after': { ...shade, right: 0, rotate: '180deg' }
              }}
            >
              <Slider {...settings}>
                {clienteleList.map((item, index) => (
                  <Box key={index}>
                    <Stack
                      sx={{
                        alignItems: 'center',
                        px: { xs: 0.25, sm: 0.5, md: 0.75 },
                        '& svg': {
                          opacity: 0.4,
                          transition: 'all 0.5s ease-in-out',
                          '&:hover': { opacity: 1, transition: 'all 0.5s ease-in-out' }
                        }
                      }}
                    >
                      <GraphicsImage {...item} />
                    </Stack>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Stack>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}
