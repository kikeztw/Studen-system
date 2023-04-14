import React from 'react';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useForm, Controller } from "react-hook-form";


import { Dialog } from '../../../shared/components/dialog';
import { EMAIL_REGEX } from '../../../shared/constants/form';
import { inviteCoordinador } from '../../../shared/firebase/actions';

const MESSAGE = "Se enviara un correo de confirmación en la dirección proporcionada para completar el proceso de registro en nuestra aplicación. Verifica tu bandeja de entrada y spam en caso de no encontrarlo."

type CreateCoordinadorProps = {
  open: boolean;
  onClose: () => void;
}

export const CreateCoordinador: React.FC<CreateCoordinadorProps> = ({
  open,
  onClose,
}) => {
  const {  control, formState: { errors }, handleSubmit } = useForm<{ email: string }>();
  const onSubmit = handleSubmit((value) => {
    inviteCoordinador(value.email);
  })
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      onClickConfirm={onSubmit}
      title="Invitar Coordinador">
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
            pattern:{
              value: EMAIL_REGEX,
              message: 'Email no valido',
            }
          }}
          render={({field: { onChange, value } }) => (
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
    </Dialog>
  );
}
