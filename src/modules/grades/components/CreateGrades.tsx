import React, { useState, useRef } from 'react';
import { useSnackbar } from 'notistack';

import { GradesForm, ForwarRefType } from './GradesForm';
import { GradesCollectionTye, StudentCollectionTye } from '../../../shared/types/collections';
import { addGradeToStuden } from '../../../shared/firebase/actions/student';

type CreateGradesProps = {
  data?: StudentCollectionTye;
  open: boolean;
  onClose: () => void;
}

export const CreateGrades: React.FC<CreateGradesProps> = ({
  data,
  open,
  onClose,
}) => {
  const ref = useRef<ForwarRefType>(null);
  const [isLoading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (value:  GradesCollectionTye) => {
    setLoading(true);

    if(!data || !data.id){
      return;
    }

    try {
      await addGradeToStuden(data.id, { value: value.value, course: value.course });
    } catch (error) {
      enqueueSnackbar('Something is wrong', { variant: 'error' });
      return;
    }
    enqueueSnackbar('Nota registrada con exito', { variant: 'success' });
    setLoading(false);
    ref?.current?.resetForm();
    onClose();
  }

  return (
    <GradesForm
      ref={ref}
      open={open}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onCloseModal={onClose}
      modalTitle="Agregar profesor"
    />
  );
}
