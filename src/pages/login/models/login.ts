import {createEvent, sample} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {LoginRequestBody} from '~/api/services/main/operations';
import {LoginDto} from '~/api/services/main/schemas';
import {internalRedirectFx} from '~/models/redirects';
import {ROUTE_PATHS} from '~/router/paths';
import {createApiEffect} from '~/utils/effector/api-effect';

//Events
export const loginEvent = createEvent<LoginRequestBody>();

// Effects
export const loginFx = createApiEffect<LoginRequestBody, LoginDto>((payload) => mainApi.signIn(payload));

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
