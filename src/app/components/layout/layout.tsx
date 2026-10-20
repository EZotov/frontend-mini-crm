import {Box} from '@mui/material';
import React from 'react';
import {Outlet} from 'react-router-dom';

import {SxMapProps} from '~/types';

import {Header} from '../header';

const styles: SxMapProps<'main'> = {
    main: {flexGrow: 1},
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
