import React from 'react';
import { useRouter } from 'next/router';
import { Grid, Card, Button, Box } from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks } from '../../store/actions-creators/track';

const Index = () => {
    const router = useRouter();
    const { tracks, error } = useTypedSelector(state => state.track);

    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        );
    }

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

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
});