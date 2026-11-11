import {ROLES} from '~/consts/roles';
import CompaniesPage from '~/pages/companies/page';
import MainPage from '~/pages/main/page';
import ProfilePage from '~/pages/settings/profile/page';
import UsersPage from '~/pages/settings/users/page';

import {ROUTE_PATHS} from './paths';
import {RouteObjectWithParams} from './types';

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
        protected: [ROLES.ADMIN],
    },
    {
        path: ROUTE_PATHS.COMPANIES_PAGE,
        Component: CompaniesPage,
        protected: true,
    },
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
