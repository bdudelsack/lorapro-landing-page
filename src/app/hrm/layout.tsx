// @next
import dynamic from 'next/dynamic';

// @types
import { ChildrenProps } from '@/types/root';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const HRMLayout = dynamic(() => import('@/views/landings/hrm/layout'));

/***************************  LAYOUT - HRM  ***************************/

export default function HRM({ children }: ChildrenProps) {
  return (
    <HRMLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </HRMLayout>
  );
}
