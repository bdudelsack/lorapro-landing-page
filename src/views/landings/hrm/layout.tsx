// @project
import { Footer3 } from '@/blocks/footer';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import ThemeCustomization from './theme';

// @data
import { navbar } from './data';

// @types
import { ChildrenProps } from '@/types/root';

/***************************  LAYOUT - HRM  ***************************/

export default function HRMLayout({ children }: ChildrenProps) {
  return (
    <ThemeCustomization>
      <>
        {/* header section */}
        <Navbar10>
          <NavbarContent10 {...navbar} />
        </Navbar10>

        {children}

        {/* footer section */}
        <Footer3 />
      </>
    </ThemeCustomization>
  );
}
