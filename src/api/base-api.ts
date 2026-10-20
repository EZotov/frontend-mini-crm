import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import axios, {isAxiosError} from 'axios';

export type QueryParams = Record<string, unknown> | URLSearchParams | void;
export type Headers = Record<string, string>;

export interface RequestOptions<TQuery extends QueryParams = QueryParams, THeaders extends Headers = Headers> {
    query?: TQuery;
    headers?: THeaders;
}

export abstract class ApiClient {
    protected abstract get<TQuery extends QueryParams, TResponse>(
        url: string,
        query?: TQuery,
        options?: RequestOptions<TQuery>,
    ): Promise<TResponse>;

    protected abstract post<TPayload, TResponse>(
        url: string,
        body: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<TResponse>;

    protected abstract put<TPayload, TResponse>(
        url: string,
        body: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<TResponse>;

    protected abstract patch<TPayload, TResponse>(
        url: string,
        body: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<TResponse>;

    protected abstract delete<TQuery extends QueryParams, TResponse>(
        url: string,
        query: TQuery,
        options?: RequestOptions<TQuery>,
    ): Promise<TResponse>;
}

export class CoreApiClient extends ApiClient {
    private readonly client: AxiosInstance;
    private readonly instanceConfig: AxiosRequestConfig;

    constructor(config?: AxiosRequestConfig) {
        super();

        this.instanceConfig = config ?? {};

        this.client = axios.create({
            baseURL: '/api',
            headers: {
                ...(config?.headers && config.headers),
            },
            ...config,
        });

        this.client.interceptors.request.use((config) => {
            const token = '' as string;

            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        });
    }

    private async request<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.client({...this.instanceConfig, ...config});

            return response.data;
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                if (error.response) {
                    throw error.response.data;
                }

                throw new Error(error.message, {cause: error});
            }

            throw error;
        }
    }

    /**
     * GET запрос
     */
    protected get<TQuery extends QueryParams, TResponse = unknown>(
        url: string,
        query?: TQuery,
        options?: RequestOptions<TQuery>,
    ): Promise<TResponse> {
        const mergedConfig: AxiosRequestConfig = {
            method: 'GET',
            url,
            params: query ?? options?.query,
            ...(options?.headers && {headers: options.headers}),
        };

        return this.request<TResponse>(mergedConfig);
    }

    /**
     * POST запрос
     */
    protected post<TPayload, TResponse = unknown>(
        url: string,
        body: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<TResponse> {
        const mergedConfig: AxiosRequestConfig = {
            method: 'POST',
            url,
            data: body,
            params: options?.query,
            ...(options?.headers && {headers: options.headers}),
        };

        return this.request<TResponse>(mergedConfig);
    }

    /**
     * PUT запрос
     */
    protected put<TPayload, TResponse = unknown>(
        url: string,
        body: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<TResponse> {
        const mergedConfig: AxiosRequestConfig = {
            method: 'PUT',
            url,
            data: body,
            params: options?.query,
            ...(options?.headers && {headers: options.headers}),
        };

        return this.request<TResponse>(mergedConfig);
    }

    /**
     * PATCH запрос
     */
    protected patch<TPayload, TResponse = unknown>(
        url: string,
        body: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<TResponse> {
        const mergedConfig: AxiosRequestConfig = {
            method: 'PATCH',
            url,
            data: body,
            params: options?.query,
            ...(options?.headers && {headers: options.headers}),
        };

        return this.request<TResponse>(mergedConfig);
    }

    /**
     * DELETE запрос
     */
    protected delete<TQuery extends QueryParams, TResponse = unknown>(
        url: string,
        query: TQuery,
        options?: RequestOptions<TQuery>,
    ): Promise<TResponse> {
        const mergedConfig: AxiosRequestConfig = {
            method: 'DELETE',
            url,
            params: query ?? options?.query,
            ...(options?.headers && {headers: options.headers}),
        };

        return this.request<TResponse>(mergedConfig);
    }
}
