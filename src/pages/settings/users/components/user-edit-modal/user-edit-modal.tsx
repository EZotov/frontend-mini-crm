import {useUnit} from 'effector-react';
import React, {useMemo} from 'react';
import {SubmitHandler} from 'react-hook-form';

import {Modal} from '~/components/modal';

import {$roles} from '../../models/roles';
import {$isLoadingUser, $user, updateUserEvent} from '../../models/users';
import {formDataToUserPayload, userDtoToFormData, UserEditProfileForm, UserFormType} from '../user-edit-profile-form';

interface UserEditModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const UserEditModal = ({isOpen, onClose}: UserEditModalProps): React.JSX.Element => {
    const [user, isLoadingUser, updateUser, roles] = useUnit([$user, $isLoadingUser, updateUserEvent, $roles]);

    const defaultValues = useMemo(() => userDtoToFormData(user, roles), [user, roles]);

    const handleSubmit: SubmitHandler<UserFormType> = (data) =>
        updateUser({id: user?.id ?? '', ...formDataToUserPayload(data)});

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Редактировать пользователя"
            type="FORM_MODAL"
            isLoading={isLoadingUser}
        >
            <UserEditProfileForm onSubmit={handleSubmit} defaultValues={defaultValues} />
        </Modal>
    );
};
