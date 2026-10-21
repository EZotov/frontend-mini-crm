import {Button, Stack, Typography} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';

import {ROUTE_PATHS} from '~/router/paths';

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
        <Stack
            component="aside"
            spacing={3}
            sx={{
                padding: [3, 2],
                height: 'calc(100vh - 62px)',
                backgroundColor: '#e9e9e957',
                flexBasis: '15%',
                flexShrink: 0,
                position: 'sticky',
                top: 62,
                left: 0,
            }}
        >
            <Typography
                component="h2"
                sx={{
                    fontSize: 24,
                }}
                align="center"
            >
                Навигация
            </Typography>
            <Stack direction="column" spacing={2}>
                {navItems.map((nav) => (
                    <Button component={Link} key={nav.id} to={nav.link}>
                        {nav.title}
                    </Button>
                ))}
            </Stack>
        </Stack>
    );
};
