import {createBrowserRouter, type RouteObject} from 'react-router-dom';

import {Layout} from '../components/layout/layout';
import LoginPage from '../pages/login/page';
import {layoutRoutes} from './layout-routes';

const routes: RouteObject[] = [
    {
        path: '/',
        Component: Layout,
        children: layoutRoutes,
    },
    {
        path: '/login',
        Component: LoginPage,
    },
];

export const router = createBrowserRouter(routes);
