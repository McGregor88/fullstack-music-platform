import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, IconButton } from '@material-ui/core';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';

import { ITrack } from '../types/track';
import { useActions } from '../hooks/useActions';
import styles from '../styles/TrackItem.module.scss';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
    const router = useRouter();
    const { playTrack, pauseTrack, setActiveTrack } = useActions();

    const play = e => {
        e.stopPropagation();
        setActiveTrack(track);
        playTrack();
    };
    
    return (
        <Card 
            className={styles.track}
            onClick={() => router.push(`/tracks/${track._id}`)}
        > 
            <IconButton 
                sx={{ mr: 2.5 }}
                onClick={play}
            >
                {active
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
            <img
                width={70}
                height={70}
                src={'http://localhost:5000/' + track.picture}
                className={styles.image}
            />
            <Grid
                container
                direction="column"
                sx={{
                    width: 200,
                    ml: 2.5,
                    mr: 2.5
                }}
            >
                <div>{ track.name }</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{ track.artist }</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton 
                sx ={{ ml: 'auto' }}
                onClick={e => e.stopPropagation()}
            >
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;