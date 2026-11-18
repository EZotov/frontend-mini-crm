import {sample} from 'effector';
import {createGate} from 'effector-react';

import {GetAllCompaniesQuery, GetCompanyPath} from '~/api/services/main/operations';
import {GateWithParams} from '~/types';

import {$paginationState, getCompaniesListFx, getCompanyFx} from './company';

export const companiesPageGate = createGate<GateWithParams<GetAllCompaniesQuery>>();
export const editCompanyPageGate = createGate<GateWithParams<GetCompanyPath>>();

sample({
    clock: companiesPageGate.open,
    source: $paginationState,
    fn: (paginationState) => paginationState,
    target: getCompaniesListFx,
});

sample({
    clock: editCompanyPageGate.open,
    filter: (data) => !!data?.params?.id,
    fn: (data) => (data?.params ? data.params : {id: ''}),
    target: getCompanyFx,
});
