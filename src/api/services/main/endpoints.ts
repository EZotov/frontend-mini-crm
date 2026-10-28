import {CoreApiClient} from '~/api/base-api';

import type {LoginRequestDto, RegistrationRequestDto} from './operations';
import type {LoginResponseDto, RefreshTokenResponseDto, RegistrationResponseDto} from './schemas';

class MainApiService extends CoreApiClient {
    // Auth
    signIn(body: LoginRequestDto) {
        return this.post<LoginRequestDto, LoginResponseDto>(`/v1/auth/sign-in`, body);
    }

    signUp(body: RegistrationRequestDto) {
        return this.post<RegistrationRequestDto, RegistrationResponseDto>(`/v1/auth/sign-in`, body);
    }

    refresh() {
        return this.post<void, RefreshTokenResponseDto>(`/v1/auth/refresh`);
    }

    // Users
    getUsers() {
        return this.get<void>(`/v1/users`);
    }
}

export const mainApi = new MainApiService();
