import React from 'react';
import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { StudentCollectionTye } from '../../../shared/types/collections';

const Container = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(3),
}))

export const StudenDetail: React.FC<{ data?: StudentCollectionTye }> = ({ data }) => (
  <Container>
    <Paper>
      <Stack direction="row" spacing={3}>
        <Typography variant="subtitle1">
          {`Nombres: ${data?.firstname}`}
        </Typography>
        <Typography variant="subtitle1">
          {`Nombres: ${data?.lastname}`}
        </Typography>
        <Typography variant="subtitle1">
          {`Nombres: ${data?.ci}`}
        </Typography>
      </Stack>
    </Paper>
  </Container>
);

