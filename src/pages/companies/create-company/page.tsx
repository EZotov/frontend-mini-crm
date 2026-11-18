import {useUnit} from 'effector-react';
import React from 'react';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {FORM_ACTION} from '~/form/form-controller';

import {CompanyForm} from '../company-form';
import {$isCompanyCreateSubmitting, createCompanyEvent} from '../models/company';

const CreateCompanyPage = (): React.JSX.Element => {
    const [createCompany, isCompanyCreateSubmitting] = useUnit([createCompanyEvent, $isCompanyCreateSubmitting]);

    return (
        <PageLayout pageTitle="Создание новой компании">
            <Container>
                <CompanyForm
                    action={FORM_ACTION.CREATE}
                    onSubmit={createCompany}
                    isSubmitting={isCompanyCreateSubmitting}
                />
            </Container>
        </PageLayout>
    );
};

export default CreateCompanyPage;
