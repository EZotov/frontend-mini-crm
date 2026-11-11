import {CoreApiClient} from '~/api/base-api';
import {ENV_CONFIG} from '~/utils/env-config';

import type {
    ChangePasswordBody,
    GetUserPath,
    GetUsersQuery,
    LoginRequestBody,
    RegistrationRequestBody,
    UpdateMyProfileBody,
    UpdateUserBody,
    UpdateUserRequest,
} from './operations';
import type {CreateOrUpdateDto, LoginDto, RefreshTokenDto, RegistrationDto, RoleDto, UserDto} from './schemas';

class MainApiService extends CoreApiClient {
    // Auth
    signIn(body: LoginRequestBody) {
        return this.post<LoginRequestBody, LoginDto>(`/v1/auth/sign-in`, body);
    }

    signUp(body: RegistrationRequestBody) {
        return this.post<RegistrationRequestBody, RegistrationDto>(`/v1/auth/sign-in`, body);
    }

    refresh() {
        return this.post<void, RefreshTokenDto>(`/v1/auth/refresh`);
    }

    logout() {
        return this.post(`/v1/auth/logout`);
    }

    // Roles
    getRoles() {
        return this.get<void, RoleDto[]>(`/v1/roles`);
    }

    //Me
    getMyProfile() {
        return this.get<void, UserDto>(`/v1/users/me`);
    }

    updateMyProfile(body: UpdateMyProfileBody) {
        return this.put<UpdateMyProfileBody, CreateOrUpdateDto>(`/v1/users/me`, body);
    }

    changePassword(body: ChangePasswordBody) {
        return this.post<ChangePasswordBody, CreateOrUpdateDto>(`/v1/users/me`, body);
    }

    deleteMyProfile() {
        return this.delete(`/v1/users/me`);
    }

    // Users
    getUsersList(query: GetUsersQuery) {
        return this.get<GetUsersQuery, UserDto[]>(`/v1/users`, query);
    }

    getUser({id}: GetUserPath) {
        return this.get<void, UserDto>(`/v1/users/${id}`);
    }

    updateUser({id, ...body}: UpdateUserRequest) {
        return this.put<UpdateUserBody, CreateOrUpdateDto>(`/v1/users/${id}`, body);
    }

    deleteUser(id: string) {
        return this.delete(`/v1/users/${id}`);
    }
}

export const mainApi = new MainApiService({
    baseURL: ENV_CONFIG.APP_BASE_API_URL,
});
