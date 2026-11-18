import {sample} from 'effector';
import {createGate} from 'effector-react';

import {getMyProfileFx} from '~/models/auth';
import {GateWithParams} from '~/types';

export const profilePageGate = createGate<GateWithParams<never>>();

sample({
    clock: profilePageGate.open,
    target: getMyProfileFx,
});
