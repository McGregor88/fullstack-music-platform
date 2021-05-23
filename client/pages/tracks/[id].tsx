import React from 'react';
import { useRouter } from 'next/router';
import { Button, Grid, TextField } from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const TrackPage = () => {

    const router = useRouter();
    const track: ITrack = {
        _id: '1',
        name: 'Трек 1',
        artist: 'Исполнитель 1',
        text: 'Какой-то текст',
        listens: 5,
        audio: 'http://localhost:5000/audio/89384c5f-dfc3-4057-b3ad-fd5bc7e3037b.mp3',
        picture: 'http://localhost:5000/image/6704c041-c541-4081-88c9-561dcb3dcb99.jpg',
        comments: []
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
                    src={track.picture}
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
                    fullWidth
                    label="Ваше имя"
                />
                <TextField 
                    fullWidth
                    multiline
                    rows={4}
                    label="Комментарий"
                />
                <Button variant="contained">
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