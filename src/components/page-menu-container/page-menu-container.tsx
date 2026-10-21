import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';

import {SxMapProps} from '~/types';

import {Container} from '../container';
import {NavigationMenu} from '../navigation-menu/navigation-menu';

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
            <NavigationMenu />
            <Container sx={styles.innerPageContainer}>
                <Outlet />
            </Container>
        </Box>
    );
};
