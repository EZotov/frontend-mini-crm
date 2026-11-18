import {useUnit} from 'effector-react';
import React, {useMemo} from 'react';

import {ConfirmModal, useConfirmModal} from '~/components/confirm-modal';
import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {List} from '~/components/list';
import {BaseCardProps, BaseListCard, CardAction} from '~/components/list/base-list-card';
import {ROUTE_PATHS} from '~/router/paths';

import {$companies, $companiesCount, $isCompaniesListLoading, deleteCompanyEvent} from './models/company';

const actions: CardAction[] = [
    {
        actionTitle: 'Редактировать',
        to: ROUTE_PATHS.EDIT_COMPANY_PAGE,
    },
];

const CompaniesPage = (): React.JSX.Element => {
    const [companies, isCompaniesListLoading, companiesCount, deleteCompany] = useUnit([
        $companies,
        $isCompaniesListLoading,
        $companiesCount,
        deleteCompanyEvent,
    ]);

    const {onOpenConfirm, confirmModalProps} = useConfirmModal();

    const items: BaseCardProps[] = useMemo(
        () =>
            companies
                ? companies.map((item) => ({
                      id: item.id,
                      title: item.fullTitle,
                      actions: [
                          ...actions,
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
                    paginationState={{pageNum: 1, pageSize: 25}}
                    totalCount={0}
                />
            </Container>
            <ConfirmModal {...confirmModalProps} />
        </PageLayout>
    );
};

export default CompaniesPage;
