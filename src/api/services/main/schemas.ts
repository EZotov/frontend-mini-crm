import {components} from './openapi-schema';

// Common
export type CreateOrUpdateDto = components['schemas']['CreateResponseDto'];

// Login
export type LoginDto = components['schemas']['TokensDto'];
export type RefreshTokenDto = components['schemas']['RefreshAccessTokenDto'];

// Registration
export type RegistrationDto = components['schemas']['TokensDto'];

// Users
export type UserDto = components['schemas']['UserDto'];
