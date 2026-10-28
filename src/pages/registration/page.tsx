import React from 'react';

import {Container} from '~/components/container';
import {SxMapProps} from '~/types';

import {RegistrationForm} from './components/registration-form';

const styles: SxMapProps<'container'> = {
    container: {
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        minWidth: 420,
        maxWidth: 840,
    },
};

const RegistrationPage = (): React.JSX.Element => {
    return (
        <Container sx={styles.container}>
            <RegistrationForm />
        </Container>
    );
};

export default RegistrationPage;
