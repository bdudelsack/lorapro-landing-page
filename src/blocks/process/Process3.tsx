'use client';

import { SyntheticEvent, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import useFocusWithin from '@/hooks/useFocusWithin';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { ProcessCardProps } from '@/types/process';

interface CommonCardProps extends ProcessCardProps {
  expanded: string | false;
  handleChange: (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => void;
  index: number;
}

/***************************  PROCESS - CARD  ***************************/

function CommonCard({ title, description, list, icon, expanded, moreLink, handleChange, index }: CommonCardProps) {
  const isFocusWithin = useFocusWithin();

  return (
    <Accordion
      disableGutters
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
      sx={{
        p: 0,
        bgcolor: 'transparent',
        ...(isFocusWithin && { '&:focus-within': { color: 'primary.main', '& .process-title': { textDecoration: 'underline' } } })
      }}
    >
      <AccordionSummary
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        sx={{
          p: 0,
          '& .MuiAccordionSummary-content': { m: 0 },
          '&.Mui-focusVisible': { bgcolor: 'transparent' },
          '&:hover, :hover svg': { color: 'primary.dark' }
        }}
      >
        <Stack direction="row" sx={{ alignItems: 'flex-start', width: 1, gap: 1.5 }}>
          <SvgIcon type={IconType.CUSTOM} size={40} {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
          <Stack sx={{ gap: 1 }}>
            <Typography className="process-title" variant="h4">
              {title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
          </Stack>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ pl: 5, py: 0 }}>
        {list && (
          <List disablePadding sx={{ pt: { xs: 1.5, md: 2.5 } }}>
            {list.slice(0, 3).map((item, itemIndex) => (
              <ListItem key={itemIndex} sx={{ px: 0 }}>
                <ListItemAvatar sx={{ minWidth: 34, height: 24 }}>
                  <SvgIcon name="custom-check" type={IconType.CUSTOM} color="primary.main" />
                </ListItemAvatar>
                <ListItemText primary={item.primary} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
              </ListItem>
            ))}
          </List>
        )}
        {list && list.length > 2 && moreLink && <Link component={NextLink} variant="subtitle1" {...moreLink} sx={{ ml: 4.25 }} />}
      </AccordionDetails>
    </Accordion>
  );
}

interface Props {
  heading: string;
  caption: string;
  image: ImageCommonProps;
  cards: ProcessCardProps[];
  defaultExpanded?: string;
}

/***************************  PROCESS - 3  ***************************/

export default function Process3({ heading, caption, cards, image, defaultExpanded }: Props): JSX.Element {
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded || 'panel0');

  // Toggles the expanded state for a specific accordion panel
  const handleChange = (panel: string) => () => {
    setExpanded(panel);
  };

  const cardGap = { xs: 2, sm: 4, md: 4.5 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <GraphicsCard>
          <Grid container spacing={1.5} sx={{ height: 1 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box sx={{ p: { xs: 3, md: 4 } }}>
                {cards.map((card, index) => (
                  <Stack key={index} sx={{ gap: cardGap }}>
                    <CommonCard key={index} {...card} index={index} expanded={expanded} handleChange={handleChange} />
                    {cards.length - 1 !== index && <Divider sx={{ mb: cardGap }} />}
                  </Stack>
                ))}
              </Box>
            </Grid>
            {image && (
              <Grid size={{ xs: 12, sm: 6 }}>
                <GraphicsCard sx={{ bgcolor: 'grey.200', height: { xs: 275, sm: 1 } }}>
                  <Box sx={{ pl: 5, pt: 5, height: 1 }}>
                    <GraphicsImage
                      image={image}
                      sx={{ height: 1, backgroundPositionX: 'left', backgroundPositionY: 'top', borderTopLeftRadius: 12 }}
                    />
                  </Box>
                </GraphicsCard>
              </Grid>
            )}
          </Grid>
        </GraphicsCard>
      </Stack>
    </ContainerWrapper>
  );
}
