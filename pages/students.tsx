import { NextPageWithLayout } from '../src/shared/types/page';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

import { getLayout } from '../src/shared/utils/get-layout';

export const Home: NextPageWithLayout = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
         Estudiantes
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

Home.getLayout = getLayout

export default Home;