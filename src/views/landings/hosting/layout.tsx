// @project
import { Footer5 } from '@/blocks/footer';
import { Navbar3 } from '@/blocks/navbar';
import { NavbarContent3 } from '@/blocks/navbar/navbar-content';
import ThemeCustomization from './theme';

// @data
import { navbar } from './data';

// @types
import { ChildrenProps } from '@/types/root';

/***************************  LAYOUT - HOSTING  ***************************/

export default function HostingLayout({ children }: ChildrenProps) {
  return (
    <ThemeCustomization>
      <>
        {/* header section */}
        <Navbar3>
          <NavbarContent3 {...navbar} />
        </Navbar3>

        {children}

        {/* footer section */}
        <Footer5 />
      </>
    </ThemeCustomization>
  );
}
