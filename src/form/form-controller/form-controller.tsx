/* eslint-disable @typescript-eslint/no-misused-promises */
import {Box, Button} from '@mui/material';
import React from 'react';
import {FieldValues, FormProvider, FormProviderProps, SubmitHandler} from 'react-hook-form';
import {Link} from 'react-router-dom';

import {SmartButton} from '~/components/smart-button';

interface FormControllerProps<FV extends FieldValues> extends FormProviderProps<FV> {
    onSubmit: SubmitHandler<FV>;
    disableIsDirty: boolean;
    cancelLink?: string;
    cancelOnClick?: () => void;
    submitDisabled?: boolean;
    submitButtonName?: string;
    cancelButtonName?: string;
    buttonsFullWidth?: boolean;
    hideCancelButton?: boolean;
    hideActions?: boolean;
    customActions?: React.JSX.Element;
}

/**
 * Компонент связки FormProvider с form
 */
export const FormController = <FV extends FieldValues = FieldValues>({
    children,
    onSubmit,
    cancelLink = '',
    cancelOnClick,
    submitDisabled,
    submitButtonName = 'Сохранить',
    cancelButtonName = 'Отмена',
    buttonsFullWidth = false,
    hideActions = false,
    hideCancelButton = false,
    customActions,
    disableIsDirty,
    ...formProviderProps
}: FormControllerProps<FV>): React.JSX.Element => {
    const {
        formState: {isSubmitting, isDirty, isValid},
        handleSubmit,
    } = formProviderProps;

    const isDirtyState = disableIsDirty ? false : !isDirty;

    const renderCancelButton = () => {
        if (cancelOnClick) {
            return (
                <Button color="secondary" variant="outlined" onClick={cancelOnClick} fullWidth={buttonsFullWidth}>
                    {cancelButtonName}
                </Button>
            );
        }

        return (
            <Button color="secondary" variant="outlined" component={Link} to={cancelLink} fullWidth={buttonsFullWidth}>
                {cancelButtonName}
            </Button>
        );
    };

    return (
        <FormProvider<FV> {...formProviderProps}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {children}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        gap: 2.5,
                        width: '100%',
                        mt: 2.5,
                    }}
                >
                    {!hideActions && (
                        <>
                            <SmartButton
                                color="primary"
                                variant="contained"
                                disabled={submitDisabled || isSubmitting || isDirtyState || !isValid}
                                type="submit"
                                isSubmitting={isSubmitting}
                                fullWidth={buttonsFullWidth}
                            >
                                {submitButtonName}
                            </SmartButton>

                            {!hideCancelButton && renderCancelButton}
                        </>
                    )}

                    {customActions}
                </Box>
            </form>
        </FormProvider>
    );
};
