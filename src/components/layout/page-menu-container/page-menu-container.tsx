import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';

import type {SxMapProps} from '~/styles/types';

import {Container} from '../../container';
import {NavigationMenu} from '../../navigation-menu';
import {navItems} from './nav-items';

const styles: SxMapProps<'pageMenuContainer' | 'innerPageContainer'> = {
    pageMenuContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    innerPageContainer: {flexGrow: 1, borderRadius: 0, minWidth: 0, padding: '36px 24px'},
};

export const PageMenuContainer = (): React.JSX.Element => {
    return (
        <Box sx={styles.pageMenuContainer}>
            <NavigationMenu navItems={navItems} />
            <Container sx={styles.innerPageContainer}>
                <Outlet />
            </Container>
        </Box>
    );
};
