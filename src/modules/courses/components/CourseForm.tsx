import React, { useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';

import { CustomDialog } from '../../../shared/components/CustomDialog';
import { CourseCollectionType } from '../../../shared/types/collections';
import { GRADE, COURSE_NAMES } from '../../../shared/firebase/constants';

export type ForwarRefType = {
  resetForm: () => void;
}

type TeacherFormProps = {
  data?: CourseCollectionType;
  open: boolean;
  modalTitle: string;
  onCloseModal: () => void;
  isLoading: boolean;
  onSubmit?: (value: CourseCollectionType) => void;
}

const DEFAULT_VALUE: CourseCollectionType = {
  grade: '',
  course: '',
}

const GRADE_LIST = Object.values(GRADE).map((item) => ({ value: item, label: item }));
const COURSE_LIST = Object.values(COURSE_NAMES).map((item) => ({ value: item, label: item }));

export const CourseForm = forwardRef<ForwarRefType,TeacherFormProps>(({
  data,
  open,
  modalTitle,
  onSubmit,
  isLoading,
  onCloseModal,
}, ref) => {
  const {  control, formState: { errors }, handleSubmit, reset, setValue } = useForm<CourseCollectionType>({
    defaultValues: DEFAULT_VALUE,
  });

  const resetForm = (): void => {
    reset(DEFAULT_VALUE)
  }

  useImperativeHandle(ref, () => ({
    resetForm
  }));

  const onSubmitForm = handleSubmit(async (value) => {
    onSubmit?.(value);
  });

  const handlerClose = (): void =>{
    resetForm();
    onCloseModal();
  }

  return (
    <CustomDialog 
      open={open} 
      isLoading={isLoading}
      onClickConfirm={onSubmitForm}
      onClose={handlerClose} 
      title={modalTitle}>
      <Controller
        control={control}
        name="grade"
        rules={{
          required: {
            value: true,
            message: 'Nombre Requerido'
          },
        }}
        render={({field: { onChange, value } }) => (
          <TextField
            select
            fullWidth
            label="Año"
            variant="filled"
            margin="normal"
            onChange={onChange}
            value={value}
            error={Boolean(errors?.course?.ref)}
            helperText={errors?.course?.message}
          >
            {GRADE_LIST.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        control={control}
        name="course"
        rules={{
          required: {
            value: true,
            message: 'Materia Requerido'
          },
        }}
        render={({field: { onChange, value } }) => (
        <TextField
          select
          fullWidth
          label="Materia"
          variant="filled"
          margin="normal"
          onChange={onChange}
          value={value}
          error={Boolean(errors?.course?.ref)}
          helperText={errors?.course?.message}
        >
          {COURSE_LIST.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        )}
      />
    </CustomDialog>
  );
});

