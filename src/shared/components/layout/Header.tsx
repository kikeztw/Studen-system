import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  borderBottom: theme.palette.grey[300],
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  backgroundColor: theme.palette.common.white,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type HeaderPropss = {
  onClickOpen: () => void;
  isOpen: boolean;
}

export const Header: React.FC<HeaderPropss> = ({
  onClickOpen,
  isOpen,
}) => {

  return (
    <AppBar elevation={0} position="fixed" open={isOpen}>
      <Toolbar>
        <Stack direction="row" width="100%" justifyContent={isOpen ? 'flex-end' : "space-between" }>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={onClickOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(isOpen && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar src="https://joesch.moe/api/v1/random?key=2" alt="vatar_header"/>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}