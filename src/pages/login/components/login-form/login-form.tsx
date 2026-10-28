import {Button, Stack, Typography} from '@mui/material';
import {useUnit} from 'effector-react';
import {Link} from 'react-router-dom';

import {SmartButton} from '~/components/smart-button';
import {FORM_ACTION, FormController, useFormController} from '~/form/form-controller';
import {TextFieldController} from '~/form/input-controllers';
import {ROUTE_PATHS} from '~/router/paths';

import {$isLoginSubmitting, loginEvent} from '../../models/login';
import {LoginSchema, LoginType} from './schema';

export const LoginForm = (): React.JSX.Element => {
    const [login, isLoginSubmitting] = useUnit([loginEvent, $isLoginSubmitting]);
    const form = useFormController<LoginType>(LoginSchema, {
        action: FORM_ACTION.CREATE,
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const {
        formState: {isSubmitted, isValid},
    } = form;

    return (
        <FormController<LoginType> {...form} onSubmit={login} hideActions>
            <Stack direction="column" spacing={2}>
                <Typography component="h2" align="center" sx={{fontSize: 20}}>
                    Вход
                </Typography>

                <TextFieldController<LoginType> name="email" label="Email" />
                <TextFieldController<LoginType> name="password" label="Пароль" type="password" />

                <SmartButton fullWidth size="large" isSubmitting={isLoginSubmitting} disabled={isSubmitted && !isValid}>
                    Войти
                </SmartButton>

                <Button component={Link} to={ROUTE_PATHS.REGISTRATION} variant="text">
                    Нет учётной записи? Зарегистрируйтесь!
                </Button>
            </Stack>
        </FormController>
    );
};
