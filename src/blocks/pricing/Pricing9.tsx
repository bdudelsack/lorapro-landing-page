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
