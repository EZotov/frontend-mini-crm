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

// Users
export type GetUserPath = operations['UserController_getUser']['parameters']['path'];
export type UpdateUserPath = operations['UserController_updateUserProfile']['parameters']['path'];
export type UpdateUserBody =
    operations['UserController_updateUserProfile']['requestBody']['content']['application/json'];
export type UpdateUserRequest = UpdateUserPath & UpdateUserBody;

// Me
export type ChangePasswordBody =
    operations['MeUserController_updateMyProfilePassword']['requestBody']['content']['application/json'];
export type UpdateMyProfileBody =
    operations['MeUserController_updateMyProfile']['requestBody']['content']['application/json'];

// Company
export type GetAllCompaniesQuery = operations['CompanyController_getAll']['parameters']['query'];
export type GetCompanyPath = operations['CompanyController_get']['parameters']['path'];
export type CreateCompanyBody = operations['CompanyController_create']['requestBody']['content']['application/json'];
export type UpdateCompanyPath = operations['CompanyController_update']['parameters']['path'];
export type UpdateCompanyBody = operations['CompanyController_update']['requestBody']['content']['application/json'];
export type DeleteCompanyPath = operations['CompanyController_delete']['parameters']['path'];
export type UpdateCompanyRequest = UpdateCompanyPath & UpdateCompanyBody;

// Customer
export type GetAllCustomersQuery = operations['CustomerController_getAll']['parameters']['query'];
export type GetCustomerPath = operations['CustomerController_get']['parameters']['path'];
export type CreateCustomerBody = operations['CustomerController_create']['requestBody']['content']['application/json'];
export type UpdateCustomerPath = operations['CustomerController_update']['parameters']['path'];
export type UpdateCustomerBody = operations['CustomerController_update']['requestBody']['content']['application/json'];
export type DeleteCustomerPath = operations['CustomerController_delete']['parameters']['path'];
export type UpdateCustomerRequest = UpdateCustomerPath & UpdateCustomerBody;
