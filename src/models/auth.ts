import {attach, createEffect, createEvent, createStore, sample} from 'effector';
import {createGate} from 'effector-react';

import {setInterceptorToken} from '~/api/interceptors/auth';
import {mainApi} from '~/api/services/main/endpoints';
import {UserDto} from '~/api/services/main/schemas';
import {loginFx} from '~/pages/login/models/login';
import {ROUTE_PATHS} from '~/router/paths';
import {authErrorEvent, createApiEffect} from '~/utils/effector/api-effect';

export const REFRESH_REQUEST_NOT_CALL_PATHS = [ROUTE_PATHS.LOGIN, ROUTE_PATHS.REGISTRATION];

export const appAuthGate = createGate();

// Events
export const resetAccessToken = createEvent();
export const logoutEvent = createEvent();

// Effects
const refreshAuthTokenFx = createApiEffect(() => mainApi.refresh(), {
    handleAuthError: false,
    disableErrorMessages: true,
});
export const getAppAuthFx = attach({effect: refreshAuthTokenFx});
export const refreshAuthFx = attach({effect: refreshAuthTokenFx});
export const getMyProfileFx = createApiEffect<void, UserDto>(() => mainApi.getMyProfile());

const syncTokenWithApiFx = createEffect((token: string | null) => setInterceptorToken(token));

export const logoutFx = createApiEffect(() => mainApi.logout());

// Stores
export const $isAuthCheckingComplete = createStore<boolean>(false).on(getAppAuthFx.finally, () => true);

export const $accessToken = createStore<string | null>(null)
    .on(getAppAuthFx.doneData, (_, payload) => payload.data.accessToken)
    .on(loginFx.doneData, (_, payload) => payload.data.accessToken)
    .on(refreshAuthFx.doneData, (_, payload) => payload.data.accessToken)
    .reset(resetAccessToken);
export const $myProfile = createStore<UserDto | null>(null)
    .on(getMyProfileFx.doneData, (_, data) => data.data)
    .reset([getMyProfileFx.fail, logoutFx.done]);

export const $isLogoutSubmitting = logoutFx.pending;
export const $isMyProfileLoading = getMyProfileFx.pending;

// Samples

sample({
    clock: appAuthGate.open,
    source: $accessToken,
    filter: (accessToken) => !accessToken && !REFRESH_REQUEST_NOT_CALL_PATHS.includes(window.location.pathname),
    target: getAppAuthFx,
});

// Отслеживаем только запросы с невалидным accessToken
sample({
    clock: authErrorEvent,
    filter: (error) => error.code === 'JWT_EXPIRED' || error.code === 'JWT_INVALID',
    target: refreshAuthFx,
});

// Отслеживание запроса точечно на обновление токена (редирект сделает AuthChecker автоматически)
sample({
    clock: refreshAuthFx.failData,
    filter: (error) => error.statusCode === 401,
    target: resetAccessToken,
});

sample({
    clock: logoutEvent,
    target: logoutFx,
});

sample({
    clock: logoutFx.done,
    target: resetAccessToken,
});

sample({
    clock: $accessToken,
    target: syncTokenWithApiFx,
});

sample({
    clock: $accessToken,
    target: getMyProfileFx,
});
