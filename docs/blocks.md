# Saasable UI Kit

Hier sind React Blöckekomponente die in dem Saasable UI Kit definiert sind

File: src/blocks/Typography.tsx
```tsx
// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import Typeset from '@/components/Typeset';

interface MediaProps {
  desktop: string;
  tablet: string;
  mobile: string;
  type?: string;
}

interface DataProps {
  title: string;
  sizeValue: MediaProps;
  lineHeight: MediaProps;
  letterSpacing: MediaProps;
  variant: TypographyProps['variant'];
  label: string;
  fontWeight: string;
}

interface TypographyData {
  heading: string;
  items: DataProps[];
}

/***************************  TYPOGRAPHY - DATA  ***************************/

const typographyData: TypographyData[] = [
  {
    heading: 'Headings',
    items: [
      {
        title: 'Heading 01',
        sizeValue: { desktop: '57px', tablet: '45px', mobile: '36px' },
        lineHeight: { desktop: '64px', tablet: '52px', mobile: '44px' },
        letterSpacing: { desktop: '-0.25px', tablet: '0px', mobile: '0px' },
        variant: 'h1',
        label: 'h1 - Heading Large',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Heading 02',
        sizeValue: { desktop: '45px', tablet: '36px', mobile: '24px' },
        lineHeight: { desktop: '52px', tablet: '44px', mobile: '32px' },
        letterSpacing: { desktop: '0px', tablet: '0px', mobile: '0px' },
        variant: 'h2',
        label: 'h2 - Heading Medium',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Heading 03',
        sizeValue: { desktop: '28px', tablet: '24px', mobile: '20px' },
        lineHeight: { desktop: '36px', tablet: '32px', mobile: '28px' },
        letterSpacing: { desktop: '0px', tablet: '0px', mobile: '0px' },
        variant: 'h3',
        label: 'h3 - Display Medium',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Heading 04',
        sizeValue: { desktop: '24px', tablet: '20px', mobile: '16px' },
        lineHeight: { desktop: '32px', tablet: '28px', mobile: '24px' },
        letterSpacing: { desktop: '0px', tablet: '0px', mobile: '0px' },
        variant: 'h4',
        label: 'h4 - Display Small',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Heading 05',
        sizeValue: { desktop: '22px', tablet: '16px', mobile: '16px' },
        lineHeight: { desktop: '28px', tablet: '24px', mobile: '24px' },
        letterSpacing: { desktop: '0px', tablet: '0.15px', mobile: '0.15px' },
        variant: 'h5',
        label: 'h5 - Label Large',
        fontWeight: 'Medium (500)'
      },
      {
        title: 'Heading 06',
        sizeValue: { desktop: '22px', tablet: '16px', mobile: '16px' },
        lineHeight: { desktop: '30px', tablet: '24px', mobile: '24px' },
        letterSpacing: { desktop: '0px', tablet: '0.5px', mobile: '0.5px' },
        variant: 'h6',
        label: 'h6 - Paragraph Large',
        fontWeight: 'Regular (400)'
      }
    ]
  },
  {
    heading: 'Body / Paragraph',
    items: [
      {
        title: 'Body 01',
        sizeValue: { desktop: '16px', tablet: '14px', mobile: '14px' },
        lineHeight: { desktop: '24px', tablet: '20px', mobile: '20px' },
        letterSpacing: { desktop: '0.5px', tablet: '0.25px', mobile: '0.25px' },
        variant: 'body1',
        label: 'body1 - Paragraph Medium',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Body 02',
        sizeValue: { desktop: '14px', tablet: '12px', mobile: '12px' },
        lineHeight: { desktop: '20px', tablet: '18px', mobile: '18px' },
        letterSpacing: { desktop: '0.25px', tablet: '0.25px', mobile: '0.25px' },
        variant: 'body2',
        label: 'body2 - Paragraph Small',
        fontWeight: 'Regular (400)'
      }
    ]
  },
  {
    heading: 'Subtitle',
    items: [
      {
        title: 'Subtitle 01',
        sizeValue: { desktop: '16px', tablet: '14px', mobile: '14px' },
        lineHeight: { desktop: '24px', tablet: '20px', mobile: '20px' },
        letterSpacing: { desktop: '0.15px', tablet: '0.1px', mobile: '0.1px' },
        variant: 'subtitle1',
        label: 'subtitle1 - Label Medium',
        fontWeight: 'Medium (500)'
      },
      {
        title: 'Subtitle 02',
        sizeValue: { desktop: '14px', tablet: '12px', mobile: '12px' },
        lineHeight: { desktop: '20px', tablet: '18px', mobile: '18px' },
        letterSpacing: { desktop: '0.1px', tablet: '0.1px', mobile: '0.1  px' },
        variant: 'subtitle2',
        label: 'subtitle2 - Label Small',
        fontWeight: 'Semibold (600)'
      }
    ]
  },
  {
    heading: 'Caption',
    items: [
      {
        title: 'Caption',
        sizeValue: { desktop: '12px', tablet: '12px', mobile: '12px' },
        lineHeight: { desktop: '16px', tablet: '16px', mobile: '16px' },
        letterSpacing: { desktop: '0px', tablet: '0px', mobile: '0 px' },
        variant: 'caption',
        label: 'caption - Hyperlink Small',
        fontWeight: 'Semibold (600)'
      },
      {
        title: 'Caption 01',
        sizeValue: { desktop: '16px', tablet: '16px', mobile: '16px' },
        lineHeight: { desktop: '24px', tablet: '24px', mobile: '24px' },
        letterSpacing: { desktop: '0.5px', tablet: '0.5px', mobile: '0.5px' },
        variant: 'caption1',
        label: 'caption1 - Hyperlink Large',
        fontWeight: 'Regular (400)'
      },
      {
        title: 'Caption 02',
        sizeValue: { desktop: '14px', tablet: '14px', mobile: '14px' },
        lineHeight: { desktop: '20px', tablet: '20px', mobile: '20px' },
        letterSpacing: { desktop: '0.1px', tablet: '0.1 px', mobile: '0.1px' },
        variant: 'caption2',
        label: 'caption2 - Hyperlink Medium',
        fontWeight: 'Medium (500)'
      }
    ]
  }
];

/***************************  TYPOGRAPHY - BLOCK  ***************************/

function FontSizeBlock({ desktop, tablet, mobile, type }: MediaProps) {
  let label1 = 'Desktop';
  let label2 = 'Tablet';
  let label3 = 'Mobile';

  if (type === 'letter-spacing') {
    label1 = label2 = label3 = 'Letter Spacing';
  }

  if (type === 'line-height') {
    label1 = label2 = label3 = 'Line Height';
  }

  return (
    <Grid container spacing={1}>
      <Grid size={4}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="body2" sx={{ color: 'grey.700' }}>
            {label1}
          </Typography>
          <Typography variant="subtitle1">{desktop}</Typography>
        </Stack>
      </Grid>
      <Grid size={4}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="body2" sx={{ color: 'grey.700' }}>
            {label2}
          </Typography>
          <Typography variant="subtitle1">{tablet}</Typography>
        </Stack>
      </Grid>
      <Grid size={4}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="body2" sx={{ color: 'grey.700' }}>
            {label3}
          </Typography>
          <Typography variant="subtitle1">{mobile}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

/***************************  SECTIONS - TYPOGRAPHY  ***************************/

export default function TypographyPage() {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }}>
      {typographyData.map((item, index) => (
        <Grid key={index} size={12}>
          <Stack sx={{ gap: { xs: 1.5 } }}>
            <Typeset {...{ heading: item.heading, stackProps: { sx: { mb: 1 } } }} />
            {item.items.map((block, index) => (
              <GraphicsCard key={index}>
                <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 3, md: 2 }}>
                      <Typography variant="h4">{block.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'grey.700' }}>
                        {block.label}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 11, sm: 6, md: 4 }}>
                      <Stack sx={{ gap: 2.5 }}>
                        <Typography variant="subtitle1">{block.fontWeight}</Typography>
                        <FontSizeBlock {...block.sizeValue} type="font-size" />
                        <FontSizeBlock {...block.lineHeight} type="line-height" />
                        <FontSizeBlock {...block.letterSpacing} type="letter-spacing" />
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography variant={block.variant}>Quick brown fox jumps!</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </GraphicsCard>
            ))}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

```

  

File: src/blocks/Onboard.tsx
```tsx
// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GradientFab from '@/components/GradientFab';
import LogoSection from '@/components/logo';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Circles from '@/images/Circles';

interface Props {
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
}

/***************************  ONBOARD  ***************************/

export default function OnBoard({ heading, caption, primaryBtn, secondaryBtn }: Props) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard>
        <Stack
          sx={{
            minHeight: { xs: 'calc(100vh - 64px)', sm: 'calc(100vh - 80px)', md: 'calc(100vh - 96px)' },
            justifyContent: 'center',
            p: 4,
            gap: { xs: 7, md: 10 }
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                '& .gradient-fab': { display: 'contents', '& svg': { width: { xs: 66, sm: 100 }, height: { xs: 66, sm: 100 } } }
              }}
            >
              <GradientFab type="star" icon={<LogoSection isIcon={true} />} />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                width: 1,
                mt: { xs: -41.5, sm: -43.75 },
                height: 600,
                transform: { xs: 'scale(2.5)', sm: 'scale(1.5)', md: 'unset' },
                '& svg': { width: 1, height: 1 }
              }}
            >
              <Circles />
            </Box>
          </Box>
          <Stack sx={{ gap: { xs: 3, md: 5 }, position: 'relative' }}>
            <Typeset
              {...{
                heading,
                caption,
                stackProps: { sx: { alignItems: 'center', gap: 1.5 } },
                headingProps: { sx: { textAlign: 'center' }, variant: 'h1' },
                captionProps: { sx: { width: { xs: 300, sm: 616, md: 701 }, textAlign: 'center' } }
              }}
            />
            {(primaryBtn || secondaryBtn) && (
              <Stack direction={{ sm: 'row' }} sx={{ justifyContent: 'center', gap: { xs: 1, sm: 1.5 } }}>
                {primaryBtn && <Button color="primary" size="small" variant="contained" {...primaryBtn} />}
                {secondaryBtn && <Button color="primary" size="small" variant="outlined" {...secondaryBtn} />}
              </Stack>
            )}
          </Stack>
        </Stack>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/TermsCondition.tsx
```tsx
'use client';

import { useEffect, useState } from 'react';

// @mui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// Helper functions for scrollspy
const clamp = (value: number) => Math.max(0, value);
const isBetween = (value: number, floor: number, ceil: number) => value >= floor && value <= ceil;

/***************************  HOOKS - SCROLLSPY  ***************************/

function useScrollspy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || '');
    };

    window.addEventListener('scroll', listener);
    window.addEventListener('resize', listener);
    listener(); // Initial call to set the activeId

    return () => {
      window.removeEventListener('scroll', listener);
      window.removeEventListener('resize', listener);
    };
  }, [ids, offset]);

  return activeId;
}

interface MenuItem {
  heading: string;
  caption: string;
  id: string;
}

/***************************  TERMS CONDITION - DATA  ***************************/

const menuItems: MenuItem[] = [
  {
    id: 'acceptance-of-terms',
    heading: 'Acceptance of Terms',
    caption:
      'By accessing and using this website, you agree to be bound by these Terms and Conditions of Use. If you do not agree with any part of these terms, you must not use the website. shares information about you when you use our website or services. By accessing or using our website, you consent to the practices described in this policy.'
  },
  {
    id: 'changes-to-terms',
    heading: 'Changes to Terms',
    caption:
      'We reserve the right to modify or replace these terms at our sole discretion. It is your responsibility to check these terms periodically for changes. Your continued use of the website after the posting of any changes constitutes acceptance of those changes.'
  },
  {
    id: 'user-conduct',
    heading: 'User Conduct',
    caption:
      'You agree to use this website only for lawful purposes and in a manner consistent with all applicable local, national, and international laws and regulations.'
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual Property',
    caption:
      'All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, digital downloads, and data compilations, is the property of [Your Company Name] or its content suppliers and protected by international copyright laws.'
  },
  {
    id: 'privacy-policy',
    heading: 'Privacy Policy',
    caption:
      'We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, conducting our business, or servicing you.'
  },
  {
    id: 'user-generated-content',
    heading: 'User-Generated Content',
    caption:
      'If you submit any material to this website, you grant [Your Company Name] a perpetual, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such material.'
  },
  {
    id: 'limitation-of-liability',
    heading: 'Limitation of Liability',
    caption:
      'In no event shall [Your Company Name] or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website.'
  },
  {
    id: 'indemnity',
    heading: 'Indemnity',
    caption:
      "You agree to indemnify and hold harmless [Your Company Name] and its affiliates from any claims, actions, demands, damages, liabilities, costs, or expenses, including reasonable attorneys' fees, arising out of or related to your use of the website or any violation of these terms."
  },
  {
    id: 'governing-law',
    heading: 'Governing Law',
    caption:
      'These terms are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.'
  }
];

/***************************  SECTIONS - TERMS CONDITION  ***************************/

export default function TermsConditionPage() {
  const ids = menuItems.map((item) => item.id);

  // Adjust offset as per header height
  const activeId = useScrollspy(ids, 60);
  const [selectedID, setSelectedID] = useState(activeId);

  useEffect(() => {
    if (activeId) {
      setSelectedID(activeId);
    }
  }, [activeId]);

  return (
    <ContainerWrapper sx={{ pb: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <List component="div" sx={{ position: 'sticky', top: 20 }} disablePadding>
            {menuItems.map((item, index) => (
              <ListItemButton
                key={index}
                href={`#${item.id}`}
                sx={{
                  py: 1.25,
                  px: 1.5,
                  borderRadius: 3,
                  mb: 0.75,
                  ...(selectedID === item.id && { color: 'primary.main', bgcolor: 'grey.100' }),
                  '&:hover': { bgcolor: 'grey.50' }
                }}
                onClick={() => setSelectedID(item.id)}
              >
                <ListItemText primary={item.heading} primaryTypographyProps={{ variant: 'subtitle1' }} sx={{ my: 0 }} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 9 }}>
          {menuItems.map((item, index) => (
            <Stack
              key={index}
              id={item.id}
              sx={{ py: { xs: 1, sm: 1.5, md: 3 }, px: { md: 3 }, gap: 1, '&:first-of-type': { pt: { sm: 0 } } }}
            >
              <Typography variant="h4">{item.heading}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {item.caption}
              </Typography>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/Icon.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// @project
import SvgIcon from '@/components/SvgIcon';
import { IconType } from '@/enum';

const tablerIcon = [
  'tabler-home',
  'tabler-user',
  'tabler-lock',
  'tabler-mail',
  'tabler-chart-bar',
  'tabler-credit-card',
  'tabler-phone',
  'tabler-help-circle',
  'tabler-brand-apple',
  'tabler-coin',
  'tabler-brain',
  'tabler-route',
  'tabler-database',
  'tabler-devices-code',
  'tabler-briefcase',
  'tabler-sparkles',
  'tabler-users',
  'tabler-settings-up',
  'tabler-artboard'
];

const fillIcon = [
  'tabler-filled-brand-github',
  'tabler-filled-discord',
  'tabler-filled-facebook',
  'tabler-filled-dribble',
  'tabler-filled-instagram',
  'tabler-filled-linkedin',
  'tabler-filled-star',
  'tabler-filled-star2',
  'tabler-filled-youtube'
];

const customIcon = [
  'custom-ai',
  'custom-arrow',
  'custom-book',
  'custom-brain',
  'custom-calander',
  'custom-card',
  'custom-celebration',
  'custom-check',
  'custom-code',
  'custom-coin',
  'custom-data',
  'custom-data-switch',
  'custom-debitcard',
  'custom-developer',
  'custom-doller',
  'custom-folder',
  'custom-help',
  'custom-interface',
  'custom-lock',
  'custom-notes',
  'custom-path',
  'custom-remote',
  'custom-scoreboard',
  'custom-statastic',
  'custom-target',
  'custom-transfer',
  'custom-wallet'
];

const linkProps: LinkProps = { component: NextLink, target: '_blank', underline: 'hover', rel: 'noopener noreferrer' };

/***************************  ICON AVATAR  ***************************/

// Component to display an icon in an avatar with a tooltip and copy functionality
function IconAvatar({ icon, type = IconType.STROKE }: { icon: string; type?: IconType }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <Tooltip
      slotProps={{
        tooltip: { sx: { color: 'primary.dark', bgcolor: 'secondary.lighter', borderRadius: 3 } },
        arrow: { sx: { color: 'secondary.lighter' } }
      }}
      arrow
      title={
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mx: 1 }}>
            {icon}
          </Typography>
          <IconButton size="small" onClick={() => copyToClipboard(icon)} rel="noopener noreferrer" aria-label="icon-copy">
            <SvgIcon name="tabler-copy" size={20} color="primary.dark" />
          </IconButton>
        </Stack>
      }
    >
      <Avatar variant="rounded" sx={{ cursor: 'pointer', bgcolor: 'grey.100', width: 72, height: 72, borderRadius: 4 }}>
        <SvgIcon name={icon} size={32} type={type} />
      </Avatar>
    </Tooltip>
  );
}

/***************************  ICON  ***************************/

export default function Icon() {
  return (
    <Stack sx={{ gap: 3, mb: 6 }}>
      <Typography variant="h3" sx={{ mt: 3 }}>
        Tabler Icons
      </Typography>
      <Stack direction="row" sx={{ alignItems: 'center', flexWrap: 'wrap', gap: { xs: 2, sm: 4 } }}>
        {tablerIcon.map((icon: string, index) => (
          <IconAvatar key={index} icon={icon} />
        ))}
        <Link href="https://tabler.io/icons" {...linkProps}>
          more...
        </Link>
      </Stack>
      <Typography variant="h3" sx={{ mt: 3 }}>
        Fill Icons
      </Typography>
      <Stack direction="row" sx={{ alignItems: 'center', flexWrap: 'wrap', gap: { xs: 2, sm: 4 } }}>
        {fillIcon.map((icon: string, index) => (
          <IconAvatar key={index} icon={icon} type={IconType.FILL} />
        ))}
        <Link href="https://phoenixcoded.gitbook.io/saasable/ui-kit/theming/icon/tabler#tabler-fill-icons" {...linkProps}>
          docs...
        </Link>
      </Stack>
      <Typography variant="h3" sx={{ mt: 3 }}>
        Custom Icons
      </Typography>
      <Stack direction="row" sx={{ alignItems: 'center', flexWrap: 'wrap', gap: { xs: 2, sm: 4 } }}>
        {customIcon.map((icon: string, index) => (
          <IconAvatar key={index} icon={icon} type={IconType.CUSTOM} />
        ))}
        <Link href="https://phoenixcoded.gitbook.io/saasable/ui-kit/theming/icon/custom-two-tone" {...linkProps}>
          docs...
        </Link>
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/PrivacyPolicy.tsx
```tsx
'use client';

import { useEffect, useState } from 'react';

// @mui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// Helper functions for scrollspy
const clamp = (value: number) => Math.max(0, value);
const isBetween = (value: number, floor: number, ceil: number) => value >= floor && value <= ceil;

/***************************  HOOKS - SCROLLSPY  ***************************/

function useScrollspy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || '');
    };

    window.addEventListener('scroll', listener);
    window.addEventListener('resize', listener);
    listener(); // Initial call to set the activeId

    return () => {
      window.removeEventListener('scroll', listener);
      window.removeEventListener('resize', listener);
    };
  }, [ids, offset]);

  return activeId;
}

interface MenuItem {
  heading: string;
  caption: string;
  id: string;
}

/***************************  PRIVACY POLICY - DATA  ***************************/

const menuItems: MenuItem[] = [
  {
    id: 'acceptance-of-terms',
    heading: 'Acceptance of Terms',
    caption:
      'By accessing and using this website, you agree to be bound by these Terms and Conditions of Use. If you do not agree with any part of these terms, you must not use the website. shares information about you when you use our website or services. By accessing or using our website, you consent to the practices described in this policy.'
  },
  {
    id: 'changes-to-terms',
    heading: 'Changes to Terms',
    caption:
      'We reserve the right to modify or replace these terms at our sole discretion. It is your responsibility to check these terms periodically for changes. Your continued use of the website after the posting of any changes constitutes acceptance of those changes.'
  },
  {
    id: 'user-conduct',
    heading: 'User Conduct',
    caption:
      'You agree to use this website only for lawful purposes and in a manner consistent with all applicable local, national, and international laws and regulations.'
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual Property',
    caption:
      'All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, digital downloads, and data compilations, is the property of [Your Company Name] or its content suppliers and protected by international copyright laws.'
  },
  {
    id: 'privacy-policy',
    heading: 'Privacy Policy',
    caption:
      'We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, conducting our business, or servicing you.'
  },
  {
    id: 'user-generated-content',
    heading: 'User-Generated Content',
    caption:
      'If you submit any material to this website, you grant [Your Company Name] a perpetual, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such material.'
  },
  {
    id: 'limitation-of-liability',
    heading: 'Limitation of Liability',
    caption:
      'In no event shall [Your Company Name] or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website.'
  },
  {
    id: 'indemnity',
    heading: 'Indemnity',
    caption:
      "You agree to indemnify and hold harmless [Your Company Name] and its affiliates from any claims, actions, demands, damages, liabilities, costs, or expenses, including reasonable attorneys' fees, arising out of or related to your use of the website or any violation of these terms."
  },
  {
    id: 'governing-law',
    heading: 'Governing Law',
    caption:
      'These terms are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.'
  }
];

/***************************  SECTIONS - PRIVACY POLICY  ***************************/

export default function PrivacyPolicyPage() {
  const ids = menuItems.map((item) => item.id);

  // Adjust offset as per header height
  const activeId = useScrollspy(ids, 60);
  const [selectedID, setSelectedID] = useState(activeId);

  useEffect(() => {
    if (activeId) {
      setSelectedID(activeId);
    }
  }, [activeId]);

  return (
    <ContainerWrapper sx={{ pb: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <List component="div" sx={{ position: 'sticky', top: 20 }} disablePadding>
            {menuItems.map((item, index) => (
              <ListItemButton
                key={index}
                href={`#${item.id}`}
                sx={{
                  py: 1.25,
                  px: 1.5,
                  borderRadius: 3,
                  mb: 0.75,
                  ...(selectedID === item.id && { color: 'primary.main', bgcolor: 'grey.100' }),
                  '&:hover': { bgcolor: 'grey.50' }
                }}
                onClick={() => setSelectedID(item.id)}
              >
                <ListItemText primary={item.heading} primaryTypographyProps={{ variant: 'subtitle1' }} sx={{ my: 0 }} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 9 }}>
          {menuItems.map((item, index) => (
            <Stack
              key={index}
              id={item.id}
              sx={{ py: { xs: 1, sm: 1.5, md: 3 }, px: { md: 3 }, gap: 1, '&:first-of-type': { pt: { sm: 0 } } }}
            >
              <Typography variant="h4">{item.heading}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {item.caption}
              </Typography>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/ComingSoon.tsx
```tsx
'use client';

import { ChangeEvent, SyntheticEvent, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Alert, { AlertProps } from '@mui/material/Alert';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import Slide from '@mui/material/Slide';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import axios from 'axios';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Comingsoon from '@/images/ComingSoon';
import Circles from '@/images/Circles';

interface SnackbarDataProps {
  open: boolean;
  message: string;
  severity: AlertProps['severity'];
}

interface Props {
  chip?: { chipCaption: string };
  description: string;
  primaryBtn: ButtonProps;
}

/***************************  COMING SOON  ***************************/

export default function ComingSoon({ chip, primaryBtn, description }: Props) {
  const theme = useTheme();

  const [email, setEmail] = useState<string>('');
  const [snackbar, setSnackbar] = useState<SnackbarDataProps | null>(null);

  const handleCloseSnackbar = (event: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar((prev) => prev && { ...prev, open: false });
  };

  const submitHandler = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/subscribe', { email });
      console.log('response', response);
      if (response.status === 200) {
        setSnackbar({ open: true, message: response.data.message, severity: 'success' });
        setEmail('');
      } else {
        setSnackbar({ open: true, message: response.data.error, severity: 'error' });
      }
    } catch (error) {
      setSnackbar({ open: true, message: 'Subscription error: ' + error, severity: 'error' });
    }
  };

  return (
    <ContainerWrapper>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          py: SECTION_COMMON_PY,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.2)',
            width: 1,
            zIndex: -1,
            opacity: { xs: 1, md: 0.6 },
            height: 600,
            '& svg': { width: 1, height: 1 }
          }}
        >
          <Circles />
        </Box>
        <Stack component="form" onSubmit={submitHandler} sx={{ gap: { xs: 7, md: 12 }, alignItems: 'center' }}>
          <Stack sx={{ gap: { xs: 2, sm: 3 }, alignItems: 'center' }}>
            {chip && (
              <Chip
                variant="outlined"
                label={<Typography sx={{ color: 'text.secondary' }}>{chip.chipCaption}</Typography>}
                size="small"
                sx={{ bgcolor: 'background.default', alignSelf: 'center', '& .MuiChip-label': { py: 1, px: 2 }, borderColor: 'grey.600' }}
              />
            )}
            <Comingsoon />
            <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: { xs: '80%', sm: '60%' } }}>
              {description}
            </Typography>
          </Stack>
          <OutlinedInput
            autoFocus
            id="name"
            name="email"
            type="email"
            value={email}
            required
            placeholder="Enter your email address"
            onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
              setEmail((e.target as HTMLInputElement)?.value);
            }}
            endAdornment={<Button color="primary" size="small" type="submit" variant="contained" sx={{ px: 4 }} {...primaryBtn} />}
            slotProps={{ input: { 'aria-label': 'Email address' } }}
            sx={{
              bgcolor: 'background.default',
              ...theme.typography.caption2,
              maxWidth: { xs: 343, sm: 364 },
              width: 1,
              p: 0.5,
              margin: 'auto',
              whiteSpace: 'nowrap',
              '& .MuiOutlinedInput-input': {
                p: '6px 20px'
              },
              '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
            }}
          />
        </Stack>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={Slide}
        open={snackbar?.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity={snackbar?.severity} variant="filled" sx={{ width: '100%' }}>
          {snackbar?.message}
        </Alert>
      </Snackbar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/Color.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { Themes, ThemeMode } from '@/config';
import { GraphicsCard } from '@/components/cards';
import useConfig from '@/hooks/useConfig';

// get theme wise color string
function getColorString(themes: Themes) {
  switch (themes) {
    case Themes.THEME_AI:
      return 'AI';
    case Themes.THEME_HOSTING:
      return 'HOSTING';
    case Themes.THEME_CRM:
    default:
      return 'CRM';
  }
}

// get theme wise primary/secondary color offset
function getColorCode(themes: Themes, index: number, mode: ThemeMode) {
  const lightModeCodes: number[] = [90, 80, 40, 30, 10];
  const darkModeCodes: number[] = [30, 60, 80, 90, 95];

  const code1 = mode === ThemeMode.DARK ? darkModeCodes : lightModeCodes;

  switch (themes) {
    case Themes.THEME_AI:
    case Themes.THEME_HOSTING:
    case Themes.THEME_CRM:
    default:
      return code1[index];
  }
}

// get theme wise grey color offset
function getGreyCode(themes: Themes, index: number, mode: ThemeMode) {
  const lightModeCodes: number[] = [98, 96, 94, 92, 90, 87, 80, 50, 30, 10];
  const darkModeCodes: number[] = [6, 10, 12, 17, 22, 4, 30, 60, 80, 90];

  const code1 = mode === ThemeMode.DARK ? darkModeCodes : lightModeCodes;

  switch (themes) {
    case Themes.THEME_AI:
    case Themes.THEME_HOSTING:
    case Themes.THEME_CRM:
    default:
      return code1[index];
  }
}

interface ColorBoxProps {
  value: string;
  color: string;
  muiLabel: string;
  figmaLabel: string;
  figmaValue: string;
  main?: boolean;
}

/***************************  COLOR - CARD  ***************************/

function ColorBox({ value, color, muiLabel, figmaLabel, figmaValue, main = false }: ColorBoxProps) {
  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <GraphicsCard
        sx={{
          borderRadius: 4,
          ...(main && { border: '1px dashed', borderColor: 'primary.main' }),
          ...(muiLabel === 'grey.100' && { bgcolor: 'grey.200' })
        }}
      >
        <Box sx={{ p: 1.5 }}>
          <GraphicsCard sx={{ py: 3, borderRadius: 3, bgcolor: value, color }}>
            <Stack sx={{ gap: 0.75, alignItems: 'center' }}>
              <Typography variant="h3">{value}</Typography>
              <Typography>{figmaLabel}</Typography>
            </Stack>
          </GraphicsCard>
          <Stack direction="row" sx={{ justifyContent: 'space-between', mt: 1.5 }}>
            <Typography variant="subtitle1">{muiLabel}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{figmaValue}</Typography>
          </Stack>
        </Box>
      </GraphicsCard>
    </Grid>
  );
}

function ColorPalette({ title, palette }: { title: string; palette: ColorBoxProps[] }) {
  return (
    <Stack sx={{ gap: 3 }}>
      <Typography variant="h2">{title}</Typography>
      <Grid container spacing={{ xs: 1.5, sm: 3 }} sx={{ alignItems: 'center' }}>
        {palette.map((item, index) => (
          <ColorBox key={index} {...item} />
        ))}
      </Grid>
    </Stack>
  );
}

/***************************  SECTIONS - COLOR  ***************************/

export default function Color() {
  const theme = useTheme();

  const { currentTheme, mode } = useConfig();
  const colorString = getColorString(currentTheme);

  const primaryPalette: ColorBoxProps[] = [
    {
      value: theme.palette.primary.lighter,
      color: 'primary.darker',
      muiLabel: 'primary.lighter',
      figmaLabel: mode === 'dark' ? 'Primary Container / On Primary Fixed Variant' : 'Primary Container / Primary Fixed',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 0, mode)}` // setup swr and use function for dynamic value
    },
    {
      value: theme.palette.primary.light,
      color: 'primary.dark',
      muiLabel: 'primary.light',
      figmaLabel: 'Primary Fixed Dim',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 1, mode)}`
    },
    {
      value: theme.palette.primary.main,
      color: 'background.default',
      muiLabel: 'primary.main',
      figmaLabel: 'Primary',
      main: true,
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 2, mode)}`
    },
    {
      value: theme.palette.primary.dark,
      color: 'primary.light',
      muiLabel: 'primary.dark',
      figmaLabel: mode === 'dark' ? 'On Primary Container / Primary Fixed' : 'On Primary Fixed Variant',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 3, mode)}`
    },
    {
      value: theme.palette.primary.darker,
      color: 'primary.lighter',
      muiLabel: 'primary.darker',
      figmaLabel: 'On Primary Container / On Primary Fixed',
      figmaValue: `${colorString}/primary/${getColorCode(currentTheme, 4, mode)}`
    }
  ];

  const secondaryPalette: ColorBoxProps[] = [
    {
      value: theme.palette.secondary.lighter,
      color: 'secondary.darker',
      muiLabel: 'secondary.lighter',
      figmaLabel: mode === 'dark' ? 'Secondary Container / On Secondary Fixed Variant' : 'Secondary Container / Secondary Fixed',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 0, mode)}`
    },
    {
      value: theme.palette.secondary.light,
      color: 'secondary.dark',
      muiLabel: 'secondary.light',
      figmaLabel: 'Secondary Fixed Dim',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 1, mode)}`
    },
    {
      value: theme.palette.secondary.main,
      color: 'background.default',
      muiLabel: 'secondary.main',
      figmaLabel: 'Secondary',
      main: true,
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 2, mode)}`
    },
    {
      value: theme.palette.secondary.dark,
      color: 'secondary.light',
      muiLabel: 'secondary.dark',
      figmaLabel: mode === 'dark' ? 'On Secondary Container / Secondary Fixed' : 'On Secondary Fixed Variant',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 3, mode)}`
    },
    {
      value: theme.palette.secondary.darker,
      color: 'secondary.lighter',
      muiLabel: 'secondary.darker',
      figmaLabel: 'On Secondary Container / On Secondary Fixed',
      figmaValue: `${colorString}/secondary/${getColorCode(currentTheme, 4, mode)}`
    }
  ];

  const greyPalette: ColorBoxProps[] = [
    {
      value: theme.palette.grey[50],
      color: 'grey.900',
      muiLabel: 'grey.50',
      figmaLabel: mode === 'dark' ? 'Surface / Surface Dim' : 'Surface / Surface Bright',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 0, mode)}`
    },
    {
      value: theme.palette.grey[100],
      color: 'grey.900',
      muiLabel: 'grey.100',
      figmaLabel: 'Surface Container Low',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 1, mode)}`
    },
    {
      value: theme.palette.grey[200],
      color: 'grey.900',
      muiLabel: 'grey.200',
      figmaLabel: 'Surface Container',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 2, mode)}`
    },
    {
      value: theme.palette.grey[300],
      color: 'grey.900',
      muiLabel: 'grey.300',
      figmaLabel: 'Surface Container High',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 3, mode)}`
    },
    {
      value: theme.palette.grey[400],
      color: 'grey.900',
      muiLabel: 'grey.400',
      figmaLabel: 'Surface Container Highest',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 4, mode)}`
    },
    {
      value: theme.palette.grey[500],
      color: 'grey.900',
      muiLabel: 'grey.500',
      figmaLabel: 'Surface Container Highest',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 5, mode)}`
    },
    {
      value: theme.palette.grey[600],
      color: 'grey.800',
      muiLabel: 'grey.600',
      figmaLabel: 'Outline Variant',
      figmaValue: `${colorString}/neutral variant/${getGreyCode(currentTheme, 6, mode)}`
    },
    {
      value: theme.palette.grey[700],
      color: 'grey.600',
      muiLabel: 'grey.700',
      figmaLabel: 'Outline',
      figmaValue: `${colorString}/neutral variant/${getGreyCode(currentTheme, 7, mode)}`
    },
    {
      value: theme.palette.grey[800],
      color: 'grey.600',
      muiLabel: 'grey.800',
      figmaLabel: 'On Surface Variant',
      figmaValue: `${colorString}/neutral variant/${getGreyCode(currentTheme, 8, mode)}`
    },
    {
      value: theme.palette.grey[900],
      color: 'grey.50',
      muiLabel: 'grey.900',
      figmaLabel: 'On Surface',
      figmaValue: `${colorString}/neutral/${getGreyCode(currentTheme, 9, mode)}`
    }
  ];

  const palettes = [
    { title: 'Primary', palette: primaryPalette },
    { title: 'Secondary', palette: secondaryPalette },
    { title: 'Neutral', palette: greyPalette }
  ];

  return (
    <Stack sx={{ gap: 6 }}>
      {palettes.map((palette, index) => (
        <ColorPalette key={index} {...palette} />
      ))}
    </Stack>
  );
}

```

  

File: src/blocks/top-offer/TopOffer5.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BgImageProps } from '@/types/graphics';
import { OfferProps } from '@/types/offer';

interface Props extends OfferProps {
  bgImage: BgImageProps;
}

/***************************  TOP OFFER - 5  ***************************/

export default function TopOffer5({ heading, caption, bgImage, primaryBtn, icon, handleClick }: Props) {
  const theme = useTheme();

  const [open, setOpen] = useState(true);
  const size = { xs: 40, sm: 60 };

  const joinUS = (
    <OutlinedInput
      placeholder="example@gmail.com"
      endAdornment={<Button color="primary" size="small" variant="contained" sx={{ px: 4 }} {...primaryBtn} />}
      slotProps={{ input: { 'aria-label': 'Email address' } }}
      sx={{
        ...theme.typography.caption2,
        color: 'secondary.main',
        maxWidth: { xs: 1, sm: 280 },
        width: 1,
        p: 0.5,
        my: { xs: 2, sm: 0 },
        whiteSpace: 'nowrap',
        '& .MuiOutlinedInput-input': {
          p: '6px 20px'
        },
        '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25, borderColor: 'grey.700' }
      }}
    />
  );

  return (
    <Box sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard bgImage={bgImage} overLay sx={{ borderRadius: 'none', mx: 2 }}>
        <ContainerWrapper>
          <Collapse in={open}>
            <Box sx={{ py: { xs: 2, sm: 3, md: 5 } }}>
              <Alert
                icon={
                  <Avatar sx={{ bgcolor: 'primary.main', width: size, height: size }}>
                    <SvgIcon color={theme.palette.primary.lighter} {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
                  </Avatar>
                }
                sx={{
                  p: 0,
                  color: 'text.primary',
                  bgcolor: 'transparent',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  '& .MuiAlert-icon	': { py: 0.25 },
                  '& .MuiAlert-action': { pt: 0 },
                  '& .MuiAlert-message': { py: 0, width: 1 },
                  width: 1
                }}
                action={
                  <IconButton
                    rel="noopener noreferrer"
                    aria-label="close"
                    size="small"
                    onClick={() => (handleClick ? handleClick : setOpen(false))}
                    sx={{ width: 24, height: 24, p: { xs: 1, sm: 2 }, borderRadius: '50%' }}
                  >
                    <SvgIcon name="tabler-x" />
                  </IconButton>
                }
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2.5, width: 1 }}
                >
                  <Typeset
                    {...{
                      heading,
                      caption,
                      stackProps: { sx: { gap: 1 } },
                      headingProps: { variant: 'h4' },
                      captionProps: { variant: 'body1' }
                    }}
                  />
                  <Box sx={{ display: { xs: 'none', sm: 'contents' } }}>{joinUS}</Box>
                </Stack>
              </Alert>
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>{joinUS}</Box>
          </Collapse>
        </ContainerWrapper>
      </GraphicsCard>
    </Box>
  );
}

```

  

File: src/blocks/top-offer/TopOffer4.tsx
```tsx
'use client';

import { useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { Offer3Props } from '@/types/offer';

/***************************  TOP OFFER - 4  ***************************/

export default function TopOffer4({ offer, handleClick }: Offer3Props) {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ bgcolor: 'primary.lighter', mx: 2 }}>
        <ContainerWrapper>
          <Collapse in={open}>
            <Box sx={{ py: { xs: 1.5, sm: 2.5 }, pl: { xs: 2, sm: 0 } }}>
              <Alert
                icon={false}
                sx={{
                  p: 0,
                  color: 'primary.darker',
                  bgcolor: 'transparent',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '& .MuiAlert-action': { pt: 0 },
                  '& .MuiAlert-message': { py: 0, width: 1 }
                }}
                action={
                  <IconButton
                    rel="noopener noreferrer"
                    aria-label="close"
                    size="small"
                    onClick={() => (handleClick ? handleClick : setOpen(false))}
                    sx={{ width: { xs: 40, sm: 24 }, height: { xs: 40, sm: 24 }, p: { xs: 1, sm: 2 }, borderRadius: '50%' }}
                  >
                    <SvgIcon name="tabler-x" color="primary.darker" />
                  </IconButton>
                }
              >
                <AlertTitle sx={{ textAlign: 'center', my: 0 }}>
                  <Typography variant="h6" sx={{ py: 0.5 }}>
                    {offer.label}
                    {offer.link && (
                      <Typography component="span" variant="h6" sx={{ color: 'secondary.dark' }}>
                        &nbsp;
                        {offer.secondaryLabel}
                        &nbsp;
                        <Link
                          component={NextLink}
                          color="inherit"
                          {...offer.link}
                          underline="always"
                          sx={{ '&:hover': { color: 'primary.main' } }}
                        />
                      </Typography>
                    )}
                  </Typography>
                </AlertTitle>
              </Alert>
            </Box>
          </Collapse>
        </ContainerWrapper>
      </GraphicsCard>
    </Box>
  );
}

```

  

File: src/blocks/top-offer/TopOffer3.tsx
```tsx
'use client';

import { useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';

import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { Offer3Props } from '@/types/offer';

/***************************  TOP OFFER - 3  ***************************/

export default function TopOffer3({ offer, handleClick }: Offer3Props) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ bgcolor: 'primary.main', mx: 2 }}>
        <ContainerWrapper>
          <Collapse in={open}>
            <Box sx={{ py: { xs: 1.5, sm: 2.5 }, pl: { xs: 2, sm: 0 } }}>
              <Alert
                icon={false}
                sx={{
                  p: 0,
                  color: 'background.default',
                  bgcolor: 'transparent',
                  '& .MuiAlert-action': { pt: 0 },
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '& .MuiAlert-message': { py: 0, width: 1 }
                }}
                action={
                  <IconButton
                    rel="noopener noreferrer"
                    aria-label="close"
                    size="small"
                    onClick={() => (handleClick ? handleClick : setOpen(false))}
                    sx={{
                      width: { xs: 40, sm: 24 },
                      height: { xs: 40, sm: 24 },
                      p: { xs: 1, sm: 2 },
                      borderRadius: '50%',
                      '&:focus-visible': generateFocusVisibleStyles(theme.palette.background.default),
                      '&:hover': { bgcolor: 'primary.dark' }
                    }}
                  >
                    <SvgIcon name="tabler-x" color="background.default" />
                  </IconButton>
                }
              >
                <AlertTitle sx={{ textAlign: 'center', my: 0 }}>
                  <Typography variant="h6" sx={{ py: 0.5 }}>
                    {offer.label}
                    {offer.link && (
                      <>
                        &nbsp;
                        <Link
                          component={NextLink}
                          color="inherit"
                          {...offer.link}
                          underline="always"
                          sx={{
                            '&:focus-visible': generateFocusVisibleStyles(theme.palette.background.default),
                            '&:hover': { color: 'primary.light' }
                          }}
                        />
                      </>
                    )}
                  </Typography>
                </AlertTitle>
              </Alert>
            </Box>
          </Collapse>
        </ContainerWrapper>
      </GraphicsCard>
    </Box>
  );
}

```

  

File: src/blocks/EarlyAccess.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GradientFab from '@/components/GradientFab';
import GraphicsImage from '@/components/GraphicsImage';
import LogoSection from '@/components/logo';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  image: ImageCommonProps;
  primaryBtn: ButtonProps;
}

/***************************  EARLY ACCESS  ***************************/

export default function EarlyAccess({ heading, caption, primaryBtn, image }: Props) {
  const theme = useTheme();

  const gc = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(71.13% 28.87% at 50% 50.07%, ${alpha(gc, 0)} 0%, ${gc} 100%)`
      : `radial-gradient(71.13% 71.13% at 50% 50.07%, ${alpha(gc, 0)} 0%, ${gc} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard
        sx={{
          width: 1,
          position: 'relative',
          height: { sm: 'calc(100vh - 80px)', md: 'calc(100vh - 96px)' },
          minHeight: { xs: 'calc(100vh - 64px)', sm: 500, md: 600 }
        }}
      >
        <Grid container sx={{ height: 1 }}>
          <Grid size={{ xs: 12, sm: 7 }}>
            <Box sx={{ p: { xs: 3, sm: 7 }, height: 1 }}>
              <Stack sx={{ gap: { sm: 10 }, alignItems: 'flex-start', justifyContent: 'center', height: 1 }}>
                <Box
                  sx={{
                    position: { xs: 'absolute', sm: 'relative' },
                    top: { xs: 24, sm: 'unset' },
                    left: { xs: 24, sm: 'unset' },
                    '& .gradient-fab': { display: 'contents', '& svg': { width: { xs: 89, sm: 100 }, height: { xs: 89, sm: 100 } } }
                  }}
                >
                  <GradientFab type="star" icon={<LogoSection isIcon={true} />} />
                </Box>
                <Stack sx={{ position: 'relative', gap: 4 }}>
                  <Typeset {...{ heading, caption, stackProps: { sx: { gap: { xs: 1.5, sm: 2 } } } }} />
                  <OutlinedInput
                    placeholder="Enter your email address"
                    endAdornment={<Button color="primary" variant="contained" sx={{ minWidth: 110 }} {...primaryBtn} />}
                    slotProps={{ input: { 'aria-label': 'Email address' } }}
                    sx={{
                      ...theme.typography.caption2,
                      bgcolor: 'grey.100',
                      maxWidth: { xs: 343, sm: 364 },
                      width: 1,
                      p: 0.5,
                      whiteSpace: 'nowrap',
                      '& .MuiOutlinedInput-input': { p: '6px 20px' },
                      '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
                    }}
                  />
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid sx={{ order: { xs: -1, sm: 0 } }} size={{ xs: 12, sm: 5 }}>
            <Box sx={{ pl: { xs: 10, sm: 0 }, height: 1 }}>
              <GraphicsImage sx={{ height: { xs: 420, sm: 1 }, backgroundPositionX: 'left', backgroundPositionY: 'bottom' }} image={image}>
                <Box sx={{ height: 1, background: gradient }} />
              </GraphicsImage>
            </Box>
          </Grid>
        </Grid>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/top-offer/TopOffer2.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { OfferProps } from '@/types/offer';

/***************************  TOP OFFER - 2  ***************************/

export default function TopOffer2({ heading, caption, primaryBtn, icon, handleClick }: OfferProps) {
  const theme = useTheme();

  const [open, setOpen] = useState(true);
  const size = { xs: 40, sm: 60 };

  const joinUS = (
    <OutlinedInput
      placeholder="example@gmail.com"
      endAdornment={<Button color="primary" size="small" variant="contained" sx={{ px: 4 }} {...primaryBtn} />}
      slotProps={{ input: { 'aria-label': 'Email address' } }}
      sx={{
        ...theme.typography.caption2,
        color: 'secondary.main',
        maxWidth: { xs: 1, sm: 280 },
        width: 1,
        p: 0.5,
        my: { xs: 2, sm: 0 },
        whiteSpace: 'nowrap',
        '& .MuiOutlinedInput-input': {
          p: '6px 20px'
        },
        '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
      }}
    />
  );

  return (
    <Box sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ boxShadow: `2px 2px 10px 0px ${alpha(theme.palette.grey[900], 0.09)}`, mx: 2 }}>
        <ContainerWrapper>
          <Collapse in={open}>
            <Box sx={{ py: { xs: 2, sm: 3 } }}>
              <Alert
                icon={
                  <Avatar sx={{ bgcolor: 'grey.300', width: size, height: size }}>
                    <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
                  </Avatar>
                }
                sx={{
                  p: 0,
                  color: 'text.primary',
                  bgcolor: 'transparent',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  '& .MuiAlert-icon	': { py: 0.25 },
                  '& .MuiAlert-action': { pt: 0 },
                  '& .MuiAlert-message': { py: 0, width: 1 },
                  width: 1
                }}
                action={
                  <IconButton
                    rel="noopener noreferrer"
                    aria-label="close"
                    size="small"
                    onClick={() => (handleClick ? handleClick : setOpen(false))}
                    sx={{ width: 24, height: 24, p: { xs: 1, sm: 2 }, borderRadius: '50%' }}
                  >
                    <SvgIcon name="tabler-x" />
                  </IconButton>
                }
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2.5, width: 1 }}
                >
                  <Typeset
                    {...{
                      heading,
                      caption,
                      stackProps: { sx: { gap: 1 } },
                      headingProps: { variant: 'h4' },
                      captionProps: { variant: 'body1' }
                    }}
                  />
                  <Box sx={{ display: { xs: 'none', sm: 'contents' } }}>{joinUS}</Box>
                </Stack>
              </Alert>
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>{joinUS}</Box>
          </Collapse>
        </ContainerWrapper>
      </GraphicsCard>
    </Box>
  );
}

```

  

File: src/blocks/top-offer/TopOffer1.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { OfferProps } from '@/types/offer';

/***************************  TOP OFFER - 1  ***************************/

export default function TopOffer1({ heading, caption, primaryBtn, secondaryBtn, icon, handleClick }: OfferProps) {
  const theme = useTheme();

  const [open, setOpen] = useState(true);
  const size = { xs: 40, sm: 60 };

  return (
    <Box sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ boxShadow: `2px 2px 10px 0px ${alpha(theme.palette.grey[900], 0.09)}`, mx: 2 }}>
        <ContainerWrapper>
          <Collapse in={open}>
            <Box sx={{ py: { xs: 2, sm: 3 } }}>
              <Alert
                icon={
                  <Avatar sx={{ bgcolor: 'grey.300', width: size, height: size }}>
                    <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
                  </Avatar>
                }
                sx={{
                  p: 0,
                  color: 'text.primary',
                  bgcolor: 'transparent',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: { xs: 'flex-start', md: 'center' },
                  '& .MuiAlert-icon	': { py: 0.25 },
                  '& .MuiAlert-action': { pt: 0, ml: -0.5 },
                  '& .MuiAlert-message': { py: 0, width: 1, mb: { sm: -2, md: 0 } },
                  width: 1
                }}
                action={
                  <IconButton
                    rel="noopener noreferrer"
                    aria-label="close"
                    size="small"
                    onClick={() => (handleClick ? handleClick : setOpen(false))}
                    sx={{ width: 28, height: 28, p: { xs: 1, sm: 2 }, borderRadius: '50%' }}
                  >
                    <SvgIcon name="tabler-x" />
                  </IconButton>
                }
              >
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  sx={{ alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 2.5, width: 1 }}
                >
                  <Typeset
                    {...{
                      heading,
                      caption,
                      stackProps: { sx: { gap: 1 } },
                      headingProps: { variant: 'h4' },
                      captionProps: { variant: 'body1' }
                    }}
                  />
                  {(primaryBtn || secondaryBtn) && (
                    <Stack
                      direction="row"
                      sx={{ alignItems: 'center', gap: 1.5, mb: { sm: 2, md: 0 }, display: { xs: 'none', sm: 'flex' } }}
                    >
                      {primaryBtn && <Button variant="outlined" size="small" {...primaryBtn} />}
                      {secondaryBtn && <Button variant="contained" size="small" sx={{ whiteSpace: 'nowrap', mr: 0.5 }} {...secondaryBtn} />}
                    </Stack>
                  )}
                </Stack>
              </Alert>
            </Box>
            {(primaryBtn || secondaryBtn) && (
              <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, mb: 2, display: { xs: 'flex', sm: 'none' } }}>
                {primaryBtn && <Button fullWidth variant="outlined" size="small" {...primaryBtn} />}
                {secondaryBtn && <Button fullWidth variant="contained" size="small" sx={{ whiteSpace: 'nowrap' }} {...secondaryBtn} />}
              </Stack>
            )}
          </Collapse>
        </ContainerWrapper>
      </GraphicsCard>
    </Box>
  );
}

```

  

File: src/blocks/testimonial/Testimonial6.tsx
```tsx
'use client';

import { useRef } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileCard4 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SlickArrows from '@/components/SlickArrows';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 6  ***************************/

export default function Testimonial6({ heading, caption, testimonials }: TestimonialProps): JSX.Element {
  const theme = useTheme();

  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm + 1,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const slickStyle = { '& .slick-track': { display: 'flex' }, '& .slick-slide': { height: 'auto', ' > div': { height: 1, px: 0.75 } } };
  const boxPadding = { xs: 2, sm: 3, md: 5 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 4 }}>
            <Typeset {...{ heading, caption }} />
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <SlickArrows sliderRef={sliderRef} />
            </Box>
          </Stack>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.6
          }}
        >
          <Stack sx={{ ...slickStyle, gap: { xs: 3, sm: 2 } }}>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <GraphicsCard key={index} sx={{ height: 1 }}>
                  <Stack sx={{ justifyContent: 'space-between', height: 1, gap: { xs: 4, sm: 5, md: 7 }, p: boxPadding }}>
                    <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center', justifyContent: 'space-between' }}>
                      {testimonial.profile.avatar && (
                        <Avatar
                          src={GetImagePath(testimonial.profile.avatar)}
                          sx={{ width: { xs: 52, md: 55 }, height: { xs: 52, md: 55 } }}
                          alt="Avatar"
                          imgProps={{ loading: 'lazy' }}
                        />
                      )}
                      {testimonial.image && <GraphicsImage image={testimonial.image} />}
                    </Stack>
                    <Stack sx={{ gap: { xs: 1.5, md: 2 } }}>
                      <Typography variant="h3">{testimonial.title}</Typography>
                      <Typography sx={{ color: 'text.secondary' }}>{testimonial.review}</Typography>
                    </Stack>
                    <ProfileCard4 {...testimonial.profile} />
                  </Stack>
                </GraphicsCard>
              ))}
            </Slider>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <SlickArrows sliderRef={sliderRef} />
            </Box>
          </Stack>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/testimonial/Testimonial9.tsx
```tsx
'use client';

import { useEffect, useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import Marquee from 'react-fast-marquee';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileCard2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TestimonialDataProps, TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 9  ***************************/

export default function Testimonial9({ heading, caption, testimonials }: TestimonialProps) {
  const theme = useTheme();
  const [marqueeData1, setMarqueeData1] = useState<TestimonialDataProps[]>([]);
  const [marqueeData2, setMarqueeData2] = useState<TestimonialDataProps[]>([]);

  useEffect(() => {
    // Split testimonials into two sets if there are more than 5 testimonials
    if (testimonials.length > 5) {
      const mid = Math.ceil(testimonials.length / 2);
      setMarqueeData1(testimonials.slice(0, mid));
      setMarqueeData2(testimonials.slice(mid));
    } else {
      setMarqueeData1(testimonials);
    }
  }, [testimonials]);

  const gc = theme.palette.background.default;
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `linear-gradient(90deg, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.9)} 100%)`
      : `linear-gradient(90deg, ${gc} 0%, ${alpha(gc, 0)} 100%)`;

  const sharedGradient = {
    position: 'absolute',
    content: `' '`,
    top: 0,
    width: { xs: 24, sm: 97, md: 139 },
    height: 1,
    background: gradient,
    zIndex: 2
  };

  return (
    <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ py: SECTION_COMMON_PY }}>
      <Grid size={12}>
        <ContainerWrapper>
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </ContainerWrapper>
      </Grid>
      <Grid size={12}>
        <Stack
          sx={{
            gap: { xs: 1, md: 1.5 },
            alignItems: 'center',
            position: 'relative',
            '& .rfm-initial-child-container': { height: 1 },
            '& .rfm-child': { height: 1, display: 'flex', justifyContent: 'space-between' },
            '&:before': { ...sharedGradient, left: 0 },
            '&:after': { ...sharedGradient, right: 0, transform: 'rotate(180deg)' }
          }}
        >
          <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'right' : 'left'}>
            {marqueeData1.map((testimonial, index) => (
              <GraphicsCard
                key={index}
                sx={{ width: { xs: 375, sm: 395, md: 506 }, borderRadius: { xs: 4, sm: 6 }, mx: { xs: 0.5, md: 0.75 } }}
              >
                <Stack sx={{ justifyContent: 'space-between', gap: { xs: 2, md: 3 }, p: { xs: 1.5, sm: 2, md: 3 }, height: 1 }}>
                  <ProfileCard2 {...testimonial.profile} />
                  <Typography>{testimonial.review}</Typography>
                </Stack>
              </GraphicsCard>
            ))}
          </Marquee>
          {testimonials.length > 5 && (
            <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'left' : 'right'}>
              {marqueeData2.map((testimonial, index) => (
                <GraphicsCard
                  key={index}
                  sx={{ width: { xs: 375, sm: 395, md: 506 }, borderRadius: { xs: 4, sm: 6 }, mx: { xs: 0.5, md: 0.75 } }}
                >
                  <Stack sx={{ justifyContent: 'space-between', gap: { xs: 2, md: 3 }, p: { xs: 1.5, sm: 2, md: 3 }, height: 1 }}>
                    <ProfileCard2 {...testimonial.profile} />
                    <Typography>{testimonial.review}</Typography>
                  </Stack>
                </GraphicsCard>
              ))}
            </Marquee>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

```

  

File: src/blocks/testimonial/Testimonial8.tsx
```tsx
'use client';

import { useRef } from 'react';

// @mui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileCard2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SlickArrows from '@/components/SlickArrows';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 8  ***************************/

export default function Testimonial8({ heading, caption, testimonials }: TestimonialProps): JSX.Element {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    initialSlide: 0
  };

  const slickStyle = { '& .slick-track': { display: 'flex' }, '& .slick-slide': { height: 'auto', ' > div': { height: 1, px: 0.75 } } };
  const boxPadding = { xs: 3, sm: 4, md: 5 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 4 }}>
          <Typeset {...{ heading, caption }} />
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <SlickArrows sliderRef={sliderRef} />
          </Box>
        </Stack>
        <Stack sx={{ ...slickStyle, gap: { xs: 3, sm: 2 } }}>
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <GraphicsCard key={index} sx={{ height: 1 }}>
                <Stack sx={{ justifyContent: 'space-between', height: 1, gap: { xs: 2, sm: 4, md: 5 }, p: boxPadding }}>
                  <Grid container spacing={{ xs: 2, sm: 3, md: 5 }} sx={{ alignItems: 'flex-end' }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="h3" sx={{ '&:before': { content: 'open-quote' }, '&:after': { content: 'close-quote' } }}>
                        {testimonial.title}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        {testimonial.review}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center', justifyContent: 'space-between' }}>
                    <ProfileCard2 {...testimonial.profile} sx={{ gap: { xs: 0.5, sm: 1.5 } }} />
                    {testimonial.image && <GraphicsImage image={testimonial.image} />}
                  </Stack>
                </Stack>
              </GraphicsCard>
            ))}
          </Slider>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <SlickArrows sliderRef={sliderRef} />
          </Box>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/testimonial/Testimonial5.tsx
```tsx
'use client';

import { useRef } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileCard3 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SlickArrows from '@/components/SlickArrows';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 5  ***************************/

export default function Testimonial5({ heading, caption, testimonials }: TestimonialProps): JSX.Element {
  const theme = useTheme();

  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    swipeToSlide: true,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '300px',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl - 1,
        settings: { slidesToShow: 2, centerPadding: '200px' }
      },
      {
        breakpoint: theme.breakpoints.values.lg - 1,
        settings: { slidesToShow: 2, centerPadding: '100px' }
      },
      {
        breakpoint: theme.breakpoints.values.md - 1,
        settings: { slidesToShow: 1, centerPadding: '200px' }
      },
      {
        breakpoint: theme.breakpoints.values.sm - 1,
        settings: { slidesToShow: 1, centerPadding: '32px' }
      }
    ]
  };

  const slickStyle = {
    '& .slick-track': { display: 'flex' },
    '& .slick-slide': {
      opacity: 0.6,
      height: 'auto',
      ' > div': { height: 1, px: 0.75 },
      '&.slick-current, &.slick-center, &.slick-active': { opacity: 1 }
    }
  };

  const boxPadding = { xs: 3, md: 5 };

  return (
    <Stack sx={{ gap: { xs: 3, sm: 4 }, py: SECTION_COMMON_PY, overflowX: 'hidden' }}>
      <ContainerWrapper>
        <motion.div
          initial={{ opacity: 0, y: 5, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
      </ContainerWrapper>
      <Stack sx={{ ...slickStyle, gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <GraphicsCard key={index} sx={{ height: 1 }}>
                <Stack sx={{ height: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Stack sx={{ gap: 2.5, p: boxPadding, alignItems: 'center', '& .MuiBox-root svg': { opacity: 0.3 } }}>
                    {testimonial.image && <GraphicsImage image={testimonial.image} />}
                    <Typography
                      variant="h3"
                      sx={{ '&:before': { content: 'open-quote' }, '&:after': { content: 'close-quote' }, textAlign: 'center' }}
                    >
                      {testimonial.review}
                    </Typography>
                  </Stack>
                  <ProfileCard3 {...testimonial.profile} background sx={{ borderRadius: { xs: 6, sm: 8, md: 10 }, width: 1 }} />
                </Stack>
              </GraphicsCard>
            ))}
          </Slider>
        </motion.div>
        <SlickArrows sliderRef={sliderRef} />
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/testimonial/Testimonial7.tsx
```tsx
'use client';

import { useRef } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileCard2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import Rating from '@/components/Rating';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Graphic1 from '@/images/graphics/Graphic1';

// @types
import { TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 7  ***************************/

export default function Testimonial7({ heading, primaryBtn, testimonials }: TestimonialProps): JSX.Element {
  const theme = useTheme();

  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 1, centerPadding: '110px' }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 1, centerPadding: '120px' }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1, centerPadding: '45px' }
      }
    ]
  };

  const slickStyle = {
    px: { xs: 3, sm: 6 },
    position: 'relative',
    zIndex: 1,
    '& .slick-slider': { height: { xs: 324, sm: 510 } },
    '& .slick-list': {
      height: { xs: '324px !important', sm: '510px !important' },
      my: -0.2,
      width: { xs: 295, sm: 463, md: 'unset' },
      mx: 'auto'
    },
    '& .slick-slide': {
      opacity: 0.6,
      transition: 'all 0.2s ease',
      '&.slick-current, &.slick-center, &.slick-active': { opacity: 1, transition: 'all 0.2s ease ' },
      my: 0.2
    }
  };
  const boxPadding = { xs: 2.5, sm: 3, md: 4 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
        <Grid size={{ md: 6 }}>
          <GraphicsCard sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', width: 1, height: 1, left: 0, top: 0, opacity: 0.6 }}>
              <Graphic1 />
            </Box>
            <Stack sx={slickStyle}>
              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testimonial, index) => (
                  <GraphicsCard key={index} sx={{ bgcolor: 'grey.300' }}>
                    <Stack sx={{ gap: { xs: 1, sm: 1.5 }, p: boxPadding }}>
                      <Rating {...{ rate: testimonial.ratings }} />
                      <Typography
                        variant="h3"
                        sx={{ color: 'text.secondary', '&:before': { content: 'open-quote' }, '&:after': { content: 'close-quote' } }}
                      >
                        {testimonial.review}
                      </Typography>
                    </Stack>
                    <ProfileCard2
                      {...testimonial.profile}
                      background
                      sx={{ p: { xs: 1.25, sm: 2 }, borderRadius: { xs: 6, sm: 10 }, bgcolor: 'grey.400', gap: { xs: 0.75, sm: 1.25 } }}
                    />
                  </GraphicsCard>
                ))}
              </Slider>
            </Stack>
          </GraphicsCard>
        </Grid>
        <Grid size={{ md: 6 }}>
          <GraphicsCard sx={{ height: 1 }}>
            <Stack sx={{ alignItems: 'start', justifyContent: 'center', gap: { xs: 5, sm: 6 }, p: { xs: 3, sm: 4, md: 5 }, height: 1 }}>
              <Typography variant="h2">{heading}</Typography>
              {primaryBtn && <Button variant="contained" size="large" {...primaryBtn} />}
            </Stack>
          </GraphicsCard>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/testimonial/Testimonial3.tsx
```tsx
'use client';

import { useRef } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileCard2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import Rating from '@/components/Rating';
import SlickArrows from '@/components/SlickArrows';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 3  ***************************/

export default function Testimonial3({ heading, caption, testimonials }: TestimonialProps): JSX.Element {
  const theme = useTheme();

  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const slickStyle = { '& .slick-track': { display: 'flex' }, '& .slick-slide': { height: 'auto', ' > div': { height: 1, px: 0.75 } } };
  const boxPadding = { xs: 2.5, sm: 3, md: 4 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 4 }}>
            <Typeset {...{ heading, caption }} />
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <SlickArrows sliderRef={sliderRef} />
            </Box>
          </Stack>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.8
          }}
        >
          <Stack sx={{ ...slickStyle, gap: { xs: 3, sm: 2 } }}>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <GraphicsCard key={index} sx={{ height: 1 }}>
                  <Stack sx={{ justifyContent: 'space-between', height: 1 }}>
                    <Stack sx={{ gap: 1.5, p: boxPadding }}>
                      <Rating {...{ rate: testimonial.ratings }} />
                      <Typography variant="h3" sx={{ '&:before': { content: 'open-quote' }, '&:after': { content: 'close-quote' } }}>
                        {testimonial.review}
                      </Typography>
                    </Stack>
                    <ProfileCard2 {...testimonial.profile} background sx={{ p: boxPadding, borderRadius: { xs: 6, sm: 8, md: 10 } }} />
                  </Stack>
                </GraphicsCard>
              ))}
            </Slider>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <SlickArrows sliderRef={sliderRef} />
            </Box>
          </Stack>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/testimonial/Testimonial11.tsx
```tsx
'use client';

// @mui
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 11  ***************************/

export default function Testimonial11({ heading, testimonials }: TestimonialProps) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, headingProps: { sx: { textAlign: 'center' } } }} />
        <Grid container spacing={1.5}>
          {testimonials.map((testimonial, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6 }}>
              <GraphicsCard sx={{ borderRadius: { xs: 4, sm: 6 }, height: 1 }}>
                <Stack sx={{ justifyContent: 'space-between', gap: 3, p: { xs: 2, sm: 2.5, md: 3 }, height: 1 }}>
                  <Typography sx={{ color: 'text.secondary' }}>{testimonial.review}</Typography>
                  <Stack direction="row" sx={{ gap: 1 }}>
                    <Avatar
                      src={GetImagePath(testimonial.profile.avatar)}
                      sx={{ width: 48, height: 48 }}
                      alt="Avatar"
                      imgProps={{ loading: 'lazy' }}
                    />
                    <Stack sx={{ gap: 0.5, justifyContent: 'center' }}>
                      <Typography variant="subtitle1">{testimonial.profile.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {testimonial.profile.role}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </GraphicsCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/testimonial/Testimonial2.tsx
```tsx
'use client';

import { useRef, useState } from 'react';

// @mui
import Grid from '@mui/material/Grid2';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard, VideoCard } from '@/components/cards';
import ModalCard from '@/components/cards/ModalCard';
import { ProfileCard2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import Rating from '@/components/Rating';
import SlickArrows from '@/components/SlickArrows';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 2  ***************************/

export default function Testimonial2({ heading, caption, testimonials }: TestimonialProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string>('');

  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    initialSlide: 0
  };

  const slickStyle = { '& .slick-track': { display: 'flex' }, '& .slick-slide': { height: 'auto', ' > div': { height: 1, px: 0.75 } } };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3
            }}
          >
            <Typeset {...{ heading, caption }} />
          </motion.div>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
            >
              <SlickArrows sliderRef={sliderRef} />
            </motion.div>
          </Box>
        </Stack>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Stack sx={{ ...slickStyle, gap: 2 }}>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <GraphicsCard key={index} sx={{ height: 1 }}>
                  <Grid container sx={{ height: 1 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <VideoCard
                        bgImage={testimonial.bgImage}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          setVideoSrc(testimonial.videoSrc || '');
                          setIsOpen(true);
                          sliderRef?.current?.slickPause();
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Stack sx={{ alignItems: 'start', justifyContent: 'space-between', height: 1, gap: 3, p: { xs: 3, sm: 4, md: 5 } }}>
                        <Stack sx={{ gap: 1.5 }}>
                          <Rating rate={testimonial.ratings} />
                          <Typography variant="h4" sx={{ color: 'text.secondary' }}>
                            {testimonial.review}
                          </Typography>
                        </Stack>
                        <ProfileCard2 {...testimonial.profile} background />
                      </Stack>
                    </Grid>
                  </Grid>
                </GraphicsCard>
              ))}
            </Slider>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <SlickArrows sliderRef={sliderRef} />
            </Box>
          </Stack>
        </motion.div>
      </Stack>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          sliderRef?.current?.slickPlay();
        }}
        aria-labelledby="video-modal"
        aria-describedby="modal for video"
      >
        <ModalCard sx={{ width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' }, height: 'auto', bgcolor: 'transparent' }}>
          <video playsInline width="100%" height="100%" style={{ display: 'flex', objectFit: 'cover' }} controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            <track src="captions.vtt" kind="captions" srcLang="en" label="English captions" />
          </video>
        </ModalCard>
      </Modal>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/testimonial/Testimonial1.tsx
```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { ProfileCard2 } from '@/components/cards/profile-card';
import Rating from '@/components/Rating';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TestimonialDataProps, TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - REVIEW  ***************************/

function Review({ review }: { review: string }) {
  return (
    <Typography variant="h4" sx={{ color: 'text.secondary', '&:before': { content: 'open-quote' }, '&:after': { content: 'close-quote' } }}>
      {review}
    </Typography>
  );
}

/***************************  TESTIMONIAL - PROFILE  ***************************/

function ReviewCard({ ratings, review, profile }: TestimonialDataProps) {
  return (
    <GraphicsCard>
      <Stack sx={{ gap: 3, p: { xs: 2.5, sm: 3, md: 4 } }}>
        <Stack sx={{ gap: 1.5 }}>
          <Rating {...(ratings && { rate: ratings })} />
          <Review {...{ review }} />
        </Stack>
        <ProfileCard2 {...profile} />
      </Stack>
    </GraphicsCard>
  );
}

/***************************  TESTIMONIAL - 1  ***************************/

// threshold - adjust threshold as needed
const options = { root: null, rootMargin: '0px', threshold: 0.6 };

export default function Testimonial1({ heading, caption, testimonials, link }: TestimonialProps): JSX.Element {
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isFocusWithin = useFocusWithin();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Handle video play/pause based on intersection with the viewport
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (videoRef.current && !isPlaying) {
          videoRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error('Autoplay was prevented:', error);
            });
        }
      } else {
        if (videoRef.current && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    });
  };

  const observer =
    typeof window !== 'undefined' && 'IntersectionObserver' in window ? new IntersectionObserver(handleIntersection, options) : null;
  const videoElement = videoRef.current;

  useEffect(() => {
    if (videoElement) {
      observer?.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer?.unobserve(videoElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.8
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard sx={{ height: 1 }}>
                <Stack sx={{ justifyContent: 'space-between', height: 1 }}>
                  <GraphicsCard sx={{ height: 1, '&.MuiPaper-root, & video': { maxHeight: { xs: 'auto', md: 330 } } }}>
                    <video
                      playsInline
                      ref={videoRef}
                      width="100%"
                      height="100%"
                      style={{ display: 'flex', objectFit: 'cover' }}
                      controls
                      preload="metadata"
                      autoPlay={false}
                      loop={false}
                      muted={true}
                    >
                      <source src={testimonials[0].videoSrc} type="video/mp4" />
                    </video>
                  </GraphicsCard>
                  <Stack sx={{ gap: 3, p: { xs: 2.5, sm: 4, md: 5 }, alignItems: 'flex-start' }}>
                    <Review review={testimonials[0].review} />
                    <ProfileCard2 {...testimonials[0].profile} background />
                  </Stack>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack sx={{ gap: 1.5 }}>
              {testimonials[1] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3
                  }}
                >
                  <ReviewCard {...testimonials[1]} />
                </motion.div>
              )}
              {testimonials[2] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3
                  }}
                >
                  <ReviewCard {...testimonials[2]} />
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.3
                }}
              >
                <GraphicsCard
                  sx={{
                    ...(isFocusWithin && {
                      '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main)
                    })
                  }}
                >
                  <Link
                    component={NextLink}
                    variant="h5"
                    rel="noopener noreferrer"
                    aria-label="Learn more"
                    {...link}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1.5,
                      borderRadius: { xs: 6, sm: 8, md: 10 },
                      p: { xs: 1.5, md: 3.75 },
                      '&.Mui-focusVisible': { outline: 'none' },
                      '&:hover': { bgcolor: 'grey.200' },
                      WebkitTapHighlightColor: 'transparent',
                      ...(link?.sx && { ...link.sx })
                    }}
                  >
                    {link?.children}
                    <SvgIcon name="tabler-arrow-narrow-right" size={40} stroke={1} />
                  </Link>
                </GraphicsCard>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/testimonial/Testimonial10.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Rating from '@/components/Rating';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 10  ***************************/

export default function Testimonial10({ heading, caption, testimonials }: TestimonialProps): JSX.Element {
  const theme = useTheme();

  const gc = theme.palette.background.default;
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(146.46% 31.88% at 50% 29.86%, ${alpha(gc, 0)} 0%, ${gc} 100%)`
      : `radial-gradient(146.46% 68.12% at 50% 29.86%, ${alpha(gc, 0)} 0%, ${gc} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption, stackProps: { sx: { maxWidth: { xs: 550, md: 700 }, textAlign: 'center', mx: 'auto' } } }} />
        <Masonry
          columns={{ xs: 2, sm: 3 }}
          spacing={{ xs: 1, sm: 1.5 }}
          sx={{
            position: 'relative',
            '&:before': { position: 'absolute', content: `' '`, left: 0, bottom: 0, width: 1, height: 1, background: gradient }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <GraphicsCard key={index} sx={{ borderRadius: { xs: 4, md: 6 } }}>
              <Stack sx={{ justifyContent: 'space-between', height: 1, gap: 3, p: { xs: 1.5, md: 2 } }}>
                <Rating {...{ rate: testimonial.ratings, starSize: 16 }} />
                <Stack sx={{ gap: 1 }}>
                  <Typography variant="subtitle1">{testimonial.title}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{testimonial.review}</Typography>
                </Stack>
                <Stack sx={{ gap: 0.5 }}>
                  <Typography variant="subtitle1">{testimonial.profile.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {testimonial.profile.role}
                  </Typography>
                </Stack>
              </Stack>
            </GraphicsCard>
          ))}
        </Masonry>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/testimonial/Testimonial4.tsx
```tsx
'use client';

import { useRef } from 'react';

// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileCard2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import Rating from '@/components/Rating';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TestimonialProps } from '@/types/testimonial';

/***************************  TESTIMONIAL - 4 ***************************/

export default function Testimonial4({ heading, caption, testimonials }: TestimonialProps): JSX.Element {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    initialSlide: 0
  };

  const slickStyle = {
    '& .slick-slider': { mb: { md: 4.5 } },
    '& .slick-track': { display: 'flex' },
    '& .slick-slide': { height: 'auto', ' > div': { height: 1, px: 0.75 } },
    '& .slick-dots': { bottom: -32 },
    '& .slick-dots li': { width: 12, height: 12, mx: 0.5 },
    '& .slick-dots li button': { width: 12, height: 12, p: 0 },
    '& .slick-dots li button:before': { fontSize: 14, width: 12, height: 12, color: 'primary.main' },
    '& .slick-dots li.slick-active button:before': { color: 'primary.main', opacity: 1 }
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        <Box sx={{ ...slickStyle, pb: 4.5 }}>
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <GraphicsCard key={index} sx={{ height: 1 }}>
                <Stack sx={{ justifyContent: 'center', gap: { xs: 3, sm: 4, md: 7 }, height: 1, p: { xs: 3, sm: 4, md: 5 } }}>
                  <Stack sx={{ gap: { xs: 2, sm: 3 } }}>
                    <Rating {...{ rate: testimonial.ratings }} sx={{ justifyContent: 'center' }} />
                    <Typography
                      variant="h3"
                      sx={{
                        color: 'text.secondary',
                        '&:before': { content: 'open-quote' },
                        '&:after': { content: 'close-quote' },
                        textAlign: 'center'
                      }}
                    >
                      {testimonial.review}
                    </Typography>
                  </Stack>
                  <ProfileCard2 {...testimonial.profile} sx={{ justifyContent: 'center' }} />
                </Stack>
              </GraphicsCard>
            ))}
          </Slider>
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/team/Team8.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { TeamProps } from '@/types/team';

/***************************  TEAM - 8  ***************************/

export default function Team8({ heading, caption, members }: TeamProps): JSX.Element {
  const theme = useTheme();

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'progressive',
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '95px',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg - 1,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: theme.breakpoints.values.md - 1,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: theme.breakpoints.values.sm - 1,
        settings: { slidesToShow: 1, centerPadding: '45px' }
      }
    ]
  };

  return (
    <Stack sx={{ gap: { xs: 3, sm: 4 }, py: SECTION_COMMON_PY }}>
      <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
      <Slider {...settings}>
        {members.map((item, index) => (
          <Box key={index} sx={{ px: 0.75 }}>
            <GraphicsCard
              sx={{
                height: index % 2 === 0 ? { xs: 339, md: 403 } : { xs: 269, md: 350 },
                position: 'relative',
                borderRadius: { xs: 4, md: 6 },
                filter: 'grayscale(1)'
              }}
            >
              {item.badge && (
                <Tooltip title={item.badge}>
                  <Avatar
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      background: 'transparent',
                      position: 'absolute',
                      right: 16,
                      top: 16
                    }}
                  >
                    <SvgIcon name="tabler-award" color="text.primary" />
                  </Avatar>
                </Tooltip>
              )}
              <CardMedia image={GetImagePath(item.avatar)} sx={{ height: 1 }} />
            </GraphicsCard>
            <Typeset
              {...{
                heading: item.name,
                caption: item.role,
                stackProps: { sx: { textAlign: 'center', gap: { xs: 0.25, md: 0.5 }, mt: 1.5 } },
                headingProps: { variant: 'h6' },
                captionProps: { variant: 'body1' }
              }}
            />
          </Box>
        ))}
      </Slider>
    </Stack>
  );
}

```

  

File: src/blocks/team/Team7.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { TeamProps } from '@/types/team';

/***************************  TEAM - 7  ***************************/

export default function Team7({ heading, caption, members }: TeamProps): JSX.Element {
  const theme = useTheme();
  const blurEffect = { bgcolor: alpha(theme.palette.grey[200], 0.4), backdropFilter: 'blur(8px)' };
  const cardRadius = { xs: 3, sm: 4, md: 6 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {members.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
              <CardMedia
                image={GetImagePath(item.avatar)}
                sx={{
                  bgcolor: alpha(theme.palette.grey[600], 0.6),
                  height: { xs: 220, sm: 300, md: 350 },
                  position: 'relative',
                  borderRadius: cardRadius,
                  filter: 'grayscale(1)',
                  '&:hover': { filter: 'grayscale(0)', '.MuiStack-root': { visibility: 'visible' } }
                }}
              >
                <Stack
                  sx={{
                    gap: { xs: 0.5, sm: 1 },
                    position: 'absolute',
                    borderRadius: cardRadius,
                    bottom: { xs: 4, md: 8 },
                    left: '50%',
                    width: { xs: 'calc(100% - 8px)', md: 'calc(100% - 16px)' },
                    p: { xs: 0.75, md: 2 },
                    textAlign: 'center',
                    visibility: 'hidden',
                    transform: 'translateX(-50%)',
                    ...blurEffect
                  }}
                >
                  <Typography variant="h4">{item.name}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{item.role}</Typography>
                </Stack>
              </CardMedia>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/team/Team4.tsx
```tsx
'use client';

import { useRef } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SlickArrows from '@/components/SlickArrows';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { TeamProps } from '@/types/team';

/***************************  TEAM - 4  ***************************/

export default function Team4({ heading, caption, members }: TeamProps): JSX.Element {
  const theme = useTheme();
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'progressive',
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md - 1,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: theme.breakpoints.values.sm - 1,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        <Slider ref={sliderRef} {...settings}>
          {members.map((item, index) => (
            <Box key={index} sx={{ px: 0.75 }}>
              <GraphicsCard
                bgImage={GetImagePath(item.avatar)}
                sx={{ bgcolor: alpha(theme.palette.grey[600], 0.6), height: { xs: 200, sm: 260, md: 300 }, position: 'relative' }}
              >
                {item.badge && (
                  <Chip
                    label={
                      typeof item.badge === 'string' ? (
                        <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5 }}>
                          <SvgIcon name="tabler-award" color="common.white" />
                          <Typography variant="body2" noWrap sx={{ color: 'common.white', textOverflow: 'ellipsis' }}>
                            {item.badge}
                          </Typography>
                        </Stack>
                      ) : (
                        item.badge
                      )
                    }
                    sx={{
                      bgcolor: alpha(theme.palette.grey[100], 0.4),
                      border: '1px solid',
                      borderColor: 'divider',
                      position: 'absolute',
                      bottom: 16,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      '.MuiChip-label': { p: 1 }
                    }}
                  />
                )}
              </GraphicsCard>
              <Typeset
                {...{
                  heading: item.name,
                  caption: item.role,
                  stackProps: { sx: { textAlign: 'center', gap: 0.5, mt: { xs: 1.5, sm: 2 } } },
                  headingProps: { variant: 'h3' },
                  captionProps: { variant: 'body1' }
                }}
              />
            </Box>
          ))}
        </Slider>
        <SlickArrows sliderRef={sliderRef} />
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/team/Team2.tsx
```tsx
'use client';

import { useRef } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import { ThemeMode } from '@/config';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TeamProps } from '@/types/team';

/***************************  TEAM - 2  ***************************/

export default function Team2({ heading, caption, members }: TeamProps): JSX.Element {
  const theme = useTheme();

  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'progressive',
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '95px',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md - 1,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: theme.breakpoints.values.sm - 1,
        settings: { slidesToShow: 1, centerPadding: '45px' }
      }
    ]
  };

  const gc1 = theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 50 : 900];
  const gc2 = theme.palette.primary.darker;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <Typeset {...{ heading, caption }} />
        <Box sx={{ position: 'relative' }}>
          <Slider ref={sliderRef} {...settings}>
            {members.map((item, index) => (
              <Box key={index} sx={{ px: { xs: 0.25, sm: 0.5, md: 0.75 } }}>
                <GraphicsCard
                  bgImage={item.avatar}
                  sx={{ bgcolor: alpha(theme.palette.grey[600], 0.6), height: { xs: 250, sm: 300, md: 410 } }}
                  overLay={`linear-gradient(360deg, ${alpha(gc1, 0.5)} 0%, ${alpha(gc2, 0)} 100%)`}
                >
                  <Typeset
                    {...{
                      heading: item.name,
                      caption: item.role,
                      stackProps: { sx: { justifyContent: 'flex-end', gap: 0.75, height: 1, p: 3 } },
                      headingProps: {
                        variant: 'h5',
                        sx: { ...(theme.palette.mode === ThemeMode.LIGHT && { color: 'background.default' }) }
                      },
                      captionProps: {
                        variant: 'body1',
                        sx: { ...(theme.palette.mode === ThemeMode.LIGHT && { color: 'background.default' }) }
                      }
                    }}
                  />
                </GraphicsCard>
              </Box>
            ))}
          </Slider>
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/team/Team5.tsx
```tsx
'use client';

import React, { useRef } from 'react';

// @mui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import GraphicsImage from '@/components/GraphicsImage';
import SlickArrows from '@/components/SlickArrows';
import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { TeamProps } from '@/types/team';
import { ProfileProps } from '@/types/testimonial';

/***************************  TEAM - 5  ***************************/

export default function Team5({ heading, caption, members, image, actionBtn, description }: TeamProps): JSX.Element {
  const sliderRef = useRef<Slider | null>(null);
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const downMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'progressive',
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    initialSlide: 0
  };

  const sliceItem = downSM ? 4 : downMD ? 6 : 8;

  // Function to split an array into chunks of a specified size
  const chunkArray = (arr: ProfileProps[], sliceItem: number) =>
    arr.reduce((acc, _, i) => (i % sliceItem === 0 ? [...acc, arr.slice(i, i + sliceItem)] : acc), [] as ProfileProps[][]);

  const chunkedMembers = chunkArray(members, sliceItem);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 5, md: 10 } }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 3 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack sx={{ height: 1, alignItems: 'flex-start', justifyContent: 'space-between', gap: 4 }}>
              <Typeset {...{ heading, caption }} />
              {actionBtn && <Button variant="outlined" size="large" {...actionBtn} />}
            </Stack>
          </Grid>
          {image && (
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <GraphicsImage sx={{ width: 1, height: { xs: 308, sm: 339, md: 435 }, borderRadius: { xs: 6, md: 8 } }} image={image} />
                <Typography variant="body2">{description}</Typography>
              </Stack>
            </Grid>
          )}
        </Grid>
        <Stack sx={{ gap: { xs: 3, md: 4 } }}>
          <Slider ref={sliderRef} {...settings}>
            {chunkedMembers.map((membersData, chunkIndex) => (
              <Box key={chunkIndex}>
                <Grid key={chunkIndex} container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ pr: 2 }}>
                  {membersData.map((member, index) => (
                    <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
                      <Stack direction="row" sx={{ justifyContent: 'start', alignItems: 'center', gap: 1 }}>
                        <Avatar
                          src={GetImagePath(member.avatar)}
                          sx={{ width: 55, height: 55 }}
                          alt="Avatar"
                          imgProps={{ loading: 'lazy' }}
                        />
                        <Typeset
                          {...{
                            heading: member.name,
                            caption: member.role,
                            stackProps: { sx: { gap: 0.5, maxWidth: { xs: '65%', sm: '70%', md: '80%' } } },
                            headingProps: { variant: 'h4', noWrap: true, sx: { textOverflow: 'ellipsis' } },
                            captionProps: { variant: 'body1', noWrap: true, sx: { textOverflow: 'ellipsis' } }
                          }}
                        />
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </Slider>
          <SlickArrows sliderRef={sliderRef} />
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/team/Team3.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import { ThemeMode } from '@/config';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TeamProps } from '@/types/team';

/***************************  TEAM - 3  ***************************/

export default function Team3({ heading, caption, members }: TeamProps): JSX.Element {
  const theme = useTheme();

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'progressive',
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md - 1,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: theme.breakpoints.values.sm - 1,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: '60px' }
      }
    ]
  };

  const socialBtnSX = { sx: { bgcolor: 'grey.200', p: 0.5 }, component: NextLink };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY, overflowX: 'hidden' }}>
      <Stack sx={{ gap: 4, pb: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: 5, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Box
          sx={{
            position: 'relative',
            '.slick-dots': { bottom: -40 },
            '.slick-dots li button:before': { opacity: 1, color: 'grey.200', fontSize: 8 },
            '.slick-dots li.slick-active button:before, .slick-dots li button:hover:before': { color: 'primary.main' }
          }}
        >
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Slider {...settings}>
              {members.map((item, index) => (
                <Box key={index} sx={{ px: 0.75 }}>
                  <GraphicsCard>
                    <Stack>
                      <GraphicsCard
                        bgImage={item.avatar}
                        sx={{ bgcolor: alpha(theme.palette.grey[600], 0.6), borderRadius: 0, height: { xs: 185, sm: 240, md: 300 } }}
                        overLay={`linear-gradient(360deg, ${alpha(theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 50 : 900], 0.5)} 0%, ${alpha(theme.palette.primary.darker, 0)} 100%)`}
                      />
                      <GraphicsCard sx={{ mt: { xs: -3, sm: -5 }, zIndex: 1 }}>
                        <Stack sx={{ alignItems: 'center', gap: { xs: 0.5, sm: 1, md: 1.5 }, p: { xs: 2.5, sm: 3, md: 4 } }}>
                          <Typeset
                            {...{
                              heading: item.name,
                              caption: item.role,
                              stackProps: { sx: { alignItems: 'center', gap: 0.75 } },
                              headingProps: { variant: 'h4', noWrap: true, sx: { textAlign: 'center', textOverflow: 'ellipsis' } },
                              captionProps: { variant: 'body1', noWrap: true, sx: { textAlign: 'center', textOverflow: 'ellipsis' } }
                            }}
                          />
                          <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5 }}>
                            <IconButton
                              {...socialBtnSX}
                              href={item.socialLinks?.linkedin || ''}
                              rel="noopener noreferrer"
                              aria-label="linkedin"
                            >
                              <SvgIcon name="tabler-filled-linkedin" type={IconType.FILL} />
                            </IconButton>
                            <IconButton
                              {...socialBtnSX}
                              href={item.socialLinks?.instagram || ''}
                              rel="noopener noreferrer"
                              aria-label="instagram"
                            >
                              <SvgIcon name="tabler-filled-instagram" type={IconType.FILL} />
                            </IconButton>
                            <IconButton
                              {...socialBtnSX}
                              href={item.socialLinks?.facebook || ''}
                              rel="noopener noreferrer"
                              aria-label="facebook"
                            >
                              <SvgIcon name="tabler-filled-facebook" type={IconType.FILL} />
                            </IconButton>
                          </Stack>
                        </Stack>
                      </GraphicsCard>
                    </Stack>
                  </GraphicsCard>
                </Box>
              ))}
            </Slider>
          </motion.div>
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/team/Team6.tsx
```tsx
import React from 'react';

// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ProfileCard3 from '@/components/cards/profile-card/ProfileCard3';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TeamProps } from '@/types/team';

/***************************  TEAM - 6  ***************************/

export default function Team6({ heading, caption, members, image, actionBtn, description }: TeamProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack sx={{ gap: 4, alignItems: 'center' }}>
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
          {actionBtn && <Button variant="outlined" size="large" {...actionBtn} />}
        </Stack>
        <Stack sx={{ gap: 1 }}>
          {image && (
            <GraphicsImage sx={{ width: 1, height: { xs: 225, sm: 294, md: 396 }, borderRadius: { xs: 6, sm: 8, md: 10 } }} image={image} />
          )}
          <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {members.map((item, index) => (
            <Grid
              key={index}
              // For avatar responsive size
              sx={{ '& .MuiAvatar-root': { width: { xs: 80, sm: 100, md: 120 }, height: { xs: 80, sm: 100, md: 120 } } }}
              size={{ xs: 6, sm: 3 }}
            >
              <ProfileCard3 {...item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/team/Team1.tsx
```tsx
// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';

// @project
import { ProfileCard1 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import Typeset from '@/components/Typeset';

// @types
import { TeamProps } from '@/types/team';

/***************************  TEAM - 1  ***************************/

export default function Team1({ heading, caption, members }: TeamProps) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {members.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
              <ProfileCard1 {...item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/small-hero/SmallHero5.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import SvgIcon from '@/components/SvgIcon';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @third-party
import Marquee from 'react-fast-marquee';

// @assets
import Circles from '@/images/Circles';

// @types
import { SmallHeroProps2 } from '@/types/small-hero';

interface Props extends SmallHeroProps2 {
  list: string[];
  heading: string;
  caption: string;
}

/***************************  SMALL HERO - 5  ***************************/

export default function SmallHero5({ exploreBtn, list, heading, caption }: Props) {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: { xs: 342, sm: 402, md: 600 },
        py: SECTION_COMMON_PY
      }}
    >
      <Circles />
      <Stack sx={{ py: { xs: 2, sm: 5, md: 6 }, width: 1, alignItems: 'center', position: 'absolute' }}>
        <Stack sx={{ gap: { xs: 1.5, sm: 2, md: 3 }, textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h1" sx={{ width: { xs: 343, sm: 558, md: 709 } }}>
            {heading}
          </Typography>
          <Typography variant="h6" sx={{ width: { xs: 343, sm: 516 } }}>
            {caption}
          </Typography>
        </Stack>
        {exploreBtn && <Button color="primary" variant="contained" sx={{ mt: { ...{ xs: 3, sm: 4, md: 5 } } }} {...exploreBtn} />}
        <Stack direction="row" sx={{ alignItems: 'center', width: 1, mt: { xs: 4, sm: 5, md: 8 } }}>
          <Marquee pauseOnHover autoFill {...(theme.direction === ThemeDirection.RTL && { direction: 'right' })}>
            {list.map((item, index) => (
              <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', mx: 0.75 }} key={index}>
                <Chip
                  label={
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  }
                  icon={<SvgIcon name="tabler-rosette-discount-check" stroke={1} color="text.secondary" />}
                  sx={{
                    p: { xs: 1, md: 1.5 },
                    bgcolor: 'grey.100',
                    borderRadius: 4,
                    '& .MuiChip-label': { p: 0, pl: 1 },
                    '& svg.tabler-rosette-discount-check': { width: { xs: 16, sm: 24 }, height: { xs: 16, sm: 24 } }
                  }}
                />
                <Stack sx={{ gap: 0.5, position: 'absolute', right: -12, bgcolor: 'grey.100', borderRadius: 6.25 }}>
                  <Box sx={{ width: 12, height: 12, bgcolor: 'background.default', borderRadius: 6.25 }}></Box>
                  <Box sx={{ width: 12, height: 12, bgcolor: 'background.default', borderRadius: 6.25 }}></Box>
                </Stack>
              </Box>
            ))}
          </Marquee>
        </Stack>
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/small-hero/SmallHero3.tsx
```tsx
// @next
import NextLink from 'next/link';

// @mui
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { SmallHeroProps } from '@/types/small-hero';

/***************************  SMALL HERO - 3  ***************************/

export default function SmallHero3({ chip, headLine, captionLine, exploreBtn }: SmallHeroProps) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ alignItems: 'start', gap: { xs: 1.5, md: 4 } }}>
        {chip && (
          <Chip
            label={
              typeof chip.label === 'string' ? (
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {chip.label}
                  {chip.link && (
                    <Link
                      component={NextLink}
                      variant="caption"
                      color="primary.main"
                      {...chip.link}
                      underline="hover"
                      sx={{ '&:hover': { color: 'primary.dark' } }}
                    />
                  )}
                </Typography>
              ) : (
                chip.label
              )
            }
            sx={{ bgcolor: 'grey.100' }}
          />
        )}

        <Stack direction="row" sx={{ justifyContent: 'space-between', flexWrap: { xs: 'wrap', md: 'unset' }, width: 1, gap: 3 }}>
          <Stack sx={{ gap: 1.5 }}>
            {typeof headLine === 'string' ? <Typography variant="h1">{headLine}</Typography> : headLine}
            {captionLine && (
              <Typography variant="h6" sx={{ color: 'text.secondary', width: { md: '85%' } }}>
                {captionLine}
              </Typography>
            )}
          </Stack>
          {exploreBtn && (
            <Stack direction="row" sx={{ alignItems: 'end', justifyContent: 'center', minWidth: 'fit-content' }}>
              <Button size="large" variant="outlined" {...exploreBtn} />
            </Stack>
          )}
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/small-hero/SmallHero6.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GradientFab from '@/components/GradientFab';
import SvgIcon from '@/components/SvgIcon';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Wave from '@/images/graphics/Wave';
import DrawnArrow from '@/images/graphics/DrawnArrow';

// @types
import { SpriteIconProps } from '@/types/icon';
import { SmallHeroProps } from '@/types/small-hero';

interface ListItem {
  title: string;
  icon: SpriteIconProps;
}
interface Props extends SmallHeroProps {
  tagline?: string;
  list: ListItem[];
  primaryBtn: ButtonProps;
}

/***************************  SMALL HERO - 6  ***************************/

export default function SmallHero6({ headLine, tagline, list, primaryBtn }: Props) {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard>
        <Stack sx={{ p: { xs: 3, sm: 4 }, alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
            {tagline}
          </Typography>
          <Wave />
          <Box sx={{ mt: { xs: 2, md: 3 } }}>{headLine}</Box>
          <Stack direction="row" sx={{ justifyContent: 'center', mt: 5, position: 'relative' }}>
            <Box
              component="span"
              sx={{
                position: 'absolute',
                top: '-10px',
                left: '-25px',
                display: 'flex',
                ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' })
              }}
            >
              <DrawnArrow />
            </Box>
            <OutlinedInput
              placeholder="Enter your email address"
              endAdornment={<Button color="primary" size="small" variant="contained" sx={{ px: 4 }} {...primaryBtn} />}
              slotProps={{ input: { 'aria-label': 'Email address' } }}
              sx={{
                ...theme.typography.caption2,
                color: 'secondary.main',
                p: 0.5,
                whiteSpace: 'nowrap',
                '& .MuiOutlinedInput-input': { p: '6px 20px' },
                '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
              }}
            />
          </Stack>
        </Stack>
      </GraphicsCard>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={{ xs: 1, sm: 3 }} sx={{ justifyContent: 'center' }}>
          {list.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4, md: 3 }}>
              <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center', '& .gradient-fab': { display: 'contents' } }}>
                <GradientFab
                  type="round"
                  icon={<SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />}
                />
                <Stack sx={{ justifyContent: 'center' }}>
                  <Typography sx={{ color: 'text.secondary' }}>{item.title}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/small-hero/SmallHero7.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { SmallHeroProps2 } from '@/types/small-hero';

interface Props extends SmallHeroProps2 {
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  image: ImageCommonProps;
}

/***************************  SMALL HERO - 7  ***************************/

export default function SmallHero7({ heading, caption, primaryBtn, image }: Props) {
  const theme = useTheme();

  const grey100 = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(94.19% 5.81% at 50% 26.18%, ${alpha(grey100, 0)} 0%, ${alpha(grey100, 0.7)} 100%)`
      : `radial-gradient(94.19% 94.19% at 50% 26.18%, ${alpha(grey100, 0)} 0%, ${alpha(grey100, 0.7)} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <GraphicsCard sx={{ height: 1 }}>
            <Stack sx={{ alignItems: 'flex-start', justifyContent: 'space-between', gap: 3, p: { xs: 3, sm: 4, md: 5 }, height: 1 }}>
              <Typeset {...{ heading, caption, stackProps: { sx: { gap: { xs: 1.5, sm: 2 } } }, headingProps: { variant: 'h1' } }} />
              {primaryBtn && <Button variant="contained" size="small" {...primaryBtn} />}
            </Stack>
          </GraphicsCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <GraphicsCard sx={{ height: 1 }}>
            <Stack sx={{ justifyContent: 'end', minHeight: { xs: 241, sm: 385, md: 432 } }}>
              <GraphicsImage
                image={image}
                sx={{ height: { xs: 241, sm: 320, md: 380 }, backgroundPositionY: 'top', backgroundPosition: 'left' }}
              >
                <Box sx={{ height: 1, background: gradient }} />
              </GraphicsImage>
            </Stack>
          </GraphicsCard>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/small-hero/SmallHero2.tsx
```tsx
// @next
import NextLink from 'next/link';

// @mui
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { SmallHeroProps } from '@/types/small-hero';

/***************************  SMALL HERO - 2  ***************************/

export default function SmallHero2({ chip, headLine, captionLine }: SmallHeroProps) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ alignItems: 'center', gap: { xs: 1.5, md: 3 } }}>
        {chip && (
          <Chip
            label={
              typeof chip.label === 'string' ? (
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {chip.label}
                  {chip.link && (
                    <Link
                      component={NextLink}
                      variant="caption"
                      color="primary.main"
                      {...chip.link}
                      underline="hover"
                      sx={{ '&:hover': { color: 'primary.dark' } }}
                    />
                  )}
                </Typography>
              ) : (
                chip.label
              )
            }
            sx={{ bgcolor: 'grey.100' }}
          />
        )}
        {headLine}
        {captionLine && (
          <Typography variant="h6" align="center" sx={{ color: 'text.secondary', width: { xs: 320, sm: 350, md: 500 } }}>
            {captionLine}
          </Typography>
        )}
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/pricing/Pricing9.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FeatureProps, Pricing5PlanProps } from '@/types/pricing';

interface Props {
  heading?: string;
  caption?: string;
  plans: Pricing5PlanProps[];
  features: FeatureProps[];
}

/***************************  PRICING - 9  ***************************/

export default function Pricing9({ heading, caption, features, plans }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        {heading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
          </motion.div>
        )}
        <Grid container spacing={1.5} sx={{ height: 1 }}>
          {plans.map((plan, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: plan.animationDelay }}
                style={{ height: '100%' }}
              >
                <GraphicsCard sx={{ height: 1, ...(plan.active && { border: '1px solid', borderColor: 'primary.main' }) }}>
                  <Box sx={{ pt: { xs: 4, sm: 5, md: 8 }, px: { xs: 2, md: 5 }, pb: { xs: 2, sm: 3, md: 5.25 }, height: 1 }}>
                    <Stack sx={{ gap: 5, height: 1 }}>
                      <Stack sx={{ gap: { xs: 2, md: 3 } }}>
                        <Stack sx={{ gap: { xs: 1, sm: 1.5 }, textAlign: 'center' }}>
                          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                            {plan.title}
                          </Typography>
                          <Stack>
                            <Typography component="div" variant="h1">
                              ${plan.offerPrice && plan.offerPrice > 0 ? plan.offerPrice : plan.price}
                            </Typography>
                            {!!(plan.offerPrice && plan.offerPrice > 0) && (
                              <Typography variant="h3" sx={{ color: 'grey.700', textDecoration: 'line-through' }}>
                                ${plan.price}
                              </Typography>
                            )}
                          </Stack>
                        </Stack>
                      </Stack>
                      <Stack sx={{ height: 1, justifyContent: 'space-between', gap: { xs: 3, sm: 4, md: 5 } }}>
                        <Stack sx={{ gap: 5 }}>
                          <Divider>
                            <Chip
                              label={
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                  {plan.featureTitle}
                                </Typography>
                              }
                              size="small"
                              sx={{ bgcolor: 'grey.200', '.MuiChip-label': { py: 0.25, px: 1.5 } }}
                            />
                          </Divider>
                          <Stack sx={{ gap: { xs: 0.75, md: 1 } }}>
                            {features.map((item, index) => {
                              const active = plan.featuresID.includes(item.id);
                              return (
                                <Stack key={index} direction="row" sx={{ gap: 1.25, alignItems: 'center' }}>
                                  <Avatar sx={{ bgcolor: 'grey.100', width: 24, height: 24 }}>
                                    <SvgIcon
                                      name={active ? 'tabler-check' : 'tabler-x'}
                                      type={IconType.STROKE}
                                      size={16}
                                      twoToneColor={theme.palette.grey[100]}
                                      color={active ? 'secondary.darker' : 'text.secondary'}
                                      stroke={2}
                                    />
                                  </Avatar>
                                  <Typography
                                    variant={active ? 'subtitle1' : 'body1'}
                                    sx={{ color: active ? 'secondary.darker' : 'text.secondary' }}
                                  >
                                    {item.label}
                                  </Typography>
                                </Stack>
                              );
                            })}
                          </Stack>
                        </Stack>
                        <Stack sx={{ gap: 0.75 }}>
                          {plan.contentLink && (
                            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', mb: 1.25 }}>
                              {plan.content}&nbsp;
                              <Link component={NextLink} color="primary.main" sx={{ textDecoration: 'underline' }} {...plan.contentLink} />
                            </Typography>
                          )}
                          <ButtonAnimationWrapper>
                            <Button
                              variant={plan.active ? 'contained' : 'outlined'}
                              sx={{ ...(!plan.link && { mb: { sm: 3.25, md: 3.75 } }) }}
                              fullWidth
                              {...plan.exploreLink}
                            />
                          </ButtonAnimationWrapper>
                          {plan.link && (
                            <Typography variant="subtitle1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                              or
                              <Link
                                component={NextLink}
                                variant="subtitle1"
                                color="primary.main"
                                {...plan.link}
                                underline="hover"
                                sx={{ marginLeft: 0.5 }}
                              />
                            </Typography>
                          )}
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </GraphicsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/pricing/Pricing7.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { SpriteIconProps } from '@/types/icon';
import { Pricing3PlanProps } from '@/types/pricing';

interface BenefitListProps {
  icon: SpriteIconProps;
  title: string;
  description: string;
}

interface Props {
  heading: string;
  caption: string;
  defaultUnit: string;
  plans: Pricing3PlanProps;
  benefitList: BenefitListProps[];
}

/***************************  PRICING - 7  ***************************/

export default function Pricing7({ heading, caption, defaultUnit, plans, benefitList }: Props): JSX.Element {
  const [unit, setUnit] = useState<string>('yearly');

  const buttonSX = { border: '1px solid transparent' };
  const containedButton = { bgcolor: 'grey.200', border: '1px solid', borderColor: 'grey.400' };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        <Stack direction="row" sx={{ justifyContent: 'center' }}>
          <Box
            rel="noopener noreferrer"
            aria-label="price-btn"
            sx={{ display: 'flex', gap: 1, p: 0.5, bgcolor: 'grey.100', borderRadius: 25 }}
          >
            <Button
              fullWidth
              variant={unit === 'monthly' ? 'outlined' : 'text'}
              sx={{
                ...buttonSX,
                ...(unit === 'monthly' && { ...containedButton }),
                color: 'text.primary',
                '&.MuiButtonGroup-firstButton': { borderRadius: 25, borderRightColor: 'grey.400' }
              }}
              onClick={() => setUnit('monthly')}
            >
              Monthly
            </Button>
            <Button
              fullWidth
              variant={unit === 'yearly' ? 'outlined' : 'text'}
              sx={{
                ...buttonSX,
                ...(unit === 'yearly' && { ...containedButton }),
                color: 'text.primary',
                '&.MuiButtonGroup-lastButton': { borderRadius: 25 }
              }}
              onClick={() => setUnit('yearly')}
            >
              Yearly
            </Button>
          </Box>
        </Stack>
        <Grid container spacing={{ xs: 1.5, md: 3 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ justifyContent: 'space-between', gap: { xs: 3, md: 4 }, p: { xs: 2, sm: 3, md: 5 }, height: 1 }}>
                <Box>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: { xs: 4, md: 5 } }}
                  >
                    <Stack sx={{ gap: { xs: 1, md: 1.5 } }}>
                      <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center' }}>
                        <Avatar variant="rounded" sx={{ bgcolor: 'grey.300', borderRadius: 4, width: 48, height: 48 }}>
                          <SvgIcon name="tabler-chart-histogram" size={16} stroke={2} />
                        </Avatar>
                        <Typography variant="h4">{plans.title}</Typography>
                      </Stack>
                      <Typography sx={{ color: 'text.secondary' }}>{plans.description}</Typography>
                    </Stack>
                    {plans.price && (
                      <Stack direction="row" sx={{ alignItems: 'flex-end', '& > *:last-child': { mb: 0.75 } }}>
                        <Typography variant="h1">${unit === 'yearly' ? plans.price.yearly : plans.price.monthly}</Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                          {defaultUnit}
                        </Typography>
                      </Stack>
                    )}
                  </Stack>
                  <Divider sx={{ my: { xs: 2, md: 3 } }} />
                  <Grid container rowSpacing={1} columnSpacing={4}>
                    {plans.features.map((item, index) => (
                      <Grid key={index} size={{ xs: 12, sm: 6 }}>
                        <Stack direction="row" sx={{ gap: 1.5 }}>
                          <Box sx={{ minWidth: 24 }}>
                            <SvgIcon name="custom-check" type={IconType.CUSTOM} color="primary.main" />
                          </Box>
                          <Stack direction="row" sx={{ gap: { xs: 0.5, md: 1 }, flexWrap: 'wrap' }}>
                            <Typography>{item.label}</Typography>
                            {item.badge && (
                              <Chip
                                label={
                                  <Typography variant="caption" color="secondary" sx={{ fontWeight: 400 }}>
                                    {item.badge}
                                  </Typography>
                                }
                                size="small"
                                sx={{ bgcolor: 'grey.300', '.MuiChip-label': { py: 0.25, px: 1 } }}
                              />
                            )}
                          </Stack>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Button variant={plans.active ? 'contained' : 'outlined'} sx={{ px: 1.25 }} {...plans.exploreLink} />
              </Stack>
            </GraphicsCard>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack sx={{ gap: { md: 2 } }}>
              {benefitList.map((item, index) => (
                <Stack key={index} direction="row" sx={{ py: { xs: 1.5, sm: 2, md: 3 }, gap: { xs: 1.5, sm: 2 } }}>
                  {item.icon && (
                    <Avatar variant="rounded" sx={{ borderRadius: 4, width: 60, height: 60, bgcolor: 'grey.100' }}>
                      <SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                    </Avatar>
                  )}
                  <Typeset
                    {...{
                      heading: item.title,
                      caption: item.description,
                      headingProps: { variant: 'h3' },
                      captionProps: { variant: 'body1' },
                      stackProps: { sx: { gap: 1 } }
                    }}
                  />
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/small-hero/SmallHero1.tsx
```tsx
// @next
import NextLink from 'next/link';

// @mui
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { SmallHeroProps } from '@/types/small-hero';

/***************************  SMALL HERO - 1  ***************************/

export default function SmallHero1({ chip, headLine, captionLine }: SmallHeroProps) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard>
        <Box sx={{ p: { xs: 3, sm: 5, md: 8 } }}>
          <Stack sx={{ alignItems: 'center', gap: { xs: 1.5, md: 3 } }}>
            {chip && (
              <Chip
                label={
                  typeof chip.label === 'string' ? (
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {chip.label}
                      {chip.link && (
                        <Link
                          component={NextLink}
                          variant="caption"
                          color="primary.main"
                          {...chip.link}
                          underline="hover"
                          sx={{ '&:hover': { color: 'primary.dark' } }}
                        />
                      )}
                    </Typography>
                  ) : (
                    chip.label
                  )
                }
                sx={{ bgcolor: 'background.default' }}
              />
            )}
            {headLine}
            {captionLine && (
              <Typography variant="h6" align="center" sx={{ color: 'text.secondary', width: { xs: 320, sm: 350, md: 500 } }}>
                {captionLine}
              </Typography>
            )}
          </Stack>
        </Box>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/pricing/Pricing6.tsx
```tsx
// @mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FeatureProps, Pricing4PlanProps } from '@/types/pricing';

interface Props {
  heading: string;
  caption?: string;
  features: FeatureProps[];
  plans: Pricing4PlanProps[];
}

/***************************  PRICING - 6  ***************************/

export default function Pricing6({ heading, caption, features, plans }: Props): JSX.Element {
  const cellSX = { p: { xs: 1.5, sm: 2.5, md: 3 } };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Stack sx={{ gap: 1.5 }}>
          <Grid container spacing={1.5} sx={{ justifyContent: 'flex-end', ml: { md: -3 } }}>
            {plans.map((plan, index) => (
              <Grid key={index} size={{ xs: 12, sm: 4, md: 3 }}>
                <GraphicsCard
                  sx={{
                    height: 1,
                    position: 'relative',
                    ...(plan.active && { bgcolor: 'grey.300', overflow: 'unset', border: '1px solid', borderColor: 'primary.main' })
                  }}
                >
                  {plan.active && (
                    <Chip
                      label={<Typography variant="caption">{plan.active}</Typography>}
                      size="small"
                      sx={{
                        bgcolor: 'primary.lighter',
                        border: '1px solid',
                        borderColor: 'primary.main',
                        '& .MuiChip-label': { px: 1.5, pb: 0, pt: 0.25 },
                        position: 'absolute',
                        left: '50%',
                        transform: 'translate(-50%,-50%)'
                      }}
                    />
                  )}
                  <Stack
                    sx={{ p: { xs: 2, md: 4 }, gap: { xs: 2, sm: 2.5 }, alignItems: 'center', height: 1, justifyContent: 'space-between' }}
                  >
                    {plan.icon && (
                      <Avatar variant="rounded" sx={{ width: 32, height: 32, bgcolor: 'primary.lighter' }}>
                        <SvgIcon {...(typeof plan.icon === 'string' ? { name: plan.icon } : { ...plan.icon })} />
                      </Avatar>
                    )}
                    <Stack sx={{ gap: 0.5, alignItems: 'center' }}>
                      <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                        {plan.title}
                      </Typography>
                      <Stack direction="row" sx={{ alignItems: 'flex-end', justifyContent: 'center', gap: 0.5 }}>
                        <Typography component="div" variant="h3" sx={{ mb: { xs: 0.25, sm: 0.5 } }}>
                          {plan.defaultUnit}
                        </Typography>
                        {plan.price && <Typography variant="h2">{plan.price}</Typography>}
                      </Stack>
                      <Typography variant="body2" noWrap>
                        {plan.description}
                      </Typography>
                    </Stack>
                    <Button fullWidth variant={plan.active ? 'contained' : 'outlined'} sx={{ px: 1.25 }} {...plan.exploreLink} />
                  </Stack>
                </GraphicsCard>
              </Grid>
            ))}
          </Grid>
          <Table sx={{ borderCollapse: 'separate' }}>
            <TableHead>
              <TableRow sx={{ '& .MuiTableCell-root': { borderBottom: '1px solid', borderColor: 'divider' } }}>
                <TableCell colSpan={12} sx={{ ...cellSX }}>
                  <Typography variant="h6">Features</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow
                  key={index}
                  sx={{ '& .MuiTableCell-root': { borderColor: 'divider', borderRight: 'none', borderLeft: 'none', borderRadius: 0 } }}
                >
                  <TableCell sx={{ width: { xs: 195, sm: 210, md: 282 }, ...cellSX }}>
                    <Typography variant="subtitle2">
                      {feature.label}
                      <Tooltip title={feature.label} aria-label={feature.label}>
                        <Box
                          component="span"
                          sx={{ lineHeight: 0, cursor: 'pointer', display: 'inline-block', ml: 0.5, verticalAlign: 'text-top' }}
                        >
                          <SvgIcon name="tabler-help-circle" size={16} stroke={2} />
                        </Box>
                      </Tooltip>
                    </Typography>
                  </TableCell>
                  {plans.map((plan, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      sx={{
                        ...cellSX,
                        ...(index % 2 === 1 && { backgroundColor: 'grey.100' }),
                        '& .MuiBox-root svg': {
                          display: 'inline-block'
                        }
                      }}
                    >
                      {plan.features.includes(feature.id) ? (
                        <SvgIcon name="custom-check" type={IconType.CUSTOM} stroke={2} color="primary.main" />
                      ) : (
                        <SvgIcon name="tabler-minus" stroke={2} />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/pricing/Pricing8.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FeatureProps, Pricing5PlanProps } from '@/types/pricing';

interface Props {
  heading: string;
  caption?: string;
  defaultUnit?: string;
  plans: Pricing5PlanProps[];
  features: FeatureProps[];
}

interface PricingCardProps extends Pricing5PlanProps {
  features: FeatureProps[];
}

/***************************  PRICING - BUTTON COMPONENT  ***************************/

function BottonComponent({ onClick, children }: ButtonProps) {
  return (
    <Button
      variant="outlined"
      rel="noopener noreferrer"
      aria-label="count"
      sx={{
        borderRadius: 3,
        bgcolor: 'grey.200',
        '&:hover': { bgcolor: 'grey.200' },
        borderColor: 'grey.400',
        color: 'text.primary',
        width: 56,
        height: 40
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

/***************************  PRICING - CARD  ***************************/

function PricingCard({
  title,
  description,
  active,
  price,
  quantityTitle,
  exploreLink,
  featureTitle,
  featuresID,
  count,
  features
}: PricingCardProps) {
  const theme = useTheme();

  const [counts, setCounts] = useState<number>(count || 1);

  // Handler to increment unit count
  const handleIncrement = () => setCounts(counts + 1);

  // Handler to decrement unit count with a minimum limit of 1
  const handleDecrement = () => setCounts(Math.max(counts - 1, 1));

  return (
    <GraphicsCard
      sx={{
        borderRadius: { xs: 4, sm: 6 },
        height: 1,
        position: 'relative',
        ...(active && { overflow: 'unset', border: '1px solid', borderColor: 'primary.main' })
      }}
    >
      {active && (
        <Chip
          label={<Typography variant="caption">{active}</Typography>}
          size="small"
          sx={{
            bgcolor: 'primary.lighter',
            border: '1px solid',
            borderColor: 'primary.main',
            '& .MuiChip-label': { px: 1.5, pb: 0, pt: 0.25 },
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%,-50%)'
          }}
        />
      )}
      <Stack sx={{ gap: { xs: 2, sm: 4 }, height: 1, py: { xs: 3, sm: 5 }, px: 3 }}>
        <Typeset
          {...{
            heading: title,
            caption: description,
            stackProps: { sx: { textAlign: 'center' } },
            headingProps: { variant: 'h3' },
            captionProps: { variant: 'body1' }
          }}
        />

        {price === 0 ? (
          <Typography variant="h2" sx={{ textAlign: 'center', color: 'primary.main' }}>
            Free
          </Typography>
        ) : (
          <Stack direction="row" sx={{ alignItems: 'flex-end', justifyContent: 'center' }}>
            <Typography component="div" variant="h3" sx={{ color: 'primary.main', mb: { xs: 0.25, sm: 0.5 } }}>
              $
            </Typography>
            <Typography variant="h2" sx={{ color: 'primary.main' }}>
              {price}
            </Typography>
          </Stack>
        )}

        <Stack sx={{ gap: 2, height: 1, justifyContent: 'space-between' }}>
          <Stack sx={{ gap: 1, alignItems: 'center', textAlign: 'center' }}>
            {quantityTitle}
            {price !== 0 && (
              <Stack
                direction="row"
                sx={{
                  p: 0.25,
                  bgcolor: 'background.default',
                  borderRadius: 3,
                  width: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <BottonComponent onClick={handleDecrement}>
                  <Box sx={{ maxHeight: 24 }}>
                    <SvgIcon name="tabler-minus" color="text.primary" />
                  </Box>
                </BottonComponent>
                <Typography component="div" variant="h5">
                  {counts}
                </Typography>
                <BottonComponent onClick={handleIncrement}>
                  <Box sx={{ maxHeight: 24 }}>
                    <SvgIcon name="tabler-plus" color="text.primary" />
                  </Box>
                </BottonComponent>
              </Stack>
            )}
          </Stack>
          <ButtonAnimationWrapper>
            <Button variant={active ? 'contained' : 'outlined'} fullWidth {...exploreLink} />
          </ButtonAnimationWrapper>
        </Stack>

        <Stack sx={{ gap: { xs: 1, sm: 2 } }}>
          <Typography sx={{ color: 'text.secondary' }}>{featureTitle}</Typography>
          <Stack sx={{ gap: { xs: 0.5, sm: 1 } }}>
            {features.map((item, index) => (
              <Stack key={index} direction="row" sx={{ gap: 1.25, alignItems: 'center', opacity: !featuresID.includes(item.id) ? 0.5 : 1 }}>
                <Avatar sx={{ bgcolor: 'grey.100', width: 24, height: 24 }}>
                  <SvgIcon
                    name="tabler-check"
                    type={IconType.STROKE}
                    size={16}
                    twoToneColor={theme.palette.grey[100]}
                    color="primary.main"
                    stroke={2}
                  />
                </Avatar>
                <Typography sx={{ color: 'text.secondary' }}>{item.label}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  PRICING - 8  ***************************/

export default function Pricing8({ heading, caption, defaultUnit, features, plans }: Props): JSX.Element {
  const [unit, setUnit] = useState<string>(defaultUnit || 'monthly');

  const buttonSX = { border: '1px solid transparent' };
  const containedButton = { bgcolor: 'grey.200', border: '1px solid', borderColor: 'grey.400' };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Stack direction={{ sm: 'row' }} sx={{ gap: 2, alignItems: { xs: 'center', sm: 'flex-end' }, justifyContent: 'space-between' }}>
            <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: { xs: 'center', sm: 'start' } } } }} />
            <Box
              rel="noopener noreferrer"
              aria-label="price-btn"
              sx={{ display: 'flex', gap: 1, p: 0.5, bgcolor: 'grey.100', borderRadius: 25 }}
            >
              <Button
                fullWidth
                variant={unit === 'monthly' ? 'outlined' : 'text'}
                sx={{
                  ...buttonSX,
                  ...(unit === 'monthly' && { ...containedButton }),
                  color: 'text.primary',
                  '&.MuiButtonGroup-firstButton': { borderRadius: 25, borderRightColor: 'grey.400' }
                }}
                onClick={() => setUnit('monthly')}
              >
                Monthly
              </Button>
              <Button
                fullWidth
                variant={unit === 'yearly' ? 'outlined' : 'text'}
                sx={{
                  ...buttonSX,
                  ...(unit === 'yearly' && { ...containedButton }),
                  color: 'text.primary',
                  '&.MuiButtonGroup-lastButton': { borderRadius: 25 }
                }}
                onClick={() => setUnit('yearly')}
              >
                Yearly
              </Button>
            </Box>
          </Stack>
        </motion.div>
        <Grid container spacing={{ xs: 2, md: 1.5 }} sx={{ height: 1 }}>
          {plans.map((plan, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: plan.animationDelay
                }}
                style={{ height: '100%' }}
              >
                <PricingCard {...plan} features={features} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/pricing/Pricing5.tsx
```tsx
'use client';

import { useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { Pricing3PlanProps } from '@/types/pricing';

interface PlanProps extends Omit<Pricing3PlanProps, 'price'> {
  price?: number | { monthly: number; yearly: number };
}

interface Props {
  heading: string;
  caption?: string;
  defaultUnit?: string;
  user?: string;
  plans: PlanProps[];
}

/***************************  PRICING - 5  ***************************/

export default function Pricing5({ heading, caption, defaultUnit, plans, user }: Props): JSX.Element {
  const theme = useTheme();
  const [unit, setUnit] = useState<string>('yearly');

  const buttonSX = {
    py: 0.25,
    px: 1.5,
    border: '1px solid transparent',
    ...theme.typography.caption,
    '&.MuiButton-outlined': { py: 0.25, px: 1.5 }
  };
  const containedButton = { bgcolor: 'grey.200', borderColor: 'grey.400' };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        <Grid container spacing={1.5} sx={{ height: 1 }}>
          {plans.map((plan, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: plan.animationDelay }}
                style={{ height: '100%' }}
              >
                <GraphicsCard
                  sx={{ height: 1, ...(plan.active && { border: '1px solid', borderColor: 'primary.main', bgcolor: 'grey.200' }) }}
                >
                  <Box sx={{ pt: { xs: 4, sm: 5, md: 8 }, px: { xs: 2, md: 5 }, pb: { xs: 2, sm: 3, md: 5.25 }, height: 1 }}>
                    <Stack sx={{ gap: { xs: 3, sm: 6, md: 8 }, height: 1 }}>
                      <Stack sx={{ gap: { xs: 2, md: 3 } }}>
                        <Stack sx={{ gap: { xs: 1, sm: 1.5 }, textAlign: 'center' }}>
                          <Typography variant="subtitle1">{plan.title}</Typography>
                          <Typography component="div" variant="h3">
                            {plan.price && typeof plan.price === 'object'
                              ? ` $${unit === 'yearly' ? plan.price.yearly : plan.price.monthly} ${defaultUnit} `
                              : typeof plan.price === 'number'
                                ? `$${plan.price} ${defaultUnit}`
                                : plan.description}
                          </Typography>
                        </Stack>
                        <Stack direction="row" sx={{ gap: 1.25, alignItems: 'center', justifyContent: 'center' }}>
                          <SvgIcon name="tabler-users" size={16} color="text.secondary" stroke={2} />
                          <Typography sx={{ color: 'text.secondary' }}>{user}</Typography>
                        </Stack>
                      </Stack>
                      <Stack sx={{ height: 1, justifyContent: 'space-between', gap: { xs: 3, sm: 7.25, md: 8 } }}>
                        <Stack sx={{ gap: 5 }}>
                          <Divider>
                            {plan.plan ? (
                              <Chip
                                label={
                                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                    {plan.plan}
                                  </Typography>
                                }
                                size="small"
                                sx={{ bgcolor: 'grey.200', '.MuiChip-label': { py: 0.25, px: 1.5 } }}
                              />
                            ) : (
                              <Box
                                rel="noopener noreferrer"
                                aria-label="price-btn"
                                sx={{ display: 'flex', gap: 0.5, p: 0.5, bgcolor: 'grey.200', borderRadius: 25 }}
                              >
                                <Button
                                  fullWidth
                                  size="small"
                                  variant={unit === 'monthly' ? 'outlined' : 'text'}
                                  sx={{
                                    ...buttonSX,
                                    ...(unit === 'monthly' && { ...containedButton }),
                                    color: 'text.primary',
                                    '&.MuiButtonGroup-firstButton': {
                                      borderRadius: 25,
                                      ...(unit === 'monthly' && { borderRightColor: 'grey.400' })
                                    }
                                  }}
                                  onClick={() => setUnit('monthly')}
                                >
                                  Monthly
                                </Button>
                                <Button
                                  fullWidth
                                  size="small"
                                  variant={unit === 'yearly' ? 'outlined' : 'text'}
                                  sx={{
                                    ...buttonSX,
                                    ...(unit === 'yearly' && { ...containedButton }),
                                    color: 'text.primary',
                                    '&.MuiButtonGroup-lastButton': { borderRadius: 25 }
                                  }}
                                  onClick={() => setUnit('yearly')}
                                >
                                  Yearly
                                </Button>
                              </Box>
                            )}
                          </Divider>
                          <Stack sx={{ gap: { xs: 0.75, md: 1 } }}>
                            {plan.features.map((item, index) => (
                              <Stack key={index} direction="row" sx={{ gap: 1.25, alignItems: 'center' }}>
                                <Avatar sx={{ bgcolor: 'grey.100', width: 16, height: 16 }}>
                                  <SvgIcon
                                    name="tabler-check"
                                    type={IconType.STROKE}
                                    size={16}
                                    twoToneColor={theme.palette.grey[100]}
                                    color="text.secondary"
                                  />
                                </Avatar>
                                <Typography sx={{ color: 'text.secondary' }}>{item.label}</Typography>
                              </Stack>
                            ))}
                          </Stack>
                        </Stack>
                        <Stack sx={{ gap: 0.75 }}>
                          <ButtonAnimationWrapper>
                            <Button
                              variant={plan.active ? 'contained' : 'outlined'}
                              sx={{ ...(!plan.link && { mb: { sm: 3.25, md: 3.75 } }) }}
                              fullWidth
                              {...plan.exploreLink}
                            />
                          </ButtonAnimationWrapper>
                          {plan.link && (
                            <Typography variant="subtitle1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                              or{' '}
                              <Link
                                role="button"
                                component={NextLink}
                                variant="subtitle1"
                                color="primary.main"
                                {...plan.link}
                                underline="hover"
                              />
                            </Typography>
                          )}
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </GraphicsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/small-hero/SmallHero4.tsx
```tsx
// @next
import NextLink from 'next/link';

// @mui
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { SmallHeroProps2 } from '@/types/small-hero';

interface Props extends SmallHeroProps2 {
  heading: string;
  image: ImageCommonProps;
  caption: string;
}

/***************************  SMALL HERO - 4  ***************************/

export default function SmallHero4({ chip, heading, caption, exploreBtn, image }: Props) {
  const boxPadding = { xs: 3, sm: 4, md: 5 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 3, sm: 2.25, md: 3 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ alignItems: 'flex-start', justifyContent: 'space-between', gap: { xs: 3 }, height: 1 }}>
            <Stack sx={{ alignItems: 'start', gap: { xs: 2, sm: 3 } }}>
              {chip && (
                <Chip
                  label={
                    typeof chip.label === 'string' ? (
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {chip.label}
                        {chip.link && (
                          <Link
                            component={NextLink}
                            variant="caption"
                            color="primary.main"
                            {...chip.link}
                            underline="hover"
                            sx={{ '&:hover': { color: 'primary.dark' } }}
                          />
                        )}
                      </Typography>
                    ) : (
                      chip.label
                    )
                  }
                  sx={{ bgcolor: 'grey.100' }}
                />
              )}
              <Typeset {...{ heading, caption, stackProps: { sx: { gap: 1.5 } }, headingProps: { variant: 'h1' } }} />
            </Stack>
            {exploreBtn && <Button color="primary" size="large" variant="contained" {...exploreBtn} />}
          </Stack>
        </Grid>
        {image && (
          <Grid size={{ xs: 12, sm: 6 }}>
            <GraphicsCard>
              <Box sx={{ pl: boxPadding, pt: boxPadding, height: 1 }}>
                <GraphicsImage
                  image={image}
                  sx={{
                    height: { xs: 253, sm: 375, md: 452 },
                    backgroundPositionX: 'left',
                    backgroundPositionY: 'top',
                    borderTopLeftRadius: { xs: 12 }
                  }}
                />
              </Box>
            </GraphicsCard>
          </Grid>
        )}
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/pricing/Pricing4.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { Pricing3PlanProps } from '@/types/pricing';

interface Props {
  heading: string;
  caption: string;
  defaultUnit: string;
  plans: Pricing3PlanProps[];
}

/***************************  PRICING - 4  ***************************/

export default function Pricing4({ heading, caption, defaultUnit, plans }: Props): JSX.Element {
  const [unit, setUnit] = useState<string>('yearly');

  const plan1 = plans[0];
  const plan2 = plans[1];
  const buttonSX = { border: '1px solid transparent' };
  const containedButton = { bgcolor: 'grey.200', border: '1px solid', borderColor: 'grey.400' };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Stack direction="row" sx={{ justifyContent: 'center' }}>
            <Box
              rel="noopener noreferrer"
              aria-label="price-btn"
              sx={{ display: 'flex', gap: 1, p: 0.5, bgcolor: 'grey.100', borderRadius: 25 }}
            >
              <Button
                fullWidth
                variant={unit === 'monthly' ? 'outlined' : 'text'}
                sx={{
                  ...buttonSX,
                  ...(unit === 'monthly' && { ...containedButton }),
                  color: 'text.primary',
                  '&.MuiButtonGroup-firstButton': { borderRadius: 25, borderRightColor: 'grey.400' }
                }}
                onClick={() => setUnit('monthly')}
              >
                Monthly
              </Button>
              <Button
                fullWidth
                variant={unit === 'yearly' ? 'outlined' : 'text'}
                sx={{
                  ...buttonSX,
                  ...(unit === 'yearly' && { ...containedButton }),
                  color: 'text.primary',
                  '&.MuiButtonGroup-lastButton': { borderRadius: 25 }
                }}
                onClick={() => setUnit('yearly')}
              >
                Yearly
              </Button>
            </Box>
          </Stack>
        </motion.div>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard sx={{ height: 1 }}>
                <Stack sx={{ p: { xs: 2, sm: 3, md: 5 }, height: 1, justifyContent: 'space-between', gap: { xs: 3, md: 4 } }}>
                  <Box>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: { xs: 4, md: 5 } }}
                    >
                      <Stack sx={{ gap: { xs: 1, md: 1.5 } }}>
                        <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center' }}>
                          <Avatar variant="rounded" sx={{ bgcolor: 'grey.300', borderRadius: 4, width: 48, height: 48 }}>
                            <SvgIcon name="tabler-chart-histogram" size={16} stroke={2.15} />
                          </Avatar>
                          <Typography variant="h4">{plan1.title}</Typography>
                        </Stack>
                        <Typography sx={{ color: 'text.secondary' }}>{plan1.description}</Typography>
                      </Stack>
                      {plan1.price && (
                        <Stack direction="row" sx={{ alignItems: 'flex-end', '& > *:last-child': { mb: 0.75 } }}>
                          <Typography variant="h1">${unit === 'yearly' ? plan1.price.yearly : plan1.price.monthly}</Typography>
                          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                            {defaultUnit}
                          </Typography>
                        </Stack>
                      )}
                    </Stack>
                    <Divider sx={{ my: { xs: 2, md: 3 } }} />
                    <Grid container rowSpacing={1} columnSpacing={4}>
                      {plan1.features.map((item, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6 }}>
                          <Stack direction="row" sx={{ gap: 1 }}>
                            <Box sx={{ minWidth: 24 }}>
                              <SvgIcon name="custom-check" type={IconType.CUSTOM} color="primary.main" />
                            </Box>
                            <Stack direction="row" sx={{ gap: { xs: 0.5, md: 1 }, flexWrap: 'wrap' }}>
                              <Typography>{item.label}</Typography>
                              {item.badge && (
                                <Chip
                                  label={
                                    <Typography variant="caption" color="secondary" sx={{ fontWeight: 400 }}>
                                      {item.badge}
                                    </Typography>
                                  }
                                  size="small"
                                  sx={{ bgcolor: 'grey.300', '.MuiChip-label': { py: 0.25, px: 1 } }}
                                />
                              )}
                            </Stack>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <ButtonAnimationWrapper style={{ width: '100%' }}>
                    <Button fullWidth variant={plan1.active ? 'contained' : 'outlined'} sx={{ px: 1.25 }} {...plan1.exploreLink} />
                  </ButtonAnimationWrapper>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.7
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard sx={{ height: 1 }}>
                <Stack sx={{ p: { xs: 2, sm: 3, md: 5 }, height: 1, justifyContent: 'space-between', gap: { xs: 3, md: 4 } }}>
                  <Box>
                    <Stack sx={{ gap: { xs: 1, md: 1.5 } }}>
                      <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center' }}>
                        <Avatar variant="rounded" sx={{ bgcolor: 'grey.300', borderRadius: 4, width: 48, height: 48 }}>
                          <SvgIcon name="tabler-chart-histogram" size={16} stroke={2.15} />
                        </Avatar>
                        <Typography variant="h4">{plan2.title}</Typography>
                      </Stack>
                      <Typography sx={{ color: 'text.secondary' }}>{plan2.description}</Typography>
                    </Stack>
                    <Divider sx={{ my: { xs: 2, md: 3 } }} />
                    <Grid container rowSpacing={1} columnSpacing={4}>
                      {plan2.features.map((item, index) => (
                        <Grid key={index} size={12}>
                          <Stack direction="row" sx={{ gap: 1 }}>
                            <SvgIcon name="custom-check" type={IconType.CUSTOM} color="primary.main" />
                            <Typography>{item.label}</Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <ButtonAnimationWrapper>
                    <Button fullWidth variant={plan2.active ? 'contained' : 'outlined'} sx={{ px: 1.25 }} {...plan2.exploreLink} />
                  </ButtonAnimationWrapper>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/process/Process7.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stack from '@mui/material/Stack';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { SpriteIconProps } from '@/types/icon';
import { ProcessCardProps } from '@/types/process';

/***************************  PROCESS - STEPPER  ***************************/

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 38,
    left: 'calc(-50% + 32px)',
    right: 'calc(50% + 32px)'
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.secondary.lighter,
    borderTopWidth: 2,
    borderRadius: 1
  }
}));

function StepperCard({ cards }: { cards: ProcessCardProps[] }) {
  const CustomIcon = (icon: SpriteIconProps) => (
    <Avatar variant="rounded" sx={{ bgcolor: 'grey.100', width: 60, height: 60, borderRadius: 4, mr: 0 }}>
      <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
    </Avatar>
  );

  return (
    <Stepper activeStep={2} alternativeLabel orientation="horizontal" connector={<ColorlibConnector />}>
      {cards.map((card, index) => (
        <Step key={index} completed>
          <StepLabel StepIconComponent={() => CustomIcon(card.icon)} sx={{ py: 1 }}>
            <Typeset
              {...{
                heading: card.title,
                caption: card.description,
                headingProps: { variant: 'h4' },
                captionProps: { variant: 'body1' },
                stackProps: { sx: { gap: 1 } }
              }}
            />
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

/***************************  PROCESS - TIMELINE  ***************************/

function TimelineCard({ cards }: { cards: ProcessCardProps[] }) {
  return (
    <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 }, p: 0, mb: 0, mt: 1 }}>
      {cards.map((card, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: 'grey.100', boxShadow: 'none', p: 1.25, borderRadius: 4, my: 0.25 }}>
              <SvgIcon {...(typeof card.icon === 'string' ? { name: card.icon } : { ...card.icon })} />
            </TimelineDot>
            {cards.length - 1 !== index && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ py: 0, ...(cards.length - 1 !== index && { pb: 4 }) }}>
            <Typeset
              {...{
                heading: card.title,
                caption: card.description,
                headingProps: { variant: 'h4' },
                captionProps: { variant: 'body1' },
                stackProps: { sx: { gap: 1 } }
              }}
            />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
interface Props {
  heading: string;
  caption: string;
  image1: ImageCommonProps;
  image2: ImageCommonProps;
  cards: ProcessCardProps[];
}

/***************************  PROCESS - 7  ***************************/

export default function Process7({ heading, caption, cards, image1, image2 }: Props): JSX.Element {
  const theme = useTheme();

  const grey100 = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(80.81% 19.19% at 50% 39.56%, ${alpha(grey100, 0)} 0%, ${alpha(grey100, 0.7)} 100%)`
      : `radial-gradient(80.81% 80.81% at 50% 39.56%, ${alpha(grey100, 0)} 0%, ${alpha(grey100, 0.7)} 100%)`;

  const imageBoxRadius = { xs: 3, sm: 5 };
  const imageRadius = { borderTopLeftRadius: { xs: 12 }, borderBottomRightRadius: { xs: 24, sm: 32, md: 40 } };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        <Grid container spacing={1.5} sx={{ alignItems: 'center', height: 1 }}>
          <Grid size={{ xs: 12, sm: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6
              }}
            >
              <GraphicsCard sx={{ pl: imageBoxRadius, pt: imageBoxRadius, height: { xs: 302, sm: 297, md: 377 } }}>
                <GraphicsImage image={image1} sx={{ height: 1, backgroundPositionX: 'left', backgroundPositionY: 'top', ...imageRadius }}>
                  <Box
                    sx={{
                      width: 1,
                      height: 1,
                      ...imageRadius,
                      background: `radial-gradient(43.69% 65.53% at 14.27% 46.41%, ${alpha(theme.palette.grey[100], 0)} 0%, ${alpha(theme.palette.grey[100], 0.6)} 100%)`
                    }}
                  />
                </GraphicsImage>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.7
              }}
            >
              <GraphicsCard sx={{ height: { xs: 194, sm: 297, md: 377 } }}>
                <GraphicsImage
                  image={image2}
                  sx={{
                    height: 1,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: { xs: '56% 37px', sm: '40px 110px', md: '46px 105px' },
                    transform: { xs: 'scale(1.3)', md: 'scale(1)' }
                  }}
                >
                  <Box sx={{ height: 1, background: gradient }} />
                </GraphicsImage>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={12} sx={{ mt: { xs: 1.5, md: 3 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6
              }}
            >
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <TimelineCard {...{ cards }} />
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <StepperCard {...{ cards }} />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/pricing/Pricing3.tsx
```tsx
'use client';

// @mui
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { PlanProps } from '@/types/pricing';

interface Props {
  heading: string;
  caption?: string;
  defaultUnit?: string;
  plans: PlanProps[];
}

/***************************  PRICING - 3  ***************************/

export default function Pricing3({ heading, caption, defaultUnit, plans }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Typeset {...{ heading, caption, captionProps: { sx: { maxWidth: 750 } } }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.8
          }}
        >
          <GraphicsCard sx={{ height: 1 }}>
            <Grid container spacing={1.5} sx={{ height: 1 }}>
              {plans.map((plan, index) => (
                <Grid key={index} size={{ xs: 12, md: 4 }}>
                  <GraphicsCard sx={{ height: 1, ...(plan.active && { bgcolor: 'grey.200' }) }}>
                    <Box sx={{ p: { xs: 2.5, sm: 3, md: 4 }, height: 1 }}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                          <Stack sx={{ gap: 3, alignItems: 'flex-start' }}>
                            <SvgIcon name="custom-interface" type={IconType.CUSTOM} size={40} />
                            <Typeset
                              {...{
                                heading: plan.title,
                                caption: plan?.description,
                                stackProps: { sx: { gap: 1, minHeight: { xs: 'auto', md: 150, lg: 116 } } },
                                headingProps: { variant: 'h4' },
                                captionProps: { variant: 'body1' }
                              }}
                            />
                            <Stack direction="row" sx={{ alignItems: 'flex-end', '& > *:last-child': { mb: 0.75 } }}>
                              <Typography component="div" variant="h1">
                                ${plan.price}
                              </Typography>
                              <Typography component="div" variant="h6" sx={{ color: 'text.secondary' }}>
                                {defaultUnit}
                              </Typography>
                            </Stack>
                            <ButtonAnimationWrapper style={{ width: '100%' }}>
                              <Button
                                variant={plan.active ? 'contained' : 'outlined'}
                                {...plan.exploreLink}
                                sx={{ ...plan.exploreLink?.sx, width: { xs: 1, sm: 'auto', md: 1 } }}
                              />
                            </ButtonAnimationWrapper>
                          </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                          <Stack direction="row" spacing={{ xs: 0, sm: 4, md: 0 }} sx={{ pt: { xs: 2, sm: 6, md: 2 }, height: 1 }}>
                            <Divider flexItem orientation="vertical" sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }} />
                            <List disablePadding>
                              {plan.features.map((item, index) => (
                                <ListItem key={index} sx={{ px: 0 }}>
                                  <ListItemAvatar sx={{ minWidth: 34, height: 24 }}>
                                    <Stack
                                      sx={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        bgcolor: 'background.default'
                                      }}
                                    >
                                      <SvgIcon name="tabler-check" color="primary.main" size={16} />
                                    </Stack>
                                  </ListItemAvatar>
                                  <ListItemText primary={item.label} />
                                </ListItem>
                              ))}
                            </List>
                          </Stack>
                        </Grid>
                        <Grid size={12}>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {plan.about}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </GraphicsCard>
                </Grid>
              ))}
            </Grid>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/pricing/Pricing2.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FeatureProps, Pricing2PlanProps } from '@/types/pricing';

/***************************  STRIPE TABLE - ROW  ***************************/

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderRadius: 100,
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.grey[100]
  }
}));

interface Props {
  heading: string;
  caption?: string;
  defaultUnit?: string;
  features: FeatureProps[];
  plans: Pricing2PlanProps[];
}

/***************************  PRICING - 2  ***************************/

export default function Pricing2({ heading, caption, defaultUnit, features, plans }: Props): JSX.Element {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [unit, setUnit] = useState<string>(defaultUnit || 'monthly');

  const cellSX = { p: { xs: 2, sm: 2.5, md: 3 }, px: { xs: 1.25, sm: 2.5, md: 3 } };
  const firstColumnSX = { borderTopLeftRadius: 25, borderBottomLeftRadius: 25 };
  const lastColumnSX = { borderTopRightRadius: 25, borderBottomRightRadius: 25 };
  const activeColumnSX = { border: '1px solid', borderColor: 'primary.main', BorderBottom: 'none' };
  const activeRadius = { xs: 4 * 6, sm: 4 * 8, md: 4 * 10 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <Typeset {...{ heading, caption, captionProps: { sx: { maxWidth: 750 } } }} />
        <Stack direction="row" sx={{ justifyContent: 'center', py: 0.5 }}>
          <ButtonGroup
            disableElevation
            disableFocusRipple
            variant="outlined"
            rel="noopener noreferrer"
            aria-label="Disabled button group"
            sx={{
              display: 'flex',
              gap: 1,
              p: 0.5,
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 25,
              maxWidth: 485,
              width: { xs: 1, sm: 485 }
            }}
          >
            <Button
              fullWidth
              variant={unit === 'monthly' ? 'contained' : 'text'}
              sx={{ '&.MuiButtonGroup-firstButton': { borderRadius: 25 } }}
              onClick={() => setUnit('monthly')}
            >
              Monthly
            </Button>
            <Button
              fullWidth
              variant={unit === 'yearly' ? 'contained' : 'text'}
              sx={{ '&.MuiButtonGroup-lastButton': { borderRadius: 25 } }}
              onClick={() => setUnit('yearly')}
            >
              Yearly
            </Button>
          </ButtonGroup>
        </Stack>
        <Table sx={{ borderCollapse: 'separate' }}>
          <TableHead sx={{ '& .MuiTableCell-root': { borderBottom: 'none' } }}>
            <TableRow>
              <TableCell sx={{ minWidth: { xs: 138, sm: 210, md: 282 }, verticalAlign: 'bottom' }}>
                <Typography variant="h6">Features</Typography>
              </TableCell>
              {plans.map((plan, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    p: { xs: 2, md: 3 },
                    ...(plan.active && { ...activeColumnSX, borderTopLeftRadius: activeRadius, borderTopRightRadius: activeRadius })
                  }}
                >
                  <Box sx={{ py: { xs: 0.25, sm: 0.5, md: 3 } }}>
                    <Typography variant={downSM ? 'subtitle1' : 'h2'}>
                      ${unit === 'yearly' ? plan.price.yearly : plan.price.monthly}
                    </Typography>
                    <Typography variant={downSM ? 'subtitle1' : 'h4'} sx={{ mt: { xs: 0.5, sm: 1.5 }, fontWeight: 500 }}>
                      {plan.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, display: { xs: 'none', md: 'block' } }}>
                      {plan.description}
                    </Typography>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {features.map((feature, index) => (
              <StyledTableRow key={index}>
                <TableCell sx={{ ...cellSX, ...firstColumnSX }}>
                  <Typography variant="subtitle2">
                    {feature.label}
                    <Tooltip title={feature.label} aria-label={feature.label}>
                      <Box
                        component="span"
                        sx={{ lineHeight: 0, cursor: 'pointer', display: 'inline-block', ml: 0.5, verticalAlign: 'text-top' }}
                      >
                        <SvgIcon name="tabler-help-circle" size={16} stroke={2} />
                      </Box>
                    </Tooltip>
                  </Typography>
                </TableCell>
                {plans.map((plan, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      ...cellSX,
                      ...(plan.active && { ...activeColumnSX, borderTop: 'none', borderBottom: 'none' }),
                      ...(index === plans.length - 1 && { ...lastColumnSX }),
                      '& .MuiBox-root svg': {
                        display: 'inline-block'
                      }
                    }}
                  >
                    {plan.features.includes(feature.id) ? (
                      <SvgIcon
                        name="custom-check"
                        type={IconType.CUSTOM}
                        color="primary.main"
                        stroke={3}
                        twoToneColor={theme.palette.background.default}
                      />
                    ) : (
                      <SvgIcon name="tabler-minus" stroke={2} />
                    )}
                  </TableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter sx={{ display: { xs: 'contents', sm: 'none' } }}>
            <TableRow>
              <TableCell sx={{ border: 'none' }} />
              {plans.map((plan, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    ...cellSX,
                    border: 'none',
                    ...(plan.active && {
                      ...activeColumnSX,
                      borderTop: 'none',
                      borderBottomLeftRadius: activeRadius,
                      borderBottomRightRadius: activeRadius
                    })
                  }}
                />
              ))}
            </TableRow>
          </TableFooter>
          <TableFooter sx={{ display: { xs: 'none', sm: 'contents' } }}>
            <TableRow>
              <TableCell sx={{ border: 'none' }} />
              {plans.map((plan, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    ...cellSX,
                    border: 'none',
                    ...(plan.active && {
                      ...activeColumnSX,
                      borderTop: 'none',
                      borderBottomLeftRadius: activeRadius,
                      borderBottomRightRadius: activeRadius
                    })
                  }}
                >
                  <Button fullWidth variant={plan.active ? 'contained' : 'outlined'} sx={{ px: 1.25 }} {...plan.exploreLink} />
                </TableCell>
              ))}
            </TableRow>
          </TableFooter>
        </Table>
      </Stack>
      {downSM && (
        <Stack spacing={1.5} sx={{ mt: 4 }}>
          {plans.map((plan, index) => (
            <GraphicsCard key={index}>
              <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
                <Stack spacing={0.5}>
                  <Typography variant="h3" sx={{ mt: { xs: 0.5, sm: 1.5 } }}>
                    {plan.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    ${unit === 'yearly' ? plan.price.yearly : plan.price.monthly}/{unit === 'yearly' ? 'year' : 'month'}
                  </Typography>
                </Stack>
                <Button variant={plan.active ? 'contained' : 'outlined'} sx={{ px: 1.25 }} {...plan.exploreLink} />
              </Stack>
            </GraphicsCard>
          ))}
        </Stack>
      )}
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/process/Process6.tsx
```tsx
// @mui
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ProcessCardProps3 } from '@/types/process';

interface Props {
  heading: string;
  caption: string;
  cards: ProcessCardProps3[];
}

/***************************  PROCESS - 6  ***************************/

export default function Process6({ heading, caption, cards }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />

        <Grid container spacing={{ xs: 1.5 }}>
          {cards.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <GraphicsCard sx={{ height: 1, p: { xs: 2, sm: 3 } }}>
                <Stack sx={{ gap: { xs: 1.5, md: 4 }, height: 1, justifyContent: 'space-between' }}>
                  <Stack sx={{ gap: 2 }}>
                    <Avatar variant="rounded" sx={{ bgcolor: 'grey.300', color: 'primary.main', width: 60, height: 60, borderRadius: 4 }}>
                      <Typography variant="h4">{card.number}</Typography>
                    </Avatar>
                    <Typeset
                      {...{
                        heading: card.title,
                        caption: card.description,
                        headingProps: { variant: 'h4' },
                        captionProps: { variant: 'body1' },
                        stackProps: { sx: { gap: 1 } }
                      }}
                    />
                  </Stack>
                  <List disablePadding>
                    {card.list &&
                      card.list.map((item, index) => (
                        <ListItem disablePadding key={index} sx={{ py: { xs: 0.25, sm: 0.5, md: 0.75 } }}>
                          <ListItemAvatar sx={{ minWidth: 28, height: 24 }}>
                            <SvgIcon name="tabler-rosette-discount-check" stroke={1} color="text.secondary" />
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {item.primary}
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      ))}
                  </List>
                </Stack>
              </GraphicsCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/process/Process4.tsx
```tsx
'use client';

import { useEffect, useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ProcessCardProps } from '@/types/process';

const autoChangeInterval = 5000; // Change accordion every 3 seconds

interface CardProps {
  cards: ProcessCardProps[];
  activeStep: number;
  handleStep: (step: number) => void;
}

/***************************  PROCESS - CARD  ***************************/

function TimelineCard({ cards, activeStep, handleStep }: CardProps) {
  return (
    <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 }, p: 0, mb: 0, mt: { xs: 4, sm: 0 } }}>
      {cards.map((card, index) => (
        <TimelineItem
          key={index}
          onClick={() => handleStep(index)}
          sx={{ cursor: 'pointer', color: activeStep == index ? 'primary.main' : 'inherit', WebkitTapHighlightColor: 'transparent' }}
        >
          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: activeStep == index ? 'primary.lighter' : 'grey.100',
                boxShadow: 'none',
                p: { xs: 1.25, sm: 2 },
                borderRadius: 4,
                my: 0.25,
                '&:hover': { bgcolor: 'grey.200' }
              }}
            >
              <SvgIcon {...(typeof card.icon === 'string' ? { name: card.icon } : { ...card.icon })} />
            </TimelineDot>
            {cards.length - 1 !== index && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ py: 0, ...(cards.length - 1 !== index && { pb: { xs: 4, sm: 6 } }) }}>
            <Stack sx={{ gap: 1 }}>
              <Typography variant="h4">{card.title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

interface Props {
  heading: string;
  caption: string;
  cards: ProcessCardProps[];
}

/***************************  PROCESS - 4  ***************************/

export default function Process4({ heading, caption, cards }: Props): JSX.Element {
  const theme = useTheme();
  const grey100 = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(78.19% 21.81% at 50% 50%, ${alpha(grey100, 0)} 0%, ${grey100} 100%)`
      : `radial-gradient(78.19% 78.19% at 50% 50%, ${alpha(grey100, 0)} 0%, ${grey100} 100%)`;

  const [activeStep, setActiveStep] = useState<number>(0);

  const handleStep = (step: number) => {
    setActiveStep(step);
  };

  // Update the active step at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % cards.length);
    }, autoChangeInterval);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        <Grid container spacing={{ sm: 2, md: 3 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <GraphicsCard sx={{ minHeight: { xs: 314, sm: 400, md: 408 }, height: 1 }}>
              <GraphicsImage
                image={cards[activeStep].image!}
                sx={{
                  height: 1,
                  backgroundPositionX: { xs: '0%', sm: '-25%', md: '20%' },
                  transform: { xs: 'scale(1.2)', sm: 'scale(1)', md: 'scale(1.25)' },
                  backgroundPositionY: 'top',
                  backgroundSize: 'contain'
                }}
              >
                <Box sx={{ height: 1, background: gradient }} />
              </GraphicsImage>
            </GraphicsCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack direction="row" sx={{ alignItems: 'center', height: 1 }}>
              <TimelineCard {...{ cards }} activeStep={activeStep} handleStep={handleStep} />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/pricing/Pricing1.tsx
```tsx
'use client';

// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { PlanProps } from '@/types/pricing';

interface Props {
  heading: string;
  caption?: string;
  defaultUnit?: string;
  plans: PlanProps[];
}

/***************************  PRICING - 1  ***************************/

export default function Pricing1({ heading, caption, defaultUnit, plans }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption, captionProps: { sx: { maxWidth: 750 } } }} />
        </motion.div>
        <Grid container spacing={1.5} sx={{ height: 1 }}>
          {plans.map((plan, index) => (
            <Grid key={index} size={{ xs: 12, sm: index === plans.length - 1 && plans.length % 2 !== 0 ? 12 : 6, md: 4 }}>
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: plan.animationDelay }}
                style={{ height: '100%' }}
              >
                <GraphicsCard sx={{ height: 1 }}>
                  <Box sx={{ p: { xs: 2.5, sm: 3, md: 4 }, height: 1 }}>
                    <Stack sx={{ gap: 4, justifyContent: 'space-between', height: 1 }}>
                      <Box>
                        <Typeset
                          {...{
                            heading: plan.title,
                            caption: plan?.description,
                            stackProps: { sx: { minHeight: { xs: 'auto', md: 150, lg: 116 } } },
                            headingProps: { variant: 'h4' },
                            captionProps: { variant: 'body1' }
                          }}
                        />
                        <Stack sx={{ gap: 3, mt: 4 }}>
                          <Stack direction="row" sx={{ alignItems: 'flex-end', '& > *:last-child': { mb: 0.75 } }}>
                            <Typography component="div" variant="h1">
                              ${plan.price}
                            </Typography>
                            <Typography component="div" variant="h6" sx={{ color: 'text.secondary' }}>
                              {defaultUnit}
                            </Typography>
                          </Stack>

                          <List disablePadding>
                            {plan.features.map((item, index) => (
                              <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemAvatar sx={{ minWidth: 34, height: 24 }}>
                                  <SvgIcon name="custom-check" type={IconType.CUSTOM} />
                                </ListItemAvatar>
                                <ListItemText primary={item.label} />
                              </ListItem>
                            ))}
                          </List>

                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {plan.about}
                          </Typography>
                        </Stack>
                      </Box>
                      <ButtonAnimationWrapper>
                        <Button variant={plan.active ? 'contained' : 'outlined'} fullWidth {...plan.exploreLink} />
                      </ButtonAnimationWrapper>
                    </Stack>
                  </Box>
                </GraphicsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/process/Process5.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ProcessCardProps2 } from '@/types/process';

/***************************  PROCESS - CARD  ***************************/

interface Props {
  heading: string;
  caption: string;
  cards: ProcessCardProps2[];
}

/***************************  PROCESS - 5  ***************************/

export default function Process5({ heading, caption, cards }: Props): JSX.Element {
  const theme = useTheme();

  const grey100 = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(102.5% 2% at 51.72% 41.83%, ${alpha(grey100, 0)} 0%, ${grey100} 100%)`
      : `radial-gradient(102.5% 102.5% at 51.72% 41.83%, ${alpha(grey100, 0)} 0%, ${grey100} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        {cards.map((card, index) => (
          <Grid
            container
            direction={index % 2 == 0 ? 'row' : 'row-reverse'}
            spacing={{ xs: 1.5, sm: 2, md: 3 }}
            key={index}
            sx={{ alignItems: 'end', height: 1 }}
          >
            {card.image && (
              <Grid size={{ xs: 12, sm: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4
                  }}
                  style={{ height: '100%' }}
                >
                  <GraphicsCard sx={{ height: 1 }}>
                    <GraphicsImage
                      image={card.image}
                      sx={{
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: card.bgPosition,
                        transform:
                          index === 0 ? { xs: 'scale(1.6)', sm: 'scale(1.5)', md: 'scale(2)' } : { xs: 'scale(1.1)', sm: 'scale(1)' },
                        height: 300
                      }}
                    >
                      <Box sx={{ height: 1, background: gradient }} />
                    </GraphicsImage>
                  </GraphicsCard>
                </motion.div>
              </Grid>
            )}
            <Grid size={{ xs: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.5
                }}
              >
                <Stack direction="column" sx={{ gap: { xs: 1.5, sm: 2, md: 3 }, pb: { sm: 1.5 } }}>
                  <Avatar variant="rounded" sx={{ bgcolor: 'grey.100', color: 'primary.main', width: 60, height: 60, borderRadius: 4 }}>
                    <Typography variant="h4">{card.number}</Typography>
                  </Avatar>
                  <Stack sx={{ gap: 1.5 }}>
                    <Typeset
                      {...{
                        heading: card.title,
                        caption: card.description,
                        headingProps: { variant: 'h4' },
                        captionProps: { variant: 'body1' },
                        stackProps: { sx: { gap: 1 } }
                      }}
                    />
                    <Grid container>
                      {card.list &&
                        card.list.map((item, index) => (
                          <Grid key={index} size={{ xs: 12, md: 6 }}>
                            <Stack direction="row" sx={{ gap: 0.5, alignItems: 'center', py: { xs: 0.25, md: 0.75 } }}>
                              <SvgIcon name="tabler-rosette-discount-check" stroke={1} color="text.secondary" />
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {item.primary}
                              </Typography>
                            </Stack>
                          </Grid>
                        ))}
                    </Grid>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/process/Process2.tsx
```tsx
'use client';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BgImageProps } from '@/types/graphics';
import { ProcessCardProps } from '@/types/process';

/***************************  PROCESS - CARD  ***************************/

function CommonCard({ title, description, icon }: ProcessCardProps) {
  return (
    <GraphicsCard sx={{ height: 1 }}>
      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Stack sx={{ gap: { xs: 1.5, md: 4 } }}>
          <SvgIcon type={IconType.CUSTOM} size={40} {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
          <Stack sx={{ gap: 1.5 }}>
            <Typography variant="h4">{title}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
          </Stack>
        </Stack>
      </Box>
    </GraphicsCard>
  );
}

interface Props {
  heading: string;
  caption: string;
  bgImage: BgImageProps;
  cards: ProcessCardProps[];
}

/***************************  PROCESS - 2  ***************************/

export default function Process2({ heading, caption, cards, bgImage }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 3, sm: 4 }}>
        <Grid size={12}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.5
            }}
          >
            <Typeset {...{ heading, caption }} />
          </motion.div>
        </Grid>
        <Grid container spacing={1.5} size={12}>
          <Grid size={12}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.7
              }}
            >
              <GraphicsCard bgImage={bgImage} sx={{ height: { xs: 300, md: 360 } }} />
            </motion.div>
          </Grid>
          {cards.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: card.animationDelay
                }}
              >
                <CommonCard {...card} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/process/Process3.tsx
```tsx
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

```

  

File: src/blocks/navbar/Navbar7.tsx
```tsx
'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 108,
    paddingLeft: 0,
    paddingRight: 0
  },
  width: '100%',
  justifyContent: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 90
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

/***************************  NAVBAR - 7  ***************************/

export default function Navbar7({ children }: ChildrenProps) {
  return (
    <ContainerWrapper sx={{ px: { sm: 2 } }}>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>
          <Box
            sx={{
              width: 1,
              px: { xs: 1.5, sm: 2, md: 3 },
              py: { xs: 0.5, sm: 1.5, md: 2 },
              bgcolor: 'grey.100',
              borderRadius: { xs: 3, sm: 4, md: 6 }
            }}
          >
            {children}
          </Box>
        </StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/navbar/Navbar9.tsx
```tsx
'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 108,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 88
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

/***************************  NAVBAR - 9  ***************************/

export default function Navbar9({ children }: ChildrenProps) {
  return (
    <ContainerWrapper>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>
          <Box sx={{ width: 1, px: { xs: 1.5, sm: 2, md: 3 }, py: { xs: 0.5, sm: 1.5, md: 2 }, bgcolor: 'grey.100', borderRadius: 10 }}>
            {children}
          </Box>
        </StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/navbar/Navbar5.tsx
```tsx
'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 92,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 72
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 5  ***************************/

export default function Navbar5({ children }: ChildrenProps) {
  return (
    <ContainerWrapper>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>{children}</StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/navbar/Navbar8.tsx
```tsx
'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 108,
    paddingLeft: 0,
    paddingRight: 0
  },
  width: '100%',
  justifyContent: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 92
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

/***************************  NAVBAR - 8  ***************************/

export default function Navbar8({ children }: ChildrenProps) {
  return (
    <ContainerWrapper>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>
          <Box
            sx={{
              width: 1,
              px: { xs: 1.5, md: 3 },
              py: { xs: 0.5, sm: 1.5, md: 2 },
              bgcolor: 'grey.100',
              borderRadius: { xs: 3, sm: 4, md: 6 }
            }}
          >
            {children}
          </Box>
        </StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/process/Process1.tsx
```tsx
'use client';

import { SyntheticEvent, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
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
  const theme = useTheme();
  const isFocusWithin = useFocusWithin();

  return (
    <GraphicsCard sx={{ ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) }) }}>
      <Accordion
        disableGutters
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
        sx={{
          p: { xs: 3, md: 4 },
          bgcolor: 'transparent'
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
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between', width: 1, gap: { xs: 3, md: 4 } }}>
            <Stack sx={{ gap: 1.5 }}>
              <Typography variant="h4">{title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
            </Stack>
            <SvgIcon type={IconType.CUSTOM} size={40} {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0, width: { xs: '90%', sm: '85%', md: '80%' } }}>
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
    </GraphicsCard>
  );
}

interface Props {
  heading: string;
  caption: string;
  image: ImageCommonProps;
  cards: ProcessCardProps[];
  defaultExpanded?: string;
}

/***************************  PROCESS - 1  ***************************/

export default function Process1({ heading, defaultExpanded, caption, cards, image }: Props): JSX.Element {
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded || 'panel0');

  const handleChange = (panel: string) => () => {
    setExpanded(panel);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5} sx={{ height: 1 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 2.5, justifyContent: 'space-between', height: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5
              }}
            >
              <Typeset {...{ heading, caption, stackProps: { sx: { gap: 1.5 } } }} />
            </motion.div>
            <Stack sx={{ gap: 1.5 }}>
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15
                  }}
                >
                  <CommonCard {...card} index={index} expanded={expanded} handleChange={handleChange} />
                </motion.div>
              ))}
            </Stack>
          </Stack>
        </Grid>
        {image && (
          <Grid sx={{ display: { xs: 'none', sm: 'block' } }} size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.8
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard sx={{ height: 1 }}>
                <Box sx={{ pl: 5, py: 5, minHeight: 880, height: 1 }}>
                  <GraphicsImage
                    image={image}
                    sx={{
                      border: '5px solid',
                      borderColor: 'grey.200',
                      borderRight: 'none',
                      height: 1,
                      backgroundPositionX: 'left',
                      backgroundPositionY: 'top',
                      borderTopLeftRadius: 12,
                      borderBottomLeftRadius: 20
                    }}
                  />
                </Box>
              </GraphicsCard>
            </motion.div>
          </Grid>
        )}
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/navbar/Navbar4.tsx
```tsx
'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 92,
    paddingLeft: 0,
    paddingRight: 0
  },
  width: '100%',
  justifyContent: 'center',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 76
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 4  ***************************/

export default function Navbar4({ children }: ChildrenProps) {
  return (
    <ContainerWrapper sx={{ px: { sm: 2 } }}>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>{children}</StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/navbar/Navbar3.tsx
```tsx
'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 92,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 72
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 3  ***************************/

export default function Navbar3({ children }: ChildrenProps) {
  return (
    <ContainerWrapper>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>{children}</StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/navbar/Navbar6.tsx
```tsx
'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 92,
    paddingLeft: 0,
    paddingRight: 0
  },
  width: '100%',
  justifyContent: 'center',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 72
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 6  ***************************/

export default function Navbar6({ children }: ChildrenProps) {
  return (
    <ContainerWrapper sx={{ px: { sm: 2 } }}>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>{children}</StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/navbar/Navbar2.tsx
```tsx
'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 108,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 96
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

/***************************  NAVBAR - 2  ***************************/

export default function Navbar2({ children }: ChildrenProps) {
  return (
    <ContainerWrapper>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>
          <Box
            sx={{ width: 1, px: { xs: 1.5, sm: 3 }, py: { xs: 0.5, sm: 2 }, bgcolor: 'grey.100', borderRadius: { xs: 3, sm: 4, md: 6 } }}
          >
            {children}
          </Box>
        </StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/navbar/Navbar10.tsx
```tsx
'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 84,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 72
    }
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 10  ***************************/

export default function Navbar10({ children }: ChildrenProps) {
  return (
    <ContainerWrapper>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>{children}</StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/other/Other1.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { GraphicsCard } from '@/components/cards';

import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @assets
import Background from '@/images/graphics/Background';
import Wave from '@/images/graphics/Wave';

// @types
import { BgImageProps } from '@/types/graphics';

interface SectionProps {
  title: string;
  subTitle: string;
  image: BgImageProps;
  link: string;
  animationDelay?: number;
}

interface Props {
  heading: string;
  description: string;
  primaryBtn: ButtonProps;
  sections: SectionProps[];
}

/***************************  OTHER - 1  ***************************/

export default function Other1({ heading, description, primaryBtn, sections }: Props) {
  const theme = useTheme();
  const isFocusWithin = useFocusWithin();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
        >
          <Typeset {...{ heading, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        <Grid container spacing={1.5}>
          {sections.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 4 }}>
              <GraphicsCard sx={{ overflow: 'hidden' }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: item.animationDelay
                  }}
                >
                  <GraphicsCard
                    sx={{
                      height: { xs: 240, sm: 324, md: 380 },
                      position: 'relative',
                      overflow: 'hidden',
                      WebkitTapHighlightColor: 'transparent',
                      ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
                    }}
                  >
                    <Link
                      href={item.link}
                      component={NextLink}
                      aria-label={item.title}
                      sx={{ position: 'absolute', top: 0, height: 1, width: 1, borderRadius: { xs: 6, sm: 8, md: 10 }, zIndex: 1 }}
                    />
                    <Background />
                    <Box sx={{ position: 'absolute', top: 0, width: 1, height: 1, textAlign: 'center' }}>
                      <CardMedia
                        component="img"
                        image={GetImagePath(item.image)}
                        sx={{
                          px: '14.5%',
                          pt: '16%',
                          pb: { xs: 2, md: 1 },
                          objectFit: 'contain'
                        }}
                        alt="other sections"
                        loading="lazy"
                      />
                      <Box sx={{ '& div': { alignItems: 'center', pt: 0.875 } }}>
                        <Wave />
                      </Box>
                    </Box>
                    <Stack
                      sx={{
                        height: 177,
                        bottom: 0,
                        width: 1,
                        position: 'absolute',
                        justifyContent: 'end',
                        textAlign: 'center',
                        gap: { xs: 0.25, md: 0.5, sm: 1 },
                        p: 3,
                        background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} 0%, ${theme.palette.grey[100]} 100%)`
                      }}
                    >
                      <Typography variant="h4" sx={{ color: 'primary.main' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.subTitle}
                      </Typography>
                    </Stack>
                  </GraphicsCard>
                </motion.div>
              </GraphicsCard>
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ gap: 2, alignItems: 'center' }}>
          <Typography variant="h6" align="center" sx={{ color: 'text.secondary', width: { xs: 1, sm: '80%', md: '65%' } }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3
              }}
            >
              {description}
            </motion.div>
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            <ButtonAnimationWrapper>
              <Button variant="outlined" {...primaryBtn} />
            </ButtonAnimationWrapper>
          </motion.div>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/navbar/Navbar1.tsx
```tsx
'use client';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';

// @types
import { ChildrenProps } from '@/types/root';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 92,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 72
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 1  ***************************/

export default function Navbar1({ children }: ChildrenProps) {
  return (
    <ContainerWrapper>
      <AppBar position="static" color="inherit" elevation={0} sx={{ background: 'transparent' }}>
        <StyledToolbar>{children}</StyledToolbar>
      </AppBar>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/mega-menu/MegaMenu5.tsx
```tsx
'use client';

import { ReactNode } from 'react';

// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

// @project
import SvgIcon from '@/components/SvgIcon';

// @types
import { MenuItemsProps } from '@/types/mega-menu';

interface Props {
  menuItems: MenuItemsProps[];
  bannerData?: ReactNode;
  popperWidth?: number;
}

/***************************  MEGA MENU - 5  ***************************/

export default function MegaMenu5({ menuItems, bannerData, popperWidth = 750 }: Props) {
  const theme = useTheme();
  let gridItem = menuItems.length === 1 ? 12 : 6;

  return (
    <Grid container>
      {bannerData && (
        <Grid sx={{ p: 1 }} size={{ xs: 12, sm: 4 }}>
          <Box sx={{ p: 2.5, bgcolor: 'grey.100', height: 1, borderRadius: 2 }}>{bannerData}</Box>
        </Grid>
      )}
      <Grid size={{ xs: 12, sm: 8 }}>
        <Grid container spacing={1}>
          {menuItems.map((items, index) => (
            <Grid key={index} size={{ xs: 12, sm: menuItems.length > 2 ? 4 : gridItem }}>
              <List
                component="nav"
                sx={{
                  p: 1,
                  width: '100%',
                  maxWidth: { xs: 1, md: popperWidth },
                  display: 'flex',
                  flexDirection: 'column'
                }}
                subheader={
                  <ListSubheader
                    component="div"
                    sx={{ ...theme.typography.subtitle1, p: 1, color: 'text.primary', bgcolor: 'transparent' }}
                  >
                    {items.title}
                  </ListSubheader>
                }
              >
                {items?.itemsList &&
                  items?.itemsList.map((item, index) => (
                    // @ts-ignore
                    <ListItemButton
                      key={index}
                      {...(item && item?.link && item?.link !== undefined && { ...item.link })}
                      sx={{
                        py: 0.5,
                        px: 1.25,
                        my: 0.25,
                        borderRadius: 2,
                        '&:hover': { bgcolor: 'grey.50' },
                        '&:focus-visible': { bgcolor: 'grey.200' }
                      }}
                      TouchRippleProps={{
                        style: {
                          color: alpha(theme.palette.primary.main, 0.3)
                        }
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        secondary={item.content}
                        primaryTypographyProps={{
                          variant: 'body1',
                          sx: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', mr: 0.5, color: 'text.secondary' }
                        }}
                      />
                      <SvgIcon name="tabler-arrow-up-right" size={16} stroke={2} color={theme.palette.grey[800]} />
                    </ListItemButton>
                  ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

```

  

File: src/blocks/other/Other2.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { GraphicsCard } from '@/components/cards';

/***************************  OTHER - 2  ***************************/

export default function Other2() {
  const theme = useTheme();
  const lightColor = theme.palette.secondary.light;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <Stack sx={{ alignItems: 'center', gap: { xs: 2.5, sm: 3 } }}>
          <Skeleton
            variant="rounded"
            sx={{ borderRadius: 5, bgcolor: `${alpha(theme.palette.secondary.lighter, 0.4)}` }}
            width="30%"
            height={32}
            animation={false}
          />
          <Stack sx={{ alignItems: 'center', gap: 1.5, width: 1, height: 1 }}>
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 2.5, bgcolor: `${alpha(lightColor, 0.4)}` }}
              width="70%"
              height={57}
              animation={false}
            />
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 2.5, bgcolor: `${alpha(lightColor, 0.4)}` }}
              width="60%"
              height={57}
              animation={false}
            />
          </Stack>
          <Stack sx={{ alignItems: 'center', gap: 1, width: 1, height: 1 }}>
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 1.5, bgcolor: `${alpha(lightColor, 0.3)}` }}
              width="36%"
              height={24}
              animation={false}
            />
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 1.5, bgcolor: `${alpha(lightColor, 0.3)}` }}
              width="30%"
              height={24}
              animation={false}
            />
          </Stack>
          <Stack direction="row" sx={{ padding: 1.25, gap: 1.5, width: 1, justifyContent: 'center' }}>
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 5, bgcolor: `${alpha(lightColor, 0.3)}` }}
              width={183}
              height={52}
              animation={false}
            />
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: 5, bgcolor: `${alpha(lightColor, 0.6)}` }}
              width={183}
              height={52}
              animation={false}
            />
          </Stack>
        </Stack>
        <Stack>
          <GraphicsCard sx={{ py: { xs: 5, sm: 7.5 }, px: { xs: 3, sm: 6.25 }, position: 'relative' }}>
            <Grid container sx={{ mb: -10 }}>
              <Grid size={8}>
                <Skeleton
                  variant="rounded"
                  sx={{ borderRadius: 5, height: { xs: 280, sm: 380 }, bgcolor: `${alpha(lightColor, 0.4)}` }}
                  animation={false}
                />
              </Grid>
              <Grid size={8}>
                <Skeleton
                  variant="rounded"
                  sx={{
                    fontSize: '1rem',
                    borderRadius: 5,
                    bgcolor: `${alpha(theme.palette.background.default, 0.4)}`,
                    position: 'absolute',
                    top: '40%',
                    left: '35%'
                  }}
                  width="61%"
                  height="80%"
                  animation={false}
                />
              </Grid>
            </Grid>
          </GraphicsCard>
        </Stack>
        <Stack>
          <Grid container spacing={7.5}>
            {[0, 1, 2, 3].map((item) => (
              <Grid key={item} size={{ xs: 6, sm: 6, md: 3 }}>
                <Stack sx={{ gap: 1.5 }}>
                  <Skeleton
                    variant="rounded"
                    sx={{ borderRadius: 3, bgcolor: `${alpha(lightColor, 0.4)}` }}
                    width="80%"
                    height={36}
                    animation={false}
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{ borderRadius: 1.5, bgcolor: `${alpha(lightColor, 0.25)}` }}
                    width="100%"
                    height={16}
                    animation={false}
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{ borderRadius: 1.5, bgcolor: `${alpha(lightColor, 0.25)}` }}
                    width="32%"
                    height={16}
                    animation={false}
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/other/Other3.tsx
```tsx
'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

export interface ChipProps {
  icon: string;
  name: string;
}

export interface OtherListProps {
  title: string;
  description: string;
  chips: ChipProps[];
  btn: ButtonProps;
}

interface Props {
  heading: string;
  caption: string;
  other: OtherListProps[];
}

/***************************  OTHER - 3  ***************************/

export default function Other3({ heading, caption, other }: Props) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset
          {...{
            heading,
            caption,
            stackProps: { sx: { alignItems: 'center', textAlign: 'center' } },
            captionProps: { sx: { maxWidth: 650 } }
          }}
        />
        <Stack sx={{ gap: 1.5, alignItems: 'center', mx: { md: 14 } }}>
          {other.map((item, index) => (
            <GraphicsCard key={index} sx={{ width: 1, p: { xs: 2, md: 3 }, borderRadius: { xs: 4, sm: 6 } }}>
              <Stack
                direction={{ sm: 'row' }}
                sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 1.5 }}
              >
                <Stack sx={{ gap: { xs: 0.5, sm: 1, md: 1.5 } }}>
                  <Stack direction={{ xs: 'column-reverse', sm: 'row' }} sx={{ gap: 1.5, alignItems: { xs: 'flex-start', sm: 'center' } }}>
                    <Typography variant="h4">{item.title}</Typography>
                    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                      {item.chips.map((chip, index) => (
                        <Chip
                          size="small"
                          key={index}
                          icon={<SvgIcon name={chip.icon} color="text.secondary" size={20} />}
                          label={
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {chip.name}
                            </Typography>
                          }
                          sx={{ bgcolor: 'grey.300', height: 32, py: 0.5, px: 1.25, borderRadius: 8, '& .MuiChip-label': { pl: 1, pr: 1 } }}
                        />
                      ))}
                    </Stack>
                  </Stack>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </Stack>
                <Button color="primary" variant="outlined" {...item.btn} />
              </Stack>
            </GraphicsCard>
          ))}
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/mega-menu/MegaMenu4.tsx
```tsx
import { ReactNode } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { SxProps } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// @project
import PreviewCard from '@/components/cards/PreviewCard';

//@type
import { MenuItemsProps } from '@/types/mega-menu';

interface Props {
  menuItems: MenuItemsProps[];
  footerData?: ReactNode;
  footerSX?: SxProps;
  popperWidth?: number;
}

/***************************  MEGA MENU - 4  ***************************/

export default function MegaMenu4({ menuItems, footerData, popperWidth = 936, footerSX }: Props) {
  return (
    <Box sx={{ maxWidth: { xs: 1, md: popperWidth } }}>
      <Grid container spacing={1} sx={{ p: 1, bgcolor: 'background.paper' }}>
        {menuItems.map((item, index) => (
          <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
            <Link
              {...(item.link && { component: NextLink, ...item.link, sx: { ...item.link?.sx, WebkitTapHighlightColor: 'transparent' } })}
              aria-label={item.title}
            >
              <PreviewCard {...item} />
            </Link>
          </Grid>
        ))}
      </Grid>
      {footerData && <Box sx={{ p: 2.5, bgcolor: 'grey.100', ...footerSX }}>{footerData}</Box>}
    </Box>
  );
}

```

  

File: src/blocks/mega-menu/MegaMenu2.tsx
```tsx
'use client';

// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// @project
import SvgIcon from '@/components/SvgIcon';

// @types
import { MenuItemsProps } from '@/types/mega-menu';

interface Props {
  menuItems: MenuItemsProps[];
}

/***************************  MEGA MENU - 2  ***************************/

export default function MegaMenu2({ menuItems }: Props) {
  const theme = useTheme();
  return (
    <List
      component="nav"
      sx={{ p: 1, width: '100%', maxWidth: { xs: 1, md: 368 }, bgcolor: 'background.paper', display: 'flex', flexWrap: 'wrap' }}
    >
      {menuItems.map((item, index) => (
        <ListItemButton
          key={index}
          sx={{
            px: { xs: 1.5, md: 2 },
            py: { xs: 0.75, md: 1.25 },
            my: 0.25,
            width: { xs: 1, sm: '50%', md: 1 },
            borderRadius: 3,
            '&:hover': { bgcolor: 'grey.50' },
            '&:focus-visible': { bgcolor: 'grey.200' },
            ...(item.selected && { bgcolor: 'grey.100' }),
            ...(index === 0 && { mt: 0 }),
            ...(index === menuItems.length - 1 && { mb: 0 })
          }}
          TouchRippleProps={{
            style: {
              color: alpha(theme.palette.primary.main, 0.3)
            }
          }}
          selected={item.selected}
        >
          {item.icon && (
            <ListItemAvatar sx={{ minWidth: 60 }}>
              <Avatar variant="rounded" sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: 'grey.100' }}>
                <SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
              </Avatar>
            </ListItemAvatar>
          )}
          <ListItemText primary={item.title} secondary={item.content} primaryTypographyProps={{ variant: 'subtitle1', mb: 0.5 }} />
        </ListItemButton>
      ))}
    </List>
  );
}

```

  

File: src/blocks/mega-menu/MegaMenu1.tsx
```tsx
'use client';

// @mui
import { SxProps, useTheme, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import SvgIcon from '@/components/SvgIcon';
import { IconType } from '@/enum';

// @types
import { MenuFooterProps, MenuItemsProps } from '@/types/mega-menu';

interface Props {
  menuItems: MenuItemsProps[];
  footerData?: MenuFooterProps;
  footerSX?: SxProps;
}

/***************************  MEGA MENU - 1  ***************************/

export default function MegaMenu1({ menuItems, footerData, footerSX }: Props) {
  const theme = useTheme();
  return (
    <>
      <List
        component="nav"
        sx={{ p: 1, width: '100%', maxWidth: { xs: 1, md: 368 }, bgcolor: 'background.paper', display: 'flex', flexWrap: 'wrap' }}
      >
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              px: { xs: 1.5, md: 2 },
              py: { xs: 0.75, md: 1.25 },
              my: 0.25,
              width: { xs: 1, sm: '50%', md: 1 },
              borderRadius: 3,
              '&:hover': { bgcolor: 'grey.50' },
              '&:focus-visible': { bgcolor: 'grey.200' }
            }}
            TouchRippleProps={{
              style: {
                color: alpha(theme.palette.primary.main, 0.3)
              }
            }}
          >
            {item.icon && (
              <ListItemAvatar sx={{ minWidth: 60 }}>
                <Avatar variant="rounded" sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: 'grey.100' }}>
                  <SvgIcon type={IconType.CUSTOM} {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                </Avatar>
              </ListItemAvatar>
            )}
            <ListItemText
              primary={item.title}
              secondary={item.content}
              primaryTypographyProps={{
                variant: 'subtitle1',
                mb: 0.5
              }}
            />
          </ListItemButton>
        ))}
      </List>
      {footerData && (
        <Box sx={{ p: 2.5, bgcolor: 'grey.100', ...footerSX }}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2.5 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: 'text.secondary', transition: 'color 0.3s', '&:hover': { color: 'primary.main' } }}
            >
              {footerData.title}
            </Typography>
            <Button
              size="small"
              endIcon={<SvgIcon name="tabler-arrow-narrow-right" stroke={1} />}
              sx={{ px: 1.5, borderRadius: 2.5 }}
              {...footerData.link}
            />
          </Stack>
          {footerData.list && (
            <List disablePadding dense sx={{ mt: 1.5 }}>
              {footerData.list.map((item, index) => (
                <ListItem key={index} disableGutters sx={{ py: 0.75, ...(index === footerData.list.length - 1 && { pb: 0 }) }}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.content}
                    primaryTypographyProps={{ variant: 'subtitle2', mb: 0.5, color: 'text.secondary' }}
                    secondaryTypographyProps={{
                      variant: 'caption1',
                      color: 'text.primary',
                      textOverflow: 'ellipsis',
                      noWrap: true
                    }}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      )}
    </>
  );
}

```

  

File: src/blocks/maintenance/Error500.tsx
```tsx
'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Error500 from '@/images/maintenance/Error500';
import Error500Server from '@/images/maintenance/Error500Server';

interface Props {
  heading: string;
  primaryBtn?: ButtonProps;
}

/***************************  ERROR 500 - PAGES  ***************************/

export default function Error500Page({ primaryBtn, heading }: Props) {
  return (
    <ContainerWrapper>
      <Stack sx={{ width: 1, height: '100vh', py: SECTION_COMMON_PY, minHeight: { xs: 450, sm: 600, md: 800 } }}>
        <GraphicsCard sx={{ width: 1, height: 1, position: 'relative' }}>
          <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: 2.25, height: '70%' }}>
            <Box sx={{ width: 1, maxWidth: { xs: 340, sm: 486, md: 728 }, p: 2 }}>
              <Error500 />
            </Box>
            <Typography sx={{ textAlign: 'center', width: { xs: 248, sm: 340, md: 448 } }}>{heading}</Typography>
            {primaryBtn && <Button variant="contained" size="medium" {...primaryBtn} sx={{ zIndex: 1 }} />}
          </Stack>
          <Box sx={{ width: { xs: '95%', md: '90%' }, position: 'absolute', left: -2, bottom: -6 }}>
            <Error500Server />
          </Box>
        </GraphicsCard>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/mega-menu/MegaMenu3.tsx
```tsx
'use client';

import { ReactNode } from 'react';

// @mui
import { SxProps, useTheme, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

// @project
import SvgIcon from '@/components/SvgIcon';
import { IconType } from '@/enum';

// @types
import { MenuItemsProps } from '@/types/mega-menu';
interface Props {
  menuItems: MenuItemsProps[];
  footerData?: ReactNode;
  popperWidth?: number;
  footerSX?: SxProps;
}

/***************************  MEGA MENU - 3  ***************************/

export default function MegaMenu3({ menuItems, footerData, popperWidth = 725, footerSX }: Props) {
  const theme = useTheme();
  return (
    <>
      <List
        component="nav"
        sx={{ p: 1, width: '100%', maxWidth: { xs: 1, md: popperWidth }, bgcolor: 'background.paper', display: 'flex', flexWrap: 'wrap' }}
      >
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              px: { xs: 1.5, md: 2 },
              py: { xs: 0.75, md: 1.25 },
              my: 0.25,
              mx: 0.25,
              width: { xs: 1, sm: '49%' },
              borderRadius: 3,
              '&:hover': { bgcolor: 'grey.50' },
              '&:focus-visible': { bgcolor: 'grey.200' }
            }}
            TouchRippleProps={{
              style: {
                color: alpha(theme.palette.primary.main, 0.3)
              }
            }}
          >
            {item.icon && (
              <ListItemAvatar sx={{ minWidth: 60 }}>
                <Avatar variant="rounded" sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: 'grey.100' }}>
                  <SvgIcon type={IconType.CUSTOM} {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                </Avatar>
              </ListItemAvatar>
            )}
            <ListItemText primary={item.title} secondary={item.content} primaryTypographyProps={{ variant: 'subtitle1', mb: 0.5 }} />
          </ListItemButton>
        ))}
      </List>
      {footerData && <Box sx={{ p: 2.5, bgcolor: 'grey.100', ...footerSX }}>{footerData}</Box>}
    </>
  );
}

```

  

File: src/blocks/maintenance/Error404.tsx
```tsx
'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Error404 from '@/images/maintenance/Error404';

interface Props {
  heading: string;
  primaryBtn: ButtonProps;
}

/***************************  ERROR 404 - PAGES  ***************************/

export default function Error404Page({ primaryBtn, heading }: Props) {
  return (
    <ContainerWrapper>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 1,
          height: '100vh',
          py: SECTION_COMMON_PY,
          minHeight: { xs: 450, sm: 600, md: 800 }
        }}
      >
        <GraphicsCard sx={{ width: 1, height: 1, py: { xs: 3, sm: 4, md: 6 } }}>
          <Stack sx={{ justifyContent: 'center', height: 1, gap: { xs: 4, sm: 1 } }}>
            <Error404 />
            <Stack sx={{ gap: 2.25, alignItems: 'center', mt: { sm: -5, lg: -6.25 } }}>
              <Typography sx={{ width: { xs: 210, sm: 300 }, textAlign: 'center' }}>{heading}</Typography>
              {primaryBtn && <Button variant="contained" size="medium" {...primaryBtn} />}
            </Stack>
          </Stack>
        </GraphicsCard>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/maintenance/UnderMaintenance.tsx
```tsx
// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import BackShortly from '@/images/maintenance/BackShortly';
import Maintenance from '@/images/maintenance/Maintenance';

interface Props {
  heading: string;
}

/***************************  UNDER MAINTENANCE - PAGES  ***************************/

export default function UnderMaintenance({ heading }: Props) {
  return (
    <ContainerWrapper>
      <Stack sx={{ width: 1, height: '100vh', py: SECTION_COMMON_PY, minHeight: { xs: 450, sm: 600, md: 800 } }}>
        <GraphicsCard sx={{ width: 1, height: 1, position: 'relative' }}>
          <Stack sx={{ alignItems: 'center', justifyContent: 'center', height: '60%' }}>
            <Box sx={{ width: 1, maxWidth: { xs: 360, sm: 486, md: 728 }, p: 2 }}>
              <BackShortly />
            </Box>
            <Typography sx={{ textAlign: 'center', width: { xs: 248, sm: 340, md: 448 } }}>{heading}</Typography>
          </Stack>
          <Box sx={{ width: '70%', maxWidth: { xs: 360, sm: 486, md: 820 }, position: 'absolute', left: -2, bottom: -6 }}>
            <Maintenance />
          </Box>
        </GraphicsCard>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/hero/Hero8.tsx
```tsx
'use client';

import { ReactElement } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface ListDataProps {
  counter: string;
  caption: string;
  defaultUnit?: string;
}

interface Props {
  headLine: ReactElement;
  captionLine: string;
  primaryBtn?: ButtonProps;
  image: ImageCommonProps;
  listData: ListDataProps[];
}

/***************************  HERO - 8  ***************************/

export default function Hero8({ headLine, captionLine, primaryBtn, image, listData }: Props): JSX.Element {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const partitionInSmall = 2;
  const partitionInLarge = 4;

  const columns = downMD ? partitionInSmall : partitionInLarge;
  const block1ImagePadding = { sm: 5, md: 8 };

  const calculateElementsInLastRow = (dataArray: ListDataProps[], columns: number) => {
    const totalItems = dataArray.length;
    const elementsInLastRow = totalItems % columns || columns;
    return elementsInLastRow;
  };

  const calculateIndexOfFirstElementInLastRow = (dataArray: ListDataProps[], elementsInLastRow: number) => {
    const totalItems = dataArray.length;
    const indexOfFirstElementInLastRow = totalItems - elementsInLastRow;
    return indexOfFirstElementInLastRow;
  };

  const elementsInLastRow = calculateElementsInLastRow(listData, columns);
  const indexOfFirstElementInLastRow = calculateIndexOfFirstElementInLastRow(listData, elementsInLastRow);

  const calculateIndexOfLastElementOfEachRow = (dataArray: ListDataProps[], columns: number) => {
    const indices = [];
    const totalItems = dataArray.length;
    const rows = Math.ceil(totalItems / columns);

    for (let i = 1; i <= rows; i++) {
      const lastIndexInRow = i * columns - 1;
      indices.push(lastIndexInRow < totalItems ? lastIndexInRow : totalItems - 1);
    }

    return indices;
  };

  const indicesOfLastElements = calculateIndexOfLastElementOfEachRow(listData, columns);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ alignItems: 'center', mb: 3 }}>
        {headLine}
        <Typography variant="h6" align="center" sx={{ color: 'text.secondary', mt: { xs: 1.5, sm: 2, md: 3 }, maxWidth: 500 }}>
          {captionLine}
        </Typography>

        {primaryBtn && <Button color="primary" size="large" variant="contained" {...primaryBtn} sx={{ mt: { xs: 3, sm: 5 } }} />}
      </Stack>
      <Box sx={{ mb: { xs: -3, sm: -4 }, px: block1ImagePadding, height: { xs: 197, sm: 335, md: 520 } }}>
        <GraphicsImage
          sx={{
            height: '100%',
            backgroundPositionY: 'top',
            borderTopLeftRadius: { xs: 20 },
            borderTopRightRadius: { xs: 20 },
            border: '5px solid',
            borderColor: 'grey.100'
          }}
          image={image}
        />
      </Box>
      <GraphicsCard sx={{ py: { xs: 2, sm: 4, md: 5 }, px: { xs: 2, sm: 4, md: 0 } }}>
        <Grid container>
          {listData.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12 / partitionInSmall, md: 12 / partitionInLarge }}
              sx={{
                px: { xs: 2, md: 5 },
                py: { xs: 2, md: 0 },
                ...(index < indexOfFirstElementInLastRow && { borderBottom: `1px solid ${theme.palette.divider}` }),
                ...(!indicesOfLastElements.includes(index) && { borderRight: `1px solid ${theme.palette.divider}` })
              }}
            >
              <Stack sx={{ gap: { xs: 0.75, md: 1 }, alignItems: 'center' }}>
                <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                  <Typography component="div" variant="h1">
                    {item.counter}
                  </Typography>
                  {item.defaultUnit && (
                    <Typography component="div" variant="h2" sx={{ color: 'text.secondary', mb: { md: 0.25 } }}>
                      {item.defaultUnit}
                    </Typography>
                  )}
                </Stack>
                <Typography align="center" sx={{ color: 'text.secondary' }}>
                  {item.caption}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/hero/Hero7.tsx
```tsx
'use client';

import { ReactElement } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { ThemeDirection } from '@/config';

// @types
import { BgImageProps, ImageCommonProps } from '@/types/graphics';

// @assets
import Pattern3 from '@/images/graphics/Pattern3';
import Pattern4 from '@/images/graphics/Pattern4';
import Pattern5 from '@/images/graphics/Pattern5';
import Pattern6 from '@/images/graphics/Pattern6';
import Pattern7 from '@/images/graphics/Pattern7';
import Pattern8 from '@/images/graphics/Pattern8';
import Pattern9 from '@/images/graphics/Pattern9';

interface Props {
  headLine: ReactElement;
  captionLine: string;
  primaryBtn: ButtonProps;
  image1: BgImageProps;
  image2: ImageCommonProps;
  reviewData: {
    rating: string;
    reviews: string;
  };
}

/***************************  HERO - 7  ***************************/

export default function Hero7({ headLine, captionLine, primaryBtn, image1, image2, reviewData }: Props): JSX.Element {
  const theme = useTheme();
  const boxRadius = { xs: 12, sm: 16, md: 20 };
  const boxHeight = { xs: 400, sm: 450, md: 650 };
  const AvatarSize = { xs: 38, sm: 42, md: 56 };

  const isRTL = theme.direction === ThemeDirection.RTL;

  return (
    <Stack
      direction={{ sm: 'row' }}
      sx={{ py: { xs: 4, sm: 8, md: 12 }, justifyContent: { sm: 'end' }, overflow: 'hidden', position: 'relative' }}
    >
      <Box
        sx={{
          bgcolor: 'grey.100',
          height: boxHeight,
          width: '20%',
          position: 'absolute',
          bottom: { xs: 32, sm: 'unset' },
          right: { xs: 0, sm: 'auto' },
          top: { xs: 'unset', md: '50%' },
          transform: { xs: 'unset', md: 'translateY(-50%)' }
        }}
      />
      <ContainerWrapper>
        <Stack direction={{ sm: 'row' }} sx={{ justifyContent: 'space-between', gap: { xs: 3, sm: 4 } }}>
          <Stack sx={{ gap: { xs: 5, sm: 10 }, justifyContent: 'center' }}>
            <Stack sx={{ gap: { xs: 1.5, sm: 2.5 } }}>
              {headLine}
              <Typography sx={{ color: 'text.secondary', maxWidth: { sm: 350, md: 400 } }}>{captionLine}</Typography>
            </Stack>
            <Stack sx={{ position: 'relative' }}>
              <Button color="primary" variant="contained" size="large" {...primaryBtn} sx={{ width: { sm: 'fit-content' } }} />
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 20, md: 60 },
                  left: 107,
                  width: { sm: 150, md: 278 },
                  display: { xs: 'none', sm: 'block' },
                  ...(isRTL && { transform: 'scaleX(-1)' })
                }}
              >
                <Pattern5 />
              </Box>
            </Stack>
          </Stack>
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                bgcolor: 'grey.100',
                ml: { xs: 7, sm: 0 },
                height: boxHeight,
                width: { sm: 280, md: 450 },
                borderTopLeftRadius: boxRadius,
                borderBottomLeftRadius: boxRadius
              }}
            >
              <GraphicsImage
                image={image2}
                cardMediaProps={{ component: 'img' }}
                sx={{
                  position: 'absolute',
                  top: { xs: 38, md: 46 },
                  left: { xs: 130, sm: 60, md: isRTL ? 150 : 120 },
                  height: { xs: 280, sm: 320, md: 480 },
                  zIndex: 1
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 15, sm: 10, md: 28 },
                  left: { xs: -70, sm: -150 },
                  width: { xs: 150, sm: 175, md: 198 },
                  ...(isRTL && { transform: 'scaleX(-1)' })
                }}
              >
                <Pattern8 />
              </Box>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 40, sm: 70, md: 50 },
                left: { xs: 26, sm: -26, md: -46 },
                height: { xs: 168, md: 300 },
                width: { xs: 112, md: 214 },
                pt: { xs: 2, md: 4 },
                borderRadius: { xs: 1.5, md: 5 },
                bgcolor: 'primary.lighter'
              }}
            >
              <GraphicsImage image={image1} sx={{ height: 1 }} />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 10, sm: 0 },
                left: { xs: isRTL ? 230 : 245, sm: isRTL ? 175 : 190, md: isRTL ? 324 : 316 },
                width: { xs: 200, sm: 255, md: 300 },
                ...(isRTL && { transform: 'scaleX(-1)' })
              }}
            >
              <Pattern9 />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 20, md: 52 },
                left: { sm: -80, md: -60 },
                borderRadius: { xs: 1.5, md: 2 },
                p: { xs: 1, sm: 1.25, md: 1.5 },
                bgcolor: 'primary.lighter',
                width: 'fit-content'
              }}
            >
              <Avatar
                sx={{
                  width: AvatarSize,
                  height: AvatarSize,
                  bgcolor: 'grey.100',
                  mb: { xs: 2, md: 2.5 },
                  '& svg.tabler-filled-star': { width: { xs: 16, sm: 18, md: 24 }, height: { xs: 16, sm: 18, md: 24 } }
                }}
              >
                <SvgIcon name="tabler-filled-star" type={IconType.FILL} />
              </Avatar>
              <Typeset
                {...{
                  heading: reviewData.rating,
                  caption: reviewData.reviews,
                  stackProps: { sx: { gap: 0 } },
                  headingProps: { variant: 'body1' },
                  captionProps: { variant: 'body2' }
                }}
              />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: { sm: -70, md: -100 },
                left: { sm: -170, md: -190 },
                width: { sm: 300, md: 438 },
                display: { xs: 'none', sm: 'block' },
                zIndex: -1,
                transform: isRTL ? 'scaleX(-1)' : null
              }}
            >
              <Pattern6 />
            </Box>
          </Box>
        </Stack>
      </ContainerWrapper>
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 15, sm: '10%' },
          left: 0,
          width: { xs: 110, sm: 206, md: 408 },
          ...(isRTL && { transform: 'scaleX(-1)' })
        }}
      >
        <Pattern3 />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          left: 0,
          width: { sm: 50, md: 156 },
          display: { xs: 'none', sm: 'block' },
          ...(isRTL && { transform: 'scaleX(-1)' })
        }}
      >
        <Pattern4 />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 50, sm: 80, md: 120 },
          right: 0,
          width: { xs: 248, sm: 350, md: 470 },
          zIndex: 1,
          ...(isRTL && { transform: 'scaleX(-1)' })
        }}
      >
        <Pattern7 />
      </Box>
    </Stack>
  );
}

```

  

File: src/blocks/hero/Hero9.tsx
```tsx
'use client';

import { useRef } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip, { ChipProps } from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion, useScroll, useTransform } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

// @assets
import Wave from '@/images/graphics/Wave';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { SpriteIconProps } from '@/types/icon';

interface ListDataProps {
  icon: SpriteIconProps;
  title: string;
}

interface Props {
  chip: {
    label: ChipProps['label'];
  };
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
  image: ImageCommonProps;
  listData: ListDataProps[];
}

/***************************  HERO - 9  ***************************/

export default function Hero9({ chip, headLine, captionLine, primaryBtn, image, listData }: Props): JSX.Element {
  const theme = useTheme();
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0.9, 0.92, 0.94, 0.96, 1]);

  return (
    <Box ref={containerRef}>
      <Box
        sx={{
          height: { xs: 540, sm: 738, md: 878 },
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          zIndex: -1,
          borderBottomLeftRadius: boxRadius,
          borderBottomRightRadius: boxRadius,
          background: getBackgroundDots(theme.palette.grey[300], 80, 40),
          bgcolor: 'grey.100',
          '&:before': {
            content: `' '`,
            position: 'absolute',
            width: 1,
            height: 1,
            left: 0,
            bottom: 0,
            borderBottomLeftRadius: boxRadius,
            borderBottomRightRadius: boxRadius,
            background: `radial-gradient(47.33% 47.33% at 50% 46.88%, ${alpha(theme.palette.grey[200], 0)} 0%, ${theme.palette.grey[200]} 100%)`
          }
        }}
      ></Box>
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box sx={{ pb: { xs: 2.75, sm: 5.375, md: 6.5 } }}>
          <Stack sx={{ alignItems: 'center', gap: 1.5 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <Chip
                variant="outlined"
                label={
                  typeof chip.label === 'string' ? (
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {chip.label}
                    </Typography>
                  ) : (
                    chip.label
                  )
                }
                sx={{ borderColor: 'divider' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <Typography variant="h1" align="center" sx={{ maxWidth: 800 }}>
                {headLine}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <Wave />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <Typography variant="h6" align="center" sx={{ color: 'text.secondary', maxWidth: 650 }}>
                {captionLine}
              </Typography>
            </motion.div>
          </Stack>
          <Stack sx={{ alignItems: 'center', gap: 2, mt: { xs: 3, sm: 4, md: 5 } }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <ButtonAnimationWrapper>
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                  {...primaryBtn}
                />
              </ButtonAnimationWrapper>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <Stack direction={{ sm: 'row' }} sx={{ gap: { xs: 1, sm: 3 } }}>
                {listData.map((item, index) => (
                  <Stack direction="row" key={index} sx={{ alignItems: 'center', gap: 1 }}>
                    <SvgIcon
                      {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })}
                      color="text.primary"
                      stroke={1.2}
                    />
                    <Typography variant="body2">{item.title}</Typography>
                  </Stack>
                ))}
              </Stack>
            </motion.div>
          </Stack>
        </Box>
        <Box sx={{ position: 'sticky', top: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            style={{ scale }}
          >
            <GraphicsImage
              cardMediaProps={{ component: 'img' }}
              image={image}
              sx={{ width: 1, backgroundPositionY: 'top', borderRadius: { xs: 4 }, border: '5px solid', borderColor: 'grey.300' }}
            />
          </motion.div>
        </Box>
      </ContainerWrapper>
    </Box>
  );
}

```

  

File: src/blocks/hero/Hero6.tsx
```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Chip, { ChipProps } from '@mui/material/Chip';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { throttle } from 'lodash-es';
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  chip?: {
    label: ChipProps['label'];
    link?: LinkProps;
  };
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
  images: ImageCommonProps[];
}

/***************************  HERO - 6  ***************************/

export default function Hero6({ chip, heading, caption, primaryBtn, secondaryBtn, images }: Props): JSX.Element {
  const sliderRef = useRef<Slider | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0); // To track current slide
  const totalSlides = images.length - 1; // Total number of slides (adjust based on the number of slides)

  const settings: Settings = {
    autoplay: false,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    swipe: false,
    centerMode: true,
    initialSlide: 2,
    variableWidth: true,
    afterChange: (index) => setCurrentSlide(index)
  };

  useEffect(() => {
    const handleScroll = throttle((event: WheelEvent) => {
      event.preventDefault(); // Prevent the default window scroll

      if (sliderRef.current) {
        const deltaY = event.deltaY;

        // Scroll down if scrolling down and not on the last slide
        if (deltaY > 0 && currentSlide < totalSlides - 1) {
          sliderRef.current.slickNext(); // Scroll down
        }
        // Scroll up if scrolling up and not on the first slide
        else if (deltaY < 0 && currentSlide > 0) {
          sliderRef.current.slickPrev(); // Scroll up
        }
      }
    }, 200);

    const sliderElement = sliderRef.current?.innerSlider?.list; // Access the slider's inner list
    if (sliderElement) {
      // Attach the wheel event to the slider's inner list
      sliderElement.addEventListener('wheel', handleScroll, { passive: false });
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('wheel', handleScroll);
      }
    };
  }, [currentSlide, totalSlides]);

  return (
    <Box sx={{ py: SECTION_COMMON_PY }}>
      <ContainerWrapper>
        <Stack sx={{ alignItems: 'center' }}>
          {chip && (
            <Chip
              label={
                typeof chip.label === 'string' ? (
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {chip.label}
                    {chip.link && <Link component={NextLink} variant="caption" color="primary.main" {...chip.link} />}
                  </Typography>
                ) : (
                  chip.label
                )
              }
              sx={{ bgcolor: 'grey.100', mb: 2 }}
            />
          )}
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { textAlign: 'center', alignItems: 'center', gap: { xs: 2, md: 3 } } },
              headingProps: { variant: 'h1', sx: { maxWidth: { xs: 350, sm: 500, md: 709 } } },
              captionProps: { sx: { maxWidth: { xs: 343, md: 500 } } }
            }}
          />
          <Stack direction="row" sx={{ justifyContent: 'center', gap: { xs: 1, sm: 2, md: 2.5 }, mt: 4 }}>
            {primaryBtn && <Button color="primary" size="large" variant="contained" {...primaryBtn} />}
            {secondaryBtn && <Button color="primary" size="large" variant="outlined" {...secondaryBtn} />}
          </Stack>
        </Stack>
      </ContainerWrapper>
      <Stack sx={{ width: 1, mt: { xs: 4, md: 6 }, cursor: 'all-scroll' }}>
        <Slider ref={sliderRef} {...settings}>
          {images.map((item, index) => (
            <Box key={index} sx={{ height: { xs: 216, sm: 478 }, px: 0.75 }}>
              <GraphicsImage
                {...{ image: item }}
                sx={{ height: 1, width: { xs: 162, sm: 300 }, backgroundPosition: 'top', borderRadius: { xs: 6, sm: 8, md: 10 } }}
              />
            </Box>
          ))}
        </Slider>
      </Stack>
    </Box>
  );
}

```

  

File: src/blocks/hero/Hero5.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip, { ChipProps } from '@mui/material/Chip';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { SpriteIconProps } from '@/types/icon';

interface ListDataProps {
  icon: SpriteIconProps;
  title: string;
  description: string;
}

interface Props {
  chip?: {
    label: ChipProps['label'];
    link?: LinkProps;
  };
  headLine: string;
  captionLine: string;
  image: ImageCommonProps;
  primaryBtn?: ButtonProps;
  listData: ListDataProps[];
}

/***************************  HERO - 5  ***************************/

export default function Hero5({ chip, headLine, captionLine, image, listData, primaryBtn }: Props): JSX.Element {
  const theme = useTheme();
  const iconBoxSize = { xs: 46, md: 60 };

  const shade = {
    content: `' '`,
    zIndex: 1,
    position: 'absolute',
    width: { sm: 60, xs: 40 },
    height: 1,
    top: 0,
    background: `linear-gradient(90deg, ${theme.palette.grey[100]} -8.54%, ${alpha(theme.palette.grey[100], 0)} 100%)`,
    ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' })
  };

  const settings: Settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    swipeToSlide: true,
    initialSlide: 0,
    variableWidth: true
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ p: { xs: 2.5, sm: 3, md: 5 }, position: 'relative' }}>
        <Box sx={{ position: { xs: 'relative', sm: 'absolute' }, top: { sm: 24, md: 40 }, zIndex: 1 }}>
          {chip && (
            <Chip
              label={
                typeof chip.label === 'string' ? (
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {chip.label}
                    {chip.link && (
                      <Link
                        component={NextLink}
                        variant="caption"
                        color="primary.main"
                        {...chip.link}
                        underline="hover"
                        sx={{ '&:hover': { color: 'primary.dark' } }}
                      />
                    )}
                  </Typography>
                ) : (
                  chip.label
                )
              }
              sx={{ bgcolor: 'background.default', mb: { xs: 1.5, sm: 3 } }}
            />
          )}

          <Typography variant="h1" sx={{ maxWidth: 608 }}>
            {headLine}
          </Typography>
          {primaryBtn && <Button color="primary" size="large" variant="contained" {...primaryBtn} sx={{ mt: { xs: 3, sm: 5 } }} />}
        </Box>

        <Box sx={{ position: 'relative' }}>
          <GraphicsImage
            sx={{
              height: { xs: 300, sm: 500, md: 605 },
              backgroundSize: 'contain',
              backgroundPositionX: 'right',
              backgroundPositionY: 'top',
              display: { xs: 'none', sm: 'block' }
            }}
            image={image}
          >
            <Box
              sx={{ width: 1, height: 1, bgcolor: { xs: alpha(theme.palette.grey[100], 0.6), md: alpha(theme.palette.grey[100], 0.2) } }}
            />
          </GraphicsImage>

          <Stack sx={{ gap: { xs: 2, sm: 3 }, mt: { xs: 6.25, sm: -6.25 } }}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 400 }}>{captionLine}</Typography>

            <Box sx={{ position: 'relative', '&:before': { ...shade, left: 0 }, '&:after': { ...shade, right: 0, rotate: '180deg' } }}>
              <Slider {...settings}>
                {listData.map((item, index) => (
                  <Box key={index} sx={{ px: 0.75 }}>
                    <Stack direction="row" sx={{ gap: 1, borderRadius: { xs: 4, sm: 6 }, bgcolor: 'grey.200', p: { xs: 1, sm: 1.5 } }}>
                      <Avatar sx={{ width: iconBoxSize, height: iconBoxSize, bgcolor: 'grey.100', borderRadius: 4 }}>
                        <SvgIcon type={IconType.CUSTOM} {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                      </Avatar>
                      <Typeset
                        {...{
                          heading: item.title,
                          caption: item.description,
                          stackProps: { sx: { gap: 0.625 } },
                          headingProps: { variant: 'h4' },
                          captionProps: { variant: 'body2' }
                        }}
                      />
                    </Stack>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Stack>
        </Box>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/hero/Hero3.tsx
```tsx
'use client';

import { isValidElement, ReactElement } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip, { ChipProps } from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Link, { LinkProps } from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface ListDataProps {
  title: string;
  link?: LinkProps;
}

interface Props {
  chip?: {
    label: ChipProps['label'];
    link?: LinkProps;
  };
  headLine?: ReactElement | string;
  boxImage1: ImageCommonProps;
  boxImage2: ImageCommonProps;
  boxImage3: ImageCommonProps;
  listData?: ListDataProps[];
  description?: string;
  exploreBtn?: ButtonProps;
}

/***************************  IAMGE - CARD  ***************************/

function ImageBlock({ image }: { image: ImageCommonProps }) {
  const imagePadding = { xs: 0, md: 4 };
  const imageLeftRadius = { xs: 12, sm: 32, md: 12 };
  const imageRightRadius = { xs: 0, sm: 32, md: 0 };

  return (
    <GraphicsCard sx={{ bgcolor: 'grey.200' }}>
      <Box sx={{ py: imagePadding, pl: imagePadding, height: { xs: 0, sm: 175, md: 302 } }}>
        <GraphicsImage
          image={image}
          sx={{
            height: '100%',
            backgroundPositionX: 'left',
            backgroundPositionY: 'top',
            borderTopLeftRadius: imageLeftRadius,
            borderTopRightRadius: imageRightRadius,
            borderBottomRightRadius: imageRightRadius,
            borderBottomLeftRadius: imageLeftRadius
          }}
        />
      </Box>
    </GraphicsCard>
  );
}

/***************************  HERO - 3  ***************************/

export default function Hero3({ chip, headLine, boxImage1, boxImage2, boxImage3, listData, description, exploreBtn }: Props): JSX.Element {
  const theme = useTheme();
  const block1ImagePadding = { xs: 2.5, sm: 4 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <Stack sx={{ alignItems: 'start', gap: { xs: 1.5, md: 3 } }}>
          {chip && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <Chip
                label={
                  typeof chip.label === 'string' ? (
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {chip.label}
                      {chip.link && (
                        <Link
                          component={NextLink}
                          variant="caption"
                          color="primary.main"
                          {...chip.link}
                          underline="hover"
                          sx={{ '&:hover': { color: 'primary.dark' } }}
                        />
                      )}
                    </Typography>
                  ) : (
                    chip.label
                  )
                }
                sx={{ bgcolor: 'grey.100' }}
              />
            </motion.div>
          )}

          {isValidElement(headLine) ? (
            headLine
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <Typography variant="h1" align="center" sx={{ width: { xs: 343, sm: 700, md: 850 } }}>
                {headLine}
              </Typography>
            </motion.div>
          )}
        </Stack>

        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 5, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                delay: 0.5
              }}
            >
              <GraphicsCard>
                <Box sx={{ pl: block1ImagePadding, pt: block1ImagePadding, height: { xs: 197, sm: 335, md: 478 } }}>
                  <GraphicsImage
                    image={boxImage1}
                    sx={{
                      height: '100%',
                      border: '5px solid',
                      borderColor: 'grey.200',
                      borderBottom: 'none',
                      borderRight: 'none',
                      backgroundPositionX: 'left',
                      backgroundPositionY: 'top',
                      borderTopLeftRadius: { xs: 12 },
                      borderBottomRightRadius: { xs: 20, sm: 32, md: 40 }
                    }}
                  />
                </Box>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 3.5, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.6
              }}
            >
              <GraphicsCard>
                <Box sx={{ height: { xs: 'auto', sm: 335, md: 478 } }}>
                  {boxImage2 && (
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                      <ImageBlock image={boxImage2} />
                    </Box>
                  )}
                  {listData?.length && (
                    <Box sx={{ px: { xs: 2.5, md: 4 }, pt: { xs: 1, md: 1.5 }, pb: { xs: 1, md: 2.5 } }}>
                      <List sx={{ p: 0 }}>
                        {listData.map((item, index) => (
                          <ListItem key={index} sx={{ px: 0 }} divider={index !== listData.length - 1}>
                            <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'subtitle1', color: 'text.secondary' }} />
                            {item.link && (
                              <Link
                                component={NextLink}
                                sx={{
                                  p: 0,
                                  height: 24,
                                  '&:hover svg': { color: 'primary.main' },
                                  '&:focus-visible': { ...generateFocusVisibleStyles(theme.palette.primary.main) },
                                  WebkitTapHighlightColor: 'transparent'
                                }}
                                {...item.link}
                                rel="noopener noreferrer"
                                aria-label="feature-link"
                              >
                                <motion.div whileHover={{ y: -2, x: 2 }} transition={{ duration: 0.5 }}>
                                  <SvgIcon name="tabler-arrow-up-right" color="text.secondary" />
                                </motion.div>
                              </Link>
                            )}
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}
                </Box>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 3.5, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.7
              }}
            >
              <GraphicsCard>
                <Stack sx={{ justifyContent: 'space-between', height: { xs: 'auto', sm: 335, md: 478 } }}>
                  {boxImage3 && (
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                      <ImageBlock image={boxImage3} />
                    </Box>
                  )}
                  <Box sx={{ px: { xs: 2.5, md: 4 }, pt: { xs: 2.5, sm: 3 }, pb: { xs: 2.5, md: 4 } }}>
                    <Stack sx={{ gap: 1.5 }}>
                      {description && (
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {description}
                        </Typography>
                      )}
                      {exploreBtn && (
                        <ButtonAnimationWrapper style={{ width: '100%' }}>
                          <Button color="primary" fullWidth size="small" variant="outlined" {...exploreBtn} />
                        </ButtonAnimationWrapper>
                      )}
                    </Stack>
                  </Box>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/hero/Hero2.tsx
```tsx
'use client';

import { isValidElement, ReactElement } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip, { ChipProps } from '@mui/material/Chip';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

interface Props {
  chip?: {
    label: ChipProps['label'];
    link?: LinkProps;
  };
  headLine?: ReactElement | string;
  captionLine?: string;
  image: ImageCommonProps;
  primaryBtn?: ButtonProps;
  secondaryBtn?: ButtonProps;
}

/***************************  HERO - 2  ***************************/

export default function Hero2({ chip, headLine, captionLine, image, primaryBtn, secondaryBtn }: Props): JSX.Element {
  const theme = useTheme();
  const cardPadding = { xs: 3, sm: 5, md: 8 };
  const imageRadius = { xs: 12, sm: 16, md: 20 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.1
        }}
      >
        <GraphicsCard
          overLay={`radial-gradient(47.33% 47.33% at 50% 46.88%, ${alpha(theme.palette.grey[200], 0)} 0%, ${theme.palette.grey[200]} 100%)`}
        >
          <Box sx={{ px: cardPadding, pt: cardPadding, background: getBackgroundDots(theme.palette.grey[300], 80, 40) }}>
            <Stack sx={{ alignItems: 'center', gap: { xs: 1.5, md: 3 } }}>
              {chip && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                >
                  <Chip
                    label={
                      typeof chip.label === 'string' ? (
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {chip.label}
                          {chip.link && (
                            <Link
                              component={NextLink}
                              variant="caption"
                              color="primary.main"
                              {...chip.link}
                              underline="hover"
                              sx={{ '&:hover': { color: 'primary.dark' } }}
                              aria-label="chip-link"
                            />
                          )}
                        </Typography>
                      ) : (
                        chip.label
                      )
                    }
                    sx={{ bgcolor: 'background.default' }}
                  />
                </motion.div>
              )}

              {isValidElement(headLine) ? (
                headLine
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                >
                  <Typography variant="h1" align="center" sx={{ width: { xs: 343, sm: 700, md: 850 } }}>
                    {headLine}
                  </Typography>
                </motion.div>
              )}
              {captionLine && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                >
                  <Typography variant="h6" align="center" sx={{ color: 'text.secondary', width: { xs: 320, sm: 350, md: 500 } }}>
                    {captionLine}
                  </Typography>
                </motion.div>
              )}
            </Stack>
            {(primaryBtn || secondaryBtn) && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Stack direction="row" sx={{ gap: { xs: 1, sm: 2, md: 2.5 }, justifyContent: 'center', mt: { xs: 2, sm: 4 } }}>
                  {primaryBtn && (
                    <ButtonAnimationWrapper>
                      <Button color="primary" size="large" variant="contained" {...primaryBtn} />
                    </ButtonAnimationWrapper>
                  )}
                  {secondaryBtn && (
                    <ButtonAnimationWrapper>
                      <Button color="primary" size="large" variant="outlined" {...secondaryBtn} />
                    </ButtonAnimationWrapper>
                  )}
                </Stack>
              </motion.div>
            )}

            <Box sx={{ mt: { xs: 3, sm: 4, md: 5 }, height: { xs: 196, sm: 360, md: 479 } }}>
              <GraphicsImage
                image={image}
                sx={{
                  height: '100%',
                  border: '5px solid',
                  borderColor: 'grey.300',
                  borderBottom: 'none',
                  backgroundPosition: 'top',
                  borderTopLeftRadius: imageRadius,
                  borderTopRightRadius: imageRadius
                }}
              />
            </Box>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/hero/Hero4.tsx
```tsx
// @next
import NextLink from 'next/link';

// @mui
import Avatar from '@mui/material/Avatar';
import Chip, { ChipProps } from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { SpriteIconProps } from '@/types/icon';

interface ListDataProps {
  icon: SpriteIconProps;
  title: string;
  description: string;
}

interface Props {
  chip?: {
    label: ChipProps['label'];
    link?: LinkProps;
  };
  headLine: string;
  captionLine: string;
  image1: ImageCommonProps;
  image2: ImageCommonProps;
  listData: ListDataProps[];
}

/***************************  HERO 4 - DATA  ***************************/

const pattern = { light: '/assets/images/shared/pattern1-light.svg', dark: '/assets/images/shared/pattern1-dark.svg' };

/***************************  HERO - 4  ***************************/

export default function Hero4({ chip, headLine, captionLine, image1, image2, listData }: Props): JSX.Element {
  const block1ImagePadding = { xs: 2, sm: 4, md: 6 };
  const iconBoxSize = { xs: 48, md: 72 };

  return (
    <Stack sx={{ gap: { xs: 4, md: 5 }, py: SECTION_COMMON_PY }}>
      <ContainerWrapper>
        <Stack sx={{ alignItems: 'center', gap: { xs: 1.5, md: 3 } }}>
          {chip && (
            <Chip
              label={
                typeof chip.label === 'string' ? (
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {chip.label}
                    {chip.link && (
                      <Link
                        component={NextLink}
                        variant="caption"
                        color="primary.main"
                        {...chip.link}
                        underline="hover"
                        sx={{ '&:hover': { color: 'primary.dark' } }}
                      />
                    )}
                  </Typography>
                ) : (
                  chip.label
                )
              }
              sx={{ bgcolor: 'grey.100' }}
            />
          )}

          <Typeset
            {...{
              heading: headLine,
              caption: captionLine,
              headingProps: { variant: 'h1', sx: { maxWidth: 800 } },
              captionProps: { sx: { maxWidth: 500 } },
              stackProps: { sx: { alignItems: 'center', textAlign: 'center', gap: { xs: 2, md: 3 } } }
            }}
          />
        </Stack>
      </ContainerWrapper>
      <Grid container spacing={1.5} sx={{ px: 1.5 }}>
        <Grid size={{ xs: 12, sm: 5 }}>
          <GraphicsCard sx={{ height: { xs: 264, sm: 1 } }} bgImage={pattern}>
            <GraphicsImage sx={{ height: 1, backgroundSize: 'contain' }} image={image1} />
          </GraphicsCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 7 }}>
          <GraphicsCard>
            <Box sx={{ mb: { xs: -3, sm: -4 }, pl: block1ImagePadding, pt: block1ImagePadding, height: { xs: 197, sm: 335, md: 460 } }}>
              <GraphicsImage
                sx={{
                  height: '100%',
                  backgroundPositionX: 'left',
                  backgroundPositionY: 'top',
                  borderTopLeftRadius: { xs: 12 }
                }}
                image={image2}
              />
            </Box>
            <GraphicsCard sx={{ bgcolor: 'grey.300', p: { xs: 2, md: 5 } }}>
              <Grid container spacing={{ xs: 1.5, md: 4 }}>
                {listData.map((item, index) => (
                  <Grid key={index} size={6}>
                    <Stack direction="row" sx={{ gap: { xs: 1, sm: 2 } }}>
                      <Avatar
                        sx={{
                          width: iconBoxSize,
                          height: iconBoxSize,
                          bgcolor: 'grey.200',
                          borderRadius: 4,
                          '& svg': { width: { xs: 24, md: 40 }, height: { xs: 24, md: 40 }, strokeWidth: { md: 1.5 } }
                        }}
                      >
                        <SvgIcon
                          color="text.primary"
                          type={IconType.CUSTOM}
                          {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })}
                        />
                      </Avatar>
                      <Typeset
                        {...{
                          heading: item.title,
                          caption: item.description,
                          stackProps: { sx: { gap: 0.625 } },
                          headingProps: { variant: 'h3' },
                          captionProps: { variant: 'body1' }
                        }}
                      />
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </GraphicsCard>
          </GraphicsCard>
        </Grid>
      </Grid>
    </Stack>
  );
}

```

  

File: src/blocks/hero/Hero16.tsx
```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GetImagePath from '@/utils/GetImagePath';
import { GraphicsCard } from '@/components/cards';
import { ProfileGroup2 } from '@/components/cards/profile-card';
import { SECTION_COMMON_PY } from '@/utils/constant';
import Typeset from '@/components/Typeset';

// @types
import { ImageComponentProps } from '@/types/graphics';

interface Props {
  reviewData: {
    avatarList: string[];
    rating: number;
    totalReviews: string;
  };
  heading: string;
  caption?: string;
  secondaryBtn?: ButtonProps;
  poster: ImageComponentProps;
  videoSrc: string;
}

/***************************  HERO - 16  ***************************/

export default function Hero16({ reviewData, heading, caption, secondaryBtn, poster, videoSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6 // Adjust threshold as needed
    };

    // Handle video play/pause based on intersection with the viewport
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoElement && !isPlaying) {
            videoElement
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.error('Autoplay was prevented:', error);
              });
          }
        } else {
          if (videoElement && isPlaying) {
            videoElement.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isPlaying]);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ justifyContent: 'center', gap: 3 }}>
        <ProfileGroup2 {...reviewData} starColor="primary.main" />
        <Stack direction={{ md: 'row' }} sx={{ width: 1, justifyContent: 'space-between', alignItems: { xs: 'start', md: 'end' }, gap: 3 }}>
          <Typeset
            {...{
              heading,
              caption,
              headingProps: { variant: 'h1', sx: { maxWidth: { xs: 350, sm: 500, md: 709 } } },
              captionProps: { sx: { maxWidth: { xs: 343, md: 500 } } }
            }}
          />
          <Button color="primary" size="large" variant="outlined" {...secondaryBtn} sx={{ minWidth: 194 }} />
        </Stack>
      </Stack>
      <GraphicsCard sx={{ mt: 4 }}>
        <video
          playsInline
          ref={videoRef}
          width="100%"
          height="100%"
          style={{ maxHeight: '691px', display: 'flex', objectFit: 'cover' }}
          controls
          preload="metadata"
          poster={GetImagePath(poster)}
          autoPlay={false}
          loop={false}
          muted={true}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/hero/Hero17.tsx
```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip, { ChipProps } from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion, useScroll, useTransform } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

// @assets
import Wave from '@/images/graphics/Wave';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface ListDataProps {
  image: ImageCommonProps;
  title: string;
}

interface Props {
  chip: {
    label: ChipProps['label'];
  };
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
  videoSrc: string;
  listData: ListDataProps[];
}

// threshold - adjust threshold as needed
const options = { root: null, rootMargin: '0px', threshold: 0.6 };

/***************************  HERO - 17  ***************************/

export default function Hero17({ chip, headLine, captionLine, primaryBtn, videoSrc, listData }: Props): JSX.Element {
  const theme = useTheme();
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0.9, 0.92, 0.94, 0.96, 1]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle video play/pause based on intersection with the viewport
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current && !isPlaying) {
            videoRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.error('Autoplay was prevented:', error);
              });
          }
        } else {
          if (videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isPlaying]);

  return (
    <>
      <Box
        sx={{
          height: { xs: 592, sm: 738, md: 878 },
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          zIndex: -1,
          borderBottomLeftRadius: boxRadius,
          borderBottomRightRadius: boxRadius,
          background: getBackgroundDots(theme.palette.grey[300], 60, 35),
          bgcolor: 'grey.100'
        }}
      ></Box>
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box ref={containerRef}>
          <Box sx={{ pb: { xs: 3, sm: 4, md: 5 } }}>
            <Stack sx={{ alignItems: 'center', gap: 1.5 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Chip
                  variant="outlined"
                  label={
                    typeof chip.label === 'string' ? (
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {chip.label}
                      </Typography>
                    ) : (
                      chip.label
                    )
                  }
                  sx={{ bgcolor: 'grey.100', '& .MuiChip-label': { py: 0.5, px: 1.5 } }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Typography variant="h1" align="center" sx={{ maxWidth: 800 }}>
                  {headLine}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Box sx={{ pt: 0.5, pb: 0.75 }}>
                  <Wave />
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Typography variant="h6" align="center" sx={{ color: 'text.secondary', maxWidth: 650 }}>
                  {captionLine}
                </Typography>
              </motion.div>
            </Stack>
            <Stack sx={{ alignItems: 'center', gap: 2, mt: { xs: 3, sm: 4, md: 5 } }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <ButtonAnimationWrapper>
                  <Button
                    color="primary"
                    variant="contained"
                    startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                    {...primaryBtn}
                  />
                </ButtonAnimationWrapper>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {listData.map((item, index) => (
                    <Chip
                      key={index}
                      label={<Typography variant="caption2">{item.title}</Typography>}
                      variant="outlined"
                      icon={<GraphicsImage image={item.image} sx={{ width: 16, height: 16 }} />}
                      sx={{ height: 32, px: 1, bgcolor: 'grey.100', '& .MuiChip-label': { py: 0.75, px: 1 } }}
                    />
                  ))}
                </Stack>
              </motion.div>
            </Stack>
          </Box>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            style={{ scale }}
          >
            <GraphicsCard sx={{ border: '5px solid', borderColor: 'grey.300' }}>
              <video
                playsInline
                ref={videoRef}
                width="100%"
                height="100%"
                style={{ display: 'flex', objectFit: 'cover' }}
                preload="metadata"
                autoPlay={false}
                loop={true}
                muted={true}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </GraphicsCard>
          </motion.div>
        </Box>
      </ContainerWrapper>
    </>
  );
}

```

  

File: src/blocks/hero/Hero15.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import { ProfileGroup2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BgImageProps, ImageCommonProps } from '@/types/graphics';

interface Props {
  reviewData: {
    avatarList: string[];
    rating: number;
    totalReviews: string;
  };
  heading: string;
  caption?: string;
  image: ImageCommonProps;
  imageBorder?: boolean;
  bgImage: BgImageProps;
  benefitData: {
    counter: string;
    caption: string;
    defaultUnit?: string;
  };
  primaryBtn?: ButtonProps;
  secondaryBtn?: ButtonProps;
}

/***************************  HERO - 15  ***************************/

export default function Hero15({
  reviewData,
  heading,
  caption,
  image,
  imageBorder = false,
  bgImage,
  benefitData,
  primaryBtn,
  secondaryBtn
}: Props) {
  const theme = useTheme();
  const boxSpacing = { xs: 1, sm: 1.5 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: { xs: 2, sm: 3 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          <ProfileGroup2 {...reviewData} starColor="primary.main" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { textAlign: 'center', alignItems: 'center' } },
              headingProps: { variant: 'h1', sx: { maxWidth: { xs: 350, sm: 500, md: 709 } } },
              captionProps: { sx: { maxWidth: { xs: 343, md: 500 } } }
            }}
          />
        </motion.div>
      </Stack>
      <Grid container spacing={boxSpacing} sx={{ mt: { xs: 4.5, sm: 5.5, md: 6.5 } }}>
        <Grid size={{ xs: 12, sm: 7, md: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard
              sx={{ height: 1, p: { xs: 3, sm: 4, md: 5 } }}
              bgImage={{ light: '/assets/images/shared/pattern1-light.svg', dark: '/assets/images/shared/pattern1-dark.svg' }}
            >
              <GraphicsImage
                sx={{
                  height: 1,
                  minHeight: { xs: 210, sm: 400 },
                  backgroundSize: 'contain',
                  ...(imageBorder && {
                    backgroundSize: 'cover',
                    backgroundPosition: 'top left',
                    borderRadius: 3,
                    border: '4px solid',
                    borderColor: 'divider'
                  })
                }}
                image={image}
              />
            </GraphicsCard>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 4 }}>
          <Stack sx={{ gap: boxSpacing }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4
              }}
            >
              <GraphicsCard
                sx={{ height: { xs: 136, sm: 398, md: 380 }, p: { xs: 2.5, smd: 3 } }}
                bgImage={bgImage}
                overLay={`linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0.6)} 0%, ${alpha(theme.palette.grey[100], 0)} 100%)`}
              >
                <Stack direction="row" sx={{ gap: { xs: 0.75, md: 1 }, alignItems: 'center' }}>
                  <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                    <Typography variant="h2">{benefitData.counter}</Typography>
                    {benefitData.defaultUnit && (
                      <Typography variant="h3" sx={{ mb: { xs: 0.25, md: 0.5 } }}>
                        {benefitData.defaultUnit}
                      </Typography>
                    )}
                  </Stack>
                  <Typography variant="body2">{benefitData.caption}</Typography>
                </Stack>
              </GraphicsCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5
              }}
            >
              <GraphicsCard>
                <Stack direction="row" sx={{ p: { xs: 2, md: 3 }, gap: 1.5 }}>
                  <ButtonAnimationWrapper style={{ width: '50%' }}>
                    <Button color="primary" fullWidth size="large" variant="contained" {...primaryBtn} />
                  </ButtonAnimationWrapper>
                  <ButtonAnimationWrapper style={{ width: '50%' }}>
                    <Button color="primary" fullWidth size="large" variant="outlined" {...secondaryBtn} />
                  </ButtonAnimationWrapper>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Stack>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/hero/Hero13.tsx
```tsx
'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  exploreBtn: ButtonProps;
  images: ImageCommonProps[];
}

/***************************  HERO - 13  ***************************/

export default function Hero13({ heading, caption, exploreBtn, images }: Props): JSX.Element {
  const settings: Settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    centerMode: true,
    initialSlide: 2,
    variableWidth: true
  };

  return (
    <Stack sx={{ alignItems: 'center', py: SECTION_COMMON_PY }}>
      <ContainerWrapper>
        <Typeset
          {...{
            heading,
            caption,
            stackProps: { sx: { textAlign: 'center', alignItems: 'center' } },
            headingProps: { variant: 'h1', sx: { maxWidth: { xs: 400, sm: 550, md: 710 } } },
            captionProps: { sx: { maxWidth: { xs: 400, sm: 450, md: 520 } } }
          }}
        />
        <Stack direction="row" sx={{ justifyContent: 'center', gap: { xs: 1, sm: 2, md: 2.5 }, mt: { xs: 3, sm: 4, md: 5 } }}>
          <Button
            color="primary"
            variant="contained"
            size="small"
            startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
            {...exploreBtn}
          />
        </Stack>
      </ContainerWrapper>
      <Stack sx={{ width: 1, height: 1, mt: { xs: 4, md: 8 } }}>
        <Slider {...settings}>
          {images.map((item, index) => (
            <Box key={index} sx={{ px: 0.75 }}>
              <GraphicsImage
                {...{ image: item, cardMediaProps: { component: 'img' } }}
                sx={{
                  height: 'auto',
                  width: 1,
                  maxWidth: { xs: 200, sm: 1 },
                  backgroundPosition: 'top',
                  backgroundSize: 'contain',
                  borderRadius: { xs: 6, sm: 8, md: 10 }
                }}
              />
            </Box>
          ))}
        </Slider>
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/hero/Hero11.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileGroup2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Wave from '@/images/graphics/Wave';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { SpriteIconProps } from '@/types/icon';

interface ListDataProps {
  icon: SpriteIconProps;
  title: string;
}

interface BenefitDataProps {
  counter: string;
  caption: string;
  defaultUnit?: string;
}

interface Props {
  headLine: string;
  captionLine: string;
  reviewData: {
    avatarList: string[];
    rating: number;
    totalReviews: string;
  };
  primaryBtn: ButtonProps;
  helperText: string;
  image: ImageCommonProps;
  benefitData: {
    data1: BenefitDataProps;
    data2: BenefitDataProps;
  };
  sliderTitle: string;
  listData: ListDataProps[];
}

/***************************  HERO - COUNTER BLOCK  ***************************/

function CounterBlock({ counter, defaultUnit, caption }: BenefitDataProps) {
  return (
    <Stack sx={{ gap: { xs: 0.5, sm: 1 }, py: { xs: 1, sm: 1.5, md: 3 }, alignItems: 'center' }}>
      <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
        <Typography component="div" variant="h3">
          {counter}
        </Typography>
        {defaultUnit && (
          <Typography component="div" variant="h4" sx={{ color: 'text.secondary' }}>
            {defaultUnit}
          </Typography>
        )}
      </Stack>
      <Typography align="center" sx={{ color: 'text.secondary' }}>
        {caption}
      </Typography>
    </Stack>
  );
}

/***************************  HERO - 11  ***************************/

export default function Hero11({
  reviewData,
  headLine,
  captionLine,
  primaryBtn,
  helperText,
  image,
  benefitData,
  sliderTitle,
  listData
}: Props): JSX.Element {
  const theme = useTheme();

  const settings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    initialSlide: 0,
    centerMode: true,
    responsive: [
      { breakpoint: theme.breakpoints.values.md - 1, settings: { slidesToShow: 3, centerPadding: '95px' } },
      { breakpoint: theme.breakpoints.values.sm - 1, settings: { slidesToShow: 2, centerMode: false } }
    ]
  };

  const shade = {
    content: `' '`,
    zIndex: 1,
    position: 'absolute',
    width: { sm: 60, xs: 40 },
    height: 1,
    top: 0,
    background: `linear-gradient(90deg, ${theme.palette.grey[100]} -8.54%, ${alpha(theme.palette.grey[100], 0)} 100%)`,
    ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' })
  };

  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(78.31% 78.31% at 50% 38.68%, ${alpha(theme.palette.grey[100], 0)} 0%, ${alpha(theme.palette.grey[100], 0.45)} 100%)`
      : `radial-gradient(94.19% 94.19% at 50% 26.18%, ${alpha(theme.palette.grey[100], 0)} 0%, ${alpha(theme.palette.grey[100], 0.7)} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 8.5 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard>
              <Stack
                sx={{ gap: 4, height: 1, p: { xs: 2, sm: 5, md: 7 }, minHeight: { sm: 514, md: 624 }, justifyContent: 'space-between' }}
              >
                <Stack sx={{ gap: { xs: 4, md: 6 } }}>
                  <ProfileGroup2 {...reviewData} starColor="warning.main" />
                  <Typeset
                    {...{
                      heading: headLine,
                      caption: captionLine,
                      stackProps: { sx: { gap: { xs: 1, sm: 2, md: 3 } } },
                      headingProps: { variant: 'h1' },
                      captionProps: { variant: 'h6' }
                    }}
                  />
                </Stack>
                <Stack sx={{ gap: 0.75, alignItems: 'start' }}>
                  <OutlinedInput
                    placeholder="Enter your email address"
                    endAdornment={<Button color="primary" variant="contained" sx={{ px: 4, minWidth: 100 }} {...primaryBtn} />}
                    slotProps={{ input: { 'aria-label': 'Email address' } }}
                    sx={{
                      ...theme.typography.caption2,
                      color: 'secondary.main',
                      p: 0.5,
                      whiteSpace: 'nowrap',
                      '& .MuiOutlinedInput-input': { p: '6px 20px' },
                      '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
                    }}
                  />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {helperText}
                  </Typography>
                </Stack>
              </Stack>
            </GraphicsCard>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, sm: 3.5 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ height: 1, justifyContent: 'end' }}>
                <Stack
                  direction={{ xs: 'row', sm: 'column' }}
                  sx={{ alignItems: 'center', px: { xs: 3, sm: 2, md: 5 }, pt: { xs: 3, sm: 0 } }}
                >
                  <CounterBlock {...benefitData.data1} />
                  <Box component="span" sx={{ rotate: { xs: '90deg', sm: '180deg' }, py: 0.75 }}>
                    <Wave />
                  </Box>
                  <CounterBlock {...benefitData.data2} />
                </Stack>
                <Box sx={{ height: { xs: 157, sm: 226 }, position: 'relative' }}>
                  <GraphicsImage sx={{ height: 1, backgroundPositionY: 'top' }} image={image} />
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: gradient }} />
                </Box>
              </Stack>
            </GraphicsCard>
          </motion.div>
        </Grid>
        <Grid size={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            <GraphicsCard>
              <Stack sx={{ py: 3, gap: { xs: 2, md: 4 } }}>
                <Typography variant="subtitle2" align="center" sx={{ color: 'secondary.main' }}>
                  {sliderTitle}
                </Typography>
                <Box
                  sx={{
                    position: 'relative',
                    '&:before': { ...shade, left: 0 },
                    '&:after': { ...shade, right: 0, rotate: '180deg' },
                    '.slick-track': { display: 'flex' },
                    '.slick-slide': { height: 'inherit' },
                    '.slick-slide > div': { height: '100%' }
                  }}
                >
                  <Slider {...settings}>
                    {listData.map((item, index) => (
                      <Box key={index} sx={{ position: 'relative', height: 1 }}>
                        <Stack sx={{ gap: 1.5, alignItems: 'center', justifyContent: 'center', px: 2 }}>
                          <Avatar sx={{ width: 56, height: 56, bgcolor: 'grey.200', borderRadius: 4 }}>
                            <SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                          </Avatar>
                          <Typography align="center" sx={{ color: 'text.secondary' }}>
                            {item.title}
                          </Typography>
                        </Stack>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            height: 'calc(100% - 24px)',
                            transform: 'translateY(-50%)',
                            borderColor: 'grey.300'
                          }}
                        />
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Stack>
            </GraphicsCard>
          </motion.div>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/hero/Hero12.tsx
```tsx
'use client';

import { ReactElement } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import GradientFab from '@/components/GradientFab';
import SvgIcon from '@/components/SvgIcon';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @third-party
import Marquee from 'react-fast-marquee';

// @assets
import Circles from '@/images/Circles';

interface Props {
  headLine: string | ReactElement;
  captionLine: string | ReactElement;
  list: string[];
  exploreBtn: ButtonProps;
}

/***************************  HERO - 12  ***************************/

export default function Hero12({ exploreBtn, list, headLine, captionLine }: Props) {
  const theme = useTheme();
  const iconSize = { xs: 16, sm: 24 };
  const arcSX = { width: 12, height: 12, bgcolor: 'background.default', borderRadius: 6.25 };

  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', position: 'relative', py: SECTION_COMMON_PY }}>
      <Stack
        direction="row"
        sx={{
          justifyContent: 'center',
          height: 1,
          width: 1,
          maxHeight: { xs: 507, sm: 744, md: 781 },
          position: 'absolute',
          zIndex: -1,
          px: { xs: 1, sm: 2.5 }
        }}
      >
        <Circles />
      </Stack>
      <Stack sx={{ py: { xs: 2, sm: 5, md: 6 }, gap: { xs: 4, sm: 5, md: 8 }, width: 1, alignItems: 'center' }}>
        <Stack sx={{ px: 2, alignItems: 'center', '& .gradient-fab': { display: 'contents' } }}>
          <GradientFab type="star" size={55} icon={<SvgIcon name="tabler-cloud-up" />} />
          <Stack sx={{ gap: 2, textAlign: 'center', alignItems: 'center', mt: 3 }}>
            {headLine}
            {captionLine}
          </Stack>
          <Button
            color="primary"
            variant="contained"
            startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
            sx={{ mt: { xs: 4, sm: 7 } }}
            {...exploreBtn}
          />
        </Stack>
        <Stack direction="row" sx={{ alignItems: 'center', width: 1 }}>
          <Marquee pauseOnHover autoFill {...(theme.direction === ThemeDirection.RTL && { direction: 'right' })}>
            {list.map((item, index) => (
              <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', mx: 0.75 }} key={index}>
                <Chip
                  label={
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  }
                  icon={<SvgIcon name="tabler-rosette-discount-check" stroke={1} color="grey.800" />}
                  sx={{
                    p: { xs: 1, md: 1.5 },
                    bgcolor: 'grey.100',
                    borderRadius: 4,
                    '& .MuiChip-label': { p: 0, pl: 1 },
                    '& svg.tabler-rosette-discount-check': { width: iconSize, height: iconSize }
                  }}
                />
                <Stack sx={{ gap: 0.5, position: 'absolute', right: -12, bgcolor: 'grey.100', borderRadius: 6.25 }}>
                  <Box sx={arcSX} />
                  <Box sx={arcSX} />
                </Stack>
              </Box>
            ))}
          </Marquee>
        </Stack>
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/hero/Hero14.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GradientFab from '@/components/GradientFab';
import SvgIcon from '@/components/SvgIcon';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Wave from '@/images/graphics/Wave';
import DrawnArrow from '@/images/graphics/DrawnArrow';

// @types
import { SmallHeroProps } from '@/types/small-hero';
import { SpriteIconProps } from '@/types/icon';

interface ListItem {
  title: string;
  icon: SpriteIconProps;
}
interface Props extends SmallHeroProps {
  tagline?: string;
  list: ListItem[];
  primaryBtn: ButtonProps;
}

/***************************  HERO - 14  ***************************/

export default function Hero14({ headLine, captionLine, tagline, list, primaryBtn }: Props) {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard>
        <Stack sx={{ p: { xs: 3, sm: 4 }, alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {tagline}
          </Typography>
          <Box sx={{ mb: { xs: 2, md: 3 }, mt: { xs: 1, sm: 1.5 } }}>
            <Wave />
          </Box>
          {headLine}
          {captionLine && (
            <Typography align="center" sx={{ color: 'text.secondary', maxWidth: { xs: 400, md: 500 }, mt: { xs: 1.5, sm: 2 } }}>
              {captionLine}
            </Typography>
          )}
          <Stack direction="row" sx={{ justifyContent: 'center', mt: 5, position: 'relative' }}>
            <Box
              component="span"
              sx={{
                position: 'absolute',
                top: '-10px',
                left: '-25px',
                ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' })
              }}
            >
              <DrawnArrow />
            </Box>
            <OutlinedInput
              placeholder="Enter your email address"
              endAdornment={<Button color="primary" variant="contained" sx={{ px: 4 }} {...primaryBtn} />}
              slotProps={{ input: { 'aria-label': 'Email address' } }}
              sx={{
                ...theme.typography.caption2,
                color: 'secondary.main',
                p: 0.5,
                whiteSpace: 'nowrap',
                '& .MuiOutlinedInput-input': { p: '6px 20px' },
                '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
              }}
            />
          </Stack>
        </Stack>
      </GraphicsCard>
      <Box sx={{ mt: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={{ xs: 1.5, sm: 3 }} sx={{ justifyContent: 'center' }}>
          {list.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4, md: 3 }}>
              <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center', '& .gradient-fab': { display: 'contents' } }}>
                <GradientFab
                  type="round"
                  icon={<SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />}
                />
                <Stack sx={{ justifyContent: 'center' }}>
                  <Typography sx={{ color: 'text.secondary' }}>{item.title}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/hero/Hero1.tsx
```tsx
'use client';

import { isValidElement, ReactElement, useRef } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Chip, { ChipProps } from '@mui/material/Chip';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion, useScroll, useTransform } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  chip?: {
    label: ChipProps['label'];
    link?: LinkProps;
  };
  headLine?: string | ReactElement;
  captionLine?: string;
  image: ImageCommonProps;
  primaryBtn?: ButtonProps;
  secondaryBtn?: ButtonProps;
}

/***************************  HERO - 1  ***************************/

export default function Hero1({ chip, headLine, captionLine, image, primaryBtn, secondaryBtn }: Props): JSX.Element {
  const imageRadius = { xs: 12, sm: 16, md: 20 };
  const cardPadding = { xs: 3, sm: 5, md: 8 };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0.9, 0.92, 0.94, 0.96, 1]);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Box ref={containerRef}>
        <Stack sx={{ alignItems: 'center', gap: { xs: 1.5, md: 3 } }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.215, 0.61, 0.355, 1]
            }}
          >
            {chip && (
              <Chip
                label={
                  typeof chip.label === 'string' ? (
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {chip.label}
                      {chip.link && (
                        <Link
                          component={NextLink}
                          variant="caption"
                          color="primary.main"
                          {...chip.link}
                          underline="hover"
                          sx={{ '&:hover': { color: 'primary.dark' } }}
                        />
                      )}
                    </Typography>
                  ) : (
                    chip.label
                  )
                }
                sx={{ bgcolor: 'grey.100' }}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.215, 0.61, 0.355, 1]
            }}
          >
            {isValidElement(headLine) ? (
              headLine
            ) : (
              <Typography variant="h1" align="center" sx={{ width: { xs: 343, sm: 700, md: 850 } }}>
                {headLine}
              </Typography>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.215, 0.61, 0.355, 1]
            }}
          >
            {captionLine && (
              <Typography variant="h6" align="center" sx={{ color: 'text.secondary', width: { xs: 350, sm: 350, md: 500 } }}>
                {captionLine}
              </Typography>
            )}
          </motion.div>
        </Stack>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          {(primaryBtn || secondaryBtn) && (
            <Stack direction="row" sx={{ justifyContent: 'center', gap: { xs: 1, sm: 2, md: 2.5 }, mt: { xs: 2, sm: 4 } }}>
              <ButtonAnimationWrapper>
                {primaryBtn && (
                  <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    {...primaryBtn}
                    rel="noopener noreferrer"
                    aria-label="Open New Tab"
                  />
                )}
              </ButtonAnimationWrapper>
              <ButtonAnimationWrapper>
                {secondaryBtn && (
                  <Button
                    color="primary"
                    size="large"
                    variant="outlined"
                    {...secondaryBtn}
                    rel="noopener noreferrer"
                    aria-label="Open New Tab"
                  />
                )}
              </ButtonAnimationWrapper>
            </Stack>
          )}
        </motion.div>
        <Box sx={{ position: 'sticky', top: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            style={{ scale }}
          >
            <GraphicsCard sx={{ mt: { xs: 3, sm: 4, md: 5 } }}>
              <Box sx={{ px: cardPadding, pt: cardPadding, height: { xs: 220, sm: 400, md: 543 } }}>
                <GraphicsImage
                  {...{ image }}
                  sx={{
                    border: '5px solid',
                    borderColor: 'grey.200',
                    borderBottom: 'none',
                    height: '100%',
                    backgroundPosition: 'top',
                    borderTopLeftRadius: imageRadius,
                    borderTopRightRadius: imageRadius
                  }}
                />
              </Box>
            </GraphicsCard>
          </motion.div>
        </Box>
      </Box>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/hero/Hero10.tsx
```tsx
'use client';

import { ReactElement } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ProfileGroup from '@/components/cards/profile-card/ProfileGroup1';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  chipTitle: string;
  headLine: string | ReactElement;
  captionLine: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
  image: ImageCommonProps;
  reviewData: {
    avatarList: string[];
    review: string;
  };
}

/***************************  HERO - 10  ***************************/

export default function Hero10({ chipTitle, headLine, captionLine, primaryBtn, secondaryBtn, image, reviewData }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.1
        }}
      >
        <GraphicsCard sx={{ p: { xs: 3, sm: 4, md: 8 }, position: 'relative' }}>
          <Stack>
            <GraphicsImage
              {...{ image }}
              sx={{
                height: { xs: 400, sm: 533, md: 742 },
                backgroundPosition: 'right',
                backgroundSize: 'contain',
                mt: { xs: '-15%', sm: '-10%', md: '-14%' },
                mr: { xs: '-10%', md: '-7%' },
                position: 'relative'
              }}
            >
              <Box sx={{ width: 1, height: 1, background: alpha(theme.palette.grey[100], 0.4) }} />
            </GraphicsImage>
            <Stack direction="row" sx={{ justifyContent: 'end', mt: 6.5, display: { xs: 'none', sm: 'flex' } }}>
              <ProfileGroup avatarList={reviewData.avatarList} review={reviewData.review} position="center" />
            </Stack>
          </Stack>
          <Box sx={{ mb: { sm: 4, md: 8 }, mt: { xs: 2, sm: 0 }, position: { sm: 'absolute' }, bottom: 0 }}>
            <Stack direction="row" sx={{ alignItems: 'center', gap: 1, mb: { xs: 2, md: 3 } }}>
              <Chip
                label={
                  <Typography variant="caption" sx={{ color: 'secondary.main' }}>
                    {chipTitle}
                  </Typography>
                }
                variant="outlined"
                sx={{ borderColor: theme.palette.grey[600], '& .MuiChip-label': { py: 0.75, px: 2 } }}
              />
              <Divider sx={{ width: 50, borderBottomWidth: 2, borderRadius: 1 }} />
            </Stack>

            <Stack sx={{ gap: { xs: 1.5, md: 2 } }}>
              {headLine}
              <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: { sm: 350, md: 500 } }}>
                {captionLine}
              </Typography>
            </Stack>

            <Stack direction={{ sm: 'row' }} sx={{ gap: { xs: 1, sm: 1.5, md: 2.5 }, mt: { xs: 4, sm: 6, md: 8 } }}>
              <ButtonAnimationWrapper>
                <Button
                  color="primary"
                  variant="contained"
                  endIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                  {...primaryBtn}
                />
              </ButtonAnimationWrapper>
              <ButtonAnimationWrapper>
                <Button color="primary" variant="outlined" {...secondaryBtn} />
              </ButtonAnimationWrapper>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: 'center', mt: 4, display: { xs: 'flex', sm: 'none' } }}>
              <ProfileGroup avatarList={reviewData.avatarList} review={reviewData.review} position="center" />
            </Stack>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/integration/Integration8.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';
import Typeset from '@/components/Typeset';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface AvatarProps {
  src: ImageCommonProps;
  reverse?: boolean;
}

/***************************  INTEGRATION - AVATAR  ***************************/

function IntegrationAvatar({ src, reverse }: AvatarProps) {
  const theme = useTheme();

  const avatarSize = { xs: 83, sm: 105, md: 140 };
  const iconSize = { xs: 24, sm: 30, md: 40 };

  return (
    <Box
      sx={{
        background: reverse
          ? `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.background.default, 0)} 100%)`
          : `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0)} 0%, ${theme.palette.background.default} 100%)`,
        p: 0.125,
        borderRadius: { xs: 12, sm: 15, md: 20 }
      }}
    >
      <Avatar sx={{ bgcolor: 'grey.100', width: avatarSize, height: avatarSize }}>
        <GraphicsImage image={src} sx={{ width: iconSize, height: iconSize }} />
      </Avatar>
    </Box>
  );
}

interface Props {
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
}

/***************************  INTEGRATION - 8  ***************************/

export default function Integration8({ headLine, captionLine, primaryBtn }: Props) {
  const theme = useTheme();
  const grey100 = theme.palette.grey[100];

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5
        }}
      >
        <GraphicsCard>
          <GraphicsCard sx={{ position: 'relative' }}>
            <Stack direction="row" sx={{ justifyContent: 'center' }}>
              <IntegrationAvatar src="/assets/images/integration/asana.png" />
              <IntegrationAvatar src="/assets/images/integration/slack.png" />
              <IntegrationAvatar src="/assets/images/integration/intercom.png" />
              <IntegrationAvatar src="/assets/images/integration/paypal.png" />
              <IntegrationAvatar src="/assets/images/integration/dropbox.png" />
              <IntegrationAvatar src="/assets/images/integration/jira.png" />
              <IntegrationAvatar src="/assets/images/integration/zoom.png" />
            </Stack>
            <Stack direction="row" sx={{ justifyContent: 'center', mt: { xs: -1.5, sm: -1.75, md: -2.5 } }}>
              <IntegrationAvatar src="/assets/images/integration/skype.png" reverse />
              <IntegrationAvatar src="/assets/images/integration/master-card.png" reverse />
              <IntegrationAvatar src="/assets/images/integration/trip-advicer.png" reverse />
              <IntegrationAvatar src="/assets/images/integration/google-drive.png" reverse />
              <IntegrationAvatar src="/assets/images/integration/loom.png" reverse />
              <IntegrationAvatar src="/assets/images/integration/mail-chimp.png" reverse />
              <IntegrationAvatar src="/assets/images/integration/messenger-facebook.png" reverse />
              <IntegrationAvatar src="/assets/images/integration/notion.png" reverse />
            </Stack>
            <Box
              sx={{
                background: `radial-gradient(51.92% 57.91% at 50% 53.14%, ${alpha(grey100, 0)} 0%, ${grey100} 200%)`,
                position: 'absolute',
                width: 1,
                height: 1,
                top: 0,
                zIndex: 1
              }}
            />
          </GraphicsCard>
          <GraphicsCard sx={{ bgcolor: 'grey.200' }}>
            <Stack sx={{ alignItems: 'center', p: { xs: 3, sm: 4, md: 5 }, gap: 4 }}>
              <Typeset
                {...{
                  heading: headLine,
                  caption: captionLine,
                  captionProps: { variant: 'body1', sx: { color: 'text.secondary' } },
                  stackProps: { sx: { textAlign: 'center', gap: { xs: 1, sm: 1.5 }, maxWidth: 700 } }
                }}
              />
              {primaryBtn && (
                <ButtonAnimationWrapper>
                  <Button variant="contained" size="large" {...primaryBtn} />
                </ButtonAnimationWrapper>
              )}
            </Stack>
          </GraphicsCard>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/integration/Integration7.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Marquee from 'react-fast-marquee';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { MarqueesDataProps, TagProps } from '@/types/integration';

/***************************  INTEGRATION - TAG  ***************************/

function IntegrationTag({ label, image }: TagProps) {
  const size = { xs: 24, sm: 36, md: 48 };

  return (
    <Chip
      label={<Typography variant="h5">{label}</Typography>}
      avatar={
        <Avatar alt="social" sx={{ bgcolor: 'background.default' }}>
          <GraphicsImage image={image!} sx={{ width: size, height: size }} />
        </Avatar>
      }
      sx={{
        px: { xs: 2.25, md: 3 },
        py: { xs: 2, sm: 2.75, md: 4 },
        mx: { xs: 0.5, sm: 0.75, md: 1 },
        minWidth: { sm: 150, md: 200 },
        bgcolor: 'background.default',
        borderRadius: { xs: 4, sm: 5, md: 7 },
        '& .MuiChip-label': { p: 0, pl: { xs: 1.25, sm: 1.5 } },
        '& .MuiChip-avatar': { width: 'auto', height: 'auto' }
      }}
    />
  );
}

interface Props {
  marquees: MarqueesDataProps[];
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
}

/***************************  INTEGRATION - 7  ***************************/

export default function Integration7({ headLine, primaryBtn, marquees }: Props) {
  const theme = useTheme();
  const grey100 = theme.palette.grey[100];

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 3, sm: 4 }}>
        <Grid size={12}>
          <Grid container spacing={{ xs: 3, sm: 1.5 }} sx={{ alignItems: 'flex-end' }}>
            <Grid size={{ xs: 12, sm: 7 }}>{headLine && <Typography variant="h2">{headLine}</Typography>}</Grid>
            <Grid size={{ xs: 12, sm: 5 }} sx={{ textAlign: { sm: 'right' } }}>
              {primaryBtn && <Button variant="contained" {...primaryBtn} />}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <GraphicsCard sx={{ position: 'relative' }}>
            <Stack sx={{ gap: { xs: 1, sm: 1.5, md: 2 }, py: { xs: 3.25, sm: 5, md: 7.875 } }}>
              {marquees.map((marquee, index) => (
                <Stack key={index} direction="row" sx={{ alignItems: 'center' }}>
                  <Marquee pauseOnHover {...(theme.direction === ThemeDirection.RTL && { direction: 'right' })} {...marquee.marqueeProps}>
                    {marquee.data.map((integration, index) => (
                      <IntegrationTag key={index} {...integration} />
                    ))}
                  </Marquee>
                </Stack>
              ))}
            </Stack>
            <Box
              sx={{
                background: `radial-gradient(59.52% 59.52% at 50.07% 49.93%, ${alpha(grey100, 0)} 0%, ${grey100} 200%)`,
                position: 'absolute',
                width: 1,
                height: 1,
                top: 0,
                zIndex: 1
              }}
            />
          </GraphicsCard>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/integration/Integration6.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import { Circle } from '@/icons';

// @types
import { SpriteIconProps } from '@/types/icon';

/***************************  INTEGRATION - TAG  ***************************/

interface IconBoxProps {
  size?: number;
  sx?: object;
  icon: SpriteIconProps;
}

function IconBox({ size, sx, icon }: IconBoxProps) {
  const theme = useTheme();
  const shadowColor = theme.palette.background.default;

  return (
    <Avatar
      variant="rounded"
      sx={{
        bgcolor: 'grey.300',
        position: 'relative',
        zIndex: 1,
        borderRadius: { xs: 9.25, sm: 16.75 },
        boxShadow: {
          xs: `0px 0px 0.4px 0px ${shadowColor}`,
          sm: `0px 0px 0.71px 0px ${shadowColor}`,
          md: `0px 0px 1px 0px ${shadowColor}`
        },
        ...sx
      }}
    >
      <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} size={size} color="text.primary" />
    </Avatar>
  );
}

interface Props {
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
}

/***************************  INTEGRATION - 6  ***************************/

export default function Integration6({ headLine, captionLine, primaryBtn }: Props) {
  const commonPosition = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ height: 1, py: { xs: 3, sm: 4, md: 5 }, px: 2, position: 'relative' }}>
        <Box
          sx={{
            width: { xs: 270, sm: 515, md: 740 },
            height: { xs: 270, sm: 515, md: 740 },
            '& svg': { width: { xs: 270, sm: 515, md: 740 }, height: { xs: 270, sm: 515, md: 740 } },
            ...commonPosition
          }}
        >
          <Circle color="grey.600" />
        </Box>
        <Box
          sx={{
            width: { xs: 220, sm: 415, md: 600 },
            height: { xs: 220, sm: 415, md: 600 },
            '& svg': { width: { xs: 220, sm: 415, md: 600 }, height: { xs: 220, sm: 415, md: 600 } },
            ...commonPosition
          }}
        >
          <Circle color="grey.600" />
        </Box>
        <Box
          sx={{
            width: { xs: 165, sm: 310, md: 450 },
            height: { xs: 165, sm: 310, md: 450 },
            '& svg': { width: { xs: 165, sm: 310, md: 450 }, height: { xs: 165, sm: 310, md: 450 } },
            ...commonPosition
          }}
        >
          <Circle color="grey.600" />
        </Box>
        <Box
          sx={{
            width: { xs: 105, sm: 195, md: 290 },
            height: { xs: 105, sm: 195, md: 290 },
            '& svg': { width: { xs: 105, sm: 195, md: 290 }, height: { xs: 105, sm: 195, md: 290 } },
            ...commonPosition
          }}
        >
          <Circle color="grey.600" />
        </Box>
        <Grid container spacing={2} sx={{ textAlign: 'center', justifyContent: 'center' }}>
          <Grid size={{ xs: 11, sm: 8, md: 7 }}>{headLine && <Typography variant="h2">{headLine}</Typography>}</Grid>
          <Grid size={12}>
            <Grid
              container
              spacing={{ xs: 1.5, sm: 2.65, md: 3.75 }}
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                my: { xs: 2.4, sm: 5.18, md: 1.1 },
                pt: { xs: 1.5, sm: 2.65, md: 3.75 }
              }}
            >
              <Grid>
                <IconBox
                  icon="tabler-brand-asana"
                  sx={{
                    width: { xs: 13, sm: 25, md: 36 },
                    height: { xs: 13, sm: 25, md: 36 },
                    '& svg.tabler-brand-asana': { width: { xs: 8, sm: 14, md: 18 }, height: { xs: 8, sm: 14, md: 18 } }
                  }}
                />
              </Grid>
              <Grid>
                <IconBox
                  icon="tabler-brand-messenger"
                  sx={{
                    width: { xs: 15, sm: 30, md: 42 },
                    height: { xs: 15, sm: 30, md: 42 },
                    '& svg.tabler-brand-messenger': { width: { xs: 10, sm: 18, md: 26 }, height: { xs: 10, sm: 18, md: 26 } }
                  }}
                />
              </Grid>
              <Grid>
                <IconBox
                  icon="tabler-brand-skype"
                  sx={{
                    width: { xs: 17, sm: 32, md: 46 },
                    height: { xs: 17, sm: 32, md: 46 },
                    '& svg.tabler-brand-skype': { width: { xs: 12, sm: 21, md: 30 }, height: { xs: 12, sm: 21, md: 30 } }
                  }}
                />
              </Grid>
              <Grid>
                <IconBox
                  icon="tabler-brand-google-drive"
                  sx={{
                    width: { xs: 21, sm: 40, md: 56 },
                    height: { xs: 21, sm: 40, md: 56 },
                    '& svg.tabler-brand-google-drive': { width: { xs: 13, sm: 23, md: 32 }, height: { xs: 13, sm: 23, md: 32 } }
                  }}
                />
              </Grid>
              <Grid>
                <Avatar
                  sx={{
                    width: { xs: 56, sm: 110, md: 170 },
                    height: { xs: 56, sm: 110, md: 170 },
                    bgcolor: 'grey.100',
                    '& .icon-logo': { width: { xs: 20, sm: 36, md: 51 } }
                  }}
                >
                  <LogoSection isIcon={true} />
                </Avatar>
              </Grid>
              <Grid>
                <IconBox
                  icon="tabler-brand-backbone"
                  sx={{
                    width: { xs: 21, sm: 40, md: 56 },
                    height: { xs: 21, sm: 40, md: 56 },
                    '& svg.tabler-brand-backbone': { width: { xs: 13, sm: 23, md: 32 }, height: { xs: 13, sm: 23, md: 32 } }
                  }}
                />
              </Grid>
              <Grid>
                <IconBox
                  icon="tabler-brand-slack"
                  sx={{
                    width: { xs: 17, sm: 32, md: 46 },
                    height: { xs: 17, sm: 32, md: 46 },
                    '& svg.tabler-brand-slack': { width: { xs: 12, sm: 21, md: 30 }, height: { xs: 12, sm: 21, md: 30 } }
                  }}
                />
              </Grid>
              <Grid>
                <IconBox
                  icon="tabler-brand-mastercard"
                  sx={{
                    width: { xs: 15, sm: 30, md: 42 },
                    height: { xs: 15, sm: 30, md: 42 },
                    '& svg.tabler-brand-mastercard': { width: { xs: 10, sm: 18, md: 26 }, height: { xs: 10, sm: 18, md: 26 } }
                  }}
                />
              </Grid>
              <Grid>
                <IconBox
                  icon="tabler-brand-tripadvisor"
                  sx={{
                    width: { xs: 13, sm: 25, md: 36 },
                    height: { xs: 13, sm: 25, md: 36 },
                    '& svg.tabler-brand-tripadvisor': { width: { xs: 8, sm: 14, md: 18 }, height: { xs: 8, sm: 14, md: 18 } }
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 5.5, lg: 5 }}>
            <Stack sx={{ gap: 2, alignItems: 'center' }}>
              {captionLine && (
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  {captionLine}
                </Typography>
              )}
              {primaryBtn && <Button variant="outlined" size="large" sx={{ py: 2.375 }} {...primaryBtn} />}
            </Stack>
          </Grid>
        </Grid>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/integration/Integration4.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import Marquee from 'react-fast-marquee';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { MarqueesDataProps } from '@/types/integration';
import { ImageCommonProps } from '@/types/graphics';

/***************************  INTEGRATION - TAG  ***************************/

function IntegrationAvatar({ src }: { src: ImageCommonProps }) {
  const avatarSize = { xs: 106, sm: 110, md: 126 };
  const iconSize = { xs: 40, sm: 45 };

  return (
    <Avatar sx={{ bgcolor: 'background.default', width: avatarSize, height: avatarSize, borderRadius: { xs: 6.3, sm: 6.5, md: 7.5 } }}>
      <GraphicsImage image={src} sx={{ width: iconSize, height: iconSize }} />
    </Avatar>
  );
}

interface Props {
  marquees: MarqueesDataProps[];
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
}

/***************************  INTEGRATION - 4  ***************************/

export default function Integration4({ headLine, captionLine, primaryBtn, marquees }: Props) {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 7 }}>
          <GraphicsCard sx={{ height: 1 }}>
            <Stack sx={{ alignItems: 'flex-start', justifyContent: 'space-between', gap: 3, p: { xs: 3, md: 6 }, height: 1 }}>
              <Typeset
                {...{
                  heading: headLine,
                  caption: captionLine,
                  captionProps: { variant: 'body1', sx: { color: 'text.secondary' } },
                  stackProps: { sx: { gap: { xs: 1, sm: 1.5 } } }
                }}
              />
              {primaryBtn && <Button variant="contained" size="large" {...primaryBtn} />}
            </Stack>
          </GraphicsCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 5 }}>
          <GraphicsCard sx={{ height: { xs: 339, sm: 360, md: 420 } }}>
            <Box>
              <Stack
                sx={{
                  gap: { xs: 2.5, sm: 3.5 },
                  transform: 'rotate(45deg)',
                  ml: { xs: -15, sm: -12, lg: -9.38 },
                  mr: { xs: -10, sm: -14.6, md: -9 },
                  mt: { xs: -10, md: -8.2 }
                }}
              >
                {marquees.map((marquee, index) => (
                  <Grid key={index} container spacing={{ xs: 0.5, sm: 1.5 }}>
                    <Marquee pauseOnHover {...(theme.direction === ThemeDirection.RTL && { direction: 'right' })} {...marquee.marqueeProps}>
                      {marquee.data.map((images, imgIndex) => (
                        <Grid key={imgIndex} sx={{ mx: 1 }} size={{ xs: 2, sm: 1.5, md: 1.2 }}>
                          <IntegrationAvatar src={images.image!} />
                        </Grid>
                      ))}
                    </Marquee>
                  </Grid>
                ))}
              </Stack>
            </Box>
          </GraphicsCard>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/integration/Integration1.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { MarqueesDataProps, TagProps } from '@/types/integration';

/***************************  INTEGRATION - TAG  ***************************/

function IntegrationTag({ label, icon }: TagProps) {
  const iconSize = { xs: 32, md: 40 };

  return (
    <Chip
      label={<Typography variant="h5">{label}</Typography>}
      {...(icon && {
        icon: <SvgIcon color="text.primary" {...(typeof icon === 'string' ? { name: icon } : { ...icon })} stroke={1} />
      })}
      sx={{
        px: { xs: 2.25, md: 3 },
        py: { xs: 1.25, md: 1.75 },
        mx: 0.5,
        bgcolor: 'background.default',
        '& .MuiChip-label': { p: 0, paddingInlineStart: 1.25 },
        '& svg': { width: iconSize, height: iconSize }
      }}
    />
  );
}

interface Props {
  marquees: MarqueesDataProps[];
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
}

/***************************  INTEGRATION - 1  ***************************/

export default function Integration1({ headLine, captionLine, primaryBtn, marquees }: Props) {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.6
        }}
      >
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ alignItems: 'flex-start', justifyContent: 'center', p: { xs: 3, sm: 4, md: 5 }, height: 1 }}>
                <Stack sx={{ gap: { xs: 1, sm: 1.5 } }}>
                  {headLine && <Typography variant="h2">{headLine}</Typography>}
                  {captionLine && (
                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                      {captionLine}
                    </Typography>
                  )}
                </Stack>
                {primaryBtn && (
                  <ButtonAnimationWrapper>
                    <Button variant="contained" size="large" sx={{ mt: { xs: 4, sm: 6 } }} {...primaryBtn} />
                  </ButtonAnimationWrapper>
                )}
              </Stack>
            </GraphicsCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <GraphicsCard>
              <Box sx={{ py: { xs: 4, sm: 7, md: 12.5 } }}>
                <Stack sx={{ gap: 1 }}>
                  {marquees.map((marquee, index) => (
                    <Stack key={index} direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                      <Marquee
                        pauseOnHover
                        {...(theme.direction === ThemeDirection.RTL && { direction: 'right' })}
                        {...marquee.marqueeProps}
                      >
                        {marquee.data.map((integration, index) => (
                          <IntegrationTag key={index} {...integration} />
                        ))}
                      </Marquee>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </GraphicsCard>
          </Grid>
        </Grid>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/gallery/Gallery3.tsx
```tsx
'use client';

import { Key, useEffect, useState } from 'react';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { GalleryImageList, GalleryProps } from '@/types/gallery';

interface BoxProps {
  src: string;
  index: number;
  type?: string;
}

interface GalleryItem extends BoxProps {
  child?: BoxProps[];
}

/***************************  GALLERY - GRAPHICS BLOCK  ***************************/

function GraphicsBox({ boxData, setIndex }: { boxData: BoxProps[]; setIndex: (index: number) => void }) {
  const boxGap = 1.5;

  return (
    <Grid container spacing={boxGap}>
      <Grid size={8}>
        <Box sx={{ borderRadius: 10, overflow: 'hidden' }}>
          <motion.div whileHover={{ scale: 1.02 }}>
            <GraphicsCard
              bgImage={boxData[0].src}
              sx={{ height: { xs: 408, sm: 420, md: 727 }, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
              onClick={() => setIndex(boxData[0].index)}
            />
          </motion.div>
        </Box>
      </Grid>
      <Grid size={4}>
        <Stack sx={{ height: 1, gap: boxGap }}>
          <Box sx={{ height: '50%', borderRadius: 10, overflow: 'hidden' }}>
            <motion.div whileHover={{ scale: 1.02 }} style={{ height: '100%' }}>
              <GraphicsCard
                bgImage={boxData[1].src}
                sx={{ height: '100%', cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIndex(boxData[1].index)}
              />
            </motion.div>
          </Box>
          <Box sx={{ height: '50%', borderRadius: 10, overflow: 'hidden' }}>
            <motion.div whileHover={{ scale: 1.02 }} style={{ height: '100%' }}>
              <GraphicsCard
                bgImage={boxData[2].src}
                sx={{ height: '100%', cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIndex(boxData[2].index)}
              />
            </motion.div>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

/***************************  GALLERY - 3  ***************************/

export default function Gallery3({ heading, caption, images }: GalleryProps): JSX.Element {
  const [index, setIndex] = useState(-1);
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);

  // Prepare the images for the lightbox
  const lightBox = images.map((image) => {
    return { ...images, src: GetImagePath(image.src) };
  });

  // Organize images into groups for the gallery layout
  useEffect(() => {
    const data = [...images];
    const temp = [];
    let count = 2;

    let groupData = [];

    for (let i = 0; i < data.length; i++) {
      const item: GalleryImageList = data[i];
      item.index = i;

      if (count > 0) {
        count--;
        temp.push(item);
        continue;
      } else {
        groupData.push(item);
        if (groupData.length == 3) {
          temp.push({ type: 'box', child: groupData });
          groupData = [];
          count = 2;
        }
      }

      if (i + 1 == data.length && groupData.length > 0) {
        groupData.map((item) => temp.push(item));
      }
    }

    setGalleryData(temp as GalleryItem[]);
  }, [images]);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {galleryData.map((item: GalleryItem, index: Key) => (
            <Grid key={index} size={item.type == 'box' ? 12 : 6}>
              {item.type == 'box' && item.child ? (
                <GraphicsBox boxData={item.child} setIndex={setIndex} />
              ) : (
                <Box sx={{ borderRadius: 10, overflow: 'hidden' }}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <GraphicsCard
                      bgImage={item.src}
                      sx={{ height: { xs: 200, sm: 300, md: 366 }, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                      onClick={() => setIndex(item.index)}
                    />
                  </motion.div>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Lightbox index={index} slides={lightBox} open={index >= 0} close={() => setIndex(-1)} />
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/integration/Integration3.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

/***************************  INTEGRATION - AVATAR  ***************************/

function IntegrationAvatar({ src }: { src: ImageCommonProps }) {
  const avatarSize = { xs: 52, sm: 68, md: 100 };
  const iconSize = { xs: 24, sm: 30, md: 45 };

  return (
    <Avatar variant="rounded" sx={{ bgcolor: 'background.default', width: avatarSize, height: avatarSize, borderRadius: { xs: 4, md: 6 } }}>
      <GraphicsImage image={src} sx={{ width: iconSize, height: iconSize }} />
    </Avatar>
  );
}

interface Props {
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
}

/***************************  INTEGRATION - 3  ***************************/

export default function Integration3({ headLine, captionLine, primaryBtn }: Props) {
  const theme = useTheme();
  const cardPadding = { xs: 3, sm: 4, md: 5 };
  const stackStyle = { height: 1, width: 1, alignItems: 'center', gap: { xs: 1, sm: 3 }, pt: { md: 1.5 } };
  const commonGrid = { xs: 2, sm: 1.5, md: 1.2 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.6
        }}
      >
        <GraphicsCard>
          <Stack sx={{ alignItems: 'center', px: cardPadding, pt: cardPadding }}>
            <Stack
              sx={{
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
                maxWidth: { xs: 420, sm: 580 },
                width: { xs: 'calc(100% - 10px)', sm: 460, md: 580 }
              }}
            >
              {headLine && (
                <Typography align="center" variant="h2">
                  {headLine}
                </Typography>
              )}
              {captionLine && (
                <Typography align="center" sx={{ color: 'text.secondary' }}>
                  {captionLine}
                </Typography>
              )}
            </Stack>
            {primaryBtn && (
              <ButtonAnimationWrapper>
                <Button variant="contained" size="large" sx={{ mt: { xs: 4, sm: 5 } }} {...primaryBtn} />
              </ButtonAnimationWrapper>
            )}
          </Stack>
          <Grid
            container
            spacing={{ xs: 0.5, sm: 1.5 }}
            sx={{
              justifyContent: { xs: 'center', md: 'space-evenly' },
              position: 'relative',
              width: { xs: `calc(100% + 12px)`, md: `calc(100% + 132px)` },
              ml: { xs: -1.5, md: -7.75 },
              mb: { xs: -2, sm: -4, md: -2.5 },
              mt: { md: -1.5 },
              height: { xs: 210, sm: 250, md: 324 },
              pt: 4.5,
              '&:after': {
                content: `' '`,
                position: 'absolute',
                width: 1,
                height: 1,
                left: 0,
                bottom: 0,
                background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} 38.07%, ${theme.palette.grey[100]} 143.54%)`
              }
            }}
          >
            <Grid size={commonGrid}>
              <Stack sx={{ ...stackStyle, justifyContent: 'flex-end' }}>
                <IntegrationAvatar src="/assets/images/integration/zoom.png" />
              </Stack>
            </Grid>
            <Grid size={commonGrid}>
              <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                <IntegrationAvatar src="/assets/images/integration/asana.png" />
                <IntegrationAvatar src="/assets/images/integration/skype.png" />
              </Stack>
            </Grid>
            <Grid size={commonGrid}>
              <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                <IntegrationAvatar src="/assets/images/integration/slack.png" />
              </Stack>
            </Grid>
            <Grid size={commonGrid}>
              <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                <IntegrationAvatar src="/assets/images/integration/intercom.png" />
                <IntegrationAvatar src="/assets/images/integration/master-card.png" />
              </Stack>
            </Grid>
            <Grid size={commonGrid}>
              <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                <IntegrationAvatar src="/assets/images/integration/trip-advicer.png" />
              </Stack>
            </Grid>
            <Grid size={commonGrid}>
              <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                <IntegrationAvatar src="/assets/images/integration/paypal.png" />
                <IntegrationAvatar src="/assets/images/integration/messenger-facebook.png" />
              </Stack>
            </Grid>
            <Grid size={commonGrid}>
              <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                <IntegrationAvatar src="/assets/images/integration/google-drive.png" />
              </Stack>
            </Grid>
            <Grid size={commonGrid}>
              <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                <IntegrationAvatar src="/assets/images/integration/dropbox.png" />
                <IntegrationAvatar src="/assets/images/integration/loom.png" />
              </Stack>
            </Grid>
            <Grid size={commonGrid}>
              <Stack sx={{ ...stackStyle, justifyContent: 'flex-start', mt: { md: -4.5 } }}>
                <IntegrationAvatar src="/assets/images/integration/jira.png" />
                <IntegrationAvatar src="/assets/images/integration/mail-chimp.png" />
              </Stack>
            </Grid>
            <Grid size={{ xs: 2, sm: 4.5, md: 1.2 }}>
              <Stack sx={{ ...stackStyle, justifyContent: 'flex-end', mt: { md: -3 } }}>
                <IntegrationAvatar src="/assets/images/integration/notion.png" />
              </Stack>
            </Grid>
          </Grid>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/gallery/Gallery4.tsx
```tsx
'use client';

import { SyntheticEvent, useEffect, useState } from 'react';

// @mui
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';

// @third-party
import Lightbox from 'yet-another-react-lightbox';
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { GalleryImageList, GalleryProps } from '@/types/gallery';

interface BoxProps {
  src: string;
  index: number;
  type?: string;
}

interface GalleryItem extends BoxProps {
  child?: BoxProps[];
}

interface Props extends GalleryProps {
  topics: string[];
}

const boxHeight = { xs: 228, sm: 410, md: 554 };

interface GraphicsBoxProps {
  boxData: BoxProps[];
  setIndex: (index: number) => void;
  isChangingSlide: boolean;
}

/***************************  GALLERY - GRAPHICS BLOCK ***************************/

function GraphicsBox({ boxData, setIndex, isChangingSlide }: GraphicsBoxProps) {
  const boxGap = { xs: 1, sm: 1.5 };
  const openLightBox = (index: number) => {
    if (!isChangingSlide) {
      // Check if not changing slide
      setIndex(index);
    }
  };

  return (
    <Stack sx={{ alignItems: 'center', gap: boxGap, width: { xs: 118, sm: 214, md: 290 }, height: boxHeight }}>
      <GraphicsCard
        bgImage={boxData[0].src}
        sx={{ height: '50%', width: 1, cursor: 'pointer' }}
        onClick={() => openLightBox(boxData[0].index)}
      />
      <GraphicsCard
        bgImage={boxData[1].src}
        sx={{ height: '50%', width: 1, cursor: 'pointer' }}
        onClick={() => openLightBox(boxData[1].index)}
      />
    </Stack>
  );
}

/***************************  GALLERY - 4  ***************************/

export default function Gallery4({ heading, caption, topics, images }: Props): JSX.Element {
  const [index, setIndex] = useState(-1);
  const [activeTopic, setActiveTopic] = useState(0);
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [isChangingSlide, setIsChangingSlide] = useState(false);

  const slickStyle = { alignItems: 'center', '& .slick-slide': { ' > div': { px: 0.75 } } };

  // Prepare the images for the lightbox
  const lightBox = images.map((image) => {
    return { ...images, src: GetImagePath(image.src) };
  });

  // Organize images into groups for the gallery layout
  useEffect(() => {
    const data = [...images];
    const temp = [];
    let count = 2;

    let groupData = [];

    for (let i = 0; i < data.length; i++) {
      const item: GalleryImageList = data[i];
      item.index = i;

      if (count > 0) {
        count--;
        temp.push(item);
        continue;
      } else {
        groupData.push(item);
        if (groupData.length == 2) {
          temp.push({ type: 'box', child: groupData });
          groupData = [];
          count = 2;
        }
      }

      if (i + 1 == data.length && groupData.length > 0) {
        groupData.map((item) => temp.push(item));
      }
    }

    setGalleryData(temp as GalleryItem[]);
  }, [images]);

  const settings: Settings = {
    centerMode: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    initialSlide: 0,
    variableWidth: true,
    beforeChange: () => {
      setIsChangingSlide(true); // Set state to indicate slide change is occurring
    },
    afterChange: () => {
      setIsChangingSlide(false); // Reset state after slide change
    }
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setActiveTopic(newValue);
  };

  const openLightBox = (index: number) => {
    if (!isChangingSlide) {
      // Check if not changing slide
      setIndex(index);
    }
  };

  return (
    <Stack sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <ContainerWrapper>
          <Typeset {...{ heading, caption, stackProps: { sx: { alignItems: 'center', textAlign: 'center' } } }} />
        </ContainerWrapper>
        <Stack sx={slickStyle}>
          <Box sx={{ maxWidth: 1 }}>
            <Tabs
              TabIndicatorProps={{ sx: { display: 'none' } }}
              value={activeTopic}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              rel="noopener noreferrer"
              aria-label="scrollable auto tabs example"
            >
              {topics.map((item, index) => (
                <Tab
                  label={item}
                  key={index}
                  tabIndex={0}
                  sx={{
                    height: { xs: 52, md: 56 },
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 10,
                    mx: { xs: 0.5, md: 0.75 },
                    backgroundColor: activeTopic === index ? 'grey.100' : 'inherit',
                    '&.Mui-focusVisible': {
                      bgcolor: 'grey.300'
                    },
                    '&:hover': { bgcolor: 'grey.50' }
                  }}
                />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ width: 1, mt: { xs: 2, sm: 3 } }}>
            <Slider {...settings}>
              {galleryData.map((item, index) => (
                <Box key={index}>
                  {item.type == 'box' && item.child ? (
                    <GraphicsBox
                      boxData={item.child}
                      setIndex={(index) => openLightBox(index)} // Replace with your actual setIndex function
                      isChangingSlide={false} // Replace with your actual isChangingSlide value
                    />
                  ) : (
                    <GraphicsCard
                      bgImage={item.src}
                      sx={{ width: { xs: 222, sm: 412, md: 540 }, height: boxHeight, cursor: 'pointer' }}
                      onClick={() => openLightBox(item.index)}
                    />
                  )}
                </Box>
              ))}
            </Slider>
          </Box>
        </Stack>
      </Stack>
      <Lightbox index={index} slides={lightBox} open={index >= 0} close={() => setIndex(-1)} />
    </Stack>
  );
}

```

  

File: src/blocks/gallery/Gallery1.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { GalleryProps } from '@/types/gallery';

/***************************  GALLERY 1 - HELPER  ***************************/

// Determines grid size for images based on index and total count for responsive layout
function getGridSize(index: number, length: number) {
  const dualOnSmall = () => {
    const partition = index % 4 === 2 || index % 4 === 3;
    return (index + 1 == length && length % 2 != 0) || !partition ? 12 : 6;
  };

  switch (length) {
    case 1:
      return { xs: 12 };
    case 2:
      return { xs: 12, sm: 6 };
    case 4:
      return { xs: 12, sm: 6 };
    case 5:
      return { xs: dualOnSmall(), sm: index < 2 ? 6 : 4 };
    case 7:
      return {
        xs: dualOnSmall(),
        sm: index < 2 ? 6 : index >= 2 && index <= 4 ? 4 : index == 5 ? 9 : 3,
        md: index < 2 ? 6 : index >= 2 && index <= 4 ? 4 : index == 5 ? 5 : 7
      };
    default:
      return { xs: dualOnSmall(), sm: 4 };
  }
}

/***************************  GALLERY - 1  ***************************/

export default function Gallery1({ heading, caption, images }: GalleryProps): JSX.Element {
  const [index, setIndex] = useState(-1);

  // Map over images to create an array for the lightbox
  const lightBox = images.map((image) => {
    return { ...images, src: GetImagePath(image.src) };
  });

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {images.map((item, index) => (
            <Grid key={index} size={getGridSize(index, images.length)}>
              <Box sx={{ borderRadius: 10, overflow: 'hidden' }}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <GraphicsCard
                    bgImage={item.src}
                    sx={{
                      height: { xs: 200, sm: 300, md: 366 },
                      cursor: 'pointer',
                      WebkitTapHighlightColor: 'transparent'
                    }}
                    onClick={() => setIndex(index)}
                  />
                </motion.div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Lightbox index={index} slides={lightBox} open={index >= 0} close={() => setIndex(-1)} />
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/gallery/Gallery2.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types
import { GalleryProps } from '@/types/gallery';

/***************************  GALLERY 2 - HELPER  ***************************/

// Determines grid size for images based on index and total count for responsive layout
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

/***************************  GALLERY - 2  ***************************/

export default function Gallery2({ heading, caption, images }: GalleryProps): JSX.Element {
  const [index, setIndex] = useState(-1);

  // Map over images to create an array for the lightbox
  const lightBox = images.map((image) => {
    return { ...images, src: GetImagePath(image.src) };
  });

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {images.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: getGridSize(index, images.length) }}>
              <Box sx={{ overflow: 'hidden', borderRadius: 10 }}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <GraphicsCard
                    bgImage={item.src}
                    sx={{ height: { xs: 200, sm: 300, md: 366 }, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                    onClick={() => setIndex(index)}
                  />
                </motion.div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Lightbox index={index} slides={lightBox} open={index >= 0} close={() => setIndex(-1)} />
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature8.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stack from '@mui/material/Stack';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { SpriteIconProps } from '@/types/icon';
import { ProcessCardProps } from '@/types/process';

/***************************  FEATURE - STEPPER  ***************************/

interface StepperCardProps {
  cards: ProcessCardProps[];
  activeStep: number;
  handleStep: (step: number) => void;
}

function StepperCard({ cards, activeStep, handleStep }: StepperCardProps) {
  const CustomIcon = (icon: SpriteIconProps) => (
    <Avatar variant="rounded" sx={{ bgcolor: 'grey.100', width: 60, height: 60, borderRadius: 4, mr: { xs: 0.5, sm: 1 } }}>
      <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
    </Avatar>
  );

  return (
    <Stepper
      nonLinear
      activeStep={activeStep}
      orientation="vertical"
      connector={<StepConnector sx={{ [`& .${stepConnectorClasses.line}`]: { display: 'none' } }} />}
    >
      {cards.map((card, index) => (
        <Step key={index} sx={{ cursor: 'pointer', ':hover': { bgcolor: 'grey.50' }, WebkitTapHighlightColor: 'transparent' }}>
          <StepLabel
            StepIconComponent={() => CustomIcon(card.icon)}
            onClick={() => {
              handleStep(index);
            }}
            sx={{
              py: { xs: 2, md: 3 },
              alignItems: 'flex-start',
              borderLeft: '2px solid',
              borderColor: activeStep == index ? 'primary.main' : 'grey.600',
              pl: { xs: 2, md: 3 }
            }}
          >
            <Typeset
              {...{
                heading: card.title,
                caption: card.description,
                headingProps: { variant: 'h4', sx: { color: 'text.primary' } },
                captionProps: { variant: 'body1', sx: { maxWidth: 350 } },
                stackProps: { sx: { gap: 1 } }
              }}
            />
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

interface Props {
  heading: string;
  caption: string;
  cards: ProcessCardProps[];
}

/***************************  FEATURE - 8  ***************************/

export default function Feature8({ heading, caption, cards }: Props): JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleStep = (step: number) => {
    setActiveStep(step);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        <Grid container spacing={1.5} sx={{ alignItems: 'center', height: 1 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6
              }}
            >
              <StepperCard cards={cards} activeStep={activeStep} handleStep={handleStep} />
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.7
              }}
            >
              <GraphicsCard sx={{ p: { xs: 3, md: 8 }, height: { xs: 358, sm: 536, md: 544 } }}>
                <GraphicsImage
                  sx={{ height: 1, backgroundPosition: 'center', backgroundSize: 'contain' }}
                  image={cards[activeStep].image!}
                />
              </GraphicsCard>
            </motion.div>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/integration/Integration5.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoFab from '@/components/logo/LogoFab';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import { Curve, Curve2, Line } from '@/icons';

// @types
import { SpriteIconProps } from '@/types/icon';

/***************************  INTEGRATION - TAG  ***************************/

function IconBox({ icon }: { icon: SpriteIconProps }) {
  const theme = useTheme();
  const avatarSize = { xs: 36, sm: 64 };
  const shadowColor = theme.palette.grey[900];

  return (
    <Avatar
      variant="rounded"
      sx={{
        bgcolor: 'grey.200',
        width: avatarSize,
        height: avatarSize,
        position: 'relative',
        zIndex: 1,
        borderRadius: { xs: 9.25, sm: 16.75 },
        boxShadow: {
          xs: `0px 1.13px 2.25px 0px  ${alpha(shadowColor, 0.08)}, 0px 0px 0.56px 0px ${alpha(shadowColor, 0.1)}`,
          sm: `0px 2px 4px 0px  ${alpha(shadowColor, 0.08)}, 0px 0px 1px 0px ${alpha(shadowColor, 0.1)}`
        },
        '& svg': { width: { xs: 18, sm: 32 }, height: { xs: 18, sm: 32 } }
      }}
    >
      <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} color="text.primary" />
    </Avatar>
  );
}

interface Props {
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
}

/***************************  INTEGRATION - 5  ***************************/

export default function Integration5({ headLine, captionLine, primaryBtn }: Props) {
  const theme = useTheme();

  const stackStyle = { height: 1, width: 1, position: 'relative', alignItems: 'center', gap: { xs: 2.25, sm: 4 } };

  const largeBoxSize = { xs: 58, sm: 100 };
  const largeCurveSize = { '& svg': { width: largeBoxSize, height: largeBoxSize } };

  const smallBoxSize = { xs: 32, sm: 64 };
  const smallCurveSize = { '& svg': { width: smallBoxSize, height: smallBoxSize } };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.5
        }}
      >
        <GraphicsCard sx={{ height: 1, p: { xs: 3, sm: 4, md: 7 } }}>
          <Grid container spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' }, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack sx={{ gap: 5, justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' }, height: 1 }}>
                <Typeset
                  {...{
                    heading: headLine,
                    caption: captionLine,
                    captionProps: { variant: 'body1', sx: { color: 'text.secondary' } },
                    stackProps: { sx: { gap: { xs: 1, sm: 1.5 } } }
                  }}
                />
                {primaryBtn && (
                  <ButtonAnimationWrapper>
                    <Button variant="contained" {...primaryBtn} />
                  </ButtonAnimationWrapper>
                )}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid
                container
                spacing={{ xs: 2.8, sm: 6 }}
                sx={{ alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-end' }, position: 'relative', zIndex: 1 }}
              >
                <Box
                  sx={{
                    width: { xs: 256, sm: 495 },
                    position: 'absolute',
                    top: '50%',
                    left: { xs: '50%', md: 'unset' },
                    right: { md: 0 },
                    transform: { xs: 'translate(-50%,-50%)', md: 'translateY(-50%)' },
                    marginTop: { xs: -0.25, sm: -0.5 },
                    zIndex: -1,
                    '& svg': { width: { xs: 256, sm: 495 }, height: 2 }
                  }}
                >
                  <Line />
                </Box>
                <Grid>
                  <Box>
                    <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                      <Box
                        sx={{
                          height: largeBoxSize,
                          width: largeBoxSize,
                          position: 'absolute',
                          top: { xs: 17, sm: 31 },
                          left: { xs: 22, sm: 42 },
                          ...largeCurveSize,
                          ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' })
                        }}
                      >
                        <Curve />
                      </Box>
                      <IconBox icon="tabler-brand-asana" />
                      <IconBox icon="tabler-brand-abstract" />
                      <IconBox icon="tabler-brand-slack" />
                      <Box
                        sx={{
                          height: largeBoxSize,
                          width: largeBoxSize,
                          position: 'absolute',
                          bottom: { xs: 14, sm: 29 },
                          left: { xs: 22, sm: 42 },
                          transform: theme.direction === ThemeDirection.RTL ? 'scale(-1)' : 'scaleY(-1)',
                          ...largeCurveSize
                        }}
                      >
                        <Curve />
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
                <Grid>
                  <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                    <Box
                      sx={{
                        height: smallBoxSize,
                        width: smallBoxSize,
                        position: 'absolute',
                        top: { xs: 13, sm: 20 },
                        left: { xs: 30, sm: 56 },
                        ...smallCurveSize,
                        ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' })
                      }}
                    >
                      <Curve2 />
                    </Box>
                    <IconBox icon="tabler-brand-skype" />
                    <IconBox icon="tabler-brand-google-drive" />
                    <Box
                      sx={{
                        height: smallBoxSize,
                        width: smallBoxSize,
                        position: 'absolute',
                        bottom: { xs: 10, sm: 19 },
                        left: { xs: 30, sm: 56 },
                        transform: theme.direction === ThemeDirection.RTL ? 'scale(-1)' : 'scaleY(-1)',
                        ...smallCurveSize
                      }}
                    >
                      <Curve2 />
                    </Box>
                  </Stack>
                </Grid>
                <Grid>
                  <Box
                    sx={{
                      bgcolor: 'background.default',
                      borderRadius: '100%',
                      height: { xs: 45, sm: 89 },
                      position: 'relative',
                      zIndex: 1,
                      '& svg, & img': { width: { xs: 45, sm: 89 }, height: { xs: 45, sm: 89 } }
                    }}
                  >
                    <LogoFab />
                  </Box>
                </Grid>
                <Grid>
                  <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                    <Box
                      sx={{
                        height: smallBoxSize,
                        width: smallBoxSize,
                        position: 'absolute',
                        top: { xs: 13, sm: 20 },
                        left: { xs: -30, sm: -52 },
                        transform: theme.direction === ThemeDirection.RTL ? 'scaleX(1)' : 'scaleX(-1)',
                        ...smallCurveSize
                      }}
                    >
                      <Curve2 />
                    </Box>
                    <IconBox icon="tabler-brand-tripadvisor" />
                    <IconBox icon="tabler-brand-messenger" />
                    <Box
                      sx={{
                        height: smallBoxSize,
                        width: smallBoxSize,
                        position: 'absolute',
                        bottom: { xs: 10, sm: 19 },
                        left: { xs: -30, sm: -56 },
                        transform: theme.direction === ThemeDirection.RTL ? 'scaleY(-1)' : 'scaleX(-1) scaleY(-1)',
                        ...smallCurveSize
                      }}
                    >
                      <Curve2 />
                    </Box>
                  </Stack>
                </Grid>
                <Grid>
                  <Stack sx={{ ...stackStyle, justifyContent: 'center' }}>
                    <Box
                      sx={{
                        height: largeBoxSize,
                        width: largeBoxSize,
                        position: 'absolute',
                        top: { xs: 17, sm: 31 },
                        left: { xs: -40, sm: -78 },
                        transform: theme.direction === ThemeDirection.RTL ? 'scaleX(1)' : 'scaleX(-1)',
                        ...largeCurveSize
                      }}
                    >
                      <Curve />
                    </Box>
                    <IconBox icon="tabler-brand-backbone" />
                    <IconBox icon="tabler-brand-intercom" />
                    <IconBox icon="tabler-brand-mastercard" />
                    <Box
                      sx={{
                        height: largeBoxSize,
                        width: largeBoxSize,
                        position: 'absolute',
                        bottom: { xs: 14, sm: 28 },
                        left: { xs: -40, sm: -78 },
                        transform: theme.direction === ThemeDirection.RTL ? 'scaleY(-1)' : 'scaleX(-1) scaleY(-1)',
                        ...largeCurveSize
                      }}
                    >
                      <Curve />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature7.tsx
```tsx
'use client';

import React, { useState, useRef } from 'react';

// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BreadcrumbProps } from '@/types/root';
import { TestimonialDataProps } from '@/types/feature';

interface Props {
  heading: string;
  caption?: string;
  breadcrumbs: BreadcrumbProps[];
  testimonials: TestimonialDataProps[];
}

/***************************  PROGRESS BAR  ***************************/

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[300]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.light
  }
}));

/***************************  FEATURE - 7  ***************************/

export default function Feature7({ heading, caption, breadcrumbs, testimonials }: Props): JSX.Element {
  const theme = useTheme();
  const imageRadius = { borderTopLeftRadius: { xs: 12 }, borderBottomRightRadius: { xs: 24, sm: 32, md: 40 } };

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  // Calculate the progress value based on the active slide and the total number of testimonials
  const calculateProgressValue = (slideIndex: number) => {
    if (testimonials.length <= 1) return 100;
    return ((slideIndex + 1) / testimonials.length) * 100;
  };

  const settings: Settings = {
    autoplay: true,
    arrows: false,
    speed: 1000,
    fade: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    swipeToSlide: true,
    initialSlide: 0,
    dots: false,
    beforeChange(_, nextSlide) {
      setActiveSlide(nextSlide);
    }
  };

  const gc = theme.palette.grey[100];

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Typeset {...{ heading, caption, stackProps: { sx: { alignItems: 'center' } }, captionProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.6
          }}
        >
          <GraphicsCard sx={{ position: 'relative' }}>
            <Stack
              direction="row"
              sx={{
                gap: 1,
                pt: { xs: 2, sm: 3, md: 5 },
                pl: { xs: 2, sm: 3, md: 5 },
                pb: { xs: 3, sm: 0 },
                position: { sm: 'absolute' },
                zIndex: 1,
                left: 0
              }}
            >
              {breadcrumbs.map((item, index) => (
                <Box key={index}>
                  <Stack
                    direction={theme.direction === ThemeDirection.RTL ? 'row-reverse' : 'row'}
                    sx={{ alignItems: 'center', gap: 1, mr: 1 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: activeSlide === index ? 'text.primary' : 'grey.700',
                        cursor: 'pointer',
                        ':hover': { color: 'text.secondary' },
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      onClick={() => sliderRef.current?.slickGoTo(index)}
                    >
                      {item.title}
                    </Typography>
                    {index < breadcrumbs.length - 1 && <Box sx={{ width: 5, height: 5, borderRadius: '100%', bgcolor: 'grey.700' }} />}
                  </Stack>
                </Box>
              ))}
            </Stack>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <Box key={index}>
                  <Grid container>
                    <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                      <Stack sx={{ justifyContent: 'space-between', gap: 5, height: 1, p: { xs: 2, sm: 3, md: 5 } }}>
                        <Stack sx={{ justifyContent: 'flex-end', gap: { xs: 2, sm: 3, md: 4 }, height: 1 }}>
                          <Avatar sx={{ width: 60, height: 60, borderRadius: 4, bgcolor: 'grey.300' }}>
                            <SvgIcon
                              {...(typeof testimonial.features[0].icon === 'string'
                                ? { name: testimonial.features[0].icon }
                                : { ...testimonial.features[0].icon })}
                            />
                          </Avatar>
                          <Stack sx={{ gap: { xs: 2, sm: 3 } }}>
                            <Stack sx={{ gap: 1 }}>
                              {testimonial.features[0].title && <Typography variant="h4">{testimonial.features[0].title}</Typography>}
                              {testimonial.features[0].content && (
                                <Typography sx={{ color: 'text.secondary' }}>{testimonial.features[0].content}</Typography>
                              )}
                            </Stack>
                            <BorderLinearProgress
                              variant="determinate"
                              value={calculateProgressValue(activeSlide)}
                              rel="noopener noreferrer"
                              aria-label="progress"
                            />
                          </Stack>
                        </Stack>
                      </Stack>
                    </Grid>
                    {testimonial.image && (
                      <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                        <GraphicsCard sx={{ bgcolor: 'grey.300', height: 1 }}>
                          <GraphicsImage
                            sx={{
                              height: { xs: 380, sm: 529 },
                              backgroundPositionX: 'right',
                              backgroundPositionY: 'center',
                              backgroundSize: 'contain',
                              ...imageRadius
                            }}
                            image={testimonial.image}
                          >
                            <Box
                              sx={{
                                width: 1,
                                height: 1,
                                ...imageRadius,
                                background: `radial-gradient(74.06% 74.06% at 28.46% 49.93%, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.4)} 100%)`
                              }}
                            />
                          </GraphicsImage>
                        </GraphicsCard>
                      </Grid>
                    )}
                  </Grid>
                </Box>
              ))}
            </Slider>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature9.tsx
```tsx
'use client';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';

// @third-party
import { motion } from 'framer-motion';

// @project
import { IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';
interface Props {
  heading: string;
  caption?: string;
  features: IconCardProps[];
}

/***************************  FEATURE - 9  ***************************/

export default function Feature9({ heading, caption, features }: Props): JSX.Element {
  const iconProps = { type: IconType.CUSTOM };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Grid container spacing={1.5}>
          {features.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: item.animationDelay
                }}
                style={{ height: '100%' }}
              >
                <IconCard
                  icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                  title={item.title}
                  content={item.content}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature6.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard, IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption?: string;
  image?: ImageCommonProps;
  features: IconCardProps[];
}

/***************************  FEATURE - 6  ***************************/

export default function Feature6({ heading, caption, image, features }: Props): JSX.Element {
  const theme = useTheme();

  const gc = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(100% 100% at 14.27% 46.41%, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.3)} 100%)`
      : `radial-gradient(100% 100% at 14.27% 46.41%, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.6)} 100%)`;

  const imageBoxRadius = { xs: 3, sm: 5 };
  const imageRadius = { borderTopLeftRadius: { xs: 12 }, borderBottomRightRadius: { xs: 24, sm: 32, md: 40 } };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Grid container spacing={1.5}>
          {image && (
            <Grid size={{ xs: 12, md: 4.5 }}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4
                }}
                style={{ height: '100%' }}
              >
                <GraphicsCard sx={{ pl: imageBoxRadius, pt: imageBoxRadius, height: { xs: 332, md: '100%' } }}>
                  <GraphicsImage image={image} sx={{ height: 1, backgroundPositionX: 'left', backgroundPositionY: 'top', ...imageRadius }}>
                    <Box sx={{ width: 1, height: 1, ...imageRadius, background: gradient }} />
                  </GraphicsImage>
                </GraphicsCard>
              </motion.div>
            </Grid>
          )}
          <Grid size={{ xs: 12, md: 7.5 }}>
            <Grid container spacing={1.5}>
              {features.map((item, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: item.animationDelay
                    }}
                  >
                    <IconCard icon={item.icon} title={item.title} content={item.content} iconAvatar cardPadding={{ xs: 2, sm: 3, md: 3 }} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature5.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard, IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @assets
import Wave from '@/images/graphics/Wave';

// @types
import { AvatarGroupProps } from '@/types/cta';
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  image1: ImageCommonProps;
  image2?: ImageCommonProps;
  features: IconCardProps[];
  features2?: IconCardProps[];
  profileGroups?: {
    avatarGroups: AvatarGroupProps[];
    review: string;
  };
  content?: string;
  actionBtn?: ButtonProps;
  actionBtn2?: ButtonProps;
}

/***************************  FEATURE - 5  ***************************/

export default function Feature5({
  heading,
  caption,
  features,
  features2,
  image1,
  image2,
  profileGroups,
  content,
  actionBtn,
  actionBtn2
}: Props): JSX.Element {
  const theme = useTheme();

  const gc = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(71.13% 71.13% at 50% 50.07%, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.6)} 100%)`
      : `radial-gradient(71.13% 71.13% at 50% 50.07%, ${alpha(gc, 0)} 0%, ${gc} 100%)`;

  const GetImageCard = () => (
    <>
      {image1 && (
        <GraphicsCard sx={{ height: 1 }}>
          <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, minHeight: { xs: 343, sm: 445, md: 530 }, height: 1 }}>
            <GraphicsImage
              sx={{
                height: '100%',
                backgroundSize: 'contain',
                backgroundPositionX: 'center',
                backgroundPositionY: 'center',
                borderTopLeftRadius: { xs: 12 },
                borderBottomLeftRadius: { xs: 12 }
              }}
              image={image1}
            />
          </Box>
        </GraphicsCard>
      )}
    </>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <Grid container spacing={1.5} sx={{ height: 1 }} direction={{ xs: 'row-reverse', sm: 'row' }}>
            <Grid size={{ xs: 12, sm: 7, md: 6 }}>
              <Stack sx={{ gap: 2.5, justifyContent: 'space-between', height: 1 }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5
                  }}
                >
                  <Stack sx={{ gap: 4, alignItems: 'flex-start' }}>
                    <Typeset {...{ heading, caption }} />
                    {actionBtn2 && (
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} />}
                        {...actionBtn2}
                      />
                    )}
                  </Stack>
                </motion.div>
                <Grid container spacing={1.5}>
                  {image1 && (
                    <Grid sx={{ display: { xs: 'block', sm: 'none' } }} size={{ xs: 12, sm: 5, md: 6 }}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5
                        }}
                        style={{ height: '100%' }}
                      >
                        <GetImageCard />
                      </motion.div>
                    </Grid>
                  )}
                  {features.map((item, index) => (
                    <Grid key={index} size={{ xs: 6, sm: 6 }}>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: item.animationDelay
                        }}
                      >
                        <IconCard
                          icon={{
                            ...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon }),
                            color: 'primary.main',
                            size: 24
                          }}
                          title={item.title}
                          content={item.content}
                          iconAvatar
                          cardPadding={{ xs: 1.5, sm: 2, md: 3 }}
                          stackProps={{ sx: { gap: { xs: 2.5, sm: 2, md: 1 } } }}
                        />
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>

            {image1 && (
              <Grid sx={{ display: { xs: 'none', sm: 'block' } }} size={{ xs: 12, sm: 5, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.8
                  }}
                  style={{ height: '100%' }}
                >
                  <GetImageCard />
                </motion.div>
              </Grid>
            )}
          </Grid>
        </Grid>
        {features2 && image2 && profileGroups && (
          <Grid size={12}>
            <Grid container spacing={1.5}>
              <Grid size={{ xs: 12, sm: 5, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.8
                  }}
                  style={{ height: '100%' }}
                >
                  <GraphicsCard sx={{ height: 1 }}>
                    <Stack sx={{ alignItems: 'center', gap: 3, pt: 7 }}>
                      <Stack sx={{ alignItems: 'center', gap: 1, position: 'relative', zIndex: 1 }}>
                        <Stack sx={{ alignItems: 'center', gap: 0.5 }}>
                          <AvatarGroup max={5} sx={{ justifyContent: 'flex-end', '& .MuiAvatar-root': { borderWidth: 1, ml: -1.75 } }}>
                            {profileGroups.avatarGroups.map((item, index) => (
                              <Avatar
                                key={index}
                                src={GetImagePath(item.avatar)}
                                sx={{ width: 40, height: 40 }}
                                alt="Avatar"
                                imgProps={{ loading: 'lazy' }}
                              />
                            ))}
                          </AvatarGroup>
                          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                            {profileGroups.review}
                          </Typography>
                        </Stack>
                        <Wave />
                      </Stack>
                      <GraphicsImage
                        sx={{
                          height: { xs: 157, sm: 241, md: 352 },
                          backgroundPositionY: 'top',
                          width: 1,
                          transform: 'scale(1.3)',
                          transformOrigin: 'top'
                        }}
                        image={image2}
                      >
                        <Box sx={{ height: 1, background: gradient, bottom: 0 }} />
                      </GraphicsImage>
                    </Stack>
                  </GraphicsCard>
                </motion.div>
              </Grid>

              <Grid size={{ xs: 12, sm: 7, md: 6 }}>
                <Grid container spacing={1.5}>
                  {features2.map((item, index) => (
                    <Grid key={index} size={6}>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: item.animationDelay
                        }}
                      >
                        <IconCard
                          title={item.title}
                          icon={{
                            ...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon }),
                            color: 'primary.main',
                            size: 24
                          }}
                          content={item.content}
                          iconAvatar
                          cardPadding={{ xs: 1.5, sm: 2, md: 3 }}
                          stackProps={{ sx: { gap: { xs: 2.5, sm: 2, md: 1 } } }}
                        />
                      </motion.div>
                    </Grid>
                  ))}
                  {(content || actionBtn) && (
                    <Grid size={12}>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4
                        }}
                      >
                        <GraphicsCard>
                          <Stack sx={{ alignItems: 'flex-start', gap: { xs: 4, md: 7 }, p: { xs: 2, sm: 4 } }}>
                            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: { sm: 530 } }}>
                              {content}
                            </Typography>
                            {actionBtn && (
                              <ButtonAnimationWrapper>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                                  {...actionBtn}
                                />
                              </ButtonAnimationWrapper>
                            )}
                          </Stack>
                        </GraphicsCard>
                      </motion.div>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature3.tsx
```tsx
// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface BlockProps {
  image: ImageCommonProps;
  title?: string;
  description?: string;
}

interface ImageBlockProps {
  direction?: 'left' | 'right';
  image: ImageCommonProps;
  title?: string;
  description?: string;
}

interface Props {
  heading: string;
  caption?: string;
  blockData1: BlockProps;
  blockData2: BlockProps;
  blockData3: BlockProps;
  actionBtn?: ButtonProps;
}

/***************************  FEATURE - CONTENT BLOCK  ***************************/

function BoxContent({ title, description }: { title?: string; description?: string }) {
  return (
    (title || description) && (
      <Stack sx={{ gap: { xs: 1, md: 1.5 } }}>
        {title && <Typography variant="h3">{title}</Typography>}
        {description && <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>}
      </Stack>
    )
  );
}

const boxPadding = { xs: 3, sm: 4, md: 5 };

/***************************  FEATURE - IMAGE BLOCK  ***************************/

function ImageBlock({ direction = 'left', image, title, description }: ImageBlockProps) {
  const imgRadius = { xs: 20, md: 24 };

  return (
    <GraphicsCard sx={{ height: 1 }}>
      <GraphicsCard
        sx={{
          bgcolor: 'grey.200',
          py: boxPadding,
          ...(direction === 'left' && { pr: boxPadding }),
          ...(direction === 'right' && { pl: boxPadding }),
          height: { xs: 248, sm: 264, md: 350 }
        }}
      >
        <GraphicsImage
          sx={{
            height: 1,
            ...(direction === 'left' && {
              backgroundPositionX: 'right',
              borderTopRightRadius: imgRadius,
              borderBottomRightRadius: imgRadius
            }),
            ...(direction === 'right' && {
              backgroundPositionX: 'left',
              borderTopLeftRadius: imgRadius,
              borderBottomLeftRadius: imgRadius
            })
          }}
          image={image}
        />
      </GraphicsCard>
      <Box sx={{ p: boxPadding }}>
        <BoxContent {...{ title, description }} />
      </Box>
    </GraphicsCard>
  );
}

/***************************  FEATURE - 3  ***************************/

export default function Feature3({ heading, caption, blockData1, blockData2, blockData3, actionBtn }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption, captionProps: { sx: { maxWidth: 750 } } }} />
        <Grid container spacing={1.5} direction={{ xs: 'column-reverse', sm: 'row' }}>
          <Grid size={{ xs: 12, sm: 5 }}>
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ height: 1 }}>
                <GraphicsCard sx={{ bgcolor: 'grey.200', pl: boxPadding, py: boxPadding, height: { xs: 214, sm: 1 } }}>
                  <GraphicsImage
                    sx={{
                      height: 1,
                      backgroundPositionX: 'left',
                      backgroundPositionY: 'top',
                      borderTopLeftRadius: { xs: 12 },
                      borderBottomLeftRadius: { xs: 12 }
                    }}
                    image={blockData1.image}
                  />
                </GraphicsCard>
                <Stack sx={{ gap: 4, alignItems: 'flex-start', padding: { xs: 3, sm: 4, md: 5 } }}>
                  <BoxContent {...{ title: blockData1.title, description: blockData1.description }} />
                  {actionBtn && <Button variant="contained" color="primary" {...actionBtn} />}
                </Stack>
              </Stack>
            </GraphicsCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 7 }}>
            <Grid container spacing={1.5}>
              <Grid size={12}>
                <ImageBlock
                  {...{
                    direction: 'right',
                    image: blockData2.image,
                    title: blockData2.title,
                    description: blockData2.description
                  }}
                />
              </Grid>
              <Grid size={12}>
                <ImageBlock
                  {...{
                    image: blockData3.image,
                    title: blockData3.title,
                    description: blockData3.description
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature4.tsx
```tsx
// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { ProcessCardProps } from '@/types/process';

/***************************  FEATURE - CARD  ***************************/

function CommonCard({ title, description, icon }: ProcessCardProps) {
  return (
    <GraphicsCard>
      <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
        <Stack direction="row" sx={{ gap: 1.5, justifyContent: 'space-between' }}>
          <Stack sx={{ gap: { xs: 1, md: 1.5 } }}>
            <Typography variant="h3">{title}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
          </Stack>
          <Box sx={{ p: 1, '& svg': { width: { xs: 24, md: 40 }, height: { xs: 24, md: 40 }, strokeWidth: { xs: 2.5, sm: 2, md: 1.5 } } }}>
            <SvgIcon type={IconType.CUSTOM} {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
          </Box>
        </Stack>
      </Box>
    </GraphicsCard>
  );
}

interface Props {
  heading: string;
  caption: string;
  image: ImageCommonProps;
  cards: ProcessCardProps[];
}

/***************************  FEATURE - 4  ***************************/

export default function Feature4({ heading, caption, cards, image }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5} sx={{ height: 1 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 2.5, justifyContent: 'space-between', height: 1 }}>
            <Typeset {...{ heading, caption, stackProps: { sx: { gap: { xs: 1, sm: 1.5 } } } }} />
            <Stack sx={{ gap: 1.5 }}>
              {cards.map((card, index) => (
                <CommonCard key={index} {...card} />
              ))}
            </Stack>
          </Stack>
        </Grid>
        {image && (
          <Grid size={{ xs: 12, sm: 6 }}>
            <GraphicsCard sx={{ height: 1 }}>
              <Box sx={{ pl: { xs: 3, md: 8 }, py: { xs: 3, md: 8 }, minHeight: { xs: 448, sm: 580, md: 723 }, height: 1 }}>
                <GraphicsImage
                  sx={{
                    border: '5px solid',
                    borderColor: 'grey.200',
                    borderRight: 'none',
                    height: '100%',
                    backgroundPositionX: 'left',
                    backgroundPositionY: 'top',
                    borderTopLeftRadius: { xs: 12 },
                    borderBottomLeftRadius: { xs: 12 }
                  }}
                  image={image}
                />
              </Box>
            </GraphicsCard>
          </Grid>
        )}
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature23.tsx
```tsx
// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard, IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption?: string;
  heading2: string;
  caption2: string;
  primaryBtn?: ButtonProps;
  image?: ImageCommonProps;
  features: IconCardProps[];
}

/***************************  FEATURE - 23  ***************************/

export default function Feature23({ heading, caption, image, features, heading2, caption2, primaryBtn }: Props): JSX.Element {
  const iconProps = { type: IconType.STROKE };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Stack sx={{ gap: 1.5 }}>
          <Grid container spacing={1.5}>
            {features.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6 }}>
                <IconCard
                  icon={{
                    ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }),
                    color: 'grey.900',
                    stroke: 1
                  }}
                  title={item.title}
                  content={item.content}
                  contentCard
                />
              </Grid>
            ))}
            <Grid size={12}>
              <GraphicsCard>
                <Grid container>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                      <Stack sx={{ gap: { xs: 4, sm: 5, md: 7 }, alignItems: 'flex-start' }}>
                        <Stack sx={{ gap: { xs: 1, sm: 1.5 } }}>
                          <Typography variant="h4">{heading2}</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{caption2}</Typography>
                        </Stack>
                        <Button color="primary" size="small" variant="contained" sx={{ px: 2 }} {...primaryBtn} />
                      </Stack>
                    </Box>
                  </Grid>
                  {image && (
                    <Grid size={{ xs: 12, md: 7 }}>
                      <GraphicsCard sx={{ bgcolor: 'grey.200', height: { xs: 187, sm: 271, md: 1 } }}>
                        <GraphicsImage image={image} sx={{ height: 1 }} />
                      </GraphicsCard>
                    </Grid>
                  )}
                </Grid>
              </GraphicsCard>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature22.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Star from '@/images/graphics/Star';

// @types
import { ImageCardProps } from '@/types/feature';

interface Props {
  heading: string;
  features: ImageCardProps[];
}

/***************************  FEATURE - 22  ***************************/

export default function Feature22({ heading, features }: Props): JSX.Element {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const partitionInExtraSmall = 1;
  const partitionInSmall = 2;
  const partitionInLarge = 3;

  const columns = downSM ? partitionInExtraSmall : downMD ? partitionInSmall : partitionInLarge;

  const calculateElementsInLastRow = (dataArray: ImageCardProps[], columns: number) => {
    const totalItems = dataArray.length;
    const elementsInLastRow = totalItems % columns || columns;
    return elementsInLastRow;
  };

  const calculateIndexOfFirstElementInLastRow = (dataArray: ImageCardProps[], elementsInLastRow: number) => {
    const totalItems = dataArray.length;
    const indexOfFirstElementInLastRow = totalItems - elementsInLastRow;
    return indexOfFirstElementInLastRow;
  };

  const elementsInLastRow = calculateElementsInLastRow(features, columns);
  const indexOfFirstElementInLastRow = calculateIndexOfFirstElementInLastRow(features, elementsInLastRow);

  const calculateIndexOfLastElementOfEachRow = (dataArray: ImageCardProps[], columns: number) => {
    const indices = [];
    const totalItems = dataArray.length;
    const rows = Math.ceil(totalItems / columns);

    for (let i = 1; i <= rows; i++) {
      const lastIndexInRow = i * columns - 1;
      indices.push(lastIndexInRow < totalItems ? lastIndexInRow : totalItems - 1);
    }

    return indices;
  };

  const indicesOfLastElements = calculateIndexOfLastElementOfEachRow(features, columns);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
        >
          <Typeset {...{ heading, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <GraphicsCard sx={{ position: 'relative', overflow: 'visible' }}>
            <Box sx={{ p: 3 }}>
              <Grid container>
                {features.map((item, index) => (
                  <Grid
                    key={index}
                    size={{ xs: 12 / partitionInExtraSmall, sm: 12 / partitionInSmall, md: 12 / partitionInLarge }}
                    sx={{
                      position: 'relative',
                      ...(index < indexOfFirstElementInLastRow && { borderBottom: `1px solid ${theme.palette.grey[300]}` }),
                      ...(!indicesOfLastElements.includes(index) && { borderRight: `1px solid ${theme.palette.grey[300]}` })
                    }}
                  >
                    <Stack
                      sx={{
                        gap: { xs: 3, sm: 4 },
                        height: 1,
                        py: { xs: 1.5, sm: 3, md: 4 },
                        px: { xs: 0, sm: 3, md: 4 },
                        alignItems: 'flex-start',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Stack>
                        {item.image && (
                          <Avatar sx={{ width: 60, height: 60, bgcolor: 'grey.200' }}>
                            <GraphicsImage cardMediaProps={{ component: 'img' }} sx={{ height: 24 }} image={item.image} />
                          </Avatar>
                        )}
                        <Stack sx={{ gap: { xs: 0.5, md: 1 }, mt: { xs: 3, sm: 4 } }}>
                          {item.title && <Typography variant="h4">{item.title}</Typography>}
                          {item.content && <Typography sx={{ color: 'text.secondary' }}>{item.content}</Typography>}
                        </Stack>
                      </Stack>
                      {item.actionBtn && <Button variant="contained" color="primary" {...item.actionBtn} />}
                    </Stack>
                    {index < indexOfFirstElementInLastRow && !indicesOfLastElements.includes(index) && (
                      <Stack sx={{ position: 'absolute', bottom: -9, right: -9 }}>
                        <Star />
                      </Stack>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature20.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Star from '@/images/graphics/Star';

// @types
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption?: string;
  image?: ImageCommonProps;
  features: IconCardProps[];
  actionBtn?: ButtonProps;
  secondaryBtn?: ButtonProps;
}

/***************************  FEATURE - 20  ***************************/

export default function Feature20({ heading, caption, image, features, actionBtn, secondaryBtn }: Props): JSX.Element {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const partitionInExtraSmall = 1;
  const partitionInSmall = 2;
  const partitionInLarge = 3;

  const columns = downSM ? partitionInExtraSmall : downMD ? partitionInSmall : partitionInLarge;

  const calculateElementsInLastRow = (dataArray: IconCardProps[], columns: number) => {
    const totalItems = dataArray.length;
    const elementsInLastRow = totalItems % columns || columns;
    return elementsInLastRow;
  };

  const calculateIndexOfFirstElementInLastRow = (dataArray: IconCardProps[], elementsInLastRow: number) => {
    const totalItems = dataArray.length;
    const indexOfFirstElementInLastRow = totalItems - elementsInLastRow;
    return indexOfFirstElementInLastRow;
  };

  const elementsInLastRow = calculateElementsInLastRow(features, columns);
  const indexOfFirstElementInLastRow = calculateIndexOfFirstElementInLastRow(features, elementsInLastRow);

  const calculateIndexOfLastElementOfEachRow = (dataArray: IconCardProps[], columns: number) => {
    const indices = [];
    const totalItems = dataArray.length;
    const rows = Math.ceil(totalItems / columns);

    for (let i = 1; i <= rows; i++) {
      const lastIndexInRow = i * columns - 1;
      indices.push(lastIndexInRow < totalItems ? lastIndexInRow : totalItems - 1);
    }

    return indices;
  };

  const indicesOfLastElements = calculateIndexOfLastElementOfEachRow(features, columns);
  const gc = theme.palette.background.default;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
        >
          <Typeset {...{ heading, stackProps: { sx: { maxWidth: { md: 500 }, ...(!image && { maxWidth: 1, textAlign: 'center' }) } } }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <GraphicsCard sx={{ position: 'relative', overflow: 'visible' }}>
            {image && (
              <GraphicsCard
                sx={{
                  height: { md: 267 },
                  width: { md: 456 },
                  bgcolor: 'transparent',
                  position: 'absolute',
                  top: -190,
                  right: 45,
                  zIndex: -1,
                  display: { xs: 'none', md: 'block' }
                }}
              >
                <GraphicsImage sx={{ height: 1, backgroundPositionX: 'right', backgroundPositionY: 'top' }} image={image}>
                  <Box sx={{ width: 1, height: 1, background: `linear-gradient(180deg, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.6)} 100%)` }} />
                </GraphicsImage>
              </GraphicsCard>
            )}
            <Box sx={{ p: 3 }}>
              <Grid container>
                {features.map((item, index) => (
                  <Grid
                    key={index}
                    size={{ xs: 12 / partitionInExtraSmall, sm: 12 / partitionInSmall, md: 12 / partitionInLarge }}
                    sx={{
                      position: 'relative',
                      ...(index < indexOfFirstElementInLastRow && { borderBottom: `1px solid ${theme.palette.grey[300]}` }),
                      ...(!indicesOfLastElements.includes(index) && { borderRight: `1px solid ${theme.palette.grey[300]}` })
                    }}
                  >
                    <Stack sx={{ gap: { xs: 3, sm: 4 }, height: 1, py: { xs: 1.5, sm: 3, md: 4 }, px: { xs: 0, sm: 3, md: 4 } }}>
                      <Avatar sx={{ width: 60, height: 60, bgcolor: 'grey.300' }}>
                        <SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                      </Avatar>
                      <Stack sx={{ gap: { xs: 0.5, md: 1 } }}>
                        {item.title && <Typography variant="h4">{item.title}</Typography>}
                        {item.content && <Typography sx={{ color: 'text.secondary' }}>{item.content}</Typography>}
                      </Stack>
                    </Stack>
                    {index < indexOfFirstElementInLastRow && !indicesOfLastElements.includes(index) && (
                      <Stack sx={{ position: 'absolute', bottom: -9, right: -9 }}>
                        <Star />
                      </Stack>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </GraphicsCard>
        </motion.div>
        <Stack sx={{ alignItems: 'center', gap: 3 }}>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: { xs: '75%', sm: '45%' }, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4
              }}
            >
              {caption}
            </motion.div>
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
          >
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
              {secondaryBtn && (
                <ButtonAnimationWrapper>
                  <Button variant="outlined" {...secondaryBtn} />
                </ButtonAnimationWrapper>
              )}
              {actionBtn && (
                <ButtonAnimationWrapper>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                    {...actionBtn}
                  />
                </ButtonAnimationWrapper>
              )}
            </Stack>
          </motion.div>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature2.tsx
```tsx
// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard, IconCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption?: string;
  image?: ImageCommonProps;
  features?: IconCardProps[];
}

/***************************  FEATURE - 2  ***************************/

export default function Feature2({ heading, caption, image, features }: Props): JSX.Element {
  const imgBoxPadding = { xs: 3, sm: 5, md: 8 };
  const iconProps = { type: IconType.CUSTOM };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {image && (
            <Grid size={12}>
              <GraphicsCard sx={{ pl: imgBoxPadding, pr: { xs: 0, md: 8 }, pt: imgBoxPadding, height: 300 }}>
                <GraphicsImage
                  image={image}
                  sx={{
                    height: 1,
                    backgroundPositionX: 'left',
                    backgroundPositionY: 'top',
                    borderTopLeftRadius: { xs: 12, sm: 16, md: 20 },
                    borderTopRightRadius: { xs: 0, md: 20 }
                  }}
                />
              </GraphicsCard>
            </Grid>
          )}
          {features?.length &&
            features.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 4 }}>
                <IconCard
                  icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                  title={item.title}
                  content={item.content}
                />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature21.tsx
```tsx
'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard, IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption?: string;
  image?: ImageCommonProps;
  features: IconCardProps[];
  primaryBtn?: ButtonProps;
  secondaryBtn?: ButtonProps;
}

/***************************  FEATURE - 21  ***************************/

export default function Feature21({ heading, caption, image, features, primaryBtn, secondaryBtn }: Props): JSX.Element {
  const imagePadding = { xs: 3, sm: 4, md: 5 };
  const iconProps = { color: 'text.primary', stroke: 1 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.3
          }}
        >
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        <Stack sx={{ gap: 1.5 }}>
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
            >
              <GraphicsCard>
                <Box sx={{ pl: imagePadding, pt: imagePadding, height: { xs: 204, sm: 300, md: 360 } }}>
                  <GraphicsImage
                    image={image}
                    sx={{
                      height: 1,
                      backgroundPositionX: 'left',
                      backgroundPositionY: 'top',
                      borderTopLeftRadius: { xs: 12 },
                      borderBottomRightRadius: { xs: 20, sm: 32, md: 40 },
                      border: '5px solid',
                      borderColor: 'grey.200',
                      borderBottom: 'none',
                      borderRight: 'none'
                    }}
                  />
                </Box>
              </GraphicsCard>
            </motion.div>
          )}
          <Grid container spacing={1.5}>
            {features.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: item.animationDelay
                  }}
                  style={{ height: '100%' }}
                >
                  <IconCard
                    icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                    title={item.title}
                    stackProps={{ sx: { gap: 0 } }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
        {(primaryBtn || secondaryBtn) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3
            }}
          >
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
              {secondaryBtn && (
                <ButtonAnimationWrapper>
                  <Button variant="outlined" startIcon={<SvgIcon name="tabler-eye" size={16} stroke={3} />} {...secondaryBtn} />
                </ButtonAnimationWrapper>
              )}
              {primaryBtn && (
                <ButtonAnimationWrapper>
                  <Button
                    variant="contained"
                    startIcon={<SvgIcon name="tabler-download" size={16} stroke={3} color="background.default" />}
                    {...primaryBtn}
                  />
                </ButtonAnimationWrapper>
              )}
            </Stack>
          </motion.div>
        )}
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature19.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { ThemeMode, ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Pattern1 from '@/images/graphics/Pattern1';
import Pattern2 from '@/images/graphics/Pattern2';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface BlockProps2 {
  description?: string;
}

interface BlockProps {
  image?: ImageCommonProps;
  actionBtn?: ButtonProps;
  title?: string;
  description?: string;
}

interface Props {
  heading: string;
  caption?: string;
  blockData1: BlockProps;
  blockData2: BlockProps;
  blockData3: BlockProps2;
  blockData4: BlockProps2;
}

/***************************  FEATURE - BLOCK CONTENT  ***************************/

function BoxContent({ title, description }: { title?: string; description?: string }) {
  return (
    (title || description) && (
      <Stack sx={{ gap: { xs: 2, md: 3 } }}>
        <Stack sx={{ gap: 1 }}>
          {title && <Typography variant="h4">{title}</Typography>}
          {description && <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>}
        </Stack>
      </Stack>
    )
  );
}
/***************************  FEATURE - 19  ***************************/

export default function Feature19({ heading, caption, blockData1, blockData2, blockData3, blockData4 }: Props): JSX.Element {
  const theme = useTheme();

  const gc = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(64.19% 3.3% at 56.9% 73.35%, ${alpha(gc, 0)} 0%, ${gc} 100%)`
      : `radial-gradient(64.19% 99.7% at 56.9% 73.35%, ${alpha(gc, 0)} 0%, ${gc} 100%)`;

  const boxPadding = { xs: 3, md: 4 };
  const overlaySX = { top: 0, right: 0, position: 'absolute', width: 1, height: 1 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset
          {...{
            heading,
            caption,
            captionProps: { sx: { maxWidth: { sm: 390, md: 500 }, mx: 'auto' } },
            stackProps: { sx: { textAlign: 'center' } }
          }}
        />
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 5 }}>
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ height: 1, justifyContent: 'space-between' }}>
                <Stack sx={{ p: boxPadding, gap: 5, alignItems: 'flex-start' }}>
                  <BoxContent title={blockData1.title} description={blockData1.description} />
                  {blockData1.actionBtn && <Button variant="outlined" color="primary" {...blockData1.actionBtn} />}
                </Stack>
                {blockData1.image && (
                  <GraphicsCard sx={{ position: 'relative' }}>
                    <GraphicsImage
                      image={blockData1.image}
                      sx={{
                        height: { xs: 192, sm: 273 },
                        backgroundPositionY: { xs: 'top', sm: 50, lg: 'top' },
                        backgroundPositionX: { xs: 30, sm: 20, md: 60 }
                      }}
                    />
                    <Box sx={{ ...overlaySX, background: gradient }} />
                  </GraphicsCard>
                )}
              </Stack>
            </GraphicsCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 7 }} container spacing={1.5} sx={{ height: 1 }}>
            <Grid size={12}>
              <GraphicsCard sx={{ height: 1, position: 'relative', minHeight: 267 }}>
                <Box sx={{ height: 1 }}>
                  <Stack
                    sx={{
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 5,
                      position: 'relative',
                      zIndex: 1,
                      p: boxPadding,
                      height: 1
                    }}
                  >
                    <BoxContent title={blockData2.title} description={blockData2.description} />
                    {blockData2.actionBtn && <Button variant="outlined" color="primary" {...blockData2.actionBtn} />}
                  </Stack>
                  {blockData2.image && (
                    <GraphicsCard sx={{ overflow: 'visible' }}>
                      <GraphicsImage
                        image={blockData2.image}
                        sx={{
                          width: 1,
                          height: { xs: 210, sm: 226 },
                          backgroundPosition: 'right',
                          backgroundPositionY: 'top',
                          backgroundSize: 'contain',
                          position: 'absolute',
                          right: { xs: -70, sm: '-8%' },
                          bottom: { xs: -40, sm: -53 }
                        }}
                      />
                      <Box
                        sx={{
                          ...overlaySX,
                          background: `radial-gradient(56.13% 56.13% at 50% 50%, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.6)} 100%)`
                        }}
                      />
                    </GraphicsCard>
                  )}
                </Box>
              </GraphicsCard>
            </Grid>
            <Grid size={6}>
              <GraphicsCard sx={{ height: 1 }}>
                <Stack sx={{ justifyContent: 'space-between', gap: 3, p: { xs: 2, md: 4 }, textAlign: 'center', height: 1 }}>
                  {blockData3.description && <Typography sx={{ color: 'text.secondary' }}>{blockData3.description}</Typography>}
                  <Box sx={{ width: { xs: 135, sm: 150, md: 200, lg: 260 }, height: 'auto', mx: 'auto' }}>
                    <Pattern1 fill={alpha(theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 50 : 200], 0.4)} />
                  </Box>
                </Stack>
              </GraphicsCard>
            </Grid>
            <Grid size={6}>
              <GraphicsCard sx={{ height: 1 }}>
                <Stack sx={{ justifyContent: 'space-between', gap: 3, p: { xs: 2, md: 4 }, textAlign: 'center', height: 1 }}>
                  {blockData4.description && <Typography sx={{ color: 'text.secondary' }}>{blockData4.description}</Typography>}
                  <Box sx={{ width: { xs: 100, sm: 110, md: 160 }, height: 'auto', mx: 'auto' }}>
                    <Pattern2 fill={alpha(theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 50 : 200], 0.4)} />
                  </Box>
                </Stack>
              </GraphicsCard>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature18.tsx
```tsx
'use client';

import { SyntheticEvent, useState } from 'react';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import GraphicsImage from '@/components/GraphicsImage';
import { ImageCommonProps } from '@/types/graphics';
import { SpriteIconProps } from '@/types/icon';

interface FeatureListProps {
  primary: string;
}

interface TopicsProps {
  icon: SpriteIconProps;
  title: string;
  title2: string;
  description?: string;
  image: ImageCommonProps;
  list?: FeatureListProps[];
  actionBtn?: ButtonProps;
  actionBtn2?: ButtonProps;
}

interface Props {
  heading: string;
  caption?: string;
  topics: TopicsProps[];
}

/***************************  FEATURE - 18  ***************************/

export default function Feature18({ heading, caption, topics }: Props): JSX.Element {
  const boxPadding = { xs: 3, md: 5 };
  const imagePadding = { xs: 3, sm: 4, md: 5 };

  const [value, setValue] = useState<string>('1');

  // Handle tab change
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset
          {...{
            heading,
            caption,
            stackProps: { sx: { alignItems: 'center', textAlign: 'center', maxWidth: { sm: 470, md: 615 }, mx: 'auto' } }
          }}
        />
        <Stack sx={{ gap: 1.5, alignItems: 'center' }}>
          <TabContext value={value}>
            <GraphicsCard sx={{ width: { xs: 1, sm: 'unset' } }}>
              <Box sx={{ p: 0.25 }}>
                <TabList
                  onChange={handleChange}
                  sx={{ '& .MuiTabs-indicator': { display: 'none' }, minHeight: 'unset', p: 0.25 }}
                  variant="scrollable"
                >
                  {topics.map((item, index) => (
                    <Tab
                      label={item.title}
                      disableFocusRipple
                      icon={
                        <SvgIcon
                          {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })}
                          size={16}
                          stroke={2}
                          color="text.secondary"
                        />
                      }
                      value={String(index + 1)}
                      key={index}
                      iconPosition="start"
                      tabIndex={0}
                      sx={{
                        minHeight: 44,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'transparent',
                        '& svg ': { mr: 1 },
                        '&.Mui-selected': {
                          bgcolor: 'grey.200',
                          borderColor: 'grey.400',
                          color: 'text.primary',
                          '& svg': { stroke: 'text.primary' }
                        },
                        '&.Mui-focusVisible': { bgcolor: 'grey.300' },
                        '&:hover': { bgcolor: 'grey.200' }
                      }}
                    />
                  ))}
                </TabList>
              </Box>
            </GraphicsCard>
            {topics.map((item, index) => (
              <TabPanel value={String(index + 1)} key={index} sx={{ p: 0, width: 1 }}>
                <Grid container spacing={1.5}>
                  <Grid size={{ xs: 12, sm: 5 }}>
                    <GraphicsCard>
                      <Box sx={{ pl: imagePadding, pt: imagePadding, height: { xs: 260, sm: 396, md: 434 } }}>
                        <GraphicsImage
                          sx={{
                            height: 1,
                            backgroundPositionX: 'left',
                            backgroundPositionY: 'top',
                            border: '5px solid',
                            borderColor: 'grey.200',
                            borderBottom: 'none',
                            borderRight: 'none',
                            borderTopLeftRadius: { xs: 12 },
                            borderBottomRightRadius: { xs: 20, sm: 32, md: 40 }
                          }}
                          image={item.image}
                        />
                      </Box>
                    </GraphicsCard>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 7 }}>
                    <GraphicsCard sx={{ height: 1 }}>
                      <Stack
                        sx={{
                          justifyContent: 'space-between',
                          gap: 5,
                          height: item.actionBtn || item.actionBtn2 ? { sm: 'calc(100% - 98px)', md: 'calc(100%  - 114px)' } : 1,
                          pt: boxPadding,
                          px: boxPadding
                        }}
                      >
                        <Stack direction="row" sx={{ gap: 1 }}>
                          <SvgIcon
                            {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })}
                            size={16}
                            stroke={2}
                            color="text.primary"
                          />
                          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                            {item.title}
                          </Typography>
                        </Stack>
                        <Stack sx={{ gap: { xs: 2, md: 3 }, pb: boxPadding }}>
                          <Stack sx={{ gap: 0.5 }}>
                            <Typography variant="h4">{item.title2}</Typography>
                            {item.description && <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>}
                          </Stack>
                          {item.list && (
                            <Grid container spacing={{ xs: 0.75, md: 1 }}>
                              {item.list.map((list, index) => (
                                <Grid key={index} size={{ xs: 12, md: 6 }}>
                                  <Stack
                                    direction="row"
                                    sx={{
                                      gap: 0.5,
                                      alignItems: 'center',
                                      '& svg.tabler-rosette-discount-check': { width: { xs: 16, md: 24 }, height: { xs: 16, md: 24 } }
                                    }}
                                  >
                                    <SvgIcon name="tabler-rosette-discount-check" stroke={1} color="text.secondary" />
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                      {list.primary}
                                    </Typography>
                                  </Stack>
                                </Grid>
                              ))}
                            </Grid>
                          )}
                        </Stack>
                      </Stack>
                      {(item.actionBtn || item.actionBtn2) && (
                        <GraphicsCard sx={{ bgcolor: 'grey.200' }}>
                          <Stack direction="row" sx={{ alignItems: 'flex-start', gap: 1.5, p: { xs: 2, sm: 3, md: 4 } }}>
                            {item.actionBtn2 && (
                              <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<SvgIcon name="tabler-help" size={16} stroke={3} />}
                                {...item.actionBtn2}
                              />
                            )}
                            {item.actionBtn && (
                              <Button
                                variant="contained"
                                color="primary"
                                startIcon={<SvgIcon name="tabler-link" size={16} stroke={3} color="background.default" />}
                                {...item.actionBtn}
                              />
                            )}
                          </Stack>
                        </GraphicsCard>
                      )}
                    </GraphicsCard>
                  </Grid>
                </Grid>
              </TabPanel>
            ))}
          </TabContext>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature16.tsx
```tsx
'use client';

// @mui
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FeatureCardProps } from '@/types/feature';
interface Props {
  heading: string;
  caption?: string;
  actionBtn: ButtonProps;
  cards: FeatureCardProps[];
}

/***************************  FEATURE - 16  ***************************/

export default function Feature16({ heading, caption, cards, actionBtn }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5
        }}
      >
        <GraphicsCard>
          <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
            <Grid container spacing={{ xs: 2.5, sm: 2, md: 3 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack sx={{ justifyContent: 'space-between', gap: 2, height: 1 }}>
                  <Typography variant="h2" sx={{ maxWidth: { xs: 240, sm: 370, md: 460 } }}>
                    {heading}
                  </Typography>
                  <Stack sx={{ gap: { xs: 1.5, sm: 3 }, alignItems: 'flex-start' }}>
                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                      {caption}
                    </Typography>
                    <ButtonAnimationWrapper>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                        {...actionBtn}
                      />
                    </ButtonAnimationWrapper>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <List disablePadding>
                  {cards.map((item, index) => (
                    <ListItem disablePadding key={index} sx={{ py: { xs: 1.5, sm: 2, md: 3 }, alignItems: 'flex-start' }}>
                      <ListItemAvatar sx={{ minWidth: { xs: 60, md: 76 }, height: 60 }}>
                        <Avatar
                          sx={{
                            bgcolor: 'grey.300',
                            width: { xs: 48, md: 60 },
                            height: { xs: 48, md: 60 },
                            borderRadius: 4,
                            '& svg': { width: { xs: 16, md: 24 }, height: { xs: 16, md: 24 } }
                          }}
                        >
                          <SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText sx={{ my: 0 }}>
                        <Stack sx={{ gap: { xs: 0.5, sm: 1 } }}>
                          <Typography variant="h4">{item.title}</Typography>
                          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 360 } }}>{item.description}</Typography>
                        </Stack>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature15.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { SpriteIconProps } from '@/types/icon';

interface FeatureListProps {
  primary: string;
}

interface BlockProps {
  image?: ImageCommonProps;
  list?: FeatureListProps[];
  description2?: string;
  actionBtn?: ButtonProps;
  actionBtn2?: ButtonProps;
  title?: string;
  description?: string;
  icon?: string;
}

interface CardBlockProps {
  image?: ImageCommonProps;
  list?: FeatureListProps[];
  description2?: string;
  actionBtn?: ButtonProps;
  actionBtn2?: ButtonProps;
  icon?: string;
  title?: string;
  description?: string;
}

interface Props {
  heading: string;
  caption?: string;
  blockData1: BlockProps;
  blockData2: BlockProps;
  blockData3: BlockProps;
  blockData4: BlockProps;
}

/***************************  FEATURE - BLOCK CONTENT ***************************/

function BoxContent({ icon, title, description }: { icon?: SpriteIconProps; title?: string; description?: string }) {
  return (
    (icon || title || description) && (
      <Stack sx={{ gap: { xs: 2, md: 3 }, position: 'relative', maxWidth: { xs: '80%', sm: 280, md: 320 } }}>
        {icon && (
          <Avatar sx={{ bgcolor: 'grey.300', width: { xs: 48, md: 60 }, height: { xs: 48, md: 60 }, borderRadius: 10 }}>
            <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
          </Avatar>
        )}
        <Stack sx={{ gap: 1 }}>
          {title && <Typography variant="h3">{title}</Typography>}
          {description && <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>}
        </Stack>
      </Stack>
    )
  );
}

/***************************  FEATURE - CARD  ***************************/

function CardBlock({ image, title, description, icon, list, description2, actionBtn, actionBtn2 }: CardBlockProps) {
  const theme = useTheme();

  const gc = theme.palette.grey[200];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(70.25% 2% at 50% 50%, ${gc} 0%,  ${alpha(gc, 0)} 100%)`
      : `radial-gradient(57.25% 128.81% at 50% 50%, ${gc} 0%, ${alpha(gc, 0)} 100%)`;

  const boxPadding = { xs: 3, md: 5 };
  const imgRadius = { xs: 20, md: 24 };

  return (
    <GraphicsCard sx={{ height: 1, position: 'relative' }}>
      {image && (
        <GraphicsCard>
          <GraphicsImage
            image={image}
            sx={{
              backgroundSize: 'contain',
              backgroundPositionX: 'right',
              borderTopRightRadius: imgRadius,
              borderBottomRightRadius: imgRadius,
              position: 'absolute',
              width: 1,
              height: 1,
              right: { xs: -180, sm: -115, md: -90 }
            }}
          />
          <Box sx={{ background: gradient, top: 0, right: 0, position: 'absolute', width: 1, height: 1 }} />
        </GraphicsCard>
      )}
      <Stack sx={{ p: boxPadding, height: 1, justifyContent: 'space-between', gap: 7 }}>
        <BoxContent {...{ icon, title, description }} />
        <Stack sx={{ gap: 2, alignItems: 'flex-start' }}>
          {list && (
            <List disablePadding sx={{ maxWidth: 320 }}>
              {list.map((item, index) => (
                <ListItem disablePadding key={index} sx={{ py: 0.25 }}>
                  <ListItemAvatar sx={{ minWidth: 32, height: 24 }}>
                    <SvgIcon name="tabler-rosette-discount-check" stroke={1} color="grey.800" />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.primary}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          )}
          {description2 && <Typography>{description2}</Typography>}
          {actionBtn && <Button variant="contained" color="primary" {...actionBtn} />}
          {actionBtn2 && <Button variant="outlined" color="primary" {...actionBtn2} />}
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  FEATURE - 15  ***************************/

export default function Feature15({ heading, caption, blockData1, blockData2, blockData3, blockData4 }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset
          {...{
            heading,
            caption,
            captionProps: { sx: { maxWidth: { sm: 630, md: 760 }, mx: 'auto' } },
            stackProps: { sx: { textAlign: 'center' } }
          }}
        />
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 7.5 }}>
            <CardBlock
              {...{
                image: blockData1.image,
                title: blockData1.title,
                description: blockData1.description,
                icon: blockData1.icon,
                list: blockData1.list,
                actionBtn: blockData1.actionBtn
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4.5 }}>
            <CardBlock
              {...{
                image: blockData2.image,
                title: blockData2.title,
                description: blockData2.description,
                icon: blockData2.icon,
                description2: blockData2.description2,
                actionBtn2: blockData2.actionBtn2
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4.5 }}>
            <CardBlock
              {...{
                image: blockData3.image,
                title: blockData3.title,
                description: blockData3.description,
                icon: blockData3.icon,
                description2: blockData3.description2,
                actionBtn2: blockData3.actionBtn2
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 7.5 }}>
            <CardBlock
              {...{
                image: blockData4.image,
                title: blockData4.title,
                description: blockData4.description,
                icon: blockData4.icon,
                list: blockData4.list,
                actionBtn: blockData4.actionBtn
              }}
            />
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature17.tsx
```tsx
'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard, IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  image: ImageCommonProps;
  features: IconCardProps[];
  actionBtn?: ButtonProps;
}

/***************************  FEATURE - 17  ***************************/

export default function Feature17({ heading, caption, features, image, actionBtn }: Props): JSX.Element {
  const iconProps = { size: 24 };

  const GetImageCard = () => (
    <GraphicsCard sx={{ height: 1 }}>
      <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, minHeight: { xs: 343, sm: 420, md: 530 }, height: 1 }}>
        <GraphicsImage
          sx={{
            height: '100%',
            backgroundSize: 'contain',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            borderTopLeftRadius: { xs: 12 },
            borderBottomLeftRadius: { xs: 12 }
          }}
          image={image}
        />
      </Box>
    </GraphicsCard>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, justifyContent: 'space-between', height: 1 }}>
            <Stack sx={{ gap: { xs: 3, sm: 4 }, alignItems: 'flex-start' }}>
              <Typeset {...{ heading, caption }} />
              {actionBtn && (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                  {...actionBtn}
                />
              )}
            </Stack>
            <Grid container spacing={1.5}>
              <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                <Grid container spacing={1.5}>
                  {features.map((item, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }}>
                      <IconCard
                        icon={{ ...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon }), ...iconProps }}
                        title={item.title}
                        content={item.content}
                        iconAvatar
                        cardPadding={{ xs: 1.5, sm: 2, md: 3 }}
                        stackProps={{ sx: { gap: { xs: 2.5, sm: 2, md: 1 } } }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }} sx={{ order: { xs: -1, sm: 0 }, display: { xs: 'block', md: 'none' } }}>
                <GetImageCard />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ md: 6 }}>
          <GetImageCard />
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature14.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FeatureCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  title: string;
  description: string;
  title2: string;
  description2: string;
  actionBtn: ButtonProps;
  cards: FeatureCardProps[];
  image1: ImageCommonProps;
  image2: ImageCommonProps;
}

/***************************  FEATURE - 14  ***************************/

export default function Feature14({
  heading,
  image1,
  image2,
  cards,
  actionBtn,
  title,
  description,
  title2,
  description2
}: Props): JSX.Element {
  const theme = useTheme();

  const gc = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(71.13% 71.13% at 50% 50.07%, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.6)} 100%)`
      : `radial-gradient(71.13% 71.13% at 50% 50.07%, ${alpha(gc, 0)} 0%, ${gc} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack
          direction={{ sm: 'row' }}
          sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'flex-end' }, gap: 1.5 }}
        >
          <Typeset {...{ heading }} />
          <Button
            variant="contained"
            color="primary"
            startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
            {...actionBtn}
          />
        </Stack>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 7, md: 8 }}>
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ gap: { xs: 0.5, sm: 1 }, pt: { xs: 3, sm: 4, md: 5 }, px: { xs: 3, sm: 4, md: 5 } }}>
                <Typography variant="h4">{title}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
              </Stack>
              <GraphicsImage
                sx={{
                  height: { xs: 162, sm: 290, md: 270 },
                  backgroundPositionY: 'top',
                  width: 1,
                  transform: 'scale(1.3)',
                  transformOrigin: 'top'
                }}
                image={image1}
              >
                <Box sx={{ height: 1, background: gradient, bottom: 0 }} />
              </GraphicsImage>
            </GraphicsCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 5, md: 4 }}>
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ gap: { xs: 0.5, sm: 1 }, pt: { xs: 3, sm: 4, md: 5 }, px: { xs: 3, sm: 4, md: 5 } }}>
                <Typography variant="h4">{title2}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{description2}</Typography>
              </Stack>
              <GraphicsImage
                image={image2}
                sx={{
                  height: { xs: 190, sm: 290, md: 270 },
                  backgroundPositionY: { xs: 'top', sm: 'bottom' },
                  backgroundSize: { xs: 'cover', sm: 'contain' },
                  width: 1
                }}
              />
            </GraphicsCard>
          </Grid>
        </Grid>
        <Grid container spacing={2.5}>
          {cards.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <Stack direction={{ xs: 'row', sm: 'column', md: 'row' }} sx={{ gap: { xs: 2, md: 2.5 } }}>
                <Avatar
                  sx={{
                    bgcolor: 'grey.100',
                    width: { sm: 60 },
                    height: { sm: 60 },
                    borderRadius: 10,
                    '& svg': { width: { xs: 16, sm: 24 }, height: { xs: 16, sm: 24 } }
                  }}
                >
                  <SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                </Avatar>
                <Stack sx={{ gap: 1 }}>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/integration/Integration2.tsx
```tsx
'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TagProps } from '@/types/integration';

/***************************  INTEGRATION - TAG  ***************************/

function IntegrationTag({ label, icon }: TagProps) {
  const iconSize = { xs: 32, md: 40 };

  return (
    <Chip
      label={<Typography variant="h5">{label}</Typography>}
      {...(icon && {
        icon: <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} stroke={1} color="inherit" />
      })}
      sx={{
        px: { xs: 2.25, md: 3 },
        py: icon ? { xs: 1.25, md: 1.75 } : { xs: 1.875, md: 2.5 },
        m: 0.5,
        bgcolor: 'background.default',
        '& .MuiChip-label': { p: 0, ...(icon && { pl: 1.25 }) },
        '& svg': { width: iconSize, height: iconSize }
      }}
    />
  );
}

interface Props {
  tagList: TagProps[];
  headLine: string;
  captionLine: string;
  primaryBtn: ButtonProps;
}

/***************************  INTEGRATION - 2  ***************************/

export default function Integration2({ headLine, captionLine, primaryBtn, tagList }: Props) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
      >
        <GraphicsCard>
          <Stack sx={{ alignItems: 'center', p: { xs: 3, sm: 4, md: 5 } }}>
            <Stack sx={{ alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
              {headLine && (
                <Typography align="center" variant="h2">
                  {headLine}
                </Typography>
              )}
              {captionLine && (
                <Typography align="center" variant="h6" sx={{ color: 'text.secondary' }}>
                  {captionLine}
                </Typography>
              )}
            </Stack>
            <Stack direction="row" sx={{ py: { xs: 4, sm: 5, md: 6 }, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              {tagList.map((integration, index) => (
                <IntegrationTag key={index} {...integration} />
              ))}
            </Stack>
            {primaryBtn && (
              <ButtonAnimationWrapper>
                <Button variant="contained" size="large" {...primaryBtn} />
              </ButtonAnimationWrapper>
            )}
          </Stack>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature13.tsx
```tsx
'use client';

// @mui
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FeatureCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption?: string;
  actionBtn: ButtonProps;
  cards: FeatureCardProps[];
  image?: ImageCommonProps;
}

/***************************  FEATURE - 13  ***************************/

export default function Feature13({ heading, caption, image, cards, actionBtn }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5
          }}
        >
          <Stack sx={{ alignItems: 'center', gap: { xs: 2, sm: 4 } }}>
            <Typeset
              {...{
                heading,
                caption,
                stackProps: { sx: { alignItems: 'center', textAlign: 'center', maxWidth: { xs: 340, sm: 500, md: 615 }, mx: 'auto' } }
              }}
            />
            <ButtonAnimationWrapper>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                {...actionBtn}
              />
            </ButtonAnimationWrapper>
          </Stack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5
          }}
        >
          <GraphicsCard>
            <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
              <Grid container direction={{ xs: 'column-reverse', sm: 'row' }} spacing={2.5} sx={{ alignItems: { sm: 'center' } }}>
                <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                  <List disablePadding sx={{ mt: { sm: -1.5 } }}>
                    {cards.map((item, index) => (
                      <ListItem
                        disablePadding
                        key={index}
                        sx={{ pb: { xs: 1, sm: 1.5, md: 2 }, pt: { xs: 1, sm: 3, md: 3 }, alignItems: 'flex-start' }}
                      >
                        <ListItemAvatar sx={{ minWidth: { xs: 52, sm: 60, md: 76 }, height: 60 }}>
                          <Avatar
                            sx={{
                              bgcolor: 'grey.300',
                              width: { sm: 48, md: 60 },
                              height: { sm: 48, md: 60 },
                              borderRadius: 10,
                              '& svg': { width: { xs: 16, sm: 24 }, height: { xs: 16, sm: 24 } }
                            }}
                          >
                            <SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ my: 0 }}>
                          <Stack sx={{ gap: { xs: 0.5, sm: 1 } }}>
                            <Typography variant="h4">{item.title}</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                          </Stack>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                {image && (
                  <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                    <GraphicsCard sx={{ height: 1 }}>
                      <GraphicsImage
                        image={image}
                        sx={{
                          height: { xs: 278, sm: 470, md: 533 },
                          backgroundSize: 'contain',
                          backgroundPositionX: { xs: 'center', sm: 'right' },
                          backgroundPositionY: 'center'
                        }}
                      />
                    </GraphicsCard>
                  </Grid>
                )}
              </Grid>
            </Box>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature11.tsx
```tsx
'use client';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard, IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';
interface Props {
  heading: string;
  caption?: string;
  image?: ImageCommonProps;
  showBorder?: boolean;
  features: IconCardProps[];
}

/***************************  FEATURE - 11  ***************************/

export default function Feature11({ heading, caption, image, features, showBorder = true }: Props): JSX.Element {
  const imagePadding = { xs: 3, sm: 4, md: 5 };
  const iconProps = { type: IconType.CUSTOM };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.3
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Stack sx={{ gap: 1.5 }}>
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
            >
              <GraphicsCard>
                <Box sx={{ pl: imagePadding, pt: imagePadding, height: { xs: 204, sm: 300, md: 360 } }}>
                  <GraphicsImage
                    image={image}
                    sx={{
                      height: 1,
                      backgroundPositionX: 'left',
                      backgroundPositionY: 'top',
                      borderTopLeftRadius: { xs: 12 },
                      borderBottomRightRadius: { xs: 20, sm: 32, md: 40 },
                      ...(showBorder && {
                        border: '5px solid',
                        borderColor: 'grey.200',
                        borderBottom: 'none',
                        borderRight: 'none'
                      })
                    }}
                  />
                </Box>
              </GraphicsCard>
            </motion.div>
          )}
          <Grid container spacing={1.5}>
            {features.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: item.animationDelay
                  }}
                >
                  <IconCard
                    icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                    title={item.title}
                    content={item.content}
                    contentCard
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature12.tsx
```tsx
'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard, IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';
import { SpriteIconProps } from '@/types/icon';

interface Props {
  heading: string;
  caption?: string;
  heading2: string;
  caption2: string;
  primaryBtn: ButtonProps;
  primaryBtn2?: ButtonProps;
  icon?: SpriteIconProps;
  icon2?: SpriteIconProps;
  image?: ImageCommonProps;
  features: IconCardProps[];
}

/***************************  FEATURE - 12  ***************************/

export default function Feature12({
  heading,
  caption,
  image,
  features,
  heading2,
  caption2,
  primaryBtn,
  primaryBtn2,
  icon,
  icon2
}: Props): JSX.Element {
  const imagePadding = { xs: 3, sm: 5 };
  const iconProps = { type: IconType.CUSTOM };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Stack sx={{ gap: 1.5 }}>
          <Grid container spacing={1.5}>
            {features.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: item.animationDelay
                  }}
                >
                  <IconCard
                    icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                    title={item.title}
                    content={item.content}
                    contentCard
                  />
                </motion.div>
              </Grid>
            ))}
            <Grid size={12}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.4
                }}
              >
                <GraphicsCard>
                  <Grid container>
                    <Grid size={{ xs: 12, md: 5 }}>
                      <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                        <Stack sx={{ gap: { xs: 4, sm: 5, md: 7 } }}>
                          <Stack sx={{ gap: { xs: 1, sm: 1.5 } }}>
                            <Typography variant="h4">{heading2}</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{caption2}</Typography>
                          </Stack>
                          <Stack direction="row" sx={{ gap: 1.5 }}>
                            <ButtonAnimationWrapper>
                              <Button
                                color="primary"
                                size="small"
                                variant="contained"
                                sx={{ px: 2 }}
                                {...primaryBtn}
                                startIcon={
                                  icon && (
                                    <SvgIcon
                                      size={16}
                                      color="background.default"
                                      stroke={2}
                                      {...(typeof icon === 'string' ? { name: icon } : { ...icon })}
                                    />
                                  )
                                }
                              />
                            </ButtonAnimationWrapper>
                            {primaryBtn2 && (
                              <ButtonAnimationWrapper>
                                <Button
                                  color="primary"
                                  size="small"
                                  variant="outlined"
                                  sx={{ px: 2 }}
                                  {...primaryBtn2}
                                  startIcon={
                                    icon2 && (
                                      <SvgIcon {...(typeof icon2 === 'string' ? { name: icon2 } : { ...icon2 })} size={16} stroke={2} />
                                    )
                                  }
                                />
                              </ButtonAnimationWrapper>
                            )}
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                    {image && (
                      <Grid size={{ xs: 12, md: 7 }}>
                        <GraphicsCard sx={{ bgcolor: 'grey.200', height: 1 }}>
                          <Box sx={{ pl: imagePadding, pt: imagePadding, height: { xs: 187, sm: 271, md: 1 } }}>
                            <GraphicsImage
                              image={image}
                              sx={{
                                height: 1,
                                backgroundPositionX: 'left',
                                backgroundPositionY: 'top',
                                borderTopLeftRadius: { xs: 12 },
                                borderBottomRightRadius: { xs: 20, sm: 32, md: 40 },
                                border: '5px solid',
                                borderColor: 'grey.300',
                                borderBottom: 'none',
                                borderRight: 'none'
                              }}
                            />
                          </Box>
                        </GraphicsCard>
                      </Grid>
                    )}
                  </Grid>
                </GraphicsCard>
              </motion.div>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/faq/Faq7.tsx
```tsx
'use client';

import { SyntheticEvent, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import FaqDetails from '@/components/faq/FaqDetails';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FaqProps, GetInTouchProps } from '@/types/faq';

interface Props extends FaqProps {
  getInTouch: GetInTouchProps;
}

/***************************  FAQ - 7  ***************************/

export default function Faq7({ heading, caption, defaultExpanded, faqList, getInTouch }: Props): JSX.Element {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded || false);

  const cardRadius = { xs: 4, sm: 6 };
  const accordionRadius = { xs: cardRadius.xs * 4, sm: cardRadius.sm * 4 };
  const accordionPX = { xs: 2, md: 3 };
  const iconProps = { color: 'text.primary' };

  // Handles the expansion of accordion panels
  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

  const isFocusWithin = useFocusWithin();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack direction={{ sm: 'row' }} sx={{ gap: 2, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'end' } }}>
          <Typeset {...{ heading, caption }} />
          <Button
            variant="contained"
            size="large"
            {...getInTouch.link}
            {...(getInTouch.link && getInTouch.link.href && { component: NextLink })}
            sx={{ minWidth: 215 }}
          />
        </Stack>

        <Stack
          sx={{
            gap: 1.5,
            '& .MuiAccordion-root:first-of-type': { borderTopLeftRadius: accordionRadius, borderTopRightRadius: accordionRadius },
            '& .MuiAccordion-root:last-of-type': { borderBottomLeftRadius: accordionRadius, borderBottomRightRadius: accordionRadius }
          }}
        >
          {faqList.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                borderRadius: cardRadius,
                border: '1px solid',
                borderColor: 'grey.200',
                ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
              }}
            >
              <AccordionSummary
                expandIcon={<SvgIcon name={expanded === `panel${index}` ? 'tabler-minus' : 'tabler-plus'} {...iconProps} size={20} />}
                sx={{
                  p: accordionPX,
                  '& .MuiAccordionSummary-expandIconWrapper': { color: 'text.primary' },
                  '& .MuiAccordionSummary-content': { my: 0 },
                  '&.Mui-focusVisible': { bgcolor: 'transparent' },
                  '&:hover, &:hover svg': { color: 'primary.dark' }
                }}
              >
                <Typography variant="h4">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: accordionPX, pt: 0, pb: accordionPX }} key={index}>
                <FaqDetails answer={item.answer} />
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/faq/Faq6.tsx
```tsx
'use client';

import { SyntheticEvent, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import FaqDetails from '@/components/faq/FaqDetails';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FaqProps, GetInTouchProps } from '@/types/faq';

interface Props extends FaqProps {
  getInTouch: GetInTouchProps;
  categories: string[];
  activeCategory?: string;
}

/***************************  FAQ - 6  ***************************/

export default function Faq6({ heading, caption, defaultExpanded, faqList, getInTouch, categories, activeCategory }: Props): JSX.Element {
  const theme = useTheme();
  const isFocusWithin = useFocusWithin();
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded || false);
  const [activeTopic, setActiveTopic] = useState(activeCategory || '');
  const [filterFaqList, setFilterFaqList] = useState(activeCategory ? faqList.filter((item) => item.category === activeCategory) : faqList);

  const cardRadius = { xs: 4, sm: 6 };
  const accordionRadius = { xs: cardRadius.xs * 4, sm: cardRadius.sm * 4 };
  const accordionPX = { xs: 2, sm: 3 };
  const iconProps = { color: 'text.primary' };

  // Handles the expansion of accordion panels
  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

  const slickStyle = { '& .slick-slide': { ' > div': { px: { xs: 0.5, md: 0.75 } } } };

  const settings: Settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    initialSlide: 0,
    variableWidth: true
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <Stack direction={{ sm: 'row' }} sx={{ gap: 4, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'end' } }}>
            <Typeset {...{ heading, caption }} />
            <ButtonAnimationWrapper>
              <Button
                variant="contained"
                size="large"
                {...getInTouch.link}
                {...(getInTouch.link && getInTouch.link.href && { component: NextLink })}
                sx={{ minWidth: 215 }}
              />
            </ButtonAnimationWrapper>
          </Stack>
        </motion.div>
        <Stack sx={{ gap: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            <Stack sx={slickStyle}>
              <Slider {...settings}>
                <Button
                  sx={{
                    minHeight: { xs: 40, sm: 48 },
                    color: 'text.primary',
                    borderColor: 'divider',
                    bgcolor: activeTopic === '' ? 'grey.100' : 'inherit',
                    '&.MuiButton-root:hover': { bgcolor: 'grey.100', borderColor: 'divider' }
                  }}
                  variant="outlined"
                  onClick={() => {
                    setActiveTopic('');
                    setFilterFaqList(faqList);
                  }}
                >
                  All
                </Button>
                {categories.map((item, index) => (
                  <Button
                    key={index}
                    sx={{
                      minHeight: { xs: 40, sm: 48 },
                      color: 'text.primary',
                      borderColor: 'divider',
                      bgcolor: activeTopic === item ? 'grey.100' : 'inherit',
                      '&.MuiButton-root:hover': { bgcolor: 'grey.100', borderColor: 'divider' }
                    }}
                    variant="outlined"
                    onClick={() => {
                      setActiveTopic(item);
                      setFilterFaqList(faqList.filter((list) => list.category === item));
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Slider>
            </Stack>
          </motion.div>
          <Stack
            sx={{
              gap: 1.5,
              '& .MuiAccordion-root:first-of-type': { borderTopLeftRadius: accordionRadius, borderTopRightRadius: accordionRadius },
              '& .MuiAccordion-root:last-of-type': { borderBottomLeftRadius: accordionRadius, borderBottomRightRadius: accordionRadius }
            }}
          >
            {filterFaqList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    borderRadius: cardRadius,
                    backgroundColor: 'grey.100',
                    ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
                  }}
                >
                  <AccordionSummary
                    expandIcon={<SvgIcon name={expanded === `panel${index}` ? 'tabler-minus' : 'tabler-plus'} {...iconProps} size={20} />}
                    sx={{
                      p: accordionPX,
                      '& .MuiAccordionSummary-expandIconWrapper': { color: 'text.primary' },
                      '& .MuiAccordionSummary-content': { my: 0 },
                      '&.Mui-focusVisible': { bgcolor: 'transparent' },
                      '&:hover, &:hover svg': { color: 'primary.dark' }
                    }}
                  >
                    <Typography variant="h4">{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: accordionPX, pt: 0, pb: accordionPX }} key={index}>
                    <FaqDetails answer={item.answer} />
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature10.tsx
```tsx
'use client';

import { useEffect, useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Modal from '@mui/material/Modal';
import Stack, { StackProps } from '@mui/material/Stack';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard, IconCard } from '@/components/cards';
import ModalCard from '@/components/cards/ModalCard';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';

interface Props {
  heading: string;
  caption?: string;
  features: IconCardProps[];
  video: { thumbnail: string; src: string; overlay?: boolean };
  typesetPosition?: StackProps['textAlign'];
  primaryBtn?: ButtonProps;
  secondaryBtn?: ButtonProps;
}

/***************************  FEATURE - 10  ***************************/

export default function Feature10({ heading, caption, features, video, typesetPosition, primaryBtn, secondaryBtn }: Props): JSX.Element {
  const theme = useTheme();
  const onlySM = useMediaQuery(theme.breakpoints.only('sm'));

  const [data1, setData1] = useState<IconCardProps[]>([]);
  const [data2, setData2] = useState<IconCardProps[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Effect to handle splitting of features based on screen size
  useEffect(() => {
    if (features.length) {
      const length = features.length;
      const mid = Math.ceil(length / 2);
      const part1 = features.slice(0, mid);
      const part2 = features.slice(mid);

      if (onlySM) {
        if (part1.length > 2 && part1.length % 2 != 0) {
          const lastElement = part1.pop();
          if (lastElement) part2.unshift(lastElement);
        }
      }

      setData1(part1);
      setData2(part2);
    }
  }, [features, onlySM]);

  const blurEffect = { bgcolor: alpha(theme.palette.grey[200], 0.4), backdropFilter: 'blur(5.5px)' };
  const iconProps = { type: IconType.CUSTOM };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
        >
          <Typeset {...{ heading, caption, ...(typesetPosition && { stackProps: { sx: { textAlign: typesetPosition } } }) }} />
        </motion.div>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container spacing={1.5}>
              {data1.map((item, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 12 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: item.animationDelay
                    }}
                  >
                    <IconCard
                      icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                      title={item.title}
                      content={item.content}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard
                bgImage={video.thumbnail}
                sx={{ height: 1, minHeight: { xs: 204, sm: 300 }, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIsOpen(true)}
              >
                <Stack
                  sx={{
                    height: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: video.overlay ? alpha(theme.palette.grey[900], 0.2) : 'transparent'
                  }}
                >
                  <Stack sx={{ alignItems: 'center', justifyContent: 'center', width: 72, height: 72, borderRadius: 67, ...blurEffect }}>
                    <SvgIcon name="tabler-player-play" stroke={1} size={40} color="text.primary" />
                  </Stack>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container spacing={1.5}>
              {data2.map((item, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 12 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: item.animationDelay
                    }}
                  >
                    <IconCard
                      icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                      title={item.title}
                      content={item.content}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {(primaryBtn || secondaryBtn) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
              {secondaryBtn && (
                <ButtonAnimationWrapper>
                  <Button variant="outlined" {...secondaryBtn} />
                </ButtonAnimationWrapper>
              )}
              {primaryBtn && (
                <ButtonAnimationWrapper>
                  <Button variant="contained" {...primaryBtn} />
                </ButtonAnimationWrapper>
              )}
            </Stack>
          </motion.div>
        )}
      </Stack>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="video-modal"
        aria-describedby="modal for video"
        sx={{ '& .MuiModal-backdrop': { zIndex: 1 }, '& .MuiPaper-root': { zIndex: 2 } }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.35
          }}
          style={{ height: '100%' }}
        >
          <ModalCard sx={{ width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' }, height: 'auto', bgcolor: 'transparent', zIndex: 2 }}>
            <video playsInline width="100%" height="100%" style={{ display: 'flex', objectFit: 'cover' }} controls autoPlay>
              <source src={video.src} type="video/mp4" />
              <track src="captions.vtt" kind="captions" srcLang="en" label="English captions" />
            </video>
          </ModalCard>
        </motion.div>
      </Modal>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/feature/Feature1.tsx
```tsx
'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface BlockProps {
  image: ImageCommonProps;
  title?: string;
  description?: string;
}

interface ImageBlockProps {
  direction?: 'left' | 'right';
  image: ImageCommonProps;
  title?: string;
  description?: string;
}

interface Props {
  heading: string;
  caption?: string;
  blockData1: BlockProps;
  blockData2: BlockProps;
  blockData3: BlockProps;
  actionBtn?: ButtonProps;
}

/***************************  FEATURE - BLOCK  ***************************/

function BoxContent({ title, description }: { title?: string; description?: string }) {
  return (
    (title || description) && (
      <Stack sx={{ gap: { xs: 1, md: 1.5 } }}>
        {title && <Typography variant="h3">{title}</Typography>}
        {description && <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>}
      </Stack>
    )
  );
}

/***************************  FEATURE - IMAGE BLOCK  ***************************/

function ImageBlock({ direction = 'left', image, title, description }: ImageBlockProps) {
  const boxPadding = { xs: 3, sm: 4, md: 5 };
  const imgRadius = { xs: 20, md: 24 };
  return (
    <GraphicsCard sx={{ height: 1 }}>
      <GraphicsCard
        sx={{
          bgcolor: 'grey.200',
          py: boxPadding,
          ...(direction === 'left' && { pr: boxPadding }),
          ...(direction === 'right' && { pl: boxPadding }),
          height: { xs: 248, sm: 264, md: 350 }
        }}
      >
        <GraphicsImage
          image={image}
          sx={{
            height: 1,
            ...(direction === 'left' && {
              backgroundPositionX: 'right',
              borderTopRightRadius: imgRadius,
              borderBottomRightRadius: imgRadius
            }),
            ...(direction === 'right' && {
              backgroundPositionX: 'left',
              borderTopLeftRadius: imgRadius,
              borderBottomLeftRadius: imgRadius
            })
          }}
        />
      </GraphicsCard>
      <Box sx={{ p: boxPadding }}>
        <BoxContent {...{ title, description }} />
      </Box>
    </GraphicsCard>
  );
}

/***************************  FEATURE - 1  ***************************/

export default function Feature1({ heading, caption, blockData1, blockData2, blockData3, actionBtn }: Props): JSX.Element {
  const imgBoxPadding = { xs: 2.5, sm: 4 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Typeset {...{ heading, caption, captionProps: { sx: { maxWidth: 750 } } }} />
        </motion.div>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6
              }}
            >
              <ImageBlock
                {...{
                  image: blockData1.image,
                  title: blockData1.title,
                  description: blockData1.description
                }}
              />
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.7
              }}
            >
              <ImageBlock
                {...{
                  direction: 'right',
                  image: blockData2.image,
                  title: blockData2.title,
                  description: blockData2.description
                }}
              />
            </motion.div>
          </Grid>
          <Grid size={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.5
              }}
            >
              <GraphicsCard>
                <Grid container direction={{ xs: 'column-reverse', sm: 'row' }}>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Stack
                      sx={{
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: { xs: 4, sm: 3 },
                        padding: { xs: 3, sm: 4, md: 5 },
                        height: 1
                      }}
                    >
                      <BoxContent {...{ title: blockData3.title, description: blockData3.description }} />
                      {actionBtn && (
                        <ButtonAnimationWrapper>
                          <Button variant="contained" color="primary" size="medium" {...actionBtn} />
                        </ButtonAnimationWrapper>
                      )}
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                    <GraphicsCard sx={{ bgcolor: 'grey.200', pl: imgBoxPadding, pt: imgBoxPadding, height: { xs: 214, sm: 236, md: 285 } }}>
                      <GraphicsImage
                        image={blockData3.image}
                        sx={{
                          height: 1,
                          backgroundPositionX: 'left',
                          backgroundPositionY: 'top',
                          borderTopLeftRadius: { xs: 12 },
                          borderBottomRightRadius: { xs: 24, sm: 32, md: 40 }
                        }}
                      />
                    </GraphicsCard>
                  </Grid>
                </Grid>
              </GraphicsCard>
            </motion.div>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/faq/Faq4.tsx
```tsx
'use client';

import { SyntheticEvent, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import FaqDetails from '@/components/faq/FaqDetails';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FaqProps, GetInTouchProps } from '@/types/faq';

interface Props extends FaqProps {
  getInTouch: GetInTouchProps;
}

/***************************  FAQ - 4  ***************************/

export default function Faq4({ heading, caption, defaultExpanded, faqList, getInTouch }: Props): JSX.Element {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded || false);

  const cardRadius = { xs: 4, md: 6 };
  const accordionRadius = { xs: cardRadius.xs * 4, md: cardRadius.md * 4 };
  const accordionPX = { xs: 1.5, sm: 2, md: 3 };
  const iconProps = { color: 'text.primary' };

  // Handles the expansion of accordion panels
  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

  const isFocusWithin = useFocusWithin();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.4
        }}
      >
        <GraphicsCard>
          <Stack sx={{ py: { xs: 1.5, sm: 4, md: 5 }, px: { xs: 1.5, sm: 4, md: 12 }, gap: { xs: 3, sm: 4 } }}>
            <Typeset
              {...{
                heading,
                caption,
                stackProps: { sx: { alignItems: 'center', textAlign: 'center' } },
                captionProps: { sx: { maxWidth: 650 } }
              }}
            />
            <Stack
              sx={{
                gap: 1.5,
                '& .MuiAccordion-root:first-of-type': { borderTopLeftRadius: accordionRadius, borderTopRightRadius: accordionRadius }
              }}
            >
              {faqList.map((item, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    borderRadius: cardRadius,
                    backgroundColor: 'grey.300',
                    ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
                  }}
                >
                  <AccordionSummary
                    expandIcon={<SvgIcon name={expanded === `panel${index}` ? 'tabler-minus' : 'tabler-plus'} {...iconProps} size={20} />}
                    sx={{
                      p: accordionPX,
                      '& .MuiAccordionSummary-expandIconWrapper': { color: 'text.primary' },
                      '& .MuiAccordionSummary-content': { my: 0 },
                      '&.Mui-focusVisible': { bgcolor: 'transparent' },
                      '&:hover, &:hover svg': { color: 'primary.dark' }
                    }}
                  >
                    <Typography variant="h4">{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: accordionPX, pb: accordionPX, pt: 0 }}>
                    <FaqDetails answer={item.answer} />
                  </AccordionDetails>
                </Accordion>
              ))}
              <Stack
                direction={{ sm: 'row' }}
                sx={{
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  p: accordionPX,
                  gap: 1.5,
                  borderRadius: { xs: 4, md: 6 },
                  backgroundColor: 'grey.300'
                }}
              >
                <Typeset
                  {...{
                    heading: getInTouch.title!,
                    caption: getInTouch.description,
                    headingProps: { variant: 'h4' },
                    captionProps: { variant: 'body1' }
                  }}
                />
                <ButtonAnimationWrapper>
                  <Button
                    variant="contained"
                    size="large"
                    {...getInTouch.link}
                    {...(getInTouch.link && getInTouch.link.href && { component: NextLink })}
                    sx={{ minWidth: 215 }}
                  />
                </ButtonAnimationWrapper>
              </Stack>
            </Stack>
          </Stack>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/faq/Faq5.tsx
```tsx
'use client';

import { SyntheticEvent, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import FaqDetails from '@/components/faq/FaqDetails';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FaqProps, GetInTouchProps } from '@/types/faq';

interface Props extends FaqProps {
  getInTouch: GetInTouchProps;
}

/***************************  FAQ - 5  ***************************/

export default function Faq5({ heading, caption, defaultExpanded, faqList, image, getInTouch }: Props): JSX.Element {
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded || false);

  const cardRadius = { xs: 6, sm: 8, md: 10 };
  const accordionRadius = { xs: cardRadius.xs * 4, md: cardRadius.md * 4 };
  const accordionPX = { xs: 2, sm: 2, md: 3 };
  const iconProps = { color: 'text.primary' };

  // Handles the expansion of accordion panels
  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

  const isFocusWithin = useFocusWithin();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={1.5}>
          {image && (
            <Grid size={{ xs: 12, sm: 5, md: 6 }}>
              <GraphicsCard sx={{ height: { xs: 320, sm: 1 }, p: { xs: 3, sm: 4, md: 5 } }}>
                <GraphicsImage {...{ image }} sx={{ height: 1, backgroundSize: 'contain' }} />
              </GraphicsCard>
            </Grid>
          )}
          <Grid size={{ xs: 12, sm: 7, md: 6 }}>
            <GraphicsCard sx={{ borderRadius: cardRadius }}>
              <Stack
                sx={{
                  '& .MuiAccordion-root:first-of-type': { borderTopLeftRadius: accordionRadius, borderTopRightRadius: accordionRadius }
                }}
              >
                {faqList.map((item, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                      backgroundColor: 'grey.100',
                      px: accordionPX,
                      '&:before': { mx: accordionPX, display: 'block', backgroundColor: 'grey.300' },
                      '&.Mui-expanded::before': { opacity: 1 },
                      ...(isFocusWithin && {
                        '&:focus-within': { bgcolor: 'grey.200' }
                      })
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<SvgIcon name={expanded === `panel${index}` ? 'tabler-minus' : 'tabler-plus'} {...iconProps} size={20} />}
                      sx={{
                        px: 0,
                        py: accordionPX,
                        '.MuiDivider-root:last-of-type': { display: 'none' },
                        '& .MuiAccordionSummary-expandIconWrapper': { color: 'text.primary' },
                        '& .MuiAccordionSummary-content': { my: 0 },
                        '&.Mui-focusVisible': { bgcolor: 'transparent' },
                        '&:hover, &:hover svg': { color: 'primary.dark' }
                      }}
                    >
                      <Typography variant="subtitle1">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ '& .MuiTypography-root': { fontSize: { xs: 12, md: 14 } }, px: 0, pb: accordionPX, pt: 0 }}>
                      <FaqDetails answer={item.answer} />
                    </AccordionDetails>
                    {index < faqList.length - 1 && <Divider />}
                  </Accordion>
                ))}
              </Stack>
            </GraphicsCard>
          </Grid>
          <Grid size={12}>
            <GraphicsCard>
              <Stack
                direction={{ sm: 'row' }}
                sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, p: accordionPX, gap: 1.5 }}
              >
                <Typeset
                  {...{
                    heading: getInTouch.title!,
                    caption: getInTouch.description,
                    headingProps: { variant: 'h4' },
                    captionProps: { variant: 'body1' }
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  {...getInTouch.link}
                  {...(getInTouch.link && getInTouch.link.href && { component: NextLink })}
                  sx={{ minWidth: 215 }}
                />
              </Stack>
            </GraphicsCard>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/faq/Faq2.tsx
```tsx
'use client';

import { SyntheticEvent, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import FaqDetails from '@/components/faq/FaqDetails';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FaqProps, GetInTouchProps } from '@/types/faq';

interface Props extends FaqProps {
  getInTouch: GetInTouchProps;
}

/***************************  FAQ - 2  ***************************/

export default function Faq2({ heading, caption, defaultExpanded, faqList, getInTouch }: Props): JSX.Element {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded || false);

  const cardRadius = 6;
  const accordionPX = { xs: 2, md: 3 };
  const getInTouchSpaccing = { xs: 3, sm: 4, md: 5 };

  // Handles the expansion of accordion panels
  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

  const isFocusWithin = useFocusWithin();

  const GetInTouchCard = () => (
    <GraphicsCard>
      <Stack sx={{ alignItems: 'flex-start', p: getInTouchSpaccing, gap: getInTouchSpaccing }}>
        <Typeset
          {...{
            heading: getInTouch.title!,
            caption: getInTouch.description,
            headingProps: { variant: 'h4' },
            captionProps: { variant: 'body1' }
          }}
        />
        <Button
          variant="contained"
          size="large"
          {...getInTouch.link}
          {...(getInTouch.link && getInTouch.link.href && { component: NextLink })}
        />
      </Stack>
    </GraphicsCard>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 3, sm: 1.5 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ justifyContent: 'space-between', height: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.4
              }}
            >
              <Typeset {...{ heading, caption }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.4
              }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <GetInTouchCard />
              </Box>
            </motion.div>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack
            sx={{
              gap: 1.5,
              '& .MuiAccordion-root:first-of-type': { borderTopLeftRadius: 4 * cardRadius, borderTopRightRadius: 4 * cardRadius },
              '& .MuiAccordion-root:last-of-type': { borderBottomLeftRadius: 4 * cardRadius, borderBottomRightRadius: 4 * cardRadius }
            }}
          >
            {faqList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.3
                }}
              >
                <Accordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    borderRadius: cardRadius,
                    bgcolor: 'grey.100',
                    ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
                  }}
                >
                  <AccordionSummary
                    expandIcon={<SvgIcon name="tabler-chevron-down" size={20} color="text.primary" />}
                    sx={{
                      px: accordionPX,
                      py: { xs: 1, sm: 1.5 },
                      '& .MuiAccordionSummary-expandIconWrapper': { color: 'text.primary' },
                      '& .MuiAccordionSummary-content': { my: 1 },
                      '&.Mui-focusVisible': { bgcolor: 'transparent' },
                      '&:hover, &:hover svg': { color: 'primary.dark' }
                    }}
                  >
                    <Typography variant="h4">{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: accordionPX, pt: 0, pb: { xs: 1.5, sm: 2 } }}>
                    <FaqDetails answer={item.answer} />
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Stack>
          <Box sx={{ mt: 3, display: { xs: 'block', sm: 'none' } }}>
            <GetInTouchCard />
          </Box>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/faq/Faq3.tsx
```tsx
'use client';

import { SyntheticEvent, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import FaqDetails from '@/components/faq/FaqDetails';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FaqProps, GetInTouchProps } from '@/types/faq';

interface Props extends FaqProps {
  getInTouch: GetInTouchProps;
}

/***************************  FAQ - 3  ***************************/

export default function Faq3({ heading, caption, defaultExpanded, faqList, getInTouch, bgImage }: Props): JSX.Element {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded || false);

  const cardRadius = 6;
  const accordionPX = { xs: 2, md: 3 };
  const getInTouchSpaccing = { xs: 3, sm: 4, md: 5 };

  // Handles the expansion of accordion panels
  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

  const isFocusWithin = useFocusWithin();

  const GetInTouchCard = () => (
    <>
      <Stack sx={{ alignItems: 'flex-start', p: getInTouchSpaccing, gap: getInTouchSpaccing }}>
        <Typeset
          {...{
            heading: getInTouch.title!,
            caption: getInTouch.description,
            headingProps: { variant: 'h4' },
            captionProps: { variant: 'body1' }
          }}
        />
        <Button
          variant="contained"
          size="large"
          {...getInTouch.link}
          {...(getInTouch.link && getInTouch.link.href && { component: NextLink })}
        />
      </Stack>
    </>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Grid container spacing={{ xs: 3, sm: 1.5 }} direction={{ xs: 'column-reverse', sm: 'row' }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.4
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard overLay bgImage={bgImage} sx={{ height: 1 }}>
                <Stack sx={{ justifyContent: 'flex-end', height: 1 }}>
                  <GetInTouchCard />
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack
              sx={{
                gap: 1.5,
                '& .MuiAccordion-root:first-of-type': { borderTopLeftRadius: 4 * cardRadius, borderTopRightRadius: 4 * cardRadius },
                '& .MuiAccordion-root:last-of-type': { borderBottomLeftRadius: 4 * cardRadius, borderBottomRightRadius: 4 * cardRadius }
              }}
            >
              {faqList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3
                  }}
                >
                  <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                      borderRadius: cardRadius,
                      bgcolor: 'grey.100',
                      ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<SvgIcon name="tabler-chevron-down" size={20} color="text.primary" />}
                      sx={{
                        px: accordionPX,
                        py: { xs: 1, sm: 1.5 },
                        '& .MuiAccordionSummary-expandIconWrapper': { color: 'text.primary' },
                        '& .MuiAccordionSummary-content': { my: 1 },
                        '&.Mui-focusVisible': { bgcolor: 'transparent' },
                        '&:hover, &:hover svg': { color: 'primary.dark' }
                      }}
                    >
                      <Typography variant="h4">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: accordionPX, pt: 0, pb: { xs: 1.5, sm: 2 } }}>
                      <FaqDetails answer={item.answer} />
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/faq/Faq1.tsx
```tsx
'use client';

import { SyntheticEvent, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import FaqDetails from '@/components/faq/FaqDetails';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';

// @types
import { FaqProps } from '@/types/faq';

/***************************  FAQ - 1  ***************************/

export default function Faq1({ heading, caption, defaultExpanded, faqList }: FaqProps): JSX.Element {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded || false);

  const cardRadius = { xs: 6, sm: 8, md: 10 };
  const accordionRadius = { xs: cardRadius.xs * 4, sm: cardRadius.sm * 4, md: cardRadius.md * 4 };
  const accordionPX = { xs: 2, sm: 3, md: 4 };

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

  const isFocusWithin = useFocusWithin();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Stack
          sx={{
            gap: 1.5,
            '& .MuiAccordion-root:first-of-type': { borderTopLeftRadius: accordionRadius, borderTopRightRadius: accordionRadius },
            '& .MuiAccordion-root:last-of-type': { borderBottomLeftRadius: accordionRadius, borderBottomRightRadius: accordionRadius }
          }}
        >
          {faqList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  borderRadius: cardRadius,
                  bgcolor: 'grey.100',
                  ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
                }}
              >
                <AccordionSummary
                  expandIcon={<SvgIcon name="tabler-chevron-down" size={20} color="text.primary" />}
                  sx={{
                    px: accordionPX,
                    py: { xs: 1, sm: 1.5, md: 2 },
                    '& .MuiAccordionSummary-expandIconWrapper': { color: 'text.primary' },
                    '& .MuiAccordionSummary-content': { my: 1 },
                    '&.Mui-focusVisible': { bgcolor: 'transparent' },
                    '&:hover, &:hover svg': { color: 'primary.dark' }
                  }}
                >
                  <Typography variant="h4">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: accordionPX, pt: { xs: 0.5, sm: 1.5 }, pb: { xs: 1.5, sm: 2 } }} key={index}>
                  <FaqDetails answer={item.answer} />
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/footer/Footer4.tsx
```tsx
// @mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';

import { CopyrightType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FooterMenuProps } from '@/types/footer';

/***************************  FOOTER - 4 DATA  ***************************/

const data: FooterMenuProps[] = [
  {
    id: 'product',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Product',
    menu: [
      {
        label: 'What’s New',
        link: { href: '#' }
      },
      {
        label: 'Integration',
        link: { href: '#' }
      },
      {
        label: 'Features',
        link: { href: '#' }
      },
      {
        label: 'Workflow',
        link: { href: '#' }
      },
      {
        label: 'Pricing',
        link: { href: '#' }
      },
      {
        label: 'API Docs',
        link: { href: '#' }
      }
    ]
  },
  {
    id: 'download',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Download',
    menu: [
      {
        label: 'iOS & Android',
        link: { href: '#' }
      },
      {
        label: 'Mac & Windows',
        link: { href: '#' }
      },
      {
        label: 'Calendar',
        link: { href: '#' }
      },
      {
        label: 'Web Clipper',
        link: { href: '#' }
      }
    ]
  },
  {
    id: 'resource',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Resource',
    menu: [
      {
        label: 'Pricing',
        link: { href: '#' }
      },
      {
        label: 'Blog',
        link: { href: '#' }
      },
      {
        label: 'White paper',
        link: { href: '#' }
      },
      {
        label: 'Help Center',
        link: { href: '#' }
      },
      {
        label: 'Webinars',
        link: { href: '#' }
      },
      {
        label: 'Community',
        link: { href: '#' }
      }
    ]
  },
  {
    id: 'company',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Company',
    menu: [
      {
        label: 'About',
        link: { href: '#' }
      },
      {
        label: 'Career',
        link: { href: '#' }
      },
      {
        label: 'Contact us',
        link: { href: '#' }
      },
      {
        label: 'Privacy Policy',
        link: { href: '#' }
      },
      {
        label: 'Terms & Conditions',
        link: { href: '#' }
      }
    ]
  },
  {
    id: 'get-started',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Get started',
    menu: [
      {
        label: 'Switch from Confluence',
        link: { href: '#' }
      },
      {
        label: 'Switch from Asana',
        link: { href: '#' }
      },
      {
        label: 'Compare vs Jira',
        link: { href: '#' }
      },
      {
        label: 'Compare vs Clickup',
        link: { href: '#' }
      }
    ]
  }
];

/***************************  FOOTER - 4  ***************************/

export default function Footer4() {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="footer-4" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 4" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <Box sx={{ px: { xs: 2, sm: 3, md: 8 } }}>
          <Sitemap list={data} isMenuDesign />
        </Box>
        <GraphicsCard sx={{ borderRadius: { xs: 6, sm: 8 } }}>
          <Stack
            direction={{ sm: 'row' }}
            sx={{ alignItems: 'center', justifyContent: { xs: 'center', sm: 'space-between' }, gap: { xs: 3, sm: 4 }, p: 3 }}
          >
            <LogoSection />
            <Box sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>
              <Copyright type={CopyrightType.TYPE3} />
            </Box>
            <FollowUS heading={false} />
          </Stack>
          <Box sx={{ pb: 3, display: { xs: 'none', sm: 'block', md: 'none' } }}>
            <Copyright type={CopyrightType.TYPE3} />
          </Box>
        </GraphicsCard>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/footer/Footer6.tsx
```tsx
// @mui
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS } from '@/components/footer';
import LogoSection from '@/components/logo';
import { NavMenu } from '@/components/navbar';

import { CopyrightType, MegaMenuType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { NavItemProps } from '@/types/navbar';

/***************************  FOOTER - 6 DATA  ***************************/

const navItems: NavItemProps[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'products', title: 'Products' },
  { id: 'pricing', title: 'Pricing' },
  {
    id: 'resource',
    title: 'Resource',
    expanded: true,
    megaMenu: {
      type: MegaMenuType.MEGAMENU2,
      toggleBtn: { children: 'Resource', size: 'small', sx: { color: 'text.primary', py: 1.5 } },
      menuItems: [
        {
          title: 'Blog',
          content: 'Ducimus dignissimos blanditiis.'
        },
        {
          title: 'Help Center',
          content: 'Occaecati ut suscipit veritatis enim necessitatibus commodi.',
          selected: true
        },
        {
          title: 'Guides',
          content: 'Sint sit et consequatur consequatur assumenda ipsam dolores autem sint.'
        },
        {
          title: 'Events',
          content: 'Dolorem dolores dolores aut odio.'
        },
        {
          title: 'Security',
          content: 'Ut eos nam laudantium ut.'
        },
        {
          title: 'Payments',
          content: 'Get of your question answered'
        }
      ]
    }
  },
  { id: 'help', title: 'Help' }
];

/***************************  FOOTER - 6  ***************************/

export default function Footer6() {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="footer-6" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 6" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: { xs: 3, sm: 4 } }}>
          <LogoSection />
          <Stack direction="row" sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <NavMenu {...{ navItems }} />
          </Stack>
        </Stack>
        <Divider />
        <Stack direction={{ md: 'row' }} sx={{ alignItems: 'center', justifyContent: { xs: 'center', md: 'space-between' }, gap: 4 }}>
          <FollowUS heading={false} color="background.default" />
          <Copyright type={CopyrightType.TYPE2} isDivider={false} />
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/footer/Footer7.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import branding from '@/branding.json';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import SvgIcon from '@/components/SvgIcon';

import { CopyrightType } from '@/enum';
import { DOCS_URL, FREEBIES_URL } from '@/path';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { FooterMenuProps } from '@/types/footer';

/***************************  FOOTER - 7 DATA  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
const data: FooterMenuProps[] = [
  {
    id: 'company',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Company',
    menu: [
      {
        label: 'Why Phoenixcoded?',
        link: {
          href: 'https://blog.saasable.io/a-decade-of-expertise-the-phoenixcoded-story-and-why-you-should-trust-us',
          ...linkProps
        }
      },
      {
        label: 'About',
        link: { href: '/about', ...linkProps }
      },
      {
        label: 'Contact Us',
        link: { href: '/contact', ...linkProps }
      }
    ]
  },
  {
    id: 'support',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Support',
    menu: [
      {
        label: 'Pricing',
        link: { href: '/pricing', ...linkProps }
      },
      {
        label: 'FAQ',
        link: { href: '/faq', ...linkProps }
      },
      {
        label: 'Support',
        link: { href: branding.company.socialLink.support, ...linkProps }
      },
      {
        label: 'License Terms',
        link: { href: 'https://mui.com/store/license/', ...linkProps }
      }
    ]
  },
  {
    id: 'resources',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Resources',
    menu: [
      {
        label: 'Freebies',
        link: { href: FREEBIES_URL, ...linkProps }
      },
      {
        label: 'Documentation',
        link: { href: DOCS_URL, ...linkProps }
      },
      {
        label: 'Blog',
        link: { href: 'https://blog.saasable.io/', ...linkProps }
      },
      {
        label: 'Privacy Policy',
        link: { href: '/privacy-policy', ...linkProps }
      },
      {
        label: 'Refund Policy',
        link: { href: 'https://mui.com/store/customer-refund-policy/', ...linkProps }
      }
    ]
  }
];

const iconProps = { color: 'text.secondary' };

const usefullLinks = [
  {
    icon: <SvgIcon name="tabler-brand-figma" {...iconProps} />,
    title: 'Figma Version 1.0.0',
    href: 'https://www.figma.com/community/file/1425095061180549847'
  },
  {
    icon: <SvgIcon name="tabler-route" {...iconProps} />,
    title: 'React Material UI v6.1.4',
    href: 'https://mui.com/material-ui/getting-started'
  },
  {
    icon: <SvgIcon name="tabler-sparkles" {...iconProps} />,
    title: 'Documentation',
    href: DOCS_URL
  }
];

/***************************  FOOTER - 7  ***************************/

export default function Footer7() {
  const logoFollowContent = (
    <Stack sx={{ alignItems: 'flex-start', gap: { xs: 1.5, sm: 3 } }}>
      <LogoSection />
      <Typography variant="h6" sx={{ maxWidth: { sm: 280 }, mb: { xs: -1, sm: -2.5 } }}>
        {process.env.NEXT_PUBLIC_VERSION}
      </Typography>
      <Typography variant="body2" sx={{ maxWidth: { sm: 280 } }}>
        Explore the different versions of our SaasAble template.
      </Typography>
    </Stack>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="footer-7" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 7" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <Grid container spacing={{ xs: 4, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction={{ sm: 'row', md: 'column' }} sx={{ gap: 3, justifyContent: 'space-between', height: 1 }}>
                {logoFollowContent}
                <Stack sx={{ gap: { xs: 2, sm: 2.5, md: 3 } }}>
                  {usefullLinks.map((item, index) => (
                    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }} key={index}>
                      {item.icon}
                      <Link
                        component={NextLink}
                        variant="body2"
                        color="text.secondary"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Usefull Links"
                      >
                        {item.title}
                      </Link>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Sitemap list={data} isMenuDesign />
            </Grid>
          </Grid>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <GraphicsCard sx={{ borderRadius: { xs: 6, sm: 8 } }}>
            <Stack
              direction={{ sm: 'row' }}
              sx={{
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'space-between' },
                gap: 1.5,
                py: { xs: 2, sm: 1.5 },
                px: { xs: 2, sm: 3 }
              }}
            >
              <Copyright type={CopyrightType.TYPE3} />
              <FollowUS heading={false} color="grey.100" />
            </Stack>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/footer/Footer5.tsx
```tsx
'use client';

// @next
import Link from 'next/link';

// @mui
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS } from '@/components/footer';
import LogoSection from '@/components/logo';
import { Localization } from '@/components/navbar';
import Typeset from '@/components/Typeset';

import { CopyrightType } from '@/enum';
import { FREEBIES_URL } from '@/path';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FOOTER - 5  ***************************/

export default function Footer5() {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
      >
        <GraphicsCard id="footer-5" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 5">
          <Stack sx={{ gap: { xs: 4, sm: 5 }, padding: { xs: 3, sm: 5, md: 8 } }}>
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <LogoSection isIcon={true} />
              <Localization />
            </Stack>
            <Stack sx={{ gap: { xs: 5, sm: 6, md: 7 }, alignItems: 'flex-start' }}>
              <Typeset
                {...{
                  heading: 'Upgrade to premium hosting today. Sign up now and enjoy faster speeds, better support, and more',
                  caption: "Let's bring this into the Real-World ✦",
                  stackProps: { sx: { gap: { xs: 2, sm: 3, md: 4 } } },
                  headingProps: { variant: 'body1', typography: 'h1', role: 'heading' },
                  captionProps: { variant: 'body2', typography: 'h2', role: 'heading' }
                }}
              />
              <ButtonAnimationWrapper>
                <Button
                  color="primary"
                  sx={{ minWidth: 215, width: { xs: 1, sm: 'auto' } }}
                  size="large"
                  variant="outlined"
                  component={Link}
                  href={FREEBIES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started - It’s Free Now
                </Button>
              </ButtonAnimationWrapper>
            </Stack>
            <Divider />
            <Stack direction={{ md: 'row' }} sx={{ gap: { xs: 3, sm: 4 }, justifyContent: 'space-between', alignItems: 'center' }}>
              <FollowUS heading={false} />
              <Copyright type={CopyrightType.TYPE2} />
            </Stack>
          </Stack>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/footer/Footer3.tsx
```tsx
'use client';

// @mui
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, JoinUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import { Localization } from '@/components/navbar';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FOOTER - 3  ***************************/

export default function Footer3() {
  const logoFollowContent = (
    <Stack
      sx={{ alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'space-between', gap: 4, height: 1, pb: { xs: 2.5, md: 0 } }}
    >
      <Stack spacing={1.75} sx={{ alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
        <LogoSection />
        <Typography variant="body2" sx={{ maxWidth: 280 }}>
          Empower your HR team with our comprehensive platform for seamless HR management
        </Typography>
      </Stack>
      <Localization />
      <FollowUS />
    </Stack>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.4
        }}
      >
        <GraphicsCard id="footer-7" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 7">
          <GraphicsCard sx={{ bgcolor: 'grey.200' }}>
            <Box sx={{ p: { xs: 2.5, sm: 3, md: 4 } }}>
              <JoinUS
                stackProps={{ direction: { md: 'row' }, sx: { alignItems: { md: 'center' }, justifyContent: 'space-between' } }}
                headingProps={{ variant: 'h3' }}
              />
            </Box>
          </GraphicsCard>
          <Box sx={{ padding: { xs: 2.5, sm: 3, md: 4 } }}>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              <Grid size={{ xs: 12, md: 6 }}>{logoFollowContent}</Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Sitemap />
              </Grid>
              <Grid size={12}>
                <Divider />
              </Grid>
              <Grid size={12}>
                <Stack sx={{ alignItems: 'center' }}>
                  <Copyright />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/footer/Footer2.tsx
```tsx
'use client';

// @mui
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, JoinUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FOOTER - 2  ***************************/

export default function Footer2() {
  const logoJoinContent = (
    <Stack
      sx={{ alignItems: { xs: 'center', sm: 'flex-start' }, justifyContent: 'space-between', gap: 3, height: 1, pb: { xs: 2.5, md: 0 } }}
    >
      <LogoSection />
      <JoinUS stackProps={{ sx: { alignItems: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } } }} />
    </Stack>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.4
        }}
      >
        <GraphicsCard id="footer-2" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 2">
          <Box sx={{ padding: { xs: 2.5, sm: 3, md: 4 } }}>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              <Grid size={{ xs: 12, md: 6 }}>{logoJoinContent}</Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Sitemap />
              </Grid>
              <Grid size={12}>
                <Divider />
              </Grid>
              <Grid size={12}>
                <Stack
                  direction={{ md: 'row' }}
                  sx={{
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'space-between' },
                    gap: { xs: 3.5, sm: 3 },
                    mt: { xs: 1.5, sm: 0 }
                  }}
                >
                  <FollowUS heading={false} />
                  <Copyright />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/footer/Footer1.tsx
```tsx
'use client';

// @mui
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, JoinUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FOOTER - 1  ***************************/

export default function Footer1() {
  const joinFollowContent = (
    <Stack sx={{ alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'space-between', gap: 4, height: 1 }}>
      <JoinUS stackProps={{ sx: { alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } } }} />
      <FollowUS />
    </Stack>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.4
        }}
      >
        <GraphicsCard id="footer-1" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 1">
          <Box sx={{ padding: { xs: 2.5, sm: 3, md: 4 } }}>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {/* visible on desktop media */}
              <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ xs: 12, md: 6 }}>
                {joinFollowContent}
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Sitemap />
              </Grid>
              {/* visible on mobile and tablet media */}
              <Grid sx={{ display: { xs: 'block', md: 'none' } }} size={{ xs: 12, md: 6 }}>
                {joinFollowContent}
              </Grid>
              <Grid size={12}>
                <Divider />
              </Grid>
              <Grid size={12}>
                <Stack
                  direction={{ md: 'row' }}
                  sx={{
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'space-between' },
                    gap: { xs: 3.5, sm: 3 },
                    mt: { xs: 1.5, sm: 0 }
                  }}
                >
                  <LogoSection />
                  <Copyright />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cookie/Cookie2.tsx
```tsx
// @next
import NextLink from 'next/link';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

interface Props {
  heading: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
  cookie: {
    caption: string;
    link?: LinkProps;
  };
}

/***************************  COOKIE - 2  ***************************/

export default function Cookie2({ heading, primaryBtn, secondaryBtn, cookie }: Props) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ width: { xs: 1, sm: 345, md: 600 } }}>
        <Box sx={{ padding: { xs: 2, sm: 3, md: 5 } }}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <SvgIcon name="tabler-cookie" size={40} stroke={1} />
            <IconButton rel="noopener noreferrer" aria-label="cookie2-close">
              <SvgIcon name="tabler-x" />
            </IconButton>
          </Stack>
        </Box>
        <GraphicsCard sx={{ width: { xs: 1, sm: 345, md: 600 }, bgcolor: 'grey.200' }}>
          <Box sx={{ padding: { xs: 2, sm: 3, md: 5 } }}>
            <Stack sx={{ gap: { xs: 3, md: 4 } }}>
              <Stack sx={{ gap: 1 }}>
                <Typography variant="h4">{heading}</Typography>
                <Typography>
                  {cookie.caption}
                  {cookie.link && (
                    <>
                      &nbsp;
                      <Link component={NextLink} {...cookie.link} underline="always" />
                    </>
                  )}
                </Typography>
              </Stack>
              {(primaryBtn || secondaryBtn) && (
                <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1.5 }}>
                  {primaryBtn && <Button fullWidth variant="outlined" {...primaryBtn} />}
                  {secondaryBtn && <Button fullWidth variant="contained" {...secondaryBtn} />}
                </Stack>
              )}
            </Stack>
          </Box>
        </GraphicsCard>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cookie/Cookie1.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';

import { SECTION_COMMON_PY } from '@/utils/constant';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';

interface Props {
  heading: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
  cookie: {
    caption: string;
    link?: LinkProps;
  };
}

/***************************  COOKIE - 1  ***************************/

export default function Cookie1({ heading, primaryBtn, secondaryBtn, cookie }: Props) {
  const theme = useTheme();
  const size = { xs: 48, md: 60 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ width: { xs: 1, sm: 326, md: 460 }, bgcolor: 'primary.main' }}>
        <Box sx={{ padding: { xs: 1.5, sm: 2, md: 4 } }}>
          <Stack sx={{ gap: { xs: 2, sm: 3, md: 4 } }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Avatar sx={{ width: size, height: size, bgcolor: 'primary.lighter' }}>
                <SvgIcon name="tabler-cookie" color="primary.darker" />
              </Avatar>
              <IconButton
                size="small"
                rel="noopener noreferrer"
                aria-label="cookie-close"
                sx={{
                  width: 32,
                  height: 32,
                  '&:hover': { bgcolor: 'primary.dark' },
                  ':focus-visible': generateFocusVisibleStyles(theme.palette.background.default)
                }}
              >
                <SvgIcon name="tabler-x" color="primary.lighter" />
              </IconButton>
            </Stack>
            <Stack sx={{ gap: { xs: 1.5, sm: 2, md: 3 } }}>
              <Stack sx={{ gap: { xs: 0.5, md: 1 } }}>
                <Typography variant="h4" sx={{ color: 'background.default' }}>
                  {heading}
                </Typography>
                <Typography sx={{ color: 'primary.lighter' }}>
                  {cookie.caption}
                  {cookie.link && (
                    <>
                      &nbsp;
                      <Link
                        component={NextLink}
                        color="background.default"
                        {...cookie.link}
                        underline="always"
                        sx={{ ':focus-visible': generateFocusVisibleStyles(theme.palette.background.default) }}
                      />
                    </>
                  )}
                </Typography>
              </Stack>

              {(primaryBtn || secondaryBtn) && (
                <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1.5 }}>
                  {primaryBtn && (
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ border: 0.25, ':focus-visible': generateFocusVisibleStyles(theme.palette.background.default) }}
                      {...primaryBtn}
                    />
                  )}
                  {secondaryBtn && (
                    <Button
                      fullWidth
                      sx={{
                        bgcolor: 'background.default',
                        color: 'primary.main',
                        '&:hover': { bgcolor: 'primary.lighter' },
                        ':focus-visible': generateFocusVisibleStyles(theme.palette.background.default)
                      }}
                      {...secondaryBtn}
                    />
                  )}
                </Stack>
              )}
            </Stack>
          </Stack>
        </Box>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cookie/Cookie3.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

interface Props {
  heading: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
  cookie: {
    caption: string;
    link?: LinkProps;
  };
}
/***************************  COOKIE - 3  ***************************/

export default function TopOffer3({ heading, cookie, primaryBtn, secondaryBtn }: Props) {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ boxShadow: `2px 2px 10px 0px ${alpha(theme.palette.grey[600], 0.09)}`, mx: 2, bgcolor: 'primary.lighter' }}>
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Stack
            direction={{ sm: 'row' }}
            sx={{ alignItems: { md: 'center' }, justifyContent: 'space-between', gap: { xs: 2.5, md: 7 }, width: 1 }}
          >
            <Stack direction="row" sx={{ gap: { xs: 1, md: 2 } }}>
              <Stack sx={{ justifyContent: { sm: 'center' } }}>
                <Avatar
                  sx={{
                    width: { xs: 48, sm: 60, md: 72 },
                    height: { xs: 48, sm: 60, md: 72 },
                    bgcolor: 'primary.main',
                    '& svg.tabler-cookie': {
                      width: { xs: 24, sm: 32, md: 40 },
                      height: { xs: 24, sm: 32, md: 40 },
                      strokeWidth: { xs: 1.5, sm: 1 }
                    }
                  }}
                >
                  <SvgIcon name="tabler-cookie" color="background.default" />
                </Avatar>
              </Stack>
              <Stack sx={{ gap: { xs: 0.75, md: 1 }, maxWidth: { xs: 1, sm: 480, md: 760 } }}>
                <Typography variant="h4" sx={{ color: 'primary.darker' }}>
                  {heading}
                </Typography>
                <Typography sx={{ color: 'secondary.dark' }}>
                  {cookie.caption}
                  {cookie.link && (
                    <>
                      &nbsp;
                      <Link component={NextLink} {...cookie.link} underline="always" />
                    </>
                  )}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" sx={{ alignItems: 'center', gap: { xs: 1, md: 1.5 }, width: { xs: 1, sm: 182, md: 298 } }}>
              {primaryBtn && <Button fullWidth variant="outlined" size="small" {...primaryBtn} />}
              {secondaryBtn && <Button fullWidth variant="contained" size="small" sx={{ whiteSpace: 'nowrap' }} {...secondaryBtn} />}
            </Stack>
          </Stack>
        </Box>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/contact-us/ContactUs5.tsx
```tsx
'use client';

import { useMemo } from 'react';

// @next
import dynamic from 'next/dynamic';

// @mui
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { MapContainerProps, TileLayerProps } from 'react-leaflet';

// @project
import { GraphicsCard, IconCard } from '@/components/cards';
import { ContactUsForm1 } from '@/components/contact-us';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ContactCard2Props, ContactUsProps } from '@/types/contact-us';

const MapContainer = dynamic<MapContainerProps>(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic<TileLayerProps>(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });

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
      cardPadding={{ xs: 2, md: 5 }}
      titleProps={{ variant: 'body1', color: 'text.secondary', order: 2 }}
      contentProps={{
        variant: 'h4',
        color: 'text.primary',
        component: link ? Link : Typography,
        ...(link && { href: link, sx: { '&:hover': { color: 'primary.dark' } } })
      }}
    />
  );
}

/***************************  CONTACT US - 5  ***************************/

export default function ContactUs5({ heading, caption, contactDetails }: ContactUsProps): JSX.Element {
  const time = useMemo(() => new Date().getTime(), []);

  const mapContainer = useMemo(() => {
    return (
      <MapContainer key={time} center={[21.233867, 72.862775]} zoom={15} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <Grid container spacing={{ xs: 3, sm: 4, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typeset {...{ heading, caption }} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <GraphicsCard sx={{ height: 1 }}>
                <Box sx={{ p: { xs: 2, sm: 4, md: 5 } }}>
                  <ContactUsForm1 />
                </Box>
              </GraphicsCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Box
            sx={{
              borderRadius: { xs: 6, sm: 8, md: 10 },
              overflow: 'hidden',
              height: { xs: 255, sm: 267, md: 308 },
              '.leaflet-top .leaflet-control': { mt: 2.5, ml: 2.5 }
            }}
          >
            {mapContainer}
          </Box>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={1.5}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <ContactCard icon="tabler-map-pin" title="Visit us" content={contactDetails.address} />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <ContactCard icon="tabler-phone" title="Call us" content={contactDetails.phone} link={`tel:${contactDetails.phone}`} />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <ContactCard
                icon="tabler-mail"
                title="Chat to sales"
                content={contactDetails.email}
                link={`mailto:${contactDetails.email}`}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/contact-us/ContactUs4.tsx
```tsx
'use client';

// @mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import { ContactUsForm2 } from '@/components/contact-us';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ContactCardProps, ContactUsProps2 } from '@/types/contact-us';

/***************************  CONTACT US - CARD  ***************************/

function ContactCard({ icon, title, content, link }: ContactCardProps) {
  return (
    <GraphicsCard sx={{ height: 1 }}>
      <Stack direction={{ xs: 'row', sm: 'column' }} sx={{ gap: { xs: 2, sm: 4, md: 5 }, height: 1, p: { xs: 2, sm: 3, md: 4 } }}>
        <Avatar sx={{ width: 60, height: 60, bgcolor: 'grey.300' }}>
          <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
        </Avatar>
        <Stack sx={{ gap: { xs: 2, md: 3 }, height: 1, alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Typeset
            {...{
              heading: title,
              caption: content,
              stackProps: { sx: { gap: 1 } },
              headingProps: { variant: 'h4' },
              captionProps: { variant: 'body1' }
            }}
          />
          {link && (
            <ButtonAnimationWrapper>
              <Button color="primary" variant="outlined" {...link} />
            </ButtonAnimationWrapper>
          )}
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  CONTACT US - 4  ***************************/

export default function ContactUs4({ heading, caption, list, showForm = true }: ContactUsProps2): JSX.Element {
  const sectionPadding = { xs: 2, sm: 3, md: 5 };
  const cardRadius = { xs: 6, sm: 8 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Grid container spacing={1.5}>
          {showForm && (
            <Grid size={12}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4
                }}
                style={{ height: '100%' }}
              >
                <GraphicsCard sx={{ height: 1, borderRadius: cardRadius }}>
                  <GraphicsCard sx={{ bgcolor: 'grey.200', borderRadius: cardRadius }}>
                    <Box sx={{ p: { xs: 2, sm: 4, md: 5 } }}>
                      {heading && (
                        <Typeset
                          {...{
                            heading,
                            caption,
                            stackProps: { sx: { alignItems: 'center', textAlign: 'center' } },
                            headingProps: { sx: { maxWidth: { xs: '85%', sm: '80%' } } },
                            captionProps: { sx: { maxWidth: { sm: '60%' } } }
                          }}
                        />
                      )}
                    </Box>
                  </GraphicsCard>
                  <Box sx={{ p: sectionPadding, px: { md: 24 } }}>
                    <ContactUsForm2 />
                  </Box>
                </GraphicsCard>
              </motion.div>
            </Grid>
          )}
          {list?.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: item.animationDelay
                }}
                style={{ height: '100%' }}
              >
                <ContactCard {...{ ...item }} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/contact-us/ContactUs6.tsx
```tsx
'use client';

import { useMemo } from 'react';

// @next
import dynamic from 'next/dynamic';
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { MapContainerProps, TileLayerProps } from 'react-leaflet';

// @project
import { GraphicsCard } from '@/components/cards';
import { ContactUsForm1 } from '@/components/contact-us';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ContactUsProps } from '@/types/contact-us';

const MapContainer = dynamic<MapContainerProps>(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic<TileLayerProps>(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });

interface ContactCardProp {
  title: string;
  content: string;
  link?: string;
}

/***************************  CONTACT US - CARD  ***************************/

function ContactCard({ title, content, link }: ContactCardProp) {
  return (
    <Stack sx={{ gap: 0.5 }}>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        {title}
      </Typography>
      <Link
        component={NextLink}
        variant="h5"
        color="text.primary"
        href={link ? link : ''}
        sx={{ '&:hover': { color: 'primary.dark' } }}
        rel="noopener noreferrer"
        aria-label="contact-content"
      >
        {content}
      </Link>
    </Stack>
  );
}

/***************************  CONTACT US - 6  ***************************/

export default function ContactUs6({ heading, caption, contactDetails }: ContactUsProps): JSX.Element {
  const time = useMemo(() => new Date().getTime(), []);

  const mapContainer = useMemo(() => {
    return (
      <MapContainer key={time} center={[21.233867, 72.862775]} zoom={15} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset
          {...{
            heading,
            caption,
            stackProps: { sx: { alignItems: 'center', textAlign: 'center' } },
            headingProps: { sx: { maxWidth: { xs: '85%', sm: '80%' } } },
            captionProps: { sx: { maxWidth: { xs: '75%', sm: '60%' } } }
          }}
        />
        <Grid container spacing={1.5} direction={{ xs: 'column-reverse', md: 'row' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack sx={{ gap: 1.5 }}>
              <Box
                sx={{
                  borderRadius: { xs: 6, sm: 8, md: 10 },
                  height: { xs: 194, sm: 267 },
                  overflow: 'hidden',
                  '.leaflet-top .leaflet-control': { mt: 2.5, ml: 2.5 }
                }}
              >
                {mapContainer}
              </Box>
              <GraphicsCard sx={{ p: { xs: 3, md: 5 } }}>
                <Grid container spacing={{ xs: 3, md: 4.25 }}>
                  <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                    <ContactCard title="Visit us" content={contactDetails.address} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                    <ContactCard title="Chat to sales" content={contactDetails.email} link={`mailto:${contactDetails.email}`} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                    <ContactCard title="Call us" content={contactDetails.phone} link={`tel:${contactDetails.phone}`} />
                  </Grid>
                  {contactDetails.time && (
                    <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                      <ContactCard title="Opening Hours" content={contactDetails.time} />
                    </Grid>
                  )}
                </Grid>
              </GraphicsCard>
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
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/contact-us/ContactUs3.tsx
```tsx
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

```

  

File: src/blocks/contact-us/ContactUs2.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { ContactUsForm1 } from '@/components/contact-us';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import { SECTION_COMMON_PY } from '@/utils/constant';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

// @types
import { ContactCard2Props, ContactUsProps } from '@/types/contact-us';

/***************************  CONTACT US - CARD  ***************************/

function ContactCard({ icon, title, content, link }: ContactCard2Props) {
  return (
    <>
      <Box sx={{ '& svg': { width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } } }}>
        <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} color="text.primary" stroke={1} />
      </Box>
      <Typography variant="h4" sx={{ color: 'text.secondary', mt: { xs: 1.5, sm: 3 }, mb: { xs: 0.5, sm: 1 } }}>
        {title}
      </Typography>
      <Link
        component={NextLink}
        variant="h6"
        color="text.primary"
        href={link ? link : ''}
        sx={{ '&:hover': { color: 'primary.dark' } }}
        rel="noopener noreferrer"
        aria-label="contact-content"
      >
        {content}
      </Link>
    </>
  );
}

/***************************  CONTACT US - 2  ***************************/

export default function ContactUs2({ heading, caption, contactDetails, bgImage }: ContactUsProps): JSX.Element {
  const sectionPadding = { xs: 2, sm: 4, md: 5 };
  const boxTopPadding = { xs: 1.5, sm: 4 };
  const boxSidePadding = { sm: 3 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.4
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard overLay bgImage={bgImage} sx={{ height: 1 }}>
                <Stack sx={{ justifyContent: 'flex-end', height: 1, p: sectionPadding }}>
                  <Grid container>
                    <Grid size={12}>
                      <ContactCard icon="tabler-map-pin" title="Visit us" content={contactDetails.address} />
                      <Divider sx={{ borderColor: 'background.default', mt: { xs: 1.5, sm: 2.5, md: 4 } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Box sx={{ pt: boxTopPadding, pb: { xs: 1.5, sm: 0 }, pr: boxSidePadding, height: 1 }}>
                        <ContactCard
                          icon="tabler-mail"
                          title="Chat to sales"
                          content={contactDetails.email}
                          link={`mailto:${contactDetails.email}`}
                        />
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ height: 1 }}>
                        <Divider
                          flexItem
                          sx={{
                            borderColor: 'background.default',
                            /**
                             * Sets the border orientation of the divider based on the screen size.
                             * - If the screen size is small, the orientation is 'horizontal'.
                             * - If the screen size is medium or large, the orientation 'vertical'.
                             * orientation={!downSM ? 'vertical' : 'horizontal'}
                             */
                            borderRightWidth: { xs: 'unset', sm: 'thin' },
                            borderBottomWidth: { xs: 'thin', sm: 0 }
                          }}
                        />
                        <Box sx={{ pt: boxTopPadding, pl: boxSidePadding }}>
                          <ContactCard
                            icon="tabler-phone"
                            title="Call us"
                            content={contactDetails.phone}
                            link={`tel:${contactDetails.phone}`}
                          />
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard sx={{ height: 1 }}>
                <Box sx={{ p: sectionPadding }}>
                  <ContactUsForm1 />
                </Box>
              </GraphicsCard>
            </motion.div>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/contact-us/ContactUs1.tsx
```tsx
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

```

  

File: src/blocks/blog/Blog4.tsx
```tsx
'use client';

import { MouseEvent } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import useAriaHidden from '@/hooks/useAriaHidden';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BlogProps } from '@/types/blog';

/***************************  BLOG - 4  ***************************/

export default function Blog4({ heading, caption, blogs, exploreMore }: BlogProps): JSX.Element {
  const theme = useTheme();
  const updateAriaHidden = useAriaHidden();

  const settings: Settings = {
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    swipeToSlide: true,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '280px',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { centerPadding: '100px' }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { centerPadding: '100px', slidesToShow: 1 }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { centerPadding: '20px', slidesToShow: 1 }
      }
    ],
    afterChange: () => {
      // the custom hook to manage aria-hidden and inert attributes for anchor tags
      updateAriaHidden();
    }
  };

  return (
    <Stack sx={{ gap: 4, py: SECTION_COMMON_PY, overflowX: 'hidden' }}>
      <ContainerWrapper>
        <motion.div
          initial={{ opacity: 0, y: 5, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h2">{heading}</Typography>
          </Stack>
        </motion.div>
      </ContainerWrapper>
      <Box sx={{ position: 'relative' }}>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Slider {...settings}>
            {blogs.map((item, index) => (
              <Box key={index} sx={{ px: 0.75 }}>
                <GraphicsCard bgImage={item.image} sx={{ height: 464, position: 'relative', overflow: 'unset' }}>
                  <GraphicsCard sx={{ width: '100%', position: 'absolute', bottom: '-2%', left: 0, mb: 0.5 }}>
                    <Stack sx={{ p: { xs: 2, sm: 2.5, md: 3 }, gap: 1.5 }}>
                      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
                          {item.chips &&
                            item.chips.length > 0 &&
                            item.chips.map((tag, index) => (
                              <Chip
                                key={index}
                                label={
                                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                    {tag}
                                  </Typography>
                                }
                                sx={{ bgcolor: 'grey.300', '& .MuiChip-label': { px: 2, py: 1 } }}
                              />
                            ))}
                        </Stack>
                        <Typography variant="caption" sx={{ color: 'text.secondary', textWrap: 'nowrap' }}>
                          {item.date}
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          '&:hover .MuiLink-root, &:hover svg': { color: 'primary.dark' }
                        }}
                      >
                        <Link
                          component={NextLink}
                          variant="h4"
                          color="text.primary"
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical'
                          }}
                          {...item.link}
                          onClick={(e: MouseEvent<HTMLAnchorElement, MouseEvent>) => e.stopPropagation()}
                        >
                          {item.caption}
                        </Link>
                        <Link
                          component={NextLink}
                          {...item.link}
                          sx={{
                            ...item.link?.sx,
                            '& svg.tabler-arrow-up-right': { width: { xs: 24, sm: 40 }, height: { xs: 24, sm: 40 } }
                          }}
                          onClick={(e: MouseEvent<HTMLAnchorElement, MouseEvent>) => e.stopPropagation()}
                          rel="noopener noreferrer"
                          aria-label="blog-link"
                        >
                          <SvgIcon name="tabler-arrow-up-right" color="text.primary" stroke={1} />
                        </Link>
                      </Stack>
                    </Stack>
                  </GraphicsCard>
                </GraphicsCard>
              </Box>
            ))}
          </Slider>
        </motion.div>
      </Box>
      <ContainerWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5
          }}
        >
          <Stack sx={{ justifyContent: 'center', alignItems: 'center', gap: 1.5 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', width: { sm: 400, md: 532 } }}>
              {caption}
            </Typography>
            {exploreMore && (
              <ButtonAnimationWrapper>
                <Button variant="outlined" size="large" {...exploreMore} {...(exploreMore.href && { component: NextLink })} />
              </ButtonAnimationWrapper>
            )}
          </Stack>
        </motion.div>
      </ContainerWrapper>
    </Stack>
  );
}

```

  

File: src/blocks/blog/Blog3.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileCard2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BlogProps } from '@/types/blog';

/***************************  BLOG - 3  ***************************/

export default function Blog3({ heading, caption, blogs }: BlogProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 2.5 }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Grid container spacing={1.5}>
          {blogs.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: item.animationDelay
                }}
              >
                <GraphicsCard>
                  <GraphicsCard bgImage={item.image} sx={{ height: { xs: 250, md: 326 } }} />
                  <Box sx={{ padding: { xs: 2.5, sm: 3, md: 4 } }}>
                    <Stack sx={{ gap: 2.5, alignItems: 'flex-start' }}>
                      <Stack
                        direction="row"
                        sx={{
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          '&:hover .MuiLink-root, &:hover svg': { color: 'primary.dark' }
                        }}
                      >
                        <Link component={NextLink} variant="h3" color="text.primary" {...item.link}>
                          {item.caption}
                        </Link>
                        {item.link && (
                          <Link component={NextLink} {...item.link} rel="noopener noreferrer" aria-label="blog-link">
                            <SvgIcon name="tabler-arrow-up-right" size={40} color="text.primary" stroke={1} />
                          </Link>
                        )}
                      </Stack>
                      {item.profile && <ProfileCard2 {...item.profile} />}
                    </Stack>
                  </Box>
                </GraphicsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/blog/Blog6.tsx
```tsx
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

```

  

File: src/blocks/blog/Blog5.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';

// @types
import { BlogListProps, BlogProps } from '@/types/blog';

interface Props extends BlogProps {
  viewMore: ButtonProps & LinkProps;
}

const ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical'
};

/***************************  BLOG - CARD  ***************************/

function BlogCard({ caption, image, date, link }: BlogListProps) {
  const imageSize = { xs: 116, sm: 168, md: 174 };

  return (
    <GraphicsCard sx={{ minHeight: imageSize, height: 1 }}>
      <Stack direction="row" sx={{ height: 1 }}>
        <GraphicsCard bgImage={image} sx={{ minWidth: imageSize, height: 1 }} />
        <Stack sx={{ p: { xs: 2, md: 3 }, gap: { xs: 1.5, sm: 4, md: 5 }, justifyContent: 'space-between' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {date}
          </Typography>
          <Stack
            direction="row"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 1.5,
              '&:hover .MuiLink-root, &:hover svg': { color: 'primary.dark' }
            }}
          >
            <Link component={NextLink} variant="h4" color="text.primary" sx={{ ...ellipsis }} {...link}>
              {caption}
            </Link>
            {link && (
              <Link component={NextLink} {...link} rel="noopener noreferrer" aria-label="blog-link">
                <SvgIcon name="tabler-arrow-up-right" size={24} color="text.primary" />
              </Link>
            )}
          </Stack>
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  BLOG - 5  ***************************/

export default function Blog5({ heading, caption, viewMore, blogs }: Props): JSX.Element {
  const isFocusWithin = useFocusWithin();

  const LinkSection = () => {
    const theme = useTheme();

    return (
      <GraphicsCard
        sx={{
          height: { xs: 72, md: 1 },
          ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
        }}
      >
        <Button
          fullWidth
          endIcon={<SvgIcon name="tabler-arrow-narrow-right" size={40} stroke={1} />}
          sx={{ ...theme.typography.h5, height: 1, borderRadius: 0 }}
          {...(viewMore.href && { component: NextLink })}
          {...viewMore}
        />
      </GraphicsCard>
    );
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5
              }}
            >
              <GraphicsCard>
                <GraphicsCard bgImage={blogs[0].image} sx={{ height: { xs: 234, sm: 208, md: 326 } }} />
                <Stack sx={{ p: { xs: 2.5, sm: 3, md: 4 }, gap: 1.5, alignItems: 'flex-start' }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {blogs[0].date}
                  </Typography>
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      width: 1,
                      '&:hover .MuiLink-root, &:hover svg': { color: 'primary.dark' }
                    }}
                  >
                    <Link component={NextLink} variant="h3" color="text.primary" sx={{ ...ellipsis }} {...blogs[0].link}>
                      {blogs[0].caption}
                    </Link>
                    {blogs[0].link && (
                      <Link
                        component={NextLink}
                        {...blogs[0].link}
                        rel="noopener noreferrer"
                        aria-label="blog-link"
                        sx={{
                          ...blogs[0].link.sx,
                          '& svg.tabler-arrow-up-right': {
                            width: { xs: 24, sm: 40 },
                            height: { xs: 24, sm: 40 },
                            strokeWidth: { sm: 1 }
                          }
                        }}
                      >
                        <SvgIcon name="tabler-arrow-up-right" color="text.primary" />
                      </Link>
                    )}
                  </Stack>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, sm: 7 }}>
            <Stack sx={{ gap: 1.5, height: 1 }}>
              {blogs[1] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6
                  }}
                  style={{ height: '100%' }}
                >
                  <BlogCard {...blogs[1]} />
                </motion.div>
              )}
              {blogs[2] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.7
                  }}
                  style={{ height: '100%' }}
                >
                  <BlogCard {...blogs[2]} />
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.7
                }}
                style={{ height: '100%' }}
              >
                <Box sx={{ height: 1, display: { xs: 'none', md: 'block' } }}>
                  <LinkSection />
                </Box>
              </motion.div>
            </Stack>
          </Grid>

          {/* Link Card */}
          <Grid sx={{ display: { xs: 'block', md: 'none' } }} size={12}>
            <LinkSection />
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/blog/Blog2.tsx
```tsx
'use client';

import { MouseEvent } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import useAriaHidden from '@/hooks/useAriaHidden';
import { SECTION_COMMON_PY } from '@/utils/constant';
// @types
import { BlogProps } from '@/types/blog';

/***************************  BLOG - 2  ***************************/

export default function Blog2({ heading, caption, blogs }: BlogProps): JSX.Element {
  const theme = useTheme();
  const updateAriaHidden = useAriaHidden();

  const settings: Settings = {
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '140px',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { centerPadding: '100px' }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { centerPadding: '50px' }
      }
    ],
    afterChange: () => {
      // the custom hook to manage aria-hidden and inert attributes for anchor tags
      updateAriaHidden();
    }
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 2.5 }}>
        <Typeset {...{ heading, caption }} />
        <Box sx={{ position: 'relative' }}>
          <Slider {...settings}>
            {blogs.map((item, index) => (
              <Box key={index} sx={{ px: 0.75 }}>
                <GraphicsCard
                  bgImage={item.image}
                  sx={{ height: { xs: 250, sm: 300, md: 410 } }}
                  overLay={`linear-gradient(360deg, ${alpha(theme.palette.grey[900], 0.5)} 0%, ${alpha(theme.palette.primary.darker, 0)} 100%)`}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                      alignItems: { xs: 'flex-start', sm: 'flex-end' },
                      justifyContent: { xs: 'flex-end', sm: 'space-between' },
                      gap: 0.5,
                      height: 1,
                      p: 3
                    }}
                  >
                    <Link
                      component={NextLink}
                      variant="h5"
                      color="background.default"
                      {...item.link}
                      onClick={(e: MouseEvent<HTMLAnchorElement, MouseEvent>) => e.stopPropagation()}
                      underline="hover"
                    >
                      {item.caption}
                    </Link>
                    <Link
                      component={NextLink}
                      {...item.link}
                      rel="noopener noreferrer"
                      aria-label="blog-link"
                      onClick={(e: MouseEvent<HTMLAnchorElement, MouseEvent>) => e.stopPropagation()}
                      sx={{ height: 24, '&:hover svg': { color: 'background.default' } }}
                    >
                      <motion.div whileHover={{ y: -4, x: 4 }} transition={{ duration: 0.5 }}>
                        <SvgIcon name="tabler-arrow-up-right" color="grey.600" />
                      </motion.div>
                    </Link>
                  </Stack>
                </GraphicsCard>
              </Box>
            ))}
          </Slider>
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/blog/Blog1.tsx
```tsx
'use client';

import { MouseEvent } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import Typeset from '@/components/Typeset';

import useAriaHidden from '@/hooks/useAriaHidden';
import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BlogProps } from '@/types/blog';

/***************************  BLOG - 1  ***************************/

export default function Blog1({ heading, caption, blogs }: BlogProps): JSX.Element {
  const theme = useTheme();
  const isFocusWithin = useFocusWithin();
  const updateAriaHidden = useAriaHidden();

  const settings: Settings = {
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '95px',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1, centerPadding: '45px' }
      }
    ],
    afterChange: () => {
      // the custom hook to manage aria-hidden and inert attributes for anchor tags
      updateAriaHidden();
    }
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY, overflowX: 'hidden' }}>
      <Stack sx={{ gap: 2.5 }}>
        <motion.div
          initial={{ opacity: 0, y: 5, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box sx={{ position: 'relative', '& .slick-slide > div': { pt: 0.5 }, mt: -0.5 }}>
            <Slider {...settings}>
              {blogs.map((item, index) => (
                <Box key={index} sx={{ px: { xs: 0.25, sm: 0.5, md: 0.75 } }}>
                  <GraphicsCard
                    bgImage={item.image}
                    sx={{
                      height: { xs: 250, sm: 300, md: 410 },
                      ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
                    }}
                    overLay={`linear-gradient(360deg, ${alpha(theme.palette.grey[900], 0.5)} 0%, ${alpha(theme.palette.primary.darker, 0)} 100%)`}
                  >
                    <Stack sx={{ justifyContent: 'flex-end', height: 1, p: 3 }}>
                      <Link
                        component={NextLink}
                        variant="h5"
                        color="background.default"
                        {...item.link}
                        sx={{ '&.Mui-focusVisible': { outline: 'none' } }}
                        underline="hover"
                        onClick={(e: MouseEvent<HTMLAnchorElement, MouseEvent>) => e.stopPropagation()}
                      >
                        {item.caption}
                      </Link>
                    </Stack>
                  </GraphicsCard>
                </Box>
              ))}
            </Slider>
          </Box>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta9.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  image: ImageCommonProps;
}

/***************************  CALL TO ACTION - 9  ***************************/

export default function Cta9({ heading, caption, primaryBtn, image }: Props): JSX.Element {
  const theme = useTheme();

  const gc = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(71.16% 20.97% at 25.31% 19.88%, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.7)} 100%)`
      : `radial-gradient(71.16% 79.03% at 25.31% 19.88%, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.7)} 100%)`;

  const imageRadius = { borderTopLeftRadius: { xs: 12 }, borderBottomRightRadius: { xs: 24, sm: 32, md: 40 }, borderBottomLeftRadius: 0 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard>
        <Grid container spacing={{ xs: 2, sm: 1, md: 2 }}>
          <Grid size={{ xs: 12, sm: 8, md: 6 }}>
            <Stack sx={{ alignItems: 'flex-start', gap: { xs: 3, sm: 4 }, p: { xs: 3, sm: 4, md: 5 } }}>
              <Typeset
                {...{ heading, caption, captionProps: { sx: { maxWidth: 420 }, variant: 'body1' }, stackProps: { sx: { gap: 1 } } }}
              />
              <Button color="primary" size="large" variant="contained" sx={{ minWidth: 263 }} {...primaryBtn} />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 6 }}>
            <GraphicsCard sx={{ height: 1, borderRadius: 0 }}>
              <Stack sx={{ justifyContent: 'flex-end', height: 1, pt: { sm: 4, md: 5 }, pl: { xs: 3, sm: 0 } }}>
                <GraphicsImage
                  image={image}
                  sx={{
                    width: 1,
                    height: { xs: 295, sm: 258, md: 292 },
                    backgroundPositionY: 'top',
                    backgroundPositionX: 'left',
                    ...imageRadius
                  }}
                >
                  <Box
                    sx={{ height: 1, background: gradient, ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' }) }}
                  />
                </GraphicsImage>
              </Stack>
            </GraphicsCard>
          </Grid>
        </Grid>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta7.tsx
```tsx
'use client';

import { ReactElement } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

interface Props {
  headLine?: ReactElement;
  primaryBtn: ButtonProps;
  caption: string;
}

/***************************  CALL TO ACTION - 7  ***************************/

export default function Cta7({ headLine, caption, primaryBtn }: Props): JSX.Element {
  const theme = useTheme();
  const gc = theme.palette.grey[300];

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.5
        }}
      >
        <GraphicsCard overLay={`radial-gradient(75% 60% at 50% 46.88%, ${alpha(gc, 0)} 0%, ${gc} 100%)`}>
          <Box sx={{ p: { xs: 3, sm: 4, md: 8 }, background: getBackgroundDots(theme.palette.grey[300], 80, 40) }}>
            <Grid container spacing={{ xs: 4, sm: 6, md: 12 }} sx={{ alignItems: 'flex-end' }}>
              <Grid size={{ sm: 6.5 }}>{headLine}</Grid>
              <Grid size={{ sm: 5.5 }}>
                <Stack sx={{ gap: { xs: 2, md: 3 }, alignItems: { sm: 'flex-start' } }}>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                    {caption}
                  </Typography>
                  <ButtonAnimationWrapper>
                    <Button color="primary" size="large" variant="contained" {...primaryBtn} />
                  </ButtonAnimationWrapper>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta6.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GradientFab from '@/components/GradientFab';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import DrawnArrow from '@/images/graphics/DrawnArrow';

// @types
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  heading: string;
  icon?: JSX.Element;
  caption: string;
  primaryBtn: ButtonProps;
  clienteleList: ClienteleListProps[];
}

/***************************  CALL TO ACTION - 6  ***************************/

export default function Cta6({ heading, caption, icon, primaryBtn, clienteleList }: Props): JSX.Element {
  const theme = useTheme();

  const settings: Settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1.92, centerMode: true }
      }
    ]
  };

  const shade = {
    content: `' '`,
    zIndex: 1,
    position: 'absolute',
    width: { xs: 13, sm: 119 },
    height: 1,
    top: 0,
    background: `linear-gradient(270deg,  ${alpha(theme.palette.grey[100], 0)} 0%, ${theme.palette.grey[100]} 104.2%)`,
    ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' })
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5
        }}
      >
        <GraphicsCard>
          <Stack sx={{ gap: { xs: 6, md: 8 }, p: { xs: 3, sm: 4, md: 8 } }}>
            <Stack sx={{ alignItems: 'center', gap: { xs: 3, sm: 4, md: 5 }, textAlign: 'center' }}>
              <Stack sx={{ alignItems: 'center', gap: { xs: 2, sm: 2.5 }, '& .gradient-fab': { display: 'contents' } }}>
                <GradientFab type="star" size={55} icon={icon || <SvgIcon name="tabler-cloud-up" size={24} />} />
                <Typeset {...{ heading, caption, captionProps: { sx: { maxWidth: 478, mx: 'auto' } }, stackProps: { sx: { gap: 1 } } }} />
              </Stack>
              <Stack direction="row" sx={{ justifyContent: 'center', position: 'relative' }}>
                <Box
                  component="span"
                  sx={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-25px',
                    ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)' })
                  }}
                >
                  <DrawnArrow />
                </Box>
                <OutlinedInput
                  placeholder="Enter your email address"
                  endAdornment={
                    <Button color="primary" variant="contained" sx={{ px: 4, minWidth: { xs: 110, md: 120 } }} {...primaryBtn} />
                  }
                  slotProps={{ input: { 'aria-label': 'Email address' } }}
                  sx={{
                    ...theme.typography.caption2,
                    color: 'text.secondary',
                    p: 0.5,
                    whiteSpace: 'nowrap',
                    '& .MuiOutlinedInput-input': { p: '6px 20px' },
                    '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
                  }}
                />
              </Stack>
            </Stack>
            <Box
              sx={{
                position: 'relative',
                '.slick-track': { display: 'flex', alignItems: 'center' },
                '&:before': { ...shade, left: 0 },
                '&:after': { ...shade, right: 0, rotate: '180deg' }
              }}
            >
              <Slider {...settings}>
                {clienteleList.map((item, index) => (
                  <Box key={index}>
                    <Stack
                      sx={{
                        alignItems: 'center',
                        px: { xs: 0.25, sm: 0.5, md: 0.75 },
                        '& svg': {
                          opacity: 0.4,
                          transition: 'all 0.5s ease-in-out',
                          '&:hover': { opacity: 1, transition: 'all 0.5s ease-in-out' }
                        }
                      }}
                    >
                      <GraphicsImage {...item} />
                    </Stack>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Stack>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta8.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  image: ImageCommonProps;
}

/***************************  CALL TO ACTION - 8  ***************************/

export default function Cta8({ heading, caption, primaryBtn, image }: Props): JSX.Element {
  const theme = useTheme();
  const gc = theme.palette.grey[100];

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.6
        }}
      >
        <GraphicsCard>
          <Box sx={{ px: { md: 2 } }}>
            <GraphicsImage
              image={image}
              sx={{
                width: 1,
                height: { xs: 232, sm: 280, md: 390 },
                backgroundPositionY: 'bottom',
                transform: { sm: 'scale(1.1)', md: 'unset' }
              }}
            >
              <Box
                sx={{ height: 1, background: `radial-gradient(54.94% 54.94% at 50% 54.06%, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.7)} 100%)` }}
              />
            </GraphicsImage>
            <Stack sx={{ gap: { xs: 3, sm: 4 }, alignItems: 'center', p: { xs: 3, sm: 4, md: 5 }, textAlign: 'center' }}>
              <Typeset
                {...{
                  heading,
                  caption,
                  captionProps: { sx: { maxWidth: 470, mx: 'auto' }, variant: 'body1' },
                  stackProps: { sx: { gap: 1 } }
                }}
              />
              <ButtonAnimationWrapper>
                <Button size="large" variant="contained" sx={{ minWidth: 263 }} {...primaryBtn} />
              </ButtonAnimationWrapper>
            </Stack>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta4.tsx
```tsx
'use client';

import { ReactElement } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import { ProfileGroup } from '@/components/cards/profile-card';
import SvgIcon from '@/components/SvgIcon';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Arrow from '@/images/graphics/Arrow';

// @types
import { AvatarGroupProps, ListProps } from '@/types/cta';

interface Props {
  headLine?: string | ReactElement;
  primaryBtn: ButtonProps;
  profileGroups: {
    avatarGroups: AvatarGroupProps[];
    review: string;
  };
  list: ListProps[];
  clientContent: string;
}

/***************************  CALL TO ACTION - 4  ***************************/

export default function Cta4({ headLine, primaryBtn, profileGroups, list, clientContent }: Props): JSX.Element {
  const theme = useTheme();

  const transformValues =
    theme.direction === ThemeDirection.RTL
      ? { xs: 'rotate(-45deg) scaleX(-1)', sm: 'rotate(-320deg) scaleX(-1)', md: 'scaleX(-1)' }
      : { xs: 'rotate(45deg)', sm: 'rotate(320deg)', md: 'unset' };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.3
        }}
      >
        <GraphicsCard>
          <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            <Grid container spacing={{ xs: 5, sm: 0, md: 3 }} sx={{ alignItems: 'flex-end' }}>
              <Grid size={{ xs: 12, sm: 9, md: 8 }}>
                <Stack sx={{ gap: 5 }}>
                  <ProfileGroup {...profileGroups} />
                  <Stack sx={{ gap: { xs: 2, sm: 5 } }}>
                    {typeof headLine === 'string' ? <Typography variant="h2">{headLine}</Typography> : headLine}
                    {list && (
                      <Stack direction={{ sm: 'row' }} sx={{ columnGap: { xs: 1, sm: 3 }, rowGap: 1, flexWrap: 'wrap' }}>
                        {list.map((item, index) => (
                          <Stack key={index} direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                            <SvgIcon name="tabler-rosette-discount-check" color="text.secondary" stroke={1} />
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {item.primary}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                </Stack>
              </Grid>
              <Grid sx={{ position: 'relative', pl: { md: 3 }, pt: { md: 3 } }} size={{ sm: 3, md: 4 }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: -36, sm: -98, md: -68 },
                    right: { xs: -70, sm: 40, md: 100 },
                    transform: transformValues
                  }}
                >
                  <Arrow />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'primary.main',
                    width: 94,
                    position: 'absolute',
                    top: { xs: 6, sm: -160, md: -82 },
                    right: { xs: -160, sm: 0 }
                  }}
                >
                  {clientContent}
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <ButtonAnimationWrapper>
                    <Button color="primary" size="large" variant="contained" sx={{ minWidth: { md: 263 } }} {...primaryBtn} />
                  </ButtonAnimationWrapper>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta3.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Marquee from 'react-fast-marquee';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';

import { ThemeDirection } from '@/config';
import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BgImageProps } from '@/types/graphics';
import { MarqueesDataProps, TagProps } from '@/types/integration';

/***************************  CTA - TAG  ***************************/

function CtaTag({ label, icon }: TagProps) {
  return (
    <Chip
      label={<Typography variant="h5">{label}</Typography>}
      {...(icon && {
        icon: <SvgIcon type={IconType.CUSTOM} {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
      })}
      sx={{
        px: { xs: 2.25, md: 3 },
        py: { xs: 1.25, md: 1.75 },
        mx: 0.5,
        bgcolor: 'background.default',
        '& .MuiChip-label': { p: 0, pl: 1.25 },
        '& svg': { width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 }, strokeWidth: { xs: 2, md: 1.5 } }
      }}
    />
  );
}

interface Props {
  bgImage1?: BgImageProps;
  bgImage2?: BgImageProps;
  heading: string;
  primaryBtn: ButtonProps;
  marquees: MarqueesDataProps[];
}

/***************************  CALL TO ACTION - 3  ***************************/

export default function Cta3({ bgImage1, bgImage2, heading, primaryBtn, marquees }: Props): JSX.Element {
  const theme = useTheme();
  const gc = theme.palette.grey[100];

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 7, md: 7.5 }}>
          <GraphicsCard
            {...(bgImage1 && { bgImage: bgImage1, overLay: `linear-gradient(180deg, ${alpha(gc, 0)} -280%, ${gc} 143.54%)` })}
            sx={{ height: 1 }}
          >
            <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, position: 'relative', width: 1 }}>
              <Stack sx={{ alignItems: 'flex-start', gap: { xs: 3, sm: 4 } }}>
                <Typography variant="h2">{heading}</Typography>
                {primaryBtn && <Button color="primary" size="large" variant="contained" {...primaryBtn} />}
              </Stack>
            </Box>
          </GraphicsCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 4.5 }}>
          <GraphicsCard
            {...(bgImage2 && { bgImage: bgImage2, overLay: `linear-gradient(180deg, ${alpha(gc, 0)} -280%, ${gc} 143.54%)` })}
            sx={{ height: 1 }}
          >
            <Box sx={{ py: 5.5, height: 1 }}>
              <Stack sx={{ gap: 1, justifyContent: 'center', height: 1 }}>
                {marquees.map((marquee, index) => (
                  <Stack key={index} direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                    <Marquee pauseOnHover {...(theme.direction === ThemeDirection.RTL && { direction: 'right' })} {...marquee.marqueeProps}>
                      {marquee.data.map((integration, index) => (
                        <CtaTag key={index} {...integration} />
                      ))}
                    </Marquee>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </GraphicsCard>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta5.tsx
```tsx
'use client';

import { ReactElement } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import { ProfileGroup } from '@/components/cards/profile-card';
import LogoWatermark from '@/components/logo/LogoWatermark';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Wave from '@/images/graphics/Wave';

// @types
import { AvatarGroupProps } from '@/types/cta';

interface CTASaleProps {
  count: string | number;
  defaultUnit: string;
  caption: string;
}

interface CtaInputProps {
  placeholder?: string;
  adornmentBtn: ButtonProps;
  helpertext: string;
}

interface Props {
  heading: string;
  caption: string;
  label: string;
  saleData: CTASaleProps;
  input?: boolean | CtaInputProps;
  primaryBtn?: ButtonProps;
  secondaryBtn?: ButtonProps;
  description?: string | ReactElement;
  profileGroups: {
    avatarGroups: AvatarGroupProps[];
    review: string;
  };
}

/***************************  CALL TO ACTION - 5  ***************************/

export default function Cta5({
  heading,
  caption,
  label,
  input = false,
  primaryBtn,
  secondaryBtn,
  description,
  saleData,
  profileGroups
}: Props): JSX.Element {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
      >
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, sm: 8, md: 9 }}>
            <GraphicsCard sx={{ position: 'relative' }}>
              <Stack
                sx={{ alignItems: 'flex-start', gap: { xs: 5.75, sm: 10 }, p: { xs: 3, sm: 4, md: 8 }, position: 'relative', zIndex: 1 }}
              >
                <Stack sx={{ gap: 5 }}>
                  <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                    <Chip
                      label={
                        <Typography variant="caption" sx={{ color: 'secondary.main' }}>
                          {label}
                        </Typography>
                      }
                      variant="outlined"
                      sx={{ borderColor: 'grey.600', '& .MuiChip-label': { py: 0.75, px: 2 } }}
                    />
                    <Divider sx={{ width: 63, borderBottomWidth: 2 }} />
                  </Stack>
                  <Typeset {...{ heading, caption, captionProps: { sx: { maxWidth: 478 } } }} />
                </Stack>
                {input && typeof input === 'object' && (
                  <Stack sx={{ gap: 0.75, width: { sm: '100%', md: 'unset' } }}>
                    <OutlinedInput
                      placeholder={input.placeholder || 'Enter your email address'}
                      endAdornment={
                        <Button
                          color="primary"
                          variant="contained"
                          sx={{ px: 4, minWidth: { xs: 110, md: 120 } }}
                          {...input.adornmentBtn}
                        />
                      }
                      slotProps={{ input: { 'aria-label': 'Email address' } }}
                      sx={{
                        ...theme.typography.caption2,
                        color: 'secondary.main',
                        p: 0.5,
                        whiteSpace: 'nowrap',
                        '& .MuiOutlinedInput-input': { p: '6px 20px' },
                        '& .MuiOutlinedInput-notchedOutline': { borderRadius: 25 }
                      }}
                    />
                    {input.helpertext && (
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {input.helpertext}
                      </Typography>
                    )}
                  </Stack>
                )}
                {(primaryBtn || secondaryBtn || description) && (
                  <Stack sx={{ alignItems: 'flex-start', gap: 1.5, width: { sm: '100%', md: '60%' }, ...(input && { mt: -6 }) }}>
                    {(primaryBtn || secondaryBtn) && (
                      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                        {secondaryBtn && (
                          <ButtonAnimationWrapper>
                            <Button variant="outlined" sx={{ minWidth: { sm: 170 } }} {...secondaryBtn} />
                          </ButtonAnimationWrapper>
                        )}
                        {primaryBtn && (
                          <ButtonAnimationWrapper>
                            <Button variant="contained" sx={{ minWidth: { sm: 170 } }} {...primaryBtn} />
                          </ButtonAnimationWrapper>
                        )}
                      </Stack>
                    )}
                    {description && typeof description === 'string' ? (
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                      </Typography>
                    ) : (
                      description
                    )}
                  </Stack>
                )}
              </Stack>
              <Box sx={{ position: 'absolute', right: -160, bottom: -160, display: { xs: 'none', md: 'block' }, transform: 'scaleX(-1)' }}>
                <LogoWatermark />
              </Box>
            </GraphicsCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Grid container sx={{ height: 1, position: 'relative' }}>
              <Grid size={{ xs: 6, sm: 12 }} sx={{ minHeight: { sm: '50%' } }}>
                <GraphicsCard sx={{ height: 1 }}>
                  <Stack sx={{ alignItems: 'center', gap: 1, py: { xs: 2, sm: 6, md: 7.5 }, px: { xs: 2, sm: 3.5 }, textAlign: 'center' }}>
                    <Typography component="div" variant="h1">
                      {saleData.count}
                      <Typography variant="h2" component="span" sx={{ color: 'text.secondary' }}>
                        {saleData.defaultUnit}
                      </Typography>
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{saleData.caption}</Typography>
                  </Stack>
                </GraphicsCard>
              </Grid>
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: { xs: 'translate(-50%,-50%) rotate(90deg)', sm: 'translate(-50%,-50%)' },
                  '& .wave svg': { width: { xs: 70, sm: 122 } }
                }}
              >
                <Wave />
              </Box>
              <Grid size={{ xs: 6, sm: 12 }} sx={{ minHeight: { sm: '50%' } }}>
                <GraphicsCard sx={{ height: 1 }}>
                  <ProfileGroup
                    {...profileGroups}
                    sx={{
                      py: { xs: 2, sm: 4, md: 6.75 },
                      px: { xs: 2, sm: 1.5 },
                      height: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      '& .MuiAvatarGroup-root': { mb: 0.5 },
                      '& .MuiAvatar-root': { width: { xs: 40, sm: 58 }, height: { xs: 40, sm: 58 } },
                      '& .wave': { display: 'none' }
                    }}
                  />
                </GraphicsCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta12.tsx
```tsx
'use client';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  image: ImageCommonProps;
}

/***************************  CALL TO ACTION - 12  ***************************/

export default function Cta12({ heading, caption, primaryBtn, image }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.6
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ height: 1, alignItems: 'start', justifyContent: 'center', p: { xs: 3, sm: 4, md: 5 }, gap: { xs: 4, sm: 5 } }}>
                <Typeset {...{ heading, caption }} />
                {primaryBtn && (
                  <ButtonAnimationWrapper>
                    <Button variant="contained" size="large" {...primaryBtn} />
                  </ButtonAnimationWrapper>
                )}
              </Stack>
            </GraphicsCard>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.8
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard sx={{ height: 1 }}>
              <Box sx={{ pl: { xs: 5, md: 10 }, pt: { xs: 5, md: 6 }, minHeight: { xs: 348, sm: 386, md: 498 }, height: 1 }}>
                <GraphicsImage
                  sx={{
                    height: 1,
                    backgroundPositionX: 'left',
                    backgroundPositionY: 'top',
                    borderTopLeftRadius: { xs: 12 },
                    borderBottomLeftRadius: { xs: 12 }
                  }}
                  image={image}
                />
              </Box>
            </GraphicsCard>
          </motion.div>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta11.tsx
```tsx
// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { GraphicsCard } from '@/components/cards';
import { ListProps } from '@/types/cta';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
  list: ListProps[];
  image: ImageCommonProps;
}

/***************************  CALL TO ACTION - 11  ***************************/

export default function Cta11({ heading, caption, primaryBtn, list, secondaryBtn, image }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <GraphicsCard sx={{ height: 1 }}>
            <Box sx={{ height: 1, p: { xs: 3, sm: 4, md: 5 } }}>
              <GraphicsImage
                image={image}
                sx={{
                  width: 1,
                  height: { xs: 178, sm: 1 },
                  backgroundSize: 'contain',
                  backgroundPositionY: 'center',
                  backgroundPositionX: 'center'
                }}
              />
            </Box>
          </GraphicsCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <GraphicsCard>
            <Stack sx={{ alignItems: 'flex-start', gap: { xs: 3, sm: 4 }, padding: { xs: 2, md: 5 } }}>
              <Typeset
                {...{
                  heading,
                  caption,
                  captionProps: { sx: { maxWidth: 510 } },
                  stackProps: { sx: { gap: 1 } },
                  headingProps: { sx: { maxWidth: { xs: 265, sm: 560 } } }
                }}
              />
              <Grid container>
                {list &&
                  list.map((item, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6 }}>
                      <Stack
                        direction="row"
                        sx={{
                          gap: { xs: 0.5, md: 1 },
                          alignItems: 'center',
                          py: { xs: 0.5, md: 0.75 },
                          '& svg.tabler-rosette-discount-check': { width: { xs: 16, md: 24 }, height: { xs: 16, md: 24 } }
                        }}
                      >
                        <SvgIcon name="tabler-rosette-discount-check" stroke={1} color="text.secondary" />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.primary}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
              </Grid>
            </Stack>
            <GraphicsCard sx={{ bgcolor: 'grey.200' }}>
              <Stack direction="row" sx={{ gap: { xs: 1.5, md: 3 }, p: { xs: 2, md: 4 } }}>
                <Button fullWidth color="primary" size="large" variant="outlined" {...secondaryBtn} />
                <Button fullWidth color="primary" size="large" variant="contained" {...primaryBtn} />
              </Stack>
            </GraphicsCard>
          </GraphicsCard>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta2.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BgImageProps } from '@/types/graphics';

interface Props {
  bgImage?: BgImageProps;
  heading: string;
  primaryBtn: ButtonProps;
}

/***************************  CALL TO ACTION - 2  ***************************/

export default function Cta2({ bgImage, heading, primaryBtn }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard
        {...(bgImage && {
          sx: {
            position: 'relative',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&:before': {
              content: `' '`,
              position: 'absolute',
              width: 1,
              height: 1,
              left: 0,
              bottom: 0,
              background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} -280%, ${theme.palette.grey[100]} 143.54%)`
            }
          }
        })}
      >
        <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, position: 'relative', width: 1 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ alignItems: { xs: 'flex-start', md: 'flex-end' }, justifyContent: 'space-between', gap: { xs: 3, sm: 4 } }}
          >
            <Typography variant="h3">{heading}</Typography>
            {primaryBtn && <Button color="primary" size="large" variant="contained" sx={{ minWidth: 215 }} {...primaryBtn} />}
          </Stack>
        </Box>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/clientele/Clientele7.tsx
```tsx
// @next
import NextLink from 'next/link';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  title?: string;
  exploreBtn?: ButtonProps;
  clienteleList: ClienteleListProps[];
}

/***************************  CLIENTELE - 7  ***************************/

export default function Clientele7({ title, clienteleList, exploreBtn }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <Stack sx={{ gap: 1.5, alignItems: 'center' }}>
          {title && (
            <Typography variant="h3" align="center" sx={{ color: 'text.secondary', maxWidth: { xs: 260, sm: 360 } }}>
              {title}
            </Typography>
          )}
          {exploreBtn && (
            <Button
              sx={{ '& svg.tabler-arrow-up-left': { transform: 'rotate(90deg)' } }}
              startIcon={<SvgIcon name="tabler-arrow-up-left" size={18} />}
              {...(exploreBtn.href && { component: NextLink })}
              {...exploreBtn}
            />
          )}
        </Stack>
        <Grid container spacing={1.5} sx={{ justifyContent: 'center' }}>
          {clienteleList.map((item, index) => (
            <Grid key={index} size={{ xs: 4, sm: 2.3 }}>
              <Stack
                sx={{
                  height: 1,
                  py: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '& svg': {
                    opacity: 0.4,
                    transition: 'all 0.5s ease-in-out',
                    '&:hover': { opacity: 1, transition: 'all 0.5s ease-in-out' }
                  }
                }}
              >
                <GraphicsImage {...item} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta1.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BgImageProps } from '@/types/graphics';

interface Props {
  bgImage?: BgImageProps;
  heading: string;
  primaryBtn: ButtonProps;
}

/***************************  CALL TO ACTION - 1  ***************************/

export default function Cta1({ bgImage, heading, primaryBtn }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.4
        }}
      >
        <GraphicsCard
          {...(bgImage && {
            sx: {
              position: 'relative',
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&:before': {
                content: `' '`,
                position: 'absolute',
                width: 1,
                height: 1,
                left: 0,
                bottom: 0,
                background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} -280%, ${theme.palette.grey[100]} 143.54%)`
              }
            }
          })}
        >
          <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, position: 'relative', width: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: { xs: 3, sm: 4 } }}>
              <Typography variant="h2" align="center">
                {heading}
              </Typography>
              {primaryBtn && (
                <ButtonAnimationWrapper style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Button color="primary" size="large" variant="contained" sx={{ width: { xs: '100%', sm: 'auto' } }} {...primaryBtn} />
                </ButtonAnimationWrapper>
              )}
            </Stack>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/cta/Cta10.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { ProfileGroup } from '@/components/cards/profile-card';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { AvatarGroupProps, ListProps } from '@/types/cta';
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
  profileGroups: {
    avatarGroups: AvatarGroupProps[];
    review: string;
  };
  list?: ListProps[];
  image: ImageCommonProps;
}

/***************************  CALL TO ACTION - 10  ***************************/

export default function Cta10({ heading, caption, primaryBtn, profileGroups, list, secondaryBtn, image }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={4} sx={{ alignItems: { sm: 'center' } }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ alignItems: 'flex-start', gap: { xs: 4, sm: 6, md: 6.25 } }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.4
              }}
            >
              <ProfileGroup {...profileGroups} />
            </motion.div>
            <Stack sx={{ gap: { xs: 3, sm: 4, md: 6 } }}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5
                }}
              >
                <Typeset
                  {...{
                    heading,
                    caption,
                    captionProps: { sx: { maxWidth: 420 }, variant: 'body1' },
                    stackProps: { sx: { gap: 1 } },
                    headingProps: { sx: { maxWidth: { xs: 265, sm: 420 } } }
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.6
                }}
              >
                <Stack sx={{ gap: { xs: 1, sm: 1.5 }, alignItems: 'flex-start' }}>
                  <Stack direction="row" sx={{ gap: 1.5 }}>
                    <ButtonAnimationWrapper>
                      <Button color="primary" size="large" variant="contained" {...primaryBtn} />
                    </ButtonAnimationWrapper>
                    <ButtonAnimationWrapper>
                      <Button color="primary" size="large" variant="outlined" {...secondaryBtn} />
                    </ButtonAnimationWrapper>
                  </Stack>
                  <Stack direction="row" sx={{ gap: 4.75 }}>
                    {list &&
                      list.map((item, index) => (
                        <Stack
                          direction="row"
                          key={index}
                          sx={{ alignItems: 'center', gap: 1, justifyContent: 'center', position: 'relative' }}
                        >
                          {item.icon && (
                            <SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} color="text.secondary" />
                          )}
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.primary}
                          </Typography>
                          {index !== list.length - 1 && (
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: 5,
                                bgcolor: theme.palette.grey[600],
                                position: 'absolute',
                                right: -24,
                                top: '50%',
                                transform: 'translateY(-50%)'
                              }}
                            />
                          )}
                        </Stack>
                      ))}
                  </Stack>
                </Stack>
              </motion.div>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.6
            }}
          >
            <GraphicsImage
              image={image}
              sx={{
                width: 1,
                height: { xs: 379, sm: 466, md: 520 },
                backgroundSize: { sm: 'contain' },
                backgroundPositionY: 'center',
                backgroundPositionX: 'left'
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/clientele/Clientele6.tsx
```tsx
// @mui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @tpyes
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  title?: string;
  clienteleList: ClienteleListProps[];
}

/***************************  CLIENTELE - 6  ***************************/

export default function Clientele6({ title, clienteleList }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 2, md: 2.5 }}>
        <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
          {title && (
            <Typography variant="h3" sx={{ color: 'text.secondary' }}>
              {title}
            </Typography>
          )}
        </Grid>
        <Grid container spacing={0} size={{ xs: 12, sm: 8, md: 9.5 }}>
          {clienteleList.map((item, index) => (
            <Grid key={index} size={{ xs: 4, md: 3 }}>
              <Box
                sx={{
                  p: { xs: 0.5, md: 0.75 },
                  '& svg': { opacity: 0.4, transition: ' all 0.5s ease-in-out' },
                  '&:hover svg': { opacity: 1, transition: ' all 0.5s ease-in-out' }
                }}
              >
                <Chip
                  label={<GraphicsImage {...item} />}
                  sx={{
                    bgcolor: 'grey.100',
                    height: { xs: 40, sm: 46, md: 60 },
                    borderRadius: 2,
                    width: 1,
                    '& .MuiChip-label': { p: 0 }
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/clientele/Clientele5.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @tpyes
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  title?: string;
  clienteleList: ClienteleListProps[];
  description?: string;
}

/***************************  CLIENTELE - 5  ***************************/

export default function Clientele5({ title, clienteleList, description }: Props): JSX.Element {
  const theme = useTheme();

  const settings: Settings = {
    lazyLoad: 'progressive',
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2, centerMode: true }
      }
    ]
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 1.25, sm: 0.5 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, sm: 3, md: 2.5 }} sx={{ pb: { sm: 2 }, pt: { xs: 0, sm: 1.5 } }}>
          {title && (
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              {title}
            </Typography>
          )}
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid
          size={{ xs: 12, sm: 8.75, md: 9.25 }}
          sx={{ pb: 2, '.slick-track': { display: 'flex', alignItems: 'center' }, pt: { xs: 0, sm: 1.5 }, pl: 1.5 }}
        >
          <Slider {...settings}>
            {clienteleList.map((item, index) => (
              <Stack
                key={index}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 1,
                  p: 1.5,
                  '& svg': {
                    opacity: 0.4,
                    transition: 'all 0.5s ease-in-out',
                    '&:hover': { opacity: 1, transition: 'all 0.5s ease-in-out' }
                  }
                }}
              >
                <GraphicsImage {...item} />
              </Stack>
            ))}
          </Slider>
        </Grid>
      </Grid>
      <Divider />
      <Stack sx={{ mt: 1 }}>
        <Typography align="center" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/clientele/Clientele4.tsx
```tsx
// @mui
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @tpyes
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  title?: string;
  clienteleList: ClienteleListProps[];
}

/***************************  CLIENTELE - 4  ***************************/

export default function Clientele4({ title, clienteleList }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 3, sm: 2.5, md: 3 }}>
        <Grid size={{ xs: 12, sm: 3, md: 2.5 }}>
          {title && (
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              {title}
            </Typography>
          )}
        </Grid>
        <Grid container spacing={1.5} size={{ xs: 12, sm: 9, md: 9.5 }}>
          {clienteleList.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 4, md: 3 }}
              sx={{
                pb: 1.5,
                '& svg': { opacity: 0.4, transition: 'all 0.5s ease-in-out', '&:hover': { opacity: 1, transition: 'all 0.5s ease-in-out' } }
              }}
            >
              <GraphicsImage {...item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/clientele/Clientele3.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  title?: string;
  clienteleList: ClienteleListProps[];
}

/***************************  CLIENTELE - 3  ***************************/

export default function Clientele3({ title, clienteleList }: Props): JSX.Element {
  const theme = useTheme();

  const settings: Settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2, centerMode: true }
      }
    ]
  };

  const shade = {
    content: `' '`,
    zIndex: 1,
    position: 'absolute',
    width: { sm: 60, xs: 40 },
    height: 1,
    top: 0,
    background: `linear-gradient(90deg, ${theme.palette.background.default} -8.54%, ${alpha(theme.palette.background.default, 0)} 100%)`,
    transform: theme.direction === ThemeDirection.RTL ? 'scaleX(-1)' : null
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 2.5 }}>
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
          >
            <Typography variant="subtitle2" align="center" sx={{ color: 'text.secondary' }}>
              {title}
            </Typography>
          </motion.div>
        )}
        <Box sx={{ position: 'relative', '&:before': { ...shade, left: 0 }, '&:after': { ...shade, right: 0, rotate: '180deg' } }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            <Slider {...settings}>
              {clienteleList.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    px: { xs: 0.25, sm: 0.5, md: 0.75 },
                    '& svg': { opacity: 0.4, transition: ' all 0.5s ease-in-out' },
                    '&:hover svg': { opacity: 1, transition: ' all 0.5s ease-in-out' }
                  }}
                >
                  <Chip
                    label={<GraphicsImage {...item} />}
                    sx={{ bgcolor: 'grey.100', height: { xs: 40, sm: 46, md: 60 }, width: 1, '& .MuiChip-label': { p: 0 } }}
                  />
                </Box>
              ))}
            </Slider>
          </motion.div>
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/clientele/Clientele1.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import Marquee from 'react-fast-marquee';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @tpyes
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  title?: string;
  clienteleList: ClienteleListProps[];
}

/***************************  CLIENTELE - 1  ***************************/

export default function Clientele1({ title, clienteleList }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 2.5, sm: 1.5 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            {title}
          </Typography>
        </Grid>
        <Grid sx={{ '.slick-track': { display: 'flex', alignItems: 'center' } }} size={{ xs: 12, sm: 9 }}>
          <Marquee pauseOnHover autoFill {...(theme.direction === ThemeDirection.RTL && { direction: 'right' })}>
            {clienteleList.map((item, index) => (
              <Stack
                key={index}
                sx={{
                  alignItems: 'center',
                  px: { xs: 1.5, sm: 2, md: 3 },
                  '& svg': { opacity: 0.4, transition: ' all 0.5s ease-in-out' },
                  '&:hover svg': { opacity: 1, transition: ' all 0.5s ease-in-out' }
                }}
              >
                <GraphicsImage {...item} />
              </Stack>
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/benefit/Benefit9.tsx
```tsx
// @mui
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps } from '@/types/benefit';

/***************************  BENEFIT - 9  ***************************/

export default function Benefit9({ heading, caption, blockDetail, exploreBtn }: BenefitProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard>
        <Stack sx={{ px: { xs: 2, sm: 5, md: 7 }, py: { xs: 2, sm: 5, md: 5 }, gap: { xs: 2, sm: 3, md: 4 } }}>
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
          <Grid container columnSpacing={{ xs: 4 }} rowSpacing={{ xs: 3, sm: 3.5, md: 4 }}>
            {blockDetail.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6 }}>
                <Stack key={index} direction="row" sx={{ height: 1, gap: { xs: 2, md: 3 }, alignItems: 'center', pb: { xs: 2, md: 3 } }}>
                  <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                    <Typography component="div" variant="h1">
                      {item.counter}
                    </Typography>
                    <Typography component="div" variant="h3" sx={{ color: 'text.secondary', mb: { xs: 0.25, md: 0.625 } }}>
                      {item.defaultUnit}
                    </Typography>
                  </Stack>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                    {item.caption}
                  </Typography>
                </Stack>
                <Divider />
              </Grid>
            ))}
          </Grid>
          <Stack sx={{ alignItems: 'center' }}>
            <Button color="primary" size="large" variant="contained" {...exploreBtn} />
          </Stack>
        </Stack>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/clientele/Clientele2.tsx
```tsx
'use client';

// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ClienteleListProps } from '@/types/clientele';

interface Props {
  title?: string;
  clienteleList: ClienteleListProps[];
}

/***************************  CLIENTELE - 2  ***************************/

export default function Clientele2({ title, clienteleList }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.2
        }}
      >
        <Stack sx={{ gap: 2.5 }}>
          {title && (
            <Typography variant="subtitle2" align="center" sx={{ color: 'text.secondary' }}>
              {title}
            </Typography>
          )}

          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              gap: 3,
              '& svg': { opacity: 0.4, transition: 'all 0.5s ease-in-out', '&:hover': { opacity: 1, transition: 'all 0.5s ease-in-out' } }
            }}
          >
            {clienteleList.map((item, index) => (
              <GraphicsImage key={index} {...item} />
            ))}
          </Stack>
        </Stack>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/benefit/Benefit6.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps, BlockProps } from '@/types/benefit';

/***************************  BENEFIT - COUNTER TEXT  ***************************/

function CounterCard({ counter, caption, defaultUnit }: BlockProps) {
  return (
    <Stack
      direction={{ xs: 'row', sm: 'column' }}
      sx={{ gap: { xs: 1.5, sm: 1 }, alignItems: 'center', px: { sm: 1, md: 4 }, pt: { xs: 1.5, sm: 0 }, pb: { xs: 2, sm: 0 } }}
    >
      <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
        <Typography component="div" variant="h1">
          {counter}
        </Typography>
        <Typography component="div" variant="h3" sx={{ color: 'text.secondary', mb: { xs: 0.25, md: 0.625 } }}>
          {defaultUnit}
        </Typography>
      </Stack>
      <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>{caption}</Typography>
    </Stack>
  );
}

/***************************  BENEFIT - 6  ***************************/

export default function Benefit6({ bgImage, heading, caption, blockDetail }: BenefitProps): JSX.Element {
  const theme = useTheme();

  const overlay =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(80.81% 80.81% at 50% 39.56%, ${alpha(theme.palette.grey[100], 0)} 0%, ${alpha(theme.palette.grey[100], 0.35)} 100%)`
      : `radial-gradient(80.81% 80.81% at 50% 39.56%, ${alpha(theme.palette.grey[100], 0)} 0%, ${alpha(theme.palette.grey[100], 0.7)} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
        <Grid size={{ xs: 12, sm: 4, md: 5 }}>
          <GraphicsCard {...(bgImage && { overLay: overlay, bgImage })} sx={{ height: { xs: 240, sm: 1 } }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 7 }}>
          <Typeset {...{ heading, caption }} />
          <Grid container sx={{ pt: { xs: 1.5, sm: 5, md: 6 } }}>
            {blockDetail.map((detail, index) => (
              <Grid key={index} size={{ xs: 12, sm: 4 }}>
                <Stack direction={{ sm: 'row' }} sx={{ height: 1 }}>
                  {index > 0 && (
                    <Divider
                      flexItem
                      sx={{
                        height: 'auto',
                        width: 'auto',
                        /**
                         * Sets the border orientation of the divider based on the screen size.
                         * - If the screen size is small, the orientation is 'horizontal'.
                         * - If the screen size is medium or large, the orientation 'vertical'.
                         * orientation={!downSM ? 'vertical' : 'horizontal'}
                         */
                        borderRightWidth: { xs: 'unset', sm: 'thin' },
                        borderBottomWidth: { xs: 'thin', sm: 0 }
                      }}
                    />
                  )}
                  <CounterCard {...detail} />
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/benefit/Benefit7.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GradientFab from '@/components/GradientFab';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { ThemeMode, ThemeDirection } from '@/config';
import Typeset from '@/components/Typeset';

// @assets
import Pattern1 from '@/images/graphics/Pattern1';
import Pattern2 from '@/images/graphics/Pattern2';

// @types
import { BenefitProps, BlockProps } from '@/types/benefit';
import { BgImageProps } from '@/types/graphics';

interface Props extends BenefitProps {
  bgImage1?: BgImageProps;
  bgImage2?: BgImageProps;
}

/***************************  BENEFIT - COUNTER TEXT  ***************************/

function CounterText({ count, unit }: { count: number; unit?: string }) {
  return (
    <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
      <Typography component="div" variant="h1">
        {count}
      </Typography>
      {unit && (
        <Typography component="div" variant="h3" sx={{ color: 'text.secondary', mb: { xs: 0.25, md: 0.625 } }}>
          {unit}
        </Typography>
      )}
    </Stack>
  );
}

/***************************  BENEFIT - COUNTER CARD  ***************************/

function CounterCard({ counter, caption, defaultUnit }: BlockProps) {
  return (
    <GraphicsCard sx={{ p: { xs: 2, sm: 3 }, height: 170 }}>
      <Stack sx={{ gap: 1 }}>
        <CounterText count={counter} unit={defaultUnit} />
        <Typography sx={{ color: 'text.secondary' }}>{caption}</Typography>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  BENEFIT - CARD TEXT  ***************************/

function CardText({ counter, caption, defaultUnit }: BlockProps) {
  return (
    <Stack sx={{ gap: { xs: 1.5, sm: 1 }, pt: { xs: 1.5, sm: 0 }, pb: { xs: 2, sm: 0 }, position: 'relative' }}>
      <CounterText count={counter} unit={defaultUnit} />
      <Typography sx={{ color: 'text.secondary' }}>{caption}</Typography>
    </Stack>
  );
}

/***************************  BENEFIT - 7  ***************************/

export default function Benefit7({ bgImage1, bgImage2, heading, caption, blockDetail }: Props): JSX.Element {
  const theme = useTheme();

  const sectionSpacing = 1.5;
  const graphicsStyle = { pt: { xs: 2, sm: 3 }, pl: { xs: 2, sm: 3 }, position: 'relative', height: { xs: 216, sm: 267 } };

  const overlay =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(80.81% 80.81% at 50% 39.56%, ${alpha(theme.palette.grey[100], 0)} 0%, ${alpha(theme.palette.grey[100], 0.35)} 100%)`
      : `radial-gradient(80.81% 80.81% at 50% 39.56%, ${alpha(theme.palette.grey[100], 0)} 0%, ${alpha(theme.palette.grey[100], 0.7)} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, md: 4 } }}>
        <Typeset {...{ heading, caption }} />
        <Grid container spacing={sectionSpacing}>
          <Grid size={{ xs: 12, sm: 8 }}>
            <Stack sx={{ gap: sectionSpacing }}>
              <Grid container spacing={sectionSpacing}>
                <Grid size={8}>
                  <GraphicsCard
                    {...(bgImage1 && { overLay: overlay, bgImage: bgImage1 })}
                    sx={{ height: 186, backgroundPositionY: { xs: 25, sm: 13, md: -20 }, backgroundRepeat: 'no-repeat' }}
                  />
                </Grid>
                <Grid size={4}>
                  <GraphicsCard sx={{ height: 1 }}>
                    <Stack
                      sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 1,
                        '& .gradient-fab': { display: 'contents' },
                        '& svg.tabler-cloud-up': { width: { xs: 26, sm: 36 }, height: { xs: 26, sm: 36 } }
                      }}
                    >
                      <GradientFab type="star" icon={<SvgIcon name="tabler-cloud-up" />} />
                    </Stack>
                  </GraphicsCard>
                </Grid>
              </Grid>
              <Grid container spacing={sectionSpacing}>
                <Grid size={6}>
                  <Grid container spacing={sectionSpacing}>
                    <Grid size={12}>
                      <CounterCard {...blockDetail[0]} />
                    </Grid>
                    <Grid size={12}>
                      <CounterCard {...blockDetail[1]} />
                    </Grid>
                  </Grid>
                </Grid>
                {bgImage2 && (
                  <Grid size={6}>
                    <GraphicsCard bgImage={bgImage2} sx={{ height: { xs: 1, sm: 348 } }} />
                  </Grid>
                )}
              </Grid>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Grid container spacing={sectionSpacing}>
              <Grid size={{ xs: 6, sm: 12 }}>
                <GraphicsCard sx={graphicsStyle}>
                  <Box
                    sx={{
                      height: { xs: 119, sm: 159, md: 265, lg: 226 },
                      position: 'absolute',
                      bottom: { xs: -26, sm: -28, md: -70, lg: -35 },
                      right: { xs: -70, sm: -88, md: -128 },
                      width: 1,
                      '& svg': { width: 1, height: 1 }
                    }}
                  >
                    <Pattern1 fill={alpha(theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 50 : 300], 0.2)} />
                  </Box>
                  <CardText {...blockDetail[2]} />
                </GraphicsCard>
              </Grid>
              <Grid size={{ xs: 6, sm: 12 }}>
                <GraphicsCard sx={graphicsStyle}>
                  <Box
                    sx={{
                      height: { xs: 137, md: 177, lg: 226 },
                      position: 'absolute',
                      bottom: { xs: -35, sm: -27, md: -50, lg: -42 },
                      right: { xs: -50, sm: -76 },
                      width: 1,
                      '& svg': { width: 1, height: 1 }
                    }}
                  >
                    <Pattern2 fill={alpha(theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 50 : 300], 0.2)} />
                  </Box>
                  <CardText {...blockDetail[3]} />
                </GraphicsCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/benefit/Benefit8.tsx
```tsx
'use client';

// @mui
import Grid from '@mui/material/Grid2';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GradientFab from '@/components/GradientFab';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps } from '@/types/benefit';

/***************************  BENEFIT - 8  ***************************/

export default function Benefit8({ heading, caption, blockDetail }: BenefitProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 4, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard sx={{ height: 1 }}>
              <Stack
                sx={{
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 3,
                  height: 1,
                  p: { xs: 2, md: 5 },
                  '& .gradient-fab': { display: 'contents' },
                  '& svg.tabler-cloud-up': { width: { xs: 26, sm: 36 }, height: { xs: 26, sm: 36 } }
                }}
              >
                <GradientFab type="star" icon={<SvgIcon name="tabler-cloud-up" />} />
                <Typeset {...{ heading, caption }} />
              </Stack>
            </GraphicsCard>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.6
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ p: { xs: 2, md: 5 } }}>
                {blockDetail.map((item, index) => (
                  <Stack key={index} direction="row" sx={{ alignItems: 'center', py: { xs: 1.5, sm: 2.5 }, gap: { xs: 1, md: 1.5 } }}>
                    <Stack sx={{ width: 1, gap: 1 }}>
                      <Typography variant="h4" sx={{ color: 'text.secondary' }}>
                        {item.caption}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={item.progress}
                        rel="noopener noreferrer"
                        aria-label="progress"
                        sx={{
                          height: 6,
                          borderRadius: 5,
                          [`&.${linearProgressClasses.colorPrimary}`]: {
                            bgcolor: 'grey.400'
                          },
                          [`& .${linearProgressClasses.bar}`]: {
                            borderRadius: 6,
                            bgcolor: 'primary.main'
                          }
                        }}
                      />
                    </Stack>
                    <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                      <Typography component="div" variant="h2">
                        {item.counter}
                      </Typography>
                      <Typography component="div" variant="h3" sx={{ color: 'text.secondary', mb: { xs: 0.25, md: 0.625 } }}>
                        {item.defaultUnit}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </GraphicsCard>
          </motion.div>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/benefit/Benefit5.tsx
```tsx
'use client';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps } from '@/types/benefit';

/***************************  BENEFIT - 5  ***************************/

export default function Benefit5({ heading, caption, blockDetail }: BenefitProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
        >
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { alignItems: 'center', textAlign: 'center' } },
              captionProps: { sx: { width: { xs: 1, sm: '80%', md: '65%' } } }
            }}
          />
        </motion.div>
        <Grid container spacing={1.5}>
          {blockDetail.map((item, index) => (
            <Grid key={index} size={{ xs: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: item.animationDelay,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                style={{ height: '100%' }}
              >
                <GraphicsCard sx={{ p: { xs: 2, sm: 2.25, md: 3 }, height: 1 }}>
                  <Stack sx={{ gap: 0.5, alignItems: 'center' }}>
                    <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                      <Typography component="div" variant="h1">
                        {item.counter}
                      </Typography>
                      <Typography component="div" variant="h3" sx={{ color: 'text.secondary', mb: { xs: 0.25, md: 0.625 } }}>
                        {item.defaultUnit}
                      </Typography>
                    </Stack>
                    <Typography align="center" sx={{ color: 'text.secondary' }}>
                      {item.caption}
                    </Typography>
                  </Stack>
                </GraphicsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/benefit/Benefit4.tsx
```tsx
// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps } from '@/types/benefit';

/***************************  BENEFIT - 4  ***************************/

export default function Benefit4({ heading, caption, exploreBtn, blockDetail }: BenefitProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ height: 1, p: { xs: 2, sm: 4, md: 7 } }}>
        <Grid container spacing={{ xs: 3, md: 7 }}>
          <Grid size={{ xs: 12, sm: 5 }}>
            <Stack sx={{ gap: { xs: 1.5, sm: 3 }, alignItems: 'flex-start', justifyContent: 'space-between', height: 1 }}>
              <Typeset {...{ heading, caption, stackProps: { sx: { gap: { xs: 1, sm: 1.5 } } } }} />
              {exploreBtn && <Button color="primary" size="large" variant="contained" {...exploreBtn} />}
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 7 }}
            container
            columnSpacing={{ xs: 2, md: 3 }}
            rowSpacing={{ xs: 1.75, sm: 5.5, md: 4.25 }}
            sx={{ justifyContent: 'space-between', height: 1 }}
          >
            {blockDetail.map((item, index) => (
              <Grid key={index} size={6}>
                <Stack sx={{ gap: 1 }}>
                  <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                    <Typography component="div" variant="h1">
                      {item.counter}
                    </Typography>
                    <Typography component="div" variant="h3" sx={{ color: 'text.secondary', mb: { xs: 0.25, md: 0.625 } }}>
                      {item.defaultUnit}
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary' }}>{item.caption}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/benefit/Benefit3.tsx
```tsx
// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps, BlockProps } from '@/types/benefit';

/***************************  BENEFIT - COUNTER CARD  ***************************/

function CounterCard({ counter, caption, defaultUnit, bgImage }: BlockProps & { bgImage?: string }) {
  return (
    <GraphicsCard {...(bgImage && { overLay: true, bgImage })} sx={{ p: { xs: 3, md: 4 } }}>
      <Stack sx={{ gap: 1, justifyContent: 'center' }}>
        <Stack direction="row">
          <Typography component="div" variant="h1">
            {counter}
          </Typography>
          {defaultUnit && (
            <Typography component="div" variant="h1">
              {defaultUnit}
            </Typography>
          )}
        </Stack>
        <Typography sx={{ color: 'text.secondary' }}>{caption}</Typography>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  BENEFIT - 3  ***************************/

export default function Benefit3({ bgImage, heading, caption, exploreBtn, blockDetail }: BenefitProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 6.5, md: 7.5 }}>
          <GraphicsCard {...(bgImage && { overLay: true, bgImage })} sx={{ height: 1, p: { xs: 3, sm: 4, md: 5 } }}>
            <Stack sx={{ gap: 4, alignItems: 'flex-start', justifyContent: 'space-between', height: 1 }}>
              <Typeset {...{ heading, caption, stackProps: { sx: { gap: { xs: 1, md: 1.5 } } } }} />
              {exploreBtn && <Button color="primary" size="large" variant="contained" {...exploreBtn} />}
            </Stack>
          </GraphicsCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 5.5, md: 4.5 }}>
          <Stack sx={{ gap: 1.5 }}>
            <CounterCard {...blockDetail[0]} />
            <CounterCard {...blockDetail[1]} />
          </Stack>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/benefit/Benefit2.tsx
```tsx
'use client';

// @mui
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps } from '@/types/benefit';

/***************************  BENEFIT - COUNTER BLOCK  ***************************/

function CounterBlock({ counter, caption, defaultUnit }: { counter: number; caption: string; defaultUnit?: string }) {
  return (
    <>
      <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'flex-end' }}>
        <Typography component="div" variant="h1">
          {counter}
        </Typography>
        {defaultUnit && (
          <Typography component="div" variant="h2">
            {defaultUnit}
          </Typography>
        )}
      </Stack>
      <Typography sx={{ color: 'text.secondary' }}>{caption}</Typography>
    </>
  );
}

/***************************  BENEFIT - 2  ***************************/

export default function Benefit2({ bgImage, heading, blockDetail }: BenefitProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5
        }}
      >
        <GraphicsCard {...(bgImage && { overLay: true, bgImage })} sx={{ p: { xs: 3, sm: 4, md: 5 }, backgroundPositionY: '67%' }}>
          <Stack sx={{ gap: { sm: 4, xs: 3 }, alignItems: 'center' }}>
            <Typeset {...{ heading, headingProps: { sx: { maxWidth: 750 }, variant: 'h4' } }} />
            <Stack sx={{ gap: 1.5, width: 1 }}>
              <Stack direction="row" sx={{ justifyContent: 'space-evenly', textAlign: 'center', width: 1 }}>
                <Stack sx={{ gap: 1, maxWidth: { xs: 160, sm: 246 }, justifyContent: 'center' }}>
                  <CounterBlock {...blockDetail[0]} />
                </Stack>

                <Divider orientation="vertical" flexItem sx={{ mx: { xs: 1.5, md: 5 }, my: 0 }} />

                <Stack sx={{ gap: 1, maxWidth: { xs: 160, sm: 246 }, justifyContent: 'center' }}>
                  <CounterBlock {...blockDetail[1]} />
                </Stack>

                <Divider orientation="vertical" flexItem sx={{ mx: { xs: 1.5, md: 5 }, my: 0, display: { xs: 'none', sm: 'block' } }} />
                <Stack sx={{ gap: 1, maxWidth: { xs: 160, sm: 246 }, justifyContent: 'center', display: { xs: 'none', sm: 'block' } }}>
                  <CounterBlock {...blockDetail[2]} />
                </Stack>
              </Stack>

              <Box sx={{ width: 1, display: { xs: 'block', sm: 'none' } }}>
                <Divider sx={{ marginBottom: 1.5 }} />
                <Stack sx={{ gap: 1, textAlign: 'center', maxWidth: { xs: 360, sm: 246 }, margin: 'auto' }}>
                  <CounterBlock {...blockDetail[2]} />
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/about/About3.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface ListItem {
  title: string;
}

interface Props {
  heading: string;
  image: ImageCommonProps;
  description: string;
  list: ListItem[];
}

/***************************  ABOUT - 3  ***************************/

export default function About3({ heading, image, description, list }: Props) {
  const theme = useTheme();

  const grey100 = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(71.13% 28.87% at 50% 50.07%, ${alpha(grey100, 0)} 0%, ${grey100} 100%)`
      : `radial-gradient(71.13% 71.13% at 50% 50.07%, ${alpha(grey100, 0)} 0%, ${grey100} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            style={{ height: '100%' }}
          >
            <Stack sx={{ justifyContent: 'space-between', gap: { xs: 2.5, sm: 3, md: 4 }, height: 1 }}>
              <Typeset {...{ heading }} />
              <Stack sx={{ gap: { xs: 1, md: 1.5 } }}>
                <Typography>{description}</Typography>
                <Grid container>
                  {list.map((item: ListItem, index: number) => (
                    <Grid key={index} size={{ xs: 12, sm: 6 }}>
                      <Stack direction="row" sx={{ gap: 0.5, alignItems: 'center', py: { xs: 0.5, sm: 0.75 } }}>
                        <SvgIcon name="tabler-rosette-discount-check" stroke={1} color="text.secondary" />
                        <Typography sx={{ color: 'text.secondary' }}>{item.title}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Stack>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.7
            }}
            style={{ height: '100%' }}
          >
            <GraphicsCard sx={{ height: 1 }}>
              <Stack sx={{ justifyContent: 'flex-end', minHeight: { xs: 207, sm: 368, md: 336 }, height: 1 }}>
                <GraphicsImage
                  image={image}
                  sx={{
                    height: { xs: 157, sm: 241, md: 372 },
                    backgroundPositionY: 'top',
                    transform: 'scale(1.1)',
                    transformOrigin: { xs: 'top', sm: 'top' },
                    mb: { xs: -1, md: -4 }
                  }}
                >
                  <Box sx={{ height: 1, background: gradient }} />
                </GraphicsImage>
              </Stack>
            </GraphicsCard>
          </motion.div>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/about/About2.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  title: string;
  caption: string;
  image: ImageCommonProps;
  description: string;
  primaryBtn: ButtonProps;
}

/***************************  ABOUT - 2  ***************************/

export default function About2({ heading, caption, image, description, title, primaryBtn }: Props) {
  const theme = useTheme();
  const cardPadding = { xs: 3, sm: 4, md: 5 };

  const grey100 = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(71.13% 28.87% at 50% 50.07%, ${alpha(grey100, 0)} 0%, ${grey100} 100%)`
      : `radial-gradient(71.13% 71.13% at 50% 50.07%, ${alpha(grey100, 0)} 0%, ${grey100} 100%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { alignItems: 'center' } },
              headingProps: { sx: { textAlign: 'center' } },
              captionProps: { sx: { maxWidth: { xs: 476, md: 614 }, textAlign: 'center' } }
            }}
          />
        </motion.div>
        <Grid container spacing={1.5} direction={{ xs: 'column-reverse', sm: 'row' }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard sx={{ height: 1 }}>
                <Stack sx={{ alignItems: 'flex-start', justifyContent: 'space-between', gap: cardPadding, p: cardPadding, height: 1 }}>
                  <Stack sx={{ gap: { xs: 1, sm: 1.5 } }}>
                    {title && <Typography variant="h4">{title}</Typography>}
                    {description && <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>}
                  </Stack>
                  {primaryBtn && (
                    <ButtonAnimationWrapper>
                      <Button variant="contained" size="large" {...primaryBtn} />
                    </ButtonAnimationWrapper>
                  )}
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.5
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard sx={{ height: 1 }}>
                <Stack sx={{ justifyContent: 'flex-end', minHeight: { xs: 207, sm: 368, md: 336 }, height: 1 }}>
                  <GraphicsImage
                    image={image}
                    sx={{
                      height: { xs: 157, sm: 241, md: 372 },
                      backgroundPositionY: 'top',
                      transform: 'scale(1.12)',
                      transformOrigin: { xs: 'top', sm: 'top' },
                      mb: { xs: -1, md: -4 }
                    }}
                  >
                    <Box sx={{ height: 1, background: gradient }} />
                  </GraphicsImage>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/benefit/Benefit1.tsx
```tsx
'use client';

// @mui
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import Counter from '@/components/Counter';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { BenefitProps } from '@/types/benefit';

/***************************  BENEFIT - COUNTER BLOCK  ***************************/

function CounterBlock({ counter, caption, defaultUnit }: { counter: number; caption: string; defaultUnit?: string }) {
  return (
    <Stack sx={{ gap: 1, maxWidth: { xs: 160, sm: 246 }, justifyContent: 'center' }}>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Counter value={counter} />
        {defaultUnit && (
          <Typography component="div" variant="h1">
            {defaultUnit}
          </Typography>
        )}
      </Stack>
      <Typography sx={{ color: 'text.secondary' }}>{caption}</Typography>
    </Stack>
  );
}

/***************************  BENEFIT - 1  ***************************/

export default function Benefit1({ heading, caption, bgImage, blockDetail }: BenefitProps): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5
        }}
      >
        <GraphicsCard {...(bgImage && { overLay: true, bgImage })} sx={{ p: { xs: 2.5, sm: 6, md: 8 }, backgroundPositionY: '67%' }}>
          <Stack sx={{ gap: { xs: 2, sm: 3 }, textAlign: 'center' }}>
            <Typeset
              {...{ heading, caption, stackProps: { sx: { alignItems: 'center', gap: 0.5 } }, captionProps: { sx: { maxWidth: 750 } } }}
            />
            <Stack direction="row" sx={{ justifyContent: 'center', py: { xs: 3, sm: 2, md: 4 } }}>
              <CounterBlock
                {...{ counter: blockDetail[0].counter, caption: blockDetail[0].caption, defaultUnit: blockDetail[0].defaultUnit }}
              />
              <Divider orientation="vertical" flexItem sx={{ mx: { xs: 1.5, sm: 3 }, my: 0 }} />
              <CounterBlock
                {...{ counter: blockDetail[1].counter, caption: blockDetail[1].caption, defaultUnit: blockDetail[1].defaultUnit }}
              />
            </Stack>
          </Stack>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/auth/Register.tsx
```tsx
// @next
import NextLink from 'next/link';

// @mui
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { AuthRegister, AuthSocial, Copyright } from '@/components/auth';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import Typeset from '@/components/Typeset';

import { SocialTypes } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Circles from '@/images/Circles';

interface Props {
  heading: string;
  caption?: string;
}

/***************************  REGISTER  ***************************/

export default function Register({ heading, caption }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Stack sx={{ minHeight: { md: 800 }, justifyContent: 'space-between', gap: { xs: 3, sm: 4 }, py: SECTION_COMMON_PY }}>
        <Stack sx={{ alignItems: 'center', position: 'relative' }}>
          <Box
            sx={{
              width: 1,
              position: 'absolute',
              top: { xs: '-29%', sm: '-50%', md: '-45%' },
              left: '50%',
              zIndex: -1,
              transform: { xs: 'translateX(-50%) scale(1.5)', md: 'translateX(-50%) scale(1)' },
              height: { xs: 500, sm: 750 },
              '& svg': { width: 1, height: 1 }
            }}
          >
            <Circles />
          </Box>
          <Box sx={{ bgcolor: 'grey.100', p: 1.5, borderRadius: 4, mb: 1.5 }}>
            <LogoSection isIcon={true} />
          </Box>
          <Typeset {...{ heading, caption }} stackProps={{ sx: { textAlign: 'center' } }} captionProps={{ variant: 'body1' }} />

          <Box sx={{ width: 1, maxWidth: 458, mt: 6 }}>
            <AuthRegister inputSx={{ bgcolor: 'background.paper' }} />
            <Typography sx={{ textAlign: 'center', mt: 2.5, color: 'text.secondary' }}>
              Don’t have an account?{' '}
              <Link
                component={NextLink}
                underline="hover"
                variant="subtitle1"
                href=""
                sx={{ '&:hover': { color: 'primary.dark' } }}
                rel="noopener noreferrer"
                aria-label="sign up"
              >
                Sign Up
              </Link>
            </Typography>
            <Divider sx={{ my: { xs: 4, sm: 5 } }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', px: 1.25 }}>
                Continue with email
              </Typography>
            </Divider>
            <AuthSocial type={SocialTypes.HORIZONTAL} />
          </Box>
        </Stack>
        <Box>
          <Copyright />
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/auth/OtpVerification.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { Copyright } from '@/components/auth';
import AuthOtpVerification from '@/components/auth/AuthOtpVerification';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';

import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import BackgroundCircle from '@/components/BackgroundCircle';

interface Props {
  heading: string;
  caption: { text: string; email: string };
}

/***************************  SECTIONS - OTP VERIFICATION  ***************************/

export default function OtpVerification({ heading, caption }: Props): JSX.Element {
  const theme = useTheme();

  const resendCode = () => {
    console.log('OtpVerification: resend code');
  };

  return (
    <ContainerWrapper sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Stack sx={{ height: 1, minHeight: '100vh', justifyContent: 'space-between', gap: 6, py: SECTION_COMMON_PY }}>
        <Stack sx={{ alignItems: 'center', position: 'relative' }}>
          <BackgroundCircle />
          <Stack sx={{ bgcolor: 'grey.100', p: 1.5, borderRadius: 4, mb: 1.5, position: 'relative', zIndex: 1 }}>
            <LogoSection isIcon={true} />
          </Stack>
          <Stack sx={{ textAlign: 'center', gap: 1, position: 'relative', zIndex: 1 }}>
            <Typography variant="h2">{heading}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {caption.text}{' '}
              <Typography component="span" sx={{ color: 'primary.main' }}>
                {caption.email}
              </Typography>
            </Typography>
          </Stack>
          <Box sx={{ width: 1, maxWidth: 458, mt: 6, position: 'relative', zIndex: 1 }}>
            <AuthOtpVerification />
            <Box sx={{ textAlign: 'center', mt: 2.5 }}>
              <Typography
                component="span"
                variant="subtitle1"
                tabIndex={0}
                onClick={resendCode}
                sx={{
                  color: 'primary.main',
                  cursor: 'pointer',
                  '&:focus-visible': generateFocusVisibleStyles(theme.palette.primary.main),
                  '&:hover': { color: 'primary.dark', textDecoration: 'underline' }
                }}
              >
                Resend Code
              </Typography>
            </Box>
          </Box>
        </Stack>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Copyright />
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/about/About1.tsx
```tsx
'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  description1: string;
  description2: string;
  image: ImageCommonProps;
}

/***************************  ABOUT - 1  ***************************/

export default function About1({ heading, image, description1, description2 }: Props) {
  const theme = useTheme();

  const grey100 = theme.palette.grey[100];
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(71.13% 28.87% at 50% 50.07%, ${alpha(grey100, 0)} 0%, ${grey100} 75%)`
      : `radial-gradient(71.13% 71.13% at 50% 50.07%, ${alpha(grey100, 0)} 0%, ${grey100} 75%)`;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ alignItems: 'center', gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            {heading}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.3
          }}
        >
          <GraphicsCard>
            <Box sx={{ px: { xs: 3, sm: 5, md: 8 }, py: { xs: 3, sm: 4, md: 5 }, position: 'relative', zIndex: 1 }}>
              <Grid container spacing={{ xs: 2, sm: 3, md: 19.5 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography sx={{ color: 'text.secondary' }}>{description1}</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography sx={{ color: 'text.secondary' }}>{description2}</Typography>
                </Grid>
              </Grid>
            </Box>
            <GraphicsImage
              image={image}
              sx={{
                height: { xs: 157, sm: 241, md: 372 },
                backgroundPositionY: 'top',
                transform: 'scale(1.15)',
                transformOrigin: { xs: 'top', sm: 'bottom' }
              }}
            >
              <Box sx={{ height: 1, background: gradient }} />
            </GraphicsImage>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/auth/ForgotPassword.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { Copyright } from '@/components/auth';
import AuthForgotPassword from '@/components/auth/AuthForgotPassword';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import Typeset from '@/components/Typeset';

import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import BackgroundCircle from '@/components/BackgroundCircle';

interface Props {
  heading: string;
  caption?: string;
}

/***************************  SECTIONS - FORGOT PASSWORD  ***************************/

export default function ForgotPassword({ heading, caption }: Props): JSX.Element {
  const theme = useTheme();

  const resendCode = () => {
    console.log('ForgotPassword: resend code');
  };

  return (
    <ContainerWrapper sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Stack sx={{ height: 1, minHeight: '100vh', justifyContent: 'space-between', gap: 6, py: SECTION_COMMON_PY }}>
        <Stack sx={{ alignItems: 'center', position: 'relative' }}>
          <BackgroundCircle />
          <Stack sx={{ bgcolor: 'grey.100', p: 1.5, borderRadius: 4, mb: 1.5 }}>
            <LogoSection isIcon={true} />
          </Stack>
          <Typeset
            {...{ heading, caption }}
            stackProps={{ sx: { textAlign: 'center', gap: 1, position: 'relative', zIndex: 1 } }}
            captionProps={{ variant: 'body1', sx: { maxWidth: 458 } }}
          />
          <Box sx={{ width: 1, maxWidth: 458, mt: 6, position: 'relative', zIndex: 1 }}>
            <AuthForgotPassword inputSx={{ bgcolor: 'background.paper' }} />
            <Typography sx={{ textAlign: 'center', mt: 2.5, color: 'text.secondary' }}>
              Didn’t receive code?{' '}
              <Typography
                component="span"
                variant="subtitle1"
                tabIndex={0}
                onClick={resendCode}
                sx={{
                  color: 'primary.main',
                  cursor: 'pointer',
                  '&:focus-visible': generateFocusVisibleStyles(theme.palette.primary.main),
                  '&:hover': { color: 'primary.dark', textDecoration: 'underline' }
                }}
              >
                Resend
              </Typography>
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Copyright />
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/auth/NewPassword.tsx
```tsx
// @mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { Copyright } from '@/components/auth';
import AuthNewPassword from '@/components/auth/AuthNewPassword';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import BackgroundCircle from '@/components/BackgroundCircle';

interface Props {
  heading: string;
  caption?: string;
}

/***************************  SECTIONS - NEW PASSWORD  ***************************/

export default function NewPassword({ heading, caption }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Stack sx={{ height: 1, minHeight: '100vh', justifyContent: 'space-between', gap: 6, py: SECTION_COMMON_PY }}>
        <Stack sx={{ alignItems: 'center', position: 'relative' }}>
          <BackgroundCircle />
          <Stack sx={{ bgcolor: 'grey.100', p: 1.5, borderRadius: 4, mb: 1.5, position: 'relative', zIndex: 1 }}>
            <LogoSection isIcon={true} />
          </Stack>
          <Typeset
            {...{ heading, caption }}
            stackProps={{ sx: { textAlign: 'center', gap: 1, position: 'relative', zIndex: 1 } }}
            captionProps={{ variant: 'body1', sx: { maxWidth: 458 } }}
          />
          <Box sx={{ width: 1, maxWidth: 458, mt: 6, position: 'relative', zIndex: 1 }}>
            <AuthNewPassword inputSx={{ bgcolor: 'background.paper' }} />
          </Box>
        </Stack>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Copyright />
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/navbar/navbar-content/NavbarContent9.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import { MenuPopper, NavMenu, NavMenuDrawer, NavPrimaryButton, NavSecondaryButton, Customization } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 9  ***************************/

export default function NavbarContent9({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
      <Stack direction="row" sx={{ alignItems: 'center', gap: 3 }}>
        <LogoSection isIcon={true} />
        {!downMD && navItems && (
          <Box>
            <NavMenu {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
          </Box>
        )}
      </Stack>
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
        {customization && <Customization />}
        {!downSM && (
          <>
            {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
            {primaryBtn && (
              <ButtonAnimationWrapper>
                <NavPrimaryButton {...primaryBtn} />
              </ButtonAnimationWrapper>
            )}
          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 24}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0 }
              }}
            >
              <ContainerWrapper>
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
                  </Box>
                )}
                {downSM && (
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1, px: 5, py: 2.5, mx: -5, bgcolor: 'grey.100' }}>
                    {secondaryBtn && <NavSecondaryButton fullWidth {...secondaryBtn} />}
                    {primaryBtn && (
                      <ButtonAnimationWrapper style={{ width: '100%' }}>
                        <NavPrimaryButton fullWidth {...primaryBtn} />
                      </ButtonAnimationWrapper>
                    )}
                  </Stack>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/navbar/navbar-content/NavbarContent7.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 7  ***************************/

export default function NavbarContent7({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
      <Logo />
      <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
        {navItems && !downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <NavMenu {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
          </Box>
        )}
        {!downSM && (
          <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
            {secondaryBtn && <NavSecondaryButton variant="text" {...secondaryBtn} />}
            {primaryBtn && (
              <NavPrimaryButton
                variant="text"
                endIcon={<SvgIcon name="tabler-arrow-narrow-right" size={16} />}
                {...primaryBtn}
                sx={{ minWidth: 105, px: 2, ...(primaryBtn.sx && { ...primaryBtn.sx }) }}
              />
            )}
          </Stack>
        )}
        {customization && <Customization />}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 25}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0 }
              }}
            >
              <ContainerWrapper>
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
                  </Box>
                )}
                {downSM && (
                  <>
                    <Divider />
                    <Stack direction="row" sx={{ gap: 1, alignItems: 'center', my: 1.25 }}>
                      {secondaryBtn && <NavSecondaryButton fullWidth {...secondaryBtn} />}
                      {primaryBtn && (
                        <NavPrimaryButton
                          fullWidth
                          variant="text"
                          endIcon={<SvgIcon name="tabler-arrow-narrow-right" size={16} stroke={2.5} />}
                          {...primaryBtn}
                        />
                      )}
                    </Stack>
                  </>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/navbar/navbar-content/NavbarContent5.tsx
```tsx
'use client';

import { useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton, SearchInput } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 5  ***************************/

export default function NavbarContent5({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2, width: 1 }}>
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'flex-end', gap: 3 }}>
        <Logo />
        {navItems && !downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <NavMenu {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
          </Box>
        )}
      </Stack>
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 }, alignItems: 'center' }}>
        {!downSM && (
          <Stack
            direction="row"
            sx={{
              height: 40,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
              borderRadius: 25,
              '&:hover': { borderColor: 'primary.main' },
              ':focus-within': { outline: 1, outlineColor: 'primary.main', outlineOffset: 0 }
            }}
          >
            <IconButton
              rel="noopener noreferrer"
              aria-label="search"
              size="small"
              sx={{ width: 48, height: 38, '&.Mui-focusVisible': { outline: 'none' } }}
              color="primary"
              onClick={handleChange}
              tabIndex={checked ? -1 : 0}
            >
              <SvgIcon name="tabler-search" size={18} stroke={2} />
            </IconButton>
            <Collapse orientation="horizontal" in={checked} sx={{ '& .MuiCollapse-wrapperInner': { width: 124 } }}>
              <InputBase
                placeholder="Search here"
                sx={{
                  ...theme.typography.body2,
                  color: 'text.secondary',
                  '&.MuiInputBase-root': { p: '6px 8px', height: 40 },
                  '& .MuiInputBase-input': { p: 0 }
                }}
                slotProps={{ input: { 'aria-label': 'Search area' } }}
                size="small"
              />
            </Collapse>
          </Stack>
        )}
        <Stack direction="row" sx={{ alignItems: 'center', gap: { xs: 1, md: 1.5 } }}>
          {customization && <Customization />}
          {!downSM && (
            <>
              {secondaryBtn && <NavSecondaryButton {...secondaryBtn} sx={{ px: 2, ...(secondaryBtn?.sx && { ...secondaryBtn.sx }) }} />}
              {primaryBtn && (
                <NavPrimaryButton {...primaryBtn} sx={{ minWidth: 105, px: 2, ...(primaryBtn?.sx && { ...primaryBtn.sx }) }} />
              )}
            </>
          )}
        </Stack>
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0, borderColor: 'primary.light' }
              }}
            >
              <ContainerWrapper>
                {downSM && <SearchInput sx={{ mt: 1 }} />}
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
                  </Box>
                )}
                {downSM && (
                  <>
                    <Divider />
                    <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, my: 2.5 }}>
                      {secondaryBtn && <NavSecondaryButton fullWidth {...secondaryBtn} />}
                      {primaryBtn && <NavPrimaryButton fullWidth {...primaryBtn} />}
                    </Stack>
                  </>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/navbar/navbar-content/NavbarContent8.tsx
```tsx
'use client';

import { useEffect, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps, NavItemProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 8  ***************************/

export default function NavbarContent8({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [menuItems1, setMenuItems1] = useState<NavItemProps[]>([]);
  const [menuItems2, setMenuItems2] = useState<NavItemProps[]>([]);

  // Splits navItems into two arrays, menuItems1 and menuItems2, for display purposes
  useEffect(() => {
    if (navItems?.length) {
      const length = navItems.length;
      const mid = Math.ceil(length / 2);
      const part1 = navItems.slice(0, mid);
      const part2 = navItems.slice(mid);
      setMenuItems1(part1);
      setMenuItems2(part2);
    }
  }, [navItems]);

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        justifyContent: { xs: 'space-between', sm: 'center' },
        '& .MuiButtonBase-root': { px: { sm: 2, md: 3 }, '&[position="relative"]': { pr: { sm: 4, md: 5 } } }
      }}
    >
      {downSM && <LogoSection isIcon={true} />}
      {!downSM && (
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', gap: 0.75 }}>
          {navItems && menuItems1.map((item) => <NavMenu key={item.id} navItems={[item]} menuTextColor={theme.palette.text.secondary} />)}
          <Box sx={{ mx: { sm: 1.5, md: 7.25 } }}>
            <LogoSection isIcon={true} />
          </Box>
          {navItems && menuItems2.map((item) => <NavMenu key={item.id} navItems={[item]} menuTextColor={theme.palette.text.secondary} />)}
          {primaryBtn && <NavPrimaryButton variant="text" {...primaryBtn} />}
          {secondaryBtn && <NavSecondaryButton variant="text" {...secondaryBtn} />}
          {customization && <Customization />}
        </Stack>
      )}
      {downSM && (
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1.25 }}>
          {customization && <Customization />}
          <MenuPopper
            offset={12}
            toggleProps={{
              children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
              color: 'inherit',
              sx: { minWidth: 40, width: 40, height: 40, p: 0 }
            }}
          >
            <ContainerWrapper>
              {navItems && (
                <Box sx={{ mx: -2 }}>
                  <NavMenuDrawer {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
                </Box>
              )}
              <Divider />
              <Stack direction="row" sx={{ gap: 1, alignItems: 'center', my: 1.25 }}>
                {secondaryBtn && <NavSecondaryButton fullWidth {...secondaryBtn} />}
                {primaryBtn && <NavPrimaryButton variant="text" fullWidth {...primaryBtn} />}
              </Stack>
            </ContainerWrapper>
          </MenuPopper>
        </Stack>
      )}
    </Stack>
  );
}

```

  

File: src/blocks/navbar/navbar-content/NavbarContent6.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton, SocialIcons } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 6  ***************************/

export default function NavbarContent6({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  // Remove the last item from navItems
  const navItemsWithoutLast = navItems ? [...navItems] : []; // Create a copy of navItems
  if (!downSM) {
    navItemsWithoutLast.pop(); // Remove the last item
  }

  const lastItem = navItems?.slice(-1)[0];

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
      {downMD && <Logo />}
      {navItems && !downMD && (
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 0.75, width: 1 }}>
          <Box>
            <NavMenu {...{ navItems: navItemsWithoutLast, menuTextColor: theme.palette.text.secondary }} />
          </Box>
          <Logo sx={{ mx: 1.5 }} />
          <Stack direction="row" sx={{ alignItems: 'center', gap: 0.75 }}>
            {lastItem && <NavMenu {...{ navItems: [lastItem], menuTextColor: theme.palette.text.secondary }} />}
            <SocialIcons sx={{ gap: 0.75 }} />
            {customization && <Customization />}
            {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
            {primaryBtn && (
              <ButtonAnimationWrapper>
                <NavPrimaryButton {...primaryBtn} />
              </ButtonAnimationWrapper>
            )}
          </Stack>
        </Stack>
      )}
      {downMD && (
        <Box sx={{ display: 'flex' }}>
          {!downSM && (
            <Stack direction="row" sx={{ alignItems: 'center', gap: 0.75, height: 40 }}>
              {lastItem && <NavMenu {...{ navItems: [lastItem], menuTextColor: theme.palette.text.secondary }} />}
              <SocialIcons sx={{ gap: 0.75 }} />
              {customization && <Customization />}
              {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
              {primaryBtn && (
                <ButtonAnimationWrapper>
                  <NavPrimaryButton {...primaryBtn} />
                </ButtonAnimationWrapper>
              )}
            </Stack>
          )}
          <MenuPopper
            offset={downSM ? 12 : 16}
            toggleProps={{
              children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
              color: 'inherit',
              sx: { minWidth: 40, width: 40, height: 40, p: 0 }
            }}
          >
            <ContainerWrapper>
              {navItems && (
                <Box sx={{ mx: -2 }}>
                  <NavMenuDrawer {...{ navItems: navItemsWithoutLast, menuTextColor: theme.palette.text.secondary }} />
                </Box>
              )}
              {downSM && (
                <>
                  <Divider />
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: { xs: 1, md: 1.5 }, py: 2.5, width: 1 }}>
                    <SocialIcons sx={{ gap: 0.75 }} />
                    <Stack direction="row" sx={{ alignItems: 'center', gap: 0.75 }}>
                      {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
                      {primaryBtn && (
                        <ButtonAnimationWrapper>
                          <NavPrimaryButton {...primaryBtn} />
                        </ButtonAnimationWrapper>
                      )}
                    </Stack>
                  </Stack>
                </>
              )}
            </ContainerWrapper>
          </MenuPopper>
        </Box>
      )}
    </Stack>
  );
}

```

  

File: src/blocks/navbar/navbar-content/NavbarContent4.tsx
```tsx
'use client';

import { useEffect, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps, NavItemProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 4  ***************************/

export default function NavbarContent4({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [menuItems1, setMenuItems1] = useState<NavItemProps[]>([]);
  const [menuItems2, setMenuItems2] = useState<NavItemProps[]>([]);

  // Splits navItems into two arrays, menuItems1 and menuItems2, for display purposes
  useEffect(() => {
    if (navItems?.length) {
      const length = navItems.length;
      const mid = Math.ceil(length / 2);
      const part1 = navItems.slice(0, mid);
      const part2 = navItems.slice(mid);
      setMenuItems1(part1);
      setMenuItems2(part2);
    }
  }, [navItems]);

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: { xs: 'space-between', sm: 'center' }, width: 1 }}>
      {downSM && <LogoSection isIcon={true} />}
      {navItems && !downSM && (
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: { xs: 'space-between', sm: 'center' }, gap: 0.75 }}>
          <>
            {menuItems1.map((item) => (
              <NavMenu key={item.id} navItems={[item]} menuTextColor={theme.palette.text.secondary} />
            ))}
            <Box sx={{ mx: { sm: 1.5, md: 7.25 } }}>
              <LogoSection isIcon={true} />
            </Box>
            {menuItems2.map((item) => (
              <NavMenu key={item.id} navItems={[item]} menuTextColor={theme.palette.text.secondary} />
            ))}
            <Stack direction="row" sx={{ alignItems: 'center', gap: 0.75 }}>
              {primaryBtn && <NavPrimaryButton variant="text" {...primaryBtn} />}
              {secondaryBtn && <NavSecondaryButton variant="text" {...secondaryBtn} />}
            </Stack>
          </>
        </Stack>
      )}
      <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5 }}>
        {customization && <Customization />}
        {navItems?.length && downSM && (
          <MenuPopper
            offset={12}
            toggleProps={{
              children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
              color: 'inherit',
              sx: { minWidth: 40, width: 40, height: 40, p: 0 }
            }}
          >
            <ContainerWrapper>
              {navItems && (
                <Box sx={{ mx: -2 }}>
                  <NavMenuDrawer {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
                </Box>
              )}
              <Divider />
              <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, my: 1 }}>
                {secondaryBtn && <NavSecondaryButton fullWidth {...secondaryBtn} />}
                {primaryBtn && <NavPrimaryButton fullWidth variant="text" {...primaryBtn} />}
              </Stack>
            </ContainerWrapper>
          </MenuPopper>
        )}
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/navbar/navbar-content/NavbarContent3.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton, SearchInput } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 3  ***************************/

export default function NavbarContent3({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2, width: 1 }}>
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'flex-end', gap: 3 }}>
        <Logo />
        {navItems && !downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <NavMenu {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
          </Box>
        )}
      </Stack>
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 }, alignItems: 'center' }}>
        {!downSM && (
          <>
            <SearchInput sx={{ width: 172 }} />
            {customization && <Customization />}
            {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
            {primaryBtn && (
              <ButtonAnimationWrapper>
                <NavPrimaryButton sx={{ minWidth: 105, px: 2 }} {...primaryBtn} />
              </ButtonAnimationWrapper>
            )}
          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1, ...(!navItems && downMD && { display: { xs: 'flex', sm: 'none' } }) }}>
            {downSM && customization && <Customization />}
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0, ...(downSM && { ml: 1 }) }
              }}
            >
              <ContainerWrapper>
                {downSM && <SearchInput sx={{ mt: 1 }} />}
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
                  </Box>
                )}
                {downSM && (
                  <>
                    <Divider />
                    {(primaryBtn || secondaryBtn) && (
                      <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, my: 2.5 }}>
                        {secondaryBtn && <NavSecondaryButton fullWidth {...secondaryBtn} />}
                        {primaryBtn && (
                          <ButtonAnimationWrapper style={{ width: '100%' }}>
                            <NavPrimaryButton fullWidth {...primaryBtn} />
                          </ButtonAnimationWrapper>
                        )}
                      </Stack>
                    )}
                  </>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/navbar/navbar-content/NavbarContent1.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton, SocialIcons } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 1  ***************************/

export default function NavbarContent1({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
      <Logo />
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
        {navItems && !downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <NavMenu {...{ navItems }} />
          </Box>
        )}

        <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
          {customization && <Customization />}
          {!downSM && (
            <>
              <SocialIcons />
              {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
              {primaryBtn && <NavPrimaryButton {...primaryBtn} />}
            </>
          )}
          {downMD && (
            <Box sx={{ flexGrow: 1, ...(!navItems && { display: { xs: 'flex', sm: 'none' } }) }}>
              <MenuPopper
                offset={downSM ? 12 : 16}
                toggleProps={{
                  children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                  color: 'inherit',
                  sx: { minWidth: 40, width: 40, height: 40, p: 0 }
                }}
              >
                <ContainerWrapper>
                  {navItems && (
                    <>
                      <Box sx={{ mx: -2 }}>
                        <NavMenuDrawer {...{ navItems }} />
                      </Box>
                      {downSM && <Divider />}
                    </>
                  )}
                  {downSM && (
                    <Stack direction="row" sx={{ justifyContent: 'space-between', gap: { xs: 1, md: 1.5 }, py: 2.5, width: 1 }}>
                      <SocialIcons />
                      {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
                      {primaryBtn && <NavPrimaryButton {...primaryBtn} />}
                    </Stack>
                  )}
                </ContainerWrapper>
              </MenuPopper>
            </Box>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/navbar/navbar-content/NavbarContent2.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { Customization, Localization, MenuPopper, NavMenu, NavMenuDrawer, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 2  ***************************/

export default function NavbarContent2({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();

  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
      <Logo />
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
        {!downMD && navItems && (
          <Box sx={{ flexGrow: 1 }}>
            <NavMenu {...{ navItems }} />
          </Box>
        )}
        <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
          {customization && <Customization />}
          {!downSM && (
            <>
              <Localization />
              {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
              {primaryBtn && (
                <ButtonAnimationWrapper>
                  <NavPrimaryButton {...primaryBtn} />
                </ButtonAnimationWrapper>
              )}
            </>
          )}
          {downMD && (
            <Box sx={{ flexGrow: 1, ...(!navItems && downMD && { display: { xs: 'flex', sm: 'none' } }) }}>
              <MenuPopper
                offset={downSM ? 12 : 28}
                toggleProps={{
                  children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                  color: 'inherit',
                  sx: { minWidth: 40, width: 40, height: 40, p: 0 }
                }}
              >
                <ContainerWrapper>
                  {navItems && (
                    <>
                      <Box sx={{ mx: -2 }}>
                        <NavMenuDrawer {...{ navItems }} />
                      </Box>
                      {downSM && <Divider />}
                    </>
                  )}
                  {downSM && (
                    <Stack direction="row" sx={{ justifyContent: 'space-between', gap: { xs: 1, md: 1.5 }, py: 2.5, width: 1 }}>
                      <Localization fullWidth />
                      {secondaryBtn && <NavSecondaryButton {...secondaryBtn} fullWidth />}
                      {primaryBtn && (
                        <ButtonAnimationWrapper style={{ width: '100%' }}>
                          <NavPrimaryButton {...primaryBtn} fullWidth />
                        </ButtonAnimationWrapper>
                      )}
                    </Stack>
                  )}
                </ContainerWrapper>
              </MenuPopper>
            </Box>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/auth/login/Login5.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import { AuthLogin, AuthSocial, Copyright } from '@/components/auth';
import { ProfileCard3 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoMain from '@/components/logo/LogoMain';
import Rating from '@/components/Rating';
import Typeset from '@/components/Typeset';

import { SocialTypes } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { AvatarImageProps } from '@/types/graphics';

export interface TestimonialDataProps {
  ratings?: number;
  review: string;
  profile: {
    avatar: AvatarImageProps;
    name: string;
    role: string;
  };
}

interface Props {
  heading: string;
  caption?: string;
  testimonials: TestimonialDataProps[];
}

/***************************  LOGIN - 5  ***************************/

export default function Login5({ heading, caption, testimonials }: Props): JSX.Element {
  const boxRadius = { sm: 32, md: 40 };
  const boxSpacing = { sm: 4, md: 7 };

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    initialSlide: 0
  };

  const slickStyle = {
    bgcolor: 'grey.50',
    px: { sm: 3, md: 4 },
    py: 4,
    borderRadius: 6,
    '& .slick-slider': { mb: { sm: 4.5 } },
    '& .slick-track': { display: 'flex' },
    '& .slick-slide': { height: 'auto', ' > div': { height: 1, px: 0.75 } },
    '& .slick-dots li': { width: 12, height: 12, mx: 0.5 },
    '& .slick-dots li button': { width: 12, height: 12, p: 0 },
    '& .slick-dots li button:before': { fontSize: 14, width: 12, height: 12, color: 'primary.main' },
    '& .slick-dots li.slick-active button:before': { color: 'primary.main', opacity: 1 }
  };

  return (
    <Box sx={{ position: 'relative', height: { xs: 1, sm: '100vh' } }}>
      <Grid container sx={{ display: { xs: 'none', sm: 'block' }, position: 'absolute', zIndex: -1, height: 1, width: 1 }}>
        <Grid size={{ sm: 6 }} sx={{ height: 1 }}>
          <Box sx={{ bgcolor: 'grey.100', height: 1, borderBottomRightRadius: boxRadius, borderTopRightRadius: boxRadius }} />
        </Grid>
      </Grid>
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY, height: 1 }}>
        <Grid container sx={{ height: 1 }}>
          <Grid size={{ sm: 6 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Stack sx={{ height: 1, justifyContent: 'space-between', px: boxSpacing }}>
              <Link
                component={NextLink}
                href={process.env.NEXT_PUBLIC_BASE_NAME || '/'}
                sx={{ width: 'fit-content', WebkitTapHighlightColor: 'transparent' }}
                rel="noopener noreferrer"
                aria-label="logo"
              >
                <LogoMain />
              </Link>
              <Box sx={{ ...slickStyle }}>
                <Slider {...settings}>
                  {testimonials.map((item, index) => (
                    <Stack key={index} sx={{ alignItems: 'center' }}>
                      <Rating rate={item.ratings} sx={{ justifyContent: 'center' }} />
                      <Typography variant="h3" align="center" sx={{ mt: 2, mb: 5 }}>
                        {item.review}
                      </Typography>
                      <ProfileCard3 {...item.profile} />
                    </Stack>
                  ))}
                </Slider>
              </Box>
              <Copyright />
            </Stack>
          </Grid>
          <Grid size={{ sm: 6 }} sx={{ width: 1 }}>
            <Stack
              sx={{
                height: { xs: 'calc(100vh - 64px)', sm: 1 },
                justifyContent: { xs: 'space-between', sm: 'center' },
                alignItems: { xs: 'center', sm: 'start' },
                px: boxSpacing
              }}
            >
              <Box sx={{ width: 1 }}>
                <Typeset
                  {...{ heading, caption }}
                  stackProps={{ sx: { gap: 1, alignItems: { xs: 'center', sm: 'start' } } }}
                  captionProps={{ variant: 'body1' }}
                />
                <Box sx={{ width: 1, maxWidth: { sm: 458 }, mt: { xs: 4, sm: 6 } }}>
                  <AuthLogin inputSx={{ bgcolor: 'background.paper' }} />
                  <Typography sx={{ textAlign: 'center', mt: 2.5, color: 'text.secondary' }}>
                    Don’t have an account?{' '}
                    <Link
                      component={NextLink}
                      underline="hover"
                      variant="subtitle1"
                      href=""
                      sx={{ '&:hover': { color: 'primary.dark' } }}
                      rel="noopener noreferrer"
                      aria-label="sign-up"
                    >
                      Sign Up
                    </Link>
                  </Typography>
                  <Divider sx={{ my: { xs: 4, sm: 5 } }}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary', px: 1.25 }}>
                      Continue with email
                    </Typography>
                  </Divider>
                  <AuthSocial type={SocialTypes.HORIZONTAL} />
                </Box>
              </Box>
              <Box sx={{ mt: 4, display: { sm: 'none' } }}>
                <Copyright />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </Box>
  );
}

```

  

File: src/blocks/navbar/navbar-content/NavbarContent10.tsx
```tsx
'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { Customization, MenuPopper, NavMenu, NavMenuDrawer, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';

// @types
import { NavbarContentProps } from '@/types/navbar';

/***************************  NAVBAR - CONTENT 10  ***************************/

export default function NavbarContent10({ navItems, primaryBtn, secondaryBtn, customization }: NavbarContentProps) {
  const theme = useTheme();

  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
      <Logo />
      {!downMD && navItems && (
        <Box sx={{ bgcolor: 'grey.200', borderRadius: 10 }}>
          <NavMenu {...{ navItems }} />
        </Box>
      )}
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
        {customization && <Customization />}
        {!downSM && (
          <>
            <NavSecondaryButton {...secondaryBtn} />
            <ButtonAnimationWrapper>
              <NavPrimaryButton {...primaryBtn} />
            </ButtonAnimationWrapper>
          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0 }
              }}
            >
              <ContainerWrapper>
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems }} />
                  </Box>
                )}
                {downSM && (
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1, px: 5, py: 2.5, mx: -5, bgcolor: 'grey.100' }}>
                    <NavSecondaryButton {...secondaryBtn} />
                    <ButtonAnimationWrapper>
                      <NavPrimaryButton {...primaryBtn} />
                    </ButtonAnimationWrapper>
                  </Stack>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

```

  

File: src/blocks/auth/login/Login4.tsx
```tsx
import { Fragment } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { AuthLogin, AuthSocial, Copyright } from '@/components/auth';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import { ProfileGroup2 } from '@/components/cards/profile-card';
import LogoWatermark from '@/components/logo/LogoWatermark';

import { SocialTypes } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Wave from '@/images/graphics/Wave';

export interface BlockProps {
  counter: string;
  caption: string;
  defaultUnit?: string;
}

interface Props {
  reviewData: {
    avatarList: string[];
    rating: number;
    totalReviews: string;
  };
  heading: string;
  caption?: string;
  blockDetail: BlockProps[];
}

/***************************  COUNTER CARD  ***************************/

function CounterCard({ counter, caption, defaultUnit }: BlockProps) {
  return (
    <Stack sx={{ gap: 1, alignItems: 'center' }}>
      <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
        <Typography component="div" variant="h3">
          {counter}
        </Typography>
        {defaultUnit && (
          <Typography component="div" variant="h4" sx={{ color: 'text.secondary', mb: { sm: 0.25, md: 0 } }}>
            {defaultUnit}
          </Typography>
        )}
      </Stack>
      <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
        {caption}
      </Typography>
    </Stack>
  );
}

/***************************  COUNTER BOX  ***************************/

function CounterBox({ blockDetail }: { blockDetail: BlockProps[] }) {
  return (
    <GraphicsCard sx={{ height: 1, p: { xs: 2, sm: 4, md: 5 } }}>
      <Stack sx={{ gap: 2, alignItems: 'center', height: 1, justifyContent: 'center' }}>
        {blockDetail.map((item, index) => (
          <Fragment key={index}>
            <CounterCard {...item} />
            {blockDetail.length - 1 !== index && <Wave />}
          </Fragment>
        ))}
      </Stack>
    </GraphicsCard>
  );
}

/***************************  LOGIN - 4  ***************************/

export default function Login4({ reviewData, heading, blockDetail }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <GraphicsCard sx={{ height: 1, p: { xs: 2, sm: 4, md: 5 } }}>
            <ProfileGroup2 {...reviewData} />
            <Typography variant="h1" sx={{ mt: { xs: 2.5, sm: 5, md: 6 }, maxWidth: { xs: 300, sm: 400, md: 500 } }}>
              {heading}
            </Typography>
          </GraphicsCard>
        </Grid>
        <Grid size={{ sm: 4 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <CounterBox blockDetail={blockDetail} />
        </Grid>
        <Grid size={12}>
          <GraphicsCard sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            <Box sx={{ position: 'relative' }}>
              <Stack sx={{ width: 1, maxWidth: 458, m: 'auto', position: 'relative', zIndex: 1 }}>
                <AuthLogin inputSx={{ bgcolor: 'grey.100' }} />
                <Typography sx={{ textAlign: 'center', mt: 2.5, color: 'text.secondary' }}>
                  Don’t have an account?{' '}
                  <Link
                    component={NextLink}
                    underline="hover"
                    variant="subtitle1"
                    href=""
                    sx={{ '&:hover': { color: 'primary.dark' } }}
                    rel="noopener noreferrer"
                    aria-label="sign up"
                  >
                    Sign Up
                  </Link>
                </Typography>
                <Divider sx={{ my: { xs: 4, sm: 5 } }}>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', px: 1.25 }}>
                    Continue with email
                  </Typography>
                </Divider>
                <AuthSocial type={SocialTypes.HORIZONTAL} buttonSx={{ bgcolor: 'grey.100', '&:hover': { bgcolor: 'grey.100' } }} />
                <Box sx={{ mt: { xs: 3, sm: 4, md: 5 } }}>
                  <Copyright />
                </Box>
              </Stack>
              <Box
                sx={{
                  position: 'absolute',
                  top: '-30%',
                  left: { sm: '-40%', md: '-30%', lg: '-20%' },
                  display: { xs: 'none', sm: 'block' },
                  transform: 'rotate(90deg)'
                }}
              >
                <LogoWatermark />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '-30%',
                  right: { sm: '-40%', md: '-30%', lg: '-25%' },
                  display: { xs: 'none', sm: 'block' },
                  transform: 'rotate(-90deg)'
                }}
              >
                <LogoWatermark />
              </Box>
            </Box>
          </GraphicsCard>
        </Grid>
        <Grid size={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <CounterBox blockDetail={blockDetail} />
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/auth/login/Login2.tsx
```tsx
'use client';

// @next
import NextLink from 'next/link';

// @mui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { AuthLogin, AuthSocial, Copyright } from '@/components/auth';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  heading: string;
  caption?: string;
  image: ImageCommonProps;
}

/***************************  LOGIN - 2  ***************************/

export default function Login2({ heading, caption, image }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ width: { sm: 'fit-content', md: 1 }, mx: 'auto' }}>
        <Grid container sx={{ width: { sm: 506, md: 1 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mx: { xs: 'auto', md: 0 }, p: { xs: 2, sm: 4, md: 8 } }}>
              <Stack sx={{ gap: { xs: 4, sm: 6 } }}>
                <Typeset {...{ heading, caption }} captionProps={{ variant: 'body1' }} />
                <AuthSocial />
              </Stack>

              <Divider sx={{ mt: { xs: 4, sm: 5 }, mb: 3 }}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary', px: 1.25 }}>
                  Continue with email
                </Typography>
              </Divider>
              <AuthLogin />
              <Typography sx={{ textAlign: 'center', mt: 2.5, color: 'text.secondary' }}>
                Don’t have an account?{' '}
                <Link
                  component={NextLink}
                  underline="hover"
                  variant="subtitle1"
                  href=""
                  sx={{ '&:hover': { color: 'primary.dark' } }}
                  rel="noopener noreferrer"
                  aria-label="sign up"
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ xs: 12, md: 6 }}>
            <GraphicsCard sx={{ height: 1, bgcolor: 'grey.200' }}>
              <Box sx={{ pl: 8, py: 8, height: 1 }}>
                <GraphicsImage
                  image={image}
                  sx={{
                    height: 1,
                    backgroundPositionX: 'left',
                    backgroundPositionY: 'top',
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12
                  }}
                />
              </Box>
            </GraphicsCard>
          </Grid>
        </Grid>
      </GraphicsCard>
      <Box sx={{ mt: 3.5 }}>
        <Copyright />
      </Box>
    </ContainerWrapper>
  );
}

```

  

File: src/blocks/auth/login/Login3.tsx
```tsx
// @next
import NextLink from 'next/link';

// @mui
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { AuthLogin, AuthSocial, Copyright } from '@/components/auth';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import Typeset from '@/components/Typeset';

import { SocialTypes } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Circles from '@/images/Circles';

interface Props {
  heading: string;
  caption?: string;
}

/***************************  LOGIN - 3  ***************************/

export default function Login3({ heading, caption }: Props): JSX.Element {
  return (
    <ContainerWrapper sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Stack
        sx={{ height: '100vh', minHeight: { md: 800 }, justifyContent: 'space-between', gap: { xs: 3, sm: 4 }, py: SECTION_COMMON_PY }}
      >
        <Stack sx={{ alignItems: 'center', position: 'relative' }}>
          <Box
            sx={{
              width: 1,
              position: 'absolute',
              top: { xs: '-38%', sm: '-50%', md: '-45%' },
              left: '50%',
              zIndex: -1,
              transform: { xs: 'translateX(-50%) scale(1.5)', md: 'translateX(-50%) scale(1)' },
              height: { xs: 500, sm: 750 },
              '& svg': { width: 1, height: 1 }
            }}
          >
            <Circles />
          </Box>
          <Box sx={{ bgcolor: 'grey.100', p: 1.5, borderRadius: 4, mb: 1.5 }}>
            <LogoSection isIcon={true} />
          </Box>
          <Typeset {...{ heading, caption }} stackProps={{ sx: { textAlign: 'center' } }} captionProps={{ variant: 'body1' }} />
          <Box sx={{ width: 1, maxWidth: 458, mt: 6 }}>
            <AuthLogin inputSx={{ bgcolor: 'background.paper' }} />
            <Typography sx={{ textAlign: 'center', mt: 2.5, color: 'text.secondary' }}>
              Don’t have an account?{' '}
              <Link
                component={NextLink}
                underline="hover"
                variant="subtitle1"
                href=""
                sx={{ '&:hover': { color: 'primary.dark' } }}
                rel="noopener noreferrer"
                aria-label="sign up"
              >
                Sign Up
              </Link>
            </Typography>
            <Divider sx={{ my: { xs: 4, sm: 5 } }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', px: 1.25 }}>
                Continue with email
              </Typography>
            </Divider>
            <AuthSocial type={SocialTypes.HORIZONTAL} />
          </Box>
        </Stack>
        <Box>
          <Copyright />
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

```
File: src/blocks/auth/login/Login1.tsx
```tsx
'use client';

import { useRef } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import { AuthLogin, AuthSocial, Copyright } from '@/components/auth';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import GraphicsImage from '@/components/GraphicsImage';
import { ProfileCard2 } from '@/components/cards/profile-card';
import Rating from '@/components/Rating';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';
import { TestimonialDataProps } from '@/types/testimonial';

interface Props {
  heading: string;
  caption?: string;
  testimonials: TestimonialDataProps[];
  image: ImageCommonProps;
}

const settings: Settings = {
  autoplay: true,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  swipeToSlide: true,
  initialSlide: 0
};

const buttonStyle = { borderRadius: '50%' };

/***************************  LOGIN - 1  ***************************/

export default function Login1({ heading, caption, testimonials, image }: Props): JSX.Element {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY, height: '100vh', minHeight: { md: 930 } }}>
      <Grid container spacing={5} sx={{ height: 'calc(100vh - 70px)' }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ height: 1 }}>
          <Stack sx={{ width: { xs: 1, sm: 432, md: 457 }, mx: { xs: 'auto', md: 0 }, height: 1, justifyContent: 'space-between' }}>
            <Box>
              <Stack sx={{ gap: { xs: 4, sm: 6 } }}>
                <Typeset {...{ heading, caption }} captionProps={{ variant: 'body1' }} />
                <AuthSocial />
              </Stack>

              <Divider sx={{ mt: { xs: 4, sm: 5 }, mb: 3 }}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary', px: 1.25 }}>
                  Continue with email
                </Typography>
              </Divider>
              <AuthLogin />
              <Typography sx={{ textAlign: 'center', mt: 2.5, color: 'text.secondary' }}>
                Don’t have an account?{' '}
                <Link
                  component={NextLink}
                  variant="subtitle1"
                  underline="hover"
                  href=""
                  sx={{ '&:hover': { color: 'primary.dark' } }}
                  rel="noopener noreferrer"
                  aria-label="sign up"
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>

            <Box sx={{ mt: { xs: 4.5, sm: 6.5, md: 13.75 } }}>
              <Copyright />
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ height: 1, display: { xs: 'none', md: 'block' } }}>
          <GraphicsCard sx={{ height: 1 }}>
            <Box sx={{ p: 7, position: 'relative' }}>
              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testimonial, index) => (
                  <Box key={index}>
                    <Stack sx={{ alignItems: 'flex-start', gap: 2.5 }}>
                      <Stack sx={{ gap: 1 }}>
                        <Rating {...{ rate: testimonial.ratings }} />
                        <Typography variant="h4" sx={{ '&:before': { content: 'open-quote' }, '&:after': { content: 'close-quote' } }}>
                          {testimonial.review}
                        </Typography>
                      </Stack>
                      <ProfileCard2 {...testimonial.profile} background />
                    </Stack>
                  </Box>
                ))}
              </Slider>
              <Stack direction="row" sx={{ gap: 0.5, position: 'absolute', bottom: 75, right: 56 }}>
                <IconButton sx={buttonStyle} onClick={() => sliderRef?.current?.slickPrev()} rel="noopener noreferrer" aria-label="prev">
                  <SvgIcon name="tabler-arrow-left" size={18} />
                </IconButton>
                <IconButton sx={buttonStyle} onClick={() => sliderRef?.current?.slickNext()} rel="noopener noreferrer" aria-label="next">
                  <SvgIcon name="tabler-arrow-right" size={18} />
                </IconButton>
              </Stack>
            </Box>

            <Box sx={{ pl: 7, height: 1 }}>
              <GraphicsImage
                image={image}
                sx={{
                  height: 1,
                  backgroundPositionX: 'left',
                  backgroundPositionY: 'top',
                  borderTopLeftRadius: 12,
                  borderBottomRightRadius: 40
                }}
              />
            </Box>
          </GraphicsCard>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

```
