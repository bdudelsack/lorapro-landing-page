// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Integration = dynamic(() => import('@/views/sections/Integration'));

/***************************  METADATA - INTEGRATION  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.integration, openGraph: { ...SEO_CONTENT.integration, url: PAGE_PATH.integration } };

/***************************  PAGE - INTEGRATION  ***************************/

export default function IntegrationPage() {
  return <Integration />;
}
