// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import { SECTION_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

export const navbar = {
  customization: true,
  secondaryBtn: { children: 'Try Free Version', href: FREEBIES_URL, target: '_blank', rel: 'noopener noreferrer' },
  primaryBtn: { children: 'Buy Now', href: BUY_NOW_URL, target: '_blank', rel: 'noopener noreferrer' },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    landingMegamenu,
    { id: 'components', title: 'Blocks', link: SECTION_PATH },
    pagesMegamenu,
    { id: 'docs', title: 'Docs', link: DOCS_URL, target: '_blank', rel: 'noopener noreferrer', icon: 'tabler-pin-invoke' }
  ]
};
