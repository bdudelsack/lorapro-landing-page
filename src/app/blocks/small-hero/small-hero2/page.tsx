// @mui
import Typography from '@mui/material/Typography';

// @project
import { SmallHero2 } from '@/blocks/small-hero';
import GraphicsImage from '@/components/GraphicsImage';

/***************************  SMALL HERO 2 - HEADLINE  ***************************/

function HeadlineText() {
  return (
    <Typography variant="h1" align="center" sx={{ width: { xs: 343, sm: 700, md: 850 } }}>
      Effortless CRM Management, Seamless Business
      <GraphicsImage
        sx={{
          display: 'inline-block',
          height: { xs: 32, sm: 45, md: 57 },
          width: { xs: 61, sm: 86, md: 109 },
          backgroundSize: 'contain',
          mx: { xs: 0.5, sm: 1, md: 1.5 },
          verticalAlign: 'sub'
        }}
        image="/assets/images/graphics/ai/rocket.svg"
      />
      Growth
    </Typography>
  );
}

/***************************  SMALL HERO 2 - DATA  ***************************/

const data = {
  chip: {
    label: 'New Beta Version is Release ',
    link: { children: 'explore now', href: '#' }
  },
  captionLine: 'Empowering Businesses with a Customizable, Data-Driven CRM Solution.',
  headLine: <HeadlineText />
};

/***************************  BLOCK - SMALL HERO 2  ***************************/

export default function BlockSmallHero2() {
  return <SmallHero2 {...data} />;
}
