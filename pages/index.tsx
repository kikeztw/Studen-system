import * as React from 'react';
import { useRouter } from 'next/router'
import { NextPageWithLayout } from '../src/shared/types/page';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material';
import Image from 'next/image';
import ContainerMui from '@mui/material/Container';
import Button from '@mui/material/Button';

const Container = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center'
});

export const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const onClickRedirectToLogin = (): void => {
    router.push('/login');
  }

  const onClickRedirectToSearch = (): void => {
    router.push('/grades/search');
  }

  return (
    <Container>
      <ContainerMui maxWidth="lg">
        <Grid container spacing={10}>
          <Grid xs={6} item>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image style={{ marginRight: 8 }} src="/MIT_logo_bg.png" alt="sidebar_logo" width={350} height={350} />
              <Typography variant="h5">Students System</Typography>
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Typography sx={{ marginBottom: 5 }} variant="h3" textAlign="center">Acceso al Sistema</Typography>
            <Button onClick={onClickRedirectToLogin} sx={{ marginBottom: 3 }} size="large" fullWidth variant="contained" color="primary">Administrador</Button>
            <Button onClick={onClickRedirectToSearch} size="large" fullWidth variant="contained" color="primary">Estudiante</Button>
          </Grid>
        </Grid>
      </ContainerMui>
    </Container>
  );
}

export default Home;