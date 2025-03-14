'use client';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';

// @types
import { BlogProps } from '@/types/blog';

const imageWidth = { xs: 131, sm: 222 };
const imageMinHeight = { xs: 173, md: 222 };

/***************************  BLOG - 6  ***************************/

export default function Blog6({ heading, caption, blogs, exploreMore }: BlogProps): JSX.Element {
  const theme = useTheme();
  const ellipsis = { overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical' };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 4, md: 1.5 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row', md: 'column' }}
            sx={{ gap: 4, alignItems: { xs: 'flex-start', sm: 'flex-end', md: 'flex-start' }, justifyContent: 'space-between', height: 1 }}
          >
            <Typeset {...{ heading, caption, headingProps: { sx: { maxWidth: 350 } } }} />
            {exploreMore && (
              <Button
                variant="outlined"
                size="large"
                {...exploreMore}
                {...(exploreMore.href && { component: NextLink })}
                sx={{ minWidth: { xs: 170, sm: 180, md: 360 }, fontSize: { xs: 12, md: 14 }, padding: { xs: 2.5 } }}
              />
            )}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack sx={{ gap: 1.5, width: 1 }}>
            {blogs.map((item, index) => (
              <GraphicsCard
                key={index}
                sx={{
                  display: 'flex',
                  ':focus-within': generateFocusVisibleStyles(theme.palette.primary.main),
                  '&:hover': { '& .MuiTypography-root .Mui-title': { color: 'primary.dark' } },
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                <Link component={NextLink} {...item.link} rel="noopener noreferrer" aria-label="blog-link">
                  <Stack direction="row" sx={{ width: 1 }}>
                    <GraphicsCard bgImage={item.image} sx={{ width: imageWidth, minHeight: imageMinHeight, height: 1, flexShrink: 0 }} />
                    <Stack sx={{ gap: 2, justifyContent: 'space-between', flexGrow: 1, height: 1, width: 1, p: { xs: 2, md: 3 } }}>
                      <Stack direction="row" sx={{ justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Chip
                          label={
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {item.heading}
                            </Typography>
                          }
                          sx={{ bgcolor: 'grey.300', '& .MuiChip-label': { px: 2, py: 1.25 } }}
                        />
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {item.date}
                        </Typography>
                      </Stack>
                      <Typeset
                        {...{
                          heading: item.title!,
                          caption: item.caption,
                          headingProps: {
                            variant: 'h4',
                            className: 'Mui-title',
                            sx: { ...ellipsis, WebkitLineClamp: 1, color: 'text.primary' }
                          },
                          captionProps: { variant: 'body1', sx: { ...ellipsis, WebkitLineClamp: 2 } },
                          stackProps: { sx: { gap: 1 } }
                        }}
                      />
                    </Stack>
                  </Stack>
                </Link>
              </GraphicsCard>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
