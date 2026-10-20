import {createEvent, createStore} from 'effector';

import {ApiAxiosError, ApiSuccessResponse} from '~/api/types';

import {createApiEffect, EffectCallback} from './effect';

interface CreateEntityFactoryOptions<TParams, TResponse> {
    loadEffect: EffectCallback<TParams, TResponse>;
    initialData?: ApiSuccessResponse<TResponse> | null;
}

/**
 * Функция-фабрика для автоматической генерации типовых сторов и эффектов под каждый API-запрос.
 * Исключает дублирование кода (boilerplate) при работе с сервером.
 * @param loadEffect - эффект вызова API
 * @param initialData - дефолт значение стора с предполагаемым ответом API-вызова
 * @returns - сторы данных загрузки, ошибки, ответа и ивенты старта загрузки и очистки
 */
export const createLoadableModelFactory = <TParams = void, TResponse = unknown>({
    loadEffect,
    initialData = null,
}: CreateEntityFactoryOptions<TParams, TResponse>) => {
    const loadFx = createApiEffect<TParams, TResponse>(loadEffect);

    const $data = createStore<ApiSuccessResponse<TResponse> | null>(initialData);
    const $isLoading = loadFx.pending;
    const $error = createStore<ApiAxiosError | null>(null);

    const reset = createEvent();

    $data.on(loadFx.doneData, (_, data) => data).reset(reset);
    $error
        .on(loadFx.failData, (_, error) => error)
        .on(loadFx, () => null)
        .reset(reset);

    return {
        $data,
        $isLoading,
        $error,
        load: loadFx,
        reset,
    };
};
