import {Stack, Typography} from '@mui/material';
import {useUnit} from 'effector-react';
import React from 'react';

import {UserDto} from '~/api/services/main/schemas';
import {Container} from '~/components/container';
import {LabelList} from '~/components/label-list';
import {$isMyProfileLoading, $myProfile} from '~/models/auth';
import {getFullName} from '~/utils/helpers';

import {ROLE_TRANSLATE_MAP} from '../../../../../consts/roles';

export const UserInfoSection = (): React.JSX.Element => {
    const [myProfile, isMyProfileLoading] = useUnit([$myProfile, $isMyProfileLoading]);

    // Сужаем тип
    const profile = myProfile as UserDto;

    return (
        <Container sx={{flexGrow: 1, py: 2}} smallPadding>
            <Stack direction="column" spacing={2}>
                <Typography component="h3" variant="h3" align="center">
                    Информация о вашем профиле
                </Typography>

                <Container isTransparent isLoading={isMyProfileLoading} isEmptyContent={!myProfile} smallPadding>
                    <Stack direction="row" spacing={2}>
                        <LabelList
                            labelDirection="row"
                            items={[
                                {
                                    label: 'email',
                                    text: profile.email,
                                },
                                {
                                    label: 'ФИО',
                                    text: getFullName({
                                        lastName: profile?.lastName,
                                        firstName: profile?.firstName,
                                        patronymic: profile?.patronymic,
                                    }),
                                },
                                {
                                    label: 'Роль',
                                    text: ROLE_TRANSLATE_MAP[myProfile?.role ?? ''],
                                },
                                {
                                    label: 'Состояние УЗ',
                                    text: profile.isBlocked ? 'Заблокирована' : 'Без ограничений',
                                },
                                {
                                    label: 'Идентификатор',
                                    text: profile.id,
                                },
                            ]}
                        />
                        <LabelList
                            labelDirection="row"
                            items={[
                                {
                                    label: 'Кол-во задач назначенных на вас',
                                    text: 0,
                                },
                                {
                                    label: 'Кол-во закреплённых за вами сделок',
                                    text: 0,
                                },
                            ]}
                        />
                    </Stack>
                </Container>
            </Stack>
        </Container>
    );
};
