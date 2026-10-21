import type {RouteObject} from 'react-router-dom';

import {PageMenuContainer} from '~/components/page-menu-container';
import LoginPage from '~/pages/login/page';

import {routesWithMenu} from './menu-routes';
import {ROUTE_PATHS} from './paths';

export const layoutRoutes: RouteObject[] = [
    {
        Component: PageMenuContainer,
        children: routesWithMenu,
    },
    {
        path: ROUTE_PATHS.LOGIN,
        Component: LoginPage,
    },
];
