import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { SideBar } from './Sidebar';
import { Header } from './Header';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Content = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(16),
  paddingRight: theme.spacing(16),
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
}))

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header isOpen={open} onClickOpen={handleDrawerOpen} />
      <SideBar isOpen={open} onPressClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Content>
          {children}
        </Content>
      </Box>
    </Box>
  );
}