import React, {useMemo} from 'react';
import {SubmitHandler} from 'react-hook-form';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {FORM_ACTION} from '~/form/form-controller';

import {CustomerForm, CustomerFormType} from '../customer-form';

const EditCustomerPage = (): React.JSX.Element => {
    const defaultValues = useMemo(
        () => ({
            lastName: '',
            firstName: '',
            phone: '',
            company: null,
            patronymic: '',
        }),
        [],
    );

    const handleSubmit: SubmitHandler<CustomerFormType> = () => null;

    return (
        <PageLayout pageTitle="Редактирование заказчика">
            <Container isEmptyContent={false} isLoading={false}>
                <CustomerForm action={FORM_ACTION.EDIT} defaultValues={defaultValues} onSubmit={handleSubmit} />
            </Container>
        </PageLayout>
    );
};

export default EditCustomerPage;
