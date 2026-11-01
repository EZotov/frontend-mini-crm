import {createEvent, createStore, sample} from 'effector';
import {createGate} from 'effector-react';

import {mainApi} from '~/api/services/main/endpoints';
import {GetUserPath, GetUsersQuery, UpdateUserRequest} from '~/api/services/main/operations';
import {UserDto} from '~/api/services/main/schemas';
import {GateWithParams} from '~/types';
import {createApiEffect} from '~/utils/effector/api-effect';
import {paginationModelFactory} from '~/utils/effector/model-factory';

// Gates
export const userPageGate = createGate<GateWithParams<GetUsersQuery>>();

// Events

export const getUserEvent = createEvent<string>();
export const updateUserEvent = createEvent<UpdateUserRequest>();
export const deleteUserEvent = createEvent<string>();

// Effects
export const getUsersFx = createApiEffect<GetUsersQuery, UserDto[]>((query) => mainApi.getUsersList(query));
export const getUserFx = createApiEffect<GetUserPath, UserDto>((payload) => mainApi.getUser(payload));
export const updateUserFx = createApiEffect<UpdateUserRequest>((payload) => mainApi.updateUser(payload));
export const deleteUserFx = createApiEffect<string>((userId) => mainApi.deleteUser(userId));

// Stores
export const $users = createStore<UserDto[] | null>(null).on(getUsersFx.doneData, (_, payload) => payload.data);
export const $usersCount = createStore<number>(0).on(getUsersFx.doneData, (_, payload) => payload.total);
export const $user = createStore<UserDto | null>(null).on(getUserFx.doneData, (_, payload) => payload.data);

export const $isLoadingUserList = getUsersFx.pending;
export const $isLoadingUser = getUserFx.pending;
export const $isUpdateUserSubmitting = updateUserFx.pending;
export const $isDeleteUserSubmitting = deleteUserFx.pending;

export const {$paginationState, setPaginationEvent, resetPaginationEvent} = paginationModelFactory({
    paginationStoreName: 'usersPaginationState',
    setPaginationEventName: 'setUsersPagination',
    resetPaginationEventName: 'resetUsersPagination',
});

// Samples
sample({
    clock: userPageGate.open,
    source: $paginationState,
    fn: (paginationState) => paginationState,
    target: getUsersFx,
});

// При изменении пагинации вызываем эффект
sample({
    clock: $paginationState,
    target: getUsersFx,
});

sample({
    clock: updateUserEvent,
    target: getUserFx,
});

sample({
    clock: updateUserEvent,
    target: updateUserFx,
});

sample({
    clock: deleteUserEvent,
    target: deleteUserFx,
});
