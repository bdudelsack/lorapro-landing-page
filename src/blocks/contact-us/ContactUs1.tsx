'use client';

// @mui
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard, IconCard } from '@/components/cards';
import { ContactUsForm1 } from '@/components/contact-us';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ContactCard2Props, ContactUsProps } from '@/types/contact-us';

/***************************  CONTACT US - CARD  ***************************/

function ContactCard({ icon, title, content, link }: ContactCard2Props) {
  return (
    <IconCard
      icon={{
        ...(typeof icon === 'string' ? { name: icon } : { ...icon }),
        stroke: 1,
        color: 'inherit'
      }}
      title={title}
      content={content}
      contentCard
      cardPadding={{ xs: 2, sm: 3, md: 4 }}
      titleProps={{ color: 'text.secondary' }}
      contentProps={{
        color: 'text.primary',
        variant: 'h6',
        component: link ? Link : Typography,
        ...(link && { href: link, sx: { '&:hover': { color: 'primary.dark' } } })
      }}
    />
  );
}

/***************************  CONTACT US - 1  ***************************/

export default function ContactUs1({ heading, caption, contactDetails }: ContactUsProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack sx={{ justifyContent: 'space-between', height: 1, gap: { xs: 3, sm: 4 } }}>
            <Typeset {...{ heading, caption }} />
            <Grid container spacing={1.5}>
              <Grid size={12}>
                <ContactCard icon="tabler-map-pin" title="Visit us" content={contactDetails.address} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <ContactCard
                  icon="tabler-mail"
                  title="Chat to sales"
                  content={contactDetails.email}
                  link={`mailto:${contactDetails.email}`}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <ContactCard icon="tabler-phone" title="Call us" content={contactDetails.phone} link={`tel:${contactDetails.phone}`} />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <GraphicsCard sx={{ height: 1 }}>
            <Box sx={{ p: { xs: 2, sm: 4, md: 5 } }}>
              <ContactUsForm1 />
            </Box>
          </GraphicsCard>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
