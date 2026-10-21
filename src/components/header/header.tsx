import {Stack, Typography} from '@mui/material';
import React from 'react';

import {SxMapProps} from '~/types';

const styles: SxMapProps<'box' | 'headline'> = {
    box: {
        backgroundColor: 'black',
        minHeight: '60px',
        alignItems: 'center',
        padding: [1, 2],
        position: 'sticky',
        top: 0,
        zIndex: 1,
    },
    headline: {
        color: 'white',
        fontSize: 20,
    },
};

export const Header = (): React.JSX.Element => {
    return (
        <Stack component="header" direction="row" sx={styles.box}>
            <Typography sx={styles.headline}>Mini CRM</Typography>
        </Stack>
    );
};
