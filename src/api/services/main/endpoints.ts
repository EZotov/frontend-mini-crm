import {CoreApiClient} from '~/api/base-api';

import type {
    GetUserPath,
    GetUsersQuery,
    LoginRequestBody,
    RegistrationRequestBody,
    UpdateUserBody,
    UpdateUserRequest,
} from './operations';
import type {CreateOrUpdateDto, LoginDto, RefreshTokenDto, RegistrationDto, UserDto} from './schemas';

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

export const mainApi = new MainApiService();
