import {createEvent, sample} from 'effector';
import {createGate} from 'effector-react';

import {mainApi} from '~/api/services/main/endpoints';
import {ChangePasswordBody, UpdateMyProfileBody} from '~/api/services/main/operations';
import {CreateOrUpdateDto} from '~/api/services/main/schemas';
import {changePasswordEvent, getMyProfileFx} from '~/models/auth';
import {createApiEffect} from '~/utils/effector/api-effect';

export const profilePageGate = createGate();

export const updateMyProfileEvent = createEvent<UpdateMyProfileBody>();

export const changePasswordFx = createApiEffect<ChangePasswordBody, CreateOrUpdateDto>((payload) =>
    mainApi.changePassword(payload),
);
export const updateMyProfileFx = createApiEffect<UpdateMyProfileBody, CreateOrUpdateDto>((payload) =>
    mainApi.updateMyProfile(payload),
);

export const $isChangePasswordSubmitting = changePasswordFx.pending;
export const $isUpdateMyProfileSubmitting = updateMyProfileFx.pending;

sample({
    clock: profilePageGate.open,
    target: getMyProfileFx,
});

sample({
    clock: changePasswordEvent,
    target: changePasswordFx,
});

sample({
    clock: updateMyProfileEvent,
    target: updateMyProfileFx,
});
