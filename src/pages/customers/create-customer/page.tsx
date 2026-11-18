import React from 'react';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';

import {CompanyForm} from '../customer-form';

const CreateCustomerPage = (): React.JSX.Element => {
    return (
        <PageLayout pageTitle="Создание новой компании">
            <Container isEmptyContent={false} isLoading={false}>
                <CompanyForm onSubmit={() => null} />
            </Container>
        </PageLayout>
    );
};

export default CreateCustomerPage;
