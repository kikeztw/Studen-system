import { NextPageWithLayout } from '../src/shared/types/page';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: alpha(theme.palette.primary.main, 0.75),
}));

const FormContainer = styled('div')({
  width: 400,
  padding: 30,
  backgroundColor: '#fff',
  borderRadius: 15,
})

export const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const onClickRedirectToLogin = (): void => {
    router.push('/teachers');
  }
  return (
    <Container>
      <FormContainer>
        <Box display="flex" flexDirection="column" alignItems="center" marginBottom={4}>
          <Image style={{ marginRight: 8 }} src="/MIT_logo_bg.png" alt="sidebar_logo" width={150} height={150} />
          <Typography variant="h6" color="GrayText">Students System</Typography>
        </Box>
        <TextField fullWidth margin="dense" label="User" />
        <TextField fullWidth margin="dense" label="Password"/>
        <Box marginTop={2}>
          <Button onClick={onClickRedirectToLogin} size="large" fullWidth variant="contained">Login</Button>
        </Box>
      </FormContainer>
    </Container>
  );
}

export default Home;