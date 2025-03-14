'use client';

import { useEffect, useState } from 'react';

// @project
import Loader from '@/components/Loader';
import RTLLayout from '@/components/RTLLayout';
import ThemeProvider from '@/components/ThemeProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';

// @types
import { ChildrenProps } from '@/types/root';

/***************************  COMMON - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }: ChildrenProps) {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  /**
   * A loader is needed here to initialize the configuration from localStorage and set the default theme.
   * Without a loader,
   * the theme palette and fontFamily don't match, resulting in an error like:
   * "Warning: Prop className did not match".
   */

  return (
    <ConfigProvider>
      <ThemeProvider>
        <RTLLayout>
          <main>{loader ? <Loader /> : children}</main>
        </RTLLayout>
      </ThemeProvider>
    </ConfigProvider>
  );
}
