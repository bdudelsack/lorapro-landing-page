'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  image: ImageCommonProps;
}

/***************************  CALL TO ACTION - 12  ***************************/

export default function Cta12({ heading, caption, primaryBtn, image }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.6
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ height: 1, alignItems: 'start', justifyContent: 'center', p: { xs: 3, sm: 4, md: 5 }, gap: { xs: 4, sm: 5 } }}>
                <Typeset {...{ heading, caption }} />
                {primaryBtn && (
                  <ButtonAnimationWrapper>
                    <Button variant="contained" size="large" {...primaryBtn} />
                  </ButtonAnimationWrapper>
                )}
              </Stack>
            </GraphicsCard>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.8
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard sx={{ height: 1 }}>
              <Box sx={{ pl: { xs: 5, md: 10 }, pt: { xs: 5, md: 6 }, minHeight: { xs: 348, sm: 386, md: 498 }, height: 1 }}>
                <GraphicsImage
                  sx={{
                    height: 1,
                    backgroundPositionX: 'left',
                    backgroundPositionY: 'top',
                    borderTopLeftRadius: { xs: 12 },
                    borderBottomLeftRadius: { xs: 12 }
                  }}
                  image={image}
                />
              </Box>
            </GraphicsCard>
          </motion.div>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
