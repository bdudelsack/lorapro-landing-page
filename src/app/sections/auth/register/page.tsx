// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Register = dynamic(() => import('@/views/sections/Register'));

/***************************  METADATA - REGISTER  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.register, openGraph: { ...SEO_CONTENT.register, url: PAGE_PATH.register } };

/***************************  PAGE - REGISTER  ***************************/

export default function RegisterPage() {
  return <Register />;
}
