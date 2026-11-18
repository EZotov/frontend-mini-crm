import React from 'react';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';

import {CustomerForm} from '../customer-form';

const CreateCustomerPage = (): React.JSX.Element => {
    return (
        <PageLayout pageTitle="Создание нового заказчика">
            <Container isEmptyContent={false} isLoading={false}>
                <CustomerForm onSubmit={() => null} />
            </Container>
        </PageLayout>
    );
};

export default CreateCustomerPage;
