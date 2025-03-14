// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const Login = dynamic(() => import('@/views/sections/Login'));

/***************************  METADATA - LOGIN  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.login, openGraph: { ...SEO_CONTENT.login, url: PAGE_PATH.login } };

/***************************  PAGE - LOGIN  ***************************/

export default function LoginPage() {
  return <Login />;
}
