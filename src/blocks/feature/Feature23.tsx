// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
  heading2: string;
  caption2: string;
  primaryBtn?: ButtonProps;
  image?: ImageCommonProps;
  features: IconCardProps[];
}

/***************************  FEATURE - 23  ***************************/

export default function Feature23({ heading, caption, image, features, heading2, caption2, primaryBtn }: Props): JSX.Element {
  const iconProps = { type: IconType.STROKE };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Stack sx={{ gap: 1.5 }}>
          <Grid container spacing={1.5}>
            {features.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6 }}>
                <IconCard
                  icon={{
                    ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }),
                    color: 'grey.900',
                    stroke: 1
                  }}
                  title={item.title}
                  content={item.content}
                  contentCard
                />
              </Grid>
            ))}
            <Grid size={12}>
              <GraphicsCard>
                <Grid container>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                      <Stack sx={{ gap: { xs: 4, sm: 5, md: 7 }, alignItems: 'flex-start' }}>
                        <Stack sx={{ gap: { xs: 1, sm: 1.5 } }}>
                          <Typography variant="h4">{heading2}</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{caption2}</Typography>
                        </Stack>
                        <Button color="primary" size="small" variant="contained" sx={{ px: 2 }} {...primaryBtn} />
                      </Stack>
                    </Box>
                  </Grid>
                  {image && (
                    <Grid size={{ xs: 12, md: 7 }}>
                      <GraphicsCard sx={{ bgcolor: 'grey.200', height: { xs: 187, sm: 271, md: 1 } }}>
                        <GraphicsImage image={image} sx={{ height: 1 }} />
                      </GraphicsCard>
                    </Grid>
                  )}
                </Grid>
              </GraphicsCard>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}
