import {useGate, useUnit} from 'effector-react';
import React, {useMemo} from 'react';
import {generatePath} from 'react-router-dom';

import {ConfirmModal, useConfirmModal} from '~/components/confirm-modal';
import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {List} from '~/components/list';
import {BaseCardProps, BaseListCard} from '~/components/list/base-list-card';
import {ROUTE_PATHS} from '~/router/paths';

import {
    $companies,
    $companiesCount,
    $isCompaniesListLoading,
    $paginationState,
    deleteCompanyEvent,
} from './models/company';
import {companiesPageGate} from './models/gate';

const CompaniesPage = (): React.JSX.Element => {
    useGate(companiesPageGate);

    const [companies, isCompaniesListLoading, companiesCount, deleteCompany, paginationState] = useUnit([
        $companies,
        $isCompaniesListLoading,
        $companiesCount,
        deleteCompanyEvent,
        $paginationState,
    ]);

    const {onOpenConfirm, confirmModalProps} = useConfirmModal();

    const items: BaseCardProps[] = useMemo(
        () =>
            companies
                ? companies.map((item) => ({
                      id: item.id,
                      title: item.fullTitle,
                      actions: [
                          {
                              actionTitle: 'Редактировать',
                              to: generatePath(ROUTE_PATHS.EDIT_COMPANY_PAGE, {id: item.id}),
                          },
                          {
                              actionTitle: 'Удалить',
                              onClick: () =>
                                  onOpenConfirm({
                                      title: `Вы уверены, что хотите удалить компанию "${item.fullTitle}"`,
                                      onConfirm: () => deleteCompany({id: item.id}),
                                  }),
                          },
                      ],
                  }))
                : [],
        [companies],
    );

    return (
        <PageLayout
            pageTitle="Компании"
            createButtonTitle="Создать компанию"
            createButtonTo={ROUTE_PATHS.CREATE_COMPANY_PAGE}
        >
            <Container isEmptyContent={!companiesCount} isLoading={isCompaniesListLoading}>
                <List<BaseCardProps>
                    cardComponent={BaseListCard}
                    items={items}
                    paginationState={paginationState}
                    totalCount={companiesCount}
                />
            </Container>
            <ConfirmModal {...confirmModalProps} />
        </PageLayout>
    );
};

export default CompaniesPage;
