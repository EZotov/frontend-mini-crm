import {Box, Stack, Typography} from '@mui/material';
import React, {useState} from 'react';

import {Container} from '~/components/container';
import {onErrorUserAvatarHandler} from '~/utils/helpers';

export const AvatarSection = (): React.JSX.Element => {
    const [isAvatarLoading, setIsAvatarLoading] = useState<boolean>(false);

    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsAvatarLoading(false);
        onErrorUserAvatarHandler(event);
    };

    return (
        <Container sx={{flexBasis: 420, flexShrink: 0}} smallPadding>
            <Stack direction="column" spacing={2}>
                <Typography component="h3" variant="h3" align="center">
                    Аватар
                </Typography>
                <Container isTransparent isLoading={isAvatarLoading}>
                    <Box
                        component="img"
                        src=""
                        sx={{width: '100%', height: 300}}
                        onLoad={() => setIsAvatarLoading(false)}
                        onLoadStart={() => setIsAvatarLoading(true)}
                        onError={handleError}
                    />
                </Container>
            </Stack>
        </Container>
    );
};
