// @next
import dynamic from 'next/dynamic';

// @types
import { ChildrenProps } from '@/types/root';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const CRMLayout = dynamic(() => import('@/views/landings/crm/layout'));

/***************************  LAYOUT - CRM  ***************************/

export default function CRM({ children }: ChildrenProps) {
  return (
    <CRMLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </CRMLayout>
  );
}
