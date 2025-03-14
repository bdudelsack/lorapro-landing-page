// @project
import { Process2 } from '@/blocks/process';

/***************************  PROCESS 2 - DATA  ***************************/

const data = {
  heading: 'Made to fit your workflow',
  caption: 'With advanced analytics and reporting, you can track customer behavior, sales trends',
  bgImage: '/assets/images/graphics/ai/background2.svg',
  cards: [
    {
      title: 'Data Gathering',
      description: 'Collect relevant customer information efficiently.',
      icon: 'custom-folder'
    },
    {
      title: 'Insight and Action',
      description: 'Derive insights from data and implement strategic actions.',
      icon: 'custom-arrow'
    },
    {
      title: 'User Engagement',
      description: 'Enhance customer interactions for lasting relationships.',
      icon: 'custom-wrap-card'
    }
  ]
};

/***************************  BLOCK - PROCESS 2  ***************************/

export default function BlockProcess2() {
  return <Process2 {...data} />;
}
