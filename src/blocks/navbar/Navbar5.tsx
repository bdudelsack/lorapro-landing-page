'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 92,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 72
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 5  ***************************/

export default function Navbar5({ children }: ChildrenProps) {
  return (
    <ContainerWrapper>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>{children}</StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}
