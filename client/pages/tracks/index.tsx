import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Grid, Card, Button, Box, TextField } from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks, searchTracks } from '../../store/actions-creators/track';

const Index = () => {
    const router = useRouter();
    const { tracks, error } = useTypedSelector(state => state.track);
    const [ query, setQuery ] = useState<string>('');
    const [timer, setTimer] = useState(null);
    const dispatch = useDispatch() as NextThunkDispatch;

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setQuery(value);
        if (timer) clearTimeout(timer);

        setTimer(setTimeout(async () => {
            await dispatch(await searchTracks(value));
        }, 500));
    };

    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        );
    }

    return (
        <MainLayout title="Список треков - музыкальная платформа">
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
                    <TextField 
                        fullWidth
                        value={query}
                        onChange={search}
                    />
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
});