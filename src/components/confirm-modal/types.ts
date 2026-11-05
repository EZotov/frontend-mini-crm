export type ConfirmModalData = {
    title?: string;
    description?: string;
    onConfirm: () => void;
    confirmButtonTitle?: string;
};

export interface ConfirmModalProps {
    isOpen: boolean;
    modalData: ConfirmModalData;
    onCloseModal: () => void;
    isSubmitting?: boolean;
}
