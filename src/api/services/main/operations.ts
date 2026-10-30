import {operations} from './openapi-schema';

// Login
export type LoginRequestDto = operations['AuthController_login']['requestBody']['content']['application/json'];

//Registration
export type RegistrationRequestDto =
    operations['AuthController_registration']['requestBody']['content']['application/json'];
