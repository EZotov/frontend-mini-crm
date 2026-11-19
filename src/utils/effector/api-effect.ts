import {createEffect, sample} from 'effector';

import {ApiError} from '~/api/base-api';
import {ApiSuccessResponse} from '~/api/types';

import {setToastError} from '../toast';

export type EffectCallback<TParams, TResponse> = (params: TParams) => Promise<ApiSuccessResponse<TResponse>>;

type EffectOptions = {
    disableErrorMessages?: boolean;
};

/**
 * Типизированный под APi интерсептор для перехвата и обработки ошибок в асинхронных операциях
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

    // Перехват ошибки запросов на создание и изменение и вывод уведомлений на них
    sample({
        clock: effect.failData,
        filter: (data) => !!data.method && data.method !== 'get' && !disableErrorMessages,
        fn: (data) => setToastError(data),
    });

    return effect;
};
