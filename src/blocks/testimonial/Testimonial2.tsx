'use client';

import { useRef, useState } from 'react';

// @mui
import Grid from '@mui/material/Grid2';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard, VideoCard } from '@/components/cards';
import ModalCard from '@/components/cards/ModalCard';
import { ProfileCard2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import Rating from '@/components/Rating';
import SlickArrows from '@/components/SlickArrows';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 2  ***************************/

export default function Testimonial2({ heading, caption, testimonials }: TestimonialProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string>('');

  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    initialSlide: 0
  };

  const slickStyle = { '& .slick-track': { display: 'flex' }, '& .slick-slide': { height: 'auto', ' > div': { height: 1, px: 0.75 } } };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3
            }}
          >
            <Typeset {...{ heading, caption }} />
          </motion.div>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
            >
              <SlickArrows sliderRef={sliderRef} />
            </motion.div>
          </Box>
        </Stack>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Stack sx={{ ...slickStyle, gap: 2 }}>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <GraphicsCard key={index} sx={{ height: 1 }}>
                  <Grid container sx={{ height: 1 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <VideoCard
                        bgImage={testimonial.bgImage}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          setVideoSrc(testimonial.videoSrc || '');
                          setIsOpen(true);
                          sliderRef?.current?.slickPause();
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Stack sx={{ alignItems: 'start', justifyContent: 'space-between', height: 1, gap: 3, p: { xs: 3, sm: 4, md: 5 } }}>
                        <Stack sx={{ gap: 1.5 }}>
                          <Rating rate={testimonial.ratings} />
                          <Typography variant="h4" sx={{ color: 'text.secondary' }}>
                            {testimonial.review}
                          </Typography>
                        </Stack>
                        <ProfileCard2 {...testimonial.profile} background />
                      </Stack>
                    </Grid>
                  </Grid>
                </GraphicsCard>
              ))}
            </Slider>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <SlickArrows sliderRef={sliderRef} />
            </Box>
          </Stack>
        </motion.div>
      </Stack>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          sliderRef?.current?.slickPlay();
        }}
        aria-labelledby="video-modal"
        aria-describedby="modal for video"
      >
        <ModalCard sx={{ width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' }, height: 'auto', bgcolor: 'transparent' }}>
          <video playsInline width="100%" height="100%" style={{ display: 'flex', objectFit: 'cover' }} controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            <track src="captions.vtt" kind="captions" srcLang="en" label="English captions" />
          </video>
        </ModalCard>
      </Modal>
    </ContainerWrapper>
  );
}
