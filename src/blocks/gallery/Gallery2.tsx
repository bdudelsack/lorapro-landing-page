'use client';

import { useState } from 'react';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { GalleryProps } from '@/types/gallery';

/***************************  GALLERY 2 - HELPER  ***************************/

// Determines grid size for images based on index and total count for responsive layout
function getGridSize(index: number, length: number) {
  switch (length) {
    case 1:
      return 12;
    case 2:
      return 6;
    case 3:
      return 4;
    case 4:
      return 6;
    case 5:
      return index < 2 ? 6 : 4;
    default:
      return 4;
  }
}

/***************************  GALLERY - 2  ***************************/

export default function Gallery2({ heading, caption, images }: GalleryProps): JSX.Element {
  const [index, setIndex] = useState(-1);

  // Map over images to create an array for the lightbox
  const lightBox = images.map((image) => {
    return { ...images, src: GetImagePath(image.src) };
  });

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {images.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: getGridSize(index, images.length) }}>
              <Box sx={{ overflow: 'hidden', borderRadius: 10 }}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <GraphicsCard
                    bgImage={item.src}
                    sx={{ height: { xs: 200, sm: 300, md: 366 }, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                    onClick={() => setIndex(index)}
                  />
                </motion.div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Lightbox index={index} slides={lightBox} open={index >= 0} close={() => setIndex(-1)} />
    </ContainerWrapper>
  );
}
