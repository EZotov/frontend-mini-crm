import {components} from './openapi-schema';

// Login
export type LoginResponseDto = components['schemas']['TokensDto'];
export type RefreshTokenResponseDto = components['schemas']['RefreshAccessTokenDto'];

// Registration
export type RegistrationResponseDto = components['schemas']['TokensDto'];
