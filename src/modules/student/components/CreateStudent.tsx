import React, { useState, useRef } from 'react';
import { useSnackbar } from 'notistack';

import { createStudent } from '../../../shared/firebase/actions/student';
import { StudentForm, ForwarRefType } from './StudentForm';
import { StudentCollectionTye } from '../../../shared/types/collections';


type CreateStudentProps = {
  open: boolean;
  onClose: () => void;
}

export const CreateStudent: React.FC<CreateStudentProps> = ({
  open,
  onClose,
}) => {
  const ref = useRef<ForwarRefType>(null);
  const [isLoading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (value:  StudentCollectionTye) => {
    setLoading(true);
    try {
      await createStudent({ ...value, status: 'Active' });
    } catch (error) {
      enqueueSnackbar('Something is wrong', { variant: 'error' });
      return;
    }
    enqueueSnackbar('Estudiante registrado con exito', { variant: 'success' });
    setLoading(false);
    ref?.current?.resetForm();
    onClose();
  }

  return (
    <StudentForm
      ref={ref}
      open={open}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onCloseModal={onClose}
      modalTitle="Agregar Estudiante"
    />
  );
}
