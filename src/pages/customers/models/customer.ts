import {createEvent, createStore, sample} from 'effector';

import {mainApi} from '~/api/services/main/endpoints';
import {
    CreateCustomerBody,
    DeleteCustomerPath,
    GetAllCustomersQuery,
    GetCustomerPath,
    UpdateCustomerRequest,
} from '~/api/services/main/operations';
import {CreateOrUpdateDto, CustomerDto} from '~/api/services/main/schemas';
import {createApiEffect} from '~/utils/effector/api-effect';
import {paginationModelFactory} from '~/utils/effector/model-factory';

//Events
export const createCustomerEvent = createEvent<CreateCustomerBody>();
export const updateCustomerEvent = createEvent<UpdateCustomerRequest>();
export const deleteCustomerEvent = createEvent<DeleteCustomerPath>();

// Effects
export const getCustomersListFx = createApiEffect<GetAllCustomersQuery, CustomerDto[]>((payload) =>
    mainApi.getCustomersList(payload),
);
export const getCustomerFx = createApiEffect<GetCustomerPath, CustomerDto>((payload) => mainApi.getCustomer(payload));
export const createCustomerFx = createApiEffect<CreateCustomerBody, CreateOrUpdateDto>((payload) =>
    mainApi.createCustomer(payload),
);
export const updateCustomerFx = createApiEffect<UpdateCustomerRequest, CreateOrUpdateDto>((payload) =>
    mainApi.updateCustomer(payload),
);
export const deleteCustomerFx = createApiEffect<DeleteCustomerPath>((payload) => mainApi.deleteCompany(payload));

// Stores
export const $customers = createStore<CustomerDto[] | null>(null).on(
    getCustomersListFx.doneData,
    (_, data) => data.data,
);
export const $customersCount = createStore<number>(0).on(getCustomersListFx.doneData, (_, data) => data.total);
export const $customer = createStore<CustomerDto | null>(null).on(getCustomerFx.doneData, (_, data) => data.data);

export const $isCustomersListLoading = getCustomersListFx.pending;
export const $isCustomerLoading = getCustomerFx.pending;
export const $isCustomerCreateSubmitting = createCustomerFx.pending;
export const $isCustomerUpdateSubmitting = updateCustomerFx.pending;
export const $isCustomerDeleteSubmitting = deleteCustomerFx.pending;

export const {$paginationState, setPaginationEvent, resetPaginationEvent} = paginationModelFactory({
    paginationStoreName: 'customersPaginationState',
    setPaginationEventName: 'setCustomersPagination',
    resetPaginationEventName: 'resetCustomersPagination',
});

// Samples
sample({
    clock: $paginationState,
    target: getCustomersListFx,
});

sample({
    clock: createCustomerEvent,
    target: createCustomerFx,
});

sample({
    clock: updateCustomerEvent,
    target: updateCustomerFx,
});

sample({
    clock: deleteCustomerEvent,
    target: deleteCustomerFx,
});
