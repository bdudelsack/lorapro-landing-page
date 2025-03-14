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
