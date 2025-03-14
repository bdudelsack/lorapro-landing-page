// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Pricing = dynamic(() => import('@/views/landings/default/pricing'));

/***************************  METADATA - PRICING  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.pricingPage };

/***************************  PAGE - PRICING  ***************************/

export default function PricingPage() {
  return <Pricing />;
}
