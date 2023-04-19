import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import { CustomDialog } from '../../../shared/components/CustomDialog';

const COURSE_LIST = [
  'Primer anio',
  'Segundo anio',
  'Tercer anio',
  'Cuarto anio',
  'Quinto anio'
];

type CreateMateriaFormProps = {
  open: boolean;
  onClose: () => void;
};

export const CreateMateriaForm: React.FC<CreateMateriaFormProps> = ({ open, onClose }) => {
  return (
    <CustomDialog 
      open={open} 
      onClose={onClose} 
      title="Agregar Materia">
        <TextField fullWidth label="Nombre" variant="filled" margin="normal" />
        <TextField fullWidth label="Curso" variant="filled" margin="normal" />
    </CustomDialog>
  );
}
