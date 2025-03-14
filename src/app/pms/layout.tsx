// @next
import dynamic from 'next/dynamic';

// @types
import { ChildrenProps } from '@/types/root';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const PMSLayout = dynamic(() => import('@/views/landings/pms/layout'));

/***************************  LAYOUT - PMS  ***************************/

export default function PMS({ children }: ChildrenProps) {
  return (
    <PMSLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </PMSLayout>
  );
}
