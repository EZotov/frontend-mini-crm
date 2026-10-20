import {createEvent, createStore} from 'effector';

const setAccessTokenEvent = createEvent<string>();
const resetAccessToken = createEvent();

export const $accessToken = createStore<string | null>(null)
    .on(setAccessTokenEvent, (_, payload) => payload)
    .reset(resetAccessToken);
