import {Stack, Typography} from '@mui/material';
import React from 'react';

import {FORM_ACTION, FormController, useFormController} from '~/form/form-controller';
import {TextFieldController} from '~/form/input-controllers';
import {FormBaseProps} from '~/form/types';

import {CompanyFormSchema, CompanyFormType} from './schema';

export const CompanyForm = ({
    onSubmit,
    defaultValues,
    action = FORM_ACTION.CREATE,
    ...props
}: FormBaseProps<CompanyFormType>): React.JSX.Element => {
    const form = useFormController<CompanyFormType>(CompanyFormSchema, {
        action,
        defaultValues: defaultValues ?? {
            fullTitle: '',
            shortTitle: '',
            inn: '',
        },
    });

    return (
        <FormController<CompanyFormType> {...form} {...props} onSubmit={onSubmit}>
            <Typography component="h3" variant="h3" sx={{mb: 3}}>
                Информация о компании
            </Typography>
            <Stack direction="column" spacing={1}>
                <TextFieldController<CompanyFormType> name="fullTitle" label="Название" fullWidth />
                <TextFieldController<CompanyFormType> name="shortTitle" label="Короткое название" fullWidth />
                <TextFieldController<CompanyFormType> name="inn" label="ИНН" fullWidth />
            </Stack>
        </FormController>
    );
};
