import React from 'react';

import {Container} from '~/components/container';
import type {SxMapProps} from '~/styles/types';

import {LoginForm} from './components/login-form';

const styles: SxMapProps<'container'> = {
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 420,
        maxWidth: 840,
    },
};

const LoginPage = (): React.JSX.Element => {
    return (
        <Container sx={styles.container}>
            <LoginForm />
        </Container>
    );
};

export default LoginPage;
