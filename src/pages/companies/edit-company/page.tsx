import React from 'react';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';

import {CompanyForm} from '../company-form';

const EditCompanyPage = (): React.JSX.Element => {
    return (
        <PageLayout pageTitle="Редактирование компании">
            <Container isEmptyContent={false} isLoading={false}>
                <CompanyForm
                    defaultValues={{
                        name: '',
                    }}
                    onSubmit={() => null}
                />
            </Container>
        </PageLayout>
    );
};

export default EditCompanyPage;
