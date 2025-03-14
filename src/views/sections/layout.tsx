// @mui
import Box from '@mui/material/Box';

// @project
import { navbar } from '../landings/default/data';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';

// @types
import { ChildrenProps } from '@/types/root';

/***************************  LANDING - SECTIONS  ***************************/

export default function SectionsLayout({ children }: ChildrenProps) {
  return (
    <>
      <Box sx={{ bgcolor: 'grey.100' }}>
        <Navbar10>
          <NavbarContent10 {...navbar} />
        </Navbar10>
      </Box>
      {children}
    </>
  );
}
