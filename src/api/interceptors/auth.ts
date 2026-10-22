import {RequestInterceptor} from '~/types';

import {$accessToken} from '../../models/auth';

export const authRequestInterceptor: RequestInterceptor = (config) => {
    const token = $accessToken.getState();

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};
