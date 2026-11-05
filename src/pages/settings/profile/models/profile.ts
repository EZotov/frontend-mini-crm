import {sample} from 'effector';
import {createGate} from 'effector-react';

import {getMyProfileFx} from '~/models/auth';

export const profilePageGate = createGate();

sample({
    clock: profilePageGate.open,
    target: getMyProfileFx,
});
