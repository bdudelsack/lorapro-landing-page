// @next
import dynamic from 'next/dynamic';

// @types
import { ChildrenProps } from '@/types/root';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const HostingLayout = dynamic(() => import('@/views/landings/hosting/layout'));

/***************************  LAYOUT - HOSTING  ***************************/

export default function Hosting({ children }: ChildrenProps) {
  return (
    <HostingLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </HostingLayout>
  );
}
