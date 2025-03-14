// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Faq = dynamic(() => import('@/views/landings/default/faq'));

/***************************  METADATA - FAQ  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.faqPage };

/***************************  PAGE - FAQ  ***************************/

export default function FaqPage() {
  return <Faq />;
}
