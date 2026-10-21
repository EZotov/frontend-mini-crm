import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';

import {Container} from '../container';
import {NavigationMenu} from '../navigation-menu/navigation-menu';

export const PageMenuContainer = (): React.JSX.Element => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <NavigationMenu />
            <Container sx={{flexGrow: 1, borderRadius: 0, minWidth: 0, padding: '36px 24px'}}>
                <Outlet />
            </Container>
        </Box>
    );
};
