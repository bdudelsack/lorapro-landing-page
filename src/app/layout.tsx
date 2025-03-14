// @next
import { Metadata } from 'next';
import Script from 'next/script';

// @style
import './globals.css';

// @mui
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

// @third-party
import { SpeedInsights } from '@vercel/speed-insights/next';

// @project
import ProviderWrapper from './ProviderWrapper';
import { mainMetadata } from '@/metadata';

// @types
import { ChildrenProps } from '@/types/root';

const gaId = process.env.NEXT_PUBLIC_ANALYTICS_ID || '';

/***************************  METADATA - MAIN  ***************************/

// export const viewport: Viewport = {
//   userScalable: false
// };

export const metadata: Metadata = { ...mainMetadata };

/***************************  LAYOUT - MAIN  ***************************/

// Root layout component that wraps the entire application
export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect and DNS Prefetch */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ProviderWrapper>{children}</ProviderWrapper>
        </AppRouterCacheProvider>
        {gaId && <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />}
        <SpeedInsights />
      </body>
    </html>
  );
}
