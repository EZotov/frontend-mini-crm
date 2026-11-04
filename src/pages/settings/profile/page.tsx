import {Stack, Typography} from '@mui/material';

import {Container} from '~/components/container';
import {Action, PageLayout} from '~/components/layout/page-layout';

const actions: Action[] = [
    {
        title: 'Редактировать свой профиль',
        onClick: () => null,
        variant: 'contained',
    },
    {
        title: 'Изменить пароль',
        onClick: () => null,
        variant: 'contained',
    },
];

const ProfilePage = (): React.JSX.Element => {
    return (
        <PageLayout pageTitle="Профиль" otherActions={actions}>
            <Stack direction="row" sx={{width: '100%', height: '100%'}} spacing={2}>
                <Container sx={{flexBasis: 420, flexShrink: 0}} smallPadding>
                    <Typography component="h3" variant="h3" align="center">
                        Аватар
                    </Typography>
                </Container>
                <Container sx={{flexGrow: 1, py: 2}} smallPadding>
                    <Typography component="h3" variant="h3" align="center">
                        Информация о вашем профиле
                    </Typography>
                </Container>
            </Stack>
        </PageLayout>
    );
};

export default ProfilePage;
