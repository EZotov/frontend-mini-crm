import {createBrowserRouter} from 'react-router-dom';

import {AuthChecker} from '~/components/auth-checker';
import {RouteObjectWithParams} from '~/types';

import {Layout} from '../components/layout/layout';
import {layoutRoutes} from './layout-routes';

export const routes: RouteObjectWithParams[] = [
    {
        path: '/',
        Component: AuthChecker,
        children: [
            {
                Component: Layout,
                children: layoutRoutes,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
