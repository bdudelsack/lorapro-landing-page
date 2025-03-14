// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const About = dynamic(() => import('@/views/sections/About'));

/***************************  METADATA - ABOUT  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.about, openGraph: { ...SEO_CONTENT.about, url: PAGE_PATH.about } };

/***************************  PAGE - ABOUT  ***************************/

export default function AboutPage() {
  return <About />;
}
