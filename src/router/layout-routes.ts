import {PageMenuContainer} from '~/components/page-menu-container';
import LoginPage from '~/pages/login/page';
import {RouteObjectWithParams} from '~/types';

import {routesWithMenu} from './menu-routes';
import {ROUTE_PATHS} from './paths';

export const layoutRoutes: RouteObjectWithParams[] = [
    {
        Component: PageMenuContainer,
        children: routesWithMenu,
    },
    {
        path: ROUTE_PATHS.LOGIN,
        Component: LoginPage,
    },
];
