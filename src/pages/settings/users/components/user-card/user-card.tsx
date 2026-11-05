import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Box, Button, Card, CardActions, CardContent, Stack, Typography} from '@mui/material';
import {useUnit} from 'effector-react';

import {UserDto} from '~/api/services/main/schemas';
import {ConfirmModalData} from '~/components/confirm-modal/types';
import {LabelList} from '~/components/label-list';
import {ROLE_TRANSLATE_MAP} from '~/consts/roles';
import {SxMapProps} from '~/styles/types';
import {getFullName} from '~/utils/helpers';

import {deleteUserEvent} from '../../models/users';

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

type UserCardProps = UserDto & {
    onOpenConfirm: (data?: ConfirmModalData) => void;
    onOpenEditUserModal: (data: {id: string}) => void;
};

export const UserCard = ({onOpenConfirm, onOpenEditUserModal, ...user}: UserCardProps) => {
    const [deleteUser] = useUnit([deleteUserEvent]);

    return (
        <Card key={user.id} sx={styles.card}>
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
                        <Button size="medium" onClick={() => onOpenEditUserModal({id: user.id})}>
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
        </Card>
    );
};
