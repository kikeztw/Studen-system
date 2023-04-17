import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/lab/LoadingButton';
import { useForm, Controller } from 'react-hook-form';
import { useSnackbar } from 'notistack';

import { changePassword } from '../../../shared/firebase/actions/auth';

type FormType = {
  password: string;
}

type ChangePassowrdSignInProps = {
  onFinish: () => void;
}

export const ChangePassowrdSignIn: React.FC<ChangePassowrdSignInProps> = ({
  onFinish,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const { control, formState: { errors }, handleSubmit } = useForm<FormType>();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (value) => {
    setLoading(true);
    try {
      await changePassword(value.password);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Something is wromg', { variant: 'error' });
      return;
    }
    setLoading(false);
    onFinish();
  })

  return(
      <>
        <Controller
          control={control}
          name="password"
          rules={{
            required: {
              value: true,
              message: 'Password Requerida'
            },
            pattern:{
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              message: ''
            },
            validate: (value) => {
              return value
            }
          }}
          render={({field: { onChange, value } }) => (
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