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

/***************************  PROCESS - BREADCRUMBS  ***************************/

let breadcrumbs: BreadcrumbProps[] = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Process' }
];

/***************************  PROCESS - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Process Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.process.variant.process1
    },
    src: PRIVIEW_PATH.process.process1
  },
  {
    typeset: {
      heading: 'Process Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.process.variant.process2
    },
    src: PRIVIEW_PATH.process.process2
  },
  {
    typeset: {
      heading: 'Process Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.process.variant.process3
    },
    src: PRIVIEW_PATH.process.process3
  },
  {
    typeset: {
      heading: 'Process Section - 04',
      caption: '',
      figmaLink: FIGMA_LINK.process.variant.process4
    },
    src: PRIVIEW_PATH.process.process4
  },
  {
    typeset: {
      heading: 'Process Section - 05',
      caption: '',
      figmaLink: FIGMA_LINK.process.variant.process5
    },
    src: PRIVIEW_PATH.process.process5
  },
  {
    typeset: {
      heading: 'Process Section - 06',
      caption: '',
      figmaLink: FIGMA_LINK.process.variant.process6
    },
    src: PRIVIEW_PATH.process.process6
  },
  {
    typeset: {
      heading: 'Process Section - 07',
      caption: '',
      figmaLink: FIGMA_LINK.process.variant.process7
    },
    src: PRIVIEW_PATH.process.process7
  }
];

/***************************  SECTIONS - PROCESS  ***************************/

export default function Process(): JSX.Element {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Process Sections`, breadcrumbs }} />
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
