import {useUnit} from 'effector-react';
import React, {useEffect, useMemo} from 'react';
import {SubmitHandler} from 'react-hook-form';

import {Modal} from '~/components/modal';

import {$roles} from '../../models/roles';
import {$isLoadingUser, $user, getUserEvent, updateUserEvent} from '../../models/users';
import {formDataToUserPayload, userDtoToFormData, UserEditProfileForm, UserFormType} from '../user-edit-profile-form';

interface UserEditModalProps {
    userId: string;
    isOpen: boolean;
    onClose: () => void;
}

export const UserEditModal = ({userId, isOpen, onClose}: UserEditModalProps): React.JSX.Element => {
    const [user, isLoadingUser, updateUser, roles, getUser] = useUnit([
        $user,
        $isLoadingUser,
        updateUserEvent,
        $roles,
        getUserEvent,
    ]);

    const defaultValues = useMemo(() => userDtoToFormData(user, roles), [user, roles]);

    const handleSubmit: SubmitHandler<UserFormType> = (data) =>
        updateUser({id: user?.id ?? '', ...formDataToUserPayload(data)});

    useEffect(() => {
        if (!isOpen) return;

        getUser(userId);
    }, [isOpen]);

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
