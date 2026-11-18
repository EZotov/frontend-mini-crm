import {createEvent, createStore, sample} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {
    CreateCompanyBody,
    DeleteCompanyPath,
    GetAllCompaniesQuery,
    GetCompanyPath,
    UpdateCompanyRequest,
} from '~/api/services/main/operations';
import {CompanyDto, CreateOrUpdateDto} from '~/api/services/main/schemas';
import {createApiEffect} from '~/utils/effector/api-effect';
import {paginationModelFactory} from '~/utils/effector/model-factory';

//Events
export const createCompanyEvent = createEvent<CreateCompanyBody>();
export const updateCompanyEvent = createEvent<UpdateCompanyRequest>();
export const deleteCompanyEvent = createEvent<DeleteCompanyPath>();

// Effects
export const getCompaniesListFx = createApiEffect<GetAllCompaniesQuery, CompanyDto[]>((payload) =>
    mainApi.getCompaniesList(payload),
);
export const getCompanyFx = createApiEffect<GetCompanyPath, CompanyDto>((payload) => mainApi.getCompany(payload));
export const createCompanyFx = createApiEffect<CreateCompanyBody, CreateOrUpdateDto>((payload) =>
    mainApi.createCompany(payload),
);
export const updateCompanyFx = createApiEffect<UpdateCompanyRequest, CreateOrUpdateDto>((payload) =>
    mainApi.updateCompany(payload),
);
export const deleteCompanyFx = createApiEffect<DeleteCompanyPath>((payload) => mainApi.deleteCompany(payload));

// Stores
export const $companies = createStore<CompanyDto[] | null>(null).on(
    getCompaniesListFx.doneData,
    (_, data) => data.data,
);
export const $companiesCount = createStore<number>(0).on(getCompaniesListFx.doneData, (_, data) => data.total);
export const $company = createStore<CompanyDto | null>(null).on(getCompanyFx.doneData, (_, data) => data.data);

export const $isCompaniesListLoading = getCompaniesListFx.pending;
export const $isCompanyLoading = getCompanyFx.pending;
export const $isCompanyCreateSubmitting = createCompanyFx.pending;
export const $isCompanyUpdateSubmitting = updateCompanyFx.pending;
export const $isCompanyDeleteSubmitting = deleteCompanyFx.pending;

export const {$paginationState, setPaginationEvent, resetPaginationEvent} = paginationModelFactory({
    paginationStoreName: 'companiesPaginationState',
    setPaginationEventName: 'setCompaniesPagination',
    resetPaginationEventName: 'resetCompaniesPagination',
});

// Samples
sample({
    clock: $paginationState,
    target: getCompaniesListFx,
});

sample({
    clock: createCompanyEvent,
    target: createCompanyFx,
});

sample({
    clock: updateCompanyEvent,
    target: updateCompanyFx,
});

sample({
    clock: deleteCompanyEvent,
    target: deleteCompanyFx,
});
