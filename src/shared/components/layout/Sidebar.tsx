import * as React from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MENU_LIST = [
  {
    icon: <NoteAltIcon color="primary" />,
    label: 'Profesores',
    route: '/teachers'
  },
  {
    icon: <PeopleIcon color="primary"/>,
    label: 'Estudiantes',
    route: '/students'
  },
  {
    icon: <NoteAltIcon color="primary" />,
    label: 'Notas',
    route: '/grades'
  },
  {
    icon: <LibraryBooksIcon color="primary" />,
    label: 'Materias',
    route: '/courses'
  }
]

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Content = styled('span')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

type SideBarProps = {
  isOpen: boolean;
  onPressClose: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({
  isOpen,
  onPressClose,
}) => {
  const theme = useTheme();
  const router = useRouter();

  const onClick = (route: string) => () => {
    router.push(route);
  }

  return (
      <Drawer variant="permanent" open={isOpen}>
        <DrawerHeader>
         {isOpen ? ( 
            <Content>
              <Image style={{ marginRight: 8 }} src="/MIT_logo_bg.png" alt="sidebar_logo" width={50} height={50} />
              <Typography variant="subtitle1">Students System</Typography>
            </Content>
          ): null}
          <IconButton onClick={onPressClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Stack height="100%" justifyContent="space-between">
          <List>
            {MENU_LIST.map((item, index) => (
              <ListItem onClick={onClick(item.route)} key={item.label} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: isOpen ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isOpen ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} sx={{ opacity: isOpen ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {isOpen ? (
            <Button size="large" startIcon={<LogoutIcon />}>Logout</Button>
          ): (
            <IconButton color="primary" aria-label="upload picture" component="label">
              <LogoutIcon />
            </IconButton>
          )}
        </Stack>
      </Drawer>
  );
}