import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, styled } from '@mui/material';
import ContainerMUI from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import { Stepper } from '../../shared/components/CustomStepper';
import { ChangePassowrdSignIn } from './components/ChangePassowrdSignIn';
import { ProfileFormSignIn } from './components/ProfileFormSignIn';
import { SignInHeader } from './components/SignInHeader';

import { signInWithEmail } from '../../shared/firebase/actions/auth';
import { UserCredential } from 'firebase/auth';

const Container = styled('div')({
  backgroundColor: '#fff',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const SignIn: React.FC = () => {
  const { query } = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const steps = useMemo(() => {
    return [
      {
        label: 'Selecciona una contrasena',
        component: <ChangePassowrdSignIn onFinish={() => setCurrent(1)} />
      },
      {
        label: 'Introduce tus datos',
        component: <ProfileFormSignIn />
      }
    ]
  }, []);

  const handlerSignInWithEmail = async (): Promise<void> => {
    if(typeof query.email !== 'string'){
      return;
    }
    console.log('running', query);
    try {
      await signInWithEmail(query.email);
      setLoading(false);
    } catch (error) {
      console.log('error');
    }
  }

  useEffect(() => {
    handlerSignInWithEmail();
  }, [query]);
  
  return(
    <Container>
      <ContainerMUI maxWidth="sm">
        <SignInHeader />
        {!isLoading ?(
           <Stepper activeStep={current} steps={steps} />
        ):(
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 300 }}>
            <CircularProgress />
          </Box>
        )}
      </ContainerMUI>
    </Container>
  )
}