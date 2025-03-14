// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Benefit = dynamic(() => import('@/views/sections/Benefit'));

/***************************  METADATA - BENEFIT  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.benefit, openGraph: { ...SEO_CONTENT.benefit, url: PAGE_PATH.benefit } };

/***************************  PAGE - BENEFIT  ***************************/

export default function BenefitPage() {
  return <Benefit />;
}
