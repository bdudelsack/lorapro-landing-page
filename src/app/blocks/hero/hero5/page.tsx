// @project
import { Hero5 } from '@/blocks/hero';

/***************************  HERO 5 - DATA  ***************************/

const data = {
  chip: {
    label: 'New Beta Version is Release ',
    link: { children: 'explore now', href: '#' }
  },
  headLine: 'Smooth CRM Control, Business Expansion Simplified',
  captionLine: 'Experience peak efficiency with our CRM solution, revolutionizing productivity and success.',
  image: { light: '/assets/images/graphics/ai/graphics10-light.svg', dark: '/assets/images/graphics/ai/graphics10-dark.svg' },
  primaryBtn: { children: 'Get Started - It’s Free Now' },
  listData: [
    { icon: 'custom-ai', title: 'AI', description: 'Power of AI' },
    { icon: 'custom-interface', title: 'Dashboard', description: 'Faster Sales' },
    { icon: 'custom-notes', title: 'Documents', description: 'Faster Sales' },
    { icon: 'custom-arrow', title: 'Tracker', description: 'Faster Sales' },
    { icon: 'custom-data', title: 'Form', description: 'Faster Sales' }
  ]
};

/***************************  BLOCK - HERO 5  ***************************/

export default function BlockHero5() {
  return <Hero5 {...data} />;
}
