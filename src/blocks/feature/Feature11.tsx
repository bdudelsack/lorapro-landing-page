'use client';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard, IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';
interface Props {
  heading: string;
  caption?: string;
  image?: ImageCommonProps;
  showBorder?: boolean;
  features: IconCardProps[];
}

/***************************  FEATURE - 11  ***************************/

export default function Feature11({ heading, caption, image, features, showBorder = true }: Props): JSX.Element {
  const imagePadding = { xs: 3, sm: 4, md: 5 };
  const iconProps = { type: IconType.CUSTOM };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
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
        <Stack sx={{ gap: 1.5 }}>
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
            >
              <GraphicsCard>
                <Box sx={{ pl: imagePadding, pt: imagePadding, height: { xs: 204, sm: 300, md: 360 } }}>
                  <GraphicsImage
                    image={image}
                    sx={{
                      height: 1,
                      backgroundPositionX: 'left',
                      backgroundPositionY: 'top',
                      borderTopLeftRadius: { xs: 12 },
                      borderBottomRightRadius: { xs: 20, sm: 32, md: 40 },
                      ...(showBorder && {
                        border: '5px solid',
                        borderColor: 'grey.200',
                        borderBottom: 'none',
                        borderRight: 'none'
                      })
                    }}
                  />
                </Box>
              </GraphicsCard>
            </motion.div>
          )}
          <Grid container spacing={1.5}>
            {features.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: item.animationDelay
                  }}
                >
                  <IconCard
                    icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                    title={item.title}
                    content={item.content}
                    contentCard
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}
