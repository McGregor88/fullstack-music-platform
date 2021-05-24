import React from 'react';
import { Card, Container, Grid, Step, StepLabel, Stepper } from '@material-ui/core';

interface StepWrapperProps {
    activeStep: number;
}

const steps = ['Информация о треке', 'Загрузить обложку', 'Загрузить трек'];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step
                        key={index}
                        completed={activeStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid 
                container
                justifyContent="center"
                sx={{
                    mt: 8,
                    mb: 8,
                    height: 270
                }}
            >
                <Card sx={{ width: 600 }} >
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;