import {Button} from '@mui/material';
import {NavLink, To} from 'react-router-dom';

import {SxMapProps} from '~/types';

const styles: SxMapProps<'navItem'> = {
    navItem: {
        fontWeight: 600,
        '&.active': {
            backgroundColor: 'transparentBackground',
        },
    },
};

interface NavigationItemProps {
    to: To;
    title: string;
}

export const NavigationItem = ({to, title}: NavigationItemProps): React.JSX.Element => {
    return (
        <Button component={NavLink} to={to} sx={styles.navItem}>
            {title}
        </Button>
    );
};
