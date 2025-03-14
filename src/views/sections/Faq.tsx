// @mui
import Stack from '@mui/material/Stack';

// @project
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import Simulator from '@/components/Simulator';
import SimulatorTypeset from '@/components/SimulatorTypeset';
import { PRIVIEW_PATH, SECTION_PATH } from '@/path';
import { FIGMA_LINK } from '@/utils/constant';

// @types
import { BreadcrumbProps } from '@/types/root';

/***************************  FAQ - BREADCRUMBS  ***************************/

let breadcrumbs: BreadcrumbProps[] = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'FAQ' }
];

/***************************  FAQ - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'FAQ Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.faq.variant.faq1
    },
    src: PRIVIEW_PATH.faq.faq1
  },
  {
    typeset: {
      heading: 'FAQ Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.faq.variant.faq2
    },
    src: PRIVIEW_PATH.faq.faq2
  },
  {
    typeset: {
      heading: 'FAQ Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.faq.variant.faq3
    },
    src: PRIVIEW_PATH.faq.faq3
  },
  {
    typeset: {
      heading: 'FAQ Section - 04',
      caption: '',
      figmaLink: FIGMA_LINK.faq.variant.faq4
    },
    src: PRIVIEW_PATH.faq.faq4
  },
  {
    typeset: {
      heading: 'FAQ Section - 05',
      caption: '',
      figmaLink: FIGMA_LINK.faq.variant.faq5
    },
    src: PRIVIEW_PATH.faq.faq5
  },
  {
    typeset: {
      heading: 'FAQ Section - 06',
      caption: '',
      figmaLink: FIGMA_LINK.faq.variant.faq6
    },
    src: PRIVIEW_PATH.faq.faq6
  },
  {
    typeset: {
      heading: 'FAQ Section - 07',
      caption: '',
      figmaLink: FIGMA_LINK.faq.variant.faq7
    },
    src: PRIVIEW_PATH.faq.faq7
  }
];

/***************************  SECTIONS - FAQ  ***************************/

export default function Faq(): JSX.Element {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} FAQ Sections`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          {sectionsData.map((item, index) => (
            <Stack key={index} sx={{ gap: { xs: 1.5, md: 2.5 } }}>
              <SimulatorTypeset {...item.typeset} />
              <Simulator src={item.src} />
            </Stack>
          ))}
        </Stack>
      </ContainerWrapper>
    </>
  );
}
