import {attach, createEvent, createStore, sample} from 'effector';
import {createGate} from 'effector-react';

import {setInterceptorToken} from '~/api/interceptors/auth';
import {mainApi} from '~/api/services/main/endpoints';
import {ChangePasswordBody} from '~/api/services/main/operations';
import {UserDto} from '~/api/services/main/schemas';
import {loginFx} from '~/pages/login/models/login';
import {ROUTE_PATHS} from '~/router/paths';
import {createApiEffect} from '~/utils/effector/api-effect';

export const REFRESH_REQUEST_NOT_CALL_PATHS = [ROUTE_PATHS.LOGIN, ROUTE_PATHS.REGISTRATION];

export const appAuthGate = createGate();

// Events
export const setAccessToken = createEvent<string>();
export const resetAccessToken = createEvent();
export const logoutEvent = createEvent();
export const getMyProfileEvent = createEvent();
export const changePasswordEvent = createEvent<ChangePasswordBody>();

// Effects
const refreshAuthTokenFx = createApiEffect(() => mainApi.refresh(), {disableErrorMessages: true});
export const getAppAuthFx = attach({effect: refreshAuthTokenFx});

export const getMyProfileFx = createApiEffect<void, UserDto>(() => mainApi.getMyProfile());
export const logoutFx = createApiEffect(() => mainApi.logout());

// Stores
export const $isAuthCheckingComplete = createStore<boolean>(false).on(getAppAuthFx.finally, () => true);

export const $accessToken = createStore<string | null>(null)
    .on(getAppAuthFx.doneData, (_, payload) => payload.data.accessToken)
    .on(loginFx.doneData, (_, payload) => payload.data.accessToken)
    .on(setAccessToken, (_, payload) => payload)
    .reset(resetAccessToken);
export const $myProfile = createStore<UserDto | null>(null)
    .on(getMyProfileFx.doneData, (_, data) => data.data)
    .reset([getMyProfileFx.fail, logoutFx.done]);

export const $isLogoutSubmitting = logoutFx.pending;
export const $isMyProfileLoading = getMyProfileFx.pending;

// Синхронно отслеживаем токен для использования вне скоупа эффектора
$accessToken.watch(setInterceptorToken);

// Samples

sample({
    clock: appAuthGate.open,
    source: $accessToken,
    filter: (accessToken) => !accessToken && !REFRESH_REQUEST_NOT_CALL_PATHS.includes(window.location.pathname),
    target: getAppAuthFx,
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
    clock: getMyProfileEvent,
    target: getMyProfileFx,
});
