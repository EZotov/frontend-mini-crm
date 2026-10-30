import {createStore, sample} from 'effector';
import {createGate} from 'effector-react';

import {mainApi} from '~/api/services/main/endpoints';
import {GetUsersQuery} from '~/api/services/main/operations';
import {UserDto} from '~/api/services/main/schemas';
import {GateWithParams} from '~/types';
import {createApiEffect} from '~/utils/effector/api-effect';
import {paginationModelFactory} from '~/utils/effector/model-factory';

// Gates
export const userPageGate = createGate<GateWithParams<GetUsersQuery>>();

// Events

// Effects
export const getUsersFx = createApiEffect<GetUsersQuery, UserDto[]>((query) => mainApi.getUsers(query));

// Stores
export const $users = createStore<UserDto[] | null>(null).on(getUsersFx.doneData, (payload) => payload);
export const $usersCount = createStore<number>(0);

export const $isLoading = getUsersFx.pending;

export const {$paginationState, setPaginationEvent, resetPaginationEvent} = paginationModelFactory({
    paginationStoreName: 'usersPaginationState',
    setPaginationEventName: 'setUsersPagination',
    resetPaginationEventName: 'resetUsersPagination',
});

// Samples
sample({
    clock: userPageGate.open,
    source: $paginationState,
    fn: (paginationState, payload) => ({
        ...paginationState,
        role: payload.params?.role,
    }),
    target: getUsersFx,
});
