import React from 'react';
import {SubmitHandler} from 'react-hook-form';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {FORM_ACTION} from '~/form/form-controller';

import {CompanyForm, CompanyFormType} from '../company-form';

const CreateCompanyPage = (): React.JSX.Element => {
    const handleSubmit: SubmitHandler<CompanyFormType> = () => null;

    return (
        <PageLayout pageTitle="Создание новой компании">
            <Container isEmptyContent={false} isLoading={false}>
                <CompanyForm action={FORM_ACTION.CREATE} onSubmit={handleSubmit} />
            </Container>
        </PageLayout>
    );
};

export default CreateCompanyPage;
