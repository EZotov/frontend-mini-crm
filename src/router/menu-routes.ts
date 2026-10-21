import {RouteObject} from 'react-router-dom';

import MainPage from '~/pages/main/page';

export const routesWithMenu: RouteObject[] = [
    {
        index: true,
        Component: MainPage,
    },
    // {
    //     path: ROUTE_PATHS.USERS_PAGE,
    //     Component: UsersPage,
    // },
    // {
    //     path: ROUTE_PATHS.COMPANIES_PAGE,
    //     Component: CompaniesPage,
    // },
    // {
    //     path: ROUTE_PATHS.CUSTOMERS_PAGE,
    //     Component: CustomersPage,
    // },
    // {
    //     path: ROUTE_PATHS.DEALS_PAGE,
    //     Component: DealsPage,
    // },
    // {
    //     path: ROUTE_PATHS.ACTIVITIES_PAGE,
    //     Component: ActivitiesPage,
    // },
];
