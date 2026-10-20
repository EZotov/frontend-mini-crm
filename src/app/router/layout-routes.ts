import type {RouteObject} from 'react-router-dom';

import MainPage from '../pages/main/page';

export const layoutRoutes: RouteObject[] = [
    {
        path: '/main',
        Component: MainPage,
    },
];
