// @next
import dynamic from 'next/dynamic';

// @types
import { ChildrenProps } from '@/types/root';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const PluginLayout = dynamic(() => import('@/views/landings/plugin/layout'));

/***************************  LAYOUT - PLUGIN  ***************************/

export default function Plugin({ children }: ChildrenProps) {
  return (
    <PluginLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </PluginLayout>
  );
}
