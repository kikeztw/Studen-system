import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import Button from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import { useForm, Controller } from 'react-hook-form';

import { createProfile } from '../../../shared/firebase/actions/profile';
import { getCurrentUser } from '../../../shared/firebase/actions/user';

type FormType = {
  firstname: string;
  lastname: string;
  ci: string;
  phone: string;
}

export const ProfileFormSignIn: React.FC = () => {
  const {  control, formState: { errors }, handleSubmit } = useForm<FormType>();
  const [isLoading, setLoading] = useState(false);
  const { push } = useRouter();

  const onSubmit = handleSubmit(async (value) => {
    setLoading(true);
    const user = getCurrentUser();

    if(!user){
      return;
    }
    
    await createProfile({
      uuid: user?.uid as string,
      email: user?.email as string,
      firstname: value.firstname,
      ci: value.ci,
      lastname: value.lastname,
      phone: value.phone,
    })
    push('/teachers');
  });


  return(
      <>
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
        <Button 
          loading={isLoading} 
          onClick={onSubmit} 
          fullWidth 
          sx={{ marginTop: 5 }} 
          variant="contained" 
          size="large">
          REGISTRAR
        </Button>
      </>
  )
}