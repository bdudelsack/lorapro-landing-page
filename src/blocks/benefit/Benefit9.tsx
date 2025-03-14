// @mui
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps } from '@/types/benefit';

/***************************  BENEFIT - 9  ***************************/

export default function Benefit9({ heading, caption, blockDetail, exploreBtn }: BenefitProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard>
        <Stack sx={{ px: { xs: 2, sm: 5, md: 7 }, py: { xs: 2, sm: 5, md: 5 }, gap: { xs: 2, sm: 3, md: 4 } }}>
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
          <Grid container columnSpacing={{ xs: 4 }} rowSpacing={{ xs: 3, sm: 3.5, md: 4 }}>
            {blockDetail.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6 }}>
                <Stack key={index} direction="row" sx={{ height: 1, gap: { xs: 2, md: 3 }, alignItems: 'center', pb: { xs: 2, md: 3 } }}>
                  <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                    <Typography component="div" variant="h1">
                      {item.counter}
                    </Typography>
                    <Typography component="div" variant="h3" sx={{ color: 'text.secondary', mb: { xs: 0.25, md: 0.625 } }}>
                      {item.defaultUnit}
                    </Typography>
                  </Stack>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                    {item.caption}
                  </Typography>
                </Stack>
                <Divider />
              </Grid>
            ))}
          </Grid>
          <Stack sx={{ alignItems: 'center' }}>
            <Button color="primary" size="large" variant="contained" {...exploreBtn} />
          </Stack>
        </Stack>
      </GraphicsCard>
    </ContainerWrapper>
  );
}
