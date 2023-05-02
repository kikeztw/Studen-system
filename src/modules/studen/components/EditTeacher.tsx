import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

import { StudentCollectionTye } from '../../../shared/types/collections';
import { getTeacherById, updateTeacherById } from '../../../shared/firebase/actions/teachers';
import { StudentForm } from './StudentForm';


export const EditTeacher: React.FC = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [initialData, setData] = useState<StudentCollectionTye>();
  const { enqueueSnackbar } = useSnackbar();

  const getIntialData = async (): Promise<void> => {
    if(typeof router.query?.edit === 'string'){
      // setLoading(true);
      // const response = await getTeacherById(router.query?.edit);
      // if(response){
      //   setData(response);
      // }
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
      // await updateTeacherById(router.query?.edit as string, value);
    } catch (error) {
      enqueueSnackbar('Something is wrong', { variant: 'error' });
      setLoading(false);
      return;
    }
    enqueueSnackbar('Profesor registrado con exito', { variant: 'success' });
    setLoading(false);
    onClose();
  }

  return (
    <StudentForm
      open={Boolean(router.query?.edit?.length)}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onCloseModal={onClose}
      modalTitle="Editar profesor"
      data={initialData}
    />
  );
}
