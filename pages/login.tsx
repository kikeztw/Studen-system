import { NextPageWithLayout } from '../src/shared/types/page';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.primary.main, 0.75),
}));

const FormContainer = styled('div')({
  width: 400,
  padding: 30,
  backgroundColor: '#fff',
  borderRadius: 15,
})

export const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <FormContainer>
        <TextField fullWidth margin="dense" label="User" />
        <TextField fullWidth margin="dense" label="Password"/>
        <Box marginTop={2}>
          <Button size="large" fullWidth variant="contained">Login</Button>
        </Box>
      </FormContainer>
    </Container>
  );
}

export default Home;