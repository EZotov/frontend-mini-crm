import {sample} from 'effector';
import {createGate} from 'effector-react';

import {GetAllCustomersQuery, GetCustomerPath} from '~/api/services/main/operations';
import {GateWithParams} from '~/types';

import {$paginationState, getCustomerFx, getCustomersListFx} from './customer';

export const customersPageGate = createGate<GateWithParams<GetAllCustomersQuery>>();
export const editCustomerPageGate = createGate<GateWithParams<GetCustomerPath>>();

sample({
    clock: customersPageGate.open,
    source: $paginationState,
    fn: (paginationState) => paginationState,
    target: getCustomersListFx,
});

sample({
    clock: editCustomerPageGate.open,
    filter: (data) => !!data?.params?.id,
    fn: (data) => (data?.params ? data.params : {id: ''}),
    target: getCustomerFx,
});
