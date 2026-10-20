import {Box, SxProps} from '@mui/material';
import React from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '../header';

type SxMapProps<T extends string> = Record<T, SxProps>;

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
