// @next
import dynamic from 'next/dynamic';

// @types
import { ChildrenProps } from '@/types/root';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const CryptoLayout = dynamic(() => import('@/views/landings/crypto/layout'));

/***************************  LAYOUT - CRYPTO  ***************************/

export default function Crypto({ children }: ChildrenProps) {
  return (
    <CryptoLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </CryptoLayout>
  );
}
