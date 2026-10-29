import {createEvent, sample} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {RegistrationRequestDto} from '~/api/services/main/operations';
import {RegistrationResponseDto} from '~/api/services/main/schemas';
import {internalRedirectFx} from '~/models/redirects';
import {ROUTE_PATHS} from '~/router/paths';
import {createApiEffect} from '~/utils/effector/api-effect';

//Events
export const registrationEvent = createEvent<RegistrationRequestDto>();

// Effects
export const registrationFx = createApiEffect<RegistrationRequestDto, RegistrationResponseDto>((payload) =>
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
