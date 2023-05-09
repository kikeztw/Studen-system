import React, { useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';

import { CustomDialog } from '../../../shared/components/CustomDialog';
import { StudentCollectionTye } from '../../../shared/types/collections';
import { GRADE } from '../../../shared/firebase/constants';

export type ForwarRefType = {
  resetForm: () => void;
}

type TeacherFormProps = {
  data?: StudentCollectionTye;
  open: boolean;
  modalTitle: string;
  onCloseModal: () => void;
  isLoading: boolean;
  onSubmit?: (value: StudentCollectionTye) => void;
}

const COURSE_LIST = Object.values(GRADE).map((item) => ({ value: item, label: item }));

const DEFAULT_VALUE: StudentCollectionTye = {
  firstname: '',
  lastname: '',
  ci: '',
  email: '',
  course: '',
  grades: [],
}

export const StudentForm = forwardRef<ForwarRefType,TeacherFormProps>(({
  data,
  open,
  modalTitle,
  onSubmit,
  isLoading,
  onCloseModal,
}, ref) => {
  const {  control, formState: { errors }, handleSubmit, reset, setValue } = useForm<StudentCollectionTye>({
    defaultValues: DEFAULT_VALUE,
  });
  const timeOut = useRef<ReturnType<typeof setTimeout>>();


  const resetForm = (): void => {
    reset({
      firstname: '',
      lastname: '',
      ci: '',
    })
  }

  useImperativeHandle(ref, () => ({
    resetForm
  }));

  useEffect(() => {
    if(data && open){
      timeOut.current = setTimeout(() => {
        setValue('firstname', data.firstname);
        setValue('lastname', data.lastname);
        setValue('ci', data.ci);
        setValue('email', data.email);
        setValue('course', data.course);
      }, 1000);
    }

    return () => {
      clearTimeout(timeOut.current);
    }

  }, [open, data]);

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
        name="firstname"
        rules={{
          required: {
            value: true,
            message: 'Nombre Requerido'
          },
        }}
        render={({field: { onChange, value } }) => (
          <TextField 
            fullWidth 
            label="Nombre" 
            variant="filled"
            margin="normal" 
            onChange={onChange}
            value={value}
            error={Boolean(errors?.firstname?.ref)}
            helperText={errors?.firstname?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="lastname"
        rules={{
          required: {
            value: true,
            message: 'Apellido Requerido'
          },
        }}
        render={({field: { onChange, value } }) => (
          <TextField 
            fullWidth 
            label="Apellido" 
            variant="filled"
            margin="normal" 
            onChange={onChange}
            value={value}
            error={Boolean(errors?.lastname?.ref)}
            helperText={errors?.lastname?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: {
            value: true,
            message: 'Email Requerido'
          },
        }}
        render={({field: { onChange, value } }) => (
          <TextField 
            fullWidth 
            label="Email" 
            variant="filled"
            margin="normal" 
            type="email"
            onChange={onChange}
            value={value}
            error={Boolean(errors?.lastname?.ref)}
            helperText={errors?.lastname?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="ci"
        rules={{
          required: {
            value: true,
            message: 'Cedula Requerida'
          },
        }}
        render={({field: { onChange, value } }) => (
          <TextField 
            fullWidth 
            label="Cedula" 
            variant="filled"
            margin="normal" 
            onChange={onChange}
            value={value}
            error={Boolean(errors?.ci?.ref)}
            helperText={errors?.ci?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="course"
        rules={{
          required: {
            value: true,
            message: 'Apellido Requerido'
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

