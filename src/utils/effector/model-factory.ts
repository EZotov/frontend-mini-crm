import {createEvent, createStore, Effect} from 'effector';

import {ApiError} from '~/api/base-api';
import {ApiSuccessResponse} from '~/api/types';
import {PaginationState} from '~/types';

export const DEFAULT_PAGINATION: PaginationState = {pageNum: 1, pageSize: 25};

interface CreateEntityFactoryOptions<TParams, TResponse, TDataStore> {
    loadFx: Effect<TParams, ApiSuccessResponse<TResponse>, ApiError>;
    initialData?: TDataStore | null;
    getStoreData?: (data: ApiSuccessResponse<TResponse>) => TDataStore;
    dataStoreName?: string;
    errorStoreName?: string;
    resetEventName?: string;
}

/**
 * Функция-фабрика для автоматической генерации типовых сторов и эффектов под каждый API-запрос.
 * Исключает дублирование кода (boilerplate) при работе с сервером. SID'ы должны расставится автоматически плагином effector в babel или vite
 * @param loadFx - эффект вызова API
 * @param initialData - дефолт значение стора с предполагаемым ответом API-вызова
 * @returns - сторы данных загрузки, ошибки, ответа и ивенты старта загрузки и очистки
 */
export const loadableModelFactory = <TParams = void, TResponse = void, TDataStore = ApiSuccessResponse<TResponse>>({
    loadFx,
    initialData = null,
    getStoreData,
    ...options
}: CreateEntityFactoryOptions<TParams, TResponse, TDataStore>) => {
    const $data = createStore<TDataStore | null>(initialData, {name: options?.dataStoreName});
    const $isLoading = loadFx.pending;
    const $error = createStore<ApiError | null>(null, {name: options?.errorStoreName});
    const reset = createEvent({name: options?.resetEventName});

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

interface PaginationModelFactoryOptions {
    paginationStoreName?: string;
    setPaginationEventName?: string;
    resetPaginationEventName?: string;
}

/**
 * Фабрика модели пагинации для списков
 */
export const paginationModelFactory = (options?: PaginationModelFactoryOptions) => {
    const setPaginationEvent = createEvent<Partial<PaginationState>>({name: options?.setPaginationEventName});
    const resetPaginationEvent = createEvent({name: options?.resetPaginationEventName});

    // Общий стейт пагинации
    const $paginationState = createStore(DEFAULT_PAGINATION, {name: options?.paginationStoreName})
        .on(setPaginationEvent, (state, payload) => ({
            pageNum: payload?.pageNum ? payload.pageNum : state.pageNum,
            pageSize: payload?.pageSize ? payload.pageSize : state.pageSize,
        }))
        .reset(resetPaginationEvent);

    return {$paginationState, setPaginationEvent, resetPaginationEvent};
};
