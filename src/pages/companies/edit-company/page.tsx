import React, {useMemo} from 'react';
import {SubmitHandler} from 'react-hook-form';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {FORM_ACTION} from '~/form/form-controller';

import {CompanyForm, CompanyFormType} from '../company-form';

const EditCompanyPage = (): React.JSX.Element => {
    const defaultValues = useMemo(
        () => ({
            fullTitle: '',
            shortTitle: '',
            inn: '',
        }),
        [],
    );

    const handleSubmit: SubmitHandler<CompanyFormType> = () => null;

    return (
        <PageLayout pageTitle="Редактирование компании">
            <Container isEmptyContent={false} isLoading={false}>
                <CompanyForm action={FORM_ACTION.EDIT} defaultValues={defaultValues} onSubmit={handleSubmit} />
            </Container>
        </PageLayout>
    );
};

export default EditCompanyPage;
