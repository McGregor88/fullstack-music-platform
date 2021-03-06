import React, { useEffect, ChangeEvent } from 'react';
import { IconButton, Grid } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';

import { ITrack } from '../types/track';
import styles from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

let audio;

const Player = () => {

    const { 
        pause, 
        active, 
        duration, 
        currentTime, 
        volume 
    } = useTypedSelector(state => state.player);

    const { 
        playTrack, 
        pauseTrack, 
        setActiveTrack, 
        setDuration, 
        setCurrentTime, 
        setVolume 
    } = useActions();

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            play();
        }
    }, [active]);

    const setAudio = () => {
        if (active) {
            audio.src = 'http://localhost:5000/' + active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration));
            };
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime));
            };
        }
    };

    const play = () => {
        if (pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    };

    const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value));
    };

    const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        setCurrentTime(Number(e.target.value));
    };

    if (!active) {
        return null;
    }

    return (
        <div className={styles.player}>
            <IconButton 
                sx={{ mr: 2.5 }}
                onClick={play}
            >
                {pause
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
                <div>{ active?.name }</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{ active?.artist }</div>
            </Grid>
            <TrackProgress
                left={currentTime}
                right={duration}
                onChange={changeCurrentTime}
            />
            <VolumeUp sx={{ ml: 'auto' }} />
            <TrackProgress
                left={volume}
                right={100}
                onChange={changeVolume}
            />
        </div>
    );
};

export default Player;