import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Button, Grid, TextField } from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import FileUpload from '../../components/FileUpload';
import { useInput } from '../../hooks/useInput';

const Create = () => {

    const [ activeStep, setActiveStep ] = useState(0);
    const [ picture, setPicture ] = useState(null);
    const [ audio, setAudio ] = useState(null);
    const router = useRouter();
    const name = useInput('');
    const artist = useInput('');
    const text = useInput('');

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1);
        } else {
            const formData = new FormData();

            formData.append('name', name.value);
            formData.append('artist', artist.value);
            formData.append('text', text.value);
            formData.append('picture', picture);
            formData.append('audio', audio);

            axios.post('http://localhost:5000/tracks', formData)
                .then(response => router.push('/tracks'))
                .catch(error => console.error(error));
        }
    };

    const prev = () => {
        setActiveStep(prev => prev - 1);
    };

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid
                        container
                        direction="column"
                        sx={{ p: 2.5 }}
                    >
                        <TextField 
                            {...name}
                            label="Название трека"
                        />
                        <TextField 
                            {...artist}
                            label="Исполнитель"
                            sx={{ mt: 1.25 }}
                        />
                        <TextField 
                            {...text}
                            label="Текст песни"
                            multiline
                            rows={3}
                            sx={{ mt: 1.25 }}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload 
                        label="Загрузите изображение"
                        setFile={setPicture} 
                        accept="image/*"
                    />
                }
                {activeStep === 2 &&
                    <FileUpload 
                        label="Загрузите аудио"
                        setFile={setAudio} 
                        accept="audio/*"
                    />
                }
            </StepWrapper>
            <Grid
                container
                justifyContent="space-between"
            >
                <Button 
                    disabled={activeStep === 0}
                    variant="outlined" 
                    onClick={prev}
                >
                    Назад
                </Button>
                <Button 
                    variant="contained" 
                    onClick={next}
                >
                    Далее
                </Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;