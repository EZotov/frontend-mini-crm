import {Box, Container, Modal as MuiModal, Stack, SxProps, Typography} from '@mui/material';
import React from 'react';

const modalStyle: SxProps = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    bgcolor: '#e9e9e9',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    maxWidth: '60vw',
    minWidth: 420,
    p: 4,
    borderRadius: 8,
};

interface ModalBaseProps {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
    headlineFontSize?: number;
    contentBoxSx?: SxProps;
}

interface ModalCommonProps extends ModalBaseProps {
    type: 'BASE';
}

interface ModalFormProps extends ModalBaseProps {
    type: 'FORM_MODAL';
    isLoading?: boolean;
}

type ModalProps = ModalCommonProps | ModalFormProps;

export const Modal = ({
    isOpen,
    title,
    onClose,
    children,
    headlineFontSize = 20,
    contentBoxSx,
    ...props
}: ModalProps): React.JSX.Element => {
    const baseRender = (
        <Stack direction="column" spacing={3}>
            <Typography
                component="h3"
                variant="h3"
                sx={{
                    fontSize: headlineFontSize,
                    borderBottom: 2,
                    borderBottomColor: 'primary.main',
                    borderBottomStyle: 'solid',
                    pb: 1,
                }}
            >
                {title}
            </Typography>

            <Box sx={contentBoxSx}>{children}</Box>
        </Stack>
    );

    let formModalRender = null;

    if (props.type === 'FORM_MODAL') {
        formModalRender = props.isLoading ? <>Загрузка....</> : baseRender;
    }

    return (
        <MuiModal open={isOpen} onClose={onClose}>
            <Container sx={modalStyle}>{props.type === 'FORM_MODAL' ? formModalRender : baseRender}</Container>
        </MuiModal>
    );
};
