import {useModal} from '~/hooks/use-modal';

import type {ConfirmModalData, ConfirmModalProps} from '../types';

interface UseConfirmModalOptions {
    /**
     * Стейт отправки на кнопке для асинхронных операций
     */
    isSubmitting?: boolean;
}

interface UseConfirmModalReturn {
    onOpenConfirm: (data?: ConfirmModalData) => void;
    confirmModalProps: ConfirmModalProps;
}

/**
 * Хук для генерации пропсов и хендлеров для использования МО подтверждения
 * @param options - входные опции
 * @returns хендлер открытия МО и confirmModalProps для спреда в компонент ConfirmModal
 */
export const useConfirmModal = (options?: UseConfirmModalOptions): UseConfirmModalReturn => {
    const {isOpen, modalData, onCloseModal, onOpenModal} = useModal<ConfirmModalData>();

    return {
        onOpenConfirm: onOpenModal,
        confirmModalProps: {
            isOpen,
            modalData,
            onCloseModal,
            isSubmitting: options?.isSubmitting,
        },
    };
};
