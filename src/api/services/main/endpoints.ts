import {CoreApiClient} from '~/api/base-api';

import type {GetUsersQuery, LoginRequestBody, RegistrationRequestBody} from './operations';
import type {LoginDto, RefreshTokenDto, RegistrationDto, UserDto} from './schemas';

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
    getUsers(query: GetUsersQuery) {
        return this.get<GetUsersQuery, UserDto[]>(`/v1/users`, query);
    }
}

export const mainApi = new MainApiService();
