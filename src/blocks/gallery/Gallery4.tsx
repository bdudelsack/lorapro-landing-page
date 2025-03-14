'use client';

import { SyntheticEvent, useEffect, useState } from 'react';

// @mui
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';

// @third-party
import Lightbox from 'yet-another-react-lightbox';
import Slider, { Settings } from 'react-slick';

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

interface Props extends GalleryProps {
  topics: string[];
}

const boxHeight = { xs: 228, sm: 410, md: 554 };

interface GraphicsBoxProps {
  boxData: BoxProps[];
  setIndex: (index: number) => void;
  isChangingSlide: boolean;
}

/***************************  GALLERY - GRAPHICS BLOCK ***************************/

function GraphicsBox({ boxData, setIndex, isChangingSlide }: GraphicsBoxProps) {
  const boxGap = { xs: 1, sm: 1.5 };
  const openLightBox = (index: number) => {
    if (!isChangingSlide) {
      // Check if not changing slide
      setIndex(index);
    }
  };

  return (
    <Stack sx={{ alignItems: 'center', gap: boxGap, width: { xs: 118, sm: 214, md: 290 }, height: boxHeight }}>
      <GraphicsCard
        bgImage={boxData[0].src}
        sx={{ height: '50%', width: 1, cursor: 'pointer' }}
        onClick={() => openLightBox(boxData[0].index)}
      />
      <GraphicsCard
        bgImage={boxData[1].src}
        sx={{ height: '50%', width: 1, cursor: 'pointer' }}
        onClick={() => openLightBox(boxData[1].index)}
      />
    </Stack>
  );
}

/***************************  GALLERY - 4  ***************************/

export default function Gallery4({ heading, caption, topics, images }: Props): JSX.Element {
  const [index, setIndex] = useState(-1);
  const [activeTopic, setActiveTopic] = useState(0);
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [isChangingSlide, setIsChangingSlide] = useState(false);

  const slickStyle = { alignItems: 'center', '& .slick-slide': { ' > div': { px: 0.75 } } };

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
        if (groupData.length == 2) {
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

  const settings: Settings = {
    centerMode: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    initialSlide: 0,
    variableWidth: true,
    beforeChange: () => {
      setIsChangingSlide(true); // Set state to indicate slide change is occurring
    },
    afterChange: () => {
      setIsChangingSlide(false); // Reset state after slide change
    }
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setActiveTopic(newValue);
  };

  const openLightBox = (index: number) => {
    if (!isChangingSlide) {
      // Check if not changing slide
      setIndex(index);
    }
  };

  return (
    <Stack sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <ContainerWrapper>
          <Typeset {...{ heading, caption, stackProps: { sx: { alignItems: 'center', textAlign: 'center' } } }} />
        </ContainerWrapper>
        <Stack sx={slickStyle}>
          <Box sx={{ maxWidth: 1 }}>
            <Tabs
              TabIndicatorProps={{ sx: { display: 'none' } }}
              value={activeTopic}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              rel="noopener noreferrer"
              aria-label="scrollable auto tabs example"
            >
              {topics.map((item, index) => (
                <Tab
                  label={item}
                  key={index}
                  tabIndex={0}
                  sx={{
                    height: { xs: 52, md: 56 },
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 10,
                    mx: { xs: 0.5, md: 0.75 },
                    backgroundColor: activeTopic === index ? 'grey.100' : 'inherit',
                    '&.Mui-focusVisible': {
                      bgcolor: 'grey.300'
                    },
                    '&:hover': { bgcolor: 'grey.50' }
                  }}
                />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ width: 1, mt: { xs: 2, sm: 3 } }}>
            <Slider {...settings}>
              {galleryData.map((item, index) => (
                <Box key={index}>
                  {item.type == 'box' && item.child ? (
                    <GraphicsBox
                      boxData={item.child}
                      setIndex={(index) => openLightBox(index)} // Replace with your actual setIndex function
                      isChangingSlide={false} // Replace with your actual isChangingSlide value
                    />
                  ) : (
                    <GraphicsCard
                      bgImage={item.src}
                      sx={{ width: { xs: 222, sm: 412, md: 540 }, height: boxHeight, cursor: 'pointer' }}
                      onClick={() => openLightBox(item.index)}
                    />
                  )}
                </Box>
              ))}
            </Slider>
          </Box>
        </Stack>
      </Stack>
      <Lightbox index={index} slides={lightBox} open={index >= 0} close={() => setIndex(-1)} />
    </Stack>
  );
}
