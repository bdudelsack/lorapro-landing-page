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
