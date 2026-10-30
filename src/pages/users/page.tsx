import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Box, Button, Card, CardActions, CardContent, Stack, Typography} from '@mui/material';
import {useGate, useUnit} from 'effector-react';
import {useState} from 'react';

import {Container} from '~/components/container';
import {InnerPage} from '~/components/inner-page';
import {Pagination} from '~/components/pagination';
import {SmartButton} from '~/components/smart-button';
import {ROUTE_PATHS} from '~/router/paths';
import {SxMapProps} from '~/types';

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

const ROLE_TRANSLATE_MAP: Record<string, string> = {
    ADMIN: 'Администратор',
    MANAGER: 'Менеджер',
    USER: 'Пользователь',
};

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

    return (
        <InnerPage
            pageTitle="Пользователи системы"
            createButtonTitle="Создать пользователя"
            to={ROUTE_PATHS.USERS_CREATE_PAGE}
        >
            <Container isEmptyList={!usersCount} isLoading={isLoadingUserList}>
                <Stack spacing={3}>
                    {users?.map((user) => (
                        <Card sx={styles.card}>
                            <Box sx={styles.accountSection}>
                                <AccountCircleIcon sx={{fontSize: 48}} />
                            </Box>
                            <Box sx={styles.infoContainer}>
                                <CardContent sx={{flexGrow: 1}}>
                                    <Typography component="h3" sx={{fontWeight: 800, fontSize: 20}}>
                                        {`${user.lastName} ${user.firstName} ${user.patronymic}`}
                                    </Typography>

                                    <Stack direction="row" spacing={4} sx={{marginTop: 2}}>
                                        {user?.role && (
                                            <Stack direction="column" spacing={0.5}>
                                                <Typography component="label" sx={{fontWeight: 600}}>
                                                    Роль:
                                                </Typography>
                                                <Typography component="p">{ROLE_TRANSLATE_MAP[user.role]}</Typography>
                                            </Stack>
                                        )}
                                        <Stack direction="column" spacing={0.5} sx={{marginTop: 2}}>
                                            <Typography component="label" sx={{fontWeight: 600}}>
                                                Почта:
                                            </Typography>
                                            <Typography component="p">{user.email}</Typography>
                                        </Stack>

                                        <Stack direction="column" spacing={0.5} sx={{marginTop: 2}}>
                                            <Typography component="label" sx={{fontWeight: 600}}>
                                                Состояние:
                                            </Typography>
                                            <Typography component="p">
                                                {user.isBlocked ? 'Заблокирован' : 'Без ограничений'}
                                            </Typography>
                                        </Stack>

                                        <Stack direction="column" spacing={0.5} sx={{marginTop: 2}}>
                                            <Typography component="label" sx={{fontWeight: 600}}>
                                                Идентификатор:
                                            </Typography>
                                            <Typography component="p">{user.id}</Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>

                                <CardActions>
                                    <Stack spacing={1}>
                                        <Button size="medium" onClick={() => setModelOpen(true)}>
                                            Редактировать информацию
                                        </Button>
                                        <SmartButton
                                            size="medium"
                                            isSubmitting={isDeleteUserSubmitting}
                                            // TODO: Как появится модалка подтверждения - доделать
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Удалить
                                        </SmartButton>
                                    </Stack>
                                </CardActions>
                            </Box>
                        </Card>
                    ))}
                </Stack>
                <Pagination totalCount={usersCount} paginationState={paginationState} onChange={setPagination} />
            </Container>

            <UserEditModal isOpen={isModalOpen} onClose={() => setModelOpen(false)} />
        </InnerPage>
    );
};

export default UsersPage;
