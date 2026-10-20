import type {RouteObject} from 'react-router-dom';

import LoginPage from '~/pages/login/page';

import MainPage from '../pages/main/page';

export const layoutRoutes: RouteObject[] = [
    {
        index: true,
        Component: MainPage,
    },
    {
        path: '/login',
        Component: LoginPage,
    },
];
