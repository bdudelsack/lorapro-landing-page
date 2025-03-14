// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const MegaMenu = dynamic(() => import('@/views/sections/MegaMenu'));

/***************************  METADATA - MEGA MENU  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.megaMenu, openGraph: { ...SEO_CONTENT.megaMenu, url: PAGE_PATH.megaMenu } };

/***************************  PAGE - MEGA MENU  ***************************/

export default function MegaMenuPage() {
  return <MegaMenu />;
}
