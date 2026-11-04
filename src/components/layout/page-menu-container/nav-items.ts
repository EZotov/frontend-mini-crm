import type {NavItem} from '~/components/navigation-menu';
import {ROUTE_PATHS} from '~/router/paths';

export const navItems: NavItem[] = [
    {
        id: 'menu-item-main',
        title: 'Главная',
        link: ROUTE_PATHS.MAIN_PAGE,
    },
    {
        id: 'menu-item-deals',
        title: 'Сделки',
        link: ROUTE_PATHS.DEALS_PAGE,
    },
    {
        id: 'menu-item-filters',
        title: 'Воронки',
        link: ROUTE_PATHS.DEALS_PAGE,
    },
    {
        id: 'menu-item-activities',
        title: 'Задачи',
        link: ROUTE_PATHS.ACTIVITIES_PAGE,
    },
    {
        id: 'menu-item-companies',
        title: 'Компании',
        link: ROUTE_PATHS.COMPANIES_PAGE,
    },
    {
        id: 'menu-item-customers',
        title: 'Заказчики',
        link: ROUTE_PATHS.CUSTOMERS_PAGE,
    },
];
