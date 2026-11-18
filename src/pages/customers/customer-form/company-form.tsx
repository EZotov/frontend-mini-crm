import React from 'react';

import {FORM_ACTION, FormController, useFormController} from '~/form/form-controller';
import {FormBaseProps} from '~/form/types';

import {CompanyFormSchema, CompanyFormType} from './schema';

export const CompanyForm = ({
    onSubmit,
    defaultValues,
    action = FORM_ACTION.CREATE,
}: FormBaseProps<CompanyFormType>): React.JSX.Element => {
    const form = useFormController<CompanyFormType>(CompanyFormSchema, {
        action,
        defaultValues: defaultValues ?? {},
    });

    return (
        <FormController<CompanyFormType> {...form} onSubmit={onSubmit}>
            <></>
        </FormController>
    );
};
