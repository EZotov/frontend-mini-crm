import {createEvent, sample} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {LoginRequestDto} from '~/api/services/main/operations';
import {LoginResponseDto} from '~/api/services/main/schemas';
import {ROUTE_PATHS} from '~/router/paths';
import {createApiEffect} from '~/utils/effector/api-effect';
import {internalRedirectFx} from '~/models/redirects';

//Events
export const loginEvent = createEvent<LoginRequestDto>();

// Effects
export const loginFx = createApiEffect<LoginRequestDto, LoginResponseDto>((payload) => mainApi.signIn(payload));

// Stores
export const $isLoginSubmitting = loginFx.pending;

// Samples
sample({
    clock: loginEvent,
    target: loginFx,
});

sample({
    clock: loginFx.doneData,
    fn: () => ROUTE_PATHS.MAIN_PAGE,
    target: internalRedirectFx,
});
