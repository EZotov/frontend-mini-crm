import {createEvent, createStore, sample} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {RoleDto} from '~/api/services/main/schemas';
import {createApiEffect} from '~/utils/effector/api-effect';

export const getRolesEvent = createEvent();

export const getRolesFx = createApiEffect<void, RoleDto[]>(() => mainApi.getRoles());

// Stores
export const $roles = createStore<RoleDto[] | null>(null).on(getRolesFx.doneData, (_, data) => data.data);
export const $isRolesLoading = getRolesFx.pending;

sample({
    clock: getRolesEvent,
    target: getRolesFx,
});
