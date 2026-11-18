import {Stack} from '@mui/material';
import React from 'react';

import {FORM_ACTION, FormController, useFormController} from '~/form/form-controller';
import {TextFieldController} from '~/form/input-controllers';
import {FormBaseProps} from '~/form/types';

import {CustomerFormSchema, CustomerFormType} from './schema';

export const CustomerForm = ({
    onSubmit,
    defaultValues,
    action = FORM_ACTION.CREATE,
}: FormBaseProps<CustomerFormType>): React.JSX.Element => {
    const form = useFormController<CustomerFormType>(CustomerFormSchema, {
        action,
        defaultValues: defaultValues ?? {
            lastName: '',
            firstName: '',
            phone: '',
            company: null,
        },
    });

    return (
        <FormController<CustomerFormType> {...form} onSubmit={onSubmit}>
            <Stack direction="column" spacing={1}>
                <TextFieldController<CustomerFormType> name="lastName" label="Фамилия" fullWidth />
                <TextFieldController<CustomerFormType> name="firstName" label="Имя" fullWidth />
                <TextFieldController<CustomerFormType> name="patronymic" label="Отчество" fullWidth />
                <TextFieldController<CustomerFormType> name="phone" label="Телефон" fullWidth />
                <TextFieldController<CustomerFormType> name="company.value" label="ID компании (временно)" fullWidth />
            </Stack>
        </FormController>
    );
};
