import {Stack, Typography} from '@mui/material';
import React from 'react';

import {Container} from '~/components/container';
import {ROUTE_PATHS} from '~/router/paths';

import {NavigationItem} from './navigation-item';

const navItems = [
    {
        id: 'menu-item-main',
        title: 'Главная',
        link: ROUTE_PATHS.MAIN_PAGE,
    },
    {
        id: 'menu-item-users',
        title: 'Пользователи',
        link: ROUTE_PATHS.USERS_PAGE,
    },
    {
        id: 'menu-item-deals',
        title: 'Сделки',
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

export const NavigationMenu = (): React.JSX.Element => {
    return (
        <Container
            component="aside"
            sx={{
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 3,
                paddingRight: 3,
                borderRadius: 0,
                minWidth: 0,
                padding: 0,
                height: 'calc(100vh - 62px)',
                flexBasis: '15%',
                flexShrink: 0,
                position: 'sticky',
                top: 62,
                left: 0,
            }}
        >
            <Stack spacing={3}>
                <Typography component="h2" sx={{fontSize: 24}} align="center">
                    Навигация
                </Typography>
                <Stack direction="column" spacing={2}>
                    {navItems.map((nav) => (
                        <NavigationItem key={`menu-item-${nav.id}`} title={nav.title} to={nav.link} />
                    ))}
                </Stack>
            </Stack>
        </Container>
    );
};
