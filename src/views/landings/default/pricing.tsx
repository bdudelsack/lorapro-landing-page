'use client';

import { useEffect, useState } from 'react';

// @third-party
import axios from 'axios';

// @project
import { Pricing9 } from '@/blocks/pricing';
import LazySection from '@/components/LazySection';
import SectionHero from '@/components/SectionHero';

// @data
import { pricing, clientele, cta4, cta5, benefit, testimonial, feature, faq } from './data';

export const removeKeyData = ({ heading, caption, ...rest }: typeof pricing) => rest;

/***************************  PAGE - PRICING  ***************************/

export default function Pricing() {
  // removed heading and caption and setup state with axios price
  const [newPricing, setNewPricing] = useState(removeKeyData(pricing));

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        await axios.get('https://raw.githubusercontent.com/phoenixcoded/phoenixcoded.github.io/main/saas-able-pricing.json').then((res) => {
          const data = res.data;
          setNewPricing({
            ...newPricing,
            plans: newPricing.plans.map((item, index) => ({
              ...item,
              price: data[index].price,
              offerPrice: data[index].offerPrice
            }))
          });
        });
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      }
    };

    fetchPricingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SectionHero heading="Discover Our Pricing Plans" search={false} offer />
      <Pricing9 {...newPricing} />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/clientele').then((module) => ({ default: module.Clientele3 })), props: clientele },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta4 })), props: cta4 },
          { importFunc: () => import('@/blocks/benefit').then((module) => ({ default: module.Benefit5 })), props: benefit }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature22 })), props: feature },
          { importFunc: () => import('@/blocks/testimonial').then((module) => ({ default: module.Testimonial5 })), props: testimonial },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta5 })), props: cta5 },
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
        ]}
        offset="200px"
      />
    </>
  );
}
