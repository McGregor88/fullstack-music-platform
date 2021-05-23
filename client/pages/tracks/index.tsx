import React from 'react';
import { useRouter } from 'next/router';
import { Grid, Card, Button, Box } from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [{
        _id: '1',
        name: 'Трек 1',
        artist: 'Исполнитель 1',
        text: 'Какой-то текст',
        listens: 5,
        audio: 'http://localhost:5000/audio/89384c5f-dfc3-4057-b3ad-fd5bc7e3037b.mp3',
        picture: 'http://localhost:5000/image/6704c041-c541-4081-88c9-561dcb3dcb99.jpg',
        comments: []
    }, {
        _id: '2',
        name: 'Трек 2',
        artist: 'Исполнитель 2',
        text: 'Какой-то текст',
        listens: 5,
        audio: 'http://localhost:5000/audio/89384c5f-dfc3-4057-b3ad-fd5bc7e3037b.mp3',
        picture: 'http://localhost:5000/image/6704c041-c541-4081-88c9-561dcb3dcb99.jpg',
        comments: []
    }, {
        _id: '3',
        name: 'Трек 3',
        artist: 'Исполнитель 3',
        text: 'Какой-то текст',
        listens: 5,
        audio: 'http://localhost:5000/audio/89384c5f-dfc3-4057-b3ad-fd5bc7e3037b.mp3',
        picture: 'http://localhost:5000/image/6704c041-c541-4081-88c9-561dcb3dcb99.jpg',
        comments: []
    }];

    return (
        <MainLayout>
            <Grid 
                container
                justifyContent="center"
            >
                <Card sx={{ width: 900 }}>
                    <Box p={3}>
                        <Grid 
                            container 
                            justifyContent="space-between"
                        >
                            <h1>Список треков</h1>
                            <Button 
                                variant="contained" 
                                onClick={ () => router.push('/tracks/create') }
                            >
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;