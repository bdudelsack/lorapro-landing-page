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
