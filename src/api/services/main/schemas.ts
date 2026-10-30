import {components} from './openapi-schema';

// Login
export type LoginDto = components['schemas']['TokensDto'];
export type RefreshTokenDto = components['schemas']['RefreshAccessTokenDto'];

// Registration
export type RegistrationDto = components['schemas']['TokensDto'];

// Users
export type UserDto = components['schemas']['UserDto'];
