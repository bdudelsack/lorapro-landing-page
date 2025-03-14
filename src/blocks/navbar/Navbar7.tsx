'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 108,
    paddingLeft: 0,
    paddingRight: 0
  },
  width: '100%',
  justifyContent: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 90
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

/***************************  NAVBAR - 7  ***************************/

export default function Navbar7({ children }: ChildrenProps) {
  return (
    <ContainerWrapper sx={{ px: { sm: 2 } }}>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>
          <Box
            sx={{
              width: 1,
              px: { xs: 1.5, sm: 2, md: 3 },
              py: { xs: 0.5, sm: 1.5, md: 2 },
              bgcolor: 'grey.100',
              borderRadius: { xs: 3, sm: 4, md: 6 }
            }}
          >
            {children}
          </Box>
        </StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}
