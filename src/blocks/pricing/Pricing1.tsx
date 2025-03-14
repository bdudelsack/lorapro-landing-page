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
