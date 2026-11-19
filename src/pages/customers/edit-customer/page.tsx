import {useGate, useUnit} from 'effector-react';
import React, {useMemo} from 'react';
import {SubmitHandler} from 'react-hook-form';
import {useParams} from 'react-router-dom';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {FORM_ACTION} from '~/form/form-controller';
import {ROUTE_PATHS} from '~/router/paths';

import {CustomerForm, CustomerFormType} from '../customer-form';
import {$customer, $isCustomerLoading, $isCustomerUpdateSubmitting, updateCustomerEvent} from '../models/customer';
import {editCustomerPageGate} from '../models/gate';

const EditCustomerPage = (): React.JSX.Element => {
    const {id = ''} = useParams<{id: string}>();
    useGate(editCustomerPageGate, {params: {id}});

    const [customer, isCustomerLoading, updateCustomer, isCustomerUpdateSubmitting] = useUnit([
        $customer,
        $isCustomerLoading,
        updateCustomerEvent,
        $isCustomerUpdateSubmitting,
    ]);

    const defaultValues = useMemo(
        () => ({
            lastName: customer?.lastName ?? '',
            firstName: customer?.firstName ?? '',
            phone: customer?.phone ?? '',
            company: customer?.company
                ? {
                      value: customer.company.id,
                      label: customer.company.fullTitle,
                  }
                : null,
            patronymic: customer?.patronymic ?? '',
        }),
        [customer],
    );

    const handleSubmit: SubmitHandler<CustomerFormType> = (data) =>
        updateCustomer({
            id,
            lastName: data.lastName,
            firstName: data.firstName,
            patronymic: data?.patronymic || null,
            phone: data.phone,
            companyId: data.company?.value ?? '',
        });

    return (
        <PageLayout pageTitle="Редактирование заказчика">
            <Container isEmptyContent={!customer} isLoading={isCustomerLoading}>
                <CustomerForm
                    action={FORM_ACTION.EDIT}
                    defaultValues={defaultValues}
                    onSubmit={handleSubmit}
                    isSubmitting={isCustomerUpdateSubmitting}
                    cancelLink={ROUTE_PATHS.CUSTOMERS_PAGE}
                />
            </Container>
        </PageLayout>
    );
};

export default EditCustomerPage;
