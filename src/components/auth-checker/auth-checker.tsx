import {Box, CircularProgress} from '@mui/material';
import {useGate, useUnit} from 'effector-react';
import React from 'react';
import {matchRoutes, Navigate, Outlet, useLocation} from 'react-router-dom';

import {$accessToken, $isAuthCheckingComplete, appAuthGate} from '~/models/auth';
import {routes} from '~/router';
import {ROUTE_PATHS} from '~/router/paths';

export const AuthChecker = (): React.JSX.Element => {
    const [accessToken, isAuthCheckingComplete] = useUnit([$accessToken, $isAuthCheckingComplete]);

    const location = useLocation();

    const matches = matchRoutes(routes, location.pathname);
    const currentRouteObject = matches?.[matches.length - 1]?.route;
    const isProtected = currentRouteObject?.protected ?? false;

    useGate(appAuthGate, {isProtected});

    if (!isProtected) {
        return <Outlet />;
    }

    if (!isAuthCheckingComplete) {
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

    if (!accessToken) {
        return <Navigate to={ROUTE_PATHS.LOGIN} replace />;
    }

    return <Outlet />;
};
