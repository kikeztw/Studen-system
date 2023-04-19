import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';

import { signInUser } from '../../shared/firebase/actions/auth';

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const FormContainer = styled('div')({
  width: 400,
  padding: 30,
  backgroundColor: '#fff',
  borderRadius: 15,
});

type FormStateType = {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { control, formState: { errors }, handleSubmit }= useForm<FormStateType>();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const onClickRedirectToLogin = handleSubmit(async (value): Promise<void> => {
    setLoading(true);
    try {
      await signInUser(value.email, value.password);
      router.push('/teachers');
    } catch (error) {
      setLoading(false);
    }
  })

  return (
    <Container>
      <FormContainer>
        <Box display="flex" flexDirection="column" alignItems="center" marginBottom={4}>
          <Image style={{ marginRight: 8 }} src="/MIT_logo_bg.png" alt="sidebar_logo" width={150} height={150} />
          <Typography variant="h6" color="GrayText">Students System</Typography>
        </Box>
        <Controller 
          control={control}
          name="email"
          rules={{
            required:{
              value: true,
              message: 'Email es requerido',
            }
          }}
          render={({ field: { onChange, value } }) => (
            <TextField 
              value={value}
              onChange={onChange}
              fullWidth 
              margin="dense" 
              label="Email" 
              type="email"
              error={Boolean(errors.email?.ref)}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Controller 
          control={control}
          name="password"
          rules={{
            required:{
              value: true,
              message: 'La contraseña es requerida',
            }
          }}
          render={({ field: { onChange, value } }) => (
            <TextField 
              value={value}
              onChange={onChange}
              fullWidth 
              margin="dense" 
              label="Password" 
              type="password"
              error={Boolean(errors.password?.ref)}
              helperText={errors?.password?.message}
            />
          )}
        />
        <Box marginTop={2}>
          <Button loading={isLoading} onClick={onClickRedirectToLogin} size="large" fullWidth variant="contained">Login</Button>
        </Box>
      </FormContainer>
    </Container>
  );
}
