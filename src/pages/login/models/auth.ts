import {createEvent, sample} from 'effector';

import mainApi from '~/api/services/main/endpoints';
import {LoginRequestDto} from '~/api/services/main/operations';
import {LoginResponseDto} from '~/api/services/main/schemas';
import {createApiEffect} from '~/utils/effector/effect';
import {loadableModelFactory} from '~/utils/effector/model-factory';

export const loginEvent = createEvent<LoginRequestDto>();
export const resetAccessToken = createEvent();

// Effects
const loginFx = createApiEffect<LoginRequestDto, LoginResponseDto>((payload) => mainApi.login(payload));

// Stores
export const {$data: $accessToken, $isLoading: $isSubmittingLogin} = loadableModelFactory<
    LoginRequestDto,
    LoginResponseDto,
    string
>({
    loadFx: loginFx,
    initialData: null,
    getStoreData: (data) => data.data.accessToken,
});

// Samples
sample({
    clock: loginEvent,
    target: loginFx,
});
