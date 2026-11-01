import {Box, CircularProgress, Typography} from '@mui/material';
import {useGate, useUnit} from 'effector-react';
import React from 'react';
import {matchRoutes, Navigate, Outlet, useLocation} from 'react-router-dom';

import {$accessToken, $isAuthCheckingComplete, $myProfile, appAuthGate} from '~/models/auth';
import {routes} from '~/router';
import {ROUTE_PATHS} from '~/router/paths';

export const AuthChecker = (): React.JSX.Element => {
    const [accessToken, isAuthCheckingComplete, myProfile] = useUnit([
        $accessToken,
        $isAuthCheckingComplete,
        $myProfile,
    ]);

    const location = useLocation();

    const matches = matchRoutes(routes, location.pathname);
    const currentRouteObject = matches?.[matches.length - 1]?.route;

    const isProtected = !!currentRouteObject?.protected;

    let accessRoles: string[] = [];

    if (Array.isArray(currentRouteObject?.protected)) {
        accessRoles = currentRouteObject.protected;
    }

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

    if (accessRoles.length && !accessRoles.includes(myProfile?.role ?? '')) {
        // Временно
        return (
            <Box sx={{p: 2}}>
                <Typography color="primary.main" align="center">
                    У вас недостаточно прав для доступа к этому разделу
                </Typography>
            </Box>
        );
    }

    return <Outlet />;
};
