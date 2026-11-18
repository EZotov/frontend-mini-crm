import {createEvent, sample} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {ChangePasswordBody, UpdateMyProfileBody} from '~/api/services/main/operations';
import {CreateOrUpdateDto} from '~/api/services/main/schemas';
import {changePasswordEvent} from '~/models/auth';
import {createApiEffect} from '~/utils/effector/api-effect';

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
    clock: changePasswordEvent,
    target: changePasswordFx,
});

sample({
    clock: updateMyProfileEvent,
    target: updateMyProfileFx,
});
