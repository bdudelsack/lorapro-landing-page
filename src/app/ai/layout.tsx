// @next
import dynamic from 'next/dynamic';

// @types
import { ChildrenProps } from '@/types/root';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const AILayout = dynamic(() => import('@/views/landings/ai/layout'));

/***************************  LAYOUT - AI  ***************************/

export default function AI({ children }: ChildrenProps) {
  return (
    <AILayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </AILayout>
  );
}
