// @mui
import { ButtonProps } from '@mui/material/Button';
import { LinkProps } from '@mui/material/Link';

// @project
import { ProfileProps } from './testimonial';

// @types
import { BgImageProps } from './graphics';

export interface BlogListProps {
  image: BgImageProps;
  caption: string;
  link?: LinkProps;
  profile?: ProfileProps;
  heading?: string;
  title?: string;
  date?: string;
  chips?: string[];
  animationDelay?: number;
}

export interface BlogProps {
  heading: string;
  caption?: string;
  blogs: BlogListProps[];
  exploreMore?: ButtonProps;
}
