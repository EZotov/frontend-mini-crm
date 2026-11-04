import {Stack, Typography} from '@mui/material';
import {useUnit} from 'effector-react';
import React from 'react';

import {$accessToken} from '~/models/auth';
import type {SxMapProps} from '~/styles/types';

import {SignedInMenu} from './components/signed-in-menu';

const styles: SxMapProps<'box' | 'headline'> = {
    box: {
        backgroundColor: 'black',
        minHeight: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    const [accessToken] = useUnit([$accessToken]);

    return (
        <Stack component="header" direction="row" sx={styles.box} spacing={2}>
            <Typography sx={styles.headline}>Mini CRM</Typography>
            {accessToken && <SignedInMenu />}
        </Stack>
    );
};
