import {createStore} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {RoleDto} from '~/api/services/main/schemas';
import {createApiEffect} from '~/utils/effector/api-effect';

export const getRolesFx = createApiEffect<void, RoleDto[]>(() => mainApi.getRoles());

// Stores
export const $roles = createStore<RoleDto[] | null>(null).on(getRolesFx.doneData, (_, data) => data.data);
