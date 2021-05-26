import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import Navbar from '../components/Navbar';
import Player from '../components/Player';

const MainLayout: FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container sx={{ pt: 12 }}>
                { children }
            </Container>
            <Player />
        </>
    );
};

export default MainLayout;