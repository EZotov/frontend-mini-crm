import {To} from 'react-router-dom';

import {ROUTE_PATHS} from '~/router/paths';

interface SettingsMenu {
    id: string;
    title: string;
    to: To;
    isHidden?: boolean;
}

export const getSettingsMenu = (role?: string | null): SettingsMenu[] => [
    {
        id: 'settings-menu-profile',
        title: 'Настройка профиля',
        to: ROUTE_PATHS.PROFILE,
    },
    {
        id: 'settings-menu-users-and-rights',
        title: 'Пользователи и права системы',
        to: ROUTE_PATHS.USERS_PAGE,
        isHidden: role !== 'ADMIN',
    },
];
