import {createEffect} from 'effector';

import {router} from '~/router';

export const internalRedirectFx = createEffect((path: string) => {
    if (!router) {
        return console.error('Router is not initialized yet!');
    }

    router.navigate(path);
});

export const externalRedirectFx = createEffect((url: string) => {
    window.location.href = url;
});
