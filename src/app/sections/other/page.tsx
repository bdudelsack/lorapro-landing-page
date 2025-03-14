// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Other = dynamic(() => import('@/views/sections/Other'));

/***************************  METADATA - OTHER  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.other, openGraph: { ...SEO_CONTENT.other, url: PAGE_PATH.other } };

/***************************  PAGE - OTHER  ***************************/

export default function OtherPage() {
  return <Other />;
}
