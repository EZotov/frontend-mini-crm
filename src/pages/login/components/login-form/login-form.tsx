import {Stack, Typography} from '@mui/material';
import {useUnit} from 'effector-react';

import {Container} from '~/components/container';
import {SmartButton} from '~/components/smart-button';
import {FORM_ACTION, FormController, useFormController} from '~/form/form-controller';
import {TextFieldController} from '~/form/input-controllers';
import {SxMapProps} from '~/types';

import {$isLoginSubmitting, loginEvent} from '../../models/login';
import {LoginSchema, LoginType} from './schema';

const styles: SxMapProps<'container'> = {
    container: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translateX(-50%)',
        minWidth: 620,
    },
};

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
        <Container sx={styles.container}>
            <FormController {...form} onSubmit={login} hideActions>
                <Stack direction="column" spacing={2}>
                    <Typography component="h2" align="center" sx={{fontSize: 20}}>
                        Вход
                    </Typography>

                    <TextFieldController name="email" label="Email" />
                    <TextFieldController name="password" label="Пароль" type="password" />

                    <SmartButton
                        fullWidth
                        size="large"
                        isSubmitting={isLoginSubmitting}
                        disabled={isSubmitted && !isValid}
                    >
                        Войти
                    </SmartButton>
                </Stack>
            </FormController>
        </Container>
    );
};
