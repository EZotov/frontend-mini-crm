import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Box, Button, Card, CardActions, CardContent, Stack, Typography} from '@mui/material';
import {useGate, useUnit} from 'effector-react';

import {Container} from '~/components/container';
import {InnerPage} from '~/components/inner-page';
import {Pagination} from '~/components/pagination';
import {ROUTE_PATHS} from '~/router/paths';

import {$paginationState, $usersCount, setPaginationEvent, userPageGate} from './models/users';

const UsersPage = () => {
    useGate(userPageGate);

    const [paginationState, setPagination, usersCount] = useUnit([$paginationState, setPaginationEvent, $usersCount]);

    return (
        <InnerPage
            pageTitle="Пользователи системы"
            createButtonTitle="Создать пользователя"
            to={ROUTE_PATHS.USERS_CREATE_PAGE}
        >
            <Container>
                <Stack spacing={3}>
                    <Card
                        sx={{
                            display: 'flex',
                            backgroundColor: 'inherit',
                            boxShadow: 'none',
                            border: '1px solid #50505071',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                mr: 2,
                                borderRight: '2px solid',
                                borderColor: 'primary.main',
                            }}
                        >
                            <AccountCircleIcon sx={{fontSize: 48}} />
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', flexGrow: 1, flexWrap: 'wrap'}}>
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography component="h3" sx={{fontWeight: 800, fontSize: 20}}>
                                    Зотов Евгений Валерьевич
                                </Typography>

                                <Stack direction="row" spacing={4} sx={{marginTop: 2}}>
                                    <Stack direction="column" spacing={0.5}>
                                        <Typography component="label" sx={{fontWeight: 600}}>
                                            Роль:
                                        </Typography>
                                        <Typography component="p">Администратор</Typography>
                                    </Stack>

                                    <Stack direction="column" spacing={0.5} sx={{marginTop: 2}}>
                                        <Typography component="label" sx={{fontWeight: 600}}>
                                            Почта:
                                        </Typography>
                                        <Typography component="p">lenux5660@gmai.ru</Typography>
                                    </Stack>

                                    <Stack direction="column" spacing={0.5} sx={{marginTop: 2}}>
                                        <Typography component="label" sx={{fontWeight: 600}}>
                                            Почта:
                                        </Typography>
                                        <Typography component="p">Администратор</Typography>
                                    </Stack>

                                    <Stack direction="column" spacing={0.5} sx={{marginTop: 2}}>
                                        <Typography component="label" sx={{fontWeight: 600}}>
                                            Почта:
                                        </Typography>
                                        <Typography component="p">Администратор</Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>

                            <CardActions>
                                <Stack spacing={1}>
                                    <Button size="medium">Редактировать информацию</Button>
                                    <Button size="medium">Удалить</Button>
                                </Stack>
                            </CardActions>
                        </Box>
                    </Card>

                    <Card
                        sx={{
                            display: 'flex',
                            backgroundColor: 'inherit',
                            boxShadow: 'none',
                            border: '1px solid #6e6e6e71',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                mr: 2,
                                borderRight: '2px solid',
                                borderColor: 'primary.main',
                            }}
                        >
                            <AccountCircleIcon sx={{fontSize: 48}} />
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', flexGrow: 1, flexWrap: 'wrap'}}>
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography component="h3" sx={{fontWeight: 800, fontSize: 20}}>
                                    Зотов Евгений Валерьевич
                                </Typography>

                                <Stack direction="row" spacing={4} sx={{marginTop: 2}}>
                                    <Stack direction="column" spacing={0.5}>
                                        <Typography component="label" sx={{fontWeight: 600}}>
                                            Роль:
                                        </Typography>
                                        <Typography component="p">Администратор</Typography>
                                    </Stack>

                                    <Stack direction="column" spacing={0.5} sx={{marginTop: 2}}>
                                        <Typography component="label" sx={{fontWeight: 600}}>
                                            Почта:
                                        </Typography>
                                        <Typography component="p">lenux5660@gmai.ru</Typography>
                                    </Stack>

                                    <Stack direction="column" spacing={0.5} sx={{marginTop: 2}}>
                                        <Typography component="label" sx={{fontWeight: 600}}>
                                            Почта:
                                        </Typography>
                                        <Typography component="p">Администратор</Typography>
                                    </Stack>

                                    <Stack direction="column" spacing={0.5} sx={{marginTop: 2}}>
                                        <Typography component="label" sx={{fontWeight: 600}}>
                                            Почта:
                                        </Typography>
                                        <Typography component="p">Администратор</Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>

                            <CardActions>
                                <Stack spacing={1}>
                                    <Button size="medium">Редактировать информацию</Button>
                                    <Button size="medium">Удалить</Button>
                                </Stack>
                            </CardActions>
                        </Box>
                    </Card>
                </Stack>
                <Pagination totalCount={usersCount} paginationState={paginationState} onChange={setPagination} />
            </Container>
        </InnerPage>
    );
};

export default UsersPage;
