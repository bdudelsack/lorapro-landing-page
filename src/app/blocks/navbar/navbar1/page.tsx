// @project
import { Other2 } from '@/blocks/other';
import { Navbar1 } from '@/blocks/navbar';
import { NavbarContent1 } from '@/blocks/navbar/navbar-content';
import { MegaMenuType } from '@/enum';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR 1 - DATA  ***************************/

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
        type: MegaMenuType.MEGAMENU1,
        toggleBtn: { children: 'Resource', sx: { color: 'text.primary', py: 1.5 } },
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
            icon: 'custom-wrap-card',
            content: 'Learn about payment options'
          }
        ],
        footerData: {
          title: 'Recent Posts',
          link: { children: 'See All' },
          list: [
            {
              title: 'Mar 5, 2024',
              content: 'Boost your conversion rate'
            },
            {
              title: 'Mar 18, 2024',
              content: 'Understanding the basics of web development'
            },
            {
              title: 'Mar 26, 2024',
              content: 'Exploring new trends in technology'
            }
          ]
        }
      }
    },
    { id: 'help', title: 'Help' }
  ]
};

/***************************  BLOCK - NAVBAR 1  ***************************/

export default function BlockNavbar1() {
  return (
    <>
      <Navbar1>
        <NavbarContent1 {...navbar} />
      </Navbar1>
      <Other2 />
    </>
  );
}
