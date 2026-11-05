import {Typography} from '@mui/material';
import React from 'react';

import {Container} from '../container';
import {Modal} from '../modal';
import {SmartButton} from '../smart-button';
import type {ConfirmModalProps} from './types';

export const ConfirmModal = ({isOpen, modalData, onCloseModal, isSubmitting}: ConfirmModalProps): React.JSX.Element => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onCloseModal}
            type="BASE"
            title={modalData?.title ?? 'Подтвердите ваше действие'}
        >
            <Container isTransparent sx={{p: 0, mt: 2}}>
                {modalData.description && <Typography>{modalData.description}</Typography>}
                <SmartButton fullWidth onClick={modalData.onConfirm} isSubmitting={isSubmitting}>
                    {modalData?.confirmButtonTitle ?? 'Подтвердить'}
                </SmartButton>
            </Container>
        </Modal>
    );
};
