import type {To} from 'react-router-dom';

export type PaginationState = {
    pageNum: number;
    pageSize: number;
};

export type Action = {
    title: string;
    onClick?: React.MouseEventHandler;
    to?: To;
};

type Params = Record<string, unknown>;

type ParamsType<TParams extends Params> = {
    params?: TParams;
};

export type GateWithParams<
    TParams extends Params,
    TExpandParams extends Params = Record<string, unknown>,
> = TExpandParams extends Params ? ParamsType<TParams> & TExpandParams : ParamsType<TParams>;
