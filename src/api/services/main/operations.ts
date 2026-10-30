import {PaginationState} from '~/types';

import {operations} from './openapi-schema';

// Login
export type LoginRequestBody = operations['AuthController_login']['requestBody']['content']['application/json'];

//Registration
export type RegistrationRequestBody =
    operations['AuthController_registration']['requestBody']['content']['application/json'];

export type GetUsersQuery = PaginationState & {
    role?: string;
};
