import {CoreApiClient} from '~/api/base-api';
import {ENV_CONFIG} from '~/utils/env-config';

import type {
    ChangePasswordBody,
    DeleteCompanyPath,
    DeleteCustomerPath,
    GetAllCompaniesQuery,
    GetAllCustomersQuery,
    GetCompanyPath,
    GetCustomerPath,
    GetUserPath,
    GetUsersQuery,
    LoginRequestBody,
    RegistrationRequestBody,
    UpdateCompanyBody,
    UpdateCompanyRequest,
    UpdateCustomerBody,
    UpdateCustomerRequest,
    UpdateMyProfileBody,
    UpdateUserBody,
    UpdateUserRequest,
} from './operations';
import type {
    CompanyDto,
    CreateOrUpdateDto,
    CustomerDto,
    LoginDto,
    RefreshTokenDto,
    RegistrationDto,
    RoleDto,
    UserDto,
} from './schemas';

class MainApiService extends CoreApiClient {
    // Auth
    signIn(body: LoginRequestBody) {
        return this.post<LoginRequestBody, LoginDto>(`/v1/auth/sign-in`, body);
    }

    signUp(body: RegistrationRequestBody) {
        return this.post<RegistrationRequestBody, RegistrationDto>(`/v1/auth/sign-in`, body);
    }

    refresh() {
        return this.post<void, RefreshTokenDto>(`/v1/auth/refresh`);
    }

    logout() {
        return this.post(`/v1/auth/logout`);
    }

    // Roles
    getRoles() {
        return this.get<void, RoleDto[]>(`/v1/roles`);
    }

    //Me
    getMyProfile() {
        return this.get<void, UserDto>(`/v1/users/me`);
    }

    updateMyProfile(body: UpdateMyProfileBody) {
        return this.put<UpdateMyProfileBody, CreateOrUpdateDto>(`/v1/users/me`, body);
    }

    changePassword(body: ChangePasswordBody) {
        return this.post<ChangePasswordBody, CreateOrUpdateDto>(`/v1/users/me`, body);
    }

    deleteMyProfile() {
        return this.delete(`/v1/users/me`);
    }

    // Users
    getUsersList(query: GetUsersQuery) {
        return this.get<GetUsersQuery, UserDto[]>(`/v1/users`, query);
    }

    getUser({id}: GetUserPath) {
        return this.get<void, UserDto>(`/v1/users/${id}`);
    }

    updateUser({id, ...body}: UpdateUserRequest) {
        return this.put<UpdateUserBody, CreateOrUpdateDto>(`/v1/users/${id}`, body);
    }

    deleteUser(id: string) {
        return this.delete(`/v1/users/${id}`);
    }

    // Company
    getCompaniesList(query: GetAllCompaniesQuery) {
        return this.get<GetAllCompaniesQuery, CompanyDto[]>(`/v1/companies`, query);
    }

    getCompany({id}: GetCompanyPath) {
        return this.get<void, CompanyDto>(`/v1/companies/${id}`);
    }

    updateCompany({id, ...body}: UpdateCompanyRequest) {
        return this.put<UpdateCompanyBody, CreateOrUpdateDto>(`/v1/companies/${id}`, body);
    }

    deleteCompany({id}: DeleteCompanyPath) {
        return this.delete(`/v1/companies/${id}`);
    }

    // Customer
    getCustomersList(query: GetAllCustomersQuery) {
        return this.get<GetAllCustomersQuery, CustomerDto[]>(`/v1/customers`, query);
    }

    getCustomer({id}: GetCustomerPath) {
        return this.get<void, CustomerDto>(`/v1/customers/${id}`);
    }

    updateCustomer({id, ...body}: UpdateCustomerRequest) {
        return this.put<UpdateCustomerBody, CreateOrUpdateDto>(`/v1/customers/${id}`, body);
    }

    deleteCustomer({id}: DeleteCustomerPath) {
        return this.delete(`/v1/customers/${id}`);
    }
}

export const mainApi = new MainApiService({
    baseURL: ENV_CONFIG.APP_BASE_API_URL,
});
