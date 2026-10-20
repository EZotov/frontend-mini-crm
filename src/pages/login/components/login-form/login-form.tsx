import {Stack, Typography} from '@mui/material';

import {Container} from '~/components/container';
import {SmartButton} from '~/components/smart-button';
import {FormController, useFormController} from '~/form/form-controller';
import {TextFieldController} from '~/form/input-controllers';
import {SxMapProps} from '~/types';

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
    const form = useFormController<LoginType>(LoginSchema);

    return (
        <Container sx={styles.container}>
            <Stack spacing={2}>
                <Typography component="h2" align="center" sx={{fontSize: 20}}>
                    Вход
                </Typography>

                <FormController {...form} onSubmit={() => null}>
                    <TextFieldController name="email" label="Email" />
                    <TextFieldController name="password" label="Пароль" type="password" />
                </FormController>

                <SmartButton fullWidth size="large">
                    Войти
                </SmartButton>
            </Stack>
        </Container>
    );
};
