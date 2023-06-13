import React, {useState, useEffect}from 'react'  
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './index.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: 'https://www.gangasupermarket.in/resources/image/18/d1/6.png',
  },
  {
    imgPath: 'https://www.gangasupermarket.in/resources/image/18/bc/b.jpg',
  }, 
  {
    imgPath: 'https://www.gangasupermarket.in/resources/image/18/d1/6.png',
  },
];


function CarousealCards() {  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className="image-container" >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className="image-list"
      >
        {images.map((step, index) => (
          <div key={step.imgPath}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                className="image-item"
                src={step.imgPath}
                alt="image"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </Button>
        }
      />
    </Box>
  );
}

export default CarousealCards;
