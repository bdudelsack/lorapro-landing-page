'use client';

import { Key, useEffect, useState } from 'react';

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
import { GalleryImageList, GalleryProps } from '@/types/gallery';

interface BoxProps {
  src: string;
  index: number;
  type?: string;
}

interface GalleryItem extends BoxProps {
  child?: BoxProps[];
}

/***************************  GALLERY - GRAPHICS BLOCK  ***************************/

function GraphicsBox({ boxData, setIndex }: { boxData: BoxProps[]; setIndex: (index: number) => void }) {
  const boxGap = 1.5;

  return (
    <Grid container spacing={boxGap}>
      <Grid size={8}>
        <Box sx={{ borderRadius: 10, overflow: 'hidden' }}>
          <motion.div whileHover={{ scale: 1.02 }}>
            <GraphicsCard
              bgImage={boxData[0].src}
              sx={{ height: { xs: 408, sm: 420, md: 727 }, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
              onClick={() => setIndex(boxData[0].index)}
            />
          </motion.div>
        </Box>
      </Grid>
      <Grid size={4}>
        <Stack sx={{ height: 1, gap: boxGap }}>
          <Box sx={{ height: '50%', borderRadius: 10, overflow: 'hidden' }}>
            <motion.div whileHover={{ scale: 1.02 }} style={{ height: '100%' }}>
              <GraphicsCard
                bgImage={boxData[1].src}
                sx={{ height: '100%', cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIndex(boxData[1].index)}
              />
            </motion.div>
          </Box>
          <Box sx={{ height: '50%', borderRadius: 10, overflow: 'hidden' }}>
            <motion.div whileHover={{ scale: 1.02 }} style={{ height: '100%' }}>
              <GraphicsCard
                bgImage={boxData[2].src}
                sx={{ height: '100%', cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIndex(boxData[2].index)}
              />
            </motion.div>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

/***************************  GALLERY - 3  ***************************/

export default function Gallery3({ heading, caption, images }: GalleryProps): JSX.Element {
  const [index, setIndex] = useState(-1);
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);

  // Prepare the images for the lightbox
  const lightBox = images.map((image) => {
    return { ...images, src: GetImagePath(image.src) };
  });

  // Organize images into groups for the gallery layout
  useEffect(() => {
    const data = [...images];
    const temp = [];
    let count = 2;

    let groupData = [];

    for (let i = 0; i < data.length; i++) {
      const item: GalleryImageList = data[i];
      item.index = i;

      if (count > 0) {
        count--;
        temp.push(item);
        continue;
      } else {
        groupData.push(item);
        if (groupData.length == 3) {
          temp.push({ type: 'box', child: groupData });
          groupData = [];
          count = 2;
        }
      }

      if (i + 1 == data.length && groupData.length > 0) {
        groupData.map((item) => temp.push(item));
      }
    }

    setGalleryData(temp as GalleryItem[]);
  }, [images]);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {galleryData.map((item: GalleryItem, index: Key) => (
            <Grid key={index} size={item.type == 'box' ? 12 : 6}>
              {item.type == 'box' && item.child ? (
                <GraphicsBox boxData={item.child} setIndex={setIndex} />
              ) : (
                <Box sx={{ borderRadius: 10, overflow: 'hidden' }}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <GraphicsCard
                      bgImage={item.src}
                      sx={{ height: { xs: 200, sm: 300, md: 366 }, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                      onClick={() => setIndex(item.index)}
                    />
                  </motion.div>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Lightbox index={index} slides={lightBox} open={index >= 0} close={() => setIndex(-1)} />
    </ContainerWrapper>
  );
}
