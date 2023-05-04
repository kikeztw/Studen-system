import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

import { StudentCollectionTye } from '../../../shared/types/collections';
import { getStudentById, updateStudentById } from '../../../shared/firebase/actions/student';
import { StudentForm } from './StudentForm';


export const EditStudent: React.FC = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [initialData, setData] = useState<StudentCollectionTye>();
  const { enqueueSnackbar } = useSnackbar();

  const getIntialData = async (): Promise<void> => {
    if(typeof router.query?.edit === 'string'){
      setLoading(true);
      const response = await getStudentById(router.query?.edit);
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

  const onSubmit = async (value:  StudentCollectionTye) => {
    setLoading(true);
    try {
      await updateStudentById(router.query?.edit as string, value);
    } catch (error) {
      enqueueSnackbar('Something is wrong', { variant: 'error' });
      setLoading(false);
      return;
    }
    enqueueSnackbar('Estudiante registrado con exito', { variant: 'success' });
    setLoading(false);
    onClose();
  }

  return (
    <StudentForm
      open={Boolean(router.query?.edit?.length)}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onCloseModal={onClose}
      modalTitle="Editar Estudiante"
      data={initialData}
    />
  );
}
