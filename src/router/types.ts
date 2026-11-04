import type {RouteObject} from 'react-router-dom';

export type RouteObjectWithParams = RouteObject & {
    protected?: boolean | string[];
};
