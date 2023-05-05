import React, { useState } from 'react';
import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useForm, Controller } from "react-hook-form";
import { EMAIL_REGEX } from '../../shared/constants/form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/lab/LoadingButton';
import Image from 'next/image';

const MESSAGE = "Se enviara un correo de confirmación en la dirección proporcionada para completar el proceso de registro en nuestra aplicación. Verifica tu bandeja de entrada y spam en caso de no encontrarlo."

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
}


export const GradesSearch: React.FC = () => {
    const [isLoading, setLoading] = useState(false);
    const { control, formState: { errors }, handleSubmit } = useForm<{ email: string }>();
    const onSubmit = handleSubmit((value) => {

    })
    const onClickRedirectToLogin = handleSubmit(async (value): Promise<void> => {

    })

    return (
        <Container>
            <FormContainer>
                <Box display="flex" flexDirection="column" alignItems="center" marginBottom={4}>
                    <Image style={{ marginRight: 8 }} src="/MIT_logo_bg.png" alt="sidebar_logo" width={150} height={150} />
                    <Typography variant="h6" color="GrayText">Students System</Typography>
                </Box>


                <Stack width="100%" spacing={5}>
                    <Alert severity="warning">
                        <AlertTitle>¡Atención!</AlertTitle>
                        {MESSAGE}
                    </Alert>
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: {
                                value: true,
                                message: 'Email Requerido'
                            },
                            pattern: {
                                value: EMAIL_REGEX,
                                message: 'Email no valido',
                            }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextField
                                type="email"
                                fullWidth
                                label="Email"
                                variant="filled"
                                margin="normal"
                                onChange={onChange}
                                value={value}
                                error={Boolean(errors?.email?.ref)}
                                helperText={errors?.email?.message}
                            />
                        )}
                    />
                </Stack>

                <Box marginTop={2}>
                    <Button loading={isLoading} onClick={onClickRedirectToLogin} size="large" fullWidth variant="contained">Continuar</Button>
                </Box>
            </FormContainer>
        </Container>
    );
}

