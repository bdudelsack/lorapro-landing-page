// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { GraphicsCard } from '@/components/cards';
import { ListProps } from '@/types/cta';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
  list: ListProps[];
  image: ImageCommonProps;
}

/***************************  CALL TO ACTION - 11  ***************************/

export default function Cta11({ heading, caption, primaryBtn, list, secondaryBtn, image }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <GraphicsCard sx={{ height: 1 }}>
            <Box sx={{ height: 1, p: { xs: 3, sm: 4, md: 5 } }}>
              <GraphicsImage
                image={image}
                sx={{
                  width: 1,
                  height: { xs: 178, sm: 1 },
                  backgroundSize: 'contain',
                  backgroundPositionY: 'center',
                  backgroundPositionX: 'center'
                }}
              />
            </Box>
          </GraphicsCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <GraphicsCard>
            <Stack sx={{ alignItems: 'flex-start', gap: { xs: 3, sm: 4 }, padding: { xs: 2, md: 5 } }}>
              <Typeset
                {...{
                  heading,
                  caption,
                  captionProps: { sx: { maxWidth: 510 } },
                  stackProps: { sx: { gap: 1 } },
                  headingProps: { sx: { maxWidth: { xs: 265, sm: 560 } } }
                }}
              />
              <Grid container>
                {list &&
                  list.map((item, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6 }}>
                      <Stack
                        direction="row"
                        sx={{
                          gap: { xs: 0.5, md: 1 },
                          alignItems: 'center',
                          py: { xs: 0.5, md: 0.75 },
                          '& svg.tabler-rosette-discount-check': { width: { xs: 16, md: 24 }, height: { xs: 16, md: 24 } }
                        }}
                      >
                        <SvgIcon name="tabler-rosette-discount-check" stroke={1} color="text.secondary" />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.primary}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
              </Grid>
            </Stack>
            <GraphicsCard sx={{ bgcolor: 'grey.200' }}>
              <Stack direction="row" sx={{ gap: { xs: 1.5, md: 3 }, p: { xs: 2, md: 4 } }}>
                <Button fullWidth color="primary" size="large" variant="outlined" {...secondaryBtn} />
                <Button fullWidth color="primary" size="large" variant="contained" {...primaryBtn} />
              </Stack>
            </GraphicsCard>
          </GraphicsCard>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
