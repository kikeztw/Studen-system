import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { CustomDialog } from '../../../shared/components/CustomDialog';
import { useForm, Controller } from 'react-hook-form';
import Container from '@mui/material/Container';

const COURSE_LIST = [
  {
    value: 1,
    label: 'Primer Año',
  },
  {
    value: 2,
    label: 'Segundo Año',
  },
  {
    value: 3,
    label: 'Tercer Año',
  },
  {
    value: 4,
    label: 'Quinto Año',
  },
];

type CreateMateriaFormProps = {
  open: boolean;
  onClose: () => void;
};

type FormType = {
  name: string;
  course: string;
};

export const CreateMateriaForm: React.FC<CreateMateriaFormProps> = ({ open, onClose }) => {
  const { control, formState: { errors }, handleSubmit } = useForm<FormType>();

  const onSubmit = handleSubmit(async (value) => {

  })

  return (
    <>



      <CustomDialog
        open={open}
        onClose={onClose}
        onClickConfirm={onSubmit}
        title="Agregar Materia">

        <Container maxWidth="sm">
          <Controller
            control={control}
            name="name"
            rules={{
              required: {
                value: true,
                message: 'Nombre requerido'
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                label="name"
                variant="filled"
                margin="normal"
                onChange={onChange}
                value={value}
                error={Boolean(errors?.name?.ref)}
                helperText={errors?.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="course"
            rules={{
              required: {
                value: true,
                message: 'Año requerido'
              },
            }}
            render={({ field: { onChange, value } }) => (
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


        </Container>

      </CustomDialog>


    </>



  );
}
