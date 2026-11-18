import {sample} from 'effector';
import {createGate} from 'effector-react';

import {GetAllCompaniesQuery} from '~/api/services/main/operations';
import {GateWithParams} from '~/types';

import {$paginationState, getCompaniesListFx} from './company';

export const companiesPageGate = createGate<GateWithParams<GetAllCompaniesQuery>>();

sample({
    clock: companiesPageGate.open,
    source: $paginationState,
    fn: (paginationState) => paginationState,
    target: getCompaniesListFx,
});
