'use client';

// @next
import { usePathname } from 'next/navigation';

// @mui
import { SxProps } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import GraphicsCard from '@/components/cards/GraphicsCard';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';

//@type
import { MenuItemsProps } from '@/types/mega-menu';

/***************************  PREVIEW CARD  ***************************/

export default function PreviewCard({ title, theme, image, status }: MenuItemsProps) {
  const pathname = usePathname();

  const cardStyle: SxProps = {
    bgcolor: theme && pathname.includes(theme) ? 'grey.100' : 'transparent',
    borderRadius: 3,
    padding: 1,
    '&:hover': { bgcolor: theme && pathname.includes(theme) ? 'grey.200' : 'grey.50', cursor: 'pointer' }
  };

  return (
    <GraphicsCard sx={cardStyle}>
      <Stack sx={{ gap: 1 }}>
        <GraphicsImage cardMediaProps={{ component: 'img' }} image={image!} sx={{ minHeight: { xs: 115, sm: 160 } }} />
        <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" sx={{ color: 'text.primary', mt: 0.25 }}>
            {title}
          </Typography>
          <Stack sx={{ justifyContent: 'center' }}>
            {!status ? (
              <SvgIcon name="tabler-arrow-up-right" color="text.primary" size={16} stroke={2} />
            ) : (
              <Chip
                label={
                  <Typography variant="caption" sx={{ color: 'primary.main' }}>
                    {status}
                  </Typography>
                }
                size="small"
                sx={{
                  bgcolor: 'primary.lighter',
                  '& .MuiChip-label': { px: 1.5, py: 0.5, minWidth: 90 }
                }}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}
