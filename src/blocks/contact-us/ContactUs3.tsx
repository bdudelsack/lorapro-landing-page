// @next
import NextLink from 'next/link';

// @mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

// @types
import { ContactCardProps } from '@/types/contact-us';

interface Props {
  heading: string;
  caption?: string;
  list: ContactCardProps[];
}

/***************************  CONTACT US - HELPER  ***************************/

function getGridSize(index: number, length: number) {
  switch (length) {
    case 1:
      return 12;
    case 2:
      return 6;
    case 3:
      return 4;
    case 4:
      return 6;
    case 5:
      return index < 2 ? 6 : 4;
    default:
      return 4;
  }
}

/***************************  CONTACT US - CARD  ***************************/

function ContactCard({ icon, title, content, link }: ContactCardProps) {
  return (
    <GraphicsCard sx={{ height: 1 }}>
      <Stack direction={{ xs: 'row', sm: 'column' }} sx={{ gap: { xs: 2, sm: 4, md: 5 }, height: 1, p: { xs: 2, sm: 3, md: 4 } }}>
        <Avatar sx={{ width: 60, height: 60, bgcolor: 'grey.300' }}>
          <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
        </Avatar>
        <Stack sx={{ alignItems: 'flex-start', justifyContent: 'space-between', height: 1, gap: { xs: 2, md: 3 } }}>
          <Typeset
            {...{
              heading: title,
              caption: content,
              stackProps: { sx: { gap: { xs: 1 } } },
              headingProps: { variant: 'h4' },
              captionProps: { variant: 'body1' }
            }}
          />
          {link && <Button color="primary" variant="contained" {...(link.href && { component: NextLink })} {...link} />}
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  CONTACT US - 3  ***************************/

export default function ContactUs3({ heading, caption, list }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {list.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: getGridSize(index, list.length) }}>
              <ContactCard {...{ ...item }} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}
