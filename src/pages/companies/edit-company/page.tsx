import {useGate, useUnit} from 'effector-react';
import React, {useMemo} from 'react';
import {SubmitHandler} from 'react-hook-form';
import {useParams} from 'react-router-dom';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {FORM_ACTION} from '~/form/form-controller';

import {CompanyForm, CompanyFormType} from '../company-form';
import {$company, $isCompanyLoading, $isCompanyUpdateSubmitting, updateCompanyEvent} from '../models/company';
import {editCompanyPageGate} from '../models/gate';

const EditCompanyPage = (): React.JSX.Element => {
    const {id = ''} = useParams<{id: string}>();
    useGate(editCompanyPageGate, {params: {id}});

    const [company, isCompanyLoading, updateCompany, isCompanyUpdateSubmitting] = useUnit([
        $company,
        $isCompanyLoading,
        updateCompanyEvent,
        $isCompanyUpdateSubmitting,
    ]);

    const defaultValues = useMemo(
        () => ({
            fullTitle: company?.fullTitle ?? '',
            shortTitle: company?.shortTitle ?? '',
            inn: company?.inn ?? '',
        }),
        [company],
    );

    const handleSubmit: SubmitHandler<CompanyFormType> = (data) =>
        updateCompany({
            ...data,
            id,
        });

    return (
        <PageLayout pageTitle="Редактирование компании">
            <Container isEmptyContent={!company} isLoading={isCompanyLoading}>
                <CompanyForm
                    action={FORM_ACTION.EDIT}
                    defaultValues={defaultValues}
                    onSubmit={handleSubmit}
                    isSubmitting={isCompanyUpdateSubmitting}
                />
            </Container>
        </PageLayout>
    );
};

export default EditCompanyPage;
