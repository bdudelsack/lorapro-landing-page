// @project
import { Process3 } from '@/blocks/process';

/***************************  PROCESS 3 - DATA  ***************************/

const data = {
  heading: 'Made to fit your workflow',
  caption: 'With advanced analytics and reporting, you can track customer behavior, sales trends',
  image: { light: '/assets/images/graphics/ai/desktop1-light.svg', dark: '/assets/images/graphics/ai/desktop1-dark.svg' },
  defaultExpanded: 'panel1',
  cards: [
    {
      title: 'Data Gathering',
      description: 'Collect relevant customer information efficiently.',
      icon: 'custom-folder',
      list: [
        {
          primary: `Leverage the CRM's reporting and analytics tools to gain insights.`
        },
        {
          primary: 'Identify opportunities, analyze performance, and make data-driven decisions.'
        },
        {
          primary: 'Take action based on the data to enhance relationships, sales, and business success.'
        }
      ]
    },
    {
      title: 'Insight and Action',
      description: 'Derive insights from data and implement strategic actions.',
      icon: 'custom-arrow',
      list: [
        {
          primary: `Analyze customer data to identify key trends and opportunities.`
        },
        {
          primary: 'Generate detailed reports that highlight performance metrics and areas for improvement.'
        },
        {
          primary: 'Develop and implement strategies based on data-driven insights to drive growth.'
        }
      ]
    },
    {
      title: 'User Engagement',
      description: 'Enhance customer interactions for lasting relationships.',
      icon: 'custom-wrap-card',
      moreLink: { children: 'more...', href: '#', sx: { textAlign: 'right' } },
      list: [
        {
          primary: `Create personalized experiences that resonate with your customers.`
        },
        {
          primary: 'Leverage customer feedback to continuously improve engagement strategies.'
        },
        {
          primary: 'Utilize CRM tools to manage customer interactions and track engagement levels.'
        },
        {
          primary: 'Implement loyalty programs and rewards to foster long-term relationships.'
        }
      ]
    }
  ]
};

/***************************  BLOCK - PROCESS 3  ***************************/

export default function BlockProcess3() {
  return <Process3 {...data} />;
}
