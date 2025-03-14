// @project
import { Team5 } from '@/blocks/team';

/***************************  TEAM 5 - DATA  ***************************/

const data = {
  heading: 'Dedicated to maintaining high standards in our work',
  caption:
    'United by our relentless focus, swift execution, and love for software craftsmanship, we are passionate makers who meticulously ensure the quality of our work in every detail.',
  image: '/assets/images/team/team-member-1.png',
  description: 'Linear co-founders Jori Lallo, Karri Saarinen, and Tuomas Artman.',
  actionBtn: { children: 'We’re Hiring ' },
  members: [
    {
      name: 'Tricia Yundt',
      role: 'Chief Executive Officer',
      avatar: '/assets/images/user/avatar1.png'
    },
    {
      name: 'Henrietta Bayer',
      role: 'Chief Technology Officer',
      avatar: '/assets/images/user/avatar2.png'
    },
    {
      name: 'Elmer Heller',
      role: 'Chief Financial Officer',
      avatar: '/assets/images/user/avatar3.png'
    },
    {
      name: 'Melissa Altenwerth',
      role: 'Chief Executive Officer',
      avatar: '/assets/images/user/avatar4.png'
    },
    {
      name: 'Josefina Murray',
      role: 'Product Managers',
      avatar: '/assets/images/user/avatar5.png'
    },
    {
      name: 'Dave Mayer',
      role: 'Marketing Managers',
      avatar: '/assets/images/user/avatar6.png'
    },
    {
      name: 'Marlene Stehr',
      role: 'Customer Success Managers',
      avatar: '/assets/images/user/avatar7.png'
    },
    {
      name: 'Benny Bailey',
      role: 'IT Manager',
      avatar: '/assets/images/user/avatar8.png'
    },
    {
      name: 'Tricia Yundt',
      role: 'Chief Executive Officer',
      avatar: '/assets/images/user/avatar9.png'
    },
    {
      name: 'Henrietta Bayer',
      role: 'Chief Technology Officer',
      avatar: '/assets/images/user/avatar10.png'
    },
    {
      name: 'Elmer Heller',
      role: 'Chief Financial Office',
      avatar: '/assets/images/user/avatar11.png'
    },
    {
      name: 'Melissa Altenwerth',
      role: 'Chief Executive Officer',
      avatar: '/assets/images/user/avatar12.png'
    },
    {
      name: 'Josefina Murray',
      role: 'Product Managers',
      avatar: '/assets/images/user/avatar13.png'
    },
    {
      name: 'Dave Mayer',
      role: 'Marketing Managers',
      avatar: '/assets/images/user/avatar14.png'
    },
    {
      name: 'Marlene Stehr',
      role: 'Customer Success Managers',
      avatar: '/assets/images/user/avatar4.png'
    },
    {
      name: 'Benny Bailey',
      role: 'IT Manager',
      avatar: '/assets/images/user/avatar5.png'
    }
  ]
};

/***************************  BLOCK - TEAM 5  ***************************/

export default function BlockTeam5() {
  return <Team5 {...data} />;
}
