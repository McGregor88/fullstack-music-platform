import React from 'react';
import { Card, Grid, IconButton } from '@material-ui/core';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';

import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.scss';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
    return (
        <Card className={styles.track}> 
            <IconButton sx={{ mr: 2.5 }}>
                {active
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
            <img
                width={70}
                height={70}
                src={track.picture}
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
            <IconButton sx ={{ ml: 'auto' }}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;