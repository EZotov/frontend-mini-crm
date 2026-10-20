import {Box} from '@mui/material';
import React from 'react';
import {Outlet} from 'react-router-dom';

import {SxMapProps} from '~/types';

import {Header} from '../header';

const styles: SxMapProps<'main'> = {
    main: {
        flexGrow: 1,
        backgroundColor: '#7e8389', // Базовый нейтральный цвет фона
        backgroundImage: `
          radial-gradient(at 90% 10%, hsla(183, 35%, 52%, 1) 0px, transparent 50%),
          radial-gradient(at 10% 20%, hsla(0, 5%, 56%, 1) 0px, transparent 50%),
          radial-gradient(at 10% 90%, hsla(24, 19%, 46%, 1) 0px, transparent 50%),
          radial-gradient(at 90% 90%, hsla(33, 13%, 53%, 1) 0px, transparent 50%)
        `,
        backgroundAttachment: 'fixed',
    },
};

export const Layout = () => {
    return (
        <>
            <Header />
            <Box sx={styles.main} component="main">
                <Outlet />
            </Box>
            <footer></footer>
        </>
    );
};
