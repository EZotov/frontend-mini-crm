import type {ButtonProps} from '@mui/material';
import type {To} from 'react-router-dom';

export type Action = {
    title: string;
    onClick?: React.MouseEventHandler;
    to?: To;
    variant?: ButtonProps['variant'];
};

export type ActionGetter<T> = (data: T) => Action[];
