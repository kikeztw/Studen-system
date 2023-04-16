import * as React from 'react';
import Box from '@mui/material/Box';
import StepperMUI from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

type StepperProps = {
  activeStep: number;
  steps: {
    label: string;
    component: React.ReactNode;
  }[]
}

export const Stepper: React.FC<StepperProps> = ({ steps,  activeStep }) => (
  <Box sx={{ width: '100%' }}>
    <StepperMUI sx={{ marginBottom: 5 }} activeStep={1} alternativeLabel>
      {steps.map((step) => (
        <Step key={step.label}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </StepperMUI>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: 1 }}>
        {steps[activeStep].component}
      </Box>
    </Box>
  </Box>
);