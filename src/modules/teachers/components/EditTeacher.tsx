import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

import { getTeacherById } from '../../../shared/firebase/actions/teachers';
import { TeacherForm, TeacherFormType } from './TeacherForm';



export const EditTeacher: React.FC = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [initialData, setData] = useState<TeacherFormType>();
  const { enqueueSnackbar } = useSnackbar();

  const getIntialData = async (): Promise<void> => {
    if(typeof router.query?.edit === 'string'){
      setLoading(true);
      const response = await getTeacherById(router.query?.edit);
      console.log('response', response);
      if(response){
        setData(response);
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    getIntialData();
  }, [router.query]);

  const onClose = () => {
    router.back();
  }

  const onSubmit = async (value:  TeacherFormType) => {
    setLoading(true);
    try {
      // await createTeacher({ ...value, status: 'Activo' });
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
      modalTitle="Editar profesor"
      data={initialData}
    />
  );
}
