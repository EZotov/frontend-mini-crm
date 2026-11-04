import {Stack} from '@mui/material';

import {Action, PageLayout} from '~/components/layout/page-layout';

import {AvatarSection} from './avatar-section';
import {UserInfoSection} from './user-info-section';

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
                <AvatarSection />
                <UserInfoSection />
            </Stack>
        </PageLayout>
    );
};

export default ProfilePage;
