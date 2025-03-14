// @project
import { Footer1 } from '@/blocks/footer';
import { Navbar2 } from '@/blocks/navbar';
import { NavbarContent2 } from '@/blocks/navbar/navbar-content';
import ThemeCustomization from './theme';

// @data
import { navbar } from './data';

// @types
import { ChildrenProps } from '@/types/root';

/***************************  LAYOUT - CRM  ***************************/

export default function CRMLayout({ children }: ChildrenProps) {
  return (
    <ThemeCustomization>
      <>
        {/* header section */}
        <Navbar2>
          <NavbarContent2 {...navbar} />
        </Navbar2>

        {children}

        {/* footer section */}
        <Footer1 />
      </>
    </ThemeCustomization>
  );
}
