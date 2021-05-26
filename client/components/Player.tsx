import React from 'react';
import { IconButton, Grid } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';

import { ITrack } from '../types/track';
import styles from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';

const Player = () => {

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
    const active = false;

    return (
        <div className={styles.player}>
            <IconButton 
                sx={{ mr: 2.5 }}
                onClick={e => e.stopPropagation()}
            >
                {active
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
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
            <TrackProgress
                left={0}
                right={100}
                onChange={() => {}}
            />
            <VolumeUp sx={{ ml: 'auto' }} />
            <TrackProgress
                left={0}
                right={100}
                onChange={() => {}}
            />
        </div>
    );
};

export default Player;