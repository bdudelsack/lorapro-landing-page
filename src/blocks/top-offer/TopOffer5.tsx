'use client';

import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BgImageProps } from '@/types/graphics';
import { OfferProps } from '@/types/offer';

interface Props extends OfferProps {
  bgImage: BgImageProps;
}

/***************************  TOP OFFER - 5  ***************************/

export default function TopOffer5({ heading, caption, bgImage, primaryBtn, icon, handleClick }: Props) {
  const theme = useTheme();

  const [open, setOpen] = useState(true);
  const size = { xs: 40, sm: 60 };

  const joinUS = (
    <OutlinedInput
      placeholder="example@gmail.com"
      endAdornment={<Button color="primary" size="small" variant="contained" sx={{ px: 4 }} {...primaryBtn} />}
      slotProps={{ input: { 'aria-label': 'Email address' } }}
      sx={{
        ...theme.typography.caption2,
        color: 'secondary.main',
        maxWidth: { xs: 1, sm: 280 },
        width: 1,
        p: 0.5,
        my: { xs: 2, sm: 0 },
        whiteSpace: 'nowrap',
        '& .MuiOutlinedInput-input': {
          p: '6px 20px'
        },
        '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25, borderColor: 'grey.700' }
      }}
    />
  );

  return (
    <Box sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard bgImage={bgImage} overLay sx={{ borderRadius: 'none', mx: 2 }}>
        <ContainerWrapper>
          <Collapse in={open}>
            <Box sx={{ py: { xs: 2, sm: 3, md: 5 } }}>
              <Alert
                icon={
                  <Avatar sx={{ bgcolor: 'primary.main', width: size, height: size }}>
                    <SvgIcon color={theme.palette.primary.lighter} {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
                  </Avatar>
                }
                sx={{
                  p: 0,
                  color: 'text.primary',
                  bgcolor: 'transparent',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  '& .MuiAlert-icon	': { py: 0.25 },
                  '& .MuiAlert-action': { pt: 0 },
                  '& .MuiAlert-message': { py: 0, width: 1 },
                  width: 1
                }}
                action={
                  <IconButton
                    rel="noopener noreferrer"
                    aria-label="close"
                    size="small"
                    onClick={() => (handleClick ? handleClick : setOpen(false))}
                    sx={{ width: 24, height: 24, p: { xs: 1, sm: 2 }, borderRadius: '50%' }}
                  >
                    <SvgIcon name="tabler-x" />
                  </IconButton>
                }
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2.5, width: 1 }}
                >
                  <Typeset
                    {...{
                      heading,
                      caption,
                      stackProps: { sx: { gap: 1 } },
                      headingProps: { variant: 'h4' },
                      captionProps: { variant: 'body1' }
                    }}
                  />
                  <Box sx={{ display: { xs: 'none', sm: 'contents' } }}>{joinUS}</Box>
                </Stack>
              </Alert>
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>{joinUS}</Box>
          </Collapse>
        </ContainerWrapper>
      </GraphicsCard>
    </Box>
  );
}
