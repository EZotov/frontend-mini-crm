import {Box, CircularProgress} from '@mui/material';
import {useGate, useUnit} from 'effector-react';
import React from 'react';
import {matchRoutes, Navigate, Outlet, useLocation} from 'react-router-dom';

import {appAuthGate} from '~/models/app-auth-init';
import {$accessToken, $isAuthCheckingEnabled} from '~/models/auth';
import {routes} from '~/router';
import {ROUTE_PATHS} from '~/router/paths';

export const AuthChecker = (): React.JSX.Element => {
    useGate(appAuthGate);

    const location = useLocation();

    const [accessToken, isAuthCheckingEnabled] = useUnit([$accessToken, $isAuthCheckingEnabled]);

    if (!isAuthCheckingEnabled) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    width: '100%',
                }}
            >
                <CircularProgress size={60} thickness={4} color="primary" />
            </Box>
        );
    }

    const matches = matchRoutes(routes, location.pathname);
    const currentRouteObject = matches?.[matches.length - 1]?.route;

    if (currentRouteObject?.protected && !accessToken) {
        return <Navigate to={ROUTE_PATHS.LOGIN} replace />;
    }

    return <Outlet />;
};
