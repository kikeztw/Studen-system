import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';

import { CustomDialog } from '../../../shared/components/CustomDialog';
import { TeacherCollectionType } from '../../../shared/types/collections';

export type ForwarRefType = {
  resetForm: () => void;
}

type TeacherFormProps = {
  data?: TeacherCollectionType;
  open: boolean;
  modalTitle: string;
  onCloseModal: () => void;
  isLoading: boolean;
  onSubmit?: (value: TeacherCollectionType) => void;
}

export const TeacherForm = forwardRef<ForwarRefType,TeacherFormProps>(({
  data,
  open,
  modalTitle,
  onSubmit,
  isLoading,
  onCloseModal,
}, ref) => {
  const {  control, formState: { errors }, handleSubmit, reset, setValue } = useForm<TeacherCollectionType>();


  const resetForm = (): void => {
    reset({
      firstname: '',
      lastname: '',
      ci: '',
      phone: '',
    })
  }

  useImperativeHandle(ref, () => ({
    resetForm
  }));

  useEffect(() => {
    if(data && open){
      setValue('firstname', data.firstname);
      setValue('lastname', data.lastname);
      setValue('ci', data.ci);
      setValue('email', data.email);
      setValue('phone', data.phone);
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
        name="phone"
        rules={{
          required: {
            value: true,
            message: 'Telefono Requerido'
          },
        }}
        render={({field: { onChange, value } }) => (
          <TextField 
            fullWidth 
            label="Telefono" 
            variant="filled"
            margin="normal" 
            onChange={onChange}
            value={value}
            error={Boolean(errors?.phone?.ref)}
            helperText={errors?.phone?.message}
          />
        )}
      />
    </CustomDialog>
  );
});

