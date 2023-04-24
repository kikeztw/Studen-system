import React from 'react'
import Alert from '@mui/material/Alert';

import { CustomDialog } from './CustomDialog';

type DeleteWarnModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}


export const DeleteWarnModal: React.FC<DeleteWarnModalProps> = ({
  open,
  onClose,
  onConfirm,
  isLoading
}) => (
  <CustomDialog 
    open={open} 
    isLoading={isLoading}
    onClickConfirm={onConfirm}
    onClose={onClose} 
    title="Borrar Record">
    <Alert severity="warning">Estas seguro que deseas borrar esta data?</Alert>
  </CustomDialog>
)