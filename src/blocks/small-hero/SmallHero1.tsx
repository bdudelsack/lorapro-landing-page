// @next
import NextLink from 'next/link';

// @mui
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { SmallHeroProps } from '@/types/small-hero';

/***************************  SMALL HERO - 1  ***************************/

export default function SmallHero1({ chip, headLine, captionLine }: SmallHeroProps) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard>
        <Box sx={{ p: { xs: 3, sm: 5, md: 8 } }}>
          <Stack sx={{ alignItems: 'center', gap: { xs: 1.5, md: 3 } }}>
            {chip && (
              <Chip
                label={
                  typeof chip.label === 'string' ? (
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {chip.label}
                      {chip.link && (
                        <Link
                          component={NextLink}
                          variant="caption"
                          color="primary.main"
                          {...chip.link}
                          underline="hover"
                          sx={{ '&:hover': { color: 'primary.dark' } }}
                        />
                      )}
                    </Typography>
                  ) : (
                    chip.label
                  )
                }
                sx={{ bgcolor: 'background.default' }}
              />
            )}
            {headLine}
            {captionLine && (
              <Typography variant="h6" align="center" sx={{ color: 'text.secondary', width: { xs: 320, sm: 350, md: 500 } }}>
                {captionLine}
              </Typography>
            )}
          </Stack>
        </Box>
      </GraphicsCard>
    </ContainerWrapper>
  );
}
