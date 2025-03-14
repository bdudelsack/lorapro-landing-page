// @project
import { Footer7 } from '@/blocks/footer';
import { Navbar9 } from '@/blocks/navbar';
import { NavbarContent9 } from '@/blocks/navbar/navbar-content';
import ThemeCustomization from './theme';

// @data
import { navbar } from './data';

// @types
import { ChildrenProps } from '@/types/root';

/***************************  LAYOUT - PMS  ***************************/

export default function PMSLayout({ children }: ChildrenProps) {
  return (
    <ThemeCustomization>
      <>
        {/* header section */}
        <Navbar9>
          <NavbarContent9 {...navbar} />
        </Navbar9>

        {children}

        {/* footer section */}
        <Footer7 />
      </>
    </ThemeCustomization>
  );
}
