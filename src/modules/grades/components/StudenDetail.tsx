import React from 'react';
import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { StudentCollectionTye } from '../../../shared/types/collections';

const Container = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(3),
}))

export const StudenDetail: React.FC<{ data?: StudentCollectionTye }> = ({ data }) => (
  <Container>
    <Paper sx={{ padding: 3, display: 'flex'}}>
      <Avatar 
        variant="rounded"
        sx={{ backgroundColor: '#52c41a', width: 150, height: 150, marginRight: 3 }} 
        alt={`${data?.firstname[0]} ${data?.lastname[0]}`} 
      />
      <Stack direction="column" spacing={1}>
        <Stack direction="row" spacing={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Nombre
          </Typography>
          <Typography variant="subtitle1">
            {data?.firstname}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Apellido
          </Typography>
          <Typography variant="subtitle1">
            {data?.lastname}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Cedula
          </Typography>
          <Typography variant="subtitle1">
            {data?.ci}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  </Container>
);

