// @mui
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { Other2 } from '@/blocks/other';
import { Navbar8 } from '@/blocks/navbar';
import { NavbarContent8 } from '@/blocks/navbar/navbar-content';
import { MegaMenuType } from '@/enum';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR 8 - DATA  ***************************/

function FooterData() {
  return (
    <Stack sx={{ gap: 1 }}>
      <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5 }}>
        <Typography variant="subtitle1">Enterprise</Typography>
        <Chip
          label={
            <Typography variant="subtitle2" color="primary">
              New
            </Typography>
          }
          size="small"
          sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 } }}
        />
      </Stack>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Discover tailored solutions to elevate your business. Stay ahead with our latest updates and insights.
      </Typography>
    </Stack>
  );
}

const navbar: NavbarContentProps = {
  primaryBtn: { children: 'Get Started' },
  navItems: [
    { id: 'overview', title: 'Overview' },
    { id: 'products', title: 'Products' },
    { id: 'pricing', title: 'Pricing' },
    {
      id: 'resource',
      title: 'Resource',
      megaMenu: {
        type: MegaMenuType.MEGAMENU3,
        popperOffset: 25,
        toggleBtn: { children: 'Resource', size: 'small', sx: { color: 'text.primary', py: 1.5 } },
        menuItems: [
          {
            title: 'Help Center',
            icon: 'custom-help',
            content: 'Get of your question answered'
          },
          {
            title: 'Guides',
            icon: 'custom-book',
            content: 'Detailed step-by-step guides'
          },
          {
            title: 'Events',
            icon: 'custom-calander',
            content: 'Stay updated on upcoming events'
          },
          {
            title: 'Payments',
            icon: 'custom-card',
            content: 'Learn about payment options'
          },
          {
            title: 'Blog',
            icon: 'custom-notes',
            content: 'Explore our latest articles and insights'
          },
          {
            title: 'Data Security',
            icon: 'custom-data-switch',
            content: 'How we protect your data and privacy'
          }
        ],
        footerData: <FooterData />
      }
    },
    { id: 'help', title: 'Help' }
  ]
};

/***************************  BLOCK - NAVBAR 8  ***************************/

export default function BlockNavbar8() {
  return (
    <>
      <Navbar8>
        <NavbarContent8 {...navbar} />
      </Navbar8>
      <Other2 />
    </>
  );
}
