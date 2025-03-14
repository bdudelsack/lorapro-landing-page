// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Process = dynamic(() => import('@/views/sections/Process'));

/***************************  METADATA - PROCESS  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.process, openGraph: { ...SEO_CONTENT.process, url: PAGE_PATH.process } };

/***************************  PAGE - PROCESS  ***************************/

export default function ProcessPage() {
  return <Process />;
}
