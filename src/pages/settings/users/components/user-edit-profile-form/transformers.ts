import {UpdateUserRequest} from '~/api/services/main/operations';
import {UserDto} from '~/api/services/main/schemas';

import {UserFormType} from './schema';

export const userDtoToFormData = (data: UserDto | null): UserFormType | undefined => {
    if (!data) {
        return;
    }

    return {
        email: data.email,
        lastName: data.lastName,
        firstName: data.firstName,
        patronymic: data?.patronymic ?? '',
        role: {
            // TODO: Решить как получать id
            value: '',
            label: data?.role ?? '',
        },
    };
};

export const formDataToUserPayload = (data: UserFormType): Omit<UpdateUserRequest, 'id'> => {
    return {
        email: data.email,
        lastName: data.lastName,
        firstName: data.firstName,
        patronymic: data?.patronymic || null,
        roleId: data.role.value,
    };
};
