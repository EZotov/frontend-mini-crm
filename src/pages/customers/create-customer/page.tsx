import {useUnit} from 'effector-react';
import React from 'react';
import {SubmitHandler} from 'react-hook-form';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {FORM_ACTION} from '~/form/form-controller';
import {ROUTE_PATHS} from '~/router/paths';

import {CustomerForm, CustomerFormType} from '../customer-form';
import {$isCustomerCreateSubmitting, createCustomerEvent} from '../models/customer';

const CreateCustomerPage = (): React.JSX.Element => {
    const [createCustomer, isCustomerCreateSubmitting] = useUnit([createCustomerEvent, $isCustomerCreateSubmitting]);

    const handleSubmit: SubmitHandler<CustomerFormType> = (data) =>
        createCustomer({
            ...data,
            companyId: data.company?.value || '',
        });

    return (
        <PageLayout pageTitle="Создание нового заказчика">
            <Container>
                <CustomerForm
                    action={FORM_ACTION.CREATE}
                    onSubmit={handleSubmit}
                    isSubmitting={isCustomerCreateSubmitting}
                    cancelLink={ROUTE_PATHS.CUSTOMERS_PAGE}
                />
            </Container>
        </PageLayout>
    );
};

export default CreateCustomerPage;
