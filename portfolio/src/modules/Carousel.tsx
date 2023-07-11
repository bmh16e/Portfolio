import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';

import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid, Paper, Typography } from '@mui/material';

const storybookImg = require('../Assets/static/images/Storybook.jpg') as string;
const unrealImg = require('../Assets/static/images/Unreal_Engine.jpg') as string;
const vsCodeImg = require('../Assets/static/images/VSCode.jpg') as string;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export interface CarouselProps {}

const images = [
  {
    label: 'Storybook',
    imgPath: storybookImg
  },
  {
    label: 'Unreal Engine',
    imgPath: unrealImg
  },
  {
    label: 'Site Source Code',
    imgPath: vsCodeImg
  }
];

export const Carousel: React.FC<CarouselProps> = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Grid container sm={5}>
      <Paper square elevation={2} sx={{ bgcolor: 'rgb(237, 237, 237)', p: 2, px: 6 }}>
        <Typography
          color="rgba(14, 35, 54,1)"
          fontWeight="bold"
          fontSize="clamp(1.1rem,3vw,1.9rem)"
          variant="subtitle2">
          {images[activeStep].label}
        </Typography>

        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents>
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    paddingY: 3,
                    height: '50vh',
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%'
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{ bgcolor: 'rgb(237, 237, 237)' }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </Paper>
    </Grid>
  );
};
