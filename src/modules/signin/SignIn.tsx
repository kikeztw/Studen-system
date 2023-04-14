import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material';
import ContainerMUI from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { useForm, Controller } from 'react-hook-form';


const Container = styled('div')({
  backgroundColor: '#fff',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

type FormType = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  ci: string;
  phone: string;
}

export const SignIn: React.FC = () => {
  const {  control, formState: { errors }, handleSubmit, setValue } = useForm<FormType>();
  const { query } = useRouter();
  useEffect(() => {
    console.log(query);
    if(typeof query.email === 'string'){
      setValue('email', query.email);
    }
  }, [query]);
  const onSubmit = handleSubmit((value) => {
    console.log(value)
  })
  return(
    <Container>
      <ContainerMUI maxWidth="sm">
        <Box display="flex" flexDirection="column" alignItems="center" marginBottom={4}>
          <Image style={{ marginRight: 8 }} src="/MIT_logo_bg.png" alt="sidebar_logo" width={150} height={150} />
          <Typography variant="h6" color="GrayText">Students System</Typography>
        </Box>
        <Controller
          control={control}
          name="email"
          rules={{
            required: {
              value: true,
              message: 'Email Requerido'
            },
          }}
          render={({field: { value } }) => (
            <TextField 
              disabled
              fullWidth 
              variant="filled"
              margin="normal" 
              value={value}
              error={Boolean(errors?.email?.ref)}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="firstname"
          rules={{
            required: {
              value: true,
              message: 'Email Requerido'
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
              error={Boolean(errors?.email?.ref)}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastname"
          rules={{
            required: {
              value: true,
              message: 'Email Requerido'
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
              error={Boolean(errors?.email?.ref)}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="ci"
          rules={{
            required: {
              value: true,
              message: 'Email Requerido'
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
              error={Boolean(errors?.email?.ref)}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          rules={{
            required: {
              value: true,
              message: 'Email Requerido'
            },
          }}
          render={({field: { onChange, value } }) => (
            <TextField 
              fullWidth 
              label="telefono" 
              variant="filled"
              margin="normal" 
              onChange={onChange}
              value={value}
              error={Boolean(errors?.email?.ref)}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: {
              value: true,
              message: 'Email Requerido'
            },
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
              error={Boolean(errors?.email?.ref)}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Button fullWidth sx={{ marginTop: 5 }} variant="contained" size="large">
          REGISTRAR
        </Button>
      </ContainerMUI>
    </Container>
  )
}