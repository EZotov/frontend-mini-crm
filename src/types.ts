import type {SxProps} from '@mui/material/styles';
import type {RouteObject, To} from 'react-router-dom';

export type SxMapProps<T extends string> = Record<T, SxProps>;

export type Action = {
    title: string;
    onClick?: React.MouseEventHandler;
    to?: To;
};

export type RouteObjectWithParams = RouteObject & {
    protected?: boolean;
};
