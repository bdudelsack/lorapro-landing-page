// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';

// @project
import { ProfileCard1 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import Typeset from '@/components/Typeset';

// @types
import { TeamProps } from '@/types/team';

/***************************  TEAM - 1  ***************************/

export default function Team1({ heading, caption, members }: TeamProps) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {members.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
              <ProfileCard1 {...item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}
