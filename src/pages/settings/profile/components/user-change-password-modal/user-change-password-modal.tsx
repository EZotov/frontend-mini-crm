import {Modal} from '~/components/modal';

import {UserChangePasswordForm} from './user-change-password-form';

interface UserChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const UserChangePasswordModal = ({isOpen, onClose}: UserChangePasswordModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Изменение пароля" type="FORM_MODAL">
            <UserChangePasswordForm onSubmit={() => null} />
        </Modal>
    );
};
