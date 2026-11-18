import {createEvent, sample} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {RegistrationRequestBody} from '~/api/services/main/operations';
import {RegistrationDto} from '~/api/services/main/schemas';
import {internalRedirectFx} from '~/models/redirects';
import {ROUTE_PATHS} from '~/router/paths';
import {createApiEffect} from '~/utils/effector/api-effect';

//Events
export const registrationEvent = createEvent<RegistrationRequestBody>();

// Effects
export const registrationFx = createApiEffect<RegistrationRequestBody, RegistrationDto>((payload) =>
    mainApi.signUp(payload),
);

// Stores
export const $isRegistrationSubmitting = registrationFx.pending;

// Samples
sample({
    clock: registrationEvent,
    target: registrationFx,
});

sample({
    clock: registrationFx.doneData,
    fn: () => ROUTE_PATHS.MAIN_PAGE,
    target: internalRedirectFx,
});
