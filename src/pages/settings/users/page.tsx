import {Stack} from '@mui/material';
import {useGate, useUnit} from 'effector-react';

import {ConfirmModal, useConfirmModal} from '~/components/confirm-modal';
import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {Pagination} from '~/components/pagination';
import {useModal} from '~/hooks/use-modal';
import {ROUTE_PATHS} from '~/router/paths';

import {UserCard} from './components/user-card';
import {UserEditModal} from './components/user-edit-modal';
import {
    $isDeleteUserSubmitting,
    $isLoadingUserList,
    $paginationState,
    $users,
    $usersCount,
    setPaginationEvent,
    userPageGate,
} from './models/users';

// Страница доступна только для админа
const UsersPage = (): React.JSX.Element => {
    useGate(userPageGate);

    const {
        isOpen: isOpenUserEditModal,
        modalData: userEditModalData,
        onCloseModal,
        onOpenModal,
    } = useModal<{id: string}>();

    const [paginationState, setPagination, users, isLoadingUserList, usersCount, isDeleteUserSubmitting] = useUnit([
        $paginationState,
        setPaginationEvent,
        $users,
        $isLoadingUserList,
        $usersCount,
        $isDeleteUserSubmitting,
    ]);

    const {onOpenConfirm, confirmModalProps} = useConfirmModal({isSubmitting: isDeleteUserSubmitting});

    return (
        <PageLayout
            pageTitle="Пользователи системы"
            createButtonTitle="Создать пользователя"
            createButtonTo={ROUTE_PATHS.USERS_CREATE_PAGE}
        >
            <Container isEmptyContent={!usersCount} isLoading={isLoadingUserList}>
                <Stack spacing={3}>
                    {users?.map((user) => (
                        <UserCard
                            key={user.id}
                            {...user}
                            onOpenConfirm={onOpenConfirm}
                            onOpenEditUserModal={onOpenModal}
                        />
                    ))}
                </Stack>
                <Pagination totalCount={usersCount} paginationState={paginationState} onChange={setPagination} />
            </Container>
            <UserEditModal userId={userEditModalData.id} isOpen={isOpenUserEditModal} onClose={onCloseModal} />
            <ConfirmModal {...confirmModalProps} />
        </PageLayout>
    );
};

export default UsersPage;
