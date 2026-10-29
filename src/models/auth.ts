import {attach, createEvent, createStore, sample} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {loginFx} from '~/pages/login/models/login';
import {authErrorEvent, createApiEffect} from '~/utils/effector/api-effect';

// Events
export const resetAccessToken = createEvent();

// Effects
const refreshAuthTokenFx = createApiEffect(() => mainApi.refresh(), {handleAuthError: false});
export const getAppAuthFx = attach({effect: refreshAuthTokenFx});
export const refreshAuthFx = attach({effect: refreshAuthTokenFx});

// Stores
export const $isAuthCheckingEnabled = createStore<boolean>(false).on(getAppAuthFx.done, () => true);

export const $accessToken = createStore<string | null>(null)
    .on(getAppAuthFx.doneData, (_, payload) => payload.data.accessToken)
    .on(loginFx.doneData, (_, payload) => payload.data.accessToken)
    .on(refreshAuthFx.doneData, (_, payload) => payload.data.accessToken)
    .reset(resetAccessToken);

// Samples

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
