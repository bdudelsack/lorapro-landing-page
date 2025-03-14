// @next
import NextLink from 'next/link';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  title?: string;
  exploreBtn?: ButtonProps;
  clienteleList: ClienteleListProps[];
}

/***************************  CLIENTELE - 7  ***************************/

export default function Clientele7({ title, clienteleList, exploreBtn }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <Stack sx={{ gap: 1.5, alignItems: 'center' }}>
          {title && (
            <Typography variant="h3" align="center" sx={{ color: 'text.secondary', maxWidth: { xs: 260, sm: 360 } }}>
              {title}
            </Typography>
          )}
          {exploreBtn && (
            <Button
              sx={{ '& svg.tabler-arrow-up-left': { transform: 'rotate(90deg)' } }}
              startIcon={<SvgIcon name="tabler-arrow-up-left" size={18} />}
              {...(exploreBtn.href && { component: NextLink })}
              {...exploreBtn}
            />
          )}
        </Stack>
        <Grid container spacing={1.5} sx={{ justifyContent: 'center' }}>
          {clienteleList.map((item, index) => (
            <Grid key={index} size={{ xs: 4, sm: 2.3 }}>
              <Stack
                sx={{
                  height: 1,
                  py: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '& svg': {
                    opacity: 0.4,
                    transition: 'all 0.5s ease-in-out',
                    '&:hover': { opacity: 1, transition: 'all 0.5s ease-in-out' }
                  }
                }}
              >
                <GraphicsImage {...item} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}
