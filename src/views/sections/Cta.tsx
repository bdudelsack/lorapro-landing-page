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

/***************************  CALL TO ACTION - BREADCRUMBS  ***************************/

let breadcrumbs: BreadcrumbProps[] = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Call To Action' }
];

/***************************  CALL TO ACTION - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'CTA Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta1
    },
    src: PRIVIEW_PATH.cta.cta1
  },
  {
    typeset: {
      heading: 'CTA Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta2
    },
    src: PRIVIEW_PATH.cta.cta2
  },
  {
    typeset: {
      heading: 'CTA Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta3
    },
    src: PRIVIEW_PATH.cta.cta3
  },
  {
    typeset: {
      heading: 'CTA Section - 04',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta4
    },
    src: PRIVIEW_PATH.cta.cta4
  },
  {
    typeset: {
      heading: 'CTA Section - 05',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta5
    },
    src: PRIVIEW_PATH.cta.cta5
  },
  {
    typeset: {
      heading: 'CTA Section - 06',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta6
    },
    src: PRIVIEW_PATH.cta.cta6
  },
  {
    typeset: {
      heading: 'CTA Section - 07',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta7
    },
    src: PRIVIEW_PATH.cta.cta7
  },
  {
    typeset: {
      heading: 'CTA Section - 08',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta8
    },
    src: PRIVIEW_PATH.cta.cta8
  },
  {
    typeset: {
      heading: 'CTA Section - 09',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta9
    },
    src: PRIVIEW_PATH.cta.cta9
  },
  {
    typeset: {
      heading: 'CTA Section - 10',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta10
    },
    src: PRIVIEW_PATH.cta.cta10
  },
  {
    typeset: {
      heading: 'CTA Section - 11',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta11
    },
    src: PRIVIEW_PATH.cta.cta11
  },
  {
    typeset: {
      heading: 'CTA Section - 12',
      caption: '',
      figmaLink: FIGMA_LINK.cta.variant.cta12
    },
    src: PRIVIEW_PATH.cta.cta12
  }
];

/***************************  SECTIONS - CALL TO ACTION  ***************************/

export default function Cta(): JSX.Element {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Call To Action Section`, breadcrumbs }} />
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
