// @next
import dynamic from 'next/dynamic';

// @types
import { ChildrenProps } from '@/types/root';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const ThemeAI = dynamic(() => import('@/views/landings/ai/theme'));
const MainLayout = dynamic(() => import('@/views/landings/default/layout'));

/***************************  LAYOUT - AI  ***************************/

export default function AI({ children }: ChildrenProps) {
  return (
    <ThemeAI>
      <MainLayout>
        <>
          {children}

          {/* scroll to top section */}
          <ScrollFab />
        </>
      </MainLayout>
    </ThemeAI>
  );
}
