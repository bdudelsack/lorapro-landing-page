'use client';

// @next
import dynamic from 'next/dynamic';

// @types
import { ChildrenProps } from '@/types/root';

// @project
import useDataThemeMode from '@/hooks/useDataThemeMode';

const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const SectionsLayout = dynamic(() => import('@/views/sections/layout'));

/***************************  LAYOUT - SECTIONS  ***************************/

export default function Sections({ children }: ChildrenProps) {
  useDataThemeMode();

  return (
    <SectionsLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </SectionsLayout>
  );
}
