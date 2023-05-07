import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
import { useSnackbar } from 'notistack';

import { signInAnony } from '../../shared/firebase/actions/auth';
import { getStudentByCI } from '../../shared/firebase/actions/student';

const MESSAGE = "Introduce la cedula del estudiante que deseas consultar."

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
  ci: string;
}


export const GradesSearch: React.FC = () => {
    const [isLoading, setLoading] = useState(false);
    const { control, formState: { errors }, handleSubmit } = useForm<FormStateType>();
		const router = useRouter();
		const { enqueueSnackbar } = useSnackbar();

		useEffect(() =>{
			signInAnony();
		},[]);

    const onClickRedirectToLogin = handleSubmit(async (value): Promise<void> => {
			setLoading(true);
			const response = await getStudentByCI(value.ci);
			if(response?.ci){
				router.push(`/grades/result?ci=${response?.ci}`);
			}else{
				setLoading(false);
				enqueueSnackbar('Estudiante no encontrado', { variant: 'error' });
			}
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
									name="ci"
									rules={{
										required: {
											value: true,
											message: 'La cedula es Requerida'
										},
									}}
									render={({ field: { onChange, value } }) => (
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
						</Stack>
						<Box marginTop={2}>
								<Button loading={isLoading} onClick={onClickRedirectToLogin} size="large" fullWidth variant="contained">Continuar</Button>
						</Box>
				</FormContainer>
      </Container>
    );
}

