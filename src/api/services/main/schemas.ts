// Login
export type LoginResponseDto = {
    accessToken: string;
    refreshToken: string;
};

export type RefreshTokenResponseDto = {
    accessToken: string;
};

// Registration
export type RegistrationResponseDto = {
    accessToken: string;
    refreshToken: string;
};
