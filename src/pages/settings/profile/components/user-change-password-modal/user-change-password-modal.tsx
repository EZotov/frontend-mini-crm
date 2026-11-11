import {useUnit} from 'effector-react';

import {Modal} from '~/components/modal';
import {changePasswordEvent} from '~/models/auth';

import {$isChangePasswordSubmitting} from '../../models/profile';
import {UserChangePasswordForm} from './user-change-password-form';

interface UserChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const UserChangePasswordModal = ({isOpen, onClose}: UserChangePasswordModalProps) => {
    const [changePassword, isChangePasswordSubmitting] = useUnit([changePasswordEvent, $isChangePasswordSubmitting]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Изменение пароля" type="FORM_MODAL">
            <UserChangePasswordForm
                onSubmit={changePassword}
                onCancelClick={onClose}
                isSubmitting={isChangePasswordSubmitting}
            />
        </Modal>
    );
};
