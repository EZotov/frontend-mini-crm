import {useUnit} from 'effector-react';
import React from 'react';
import {matchRoutes, Navigate, Outlet, useLocation} from 'react-router-dom';

import {$accessToken} from '~/models/auth';
import {routes} from '~/router';
import {ROUTE_PATHS} from '~/router/paths';

export const AuthChecker = (): React.JSX.Element => {
    const location = useLocation();

    const accessToken = useUnit($accessToken);

    const matches = matchRoutes(routes, location.pathname);
    const currentRouteObject = matches?.[matches.length - 1]?.route;

    if (currentRouteObject?.protected && !accessToken) {
        return <Navigate to={ROUTE_PATHS.LOGIN} replace />;
    }

    return <Outlet />;
};
