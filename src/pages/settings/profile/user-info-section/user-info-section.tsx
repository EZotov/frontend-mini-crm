import {Stack, Typography} from '@mui/material';
import React from 'react';

import {Container} from '~/components/container';

export const UserInfoSection = (): React.JSX.Element => {
    return (
        <Container sx={{flexGrow: 1, py: 2}} smallPadding>
            <Stack direction="column">
                <Typography component="h3" variant="h3" align="center">
                    Информация о вашем профиле
                </Typography>
            </Stack>
        </Container>
    );
};
