import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

import { createTeacher } from '../../../shared/firebase/actions/teachers';
import { TeacherForm, TeacherFormType } from './TeacherForm';



export const EditTeacher: React.FC = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onClose = () => {
    router.back();
  }

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
      open={Boolean(router.query?.edit?.length)}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onCloseModal={onClose}
      modalTitle="Edit profesor"
    />
  );
}
