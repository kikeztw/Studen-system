import React, { useMemo, useState } from 'react';
import { styled } from '@mui/material';
import ContainerMUI from '@mui/material/Container';

import { Stepper } from '../../shared/components/CustomStepper';
import { ChangePassowrdSignIn } from './components/ChangePassowrdSignIn';
import { ProfileFormSignIn } from './components/ProfileFormSignIn';
import { SignInHeader } from './components/SignInHeader';


const Container = styled('div')({
  backgroundColor: '#fff',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const SignIn: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const steps = useMemo(() => {
    return [
      {
        label: 'Escribe una contraseña',
        component: <ChangePassowrdSignIn onFinish={() => setCurrent(1)} />
      },
      {
        label: 'Introduce tus datos',
        component: <ProfileFormSignIn />
      }
    ]
  }, []);

  return(
    <Container>
      <ContainerMUI maxWidth="sm">
        <SignInHeader />
        <Stepper activeStep={current} steps={steps} />
      </ContainerMUI>
    </Container>
  )
}