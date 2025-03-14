'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  exploreBtn: ButtonProps;
  images: ImageCommonProps[];
}

/***************************  HERO - 13  ***************************/

export default function Hero13({ heading, caption, exploreBtn, images }: Props): JSX.Element {
  const settings: Settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    centerMode: true,
    initialSlide: 2,
    variableWidth: true
  };

  return (
    <Stack sx={{ alignItems: 'center', py: SECTION_COMMON_PY }}>
      <ContainerWrapper>
        <Typeset
          {...{
            heading,
            caption,
            stackProps: { sx: { textAlign: 'center', alignItems: 'center' } },
            headingProps: { variant: 'h1', sx: { maxWidth: { xs: 400, sm: 550, md: 710 } } },
            captionProps: { sx: { maxWidth: { xs: 400, sm: 450, md: 520 } } }
          }}
        />
        <Stack direction="row" sx={{ justifyContent: 'center', gap: { xs: 1, sm: 2, md: 2.5 }, mt: { xs: 3, sm: 4, md: 5 } }}>
          <Button
            color="primary"
            variant="contained"
            size="small"
            startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
            {...exploreBtn}
          />
        </Stack>
      </ContainerWrapper>
      <Stack sx={{ width: 1, height: 1, mt: { xs: 4, md: 8 } }}>
        <Slider {...settings}>
          {images.map((item, index) => (
            <Box key={index} sx={{ px: 0.75 }}>
              <GraphicsImage
                {...{ image: item, cardMediaProps: { component: 'img' } }}
                sx={{
                  height: 'auto',
                  width: 1,
                  maxWidth: { xs: 200, sm: 1 },
                  backgroundPosition: 'top',
                  backgroundSize: 'contain',
                  borderRadius: { xs: 6, sm: 8, md: 10 }
                }}
              />
            </Box>
          ))}
        </Slider>
      </Stack>
    </Stack>
  );
}
