import {createEffect, EventCallable, sample} from 'effector';

import {ApiAxiosError, ApiErrorResponse, ApiSuccessResponse} from '~/api/types';

// const errorMap: Record<string | number, string> = {
//     400: 'Ошибка валидации запроса сервером',
//     401: 'Неавторизованное действие',
//     403: 'Доступ к операции запрещён',
//     404: 'Ресурс не найден',
//     500: 'Внутренняя ошибка сервера',
//     502: 'Сервер временно недоступен',
//     503: 'Сервер недоступен',
//     504: 'Время ожидания ответа от сервера истекло',
// };

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
 * @returns Возвращает исходный эффект с типизацией
 */
export const createApiEffect = <TParams = void, TResponse = unknown>(
    callback: EffectCallback<TParams, TResponse>,
    options?: EffectOptions,
) => {
    const disableErrorMessages = options?.disableErrorMessages ?? false;

    const effect = createEffect<TParams, ApiSuccessResponse<TResponse>, ApiAxiosError>(callback);

    sample({
        clock: effect.failData,
        filter: (data) => data.fromResponse.method !== 'get' && !disableErrorMessages,
        fn: (data) => {
            const statusCode = data.fromResponse.status;
            console.log(statusCode);

            // TODO Вставить вызов toast
        },
    });

    if (options?.authErrorEvent) {
        // Перехват ошибки аутентификации
        sample({
            clock: effect.failData,
            filter: (data) => data.fromResponse?.status === 401,
            target: options.authErrorEvent,
        });
    }

    return effect;
};
