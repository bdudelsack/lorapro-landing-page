'use client';

import { ReactElement } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface ListDataProps {
  counter: string;
  caption: string;
  defaultUnit?: string;
}

interface Props {
  headLine: ReactElement;
  captionLine: string;
  primaryBtn?: ButtonProps;
  image: ImageCommonProps;
  listData: ListDataProps[];
}

/***************************  HERO - 8  ***************************/

export default function Hero8({ headLine, captionLine, primaryBtn, image, listData }: Props): JSX.Element {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const partitionInSmall = 2;
  const partitionInLarge = 4;

  const columns = downMD ? partitionInSmall : partitionInLarge;
  const block1ImagePadding = { sm: 5, md: 8 };

  const calculateElementsInLastRow = (dataArray: ListDataProps[], columns: number) => {
    const totalItems = dataArray.length;
    const elementsInLastRow = totalItems % columns || columns;
    return elementsInLastRow;
  };

  const calculateIndexOfFirstElementInLastRow = (dataArray: ListDataProps[], elementsInLastRow: number) => {
    const totalItems = dataArray.length;
    const indexOfFirstElementInLastRow = totalItems - elementsInLastRow;
    return indexOfFirstElementInLastRow;
  };

  const elementsInLastRow = calculateElementsInLastRow(listData, columns);
  const indexOfFirstElementInLastRow = calculateIndexOfFirstElementInLastRow(listData, elementsInLastRow);

  const calculateIndexOfLastElementOfEachRow = (dataArray: ListDataProps[], columns: number) => {
    const indices = [];
    const totalItems = dataArray.length;
    const rows = Math.ceil(totalItems / columns);

    for (let i = 1; i <= rows; i++) {
      const lastIndexInRow = i * columns - 1;
      indices.push(lastIndexInRow < totalItems ? lastIndexInRow : totalItems - 1);
    }

    return indices;
  };

  const indicesOfLastElements = calculateIndexOfLastElementOfEachRow(listData, columns);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ alignItems: 'center', mb: 3 }}>
        {headLine}
        <Typography variant="h6" align="center" sx={{ color: 'text.secondary', mt: { xs: 1.5, sm: 2, md: 3 }, maxWidth: 500 }}>
          {captionLine}
        </Typography>

        {primaryBtn && <Button color="primary" size="large" variant="contained" {...primaryBtn} sx={{ mt: { xs: 3, sm: 5 } }} />}
      </Stack>
      <Box sx={{ mb: { xs: -3, sm: -4 }, px: block1ImagePadding, height: { xs: 197, sm: 335, md: 520 } }}>
        <GraphicsImage
          sx={{
            height: '100%',
            backgroundPositionY: 'top',
            borderTopLeftRadius: { xs: 20 },
            borderTopRightRadius: { xs: 20 },
            border: '5px solid',
            borderColor: 'grey.100'
          }}
          image={image}
        />
      </Box>
      <GraphicsCard sx={{ py: { xs: 2, sm: 4, md: 5 }, px: { xs: 2, sm: 4, md: 0 } }}>
        <Grid container>
          {listData.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12 / partitionInSmall, md: 12 / partitionInLarge }}
              sx={{
                px: { xs: 2, md: 5 },
                py: { xs: 2, md: 0 },
                ...(index < indexOfFirstElementInLastRow && { borderBottom: `1px solid ${theme.palette.divider}` }),
                ...(!indicesOfLastElements.includes(index) && { borderRight: `1px solid ${theme.palette.divider}` })
              }}
            >
              <Stack sx={{ gap: { xs: 0.75, md: 1 }, alignItems: 'center' }}>
                <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                  <Typography component="div" variant="h1">
                    {item.counter}
                  </Typography>
                  {item.defaultUnit && (
                    <Typography component="div" variant="h2" sx={{ color: 'text.secondary', mb: { md: 0.25 } }}>
                      {item.defaultUnit}
                    </Typography>
                  )}
                </Stack>
                <Typography align="center" sx={{ color: 'text.secondary' }}>
                  {item.caption}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </GraphicsCard>
    </ContainerWrapper>
  );
}
