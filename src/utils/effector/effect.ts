import {createEffect, EventCallable, sample} from 'effector';

import {ApiError} from '~/api/base-api';
import {ApiErrorResponse, ApiSuccessResponse} from '~/api/types';

import {setToastError} from '../toast';

export type EffectCallback<TParams, TResponse> = (params: TParams) => Promise<ApiSuccessResponse<TResponse>>;
type EffectOptions = {
    disableErrorMessages?: boolean;
    message?: {
        title?: string;
        body: string;
    };
    authErrorEvent?: EventCallable<ApiErrorResponse>;
};

/**
 * Типизированная под APi эффект-обёртка для обработки ошибок в асинхронных операциях
 * Использовать всегда вместо стандартного эффекта
 *
 * TResponse - здесь это объект который мы ожидаем внутри data
 *
 * @returns Возвращает исходный эффект с типизацией
 */
export const createApiEffect = <TParams = void, TResponse = unknown>(
    callback: EffectCallback<TParams, TResponse>,
    options?: EffectOptions,
) => {
    const disableErrorMessages = options?.disableErrorMessages ?? false;

    const effect = createEffect<TParams, ApiSuccessResponse<TResponse>, ApiError>(callback);

    sample({
        clock: effect.failData,
        filter: (data) => data.method !== 'get' && !disableErrorMessages,
        fn: (data) => {
            console.log(data);
            setToastError(data);
        },
    });

    if (options?.authErrorEvent) {
        // Перехват ошибки аутентификации
        sample({
            clock: effect.failData,
            filter: (data) => data.statusCode === 401,
            target: options.authErrorEvent,
        });
    }

    return effect;
};
