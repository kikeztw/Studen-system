import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import { createTeacher } from '../../../shared/firebase/actions/teachers';
import { TeacherForm, TeacherFormType } from './TeacherForm';


type CreateTeacherProps = {
  open: boolean;
  onClose: () => void;
}

export const CreateTeacher: React.FC<CreateTeacherProps> = ({
  open,
  onClose,
}) => {
  const [isLoading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (value:  TeacherFormType) => {
    setLoading(true);
    try {
      await createTeacher({ ...value, status: 'Activo' });
    } catch (error) {
      enqueueSnackbar('Something is wrong', { variant: 'error' });
      return;
    }
    enqueueSnackbar('Profesor registrado con exito', { variant: 'success' });
    setLoading(false);
    onClose();
  }

  return (
    <TeacherForm
      open={open}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onCloseModal={onClose}
      modalTitle="Agregar profesor"
    />
  );
}
