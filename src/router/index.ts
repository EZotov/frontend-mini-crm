import {createBrowserRouter, type RouteObject} from 'react-router-dom';

import {Layout} from '../components/layout/layout';
import {layoutRoutes} from './layout-routes';

const routes: RouteObject[] = [
    {
        path: '/',
        Component: Layout,
        children: layoutRoutes,
    },
];

export const router = createBrowserRouter(routes);
