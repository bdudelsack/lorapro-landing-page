'use client';

// @mui
import { SxProps } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import GetImagePath from '@/utils/GetImagePath';

// @types
import { AvatarImageProps } from '@/types/graphics';

interface Props {
  avatar: AvatarImageProps;
  name: string;
  role: string;
  background?: string | boolean;
  sx?: SxProps;
}

/***************************  CARD - PROFILE CARD 2  ***************************/

export default function ProfileCard2({ avatar, name, role, background, sx }: Props) {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { xs: 1, sm: 1.5 },
        ...(background && { p: 1, pr: 3, borderRadius: 10, bgcolor: typeof background === 'boolean' ? 'grey.200' : background }),
        ...sx
      }}
    >
      <Avatar src={GetImagePath(avatar)} sx={{ width: 55, height: 55 }} alt="Avatar" imgProps={{ loading: 'lazy' }} />
      <Stack sx={{ gap: 0.5, justifyContent: 'center' }}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {role}
        </Typography>
      </Stack>
    </Stack>
  );
}
