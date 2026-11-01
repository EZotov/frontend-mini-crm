import {UpdateUserRequest} from '~/api/services/main/operations';
import {UserDto} from '~/api/services/main/schemas';

import {UserFormType} from './schema';

export const userDtoToFormData = (data: UserDto | null): UserFormType => {
    return {} as UserFormType;
};

export const formDataToUserPayload = (data: UserFormType): UpdateUserRequest => {
    return {} as UpdateUserRequest;
};
