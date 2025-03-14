// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps, BlockProps } from '@/types/benefit';

/***************************  BENEFIT - COUNTER CARD  ***************************/

function CounterCard({ counter, caption, defaultUnit, bgImage }: BlockProps & { bgImage?: string }) {
  return (
    <GraphicsCard {...(bgImage && { overLay: true, bgImage })} sx={{ p: { xs: 3, md: 4 } }}>
      <Stack sx={{ gap: 1, justifyContent: 'center' }}>
        <Stack direction="row">
          <Typography component="div" variant="h1">
            {counter}
          </Typography>
          {defaultUnit && (
            <Typography component="div" variant="h1">
              {defaultUnit}
            </Typography>
          )}
        </Stack>
        <Typography sx={{ color: 'text.secondary' }}>{caption}</Typography>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  BENEFIT - 3  ***************************/

export default function Benefit3({ bgImage, heading, caption, exploreBtn, blockDetail }: BenefitProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 6.5, md: 7.5 }}>
          <GraphicsCard {...(bgImage && { overLay: true, bgImage })} sx={{ height: 1, p: { xs: 3, sm: 4, md: 5 } }}>
            <Stack sx={{ gap: 4, alignItems: 'flex-start', justifyContent: 'space-between', height: 1 }}>
              <Typeset {...{ heading, caption, stackProps: { sx: { gap: { xs: 1, md: 1.5 } } } }} />
              {exploreBtn && <Button color="primary" size="large" variant="contained" {...exploreBtn} />}
            </Stack>
          </GraphicsCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 5.5, md: 4.5 }}>
          <Stack sx={{ gap: 1.5 }}>
            <CounterCard {...blockDetail[0]} />
            <CounterCard {...blockDetail[1]} />
          </Stack>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
