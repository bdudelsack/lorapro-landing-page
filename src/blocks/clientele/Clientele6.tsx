// @mui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @tpyes
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  title?: string;
  clienteleList: ClienteleListProps[];
}

/***************************  CLIENTELE - 6  ***************************/

export default function Clientele6({ title, clienteleList }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 2, md: 2.5 }}>
        <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
          {title && (
            <Typography variant="h3" sx={{ color: 'text.secondary' }}>
              {title}
            </Typography>
          )}
        </Grid>
        <Grid container spacing={0} size={{ xs: 12, sm: 8, md: 9.5 }}>
          {clienteleList.map((item, index) => (
            <Grid key={index} size={{ xs: 4, md: 3 }}>
              <Box
                sx={{
                  p: { xs: 0.5, md: 0.75 },
                  '& svg': { opacity: 0.4, transition: ' all 0.5s ease-in-out' },
                  '&:hover svg': { opacity: 1, transition: ' all 0.5s ease-in-out' }
                }}
              >
                <Chip
                  label={<GraphicsImage {...item} />}
                  sx={{
                    bgcolor: 'grey.100',
                    height: { xs: 40, sm: 46, md: 60 },
                    borderRadius: 2,
                    width: 1,
                    '& .MuiChip-label': { p: 0 }
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
