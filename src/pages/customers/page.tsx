import {useGate, useUnit} from 'effector-react';
import React, {useMemo} from 'react';

import {ConfirmModal, useConfirmModal} from '~/components/confirm-modal';
import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {List} from '~/components/list';
import {BaseCardProps, BaseListCard, CardAction} from '~/components/list/base-list-card';
import {ROUTE_PATHS} from '~/router/paths';
import {getFullName} from '~/utils/helpers';

import {
    $customers,
    $customersCount,
    $isCustomersListLoading,
    $paginationState,
    deleteCustomerEvent,
} from './models/customer';
import {customersPageGate} from './models/gate';

const actions: CardAction[] = [
    {
        actionTitle: 'Редактировать',
        to: ROUTE_PATHS.EDIT_CUSTOMERS_PAGE,
    },
];

const CustomersPage = (): React.JSX.Element => {
    useGate(customersPageGate);

    const [customers, isCustomersListLoading, customersCount, deleteCustomer, paginationState] = useUnit([
        $customers,
        $isCustomersListLoading,
        $customersCount,
        deleteCustomerEvent,
        $paginationState,
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
                                      title: `Вы уверены, что хотите удалить заказчика "${getFullName(item)}"?`,
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
                    paginationState={paginationState}
                    totalCount={customersCount}
                />
            </Container>
            <ConfirmModal {...confirmModalProps} />
        </PageLayout>
    );
};

export default CustomersPage;
