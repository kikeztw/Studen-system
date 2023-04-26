import React, { useState } from 'react';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import Button from '@mui/lab/LoadingButton';
import { useForm, Controller } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { UserCredential } from 'firebase/auth';

import { signInWithEmail } from '../../../shared/firebase/actions/auth';
import { changePassword } from '../../../shared/firebase/actions/auth';

type FormType = {
  password: string;
  confirmPassword: string;
}

type ChangePassowrdSignInProps = {
  onFinish: () => void;
}

export const ChangePassowrdSignIn: React.FC<ChangePassowrdSignInProps> = ({
  onFinish,
}) => {
  const { query } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { control, formState: { errors }, handleSubmit, watch } = useForm<FormType>();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (value) => {
    setLoading(true);
  
    if(typeof query.email !== 'string'){
      enqueueSnackbar('Something is wrong', { variant: 'error' });
      return;
    }

    try {
      await signInWithEmail(query.email)
    } catch (error) {
      console.log('ERROR SGNIN', JSON.stringify(error));
      enqueueSnackbar('Something is wrong', { variant: 'error' });
      return;
    }

    try {
      await changePassword(value.password);
    } catch (error) {
      setLoading(false);
      console.log('ERROR', JSON.stringify(error));
      enqueueSnackbar('Something is wrong', { variant: 'error' });
      return;
    }
    setLoading(false);
    onFinish();
  })

  return (
    <>
      <Controller
        control={control}
        name="password"
        rules={{
          required: {
            value: true,
            message: 'Contraseña Requerida',
            
          },
          // pattern: {
          //   value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,16}$/
          //   ,
          //   message: 'La contraseña debe tener entre 6 y 16 caracteres, al menos un caracter nunmerico y uno alfanumerico. Deben coincidir'
          // }
        }}
        render={({ field: { onChange, value } }) => (
          <TextField
            fullWidth
            type="password"
            label="contraseña"
            variant="filled"
            margin="normal"
            onChange={onChange}
            value={value}
            error={Boolean(errors?.password?.ref)}
            helperText={errors?.password?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: {
            value: true,
            message: 'Debe confirmar la Contraseña'
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextField
            fullWidth
            type="password"
            label="confirmar contraseña"
            variant="filled"
            margin="normal"
            onChange={onChange}
            value={value}
            error={Boolean(errors?.password?.ref)}
            helperText={errors?.confirmPassword?.message}
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
        Siguiente
      </Button>
    </>
  )
}