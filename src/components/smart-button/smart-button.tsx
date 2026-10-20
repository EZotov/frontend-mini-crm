import {Button, ButtonProps, CircularProgress} from '@mui/material';
import React from 'react';

interface SmartButtonProps extends ButtonProps {
    isSubmitting?: boolean;
}

/**
 * Кнопка с состоянием загрузки
 * @param param0
 * @returns
 */
export const SmartButton = ({children, isSubmitting, ...props}: SmartButtonProps) => {
    return (
        <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting || props.disabled}
            startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : props.startIcon}
            {...props}
        >
            {isSubmitting ? 'Загрузка...' : children}
        </Button>
    );
};
