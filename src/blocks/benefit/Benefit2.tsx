'use client';

// @mui
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps } from '@/types/benefit';

/***************************  BENEFIT - COUNTER BLOCK  ***************************/

function CounterBlock({ counter, caption, defaultUnit }: { counter: number; caption: string; defaultUnit?: string }) {
  return (
    <>
      <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'flex-end' }}>
        <Typography component="div" variant="h1">
          {counter}
        </Typography>
        {defaultUnit && (
          <Typography component="div" variant="h2">
            {defaultUnit}
          </Typography>
        )}
      </Stack>
      <Typography sx={{ color: 'text.secondary' }}>{caption}</Typography>
    </>
  );
}

/***************************  BENEFIT - 2  ***************************/

export default function Benefit2({ bgImage, heading, blockDetail }: BenefitProps): JSX.Element {
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
        <GraphicsCard {...(bgImage && { overLay: true, bgImage })} sx={{ p: { xs: 3, sm: 4, md: 5 }, backgroundPositionY: '67%' }}>
          <Stack sx={{ gap: { sm: 4, xs: 3 }, alignItems: 'center' }}>
            <Typeset {...{ heading, headingProps: { sx: { maxWidth: 750 }, variant: 'h4' } }} />
            <Stack sx={{ gap: 1.5, width: 1 }}>
              <Stack direction="row" sx={{ justifyContent: 'space-evenly', textAlign: 'center', width: 1 }}>
                <Stack sx={{ gap: 1, maxWidth: { xs: 160, sm: 246 }, justifyContent: 'center' }}>
                  <CounterBlock {...blockDetail[0]} />
                </Stack>

                <Divider orientation="vertical" flexItem sx={{ mx: { xs: 1.5, md: 5 }, my: 0 }} />

                <Stack sx={{ gap: 1, maxWidth: { xs: 160, sm: 246 }, justifyContent: 'center' }}>
                  <CounterBlock {...blockDetail[1]} />
                </Stack>

                <Divider orientation="vertical" flexItem sx={{ mx: { xs: 1.5, md: 5 }, my: 0, display: { xs: 'none', sm: 'block' } }} />
                <Stack sx={{ gap: 1, maxWidth: { xs: 160, sm: 246 }, justifyContent: 'center', display: { xs: 'none', sm: 'block' } }}>
                  <CounterBlock {...blockDetail[2]} />
                </Stack>
              </Stack>

              <Box sx={{ width: 1, display: { xs: 'block', sm: 'none' } }}>
                <Divider sx={{ marginBottom: 1.5 }} />
                <Stack sx={{ gap: 1, textAlign: 'center', maxWidth: { xs: 360, sm: 246 }, margin: 'auto' }}>
                  <CounterBlock {...blockDetail[2]} />
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}
