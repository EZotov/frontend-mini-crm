import {RequestInterceptor} from '~/types';

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
