import {sample} from 'effector';
import {createGate} from 'effector-react';

import {GetUsersQuery} from '~/api/services/main/operations';
import {GateWithParams} from '~/types';

import {getRolesFx} from './roles';
import {$paginationState, getUsersFx} from './users';

// Gates
export const userPageGate = createGate<GateWithParams<GetUsersQuery>>();

//Samples
sample({
    clock: userPageGate.open,
    source: $paginationState,
    fn: (paginationState) => paginationState,
    target: [getUsersFx, getRolesFx],
});
