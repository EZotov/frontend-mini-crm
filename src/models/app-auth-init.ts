import {createStore, sample} from 'effector';
import {createGate} from 'effector-react';

import {$accessToken, getAppAuthFx} from '~/models/auth';

export const appAuthGate = createGate('App is started');

export const $isAuthCheckingEnabled = createStore<boolean>(false).on(getAppAuthFx.done, () => true);

sample({
    clock: appAuthGate.open,
    source: $accessToken,
    filter: (accessToken) => !accessToken,
    target: getAppAuthFx,
});
