'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import { ProfileGroup2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BgImageProps, ImageCommonProps } from '@/types/graphics';

interface Props {
  reviewData: {
    avatarList: string[];
    rating: number;
    totalReviews: string;
  };
  heading: string;
  caption?: string;
  image: ImageCommonProps;
  imageBorder?: boolean;
  bgImage: BgImageProps;
  benefitData: {
    counter: string;
    caption: string;
    defaultUnit?: string;
  };
  primaryBtn?: ButtonProps;
  secondaryBtn?: ButtonProps;
}

/***************************  HERO - 15  ***************************/

export default function Hero15({
  reviewData,
  heading,
  caption,
  image,
  imageBorder = false,
  bgImage,
  benefitData,
  primaryBtn,
  secondaryBtn
}: Props) {
  const theme = useTheme();
  const boxSpacing = { xs: 1, sm: 1.5 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: { xs: 2, sm: 3 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          <ProfileGroup2 {...reviewData} starColor="primary.main" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { textAlign: 'center', alignItems: 'center' } },
              headingProps: { variant: 'h1', sx: { maxWidth: { xs: 350, sm: 500, md: 709 } } },
              captionProps: { sx: { maxWidth: { xs: 343, md: 500 } } }
            }}
          />
        </motion.div>
      </Stack>
      <Grid container spacing={boxSpacing} sx={{ mt: { xs: 4.5, sm: 5.5, md: 6.5 } }}>
        <Grid size={{ xs: 12, sm: 7, md: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard
              sx={{ height: 1, p: { xs: 3, sm: 4, md: 5 } }}
              bgImage={{ light: '/assets/images/shared/pattern1-light.svg', dark: '/assets/images/shared/pattern1-dark.svg' }}
            >
              <GraphicsImage
                sx={{
                  height: 1,
                  minHeight: { xs: 210, sm: 400 },
                  backgroundSize: 'contain',
                  ...(imageBorder && {
                    backgroundSize: 'cover',
                    backgroundPosition: 'top left',
                    borderRadius: 3,
                    border: '4px solid',
                    borderColor: 'divider'
                  })
                }}
                image={image}
              />
            </GraphicsCard>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 4 }}>
          <Stack sx={{ gap: boxSpacing }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4
              }}
            >
              <GraphicsCard
                sx={{ height: { xs: 136, sm: 398, md: 380 }, p: { xs: 2.5, smd: 3 } }}
                bgImage={bgImage}
                overLay={`linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0.6)} 0%, ${alpha(theme.palette.grey[100], 0)} 100%)`}
              >
                <Stack direction="row" sx={{ gap: { xs: 0.75, md: 1 }, alignItems: 'center' }}>
                  <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                    <Typography variant="h2">{benefitData.counter}</Typography>
                    {benefitData.defaultUnit && (
                      <Typography variant="h3" sx={{ mb: { xs: 0.25, md: 0.5 } }}>
                        {benefitData.defaultUnit}
                      </Typography>
                    )}
                  </Stack>
                  <Typography variant="body2">{benefitData.caption}</Typography>
                </Stack>
              </GraphicsCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5
              }}
            >
              <GraphicsCard>
                <Stack direction="row" sx={{ p: { xs: 2, md: 3 }, gap: 1.5 }}>
                  <ButtonAnimationWrapper style={{ width: '50%' }}>
                    <Button color="primary" fullWidth size="large" variant="contained" {...primaryBtn} />
                  </ButtonAnimationWrapper>
                  <ButtonAnimationWrapper style={{ width: '50%' }}>
                    <Button color="primary" fullWidth size="large" variant="outlined" {...secondaryBtn} />
                  </ButtonAnimationWrapper>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Stack>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
