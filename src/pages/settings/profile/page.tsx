import {Stack} from '@mui/material';
import {useGate} from 'effector-react';

import {ActionGetter, PageLayout} from '~/components/layout/page-layout';
import {useModal} from '~/hooks/use-modal';

import {UserEditModal} from '../users/components/user-edit-modal';
import {UserChangePasswordModal} from './components/user-change-password-modal';
import {PROFILE_MODAL_TYPE} from './consts';
import {profilePageGate} from './models/profile';
import {AvatarSection} from './sections/avatar-section';
import {UserInfoSection} from './sections/user-info-section';
import {ProfileModalData, ProfileModalHandler} from './types';

const getAction: ActionGetter<ProfileModalHandler> = (onOpenModal) => [
    {
        title: 'Редактировать свой профиль',
        onClick: () => onOpenModal({type: 'USER_EDIT'}),
        variant: 'contained',
    },
    {
        title: 'Изменить пароль',
        onClick: () => onOpenModal({type: 'CHANGE_PASSWORD'}),
        variant: 'contained',
    },
];

const ProfilePage = (): React.JSX.Element => {
    useGate(profilePageGate);

    const {isOpen, modalData, onOpenModal, onCloseModal} = useModal<ProfileModalData>();

    return (
        <PageLayout pageTitle="Профиль" otherActions={getAction(onOpenModal)}>
            <Stack direction="row" sx={{width: '100%', height: '100%'}} spacing={2}>
                <AvatarSection />
                <UserInfoSection />
            </Stack>

            {modalData.type === PROFILE_MODAL_TYPE.USER_EDIT && (
                <UserEditModal userId="" isOpen={isOpen} onClose={onCloseModal} />
            )}
            {modalData.type === PROFILE_MODAL_TYPE.CHANGE_PASSWORD && (
                <UserChangePasswordModal isOpen={isOpen} onClose={onCloseModal} />
            )}
        </PageLayout>
    );
};

export default ProfilePage;
