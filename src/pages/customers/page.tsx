import {useUnit} from 'effector-react';
import React, {useMemo} from 'react';

import {ConfirmModal, useConfirmModal} from '~/components/confirm-modal';
import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {List} from '~/components/list';
import {BaseCardProps, BaseListCard, CardAction} from '~/components/list/base-list-card';
import {ROUTE_PATHS} from '~/router/paths';

import {$customers, $customersCount, $isCustomersListLoading, deleteCustomerEvent} from './models/customer';

const actions: CardAction[] = [
    {
        actionTitle: 'Редактировать',
        to: ROUTE_PATHS.EDIT_CUSTOMERS_PAGE,
    },
];

const CustomersPage = (): React.JSX.Element => {
    const [customers, isCustomersListLoading, customersCount, deleteCustomer] = useUnit([
        $customers,
        $isCustomersListLoading,
        $customersCount,
        deleteCustomerEvent,
    ]);

    const {onOpenConfirm, confirmModalProps} = useConfirmModal();

    const items: BaseCardProps[] = useMemo(
        () =>
            customers
                ? customers.map((item) => ({
                      id: item.id,
                      title: item.lastName,
                      actions: [
                          ...actions,
                          {
                              actionTitle: 'Удалить',
                              onClick: () =>
                                  onOpenConfirm({
                                      title: `Вы уверены, что хотите удалить заказчика "${item.lastName}"`,
                                      onConfirm: () => deleteCustomer({id: item.id}),
                                  }),
                          },
                      ],
                  }))
                : [],
        [customers],
    );

    return (
        <PageLayout
            pageTitle="Заказчики"
            createButtonTitle="Создать заказчика"
            createButtonTo={ROUTE_PATHS.CREATE_COMPANY_PAGE}
        >
            <Container isEmptyContent={!customersCount} isLoading={isCustomersListLoading}>
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

export default CustomersPage;
