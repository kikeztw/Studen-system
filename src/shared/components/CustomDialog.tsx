import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import DialogMUI from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(DialogMUI)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

type DialogPropss = {
  open: boolean;
  onClose: () => void;
  onClickConfirm?: () => void;
  title: string;
}

export const CustomDialog: React.FC<React.PropsWithChildren<DialogPropss>> = ({
  open,
  onClose,
  children,
  onClickConfirm,
  title,
}) => (
  <BootstrapDialog
    onClose={onClose}
    open={open}
  >
    <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
      {title}
    </BootstrapDialogTitle>
    <DialogContent>
      {children}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>
        Cancelar
      </Button>
      <Button variant="contained" autoFocus onClick={onClickConfirm}>
        Confirmar
      </Button>
    </DialogActions>
  </BootstrapDialog>
);