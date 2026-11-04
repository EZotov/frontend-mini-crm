import {Stack, Typography} from '@mui/material';
import React from 'react';

import {Container} from '~/components/container';

export const AvatarSection = (): React.JSX.Element => {
    return (
        <Container sx={{flexBasis: 420, flexShrink: 0}} smallPadding>
            <Stack direction="column">
                <Typography component="h3" variant="h3" align="center">
                    Аватар
                </Typography>
            </Stack>
        </Container>
    );
};
