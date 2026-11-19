import {useGate, useUnit} from 'effector-react';
import React, {useMemo} from 'react';
import {generatePath} from 'react-router-dom';

import {ConfirmModal, useConfirmModal} from '~/components/confirm-modal';
import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {List} from '~/components/list';
import {BaseCardProps, BaseListCard} from '~/components/list/base-list-card';
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
                      title: getFullName(item),
                      actions: [
                          {
                              actionTitle: 'Редактировать',
                              to: generatePath(ROUTE_PATHS.EDIT_CUSTOMERS_PAGE, {id: item.id}),
                          },
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
