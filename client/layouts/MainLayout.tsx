import React, { FC } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';

import Navbar from '../components/Navbar';
import Player from '../components/Player';

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ 
    children,
    title,
    description,
    keywords
}) => {
    return (
        <>
            <Head>
                <title>{title || 'Музыкальная платформа'}</title>
                <meta name="description" content={"Музыкальная платформа. Здесь каждый может оставить свой трек!" + description || ''} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={keywords || 'Музыка, треки, артисты'} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <Container sx={{ pt: 12 }}>
                { children }
            </Container>
            <Player />
        </>
    );
};

export default MainLayout;