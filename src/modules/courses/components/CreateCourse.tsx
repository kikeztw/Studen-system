import React, { useState, useRef } from 'react';
import { useSnackbar } from 'notistack';

import { createCourse } from '../../../shared/firebase/actions/course';
import { CourseForm, ForwarRefType } from './CourseForm';
import { CourseCollectionType } from '../../../shared/types/collections';


type CreateCourseProps = {
  open: boolean;
  onClose: () => void;
}

export const CreateCourse: React.FC<CreateCourseProps> = ({
  open,
  onClose,
}) => {
  const ref = useRef<ForwarRefType>(null);
  const [isLoading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (value:  CourseCollectionType) => {
    setLoading(true);
    try {
      await createCourse({ ...value, status: 'Active' });
    } catch (error) {
      enqueueSnackbar('Something is wrong', { variant: 'error' });
      return;
    }
    enqueueSnackbar('Materia registrado con exito', { variant: 'success' });
    setLoading(false);
    ref?.current?.resetForm();
    onClose();
  }

  return (
    <CourseForm
      ref={ref}
      open={open}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onCloseModal={onClose}
      modalTitle="Agregar profesor"
    />
  );
}
