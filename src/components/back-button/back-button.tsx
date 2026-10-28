import ReplyIcon from '@mui/icons-material/Reply';
import {IconButton, SxProps, Tooltip} from '@mui/material';
import {Link, type To} from 'react-router-dom';

interface BackButtonProps {
    to: To;
    sx?: SxProps;
}

export const BackButton = ({to, sx}: BackButtonProps): React.JSX.Element => {
    return (
        <Tooltip title="Вернуться назад">
            <IconButton component={Link} to={to} sx={{color: 'primary.main', width: 36, height: 36, ...sx}}>
                <ReplyIcon />
            </IconButton>
        </Tooltip>
    );
};
