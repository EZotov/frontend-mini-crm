import {Button} from '@mui/material';
import {NavLink, To} from 'react-router-dom';

interface NavigationItemProps {
    to: To;
    title: string;
}

export const NavigationItem = ({to, title}: NavigationItemProps): React.JSX.Element => {
    return (
        <Button
            component={NavLink}
            to={to}
            sx={{
                fontWeight: 600,
                '&.active': {
                    backgroundColor: 'blockBackground',
                },
            }}
        >
            {title}
        </Button>
    );
};
