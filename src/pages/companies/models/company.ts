import {createStore} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {GetAllCompaniesQuery, GetCompanyPath} from '~/api/services/main/operations';
import {CompanyDto} from '~/api/services/main/schemas';
import {createApiEffect} from '~/utils/effector/api-effect';
import {paginationModelFactory} from '~/utils/effector/model-factory';

// Effects
export const getCompaniesListFx = createApiEffect<GetAllCompaniesQuery, CompanyDto[]>((payload) =>
    mainApi.getCompaniesList(payload),
);
export const getCompanyFx = createApiEffect<GetCompanyPath, CompanyDto>((payload) => mainApi.getCompany(payload));

// Stores
export const $companies = createStore<CompanyDto[] | null>(null);

export const {$paginationState, setPaginationEvent, resetPaginationEvent} = paginationModelFactory({
    paginationStoreName: 'companiesPaginationState',
    setPaginationEventName: 'setCompaniesPagination',
    resetPaginationEventName: 'resetCompaniesPagination',
});

// Samples
