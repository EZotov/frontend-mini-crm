import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import axios, {isAxiosError} from 'axios';

import {authRequestInterceptor} from '~/api/interceptors/auth';

import {ApiAxiosError, ApiSuccessResponse} from './types';

export class ApiError extends Error {
    public code: string | null;
    public statusCode: number | null;
    public method: string | null;

    constructor(errorData?: ApiAxiosError) {
        super(errorData?.message ?? '');

        this.name = 'ApiError';

        this.code = errorData?.code ?? null;
        this.statusCode = errorData?.fromResponse?.status ?? null;
        this.method = errorData?.fromResponse?.method?.toUpperCase() ?? null;

        Object.setPrototypeOf(this, ApiError.prototype);
    }
}

////////////////////

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
    ): Promise<ApiSuccessResponse<TResponse>>;

    protected abstract post<TPayload, TResponse>(
        url: string,
        body: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<ApiSuccessResponse<TResponse>>;

    protected abstract put<TPayload, TResponse>(
        url: string,
        body: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<ApiSuccessResponse<TResponse>>;

    protected abstract patch<TPayload, TResponse>(
        url: string,
        body: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<ApiSuccessResponse<TResponse>>;

    protected abstract delete<TQuery extends QueryParams, TResponse>(
        url: string,
        query: TQuery,
        options?: RequestOptions<TQuery>,
    ): Promise<ApiSuccessResponse<TResponse>>;
}

export class CoreApiClient extends ApiClient {
    private readonly client: AxiosInstance;
    private readonly instanceConfig: AxiosRequestConfig;

    constructor(config?: AxiosRequestConfig) {
        super();

        this.instanceConfig = config ?? {};

        this.client = axios.create({
            baseURL: this.instanceConfig?.baseURL || '/api',
            headers: {
                ...(config?.headers && config.headers),
            },
            ...config,
        });

        this.client.interceptors.request.use(authRequestInterceptor);
    }

    private async request<T>(config: AxiosRequestConfig): Promise<ApiSuccessResponse<T>> {
        try {
            const response: AxiosResponse<ApiSuccessResponse<T>> = await this.client({
                ...this.instanceConfig,
                ...config,
            });

            return response.data;
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                if (error.response) {
                    throw new ApiError({
                        ...error.response.data,
                        fromResponse: {
                            method: error.response.config.method,
                            status: error.response.status,
                        },
                    });
                }

                throw new ApiError({
                    message: 'Запрос не получил ответа от сервера. Возможно проблемы с сетью',
                });
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
    ): Promise<ApiSuccessResponse<TResponse>> {
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
        body?: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<ApiSuccessResponse<TResponse>> {
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
        body?: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<ApiSuccessResponse<TResponse>> {
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
        body?: TPayload,
        options?: RequestOptions<QueryParams>,
    ): Promise<ApiSuccessResponse<TResponse>> {
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
        query?: TQuery,
        options?: RequestOptions<TQuery>,
    ): Promise<ApiSuccessResponse<TResponse>> {
        const mergedConfig: AxiosRequestConfig = {
            method: 'DELETE',
            url,
            params: query ?? options?.query,
            ...(options?.headers && {headers: options.headers}),
        };

        return this.request<TResponse>(mergedConfig);
    }
}
