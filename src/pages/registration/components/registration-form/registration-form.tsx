import {Box, Stack, Typography} from '@mui/material';
import {useUnit} from 'effector-react';

import {BackButton} from '~/components/back-button';
import {SmartButton} from '~/components/smart-button';
import {FORM_ACTION, FormController, useFormController} from '~/form/form-controller';
import {TextFieldController} from '~/form/input-controllers';
import {ROUTE_PATHS} from '~/router/paths';

import {$isRegistrationSubmitting, registrationEvent} from '../../models/registration';
import {RegistrationSchema, RegistrationType} from './schema';

export const RegistrationForm = (): React.JSX.Element => {
    const [registration, isRegistrationSubmitting] = useUnit([registrationEvent, $isRegistrationSubmitting]);

    const form = useFormController<RegistrationType>(RegistrationSchema, {
        action: FORM_ACTION.CREATE,
        defaultValues: {
            email: '',
            lastName: '',
            firstName: '',
            patronymic: '',
            password: '',
            confirmPassword: '',
        },
    });

    const {
        formState: {isSubmitted, isValid},
    } = form;

    return (
        <FormController<RegistrationType>
            {...form}
            onSubmit={(data) =>
                registration({
                    ...data,
                    patronymic: data?.patronymic ? data.patronymic : undefined,
                })
            }
            hideActions
        >
            <Stack direction="column" spacing={2} sx={{position: 'relative'}}>
                <Stack
                    direction="row"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        pl: '36px',
                        height: '42px',
                        borderBottom: '1px solid #33333375',
                        pb: 1,
                    }}
                >
                    <BackButton to={ROUTE_PATHS.LOGIN} sx={{position: 'absolute', left: 0, top: 0}} />
                    <Typography component="h2" align="center" sx={{fontSize: 20, flexGrow: 1}}>
                        Регистрация нового пользователя
                    </Typography>
                </Stack>

                <Box sx={{backgroundColor: '', p: 2}}>
                    <Typography component="p" align="center" sx={{fontSize: 16}}>
                        Вы будете зарегистрированы как обычный пользователь. Если вам нужны права менеджера или админа -
                        создайте заявку на доступ или обратитесь к администраторам системы
                    </Typography>
                </Box>

                <TextFieldController<RegistrationType> name="email" label="Email" />
                <TextFieldController<RegistrationType> name="lastName" label="Фамилия" />
                <TextFieldController<RegistrationType> name="firstName" label="Имя" />
                <TextFieldController<RegistrationType> name="patronymic" label="Отчество" />
                <TextFieldController<RegistrationType> name="password" label="Пароль" type="password" />
                <TextFieldController<RegistrationType>
                    name="confirmPassword"
                    label="Подтвердите пароль"
                    type="password"
                />

                <SmartButton
                    fullWidth
                    size="large"
                    isSubmitting={isRegistrationSubmitting}
                    disabled={isSubmitted && !isValid}
                >
                    Зарегистрироваться
                </SmartButton>
            </Stack>
        </FormController>
    );
};
