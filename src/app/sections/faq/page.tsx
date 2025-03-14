// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Faq = dynamic(() => import('@/views/sections/Faq'));

/***************************  METADATA - FAQ  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.faq, openGraph: { ...SEO_CONTENT.faq, url: PAGE_PATH.faq } };

/***************************  PAGE - FAQ  ***************************/

export default function FaqPage() {
  return <Faq />;
}
