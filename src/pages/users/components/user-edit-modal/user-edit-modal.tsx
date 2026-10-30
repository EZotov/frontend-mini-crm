import {useUnit} from 'effector-react';
import React, {useMemo} from 'react';
import {SubmitHandler} from 'react-hook-form';

import {Modal} from '~/components/modal';

import {$isLoadingUser, $isUpdateUserSubmitting, $user, updateUserEvent} from '../../models/users';
import {formDataToUserPayload, userDtoToFormData, UserEditProfileForm, UserFormType} from '../user-edit-profile-form';

interface UserEditModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const UserEditModal = ({isOpen, onClose}: UserEditModalProps): React.JSX.Element => {
    const [user, isLoadingUser, updateUser, isUpdateUserSubmitting] = useUnit([
        $user,
        $isLoadingUser,
        updateUserEvent,
        $isUpdateUserSubmitting,
    ]);

    const defaultValues = useMemo(() => userDtoToFormData(user), [user]);

    const handleSubmit: SubmitHandler<UserFormType> = (data) => updateUser(formDataToUserPayload(data));

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Редактировать пользователя"
            type="FORM_MODAL"
            isLoading={isLoadingUser}
        >
            <UserEditProfileForm
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
                isSubmitting={isUpdateUserSubmitting}
            />
        </Modal>
    );
};
