import {ThemeProvider} from '@mui/material/styles';
import type {Scope} from 'effector';
import {Provider as EffectorProvider} from 'effector-react';
import {RouterProvider} from 'react-router-dom';

import {theme} from '~/styles/theme';

import {router} from '../router';

import '~/styles/index.css';

interface AppProps {
    scope: Scope;
}

export const App = ({scope}: AppProps) => {
    return (
        <EffectorProvider value={scope}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </EffectorProvider>
    );
};
