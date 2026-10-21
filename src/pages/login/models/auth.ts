import {createEvent, createStore} from 'effector';

import mainApi from '~/api/services/main/endpoints';
import {LoginRequestDto} from '~/api/services/main/operations';
import {LoginResponseDto} from '~/api/services/main/schemas';
import {createApiEffect} from '~/utils/effector/effect';

export const loginEvent = createEvent<LoginRequestDto>();
export const resetAccessToken = createEvent();

// Effects
const loginFx = createApiEffect<LoginRequestDto, LoginResponseDto>((payload) => mainApi.login(payload));

// Stores
export const $accessToken = createStore<string | null>(null)
    .on(loginFx.doneData, (_, payload) => payload.data.accessToken)
    .reset(resetAccessToken);

export const $isSubmittingLogin = createStore<boolean>(false)
    .on(loginFx.pending, () => true)
    .reset([loginFx.fail, loginFx.done]);
