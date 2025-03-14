'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { ThemeMode, ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Pattern1 from '@/images/graphics/Pattern1';
import Pattern2 from '@/images/graphics/Pattern2';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface BlockProps2 {
  description?: string;
}

interface BlockProps {
  image?: ImageCommonProps;
  actionBtn?: ButtonProps;
  title?: string;
  description?: string;
}

interface Props {
  heading: string;
  caption?: string;
  blockData1: BlockProps;
  blockData2: BlockProps;
  blockData3: BlockProps2;
  blockData4: BlockProps2;
}

/***************************  FEATURE - BLOCK CONTENT  ***************************/

function BoxContent({ title, description }: { title?: string; description?: string }) {
  return (
    (title || description) && (
      <Stack sx={{ gap: { xs: 2, md: 3 } }}>
        <Stack sx={{ gap: 1 }}>
          {title && <Typography variant="h4">{title}</Typography>}
          {description && <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>}
        </Stack>
      </Stack>
    )
  );
}
/***************************  FEATURE - 19  ***************************/

export default function Feature19({ heading, caption, blockData1, blockData2, blockData3, blockData4 }: Props): JSX.Element {
  const theme = useTheme();

  const gc = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(64.19% 3.3% at 56.9% 73.35%, ${alpha(gc, 0)} 0%, ${gc} 100%)`
      : `radial-gradient(64.19% 99.7% at 56.9% 73.35%, ${alpha(gc, 0)} 0%, ${gc} 100%)`;

  const boxPadding = { xs: 3, md: 4 };
  const overlaySX = { top: 0, right: 0, position: 'absolute', width: 1, height: 1 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset
          {...{
            heading,
            caption,
            captionProps: { sx: { maxWidth: { sm: 390, md: 500 }, mx: 'auto' } },
            stackProps: { sx: { textAlign: 'center' } }
          }}
        />
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 5 }}>
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ height: 1, justifyContent: 'space-between' }}>
                <Stack sx={{ p: boxPadding, gap: 5, alignItems: 'flex-start' }}>
                  <BoxContent title={blockData1.title} description={blockData1.description} />
                  {blockData1.actionBtn && <Button variant="outlined" color="primary" {...blockData1.actionBtn} />}
                </Stack>
                {blockData1.image && (
                  <GraphicsCard sx={{ position: 'relative' }}>
                    <GraphicsImage
                      image={blockData1.image}
                      sx={{
                        height: { xs: 192, sm: 273 },
                        backgroundPositionY: { xs: 'top', sm: 50, lg: 'top' },
                        backgroundPositionX: { xs: 30, sm: 20, md: 60 }
                      }}
                    />
                    <Box sx={{ ...overlaySX, background: gradient }} />
                  </GraphicsCard>
                )}
              </Stack>
            </GraphicsCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 7 }} container spacing={1.5} sx={{ height: 1 }}>
            <Grid size={12}>
              <GraphicsCard sx={{ height: 1, position: 'relative', minHeight: 267 }}>
                <Box sx={{ height: 1 }}>
                  <Stack
                    sx={{
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 5,
                      position: 'relative',
                      zIndex: 1,
                      p: boxPadding,
                      height: 1
                    }}
                  >
                    <BoxContent title={blockData2.title} description={blockData2.description} />
                    {blockData2.actionBtn && <Button variant="outlined" color="primary" {...blockData2.actionBtn} />}
                  </Stack>
                  {blockData2.image && (
                    <GraphicsCard sx={{ overflow: 'visible' }}>
                      <GraphicsImage
                        image={blockData2.image}
                        sx={{
                          width: 1,
                          height: { xs: 210, sm: 226 },
                          backgroundPosition: 'right',
                          backgroundPositionY: 'top',
                          backgroundSize: 'contain',
                          position: 'absolute',
                          right: { xs: -70, sm: '-8%' },
                          bottom: { xs: -40, sm: -53 }
                        }}
                      />
                      <Box
                        sx={{
                          ...overlaySX,
                          background: `radial-gradient(56.13% 56.13% at 50% 50%, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.6)} 100%)`
                        }}
                      />
                    </GraphicsCard>
                  )}
                </Box>
              </GraphicsCard>
            </Grid>
            <Grid size={6}>
              <GraphicsCard sx={{ height: 1 }}>
                <Stack sx={{ justifyContent: 'space-between', gap: 3, p: { xs: 2, md: 4 }, textAlign: 'center', height: 1 }}>
                  {blockData3.description && <Typography sx={{ color: 'text.secondary' }}>{blockData3.description}</Typography>}
                  <Box sx={{ width: { xs: 135, sm: 150, md: 200, lg: 260 }, height: 'auto', mx: 'auto' }}>
                    <Pattern1 fill={alpha(theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 50 : 200], 0.4)} />
                  </Box>
                </Stack>
              </GraphicsCard>
            </Grid>
            <Grid size={6}>
              <GraphicsCard sx={{ height: 1 }}>
                <Stack sx={{ justifyContent: 'space-between', gap: 3, p: { xs: 2, md: 4 }, textAlign: 'center', height: 1 }}>
                  {blockData4.description && <Typography sx={{ color: 'text.secondary' }}>{blockData4.description}</Typography>}
                  <Box sx={{ width: { xs: 100, sm: 110, md: 160 }, height: 'auto', mx: 'auto' }}>
                    <Pattern2 fill={alpha(theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 50 : 200], 0.4)} />
                  </Box>
                </Stack>
              </GraphicsCard>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}
