import React, { useState, useRef } from 'react';
import { useSnackbar } from 'notistack';

import { createTeacher } from '../../../shared/firebase/actions/teachers';
import { TeacherForm, ForwarRefType } from './TeacherForm';
import { TeacherCollectionType } from '../../../shared/types/collections';


type CreateTeacherProps = {
  open: boolean;
  onClose: () => void;
}

export const CreateTeacher: React.FC<CreateTeacherProps> = ({
  open,
  onClose,
}) => {
  const ref = useRef<ForwarRefType>(null);
  const [isLoading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (value:  TeacherCollectionType) => {
    setLoading(true);
    try {
      await createTeacher({ ...value, status: 'Activo' });
    } catch (error) {
      enqueueSnackbar('Something is wrong', { variant: 'error' });
      return;
    }
    enqueueSnackbar('Profesor registrado con exito', { variant: 'success' });
    setLoading(false);
    ref?.current?.resetForm();
    onClose();
  }

  return (
    <TeacherForm
      ref={ref}
      open={open}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onCloseModal={onClose}
      modalTitle="Agregar profesor"
    />
  );
}
