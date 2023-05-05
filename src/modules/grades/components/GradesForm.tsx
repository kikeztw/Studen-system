import React, { useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';

import { CustomDialog } from '../../../shared/components/CustomDialog';
import { GradesCollectionTye } from '../../../shared/types/collections';
import { COURSE_NAMES } from '../../../shared/firebase/constants';

const COURSE_LIST = Object.values(COURSE_NAMES).map((item) => ({ value: item, label: item }));

export type ForwarRefType = {
  resetForm: () => void;
}

type GradesFormProps = {
  data?: GradesCollectionTye;
  open: boolean;
  modalTitle: string;
  onCloseModal: () => void;
  isLoading: boolean;
  onSubmit?: (value: GradesCollectionTye) => void;
}

const DEFAULT_VALUE: GradesCollectionTye = {
  value: 0,
  course: '',
}

export const GradesForm = forwardRef<ForwarRefType,GradesFormProps>(({
  data,
  open,
  modalTitle,
  onSubmit,
  isLoading,
  onCloseModal,
}, ref) => {
  const {  control, formState: { errors }, handleSubmit, reset, setValue } = useForm<GradesCollectionTye>({
    defaultValues: DEFAULT_VALUE,
  });
  const timeOut = useRef<ReturnType<typeof setTimeout>>();


  const resetForm = (): void => {
    reset(DEFAULT_VALUE)
  }

  useImperativeHandle(ref, () => ({
    resetForm
  }));

  useEffect(() => {
    if(data && open){
      timeOut.current = setTimeout(() => {
        // setValue('firstname', data.firstname);
        // setValue('lastname', data.lastname);
        // setValue('ci', data.ci);
        // setValue('email', data.email);
        // setValue('phone', data.phone);
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
      <Controller
        control={control}
        name="value"
        rules={{
          required: {
            value: true,
            message: 'Nota Requerido'
          },
        }}
        render={({field: { onChange, value } }) => (
          <TextField 
            fullWidth 
            label="Nota" 
            variant="filled"
            margin="normal" 
            type="email"
            onChange={onChange}
            value={value}
            error={Boolean(errors?.value?.ref)}
            helperText={errors?.value?.message}
          />
        )}
      />
    </CustomDialog>
  );
});

