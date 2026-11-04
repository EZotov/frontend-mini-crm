import type {AxiosResponse, InternalAxiosRequestConfig} from 'axios';

export type ApiErrorResponse = {
    code?: string | null;
    message?: string | null;
};

export type ApiSuccessResponse<T> = {
    data: T;
    total?: number;
};

export type ApiAxiosError = ApiErrorResponse & {
    fromResponse?: {
        method: AxiosResponse['config']['method'];
        status: AxiosResponse['status'];
    };
};

export type RequestInterceptor = (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
