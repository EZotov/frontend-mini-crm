import {Box} from '@mui/material';
import React from 'react';

import {SxMapProps} from '~/types';

const styles: SxMapProps<'box'> = {
    box: {
        backgroundColor: 'black',
        minHeight: '60px',
    },
};

export const Header = (): React.JSX.Element => {
    return (
        <Box sx={styles.box}>
            <h2>Mini CRM</h2>
        </Box>
    );
};
