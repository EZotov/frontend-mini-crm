import {Stack} from '@mui/material';

import {Action, PageLayout} from '~/components/layout/page-layout';
import {useModal} from '~/hooks/use-modal';

import {UserEditModal} from '../users/components/user-edit-modal';
import {AvatarSection} from './avatar-section';
import {UserInfoSection} from './user-info-section';

type ModalDataUserEdit = {
    type: 'USER_EDIT';
};

type ModalDataChangePassword = {
    type: 'CHANGE_PASSWORD';
};

type ModalData = ModalDataUserEdit | ModalDataChangePassword;

const getAction = (onOpenModal: (data: ModalData) => void): Action[] => [
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
    const {isOpen, modalData, onOpenModal, onCloseModal} = useModal<ModalData>();

    return (
        <PageLayout pageTitle="Профиль" otherActions={getAction(onOpenModal)}>
            <Stack direction="row" sx={{width: '100%', height: '100%'}} spacing={2}>
                <AvatarSection />
                <UserInfoSection />
            </Stack>

            {modalData.type === 'USER_EDIT' && <UserEditModal isOpen={isOpen} onClose={onCloseModal} />}
            {modalData.type === 'CHANGE_PASSWORD' && <></>}
        </PageLayout>
    );
};

export default ProfilePage;
