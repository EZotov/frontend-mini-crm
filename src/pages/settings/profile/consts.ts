import type {ProfileModalData} from './types';

export const PROFILE_MODAL_TYPE: Record<ProfileModalData['type'], ProfileModalData['type']> = {
    USER_EDIT: 'USER_EDIT',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
};
