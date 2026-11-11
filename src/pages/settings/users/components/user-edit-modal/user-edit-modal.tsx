import {useUnit} from 'effector-react';
import React, {useEffect, useMemo} from 'react';
import {SubmitHandler} from 'react-hook-form';

import {Modal} from '~/components/modal';
import {$isMyProfileLoading, $myProfile, getMyProfileEvent} from '~/models/auth';
import {$isUpdateMyProfileSubmitting, updateMyProfileEvent} from '~/pages/settings/profile/models/profile';

import {$roles} from '../../models/roles';
import {$isLoadingUser, $isUpdateUserSubmitting, $user, getUserEvent, updateUserEvent} from '../../models/users';
import {formDataToUserPayload, userDtoToFormData, UserEditProfileForm, UserFormType} from '../user-edit-profile-form';

interface UserEditModalProps {
    isOpen: boolean;
    onClose: () => void;
    userId?: string;
}

export const UserEditModal = ({userId, isOpen, onClose}: UserEditModalProps): React.JSX.Element => {
    const [
        user,
        isLoadingUser,
        updateUser,
        isUpdateUserSubmitting,
        roles,
        getUser,
        myProfile,
        isMyProfileLoading,
        getMyProfile,
        updateMyProfile,
        isUpdateMyProfileSubmitting,
    ] = useUnit([
        $user,
        $isLoadingUser,
        updateUserEvent,
        $isUpdateUserSubmitting,
        $roles,
        getUserEvent,
        $myProfile,
        $isMyProfileLoading,
        getMyProfileEvent,
        updateMyProfileEvent,
        $isUpdateMyProfileSubmitting,
    ]);

    const defaultValues = useMemo(() => userDtoToFormData(!userId ? myProfile : user, roles), [user, roles]);

    const handleSubmit: SubmitHandler<UserFormType> = (data) => {
        const userData = formDataToUserPayload(data);

        if (!userId) {
            updateMyProfile(userData);
            return;
        }

        updateUser({id: userId, ...userData});
    };

    useEffect(() => {
        if (!isOpen) return;

        if (!userId) {
            getMyProfile();
            return;
        }

        getUser(userId);
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Редактировать пользователя"
            type="FORM_MODAL"
            isLoading={isMyProfileLoading || isLoadingUser}
        >
            <UserEditProfileForm
                hasUserId={!!userId}
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
                isSubmitting={isUpdateUserSubmitting || isUpdateMyProfileSubmitting}
            />
        </Modal>
    );
};
