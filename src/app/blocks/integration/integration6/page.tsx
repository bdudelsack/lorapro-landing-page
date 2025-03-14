// @project
import { Integration6 } from '@/blocks/integration';

/***************************  INTEGRATION 6 - DATA  ***************************/

const data = {
  headLine: 'Connect with top-tier tools available Interface',
  captionLine: 'Discover the features that will transform your customer relationships',
  primaryBtn: { children: 'See All Integration' }
};

/***************************  BLOCK - INTEGRATION 6  ***************************/

export default function BlockIntegration6() {
  return <Integration6 {...data} />;
}
