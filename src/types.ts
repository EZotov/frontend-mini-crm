import type {SxProps} from '@mui/material/styles';
import type {InternalAxiosRequestConfig} from 'axios';
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

export type RequestInterceptor = (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;

type Params = Record<string, unknown>;

type ParamsType<TParams extends Params> = {
    params?: TParams;
};

export type GateWithParams<
    TParams extends Params,
    TExpandParams extends Params = Record<string, unknown>,
> = TExpandParams extends Params ? ParamsType<TParams> & TExpandParams : ParamsType<TParams>;

export type PaginationState = {
    pageNum: number;
    pageSize: number;
};
