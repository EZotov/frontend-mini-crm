import MainPage from '~/pages/main/page';
import ProfilePage from '~/pages/settings/profile/page';
import UsersPage from '~/pages/settings/users/page';
import {RouteObjectWithParams} from '~/types';

import {ROUTE_PATHS} from './paths';

export const routesWithMenu: RouteObjectWithParams[] = [
    {
        index: true,
        Component: MainPage,
        protected: true,
    },
    {
        path: ROUTE_PATHS.PROFILE,
        Component: ProfilePage,
        protected: true,
    },
    {
        path: ROUTE_PATHS.USERS_PAGE,
        Component: UsersPage,
        protected: true,
    },
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
