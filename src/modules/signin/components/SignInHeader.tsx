import React  from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

export const SignInHeader: React.FC = () => (
  <Box display="flex" flexDirection="column" alignItems="center" marginBottom={4}>
    <Image style={{ marginRight: 8 }} src="/MIT_logo_bg.png" alt="sidebar_logo" width={150} height={150} />
    <Typography variant="h6" color="GrayText">Students System</Typography>
  </Box>
)