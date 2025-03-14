// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Hero = dynamic(() => import('@/views/sections/Hero'));

/***************************  METADATA - HERO  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.hero, openGraph: { ...SEO_CONTENT.hero, url: PAGE_PATH.hero } };

/***************************  PAGE - HERO  ***************************/

export default function HeroPage() {
  return <Hero />;
}
