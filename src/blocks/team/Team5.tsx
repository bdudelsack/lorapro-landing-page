'use client';

import React, { useRef } from 'react';

// @mui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import GraphicsImage from '@/components/GraphicsImage';
import SlickArrows from '@/components/SlickArrows';
import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { TeamProps } from '@/types/team';
import { ProfileProps } from '@/types/testimonial';

/***************************  TEAM - 5  ***************************/

export default function Team5({ heading, caption, members, image, actionBtn, description }: TeamProps): JSX.Element {
  const sliderRef = useRef<Slider | null>(null);
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const downMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'progressive',
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    initialSlide: 0
  };

  const sliceItem = downSM ? 4 : downMD ? 6 : 8;

  // Function to split an array into chunks of a specified size
  const chunkArray = (arr: ProfileProps[], sliceItem: number) =>
    arr.reduce((acc, _, i) => (i % sliceItem === 0 ? [...acc, arr.slice(i, i + sliceItem)] : acc), [] as ProfileProps[][]);

  const chunkedMembers = chunkArray(members, sliceItem);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 5, md: 10 } }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 3 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack sx={{ height: 1, alignItems: 'flex-start', justifyContent: 'space-between', gap: 4 }}>
              <Typeset {...{ heading, caption }} />
              {actionBtn && <Button variant="outlined" size="large" {...actionBtn} />}
            </Stack>
          </Grid>
          {image && (
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <GraphicsImage sx={{ width: 1, height: { xs: 308, sm: 339, md: 435 }, borderRadius: { xs: 6, md: 8 } }} image={image} />
                <Typography variant="body2">{description}</Typography>
              </Stack>
            </Grid>
          )}
        </Grid>
        <Stack sx={{ gap: { xs: 3, md: 4 } }}>
          <Slider ref={sliderRef} {...settings}>
            {chunkedMembers.map((membersData, chunkIndex) => (
              <Box key={chunkIndex}>
                <Grid key={chunkIndex} container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ pr: 2 }}>
                  {membersData.map((member, index) => (
                    <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
                      <Stack direction="row" sx={{ justifyContent: 'start', alignItems: 'center', gap: 1 }}>
                        <Avatar
                          src={GetImagePath(member.avatar)}
                          sx={{ width: 55, height: 55 }}
                          alt="Avatar"
                          imgProps={{ loading: 'lazy' }}
                        />
                        <Typeset
                          {...{
                            heading: member.name,
                            caption: member.role,
                            stackProps: { sx: { gap: 0.5, maxWidth: { xs: '65%', sm: '70%', md: '80%' } } },
                            headingProps: { variant: 'h4', noWrap: true, sx: { textOverflow: 'ellipsis' } },
                            captionProps: { variant: 'body1', noWrap: true, sx: { textOverflow: 'ellipsis' } }
                          }}
                        />
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </Slider>
          <SlickArrows sliderRef={sliderRef} />
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}
