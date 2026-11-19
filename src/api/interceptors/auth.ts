import {AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

import {resetAccessToken, setAccessToken} from '~/models/auth';

import {RefreshTokenDto} from '../services/main/schemas';
import type {ApiSuccessResponse, RequestInterceptor} from '../types';

let currentToken: string | null = null;

// Функция синхронизации, которую мы вызовем из модели
export const setInterceptorToken = (token: string | null) => {
    currentToken = token;
};

export const authRequestInterceptor: RequestInterceptor = (config) => {
    const token = currentToken;

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};

interface RetryRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

export const refreshAuthInterceptor = async (error: AxiosError, client: AxiosInstance): Promise<AxiosResponse> => {
    const originalRequest = error.config as RetryRequestConfig | undefined;
    const isRefreshRequest = originalRequest?.url?.includes('/v1/auth/refresh');

    if (error.response?.status === 401 && originalRequest && !originalRequest._retry && !isRefreshRequest) {
        originalRequest._retry = true;

        try {
            const {data} = await client.post<ApiSuccessResponse<RefreshTokenDto>>('/v1/auth/refresh');
            console.log(data);
            setAccessToken(data.data.accessToken);
        } catch {
            resetAccessToken();
            throw error;
        }

        return client(originalRequest);
    }

    throw error;
};
