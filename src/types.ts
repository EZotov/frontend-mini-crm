export type PaginationState = {
    pageNum: number;
    pageSize: number;
};

type Params = Record<string, unknown>;

type ParamsType<TParams extends Params, TQuery extends Params = Params> = {
    params?: TParams;
    query?: TQuery;
};

export type GateWithParams<
    TParams extends Params = Params,
    TQuery extends Params = Params,
    TExpandParams extends Params = Record<never, never>,
> = ParamsType<TParams, TQuery> & TExpandParams;
