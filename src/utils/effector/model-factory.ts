import {createEvent, createStore, Effect} from 'effector';

import {ApiError} from '~/api/base-api';
import {ApiSuccessResponse} from '~/api/types';

interface CreateEntityFactoryOptions<TParams, TResponse, TDataStore> {
    loadFx: Effect<TParams, ApiSuccessResponse<TResponse>, ApiError>;
    initialData?: TDataStore | null;
    getStoreData?: (data: ApiSuccessResponse<TResponse>) => TDataStore;
}

/**
 * Функция-фабрика для автоматической генерации типовых сторов и эффектов под каждый API-запрос.
 * Исключает дублирование кода (boilerplate) при работе с сервером.
 * @param loadFx - эффект вызова API
 * @param initialData - дефолт значение стора с предполагаемым ответом API-вызова
 * @returns - сторы данных загрузки, ошибки, ответа и ивенты старта загрузки и очистки
 */
export const loadableModelFactory = <TParams = void, TResponse = void, TDataStore = ApiSuccessResponse<TResponse>>({
    loadFx,
    initialData = null,
    getStoreData,
}: CreateEntityFactoryOptions<TParams, TResponse, TDataStore>) => {
    const $data = createStore<TDataStore | null>(initialData);
    const $isLoading = loadFx.pending;
    const $error = createStore<ApiError | null>(null);
    const reset = createEvent();

    $data
        .on(loadFx.doneData, (_, response) => {
            if (getStoreData) {
                return getStoreData(response);
            }

            return response as unknown as TDataStore;
        })
        .reset(reset);

    $error
        .on(loadFx.failData, (_, error) => error)
        .on(loadFx, () => null)
        .reset(reset);

    return {$data, $isLoading, $error, load: loadFx, reset};
};
