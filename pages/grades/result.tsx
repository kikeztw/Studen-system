import { useRouter } from 'next/router';
import { Container, Box, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NextPageWithLayout } from '../../src/shared/types/page';
import { Grades } from '../../src/modules/grades/Grades';

export const ResultView: NextPageWithLayout = () => {
  const router = useRouter();
  return(
    <Box minHeight="100vh" paddingTop={2} paddingLeft={2}>
      <Button onClick={() => router.back()} startIcon={<ArrowBackIosIcon />}>
        Volver 
      </Button>
      <Container maxWidth="md" sx={{ minHeight: '100vh', alignItems: 'center', display: 'flex'}}>
        <Box width="100%">
          <Grades isDisabledRegister />
        </Box>
      </Container>
    </Box>
  );
}

export default ResultView;