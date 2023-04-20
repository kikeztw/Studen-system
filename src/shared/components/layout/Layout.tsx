import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PaperMUI from '@mui/material/Paper';

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

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.grey['100'],
  minHeight: '100vh',
  display: 'flex',
  paddingTop: 65,
}))

const Content = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flex: 1,
}));

const Wrapper = styled('div')(({ theme }) => ({
  flexGrow: 1,
  borderRadius: 5,
}));

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
      <Main>
        <DrawerHeader />
        <Content>
          <Wrapper>
            {children}
          </Wrapper>
        </Content>
      </Main>
    </Box>
  );
}