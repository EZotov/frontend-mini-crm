import {Stack, Typography} from '@mui/material';
import React from 'react';

import {Container} from '~/components/container';

import {NavigationItem} from './navigation-item';
import type {NavItem} from './types';

interface NavigationMenuProps {
    navItems: NavItem[];
}

export const NavigationMenu = ({navItems}: NavigationMenuProps): React.JSX.Element => {
    return (
        <Container
            component="aside"
            sx={{
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 3,
                paddingRight: 3,
                borderRadius: 0,
                minWidth: 160,
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
