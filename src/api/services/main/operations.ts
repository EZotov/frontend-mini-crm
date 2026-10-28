// Login
export type LoginRequestDto = {
    email: string;
    password: string;
};

//Registration
export type RegistrationRequestDto = {
    email: string;
    lastName: string;
    firstName: string;
    patronymic?: string;
    password: string;
    confirmPassword: string;
};
