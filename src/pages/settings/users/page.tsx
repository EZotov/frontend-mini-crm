import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Box, Button, Card, CardActions, CardContent, Stack, Typography} from '@mui/material';
import {useGate, useUnit} from 'effector-react';
import {useState} from 'react';

import {ConfirmModal, useConfirmModal} from '~/components/confirm-modal';
import {Container} from '~/components/container';
import {LabelList} from '~/components/label-list';
import {PageLayout} from '~/components/layout/page-layout';
import {Pagination} from '~/components/pagination';
import {ROUTE_PATHS} from '~/router/paths';
import type {SxMapProps} from '~/styles/types';
import {getFullName} from '~/utils/helpers';

import {ROLE_TRANSLATE_MAP} from '../consts';
import {UserEditModal} from './components/user-edit-modal';
import {
    $isDeleteUserSubmitting,
    $isLoadingUserList,
    $paginationState,
    $users,
    $usersCount,
    deleteUserEvent,
    setPaginationEvent,
    userPageGate,
} from './models/users';

const styles: SxMapProps<'card' | 'accountSection' | 'infoContainer'> = {
    card: {
        display: 'flex',
        backgroundColor: 'inherit',
        boxShadow: 'none',
        border: '1px solid #50505071',
    },
    accountSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        mr: 2,
        borderRight: '2px solid',
        borderColor: 'primary.main',
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
        flexWrap: 'wrap',
    },
};

// Страница доступна только для админа
const UsersPage = (): React.JSX.Element => {
    useGate(userPageGate);

    const [isModalOpen, setModelOpen] = useState<boolean>(false);

    const [paginationState, setPagination, users, isLoadingUserList, usersCount, deleteUser, isDeleteUserSubmitting] =
        useUnit([
            $paginationState,
            setPaginationEvent,
            $users,
            $isLoadingUserList,
            $usersCount,
            deleteUserEvent,
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
                        <Card sx={styles.card}>
                            <Box sx={styles.accountSection}>
                                <AccountCircleIcon sx={{fontSize: 48}} />
                            </Box>
                            <Box sx={styles.infoContainer}>
                                <CardContent sx={{flexGrow: 1}}>
                                    <Typography component="h3" variant="h3">
                                        {getFullName({
                                            lastName: user?.lastName,
                                            firstName: user?.firstName,
                                            patronymic: user?.patronymic,
                                        })}
                                    </Typography>
                                    <LabelList
                                        direction="row"
                                        spacing={4}
                                        items={[
                                            {
                                                label: 'Роль',
                                                text: ROLE_TRANSLATE_MAP[user?.role ?? ''],
                                                visible: !!user?.role,
                                            },
                                            {
                                                label: 'Почта',
                                                text: user.email,
                                            },
                                            {
                                                label: 'Состояние',
                                                text: user.isBlocked ? 'Заблокирован' : 'Без ограничений',
                                            },
                                            {
                                                label: 'Идентификатор',
                                                text: user.id,
                                            },
                                        ]}
                                    />
                                </CardContent>
                                <CardActions>
                                    <Stack spacing={1}>
                                        <Button size="medium" onClick={() => setModelOpen(true)}>
                                            Редактировать информацию
                                        </Button>
                                        <Button
                                            size="medium"
                                            onClick={() =>
                                                onOpenConfirm({
                                                    title: 'Вы действительно хотите удалить этого пользователя?',
                                                    onConfirm: () => deleteUser(user.id),
                                                })
                                            }
                                        >
                                            Удалить
                                        </Button>
                                    </Stack>
                                </CardActions>
                            </Box>
                            <ConfirmModal {...confirmModalProps} />
                        </Card>
                    ))}
                </Stack>
                <Pagination totalCount={usersCount} paginationState={paginationState} onChange={setPagination} />
            </Container>

            <UserEditModal isOpen={isModalOpen} onClose={() => setModelOpen(false)} />
        </PageLayout>
    );
};

export default UsersPage;
