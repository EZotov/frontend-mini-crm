import {UpdateUserRequest} from '~/api/services/main/operations';
import {RoleDto, UserDto} from '~/api/services/main/schemas';

import {UserFormType} from './schema';

export const userDtoToFormData = (data: UserDto | null, roles?: RoleDto[] | null): UserFormType | undefined => {
    if (!data || !roles) {
        return;
    }

    const currentRole = roles.find(({title}) => title === data.role);

    return {
        email: data.email,
        lastName: data.lastName,
        firstName: data.firstName,
        patronymic: data?.patronymic ?? '',
        role: data?.role
            ? {
                  value: currentRole?.id ?? '',
                  label: currentRole?.title,
              }
            : undefined,
    };
};

export const formDataToUserPayload = (data: UserFormType): Omit<UpdateUserRequest, 'id'> => {
    return {
        email: data.email,
        lastName: data.lastName,
        firstName: data.firstName,
        patronymic: data?.patronymic || null,
        roleId: data?.role?.value ?? '',
    };
};
