import {Box} from '@mui/material';
import React from 'react';

import {LoginForm} from './components/login-form';

const LoginPage = (): React.JSX.Element => {
    return (
        <Box>
            <LoginForm />
        </Box>
    );
};

export default LoginPage;
