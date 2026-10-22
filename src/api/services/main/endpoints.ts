import {CoreApiClient} from '~/api/base-api';

import type {LoginRequestDto} from './operations';
import type {LoginResponseDto, RefreshTokenResponseDto} from './schemas';

export class MainApiService extends CoreApiClient {
    // Auth
    login(body: LoginRequestDto) {
        return this.post<LoginRequestDto, LoginResponseDto>(`/v1/auth/sign-in`, body);
    }

    refresh() {
        return this.post<void, RefreshTokenResponseDto>(`/v1/auth/refresh`);
    }

    // Users
    getUsers() {
        return this.get<void>(`/v1/users`);
    }
}

export default new MainApiService();
