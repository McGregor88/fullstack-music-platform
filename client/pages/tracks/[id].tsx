import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Button, Grid, TextField } from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import { useInput } from '../../hooks/useInput';
import { ITrack } from '../../types/track';

const TrackPage = ({ serverTrack }) => {

    const [track, setTrack] = useState<ITrack>(serverTrack);
    const router = useRouter();
    const username = useInput('');
    const text = useInput('');

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            });

            setTrack({
                ...track, 
                comments: [ ...track.comments, response.data ]
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <MainLayout>
            <Button 
                variant="outlined"
                onClick={() => router.push('/tracks')}
                style={{ fontSize: 32 }}
            >
                К списку
            </Button>
            <Grid 
                container
                sx={{ 
                    mt: 2.5,
                    mb: 2.5 
                }}
            >
                <img 
                    src={'http://localhost:5000/' + track.picture}
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover' }}
                />
                <div style={{ marginLeft: 30 }}>
                    <h1>Название трека - { track.name }</h1>
                    <h1>Исполнитель - { track.artist }</h1>
                    <h1>Прослушиваний - { track.listens }</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField 
                    {...username}
                    fullWidth
                    label="Ваше имя"
                />
                <TextField 
                    {...text}
                    fullWidth
                    multiline
                    rows={4}
                    label="Комментарий"
                />
                <Button 
                    variant="contained"
                    onClick={addComment}
                >
                    Отправить
                </Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
                    <div>
                        <div>Автор - { comment.username }</div>
                        <div>Комментарий - { comment.text }</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await axios.get(`http://localhost:5000/tracks/${params.id}`);

    return {
        props: {
            serverTrack: response.data
        }
    };
};