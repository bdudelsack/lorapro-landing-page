// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const ForgotPassword = dynamic(() => import('@/views/sections/ForgotPassword'));

/***************************  METADATA - FORGOT PASSWORD  ***************************/

export const metadata: Metadata = {
  ...SEO_CONTENT.forgotPassword,
  openGraph: { ...SEO_CONTENT.forgotPassword, url: PAGE_PATH.forgotPassword }
};

/***************************  PAGE - FORGOT PASSWORD  ***************************/

export default function ForgotPasswordPage() {
  return <ForgotPassword />;
}
